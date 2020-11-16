let flag=0;
// Password Checking

    function chkpswd(pswrd){
        var password_strength = document.getElementById("psw");
        var pswrd= document.getElementById("psw").value ;
        //TextBox left blank.
        if (pswrd.length == 0) {
            password_strength.innerHTML = "";
            return;
        }
 
        //Regular Expressions.
        var regex = new Array();
        regex.push("[A-Z]"); //Uppercase Alphabet.
        regex.push("[a-z]"); //Lowercase Alphabet.
        regex.push("[0-9]"); //Digit.
        regex.push("[$@$!%*#?&]"); //Special Character.
 
        var passed = 0;
 
        //Validate for each Regular Expression.
        for (var i = 0; i < regex.length; i++) {
            if (new RegExp(regex[i]).test(pswrd)) {
                passed++;
            }
        }
 
        //Validate for length of Password.
        if (passed > 2 && pswrd.length > 7) {
            passed++;
        }
 
        //Display status.
        

        //   document.getElementById("pass").innerHTML = passed;
          

        var color = "";
        var strength = "";
        switch (passed) {
            case 0:
            case 1:
                strength = "Weak";
                color = "red";
                break;
            case 2:
                strength = "Good";
                color = "orange";
                break;
            case 3:
            case 4:
                strength = "Strong";
                color = "yellow";
                break;
            case 5:
                strength = "Very Strong";
                color = "darkgreen";
                flag++;
                break;
        }
        password_strength.innerHTML = strength;
        password_strength.style.backgroundColor = color;
    }



    // Email Check

    function chkeml(eml){
        var email_strength = document.getElementById("mail");
        var eml= document.getElementById("mail").value ;
        let exp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
        //TextBox left blank.
        
        if(exp.test(eml)){
            email_strength.style.backgroundColor = "green";
            flag++;
            return true;

        }    
        
        else{
            email_strength.style.backgroundColor = "red";
            
           // alert("Invalid..!!")
            return false;

        }
        
    } 

    //Phone check

    function chkphone(phn){
        var phone_strength = document.getElementById("phone");
        var phn= document.getElementById("phone").value ;
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if((phn.match(phoneno)))
        {
            phone_strength.style.backgroundColor = "green";
            flag++;
            return true;
        }
        else
        {
            phone_strength.style.backgroundColor = "red";
            
            return false;
        }
}

//Register

