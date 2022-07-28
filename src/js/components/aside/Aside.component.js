// import Photo from '../../../../assets/images/photo.jpg';

class Aside {
  constructor() {
    this.aside = document.createElement('aside');
    this.aside.classList.add('field', 'field-aside');
    this.container = document.createElement('div');
    this.container.classList.add('aside-container','container');
    this.photo = document.createElement('div');
    this.photo.classList.add('photo');
    this.contacts = document.createElement('div');
    this.contacts.classList.add('contacts');
    this.skills = document.createElement('div');
    this.skills.classList.add('skills');
  }

  addPhoto() {
    this.img = document.createElement('img');
    this.img.setAttribute('src', `${Photo}`);
    this.img.setAttribute('alt', 'photo');
    this.photo.append(this.img);
    return this;
  }

  addAside() {
    // this.addPhoto();
    this.aside.append(this.container);
    return this.aside;
  }
}

export default Aside;
