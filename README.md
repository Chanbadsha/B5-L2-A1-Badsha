# Difference between interface and type in TypeScript ?

TypeScript, a superset of JavaScript, brings static typing to our code. Two powerful tools it offers for defining data structures are interface and type.
There are 
1. Interface
2. Type 

## What Is an Interface?
An interface defines the shape of an object. It's great for describing classes, function contracts, and object structures

```  Example
interface User {
  name: string;
  age: number;
}