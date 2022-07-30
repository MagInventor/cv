class MainData {
  constructor(person) {
    this.person = person;
  }

  addAbout() {
    document.querySelector('.about .container h2').innerText = this.person.about[0];
    this.about = this.person.about.filter((el,i) => i).join('');
    document.querySelector('.about .container p').innerHTML = this.about;
  }

  addEducation() {
    document.querySelector('.education .container h2').innerText = this.person.education[0];
    this.education = this.person.education.filter((el,i) => i).map(el => `<li>${el}</li>`).join('');
    this.education = `<ul>${this.education}</ul>`;
    document.querySelector('.education .container p').innerHTML = this.education;
  }

  addExperience() {
    document.querySelector('.experience .container h2').innerText = this.person.experience[0];
    this.experience = this.person.experience.filter((el,i) => i);
    this.experience = this.experience.map(el => `${el.join('')}<br><br>`).join('');
    document.querySelector('.experience .container p').innerHTML = this.experience;  
  }

  updateMain() {
    this.addAbout();
    this.addEducation();
    this.addExperience();
  }
}

export default MainData;
