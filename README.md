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

| You're defining object structures.

You want declaration merging or extending interfaces.

You’re working with class-based OOP.

Use type when:

You need to define unions, primitives, or tuples.

You want to compose multiple types.

You’re using utility types or creating more complex types.