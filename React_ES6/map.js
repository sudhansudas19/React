//higher order function
    //-> any fn that takes another function as an argument or returns another function

    //Suppose we have to double array element

    // let arr=[1,2,3,4,5,6];
    // let narr=[];
    // for(let i=0;i<arr.length;i++){
    //     narr[i]=2*arr[i];
    // }
    // console.log(narr);
    // console.log(arr);



    // let arr=[1,2,3,4,5,6];
    // let narr=[];
    // for(let i in arr){
    //     narr[i]=2*arr[i];
        
    // }
    // console.log(narr);
    // console.log(arr);

    //learn for each loop

    //ByDefault Inside prototype --> map, filter and reduce function are available

   // map fn accept another callback function as argument and manipulation 
   let arr=[1,2,3,4,5,6];
   let fn=function(el){
       console.log(el);
       return 2*el;
   }
   let narr=arr.map(fn)
   console.log(narr);


