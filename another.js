


let count = 0

function rampNumber(num){
    if(num > 0 ){
        console.log(num + 5);
        for(let i = 0; i < num.length; i++){
            console.log(i)
         //   if(num[i] > num[i-1]){
         //       count += 1;

           // }
        }
        console.log(count)  
    }
    
}
rampNumber(321)
console.log(count)
 
/**
 * 
 * function rampNumber(num){
    var magicNumber = num.toString().split("").map(Number);
    
    // set up a way to decrease the numbere by 1

    // then check if it is a ramp number
    for (let i=0; i<magicNumber.length; i++){
        if(magicNumber[i] > magicNumber[i-1]){
            // if it is add to count
        
        }  
}
}
rampNumber(1253);
console.log(count)

 */