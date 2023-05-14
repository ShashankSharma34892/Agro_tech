if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}


function ready(){
    var removecartitem =document.getElementsByClassName("carttrash");
    console.log(removecartitem); 
    for(var i=0; i<removecartitem.length;i++){
        console.log("yo")
        var button = removecartitem[i];
        //remove cart item function//
        button.addEventListener('click',removecartitems)
        if(removecartitem.length==1     ){
            var removecheckout = document.querySelector(".details");
            button.addEventListener('click',()=>{
                removecheckout.remove()
            }
          
            )
    }
}

    
var quantityinputs = document.getElementsByClassName('input1');
for(var i=0; i<quantityinputs.length;i++){
    var input = quantityinputs[i]
    input.addEventListener('change', quantitychanged)

}

}

function removecartitems(event){
    var buttonclicked = event.target
    buttonclicked.parentElement.remove()
    updatecarttotal()
}


function quantitychanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value<= 0){
        input.value=1
    }
    updatecarttotal()
}


function updatecarttotal(){
    var cartrows= document.getElementsByClassName('product')
    var total=0; 
    for(var i=0; i<cartrows.length;i++){
     var cartrow = cartrows[i]
     var priceelement = cartrow.getElementsByClassName('small')[0]
     var quantityelement  = cartrow.getElementsByClassName('input1')[0]
     var price = parseFloat(priceelement.innerHTML.replace('₹',''))
     var quantity = quantityelement.value 
     total=total+(price*quantity)
    }
    var finalprice = document.getElementsByClassName('pricefinal')[0]
 finalprice.innerHTML = '₹' + total;
 
 }
 
