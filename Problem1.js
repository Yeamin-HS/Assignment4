
function totalFine( fare ) {
   if (fare< 0 || typeof fare !=="number") {
      return "Invalid";
   }

   else{
    val= fare + fare*0.2 + 30 
    return val

   }

}
// console.log(totalFine( -35)); 

//Problem 2

function  onlyCharacter( str ) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    
    let result = "";
    for (let i = 0; i < str.length; i++) {
         if (str[i] === " ") {
            continue;
        }
        val1 = str[i].toUpperCase();
        result += val1;
        
    }
    return result;
        
}
// console.log(onlyCharacter( true));