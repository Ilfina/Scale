const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;


if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
  })

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.toggle('_active');
      menu.classList.toggle('_active');
    })
  })

  menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('_active');
      burger.classList.remove('_active');
      body.classList.remove('_lock');
    })
  })
}

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
})

// const menuBtn = document.querySelector('.menu__icon')
// const menu = document.querySelector('.menu__list')

// if (menuBtn && menu) {
//   menuBtn.addEventListener('click', () => {
//     menuBtn.classList.toggle('active')
//     menu.classList.toggle('active')
//   })
//  //чтобы меню из бургера реагировало и открывалось на нужной секции
//   menu.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', () => {
//       menuBtn.classList.toggle('active')
//       menu.classList.toggle('active')
//     })
//   })
// }

// // чтобы страничка к нужной секции прокручивалась плавно
// const anchors = document.querySelectorAll('a[href*="#"]');

// anchors.forEach(anchor => {
//   anchor.addEventListener('click', e => {
//     e.preventDefault();

//     const blockID = anchor.getAttribute('href').substring(1);

//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     })
//   })
// })

//чтобы пункты меню подсвечивались,когда страница открыта на нужной секции 
// const createSection = (root) => {
//   const nav = root.querySelector('nav');

//   root.querySelectorAll('.observe').forEach(s => {
//     new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           nav.querySelectorAll('a').forEach(link => link.classList.remove('active'))
//           let id = entry.target.getAttribute('id');
//           nav.querySelector(`a[href="#${id}"]`).classList.add('active');
//         }
//       })
//     }, {}).observe(s);
//   })
// }

// createSection(document.querySelector('#page'))
