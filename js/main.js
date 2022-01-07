/*
    동적으로 DOM생성
    부모요소.innerHTML= "집어넣을 태그를 문자열";
    --> 기존 부모안쪽의 자식요소를 모두 제거하고 새로 생성

    부모요소.append(DOM node);
    --> 인수로 생성할 태그의 문자열이 아닌 노드를 생성해서 삽입

    새로운 DOM노드 생성방법
    document.createElement('dom이름')
*/
const main = document.querySelector('main');

/*
for(let i=0; i<200; i++){
    const imgNode = document.createElement('img');
    imgNode.setAttribute('src', `img/pic${i}.jpg`);
    main.append(imgNode);
}
*/
let tags = '';
for(let i=0; i<200; i++){
    tags += `<img src='img/pic${i}.jpg' />`;
}

console.log(tags);
main.innerHTML = tags;

