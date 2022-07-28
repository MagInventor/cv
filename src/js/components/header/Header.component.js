class Header {
  constructor() {
    this.header = document.createElement('header');
    this.header.classList.add('field', 'field-header');
    this.container = document.createElement('div');
    this.container.classList.add('container');
  }

  addHeader() {
    this.header.append(this.container);
    return this.header;
  }
}

export default Header;
