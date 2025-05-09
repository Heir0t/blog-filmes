 document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.comment');
    const nameInput = document.getElementById('commentName');
    const commentInput = document.getElementById('commentText');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = nameInput.value.trim();
      const comment = commentInput.value.trim();

        alert(`${name} comentou: "${comment}"`);
        form.reset();
    });
  });