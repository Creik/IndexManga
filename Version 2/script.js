// console.log(
// '<label for="">\n'+
// '  <span>A</span>\n'+
// '  <input  type="radio">\n'+
// '</label>')
// const abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
// const abc2= abc.map(x => {
//     console.log(
//       '<li><label for="'+x+'">\n'+
//       '  <input  type="radio" id="'+x+'" name="abc">\n'+
//       '  <span>'+x+'</span>\n'+
//       '</label></li>'
//     )
// })
// const generos= ['Action','Adventure','Cars','Comedy','Dementia','Demons','Drama','Ecchi','Fantasy','Game','Gender Bender','Harem','Hentai','Historical','Horror','Josei','Kids','Magic','Martial Arts','Mecha','Military'];
// const genders=generos.map(x =>{
//     console.log(
// '<li>\n'+
// '  <label>\n'+
// '    <input type="chechbox" id="'+x+'">\n'+
// '    <span>'+x+'</span>\n'+
// '  </label>\n'+
// '</li>'
//     )
// })
window.onload = function() {
    var previousInput;
    const elements = Array.from(document.querySelectorAll('#abc li'));
    for (const elemento of elements) {
        const a= elemento.firstElementChild.firstElementChild;
        elemento.addEventListener('click', ()=>{
            if(previousInput!==elemento && previousInput!==undefined){
                console.log(previousInput.parentNode.parentNode);
                previousInput.checked=previousInput.checked;
                previousInput.parentNode.parentNode.style.color= "black";
                previousInput.parentNode.parentNode.classList.remove('active');
                previousInput=undefined;
            }
            a.checked = !a.checked;
            if(a.checked){
                elemento.style.color = "orange";
                elemento.classList.add('active');
            }else{
                elemento.classList.remove('active');
                elemento.style.color = "black";

            }
            console.log(a.checked);
            previousInput = a;
        } 
        )};

    const list = Array.from(document.querySelectorAll('#genders li'));
    for (const elemento of list) {
        elemento.addEventListener('click', ()=> {
            const input = elemento.firstElementChild.firstElementChild;
            input.checked = !input.checked;
            console.log(input.id);
            if(input.checked){
                input.nextElementSibling.style.color='white';
                elemento.style.backgroundColor = 'orange';
            }else{
                input.nextElementSibling.style.color='black';
                elemento.style.backgroundColor = 'white';
            }
        });
    }
};