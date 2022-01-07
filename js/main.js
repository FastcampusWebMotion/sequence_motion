const main = document.querySelector('main');

for(let i=0; i<200; i++){
    const imgNode = document.createElement('img');
    imgNode.setAttribute('src', `img/pic${i}.jpg`);
    main.append(imgNode);
}

const imgs = document.querySelectorAll('img');
const len = imgs.length;
let total = 0;

imgs.forEach(img=>{
    img.addEventListener('load',()=>{
        total++;
        console.log(total);

        if(total === len) main.classList.add('on');
    })
})


