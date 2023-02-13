let divel = document.querySelector('#canvas');

let btn = document.querySelector('#button');

btn.addEventListener('click',()=>{

    let n = (Math.random() * 0xfffff * 1000000).toString(16);

    divel.style.backgroundColor = `#${n.slice(0, 6)}`
})



























