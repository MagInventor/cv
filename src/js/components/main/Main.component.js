class Main {
  constructor() {
    this.main = document.createElement('main');
    this.main.classList.add('field', 'field-main');
    this.container = document.createElement('div');
    this.container.classList.add('container');
  }

  addMain() {
    this.main.append(this.container);
    return this.main;
  }
}

export default Main;
