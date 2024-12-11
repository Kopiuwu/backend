class Venta {
    constructor(data) {
        this.id = data.id;
        this.id_usuario = data.id_usuario;
        this.id_producto = data.id_producto;
        this.cantidad = data.cantidad;
        this.estado = data.estado;
        this.fecha = data.fecha;
        this.hora = data.hora;
    }
    set id(id) {
        this._id = id;
    }
    set id_usuario(id_usuario) {
        this._id_usuario=id_usuario;
    }
    set id_producto(id_producto) {        
        this._id_producto = id_producto;   
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
    set estado(estado) {
        this._estado = estado;
    }
    set fecha(fecha) {
        this._fecha = fecha;
    }
    set hora(hora) {
        this._hora = hora;
    }
   

    get id() {
        return this._id;
    }
    get id_usuario() {
        return this._id_usuario;
    }
    get id_producto() {
        return this._id_producto;
    }
    get cantidad() {
        return this._cantidad;
    }
    get estado() {
        return this._estado;
    }
    get fecha() {
        return this._fecha;
    }
    get hora() {
        return this._hora;
    }
    
    get getVenta() {
        const conid={
            id: this._id,
            id_usu: this.id_usuario,
            id_prod: this.id_producto,
            cantidad: this.cantidad,
            estado: this.estado,
            fecha: this.fecha,
            hora: this.hora
        }
        const sinid={
            id_usu: this.id_usuario,
            id_prod: this.id_producto,
            cantidad: this.cantidad,
            estado:this.estado,
            fecha: this.fecha,
            hora: this.hora
        }
        if (this.id==undefined) {
            return sinid;
        }
        else{
            return conid;
        }
    }
}
module.exports = Venta;