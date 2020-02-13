/**
 * Created by fabiomadeira on 25/02/15.
 */
// jQuery for page scrolling feature

jQuery(document).ready(function(e) {
    
    language();
    
    e(".scroll").click(function(t) {
        t.preventDefault();
        e("html,body").animate({
            scrollTop: e(this.hash).offset().top
        }, 1e3)
    })
    var lang;
    
});

function language() {
    if (!getCookie("lang")) {
        lang = navigator.language || navigator.userLanguage;
        setCookie("lang", lang, 7);
    } 

    lang = getCookie("lang");
    if(lang != document.getElementsByTagName("html")[0].lang) {
        var languageLink = document.getElementById("translate_page_" + lang).href;
        location.href = languageLink;
    }
}

function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

function setLanguage(lang) {
    setCookie("lang", lang, 7);
    var languageLink = document.getElementById("translate_page_" + lang).href;
    location.href = languageLink;
}

const processForm = form => {
    const data = new FormData(form)
    fetch('/', {
      method: 'POST',
      body: data,
    })
    .then(() => {
        $('#modalContact').modal('toggle');
        $("#success-alert").fadeTo(3000, 500).slideUp(500, function(){
            $("#success-alert").slideUp(500);
        });
        form.reset();
        if(window.grecaptcha) {
            grecaptcha.reset();
        }
    })
    .catch(error => {
        $('#modalContact').modal('toggle');
        $("#error-alert").fadeTo(3000, 500).slideUp(500, function(){
            $("#error-alert").slideUp(500);
        });
        form.reset();
        if(window.grecaptcha) {
            grecaptcha.reset();
        }
    })
}

const contactForm = document.querySelector('.contact-form')
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        processForm(contactForm);
    })
}