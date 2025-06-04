angular.module('blog', []).controller('Rest', function($scope, $http){
    $http.get('https://api-fake-blog.onrender.com/postagens/')
    .success(function(data){
        $scope.publicacoes = data;
        window.publicacoes = [...data]; 
    });

    $scope.renderizarConteudo = function(index) {
        const pub = $scope.publicacoes[index];
        const content = document.getElementById('content');
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
    };
});
