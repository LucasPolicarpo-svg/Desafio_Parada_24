function convTemp(){
    let celsius = parseFloat(document.getElementById("csl").value);

    if(isNaN(celsius) || celsius === " "){

        alert("Insira um número valido !");

    }else{

        let fahrenheit = celsius * 9 / 5 + 32;

        let kelvin = celsius + 273.15;

        document.getElementById("resultado").innerHTML = `<p> A temperatura em Fahrenheit é: ${fahrenheit}ºF <br> A temperatura em Kelvin é: ${kelvin}K`
    }
}