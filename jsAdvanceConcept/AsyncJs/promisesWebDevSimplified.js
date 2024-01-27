const video1 = new Promise((resolve,reject)=>{
    resolve('video 1 is completed');
})
const video2 = new Promise((resolve,reject)=>{
    resolve('video 2 is completed');
})
const video3 = new Promise((resolve,reject)=>{
    resolve('video 3 is completed');
})
Promise.all([
    video1,
    video2,
    video3
]).then((messages)=>{
    console.log(messages);
})
// Promise.race([
//     video1,
//     video2,
//     video3
// ]).then((message)=>{
//     console.log(message);
// })