// const person = {

//     firstName: ' ',
//     lastName:  ' ',
//     get fullName(){
//         return `${person.firstName} ${person.lastName}`
//     },

//     set fullName(value) {
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
    
  
// };

 
// const john = Object.create(person);
// const simon = Object.create(person);


const person = {
    get firstName() {
      return this._firstName;
    },
    set firstName(v) {
      this._firstName=v;
    },
    get lastName() {
      return this._lastName;
    },
    set lastName(v) {
      this._lastName=v;
    },
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }

  const john=Object.create(person);
  const simon=Object.create(person);
  john.firstName= "John";
  john.lastName= "Doe";
  simon.firstName= "Simon";
  simon.lastName= "Collins";
  
  console.log(john.fullName()); // John Doe
  console.log(simon.fullName()); // Simon Collins


