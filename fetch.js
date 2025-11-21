ndow.onload = function() {
 document.getElementById('button').addEventListener('click', function () {
 let val = document.querySelector('input[id="myvalue"]').value;
 console.log(val);
 fetch('https://rrrorg9iri.execute-api.eu-west-1.amazonaws.com/default/aya-function?key1='+val)
 .then((response) => {
 return response.text();
 })
 .then((myContent) => {

document.querySelector('.content').innerHTML = myContent;
 });

 }, false);
}
