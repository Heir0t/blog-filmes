const btn1 = document.getElementById('b1');
const btn2 = document.getElementById('b2');
const btn3 = document.getElementById('b3');
const btn4 = document.getElementById('b4');
const content = document.getElementById('content');

function renderizarConteudo(index) {
  const pub = window.publicacoes[index];

  content.innerHTML = `
    <style>
      #content {
        margin-left: 150px;
        margin-right: 150px;
      }
      #content h2 {
        margin-top: 0;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        color: rgb(255, 255, 255);
      }
      #content small {
        display: block;
        text-align: center;
        color: #888;
        margin-bottom: 18px;
        font-size: 0.98rem;
      }
      #content img {
        display: block;
        margin: 0 auto 18px auto;
        max-width: 100%;
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba(0,0,0,0.07);
      }
      #content p {
        font-size: 1.13rem;
        line-height: 1.7;
        text-align: justify;
        margin: 0;
      }
    </style>
    <h2>${pub.title}</h2>
    <small>Por: ${pub.profileName} - ${pub.postDate}</small>
    <img src="${pub.thumbImage}" alt="${pub.thumbImageAltText}">
    <p>${pub.description}</p>
  `;
}

btn1.addEventListener('click', () => renderizarConteudo(0));
btn2.addEventListener('click', () => renderizarConteudo(1));
btn3.addEventListener('click', () => renderizarConteudo(2));
btn4.addEventListener('click', () => renderizarConteudo(3));
