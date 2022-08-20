var nombre='Pedrito';
var sbh=3000;//Ingrese Salario basico Por Hora
var nh=48;    //Ingrese Numero De Horas Trabajadas
var vs;
console.log("Nombre Empleado" + "\n " +nombre );
console.log("Salario Basico Por Hora" + "\n " +sbh );
console.log("Numero De Horas Trabajadas" + "\n " +nh);
vs=sbh * nh;  //Valor salario
console.log("Su salario basico es:" + "\n " +vs);
console.log("-------------Deducciones-------------")
if (vs <= 699999) {   
   var dp=vs * 0.02 //descuento pension
   console.log("Descuento de Pension 2%"+ "\n " +dp);   
   var auxt=vs * 0.06 //auxilio de transporte
   console.log("Auxilio de Transporte 6%"+ "\n " +auxt);
   var sn=vs-dp+auxt
   console.log("Su salario Neto es"+ "\n " + sn );
   console.log("-------------Deducciones-------------");
   console.clear(); 
}  else if (vs > 700000 && vs < 999999) {
   var dp=vs  * 0.04 //Descuento pension
   console.log("Descuento de Pension 4%"+ "\n " +dp);
   var subf=12000
   console.log("Subsidio familiar%"+ "\n " +subf);
   var sn=vs-dp+subf
   console.log("Su salario Neto es"+ "\n " + sn );
 
} else if (vs >= 1000000){
   var dp=vs  * 0.06
   console.log("Descuento de Pension 6%"+ "\n " +dp);
   var sn=vs-dp
   console.log("Su salario Neto es"+ "\n " + sn );
}
    
 

