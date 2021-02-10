// Initialisation de nos sélecteurs

const randomColor = document.querySelector('#color-button');
const inputColor = document.querySelector('#color-input');
const pickerColor = document.querySelector('#color-picker');
const bgColor = document.querySelector('main');
const hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const label = document.querySelector('#label-color-picker');


// ? Méthode HEXADECIMAL   :  #1A9AAF
randomColor.addEventListener('click', (e)=>{
    const colorPicked = [];
    for(let i = 0; i < 6; i++){
        let pickColor = hexArray[Math.floor(Math.random() * hexArray.length)];
        colorPicked.push(pickColor);
    }
    // Boucle FOR = for(initialisateur ; condition ; incrémentation)
    const colorHex = colorPicked.join('');
    bgColor.style.background = `#${colorHex}`;
});

// ? Méthode RGB  :  123,123,123
// randomColor.addEventListener('click',(e)=>{
//     const randomRGB = () => Math.floor(Math.random() * 255);

//     let rgbString = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
//     bgColor.style.background = `${rgbString}`;
// })

// ! Les deux fonctionnent, 
// ! Ensemble ou séparément
// ______________________________________________________________________________


    inputColor.style.border=`2px solid green`;

    label.innerText = `#${colorHex}`;
    inputColor.value =`#${colorHex}`;

    pickerColor.value =`#${colorHex}`;
    label.innerText = `#${colorHex}`;
    label.style.color=`#${colorHex}`;
    inputColor.style.color=`#${colorHex}`;
    randomColor.style.color=`#${colorHex}`;



// ? Utilise la couleur donnée par User
inputColor.addEventListener('keyup',(e)=>{
    const userInput = inputColor.value;
    if(userInput.length === 3 || userInput === 6){
        bgColor.style.background = `${userInput}`;
        inputColor.style.border = `2px solid green`;
        pickerColor.value = `${userInput}`;
        label.innerText = `${userInput}`;
        label.style.color = `${userInput}`;
        inputColor.style.color = `${userInput}`;
        random.style.color = `${userInput}`;

    }else{
        inputColor.style.border = `2px solid red`;
    }
})

// Utilise la valeur utilisé par le color picker
pickerColor.addEventListener('input',(e)=>{
    pickedColor = e.currentTarget.value;
    console.log(e.currentTarget.value);
    bgColor.style.background = `${pickedColor}`;

    label.innerText = `${pickedColor}`;
    inputColor.value = `${pickedColor.substring(1)}`;

    label.style.color = `${pickedColor}`;
    inputColor.style.color = `${pickedColor}`;
    randomColor.style.color = `${pickedColor}`;
});

