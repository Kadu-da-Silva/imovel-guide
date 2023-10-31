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
