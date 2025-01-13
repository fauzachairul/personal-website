const burger = document.querySelector("#burger");
const navMenu = document.querySelector("#nav-links");

burger.addEventListener("click", function () {
  navMenu.classList.toggle("show-links");
});

//nav hilang klik dimana saja
document.addEventListener("click", function (e) {
  if (!burger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("show-links");
  }
});

//darkmode
const lightSwitches = document.querySelectorAll(".light-switch");
if (lightSwitches.length > 0) {
  lightSwitches.forEach((lightSwitch, i) => {
    if (localStorage.getItem("dark-mode") === "true") {
      lightSwitch.checked = true;
    }
    lightSwitch.addEventListener("change", () => {
      const { checked } = lightSwitch;
      lightSwitches.forEach((el, n) => {
        if (n !== i) {
          el.checked = checked;
        }
      });
      if (lightSwitch.checked) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("dark-mode", true);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("dark-mode", false);
      }
    });
  });
}


//nav active
window.onscroll = function () {
  const navbar = document.querySelector('nav');
  const navUl = document.querySelector('#nav-links');
  const navScroll = navbar.offsetTop;

  if (window.scrollY > navScroll) {
    navbar.classList.add('nav-scroll');
  } else {
    navbar.classList.remove('nav-scroll');
  };
};



// filter

const filterButtons = document.querySelectorAll('.filter_button button');
const filterCards = document.querySelectorAll('.filter_cards .card');

const filCards = (e) => {
  document.querySelector('.active').classList.remove('active');
  e.target.classList.add('active')


  filterCards.forEach(card => {
    card.classList.add('hide');

    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
      card.classList.remove('hide');
    }
  });
}

filterButtons.forEach(button => button.addEventListener('click', filCards));


// show all text

// Ambil semua elemen yang memiliki kelas 'read-more'
const readMoreButtons = document.querySelectorAll('.read-more');

// Loop melalui setiap tombol dan tambahkan event listener
readMoreButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault(); // Mencegah link default

    const description = this.previousElementSibling; // Ambil paragraf sebelumnya (description)

    // Toggle kelas line-clamp-2 untuk menampilkan teks penuh atau terbatas
    description.classList.toggle('line-clamp-2');

    // Ubah teks tombol setelah diklik
    if (description.classList.contains('line-clamp-2')) {
      this.textContent = 'Baca Selengkapnya';
    } else {
      this.textContent = 'Tutup';
    }
  });
});

