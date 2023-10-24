// CAJERO AUTOMATICO JS

var saldo = 10000;

function consultaSaldo() {
     informesaldo = "SU SALDO BANCARIO ES DE : $ " + saldo;
    console.log(informesaldo)
    document.getElementById('informeMovimientoBancario').innerHTML = informesaldo;

    
}


function movimientosBancarios() {
    let operacionExtraccion = parseInt(document.getElementById('extraccion').value);
    let operacionDeposito = parseInt(document.getElementById('deposito').value);
    let operacionTransferencia = parseInt(document.getElementById('transferencia').value);
    // var saldo = 10000; 
   

    let informe = "";
    alert(" SU SALDO INICIAL ES DE: $ " + saldo)
 
    // alert(" extraccion: $ " + operacionExtraccion)
    // alert(" deposito: $ " + operacionDeposito)
    // alert(" transferenciaE: $ " + operacionTransferencia)
        
    
   

            if (operacionExtraccion>0) {
                if (saldo>=operacionExtraccion) {
                    saldo= saldo-operacionExtraccion;
                    informe="Operacion de extraccion realizada. Su saldo es: $ " + saldo;
                    alert(" Operacion de extracción realizada");
                    document.getElementById('extraccion').value = "";
                    console.log(informe)
                }else{
                    
                    alert(" Operacion de extracción no realizada, ingrese un monto válido");
                    document.getElementById('extraccion').value = "";
                }
            }else {
                    
                        // alert("Ingrese un monto válido ext");
                        document.getElementById('extraccion').value = "";
                    
            }
                

            if (operacionDeposito>0) {
                saldo= saldo+operacionDeposito;
                informe="Operacion de deposito realizada, Su saldo es: $ " + saldo;
                alert(" Operacion de depósito realizada");
                document.getElementById('deposito').value = "";
                }else {
                // alert("Ingrese un monto válido dep ");
                document.getElementById('deposito').value = "";
                    
            }

            if (operacionTransferencia>0) {
                if (saldo>=operacionTransferencia) {
                    saldo= saldo-operacionTransferencia;
                    informe="Operacion de transferencia realizada. Su saldo es: $" + saldo;
                    alert(" Operacion de transferencia realizada");
                    document.getElementById('transferencia').value = "";
                    } else{
                    
                        alert(" Operacion de transferencia no realizada, ingrese un monto válido");
                        document.getElementById('transferencia').value = "";
                    }
                    
                
                }else {
                // alert("Ingrese un monto válido trasn");
                document.getElementById('transferencia').value = "";
                
                    
            }


         

    console.log(informe)
    document.getElementById('informeMovimientoBancario').innerHTML = informe;

}  
        
    
    




