
const validate=()=>{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    return check(username,password,valid);
};

const check=(username,password,callback)=>{
    if(username=="admin" && password=="12345"){
        //alert("Login successfully");
        return callback();
        //return true;
    }
    else{
        alert("Incurrect username or password");
        return false;
    }
};

const valid=()=>true;


