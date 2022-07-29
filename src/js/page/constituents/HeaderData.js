class HeaderData {
  constructor(person) {
    this.person = person;
  }

  updateHeader() {
    document.querySelector('h2').innerText = this.person.name;
    document.querySelector('.position').innerText = this.person.position;
  }
}

export default HeaderData;
