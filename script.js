// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];


const nextbtn = document.querySelector(".next-btn")
// console.log(nextbtn)
const prevbtn = document.querySelector('.prev-btn') 
// console.log(prevbtn)
const randombtn = document.querySelector('.random-btn')
// console.log(randombtn)
const names = document.querySelector('.name')
// console.log(name)
const text = document.querySelector('.text')
// console.log(text)
const job =document.querySelector('.job')
// console.log(job)
const allbtn = document.querySelectorAll('button')
// console.log(allbtn)
const img = document.querySelector('.person-img')
// console.log(img)


//for randomly show the content
randombtn.addEventListener('click',function(e){
    // console.log('welcome')
let random =Math.floor(Math.random() * reviews.length);
 // console.log(random)
names.innerText = reviews[random].name
job.innerText = reviews[random].job
text.innerText = reviews[random].text
img.src = reviews[random].img
})

//for increse the content
let incrementValue  = -1  
// console.log(incrementValue)
nextbtn.addEventListener('click',function(){
    incrementValue ++
    if(incrementValue === 4){
        incrementValue =  0;
    }
    names.innerText = reviews[incrementValue].name
    job.innerText = reviews[incrementValue].job
    text.innerText = reviews[incrementValue].text
    img.src = reviews[incrementValue].img
    
})

//for decresing the contents
let decrementValue = 4
// console.log(decrementValue)
prevbtn.addEventListener('click',function(){
    decrementValue --
    if(decrementValue === -1){
        decrementValue = 3
    }
    names.innerText = reviews[decrementValue].name
    job.innerText = reviews[decrementValue].job
    text.innerText = reviews[decrementValue].text
    img.src = reviews[decrementValue].img
})



