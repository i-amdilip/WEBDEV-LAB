
let userName = prompt("Enter the userName : ");
let userRoll = Number(prompt("Enter the userRoll :"));
let userClass = prompt("Enter the userClass  :");

let user = {
    userName,
    userRoll,
    userClass,
    assignValue : function (userName , userRoll , userClass){
        this.userName = userName;
        this.userClass = userClass;
        this.userRoll = userRoll;
    },
    greet : function(){
        console.log(this.userName,this.userClass,this.userRoll);
    }
}

user.assignValue(userName , userClass , userRoll);
user.greet();