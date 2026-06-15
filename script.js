function convertTemp(){

    let temp =
    document.getElementById("tempInput").value;

    let unit =
    document.getElementById("unit").value;

    let result =
    document.getElementById("result");

    if(temp === "" || isNaN(temp)){

        result.innerHTML =
        "Please enter a valid number";

        return;
    }

    temp = parseFloat(temp);

    let output = "";

    if(unit === "celsius"){

        let f =
        (temp * 9/5) + 32;

        output =
        `${temp} °C = ${f.toFixed(2)} °F`;
    }

    else if(unit === "fahrenheit"){

        let c =
        (temp - 32) * 5/9;

        output =
        `${temp} °F = ${c.toFixed(2)} °C`;
    }

    else{

        let c =
        temp - 273.15;

        output =
        `${temp} K = ${c.toFixed(2)} °C`;
    }

    result.innerHTML = output;
}
