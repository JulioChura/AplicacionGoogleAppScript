function agregar() {
    let cantidad = document.getElementById("cantidad").value;
    let maxCantidad = 3;
    if ( maxCantidad < cantidad ) {
        alert("Solo pueden agregarse 3 participantes");
    } else {
        let body = ""
        let box = document.getElementById("box");
        for ( let i = 0; i < cantidad; i++ ) {
            
            body += `
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nombre del integrante (Máximo 5)</label>
                <input type="text" class="form-control" id="integrante" aria-describedby="emailHelp" name="integrante${i}>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email">
            </div>`
        }
    
        box.innerHTML = body;
    }
    console.log(cantidad);
}