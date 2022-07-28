import Header from './header/Header.component';
import Aside from './aside/Aside.component';
import Main from './main/Main.component';

class Wrapper {
  constructor() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    this.header = new Header().addHeader();
    this.aside = new Aside().addAside();
    this.main = new Main().addMain();
  }

  render() {
    this.elements = [this.header, this.aside, this.main];

    document.body.prepend(this.wrapper);
    this.wrapper.append(...this.elements);
  }
}

const wrapper = new Wrapper();

export default wrapper;
