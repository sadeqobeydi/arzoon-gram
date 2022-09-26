/* ----------scroll mnue ------------------*/
const navigation = document.querySelector("nav")
let first_scroll = window.scrollY


document.body.onscroll = addEventListener("scroll" , scrollMnue)

function scrollMnue(){
    let last_scroll = window.scrollY
    
    if(last_scroll > first_scroll){
        navigation.style.top = "-55px"
    }
    else if(last_scroll < first_scroll){
        navigation.style.top = "0px"
    }
    
    first_scroll = last_scroll
}

/* ---------- end of scroll mnue ------------------*/


/* ----------- web servises----------------------- */

let instagram;
let telegram;
let whatsapp;
let email;
let xhr = new XMLHttpRequest()

xhr.open('GET' , "http://arzongram.ir/api/v1/settings/home_page" , true)
xhr.send()

xhr.onload = function(){
    if(xhr.readyState == 4 || xhr.status == 200){
        let resp = JSON.parse( xhr.response)
        
        telegram = resp.data.value.telegram;
        instagram = resp.data.value.instagram;
        whatsapp = resp.data.value.whatsapp;
        email = resp.data.value.email;
        
        
        
    }
}
/* ----------- end of web servises----------------------- */

/* ---------- link web servises ------------------------- */
let links = document.getElementsByClassName("link")

for(let link of links){
    link.addEventListener("click" , openingPage)
}

function openingPage(even){
    if(even.target.classList.contains("telegram")){
        window.open(telegram)
    }
    else if(even.target.classList.contains("instagram")){
        window.open(instagram)
    }
    else if(even.target.classList.contains("whatsapp")){
        window.open(whatsapp)
    }
    else if(even.target.classList.contains("email")){
        window.open(email)
    }
}

/* ---------- end of link web servises ------------------------- */