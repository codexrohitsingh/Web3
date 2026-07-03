const crypto = require("crypto")
const data = crypto.createHash('sha256').update("rohit").digest("hex")
console.log(data)