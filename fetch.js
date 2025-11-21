ndow.onload = function() {
 document.getElementById('button').addEventListener('click', function () {
 let val = document.querySelector('input[id="myvalue"]').value;
 console.log(val);
 fetch('https://<<YOUR URL>>?key1='+val)
 .then((response) => {
 return response.text();
 })
 .then((myContent) => {

document.querySelector('.content').innerHTML = myContent;
 });

 }, false);
}
