function numero(elementId) {
    var outputValueTo = document.getElementById('res');
  
    if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
      outputValueTo.value = elementId.textContent;
    } else {
  
      outputValueTo.value += elementId.textContent;
    }
  }

function operacao(elementId) {
  var outputValueTo = document.getElementById('res');
  if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
    outputValueTo.value = '0';
  } else {
    outputValueTo.value += elementId.textContent;
    document.getElementById('decimal').disabled = false;
  }
}

function cleartxt() {
  document.getElementById('res').value = '';
  document.getElementById('decimal').disabled = false;
}

function decimal(elementId, status) {
  var outputValueTo = document.getElementById('res');
  outputValueTo.value += elementId.textContent;
  document.getElementById('dec').disabled = status;
}

function calcular() {

  try {
    var restxt = document.getElementById('res');
    if (restxt.value != '') {
      var calcularResultado = eval(restxt.value);
      restxt.value = calcularResultado;
    }
  } catch (err) {
    restxt.value = "Syntax error";
  }
}
