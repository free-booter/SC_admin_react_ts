class Dog {
  constructor(config) {
    this.name = config.name;

    this.bark = function() {
      console.log(`Wah wah, I am ${this.name}`);
    }

    this.bark = config.bark || this.bark;
  }
}

const dog = new Dog({ name: 'Snoopy' });
dog.bark(); // Wah wah, I am Snoopy

const dog2 = new Dog({ name: 'Snoopy', bark: () => console.log('Wuff Wuff') });
dog2.bark(); // Wuff Wuff
