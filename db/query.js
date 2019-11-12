const connection = require('./db.js');

module.exports = (sql,params=[]) => {
    return new Promise((resolve,reject) => {
        connection.query(sql,params,(error,data) => {
            if(error){
                reject({mesg:'error',error})
            }else{
                resolve({msg:"success",data})
            }
        })
    })   
}