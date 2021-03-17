

class Clientes {
    
    constructor(nombre, impuesto = {}) {
        this.nombre = nombre;
        this.impuesto = {}
    }
    get getNombre() {
        return this.nombre;
    }
    set setNombre(v) {
        this.nombre = v
    }
    get getImpuesto() {
        return this.impuesto.impuesto;
    }

    calcularImpuesto(montoBruto, deducciones) {
        const impuesto = (montoBruto - deducciones) * 0.21;
        if (!impuesto) return;
        this.impuesto = {
          impuesto,
        };
    }
}


class Impuestos {
    constructor(montoBruto, deducciones) {
        this.monto_bruto_anual = montoBruto;
        this.deducciones = deducciones;
    }
    get getMontoBruto(){
        return this.monto_bruto_anual;
    }
    set setMontoBruto(v) {
        this.monto_bruto_anual = v
    } 
    get getDeducciones(){
        return this.deducciones;
    }
    set setDeducciones(v) {
        this.deducciones = v
    } 
}

let nombre = document.getElementById("nombre");
let montoBruto = document.getElementById("montoBruto");
let deducciones = document.getElementById("deducciones");
let resultado = document.getElementById("resultado");
let boton = document.getElementById("boton");

boton.addEventListener('click', () => {
    const montoBrutoNormalizado = Number(montoBruto.value); 
    const deduccionesNormalizado = Number(deducciones.value); 
    const nombreNormalizado = nombre.value;

    if (!nombreNormalizado || !montoBrutoNormalizado || !deduccionesNormalizado) {
        alert("Escribe todos los datos");
        return;
    }

    const cliente1 = new Clientes(nombreNormalizado);
    const impuesto1 = new Impuestos(montoBrutoNormalizado, deduccionesNormalizado)

    cliente1.calcularImpuesto(impuesto1.getMontoBruto, impuesto1.getDeducciones)
    
    resultado.innerHTML = cliente1.getImpuesto   
});