let cl=console.log;


let postUrl=`https://jsonplaceholder.typicode.com/posts`;
let commentsUrl=`https://jsonplaceholder.typicode.com/comments`;
let photosUrl=`https://jsonplaceholder.typicode.com/photos`;

const makeApicall=async (apiUrl,methodName,msgBody)=>{
    let res= await fetch(apiUrl,{
        method:methodName,
        body:msgBody
    })
    return res.json()
}


//api call is in sequence//
// const init=async()=>{
// let postArr=await makeApicall(postUrl,"GET")
// let commentsArr=await makeApicall(commentsUrl,"GET")
// let photosArr=await makeApicall(photosUrl,"GET")

// cl(postArr)
// cl(commentsArr)
// cl(photosArr)

// }

// init()

// imp interview que//
//parallel= promise.all(array of promise)
// Promise.all takes multiple promises from array and returns single promise//first letter is capital

// const apiparallelly=async()=>{
//     let promiseArr=[makeApicall(postUrl,"GET"),makeApicall(commentsUrl,"GET"),makeApicall(photosUrl,"GET")]
//     let allData=await Promise.all(promiseArr)// it return signle promise
//     cl(allData)
// }

// apiparallelly()

// when u want data all together parallely at a time u can use Promise.all method //
// so in parallel method it consumes less time//



//Promise.race()//

// it also returns a single promise//
//we pass array to Promise.race()

const apirace=async()=>{
    let promiseArr=[makeApicall(postUrl,"GET"),makeApicall(commentsUrl,"GET"),makeApicall(photosUrl,"GET")]
   let data=await Promise.race(promiseArr)
   cl(data)
}

apirace()

// the url whos has less posts will show in console it consumes less time than others i.e.postsurl 


// we have to store array of data in different declarations

const apiparallelly=async()=>{
    let promiseArr=[makeApicall(postUrl,"GET"),makeApicall(commentsUrl,"GET"),makeApicall(photosUrl,"GET")]
    let allData=await Promise.all(promiseArr)// it return signle promise
    // cl(allData)
    let photosOne=allData[0];
    let commentsTwo=allData[1];
    let photosThree=allData[2];
    
    cl(photosOne);
    cl(commentsTwo);
    cl(photosThree);
}

apiparallelly()