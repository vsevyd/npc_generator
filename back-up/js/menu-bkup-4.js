$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header, .header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
    document.getElementById("s_lang").value = localStorage.getItem("lS_Lang");
    document.getElementById("NP_Char").value = localStorage.getItem('lS_NPCtype');
    set_lang();
    showfield();

});
