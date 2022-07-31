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

  addSkills() {
    document.querySelector('.skills .aside-container h2').innerText = this.person.skills[0];
    this.skills = this.person.skills[1].map(el => `<li>${el}</li>`).join('');
    document.querySelector('.skills .aside-container ul').innerHTML = this.skills;
  }

  addCompetence() {
    document.querySelector('.competence .aside-container h2').innerText = this.person.competence[0];
    this.competence = this.person.competence[1].map(el => `<li>${el}</li>`).join('');
    document.querySelector('.competence .aside-container ul').innerHTML = this.competence;
  }

  updateAside() {
    this.addContacts();
    this.addSkills();
    this.addCompetence();
  }
}

export default AsideData;
