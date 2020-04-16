function hessab(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var total;
    var print = document.getElementById("print");
    total = parseInt(num1) + parseInt(num2);
    print.innerHTML = total;
}