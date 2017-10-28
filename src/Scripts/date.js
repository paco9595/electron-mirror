(function(){
    var weekdays=["Domingo","Lunes","Mates","Miercoles", "Jueves", "Viernes", "Sábado"];
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var d = new Date();
    var aux= weekdays[d.getDay()]+" "+ d.getDate()+ " de "+ meses[d.getMonth()]+" del "+ d.getFullYear();
    document.getElementById ("fecha").innerText = aux;
})();