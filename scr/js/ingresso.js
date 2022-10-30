const nome = window.localStorage.getItem('nome');
const email = window.localStorage.getItem('email');
const qtdTotal = window.localStorage.getItem('qtdTotal');

const cnomeComprador = document.getElementById('nomeComprador');
const cEmailComprador = document.getElementById('emailComprador');
const cticketComprado = document.getElementById('ticketComprado');

cnomeComprador.innerText = nome;
cEmailComprador.innerText = email;
cticketComprado.innerText = qtdTotal;