
//Prvo postavis konstante koje pozivas iz html na osnovu klasa, mozes na osnovu id ili cega god
const numbOneInput = document.querySelector('.numberOne')
const numbTwoInput = document.querySelector('.numberTwo')
const operation = document.querySelector('.calculation')
const btn = document.querySelector('.btnMain')
const output = document.querySelector('.display')


//zatim dodas eventListener na dugme koje ce ti izracunati kada kliknes
//sto znaci da sve sto se nalazi unutrar toga jeste logika za racunanje
/*kada ukucas recimo broj js gleda kao string i ne moze da racuna, tacnije
moze da racuna ali sa 2+2 bi dobila 22,a ne 4, zato moras da konvertujes string u broj kako sam dole uradio

*/

btn.addEventListener('click', () => {


    let final = operation.value;

    if (final === '+') {
        output.innerHTML = Number(numbOneInput.value) + Number(numbTwoInput.value)
        console.log(Number(numbOneInput.value) + Number(numbTwoInput.value))
        numbOneInput.value = ''
        numbTwoInput.value = ''
        operation.value = ''

    }
    else if (final === '-') {
        console.log(Number(numbOneInput.value) - Number(numbTwoInput.value))
        output.innerHTML = Number(numbOneInput.value) - Number(numbTwoInput.value)
        numbOneInput.value = ''
        numbTwoInput.value = ''
        operation.value = ''
    }
    else if (final === '/') {
        console.log(Number(numbOneInput.value) / Number(numbTwoInput.value))
        output.innerHTML = Number(numbOneInput.value) / Number(numbTwoInput.value)
        numbOneInput.value = ''
        numbTwoInput.value = ''
        operation.value = ''
    }
    else if (final === '*') {
        console.log(Number(numbOneInput.value) * Number(numbTwoInput.value))
        output.innerHTML = Number(numbOneInput.value) * Number(numbTwoInput.value)
        numbOneInput.value = ''
        numbTwoInput.value = ''
        operation.value = ''
    }
    else {
        alert('Please set the correct operator + - / *')
        numbOneInput.value = ''
        numbTwoInput.value = ''
        operation.value = ''
    }




})
