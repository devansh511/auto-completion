/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
 
  var NAME = document.getElementById("shippingName").value;
  
  var ZIP = document.getElementById("shippingZip").value;
  
  if(document.getElementById("same").checked){
   
    document.getElementById("billingName").value = NAME;
    
    document.getElementById("billingZip").value = ZIP;
    
  }
  
  else 
  
  {
    document.getElementById("billingName").value = "" ;
    
    document.getElementById("billingZip").value = "";
  
  }

}