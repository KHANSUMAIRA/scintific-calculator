function getNum(num) {
    // console.log(num)
     document.getElementById('result').value += num;
    }
function clearResult() {
    // console.log('')
     document.getElementById('result').value = '';
}
function removeNum() {
    var ren = document.getElementById('result').value 
    document.getElementById('result').value = document.getElementById('result').value.slice(0, ren.lenght - 1);

}
function getResult() {
    // console.log("result")
     document.getElementById('result').value = eval(document.getElementById('result').value)
}