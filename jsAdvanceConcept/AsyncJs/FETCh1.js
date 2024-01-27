// fetch("readme.txt").then((response)=>{
//     response.text();
// });
// }).then((data)=>{
//     document.write(data);
// }).catch((err)=>console.log("errrr",err));


// fetch("readme.txt").then(response=> response.text()).then(data=>document.write(data)).catch(err=>console.log("errrr",err));
// now let's use with fetch with json data
fetch("https://jsonplaceholder.typicode.com/users").then(response=> response.json()).then(data=>console.log(data)).catch(err=>console.log("errrr",err));