function getFirstButton() {
    alert(document.querySelector('input[type=button]').value);
}

const listKeys = document.querySelectorAll('input[type=button]');
const display = document.querySelector('input[type=phone]');

function getButtonWindow() {
    alert (listKeys[0].value);
}


function valueButton1() {
    display.value += listKeys[0].value;
  
}


function valueButton(value) {

    display.value+=listKeys[value].value;
}

listKeys[0].onclick = valueButton1;


function clearDisplay(){
    display.value = "";
}



// function valorPrimeiroBotao() {
//     alert(document.querySelector("input[type=button]").value);
//   }
//   const listTeclas = document.querySelectorAll("input[type=button]");
//   const display = document.querySelector("input[type=tel]");
  
//   function valorBotaoUmJanela() {
//       alert(listTeclas[0].value)
//   }
  
//   function valorBotaoUm() {
//      display.value += listTeclas[0].value;
//   }
  
//   listTeclas[0].onclick = valorBotaoUm;




