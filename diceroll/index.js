function diceroll(){
    const numOfDice=document.getElementById("numOfDice").value;
    const diceResults=document.getElementById("number")
    const image=document.getElementById("image")
    const values=[];
    const resultImage=[];
    for(let i=0;i<numOfDice; i++){
        const value=Math.floor(Math.random*6)+1
        values.push(value);
        resultImage.push(`<image src="diceroll/images/${value}.png" alt="dice${value}">`)
         }
    diceResults.textContent=`dice: ${values.join(',')}`;
    image.innerHTML=resultImage.join('');
}