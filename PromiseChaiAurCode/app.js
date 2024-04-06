const promiseOne=new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("data 1");
        resolve();
    }, 1000);
})

promiseOne.then(function(res){
    console.log("promise one resolve");
})


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("data 2");
        resolve();
    }, 1000);
}).then(()=>{
    console.log("promise two was");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        let err=false;
        if(!err){
            resolve({username:"omkar",email:"omkarDaskadkar123@gmail.com"})
        }
        else{
            reject("ERROR")
        }
    },1000)
}).then((user)=>{
    console.log("username = ",user.username);
}).catch((err)=>{
    console.log(err);
})


