//Problem 1
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

// Problem 3

function  bestTeam( player1, player2 ) {
    if (typeof player1!=="object" || typeof player2!=="object" ) {
        return "Invalid";}

    else{
        let Foul1 = player1.foul + player1.cardY + player1.cardR ;
        let Foul2 = player2.foul + player2.cardY + player2.cardR ;

        if (Foul1 < Foul2) {
           
            return player1.name;
        } else if (Foul1 > Foul2) {
           
            return player2.name;
        } else {
            
            return "Tie";
        }

    }
         

}

//  console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"));


// Problem 4

function  isSame(arr1 , arr2 ) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    else{
       
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        
        return true;
    }
}

// console.log(isSame({data: [2 , 5 , 6] } , [2 , 5 , 6]));

// Problem 5
function  resultReport( marks ) {
    if (!Array.isArray(marks)) {
       return "Invalid";}
    else{

        let roundmarks=0;
        let passCount = 0;
        let failCount = 0;
        for (let i = 0; i < marks.length; i++) {

            roundmarks +=marks[i];
            if (marks[i] < 40) {
                failCount++;
            }
            else if (marks[i]>=40){
                passCount++;
                
            }
            
           
        }

        roundmarks = Math.round(roundmarks / marks.length);

        if (isNaN(roundmarks)) {
            roundmarks = 0;
        }

        return { "finalScore": roundmarks , "pass": passCount, "fail": failCount } 


    }

 
 
}

// console.log(resultReport([99, 87, 67, 12 ,87]));
