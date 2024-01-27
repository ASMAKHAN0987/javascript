let datas=[
    {name:"ayesha",profession:"engineer"},
    {name:"tania",profession:"doctor"}];
// function getDatas(){
//     setTimeout(()=>{
//         let output="";
//         datas.forEach((data,index)=>{
//             output+=`<li>${data.name}</li>`;
//         })
//         document.body.innerHTML=output;
//     },5000);
// }
// getDatas();
// function createData(newData){
//  setTimeout(()=>{
//   datas.push(newData);
//  },2000);
// }
// createData({name:'ali',profession:"plumber"});
console.log("hellllllo");
// so the value of newly object won't append with body so what we will do we will pass this call back as an argument to createData function then after completing it's timer then getData func is called
// asynchronous using callback;

// function getDatas(){
//     setTimeout(()=>{
//         let output="";
//         datas.forEach((data,index)=>{
//             output+=`<li>${data.name}</li>`;
//         })
//         document.body.innerHTML=output;
//     },1000);
// }
// getDatas();
// function createData(newData,callback){
//  setTimeout(()=>{
//   datas.push(newData);
//   callback();
//  },2000);
// }
// createData({name:'ali',profession:"plumber"},getDatas);

// async using promises
// function getDatas(){
//     setTimeout(()=>{
//         let output="";
//         datas.forEach((data,index)=>{
//             output+=`<li>${data.name}</li>`;
//         })
//         document.body.innerHTML=output;
//     },1000);
// }
// function createData(newData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             datas.push(newData);
//             let error=false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject("there is some problem....");
//             }
//            },2000);
        
//     });
// }
    
//    createData({name:'ali',profession:"plumber"}).then(getDatas).catch(err=>console.log(err));


//    async using async and await
   function getDatas(){
    setTimeout(()=>{
        let output="";
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`;
        })
        document.body.innerHTML=output;
    },1000);
}
function createData(newData){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                datas.push(newData);
                let error=false;
                if(!error){
                    resolve();
                }else{
                    reject("there is some problem....");
                }
               },2000);
            
        });
    }
        
async function start(){
    await createData({ name: 'ali', profession: "plumber" });
    getDatas();
}
start();