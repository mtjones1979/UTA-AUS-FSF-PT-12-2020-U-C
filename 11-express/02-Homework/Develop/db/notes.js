const util = require("util");
const fs = require("fs");

// if I use UUID - I would require it here 
// read note, write note, get notes, add note, remove note functions
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Note {
    constructor() {
    this.idNum = 0;
  }
  read(){
    return readFileAsync('db/db.json', 'utf8');
  }
  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note))
  }
  getNotes() {
    console.log('get notes')
    return this.read().then(notes => {
      console.log(notes)
      let notesArr;
      try{
        notesArr = [].concat(JSON.parse(notes));
      }
      catch(err){
        notesArr = [];
      }
      return notesArr;
    })
  }
  addNotes(note) {
    console.log('add notes');
    const {title, text} = note;
    const newNote = {title, text, id: ++this.idNum}
    return this.getNotes()
      .then(notes => [...notes, newNote])
      .then(updateNotes => this.write(updateNotes))
      .then(() => newNote)
  }
  removeNotes(id) {
    console.log("remove notes");
    return this.getNotes()
      .then(notes => notes.filter(note => note.id !== parseInt(id)))
      .then(updatedNotes => this.write(updatedNotes))
    }
        
}

module.exports = new Note();