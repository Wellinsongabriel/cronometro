var segundos = 0;
var minutos = 0;
var horas = 0;
var tempoContado;
iniciar = () =>{
    contarTempo();//retira o delay do início
    tempoContado = setInterval(contarTempo,1000);  
    document.querySelector('.btn_iniciar').disabled = true 
    document.querySelector('.btn_pausar').disabled = false
    document.querySelector('.btn_zerar').disabled = false 
}
pausar = () =>{
    clearInterval(tempoContado);       
    document.querySelector('.btn_iniciar').disabled = false 
    document.querySelector('.btn_pausar').disabled = true
    document.querySelector('.btn_zerar').disabled = false 
    
}
zerar  = () =>{
    clearInterval(tempoContado);
    segundos=0;
    minutos=0;
    horas=0;
    document.getElementById("visor").innerText = "00:00:00"
    document.querySelector('.btn_iniciar').disabled = false 
    document.querySelector('.btn_pausar').disabled = true
    document.querySelector('.btn_zerar').disabled = true
}
contarTempo = () =>{
    segundos++;
    if(segundos==60){
        segundos=0;
        minutos++;        
        
    } 
    if(minutos==60){
            minutos=0;
            horas++;
    }   
    document.getElementById("visor").innerText = formatarTempo(horas)+":"+formatarTempo(minutos)+":"+formatarTempo(segundos)
}
formatarTempo = (tempo) =>{
     return tempo<10?"0"+tempo:tempo
}