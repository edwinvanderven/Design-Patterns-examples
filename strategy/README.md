# Strategy

Official description of the **Strategy** pattern
> Define a family of algorithms, encapsulate each one, and make them interchangeable.\
> Strategy lets the algorithm vary independently from clients that use it.

---

**Strategy** means dividing responsibility to behavior. You can then implement this behavior per object.\
The original object, called context, holds a reference to the behavior and delegates its execution.\
In order to change the way the context performs its work, other objects may replace the currently strategy object.
