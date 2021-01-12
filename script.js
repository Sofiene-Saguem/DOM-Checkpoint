
function increase(id,price,ctn,chec,to){
    let tot= document.getElementById(to);   
     var inp= document.getElementById(id);
      var val=parseInt(inp.value);
      val++;
      inp.value=val;
      var pri=document.getElementById(price);
    pri.innerHTML = `${ctn * val}$ ` ;
    let check= document.getElementById(chec);
    if(check.checked){
        tot.innerHTML=`${parseInt(tot.innerHTML)+ctn}$`;
    }
 }
 function decrease(id,price,ctn,chec,to){
    let tot= document.getElementById(to);   
    var inp= document.getElementById(id);
    var val=parseInt(inp.value);
    if(val>0){
    val--;
}   else val=0;
    inp.value=val;
var pri=document.getElementById(price);
    if(val>0){
    pri.innerHTML = `${ctn * val}$ `;
}
let check= document.getElementById(chec);
if(check.checked){
    tot.innerHTML=`${parseInt(tot.innerHTML)-ctn}$`;
}
}



function total(check , price,inp, to){
    let tot= document.getElementById(to);   
let checkitem = document.getElementById(check);
 if(checkitem.checked){
   let prix=document.getElementById(price);
  let input=document.getElementById(inp);
  if(input.value >0){
   let sum = parseInt (tot.innerHTML) + parseInt (prix.innerHTML);
   tot.innerHTML=`${sum}$`;
   }
 }
 else {
    let prix=document.getElementById(price);
    let sum = parseInt (tot.innerHTML) - parseInt (prix.innerHTML);
    tot.innerHTML=`${sum}$`;
 }
}