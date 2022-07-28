class Wrapper {
  constructor() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
  }

  render() {
    this.elements = [];

    document.body.prepend(this.wrapper);
    this.wrapper.append(...this.elements);
  }
}

const wrapper = new Wrapper();

export default wrapper;
