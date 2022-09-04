'use strict'
const logEL=document.querySelector('.log-el')
const createEl=document.querySelector('.btn-create')
const submitEl=document.querySelector('.submit-el')
const error=document.querySelector('.error')
const fullname=document.querySelector('.fullname')
const number=document.querySelector('.number')
const username=document.querySelector('.username')
const email=document.querySelector('.email')
const password=document.querySelector('.password')
const conPass=document.querySelector('.confirm-password')

const errorSms=function (el,sms) {
    const err=el.parentElement
    const errorDis=err.querySelector('.error')
    
    errorDis.innerText=sms
    el.classList.remove('success-border')
    el.classList.add('error-border')

}
const successSms=function (el,sms) {
    const err=el.parentElement
    const errorDis=err.querySelector('.error')
    
    errorDis.textContent=''
    el.classList.remove('error-border')
    el.classList.add('success-border')

}
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const formValidation=function () {
  const trimEmail=email.value
  const trimFullname=fullname.value
  const trimUser=username.value
  const trimPass=password.value
  const trimCon=conPass.value
  const trimNUmber=number.value
  
  if(trimFullname===''){
    errorSms(fullname,'fill in the provided space')
  }
  else if (!trimFullname.includes(' ')) {
  errorSms(fullname,'please provide a valid name')
  }
  else {
    successSms(fullname)
  };

  if(trimNUmber===''){
    errorSms(number,'fill in the provided space')
  }
  else if (trimNUmber.length > 11 || trimNUmber.length < 11) {
  errorSms(number,'provide a valid number')
    
  } 
  else {
    successSms(number)
  };

   if(trimPass===''){
    errorSms(password,'please fill the provided space')
  }
  else if (trimPass.length < 8) {
    errorSms(password,'password is too short')
  } 
  else {
    successSms(password)
  };

  if(trimCon===''){
    errorSms(conPass,'fill in the provided space')
  }
  else if (trimCon!==trimPass) {
    errorSms(conPass,'password does not match')
  } 
   else {
    successSms(conPass)
  };

  if (trimUser==='') {
    errorSms(username,'fill in the provided space')
  } else {
    successSms(username)
  };

  if(trimEmail===''){
    errorSms(email,'fill in the provided space')
  }
 else if (!isValidEmail(trimEmail)) {
    errorSms(email,'provide a valid email')
  } 
   else {
    successSms(email)
  };
if (username.classList.contains('success-border')&& fullname.classList.contains('success-border')&&password.classList.contains('success-border')
&&number.classList.contains('success-border')&&email.classList.contains('success-border')&&conPass.classList.contains('success-border')) {
  alert('you have created an account successfully')
 setTimeout(function (params) {
  window.location.href="http://127.0.0.1:5500/index.html"
 },3000)
 
}


};


submitEl.addEventListener('click',function (e) {
    e.preventDefault();
    formValidation();

});