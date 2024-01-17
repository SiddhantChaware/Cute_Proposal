

function he(){
    var selection = document.getElementById('gender');
    var name = document.getElementById('name').value;
    var res = selection.value;
    
    if(res == "male" ){
        alert(`${name} also loves you.....`);
        alert("Now go and Call her. She is waiting for you.")
    }
    else if(res == "female"){
        alert(`${name} also loves you.....`);
       alert(`Now go and Call him.He is waiting for you.`);
    }   
}
function moveButton() {
    var x =
      Math.random() *
      (window.innerWidth -
        document.getElementById("btn-no").offsetWidth);
    var y =
      Math.random() *
      (window.innerHeight -
        document.getElementById("btn-no").offsetHeight);
    document.getElementById("btn-no").style.left = `${x}px`;
    document.getElementById("btn-no").style.top = `${y}px`;
}