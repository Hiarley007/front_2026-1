import './style.css'

/*
Validar formulário com as regras:
- matricula > 0
- senha: > 6 caracteres e obrigatoria 
 */

const matricula = document.querySelector('#matricula')
const senha = document.querySelector('#senha')
const botao = document.querySelector('button')

botao.addEventListener('click', function(e){

    const matriculaErro = document.querySelector('#matriculaErro')
    const senhaErro = document.querySelector('#senhaErro')

    matriculaErro.textContent = '';
    senhaErro.textContent = '';

    if (matricula.value == ''){
        matriculaErro.textContent = 'Matricula Obrigatória';
        return;
    }

    if (parseInt(matricula.value) <= 0 ){
        matriculaErro.textContent = 'Matricula deve ser um número positivo';
        return;
    }

    if (senha.value == '') {
        senhaErro.textContent = 'Senha Obrigatória';
        return;
    }

    if (senha.value.length < 8) {
        senhaErro.textContent = 'Senha deve ter no minímo 8 caracteres';
        return;
    }
})