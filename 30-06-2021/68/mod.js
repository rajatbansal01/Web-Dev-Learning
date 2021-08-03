function average(arr){
    let sum = 0;
    arr.forEach(element=>{
        sum+=element;
    });
    return sum/arr.length;
}

module.exports = {
    avg: average,
    name: "Rajat Bansal", 
    role : "founder"
}

// module.exports.name = "Rajat Bansal";  we can use like this also

/// binary sort