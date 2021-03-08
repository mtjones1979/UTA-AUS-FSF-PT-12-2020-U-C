// TODO: Import the parent class
const vehicle = require('./vehicle');
// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor (id, color, passengers){
    this.color = color;
    this.passengers = passengers;
  super (id, numberOfWheels, sound);
      const numberOfWheels = 4;
      const sound = beep;
    }
}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
