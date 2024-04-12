let nav = document.querySelector('nav')
let next1 =document.querySelector('next_1')
let next2 =document.querySelector('next_2')
let back1 =document.querySelector('back_1')
let back2 =document.querySelector('back_2')
let fimg = document.querySelector('section1_img')
let simg = document.querySelector('section2_img')
let btn4 = document.querySelector('.section4_btn')
let modal = document.querySelector('.modal')
let modal_close = document.querySelector('.modal_close')


window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.classList.add('nav_color');
  } else {
    nav.classList.remove('nav_color');
  }
})

for(let i = 0; i < section1_img.length; i++){
  section1_img[i].style.display = 'none'

}
section1_img[0].style.display = 'block'


next1.addEventListener('click', () => {
    if(i < 3){
      section1_img[i].style.display = 'none'
        i++;x++
        section1_img[i].style.display = 'block'
        current.innerHTML = `0${x}`
    }else{
      section1_img[i].style.display = 'none'
        i=0;x=0;
        section1_img  [i].style.display = 'block'
        current.innerHTML = `0${x}`
    }
})

back1.addEventListener('click', () => {
  if(i > 0){
      section1_img[i].style.display = 'none'
      i--;x--
      section1_img[i].style.display = 'block'
      current.innerHTML = `0${x}`
  }else{
    section1_img[i].style.display = 'none'
      i=3;x=4;
      section1_img[i].style.display = 'block'
      current.innerHTML = `0${x}`
  }
})


  btn4.addEventListener('click', () => {
    modal.style.display = 'block'
})

btn_dark.addEventListener('click', () => {
    modal.style.display = 'block'
})

modal_close.addEventListener('click', () => {
      modal.style.display = 'none'
    })

