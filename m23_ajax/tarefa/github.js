$(document).ready(function(){
    const endpoint = `https://api.github.com/users/JohnataMoreira`;

    fetch(endpoint).then(function(resposta){
        return resposta.json()
    })
    .then(function(json){
        console.log(json);
        const avatar = json.avatar_url;

        document.getElementById('avatar').src = avatar;
        document.getElementById('repositorios').innerText = json.public_repos;
        document.getElementById('seguidores').innerText = json.followers;
        document.getElementById('seguindo').innerText = json.following;        
    })
    .catch(function(erro){
        console.log("Ocorreu um erro, tente novamente.")
    })
    .finally(function(){
        console.log("Executa independentemente se há erro ou não.")
    })
})