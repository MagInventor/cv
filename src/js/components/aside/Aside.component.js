import Photo from '../../../assets/images/photos/photo.jpg';

class Aside {
  constructor() {
    this.aside = document.createElement('aside');
    this.aside.classList.add('field', 'field-aside');
    this.photo = document.createElement('div');
    this.photo.classList.add('photo');
    this.contacts = this.createSection('contacts');
    this.skills = this.createSection('skills');
    this.competence = this.createSection('competence');
  }

  addPhoto() {
    this.img = document.createElement('img');
    this.img.setAttribute('src', `${Photo}`);
    this.img.setAttribute('alt', 'photo');
    this.photo.append(this.img);
    return this;
  }

  createSection(nameSection) {
    this.section = document.createElement('div');
    this.section.classList.add(nameSection);
    this.container = document.createElement('div');
    this.container.classList.add('aside-container', 'container');

    this.titleSection = document.createElement('h2');
    this.contentSection = document.createElement('ul');

    this.container.append(...[this.titleSection, this.contentSection]);   
    this.section.append(this.container);
    return this.section;
  }

  addAside() {
    this.addPhoto();
    this.aside.append(...[this.photo, this.contacts, this.skills, this.competence]);
    return this.aside;
  }
}

export default Aside;
