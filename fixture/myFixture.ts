import { test as myTest } from "playwright/test";

// type cosmin = {
//     age: number;
//     email: string;
// }
const myFixtureTest = myTest.extend<{
    age: number;
    email: string;
}>({
    age: 30,
    email: "test@yopmail.com"
})

export const it = myFixtureTest;