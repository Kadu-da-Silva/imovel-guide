// Obtém todos os elementos com a classe "phone-toggle"
const phoneToggleElements = document.querySelectorAll('.phone-toggle');

// Itera sobre os elementos e adiciona um ouvinte de clique
phoneToggleElements.forEach((element) => {
  element.addEventListener('click', () => {
    // Encontra o elemento "phone" irmão do elemento clicado
    const phoneElement = element.nextElementSibling;

    // Verifica se o elemento "phone" está oculto e, em seguida, exibe-o
    if (phoneElement.style.display === 'none') {
      phoneElement.style.display = 'block';
    } else {
      phoneElement.style.display = 'none';
    }
  });
});

// Cria alert ao enviar mensagem
const btnSendMessage = document.querySelectorAll('.btn-message');

btnSendMessage.forEach(button => {
  button.addEventListener('click', () => alert('Mensagem enviada com sucesso!'));
});

// Mensagem para o usuário digitar apenas os números
const spanMessageCpf = document.querySelector('.span-input-cpf')

// Função para aplicar a máscara de CPF
function formatCPF(input) {
  const value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

  if(value.length === 0 || value.length === 11) {
    spanMessageCpf.style.display = 'none'; // Exibe a mensagem enquanto o CPF é digitado
  } else {
    spanMessageCpf.style.display = 'block'; // Oculta a mensagem quando o CPF estiver completo
  }

  if (value.length <= 11) {
    input.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }  else {
    input.value = value.slice(0, 11); // Limita o tamanho máximo do CPF
  }
}

const spanMessagePhone =  document.querySelector('.span-input-phone')

// Função para aplicar a máscara de telefone
function formatTelefone(input) {
  const value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

  if(value.length === 0 || value.length === 11) {
    spanMessagePhone.style.display = 'none'; // Exibe a mensagem enquanto o CPF é digitado
  } else {
    spanMessagePhone.style.display = 'block'; // Oculta a mensagem quando o CPF estiver completo
  }

  if (value.length <= 11) {
    input.value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else {
    input.value = value.slice(0, 10); // Limita o tamanho máximo do telefone
  }
}

// Adiciona event listeners aos campos de entrada
const cpfInput = document.querySelector('.cpf-input');
const telefoneInput = document.querySelector('.telefone-input');

cpfInput.addEventListener('input', () => formatCPF(cpfInput));
telefoneInput.addEventListener('input', () => formatTelefone(telefoneInput));
