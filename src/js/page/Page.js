import Person from "../person/Person";
import enData from "../data/enData";

class Page {
  constructor() {
    this.person = new Person(enData);
  }

  createHeader() {
    document.querySelector('h2').innerText = this.person.name;
    document.querySelector('.position').innerText = this.person.position;
  }

  make() {
    this.createHeader();
    return this;
  }
}

export default Page;