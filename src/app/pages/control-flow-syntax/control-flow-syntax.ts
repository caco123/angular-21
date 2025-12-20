import { Component } from '@angular/core';
import { Person } from '../signals/signals';

@Component({
  selector: 'app-control-flow-syntax',
  imports: [],
  templateUrl: './control-flow-syntax.html',
  styleUrl: './control-flow-syntax.scss',
})
export class ControlFlowSyntax {
  users: AppUser[] = [
    { name: 'John', age: 30, img: 'https://randomuser.me/api/portraits/men/1.jpg', occupation: Occupation.Student },
    { name: 'Jane', age: 25, img: 'https://randomuser.me/api/portraits/women/1.jpg', occupation: Occupation.Teacher },
    { name: 'Bob', age: 40, img: 'https://randomuser.me/api/portraits/men/2.jpg', occupation: Occupation.Doctor },
    { name: 'Alice', age: 35, img: 'https://randomuser.me/api/portraits/women/2.jpg', occupation: Occupation.Engineer },
    { name: 'Charlie', age: 50, img: 'https://randomuser.me/api/portraits/men/3.jpg', occupation: Occupation.Lawyer },
    { name: 'Diana', age: 28, img: 'https://randomuser.me/api/portraits/women/3.jpg', occupation: Occupation.Other },
    { name: 'Eve', age: 32, img: 'https://randomuser.me/api/portraits/women/4.jpg', occupation: Occupation.Student },
    { name: 'Frank', age: 45, img: 'https://randomuser.me/api/portraits/men/4.jpg', occupation: Occupation.Teacher },
    { name: 'Grace', age: 22, img: 'https://randomuser.me/api/portraits/women/5.jpg', occupation: Occupation.Doctor },
    { name: 'Hank', age: 38, img: 'https://randomuser.me/api/portraits/men/5.jpg', occupation: Occupation.Engineer },
    { name: 'Ivy', age: 42, img: 'https://randomuser.me/api/portraits/women/6.jpg', occupation: Occupation.Lawyer },
    { name: 'Jack', age: 27, img: 'https://randomuser.me/api/portraits/men/6.jpg', occupation: Occupation.Other },
    { name: 'Jill', age: 33, img: 'https://randomuser.me/api/portraits/women/7.jpg', occupation: Occupation.Student },
    { name: 'Karl', age: 48, img: 'https://randomuser.me/api/portraits/men/7.jpg', occupation: Occupation.Teacher },
    { name: 'Lily', age: 26, img: 'https://randomuser.me/api/portraits/women/8.jpg', occupation: Occupation.Doctor },
    { name: 'Mark', age: 36, img: 'https://randomuser.me/api/portraits/men/8.jpg', occupation: Occupation.Engineer },
    { name: 'Nancy', age: 29, img: 'https://randomuser.me/api/portraits/women/9.jpg', occupation: Occupation.Lawyer },
    { name: 'Oscar', age: 43, img: 'https://randomuser.me/api/portraits/men/9.jpg', occupation: Occupation.Other },
    { name: 'Patty', age: 24, img: 'https://randomuser.me/api/portraits/women/10.jpg', occupation: Occupation.Student },
    { name: 'Quinn', age: 31, img: 'https://randomuser.me/api/portraits/women/11.jpg', occupation: Occupation.Teacher },
    { name: 'Ryan', age: 46, img: 'https://randomuser.me/api/portraits/men/11.jpg', occupation: Occupation.Doctor },
    { name: 'Sara', age: 23, img: 'https://randomuser.me/api/portraits/women/12.jpg', occupation: Occupation.Engineer },
    { name: 'Tom', age: 39, img: 'https://randomuser.me/api/portraits/men/12.jpg', occupation: Occupation.Lawyer },
    { name: 'Uma', age: 21, img: 'https://randomuser.me/api/portraits/women/13.jpg', occupation: Occupation.Other },
    { name: 'Victor', age: 41, img: 'https://randomuser.me/api/portraits/men/13.jpg', occupation: Occupation.Student },
    { name: 'Wendy', age: 28, img: 'https://randomuser.me/api/portraits/women/14.jpg', occupation: Occupation.Teacher },
    { name: 'Xavier', age: 34, img: 'https://randomuser.me/api/portraits/men/14.jpg', occupation: Occupation.Doctor },
    { name: 'Yvonne', age: 20, img: 'https://randomuser.me/api/portraits/women/15.jpg', occupation: Occupation.Engineer },
    { name: 'Zack', age: 47, img: 'https://randomuser.me/api/portraits/men/15.jpg', occupation: Occupation.Lawyer },
  ];

  occupations = Occupation;

  color: Record<Occupation, string> = {
    [Occupation.Student]: 'blue',
    [Occupation.Teacher]: 'green',
    [Occupation.Doctor]: 'red',
    [Occupation.Engineer]: 'yellow',
    [Occupation.Lawyer]: 'purple',
    [Occupation.Other]: 'orange',
  };
}


export interface AppUser extends Person {
  img: string;
  occupation: Occupation;
}

export enum Occupation {
  Student,
  Teacher,
  Doctor,
  Engineer,
  Lawyer,
  Other
}

