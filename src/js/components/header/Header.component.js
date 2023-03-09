class Header {
  constructor() {
    this.header = document.createElement('header');
    this.header.classList.add('field', 'field-header');
    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.h1 = document.createElement('h1');
    this.personName = document.createElement('p');
    this.personName.classList.add('person-name');
    this.personPosition = document.createElement('p');
    this.personPosition.classList.add('person-position');
  }

  createTitle() {
    this.h1.insertAdjacentText('beforeend', 'CV');
    return this;
  }

  addHeader() {
    this.createTitle();
    this.header.append(this.h1);
    this.header.append(this.container);
    this.container.append(...[this.personName, this.personPosition]);
    return this.header;
  }
}

export default Header;
