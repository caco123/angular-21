import { signal } from "@angular/core";
import { Person } from "../pages/signals/signals";

export const person = signal<Person>({
    age: 25,
    name: 'John Doe',
});