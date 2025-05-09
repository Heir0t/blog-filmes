 document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('commentName');
    const commentInput = document.getElementById('commentText');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = nameInput.value.trim();
      const comment = commentInput.value.trim();

      if (name && comment) {
        alert(`${name} comentou: "${comment}"`);
        form.reset();
      } else {
        alert('Por favor, preencha todos os campos antes de enviar.');
      }
    });
  });