class Main {
  constructor() {
    this.main = document.createElement('main');
    this.main.classList.add('field', 'field-main');
    this.about = this.createSection('about');
    this.education = this.createSection('education');
    this.experience = this.createSection('experience');
  }

  createSection(nameSection) {
    this.section = document.createElement('section');
    this.section.classList.add(nameSection);
    this.container = document.createElement('div');
    this.container.classList.add('container');

    this.titleSection = document.createElement('h3');
    this.contentSection = document.createElement('p');

    this.container.append(...[this.titleSection, this.contentSection]);
    this.section.append(this.container);
    return this.section;
  }

  addMain() {
    this.main.append(...[this.about, this.education, this.experience]);
    return this.main;
  }
}

export default Main;
