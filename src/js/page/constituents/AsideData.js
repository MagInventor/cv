class AsideData {
  constructor(person) {
    this.person = person;
  }

  addContacts() {
    document.querySelector('.contacts .aside-container h3').innerText = this.person.contacts[0];

    this.contacts = this.person.contacts.filter((el, i) => i);
    this.contacts = this.contacts.map(el => `<li><h4>${el[0]}</h4><p>${el[1]}</p></li>`).join('');
    document.querySelector('.contacts .aside-container ul').innerHTML = this.contacts;

  }

  addSkills() {
    document.querySelector('.skills .aside-container h3').innerText = this.person.skills[0];
    this.skills = this.person.skills[1].map(el => `<li>${el}</li>`).join('');
    document.querySelector('.skills .aside-container ul').innerHTML = this.skills;
  }

  updateAside() {
    this.addContacts();
    this.addSkills();
  }
}

export default AsideData;
