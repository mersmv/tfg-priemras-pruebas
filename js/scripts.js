const letters = {
    a: {
        type: 'rectangle',
        width: 45,
        height: 25,
        color: '#D6EAF8' ,
        bgColor: '#5DADE2'
    },
    b:{
        type: 'triangle',
        width: 30,
        height: 25,
        color: '#F4D03F' ,
        bgColor: '#FCF3CF'
    },
    c:{
        type: 'circle',
        width: 25,
        height: 25,
        color: '#EBDEF0' ,
        bgColor: '#C39BD3'  
    }
}

const title = ''
const canvas = document.getElementById('canvas')
const form = document.getElementById('form')
const previousPosition = {x: 0, y: 0};
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

form.addEventListener('click', e =>{
    e.target.preventDefault();
    title.textContent=e.target.textbox
    for (let index = 0; index < array.length; index++) {
        paintCanvas(title.indexOf[index])
    }
})

const paintCanvas = (letter) => {
    for (const letter of text){
        if(letters[letter].type === 'rectangle'){
            ctx.fillStyle = letters[letter].color;
            ctx.fillRect(previousPosition.x, previousPosition.y, letters[letter].width, letters[letter].height)
            previousPosition.x = letters[letter].width
        }
        if(letters[letter].type === 'circle'){
            ctx.fillStyle = letters[letter].color;
            context.arc(((previousPosition.x + letters[letter].width)/2), ((previousPosition.x + letters[letter].heigth)/2), radius, 0, 2 * Math.PI, false);
            previousPosition.x = letters[letter].width  
        }
        
        //mi idea es a las vocales darles formas basicas, y al resto de letras, dibujos creados a traves de varias lineas con formas mas complejas.
    }
}
