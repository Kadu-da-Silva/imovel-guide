// Seleciona os elementos de input
const valueA = document.getElementById('value-a');
const valueB = document.getElementById('value-b');
const valueX = document.getElementById('value-x');
const valueY = document.getElementById('value-y');

// Seleciona o botão "Limpar"
const btnLimpar = document.getElementById('btn-clean');

// Adiciona um ouvinte de evento de entrada aos campos de entrada
valueA.addEventListener('input', calcularResultado);
valueB.addEventListener('input', calcularResultado);
valueX.addEventListener('input', calcularResultado);

// Adiciona um ouvinte de evento de clique ao botão "Limpar"
btnLimpar.addEventListener('click', limparValores);

// Função para calcular o resultado
function calcularResultado() {
  const a = parseFloat(valueA.value);
  const b = parseFloat(valueB.value);
  const x = parseFloat(valueX.value);

  if (!isNaN(a) && !isNaN(b) && !isNaN(x) && a !== 0) {
    const y = (b * x) / a;
    valueY.value = y.toFixed(2); // Exibe o resultado com 2 casas decimais
  } else {
    valueY.value = ''; // Limpa o campo se os valores não forem válidos
  }
}

// Função para limpar os valores
function limparValores() {
  valueA.value = '';
  valueB.value = '';
  valueX.value = '';
  valueY.value = '';
}
