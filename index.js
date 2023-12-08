const generateOTP =() => {
    const leangth = 6;
    let otp = "";

    for(let i=0; i<leangth; i++){
        otp += Math.floor(Math.random() *10);
    }
    return otp;
}

console.log(generateOTP());