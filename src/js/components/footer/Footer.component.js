class Footer {
  constructor() {
    this.footer = document.createElement('footer');
    this.footer.classList.add('field', 'field-footer');
    this.container = document.createElement('div');
    this.container.classList.add('container');
  }

  addFooter() {
    this.footer.append(this.container);
    return this.footer;
  }
}

export default Footer;
