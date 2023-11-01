document.getElementById('btn-download').addEventListener('click', function () {
  html2canvas(document.getElementById('capture')).then(function (canvas) {
    // Cria um link para o download da imagem
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'imagem.png';

    // Clica no link para iniciar o download
    link.click();
  });
});
