const crypto = require("crypto");
let num = 0;
while(true){

    let input = "100xdevs"+num.toString();
   const data = crypto.createHash("sha256").update(input).digest("hex");
   if(data.startsWith("00000")){
    console.log(num)
    break;
   }
   else{
    num++;
   }
}