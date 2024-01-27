function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`Making request to ${location}`);
        if(location=='Google'){
            resolve('Google says hi')
        }else{
            reject('Sorry!!!! We can only talk to Google')
        }
    })
}
function proceedRequest (response){
    return new Promise((resolve,reject)=>{
        console.log('processing request');
        resolve(`Extra Information ${response}`);
    })
}
// makeRequest('Google').then((response)=>{
//     console.log('Response Received');
//     return proceedRequest(response)
// }).then((proceededRequest)=>{
//     console.log(proceededRequest);
// }).catch((error)=>{
//       console.log(error);
// })
async  function doWork(){
    try{
        const response = await makeRequest('Google');
        console.log('Response Received');
        const proceedResponse = await proceedRequest(response);
        console.log(proceedResponse);
    }
    catch(err){
        console.log(err);
    }
}
doWork();