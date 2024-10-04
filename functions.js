/**
 * Assignmnet 2  - Js Frameworks
 * Wint Pyae Shan, Cristopher Acevedo, Juan David Montana
 */


//Function 1: 
export const movieFunction = (movieName, location)=>{
    console.log("Tickets for " + movieName + " generated at " + location);
};

//Function 2: 
//Example 1
export const poundsToKilos = (pounds) => {
    let kilos = 0;
    kilos = pounds *0.453;
    return pounds + " pounds converted to kilos is the equivalent of " + kilos + "kg";
}
//Example 2
export const ConvertMilesToKm = (miles) =>{
    const aMileInKm = 1.60;
    let mileToKm = (miles * aMileInKm) / 1;
    let result = `${miles} miles converted to Kilometers is the equivalent of ${mileToKm} km`; 
    return result;
}

//Function 3:
export function fibonacciNum(n){
    let a = 0
    let b = 1
    let count = 2
    console.log('FIBONACCI SEQUENCE');
    while( count <= n){
        let nextNum = a + b;
        console.log(`${a} + ${b} = ${nextNum}`);
        a = b;
        b = nextNum;
        count++;
    }
    return b
}

// Function that calculates the area of a cylinder and volume.
export const cylinderArea_Volume = (radius, height) =>{

    //Area of Cylinder

    const totalArea = Math.round(2 * Math.PI * radius *(radius + height));

    //Volume of the Cylinder
    const volume = Math.round(Math.PI * Math.pow(radius, 2) * height);
    
    let finalData = `The area of the cylinder is ${totalArea} and its volume is ${volume}`;

    return finalData;
}

//Function 4:
export function reverseStr(str){
    return str.split('').reverse().join('');
}
