class Aside {
  constructor() {
    this.aside = document.createElement('aside');
    this.aside.classList.add('field', 'field-aside');
    this.container = document.createElement('div');
    this.container.classList.add('aside-container','container');
  }

  addAside() {
    this.aside.append(this.container);
    return this.aside;
  }
}

export default Aside;
