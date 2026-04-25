let size = 8;
let row= "";
for (let p=0; p<size; p+=1){
    for (let i=0; i<size; i+=1){
    
        if (i%2===0){
            row+=" "
        }
        else{
            row+="#"
        }

    }
    console.log(row)
    row=""
    for (let h=0; h<size; h+=1){
        if (h%2===0){
            row+="#"
        }
        else{
            row+=" "
        }
    }
    console.log(row)
    row=""
}