//📌 DOM Elements
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')
const slideEl = document.querySelector('.slide')
const thumbs = document.querySelector('.thumbnails')

//📌 Variables
let activeSlide = 0

//📌 Images Objects
const images = [
  {
    title : 'First Slide',
    description : 'lorem ipsum dolor',
    url: './assets/img/01.jpg'
  },
  {
    title : 'Second Slide',
    description : 'lorem ipsum dolor',
    url: './assets/img/02.jpg'
  },
  {
    title : 'Third Slide',
    description : 'lorem ipsum dolor',
    url: './assets/img/03.jpg'
  },
  {
    title : 'Forth Slide',
    description : 'lorem ipsum dolor',
    url: './assets/img/04.jpg'
  },
  {
    title : 'Fifth Slide',
    description : 'lorem ipsum dolor',
    url: './assets/img/05.jpg'
  },
]

//📌 Functions

/**
 * 
 * @param {*} obj -- 
 * @param {*} EtG -- Element where to Generate the Image
 */
function generateImg(obj,EtG){
  for (let i = 0; i < obj.length; i++){
    const imageEl = document.createElement('img')
    imageEl.src = obj[i].url

    EtG.appendChild(imageEl)
  }
}

function next(){
  activeSlide++

  if(activeSlide >= images.length){
    activeSlide = 0
  }

  const {url,title,description} = images[activeSlide]

  let markup = `
     <img src="${url}" alt="">
      <div class="desc">
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
  `

  slideEl.innerHTML = markup
}

function prev(){
  activeSlide--

  if(activeSlide < 0){
    activeSlide = images.length - 1
  }

  const {url,title,description} = images[activeSlide]


  let markup = `
     <img src="${url}" alt="">
      <div class="desc">
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
  `

  slideEl.innerHTML = markup
}

//EventListeners
nextEl.addEventListener('click',next)
prevEl.addEventListener('click',prev)



//📌 Main
generateImg(images,thumbs)