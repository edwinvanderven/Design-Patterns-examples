class Prototype {
  public primitive: number;
  public component: Date;

  public clone(): this {
      const clone = Object.create(this);
      clone.component = Object.create(this.component);
      return clone;
  }
}

class ComponentWithBackReference {
  public prototype;

  constructor(prototype: Prototype) {
      this.prototype = prototype;
  }
}

const p1 = new Prototype();
p1.primitive = 245;
p1.component = new Date();
const p2 = p1.clone();

console.log('My cloned objects are equal: ', p1 === p2);
console.log('Primitive field of object1 is equal to primitive field of object2: ', p1.primitive === p2.primitive);
console.log('Component property of object1 is equal to component property of object2: ', p1.component === p2.component);
