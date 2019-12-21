# Strategy

Official description of the **Strategy** pattern
> Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

---

To me, **Strategy** means dividing responsibility to behavior. You can then implement this behavior per object.

In the example I have different animals with different behaviors.
Performing the behavior is something every animal can do. What the behavior should be differs for each animal and could even change during runtime.
