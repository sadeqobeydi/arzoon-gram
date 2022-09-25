/* ----------scroll mnue */
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