

///////////////
///////////////
///// Return reverse integer function, very basic, will work on more if I have time



///// just testing functions
// let randomNum = 15
// console.log(randomNum)
// let stringNum = randomNum.toString();
// console.log(stringNum);





function reverse(num){
    let newArr = [];
    // console.log(num);
    let numStr = num.toString();
    // console.log(numStr);
    const numArr = numStr.split('');
    // console.log(numArr.length);
    for(let x = 0; x < numArr.length; x++){
        newArr.unshift(numArr[x]);

    }
    // console.log(newArr);
    let answer = newArr.join('');
    // console.log(answer);
    return answer
    ///// abandoned this code
    // for(let x = 0; x < numArr.length; x++){
    //         console.log('new Arr before push ' + newArr);
    //         console.log('num array before shift ' + numArr);
    //         newArr.push(numArr[0]);
    //         console.log('new Arr after push ' + newArr);

    //         numArr.shift();
    //         console.log('num array after shift ' + numArr);
    //         console.log('======================');
    // }
    // console.log('answer: ' + newArr);
}



console.log(reverse(10));




///////////////
////////////
//// Return most user character

/////// Didn't finish it, was working on using Object.keys to figure which key had the highest count

function mostUsed(str){
    /////// found how to create a counting object on google
    let letterCount = {};
    let strArr = str.split('');
    console.log(strArr);
    for(let x = 0; x < strArr.length; x++){
        if(letterCount[strArr[x]]){
            letterCount[strArr[x]] += 1;
        }else{
            letterCount[strArr[x]] = 1;
        }
    }
    console.log(letterCount);
    ////// Now i go over the object to see which character has the most
    let highestKey = 0;
    for(let letter in letterCount){
        console.log(Object.keys(letterCount));
        console.log(letterCount[letter]);
        if(letterCount[letter] > highestKey){
            highestKey = Object.keys(letterCount[letter])
            console.log(Object.keys(letterCount[letter]))
        }else{
            continue;
        }
    }
    console.log('highest key ' + highestKey);
    console.log(highestKey);
    
    }




mostUsed('hello');