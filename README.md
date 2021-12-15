# Type-Script Solid
# Dated : 14/12/2021

##### SOLID is an acronym for the first five object-oriented design (OOD) principles by Robert C. Martin

````

SOLID stands for:

S - Single-responsiblity Principle
O - Open-closed Principle
L - Liskov Substitution Principle
I - Interface Segregation Principle
D - Dependency Inversion Principle

````

# Day 01 :clock11:
### Single-responsiblity Principle

> A class should have one and only one reason to change, meaning that a class should have only one job. 

- Separate classes for every object.
- Refactor the code.

### Open-closed Principle

````
Classes should be open for extension, but closed for modification.
````

### Liskov substitution principle
 ````
Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."
````
- This part was difficult for me but I got help from Tim he explained me really well because I got stuck at this point and mixing all the concept but I'm glad that I did it.
- Small things matters. ;p


# Day 02 :clock9:

### Interface Segregation Principle

````
This principle states that classes should never implement interfaces that they don’t need to use. If they do, we’ll end up having not implemented methods in our classes. This can be solved creating specific interfaces instead of general-purpose interfaces.

````
- Fo this simply I created two interfaces one for user and anothe one is for admin and use only that authentication mechanism that is required.
- Then create a class for admin and user and import that interfaces.

### Dependency Inversion Principle


>Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions.
This principle states that a class should not depend on another class, but instead on an abstraction of that class. It allows loose-coupling and more reusability.




