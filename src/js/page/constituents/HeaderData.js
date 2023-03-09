class HeaderData {
  constructor(person) {
    this.person = person;
  }

  updateHeader() {
    document.querySelector('.person-name').innerText = this.person.name;
    document.querySelector('.person-position').innerText = this.person.position;
  }
}

export default HeaderData;
