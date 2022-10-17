function numero(elementId) {
    var outputValueTo = document.getElementById('field1');
  
    if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
      outputValueTo.value = elementId.textContent;
    } else {
  
      outputValueTo.value += elementId.textContent;
    }
  }

function operacao(elementId) {
  var outputValueTo = document.getElementById('field1');
  if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
    outputValueTo.value = '0';
  } else {
    outputValueTo.value += elementId.textContent;
    document.getElementById('decimal').disabled = false;
  }
}

function cleartxt() {
  document.getElementById('field1').value = '0';
  document.getElementById('decimal').disabled = false;
}

function decimal(elementId, status) {
  var outputValueTo = document.getElementById('field1');
  outputValueTo.value += elementId.textContent;
  document.getElementById('decimal').disabled = status;
}

function calcular() {

  try {
    var field1txt = document.getElementById('field1');
    if (field1txt.value != '') {
      var calcularResultado = eval(field1txt.value);
      field1txt.value = calcularResultado;
    }
  } catch (err) {
    field1txt.value = "Syntax error";
  }
}