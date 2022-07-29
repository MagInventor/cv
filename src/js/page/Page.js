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
    document.querySelector('.about .container h3').innerText = this.person.about[0];
    this.about = this.person.about.filter((el,i) => i).join('');
    document.querySelector('.about .container p').innerHTML = this.about;

    document.querySelector('.education .container h3').innerText = this.person.education[0];
    this.education = this.person.education.filter((el,i) => i).map(el => `<li>${el}</li>`).join('');
    this.education = `<ul>${this.education}</ul>`;
    document.querySelector('.education .container p').innerHTML = this.education;

    document.querySelector('.experience .container h3').innerText = this.person.experience[0];
    this.experience = this.person.experience.filter((el,i) => i);
    this.experience = this.experience.map(el => `${el.join('')}<br><br>`).join('');
    document.querySelector('.experience .container p').innerHTML = this.experience;
  }

  make() {
    this.createMain();
    this.createHeader();
    return this;
  }
}

export default Page;