export class User {
    lastName: string;
    firstName: string;
    birthdate: string;
    avatar: string;  

  constructor(lastName, firstName, birthdate, avatar) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.birthdate = birthdate;
    this.avatar = avatar;
  }

  get age() {
    let currentDate = (new Date('2019-11-18')).getTime();
    let birthdate = (new Date(('1989-05-23')).getTime());
    let timeDiff = currentDate - birthdate;
    let age = (new Date(timeDiff)).getFullYear() - 1970;

    return age;
  }
}