const crypto = require("crypto");
let num = 0;
while(true){

       let inputStr = `
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
` + num.toString();
   const data = crypto.createHash("sha256").update(inputStr).digest("hex");
   if(data.startsWith("00000")){
    console.log(num)
    break;
   }
   else{
    num++;
   }
}