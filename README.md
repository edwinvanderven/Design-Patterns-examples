# Design Patterns examples

Various implementations of different design patterns.

## Introduction

This repository is my attempt to make sense of different design patterns, including tangible examples.\
Every design pattern and code examples will be located into its own subfolder.

### Code Examples

:information_source: Make sure to have [Node and NPM](https://www.npmjs.com/get-npm) installed.

Inside a terminal run the following commands

```sh
npm install -g typescript
npm install -g ts-node
```

Inside a terminal, navigate to the folder with the code example and run the following command

```sh
ts-node index.ts
```

## Design Patterns

| Creational                                      | Structural                        | Behavioral                                                    |
| ----------------------------------------------- | --------------------------------- | ------------------------------------------------------------- |
| [Abstract Factory](Creational/abstract-factory) | [Adapter](Structural/adapter)     | [Chain of Responsibility](Behavioral/chain-of-responsibility) |
| [Builder](Creational/builder)                   | [Bridge](Structural/bridge)       | [Command](Behavioral/command)                                 |
| [Factory Method](Creational/factory-method)     | [Composite](Structural/composite) | [Interpreter](Behavioral/interpreter)                         |
| [Prototype](Creational/prototype)               | [Decorator](Structural/decorator) | [Iterator](Behavioral/iterator)                               |
| [Singleton](Creational/singleton)               | [Facade](Structural/facade)       | [Mediator](Behavioral/mediator)                               |
|                                                 | [Flyweight](Structural/flyweight) | [Memento](Behavioral/memento)                                 |
|                                                 | [Proxy](Structural/proxy)         | [Observer](Behavioral/observer)                               |
|                                                 |                                   | [State](Behavioral/state)                                     |
|                                                 |                                   | [Strategy](Behavioral/strategy)                               |
|                                                 |                                   | [Template](Behavioral/template)                               |
|                                                 |                                   | [Visitor](Behavioral/visitor)                                 |

## Design Principles

Design principles are not patterns but can be used as mental reminders when designing software.

- Encapsulate what varies.
- Favor composition over inheritance.
- Program to interfaces, not implementations.
- Strive for loosely coupled designs between objects that interact.
- Classes should be open for extension but closed for modification.
- Depend upon abstractions. Do not depend upon concrete classes.
- The Least amount of Knowledge; Only talk to your immediate friends.
- Don’t call us, we’ll call you.
- A class should have only one reason to change.

## Sources

- [Head First Design Patterns - O'REILLY](https://www.oreilly.com/library/view/head-first-design/0596007124)
- [WikiBooks - Design Patterns](https://en.m.wikibooks.org/wiki/Introduction_to_Software_Engineering/Architecture/Design_Patterns)
- [Refactoring Guru](https://refactoring.guru)
- [Source Making](https://sourcemaking.com)
- [Geeks for Geeks - Design Patterns](https://www.geeksforgeeks.org/software-design-patterns)
