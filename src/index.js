import './index.css';
import wrapper from './js/components/Wrapper.component';
import Page from './js/page/Page';
import enData from './js/data/enData';
import plData from './js/data/plData'
import ruData from './js/data/ruData';

let value = 'EN';

function start(language) {
  let languagePage = language || enData;

  document.querySelector('body').innerHTML = '';
  wrapper.render();
  const page = new Page(languagePage);
  page.render();
  choiseLanguage();
  document.getElementById('dd').value = value;
}

start();

function choiseLanguage() {
  const Languages = [['EN', enData], ['PL', plData], ['RU', ruData]];
    let personData = enData;

    document.getElementById('dd').addEventListener('change', function() {
      Languages.forEach(lang => {
        if (lang[0] === this.value) {
          personData = lang[1];
          value = this.value;
          start(personData);
        }
      });
    }, false);
}
