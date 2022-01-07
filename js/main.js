const main = document.querySelector('main');
const loading = document.querySelector('aside');

for(let i=0; i<200; i++){
    const imgNode = document.createElement('img');
    imgNode.setAttribute('src', `img/pic${i}.jpg`);
    main.append(imgNode);
}

const imgs = document.querySelectorAll('img');
const len = imgs.length;
let total = 0;
let percent = 0;

imgs.forEach(img=>{
    img.addEventListener('load',()=>{
        total++;
        percent = parseInt((total/len)*100);
        loading.innerText = `${total} / ${len} (${percent}%)`;

        if(total === len){
            main.classList.add('on');
            loading.classList.add('off');

            setTimeout(()=>{
                loading.remove();
            },convertSpeed(loading))
        } 
    })
})

function convertSpeed(el){
    let speed = getComputedStyle(el).transitionDuration;
    speed = parseFloat(speed)*1000;
    return speed;
}


