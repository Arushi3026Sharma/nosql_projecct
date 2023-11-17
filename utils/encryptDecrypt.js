
const bcrypt = require('bcrypt');

const encryptDecrypt = {
    hashPwd(originalPwd){
        const hashedPwd = bcrypt.hashSync(originalPwd,10);
        return hashedPwd;


    },
    matchPwd(originalPwd,hashedPwd){

    }
}
module.exports= encryptDecrypt;