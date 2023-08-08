function canPay(changeArray, totalDue) 
{
    let sum = 0;

    if(changeArray.length===0)
    {
        let empty = 'Please provide a some number input.';
        return empty;
    }
   
    for(let i=0; i<changeArray.length; i++)
    {
        sum += changeArray[i];
    }
    
    if(sum>totalDue)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let changeArray = [5,2,5];
let totalDue = 10;
let result = canPay(changeArray, totalDue) ;
//console.log(result);