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

  createAside() {

  }

  createMain() {
    document.querySelector('.about .container p').innerText = this.person.about;
    document.querySelector('.education .container h3').innerText = this.person.education[0];
     
    this.education = this.person.education.filter((el,i) => i).map(el => `<li>${el}</li>`).join('');
    this.education = `<ul>${this.education}</ul>`;
    document.querySelector('.education .container p').innerHTML = this.education;

    // document.querySelector('.experience .container p').innerText = this.person.experience;
  }

  make() {
    this.createMain();
    this.createHeader();
    return this;
  }
}

export default Page;