"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Clientes = /*#__PURE__*/function () {
  function Clientes(nombre) {
    var impuesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Clientes);

    this.nombre = nombre;
    this.impuesto = {};
  }

  _createClass(Clientes, [{
    key: "getNombre",
    get: function get() {
      return this.nombre;
    }
  }, {
    key: "setNombre",
    set: function set(v) {
      this.nombre = v;
    }
  }, {
    key: "getImpuesto",
    get: function get() {
      return this.impuesto.impuesto;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto(montoBruto, deducciones) {
      var impuesto = (montoBruto - deducciones) * 0.21;
      if (!impuesto) return;
      this.impuesto = {
        impuesto: impuesto
      };
    }
  }]);

  return Clientes;
}();

var Impuestos = /*#__PURE__*/function () {
  function Impuestos(montoBruto, deducciones) {
    _classCallCheck(this, Impuestos);

    this.monto_bruto_anual = montoBruto;
    this.deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "getMontoBruto",
    get: function get() {
      return this.monto_bruto_anual;
    }
  }, {
    key: "setMontoBruto",
    set: function set(v) {
      this.monto_bruto_anual = v;
    }
  }, {
    key: "getDeducciones",
    get: function get() {
      return this.deducciones;
    }
  }, {
    key: "setDeducciones",
    set: function set(v) {
      this.deducciones = v;
    }
  }]);

  return Impuestos;
}();

var nombre = document.getElementById("nombre");
var montoBruto = document.getElementById("montoBruto");
var deducciones = document.getElementById("deducciones");
var resultado = document.getElementById("resultado");
var boton = document.getElementById("boton");
boton.addEventListener('click', function () {
  var montoBrutoNormalizado = Number(montoBruto.value);
  var deduccionesNormalizado = Number(deducciones.value);
  var nombreNormalizado = nombre.value;

  if (!nombreNormalizado || !montoBrutoNormalizado || !deduccionesNormalizado) {
    alert("Escribe todos los datos");
    return;
  }

  var cliente1 = new Clientes(nombreNormalizado);
  var impuesto1 = new Impuestos(montoBrutoNormalizado, deduccionesNormalizado);
  cliente1.calcularImpuesto(impuesto1.getMontoBruto, impuesto1.getDeducciones);
  resultado.innerHTML = cliente1.getImpuesto;
});