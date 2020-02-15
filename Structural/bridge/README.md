# Bridge

Official description of the **Bridge** pattern

> Decouple an abstraction from its implementation allowing the two to vary independently.

---

This can be used to divide business logic into separate classes.\
One the these classes (the Abstraction) will get a reference to another object (the Implementation).\
The abstraction can then delegate some of its logic to the implemention.\
Every implementation should have a common interface, making these classes interchangeable.
