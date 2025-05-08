# Difference between interface and type in TypeScript ?

TypeScript, a superset of JavaScript, brings static typing to our code. Two powerful tools it offers for defining data structures are interface and type.
There are 
1. Interface
2. Type 

## What Is an Interface?
An interface defines the shape of an object. It's great for describing classes, function contracts, and object structures

### Example
``` 
interface User {
  name: string;
  age: number;
}
```

## What Is a Type Alias?
A type can describe everything an interface can — plus more. It can represent objects, primitives, unions, tuples, and intersections.

### Example
``` 
type User = {
  name: string;
  age: number;
};
```



## Key Differences Between Interface and Type

| Feature                          | `interface`         | `type`             |
|----------------------------------|---------------------|--------------------|
| 1. Used for object shape         | ✅ Yes              | ✅ Yes             |
| 2. Supports union types          | ❌ No               | ✅ Yes             |
| 3. Can define tuples/primitives  | ❌ No               | ✅ Yes             |
| 4. Extending/Inheritance         | ✅ `extends`        | ✅ Intersection    |
| 5. Declaration merging           | ✅ Yes              | ❌ No              |
| 6. Implementable in classes      | ✅ Yes              | ✅ Yes             |



 ## When Should You Use Each?
### Use interface when:

1. You're defining object structures.

2. You want declaration merging or extending interfaces.

3. You’re working with class-based OOP.

### Use type when:

1. You need to define unions, primitives, or tuples.

2. You want to compose multiple types.

3. You’re using utility types or creating more complex types.


# Final Thoughts
Both interface and type are tools to help you write better, more maintainable TypeScript code. The differences are mostly stylistic and syntactic, but in larger codebases, choosing the right one can lead to cleaner and more scalable architecture



## Blog 2

# Understanding the keyof Keyword in TypeScript

In TypeScript, the type system is powerful — and sometimes a bit magical. One of the most useful tools in your TypeScript toolkit is the keyof keyword. If you've ever wanted to build type-safe utilities or generics that adapt to object shapes, keyof is your best friend.

## What is keyof?
The keyof keyword is a TypeScript type operator that takes an object type and returns a union of its keys as string or sometimes number literal types.

### Example: Simple Usage?

````ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 25 };

const name = getProperty(user, "name"); // ✅ OK
const email = getProperty(user, "email"); // ❌ Error if 'email' is not a key
````
Now PersonKeys is a union type of all the keys in Person.

## Why is keyof Useful?

### 1. Type-Safe Key Access
Let’s say you want to write a utility function to get a value from an object by its key. You want to make sure only valid keys are allowed.
````
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 25 };

const name = getProperty(user, "name"); // ✅ OK
const email = getProperty(user, "email"); // ❌ Error if 'email' is not a key
````
### 2. Building Generic Utilities
You can combine keyof with other type utilities like Pick, Record, and conditional types to build reusable and flexible logic.
````
type OnlyName = Pick<Person, "name">;
// Result: { name: string }
````

### Summary

| Feature                  | Description                              |
|--------------------------|------------------------------------------|
| 1. Used for object shape | Extracts keys of an object type          |
| 2. Returns               | A union of string/number literal types   |
| 3. Used with	           | Generics, Pick, Record, in mappings      |
| 4. Benefits	             | Type safety, better tooling, fewer bugs  |
