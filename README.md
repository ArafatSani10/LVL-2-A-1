# TypeScript ব্লগ পোস্ট

## Interface এবং Type এর মধ্যে পার্থক্য

TypeScript-এ আমরা `interface` এবং `type` দুটোই ব্যবহার করতে পারি। তবে কিছু পার্থক্য আছে:

1. **Extensibility (বর্ধনক্ষমতা):**  
   - `interface` সহজে **extends** করা যায়।  
   - `type` union বা intersection টাইপের মাধ্যমে বর্ধিত করা যায়।  

2. **Declaration Merging:**  
   - একই নামের interface merge হয়।  
   - type পুনরায় ঘোষণা করলে error হয়।  

**উদাহরণ:**

```ts
interface User {
    id: number;
    name: string;
}

type UserType = {
    id: number;
    name: string;
};



## ২. keyof কীওয়ার্ডের ব্যবহার

TypeScript-এ `keyof` এমন একটি keyword যা কোনো object type-এর সবগুলো property name-এর union type হিসেবে বের করে আনে। এতে আমরা object-এর কোন কোন property আছে সেটা type লেভেলেই জানতে পারি এবং ভুল key ব্যবহার করার সুযোগ কমে যায়।  

### উদাহরণ


```ts
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person;  "name" | "age" | "email"

const k1: PersonKeys = "name"; 
const k2: PersonKeys = "email";
// const k3: PersonKeys = "address"; // Error

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user: Person = {
  name: "Arafat",
  age: 22,
  email: "arafat@gmail.com"
};

const a = getValue(user, "name");
const b = getValue(user, "age");
// const c = getValue(user, "wrongKey"); // Error
