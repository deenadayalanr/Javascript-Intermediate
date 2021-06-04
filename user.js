
  
let userArray=[];

const login=(email,password) => {
    const userLogin={
        email:email,
        password:password
    }

    const value=userArray.find((data) => {data.email===userLogin.email && e.password === userLogin.password});

    if(value!==undefined){
        console.log('User Login Successful');
    } else {
        console.log('Invalid Login Credentials');
    }
};

const register=(name,email,mobileNumber,age,password,confirmPassword) => {
    const User={
        name:name,
        email:email,
        mobileNumber:mobileNumber,
        age:age,
        password:password,
        confirmPassword:confirmPassword
    };

    if(User.password.length<8){
        console.log('Please Enter a Password of Atleast 8 Characters');
    }
    else{
        if(User.password === User.confirmPassword){
            const passwordStrength = User.password.split("");
            console.log('User Registration Successful');
            userArray.push(User);
        }
        else{
            console.log('Your Password and Confirm Password does not match');
        }
    }
};

register('Raj','raj@gmail.com','9791654694',21,'12345678','12345678');

register('Deenadayalan','deena@gmail.com','6369545210',21,'12345678','12345678');

// console.log(userArray);

login('deen@gmail.com','12345678');
