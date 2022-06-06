function cal() {
    let mass = document.getElementById('m');
    let volume = document.getElementById('v');
    let result = document.getElementById('output');


    density = document.getElementById('m').value / document.getElementById('v').value;
    result.innerHTML = density;
    
}

/*if (m === 0 || v === 0) {
    document.getElementById('m_error').innerHTML = "Please Enter the mass!";
    } else {
        alert ('The form has errors');
        result.innerHTML = '';
    };*/

    if (m===0) {
        document.getElementById("m_error").innerHTML =
          " ** user must write digits only not characters";
    }