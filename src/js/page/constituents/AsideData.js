class AsideData {
  constructor(person) {
    this.person = person;
  }

  addContacts() {
    this.contacts = this.person.contacts.map(el => `<li><h4>${el[0]}</h4><p>${el[1]}</p></li>`);
    this.contacts = `<ul>${this.contacts.join('')}</ul>`
    document.querySelector('.contacts .aside-container').innerHTML = this.contacts;

  }

  addSkills() {
    this.skills = this.person.skills[1].map(el => `<li>${el}</li>`).join('');
    this.skills = `<ul>${this.skills}</ul>`;
    document.querySelector('.skills .aside-container').innerHTML = this.skills;
  }

  updateAside() {
    this.addContacts();
    this.addSkills();
  }
}

export default AsideData;
