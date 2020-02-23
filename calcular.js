function setResult(value) {
    document.getElementById('pantalla').innerHTML = value;
}
function getResult() {
    return(document.getElementById('pantalla').innerHTML);
}
function add(key) { 
    var result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}
function calc() {
    var result = eval(getResult()); 
    setResult(result);
}
function del() { 
    setResult(' ');
}