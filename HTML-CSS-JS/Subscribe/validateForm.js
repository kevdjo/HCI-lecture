


let submitButton = document.getElementById("submitBtn")

let errorFName = document.getElementById("error-fName")
let errorLName = document.getElementById("error-lName")
let errorEmail = document.getElementById("error-eMail")
let errorCountry = document.getElementById("error-Country")
let errorPhone = document.getElementById("error-phoneNum")
let errorCheck = document.getElementById("error-Check")
let success = document.getElementById("success")
let textTandC = document.getElementById("tandc")
let subBG = document.getElementById("subsBackground")

textTandC.addEventListener("click", ()=>{
    let checkList = document.getElementById("tick-box")

    checkList.checked = true
})


submitButton.addEventListener("click", () =>{

    event.preventDefault()
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let emailName = document.getElementById("emailName")
    let country = document.getElementById("countrySelect")
    let phoneNum = document.getElementById("phoneNumber")
    let checkList = document.getElementById("tick-box")

    let validInvalid = true

    if(firstName.value.length == 0){
        errorFName.innerHTML = "Enter First Name"
        errorFName.style.display = "block"
        firstName.style.border = "1px solid red"
        validInvalid = false
    }else{
        firstName.style.border = "none"
        errorFName.style.display = "none"
    }
    
    if(lastName.value.length == 0){
        errorLName.innerHTML = "Enter Last Name"
        errorLName.style.display = "block"
        lastName.style.border = "1px solid red"
        validInvalid = false
    }else{
        lastName.style.border = "none"
        errorLName.style.display = "none"
    }
    
    if(!emailName.value.includes("@") || emailName.value.length == 0){
        errorEmail.innerHTML = "Enter Your Email"
        errorEmail.style.display = "block"
        emailName.style.border = "1px solid red"
        validInvalid = false
    }else{
        emailName.style.border = "none"
        errorEmail.style.display = "none"
    }

    if(country.value == ""){
        errorCountry.innerHTML = "Select Your Country"
        errorCountry.style.display = "block"
        country.style.border = "1px solid red"
        validInvalid = false
    }else{
        errorCountry.style.display = "none"
        country.style.border = "none"
    }
    

    if(isNaN(phoneNum.value) || phoneNum.value.length == 0 || phoneNum.value.length > 20){
        errorPhone.innerHTML = "Enter Your Phone Number"
        errorPhone.style.display = "block"
        phoneNum.style.border = "1px solid red"
        validInvalid = false
    }else{
        phoneNum.style.border = "none"
        errorPhone.style.display = "none"
    }

    if(validInvalid == false){
        subBG.style.height = "140vh"
    }

    if(!checkList.checked){

        setTimeout(()=>{
            alert("Please agree to our terms and conditions")
        }, 500 )
        validInvalid = false
    }

    if(validInvalid == true){
        success.style.display = "block"
        success.innerHTML = "Thank You For Subscribing. Kindly Check Your Email For Verification"
    }
    
})

