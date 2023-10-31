//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(
  {

   top:0,
   left:0,
   behavior: 'smooth'



  }

    )
}



//Validação de Login
function login(){
    let email = document.getElementById(`usuario`).value
    let senha = document.getElementById(`senha`).value
   


    if(email == 'admin'&& senha == '1234' ){
        alert('Login efetuado!')
        location.href = 'index.html'
    }else{
        alert('Senha/Email não conferem !')
    }
}

//Ativar alert no botão cadastrar

function cadastro(){
    alert('Cadastro realizado com sucesso!')
    window.location.href = 'index.html'
}


