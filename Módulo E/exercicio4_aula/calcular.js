/*
function calcular() {

    let numberTxt = document.querySelector('input#number');
    let number = Number(numberTxt.value);
    let lookTab = document.querySelector(`select#lookTab`);
    lookTab.innerHTML = ""

    if (numberTxt.value.length == 0) {
        window.alert(`Você deve digitar um número primeiro!!!`)
    } else { 
        lookTab.innerHTML = ""
        for (let i = 0; i <= 10; i++) {
            let tabFinal = number * i;
            lookTab.innerHTML += `<option value="x${i}">${number} x ${i} = ${tabFinal}</option>`;
        }
    }
}
*/

// Jeito novo de Criar elementos

function calcular() {
    let numberTxt = document.querySelector('input#number')
    let lookTab = document.getElementeByID('lookTab')
    if (numberTxt.value.length == 0) {
        window.alert(`Por Favor digite um número!`)
    } else {
        let number = Number(numberTxt.value)
        let i = 0
        tab.innerHTML = ``
        while (i <= 10) {
            let item = document.createElement('option')
            item.text = `${number} x ${i} = ${number * i}`
            lookTab.appendChild(item)
            i++
        }
    }
}
