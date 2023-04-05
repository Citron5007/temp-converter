document.getElementById("submitBtn").onclick= function(){

    let temp;

    if(document.getElementById("cBtn").checked){
        temp = document.getElementById("tb").value;
        temp = Number(temp);
        temp= toCelcius(temp);
        document.getElementById("templabel").innerHTML= temp + "°C";

    }
    else if(document.getElementById("fBtn").checked){
        temp = document.getElementById("tb").value;
        temp = Number(temp);
        temp= toFahrenheit(temp);
        document.getElementById("templabel").innerHTML= temp + "°F";
    }
    else{  document.getElementById("templabel").innerHTML= "Select a unit."}
}

function toCelcius(temp){
    return (temp-32)*(5/9)
}

function toFahrenheit(temp){
    return (temp * 9/5) + 32;
}