$(document).ready(function(){
    const endpoint = `https://api.github.com/users/JohnataMoreira`;

    fetch(endpoint).then(function(resposta){
        return resposta.json()
    })
    .then(function(json){
        console.log(json);
        const avatar = json.avatar_url;
        const name = json.login;
        const num_repo = json.public_repos;
        const num_seguidores = json.followers;
        const num_seguindo = json.following;

        document.getElementById('avatar').src = avatar;
        document.getElementById('username') = name;
        document.getElementById('repositorios') = num_repo;
        document.getElementById('seguidores') = num_seguidores;
        document.getElementById('seguindo') = num_seguindo;
    })
    .catch(function(erro){
        console.log("Ocorreu um erro, tente novamente.")
    })
    .finally(function(){
        console.log("Executa independentemente se há erro ou não.")
    })
})