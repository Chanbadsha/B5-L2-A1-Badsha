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

# The keyof keyword use in TypeScript
The keyof keyword in TypeScript is a type operator that returns a union of all property names keys of a given type as string or number literals.

### Use Case of keyof
It is mainly used for:
1. Creating types that are constrained to the keys of another type.
2. Building generic utility types.
3. Ensuring type-safe property access.

### Syntax

``` 
| Feature |
|---------|
keyof Type
