
function totalFine( fare ) {
   if (fare< 0 || fare !==Number(fare)) {
      return "Invalid";
   }

   else{
    val= fare + fare*0.2 + 30 
    return val

   }

}

console.log(totalFine( 200)); 