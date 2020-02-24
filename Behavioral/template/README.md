# Template

Official description of the **Template** pattern
> Define the skeleton of an algorithm in an operation, deferring some steps to subclasses.\
> Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

---

A template method defines the steps of an algorithm and allows subclasses to provide the implementation for one or more steps.\
The definition and (part) implementation of the algorithm is inside our ‘template’ class.\
Very similar to the strategy pattern. Difference is that the template pattern encapsulates algorithms by inheritance and strategy by composition.
