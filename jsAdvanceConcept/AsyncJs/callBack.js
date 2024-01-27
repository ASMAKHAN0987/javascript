// You can take a function and pass it to another function. This is known as call back function.
// This technique allows a function to call another function

// A callback function can run after another function has finished
// setTimeout(()=>{
//     console.log("timer!");
// },1000);
//     function y(x){
//         x();
//     }
//     function x(){
//         console.log("hello");
//     }
//     y(x);
    function clicked(){
        let count = 0;
        document.querySelector('.clicked').addEventListener("click",function xyz(){
            // count++;
            console.log("cliked",++count);
        });
    }
    clicked();

    