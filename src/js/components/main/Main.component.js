class Main {
  constructor() {
    this.main = document.createElement('main');
    this.main.classList.add('field', 'field-main');
    this.about = this.createSection('about');
    this.experience = this.createSection('experience');
    this.education = this.createSection('education');
  }

  createSection(nameSection) {
    this.section = document.createElement('section');
    this.section.classList.add(nameSection);
    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.section.append(this.container);
    return this.section;
  }

  addMain() {
    this.main.append(...[this.about, this.experience, this.education]);
    return this.main;
  }
}

export default Main;
