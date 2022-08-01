import Person from '../person/Person';
import enData from '../data/enData';
import plData from '../data/plData'
import ruData from '../data/ruData';
import HeaderData from './constituents/HeaderData';
import AsideData from './constituents/AsideData';
import MainData from './constituents/MainData';

class Page {
  constructor() {
    this.person = new Person(enData);
    this.header = new HeaderData(this.person);
    this.aside = new AsideData(this.person);
    this.main = new MainData(this.person);
  }

  render() {
    this.header.updateHeader();
    this.aside.updateAside();
    this.main.updateMain();
    return this;
  }
}

export default Page;
