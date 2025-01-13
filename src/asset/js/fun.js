//menu
const humburger = document.querySelector("#humburger");
const navMenu = document.querySelector("#nav-links");
humburger.addEventListener('click', function () {
  humburger.classList.toggle('humburger-active');
  navMenu.classList.toggle('menu-active');
});

// const menu = document.querySelector('#humburger');
// document.activeElement('click', function(e){
//     if(!menu.contains(e.target) && !navMenu.contains(e.target)) {
//         navMenu.classList.remove('menu-active');
//     }
// });

//navActive
window.onscroll = function () {
  const navbar = document.querySelector('nav');
  const navScroll = navbar.offsetTop;

  if (window.scrollY > navScroll) {
    navbar.classList.add('nav-scroll');
  } else {
    navbar.classList.remove('nav-scroll');
  };

  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('#nav-links a');

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('nav-active');
        document.querySelector('#nav-links a[href*=' + id + ']').classList.add('nav-active');
      });
    };
  });
};


//menu-active
const lightSwitches = document.querySelectorAll('.light-switch');
if (lightSwitches.length > 0) {
  lightSwitches.forEach((lightSwitch, i) => {
    if (localStorage.getItem('dark-mode') === 'true') {
      lightSwitch.checked = true;
    }
    lightSwitch.addEventListener('change', () => {
      const { checked } = lightSwitch;
      lightSwitches.forEach((el, n) => {
        if (n !== i) {
          el.checked = checked;
        }
      });
      if (lightSwitch.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark-mode', true);
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dark-mode', false);
      }
    });
  });
};

//menghilangkan alert
const checkbox = document.querySelector('#close');
const alert = document.querySelector("#alert");

checkbox.addEventListener('click', function () {
  checkbox.checked ? alert.classList.add('hidden') : html.classList.remove('dark');
});

//submit form to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzkr8qOHUJsx0AdJBDAVmf18TjeOOUomJ4e2bO2662yHuie3bMweG8pvz-AVJiFLKYE/exec'
const form = document.forms['submit-to-google-sheet']

const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const Alert = document.querySelector('#alert');


form.addEventListener('submit', e => {
  e.preventDefault();
  //tampil tombol loading hilang tombol kirim
  btnLoading.classList.toggle('hidden');
  btnKirim.classList.toggle('hidden');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      //tampil tombol kirim hilang tombol loading

      btnLoading.classList.toggle('hidden');
      btnKirim.classList.toggle('hidden');

      //tampil alert
      Alert.classList.toggle('hidden');

      //reset form
      form.reset();
      console.log('Success!', response);
    })

    .catch(error => console.error('Error!', error.message))
});
