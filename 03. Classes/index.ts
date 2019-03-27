class Animal {
  constructor(protected name: string) {}

  sleep() {
    console.log('Sleeping...');
  }
}

class Dog extends Animal {
  private _age: number;
  private _color: string;

  constructor(name: string, age: number, color: string) {
    super(name);
    this._age = age;
    this._color = color;
  }

  get age(): number {
    return this._age;
  }

  set color(value: string) {
    this._color = value;
  }

  dream() {
    super.sleep();
    console.log(this.name, 'Dreaming...');
  }
}

let cat = new Dog('meow', 2, 'while');
cat.sleep();
cat.dream();