// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;

// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
    this.introduction = () => {
       console.log(`Hi, My name is ${name} and I love ${tech}!`)
    }
};

// TODO: Create a new object using the 'Developer' constructor
const mike = new Developer("Mike", "CSS");
const nat = new Developer('Natacha', 'my husband');
// TODO: Call the 'introduction()' method on the new object
mike.introduction();
nat.introduction();