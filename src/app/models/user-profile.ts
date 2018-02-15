export class UserProfile {
  name: string;
  age: number;
  ocupation: string;
  hobby: string;
  picture_url: string;

  constructor(
    name: string,
    age: number,
    ocupation: string,
    hobby: string,
    picture_url: string
  ) {
    this.name = name;
    this.age = age;
    this.ocupation = ocupation;
    this.hobby = hobby;
    this.picture_url = picture_url;
  }

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
