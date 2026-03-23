const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const botao = document.querySelector("button");

const emailErro = document.querySelector("#emailErro");
const senhaErro = document.querySelector("#senhaErro");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

email.addEventListener('input', function(){
    if(email.value.length == ''){
        emailErro.textContent = '';
    } else if (!emailRegex.test(email.value)) {
       emailErro.textContent = 'E-mail Inválido';
    } else {
        emailErro.textContent = '';
    }
})

senha.addEventListener('input', function(){
    if(senha.value.length == ''){
        senhaErro.textContent = ''
    } else if (!senhaRegex.test(senha.value)){
        senhaErro.textContent = 'Senha Inválida! Precisa seguir a regra dos Caracteres da Senha'
    } else {
        senhaErro.textContent = ''
    }
})

botao.addEventListener('click', function(e){
    
    emailErro.textContent = '';
    senhaErro.textContent = '';

    let temErro = false;

    if(email.value === ''){
        emailErro.textContent = 'Campo de e-mail obrigatório';
        temErro = true;
    } else if(!emailRegex.test(email.value)){
        emailErro.textContent = 'E-mail inválido';
        temErro = true;
    }

    if(senha.value === ''){
        senhaErro.textContent = 'Senha obrigatória';
        temErro = true;
    } else if(!senhaRegex.test(senha.value)){
        senhaErro.textContent = 'Senha inválida!';
        temErro = true;
    }

    // LIMPA CAMPOS
    emailErro.value = '';
    senhaErro.value = '';

    // Qundo estiver valido, ir para pagina de Dashboard
    if(!temErro){
    window.location.href = "index.html";
}
});