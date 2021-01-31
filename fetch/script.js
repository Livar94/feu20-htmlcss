
const btn = document.querySelector('#btn');
const textOutput = document.querySelector('#text-output');
const jsonBtn = document.querySelector('#btn2');
const jsonOutput = document.querySelector('json-output');



btn.addEventListener('click', function(){

    fetch('text.txt')
    .then(function(res){
        console.log(res)
    })


})