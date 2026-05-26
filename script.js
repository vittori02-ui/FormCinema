let nome,cognome,sala,salaNome,numBig,carta,pop,bib,nac,box;
function scelta() {
    nome=document.getElementById("fname").value;
    cognome=document.getElementById("sname").value;
    sala=document.querySelector('input[name="sala"]:checked');//prezzo
    salaNome=document.querySelector('label[for="'+sala.id+'"]').textContent;
    numBig=document.getElementById("num");
    carta=document.querySelector('input[name="card"]:checked');
    pop=document.getElementById("pop");
    bib=document.getElementById("bib");
    nac=document.getElementById("nac");
    box=document.getElementById("box");
    box.innerHTML="";
    if(nome==="") alert("Devi inserire il nome");
    if(cognome==="") alert("Devi inserire il cognome");
    if(sala===null) alert("Scegli una sala");
    numBig=parseInt(numBig.value);
    if(isNaN(numBig)||numBig<=0) alert("Devi inserire il num di biglietti");
    let cartaOno;
    if(carta!==null) cartaOno=true;
    else cartaOno=false;
    let extraTot=0;
    let extraText="";
    if(pop.checked) 
    {
        extraTot+=parseFloat(pop.value);
        extraText+="Pop corn 2.50€"+"\n";
    }
    if(bib.checked) 
    {
        extraTot+=parseFloat(bib.value);
        extraText+="Bibita 1.50 €"+"\n";
    }
    if(nac.checked) 
    {
        extraTot+=parseFloat(nac.value);
        extraText+="Nachos 2.00€"+"\n";
    }
    if(!pop.checked&&!bib.checked&&!nac.checked) 
    {
        extraText="NIENTE EXTRA"+"\n";
    }
    box.append("RIEPILOGO ORDINE"+"\n");
    box.append("Nome: "+nome+"\n");
    box.append("Cognome: "+cognome+"\n");
    box.append("Sala: "+salaNome+"\n");
    box.append("Numero biglietti: "+numBig+"\n");
    if(cartaOno===true) box.append("Carta fedeltà: SI"+"\n");
    else box.append("Carta fedeltà: NO"+"\n");
    box.append("Servizi extra: "+"\n"+extraText+"\n");
    box.append("TOTALE: "+totale(extraTot,cartaOno)+"€");
}
function totale(extraTot,cartaOno)
{   
    let salaPrez=parseInt(sala.value);  
    if(cartaOno===true) return salaPrez*numBig+extraTot-5;
    else return salaPrez*numBig+extraTot;
}
function reset()
{
    location.reload();
}
