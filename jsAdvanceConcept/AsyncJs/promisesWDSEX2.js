const userLeft = false;
const userWatchingCatMeme=false;

// function watchTutorialCallback(callback,errorCallback){
//     if(userLeft){
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })} 
//         else if(userWatchingCatMeme){
//             errorCallback({
//                 name: 'User Watching Cat Meme',
//                 message: 'WDS < cat'
//             })
//         }
//         else{
//             callback('Thumbs up and subscribe');
//         }
//     }
//     watchTutorialCallback((message)=>{
//         console.log('success', + message);
//     },(error)=>{
//         console.log(error.name + ' ' + error.message);
//     })

    // let's change this call back into promises
    let promise = new Promise((resolve,reject)=>{
        if(userLeft){
            reject({
                name: 'User Left',
                message: ':('
            })}
            else if(userWatchingCatMeme){
                reject({
                    name: 'User Watching Cat Meme',
                    message: 'WDS < cat'
                })
            }
            else{
                resolve('Thumbs up and subscribe');
            }
        })
        promise.then((message)=>{
            console.log('success '+ message);
        }).catch((error)=>{
            console.log(error.name + ' ' + error.message);

        })
        