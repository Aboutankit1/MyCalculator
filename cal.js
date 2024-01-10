function myadd(){
    var x = Number(document.getElementById('num1').value)
    var y = Number(document.getElementById('num2').value)
    var z = x+y
    z = z.toFixed(2)
    console.log(x)
    console.log(y)
    console.log(z)
    document.getElementById('result').innerHTML = `<h3>Result: ` +z+ `</h3>`
}


function mysub(){
    var x = Number(document.getElementById('num1').value)
    var y = Number(document.getElementById('num2').value)
    var z = x-y
    z = z.toFixed(2)
    console.log(x)
    console.log(y)
    console.log(z)
    document.getElementById('result').innerHTML = `<h3>Result: ` +z+ `</h3>`
}




function mymul(){
    var x = Number(document.getElementById('num1').value)
    var y = Number(document.getElementById('num2').value)
    var z = x*y
    z = z.toFixed(2)
    console.log(x)
    console.log(y)
    console.log(z)
    document.getElementById('result').innerHTML = `<h3>Result: ` +z+ `</h3>`

}

function mydiv(){
    var x = Number(document.getElementById('num1').value)
    var y = Number(document.getElementById('num2').value)
    var z = x/y
    z = z.toFixed(2)
    console.log(x)
    console.log(y)
    console.log(z)
    document.getElementById('result').innerHTML = `<h3>Result: ` +z+ `</h3>`

}