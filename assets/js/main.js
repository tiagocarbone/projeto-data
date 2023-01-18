
/*
const h1 = window.document.querySelector('.container h1')

function getDiaSemanaTexto (diaSemana){
    const diasSemana = ['domingo', 'segunda', 'Terça - feira', 'quarta', 'quinta', 'sexta','sabado']
    return diasSemana[diaSemana]
}


function getNomeMes (numeroMes){
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[numeroMes]
}
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}
function criaData(){
    const data = new Date()
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()
    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(numeroMes)
    h1.innerHTML = (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} - ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}`)
    setTimeout('criaData()',500)
}

*/


function getDiaSemanaTexto (diaSemana){
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira','Sábado']
    return diasSemana[diaSemana]
}


function getNomeMes (numeroMes){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[numeroMes]
}


function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function time(){
const h1 = window.document.querySelector('.container h1')
today = new Date();
const diaSemana = today.getDay()
const numeroMes = today.getMonth()
const nomeDia = getDiaSemanaTexto(diaSemana)
const nomeMes = getNomeMes(numeroMes)
h = today.getHours();
m = today.getMinutes();
s = today.getSeconds();
dia = today.getDate();
ano = today.getFullYear()
h1.innerHTML = `${nomeDia}, ${dia} de ${nomeMes} de ${ano} - ${zeroAEsquerda(h)}:${zeroAEsquerda(m)}:${zeroAEsquerda(s)} `
setTimeout(time, 500);
}




/*
const h1 = window.document.querySelector('.container h1')
const data = new Date()

const opcoes = {
    dateStyle: 'full', 
    timeStyle: 'short'   
}


h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle:'short'})

*/



