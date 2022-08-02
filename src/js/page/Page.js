import Person from '../person/Person';
import HeaderData from './constituents/HeaderData';
import AsideData from './constituents/AsideData';
import MainData from './constituents/MainData';

class Page {
  constructor(langData) {
    this.person = new Person(langData);
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
