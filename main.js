'use strict';

//Ejercicio 1




function get100Numbers() {
    let array100 = [];

   for (let i=1; i<101; i++ ){
        array100.push(i);
    };   
    
    return array100;
    // const orderedList = array100;
    // return orderedList.reverse();
}

console.log(get100Numbers());


function getReversed100Numbers() {
//   let result = get100Numbers();
//   result = result.reverse();
return get100Numbers().reverse();
};

 console.log(getReversed100Numbers());


//Ejercicio 2





