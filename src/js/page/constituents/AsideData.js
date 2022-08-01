import Address from '../../../assets/images/icons/address.png';
import Mail from '../../../assets/images/icons/email.png';
import Phone from '../../../assets/images/icons/phone.png';

class AsideData {
  constructor(person) {
    this.person = person;
    this.iconsImage = [Address, Mail, Phone];
  }

  addContacts() {
    document.querySelector('.contacts .aside-container h2').innerText = this.person.contacts[0];
    this.contacts = this.person.contacts.filter((el, i) => i);
   
    this.icons = this.iconsImage.map(el => 
      `<span><img src="${el}" width="20px" height="20px"></span>`);

    this.contacts = this.contacts.map((el, i) => {
      if (el[0] === 'address') return `<li><a>${el[1]}${this.icons[i]}</a><li>`;
      if (el[0] === 'email') return `<li><a href="mailto:${el[1]}">${el[1]}${this.icons[i]}</a><li>`;
      if (el[0] === 'phone') return `<li><a href="tel: ${el[1]}">${el[1]}${this.icons[i]}</a><li>`;
    }).join('');

    document.querySelector('.contacts .aside-container ul').innerHTML = this.contacts;
  }

  addRow(word) {
    this.word = word;
    this.personData = [];

    if (this.person.hasOwnProperty(this.word)) {
      for (let key in this.person) {
        if (key == this.word) this.personData = this.person[key]
      }
    }

    document.querySelector(`.${this.word} .aside-container h2`).innerText = this.personData[0];
    this.data = this.personData[1].map(el => `<li>${el}</li>`).join('');
    document.querySelector(`.${this.word} .aside-container ul`).innerHTML = this.data;
  }

  updateAside() {
    this.addContacts();
    this.addRow('skills');
    this.addRow('competence');
    this.addRow('languages');   
  }
}

export default AsideData;
