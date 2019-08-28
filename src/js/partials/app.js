$(document).ready(function() {

    // Chart

    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

    // Header notification

    $('.notification_close').on('click', function () {
        $('.header__notification').slideUp();
    });

    // Steps tabs

    $('.btnNext').click(function() {
        $('.nav-tabs .active').parent().next('li').find('a').trigger('click');
    });

    $('.btnPrevious').click(function() {
        $('.nav-tabs .active').parent().prev('li').find('a').trigger('click');
    });

    // Steps choose

    $('.steps__choose li a').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.steps__device li a').on('click', function () {
        $('.steps__device li a').removeClass('active');
        $(this).toggleClass('active');
    });

    $('.steps__instructions li a').on('click', function () {
        $('.steps__instructions li a').removeClass('active');
        $(this).toggleClass('active');
    });

    // Submit feedback active

    $('.feedback_item__list li a').on('click', function () {
        $(this).parent('li').parent('.feedback_item__list').find('a').removeClass('active');
        $(this).toggleClass('active');
    });

    // Tutorials logos

    $('.tutorials__logos li a').on('click', function () {
        $('.tutorials__logos li a').removeClass('active');
        $(this).toggleClass('active');
    });

    // Tutorials instructions

    $('.tutorials__instructions li a').on('click', function () {
        $('.tutorials__instructions li a').removeClass('active');
        $(this).toggleClass('active');
    });

    // How to use accordion

    $('.accordion_action').on('click', function () {
        $(this).parent().find('.htu_list_item').slideToggle();
        $(this).parent('.box').toggleClass('active');
    });

    // Show password

    $(".toggle-password").click(function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $('#current_password');
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    // Close notification

    $('.icon_close').on('click', function () {
       $(this).parent('li').fadeOut();
    });

    $(".dropdown-menu").click(function(e){
        e.stopPropagation();
    });

    // Modal dashboard

    $(window).on('load',function(){
        $('#tutorial').modal('show');
    });

    // Billing

    $('#nav-home-tab').on('click', function () {
       $('.billing_subscribed').show();
       $('.billing_active').hide();
    });

    $('#nav-profile-tab').on('click', function () {
        $('.billing_subscribed').hide();
        $('.billing_active').show();
    });

    $('#nav-contact-tab').on('click', function () {
        $('.billing_subscribed').hide();
        $('.billing_active').show();
    });

    // Billing payment

    $('.professional_billing ul li a').on('click', function () {
        $('.professional_billing ul li a').removeClass('active');
        $(this).addClass('active');
    });

    // Plan modal wizard

    $("#professional").modalWizard();

    // Phone

    var input = document.querySelector("#phone"); window.intlTelInput(input);

});

// Plans Toggle

var e = document.getElementById("filt-monthly"),
    d = document.getElementById("filt-yearly"),
    t = document.getElementById("switcher"),
    m = document.getElementById("monthly"),
    y = document.getElementById("yearly");

e.addEventListener("click", function(){
    t.checked = false;
    e.classList.add("toggler--is-active");
    d.classList.remove("toggler--is-active");
    m.classList.remove("hide");
    y.classList.add("hide");
});

d.addEventListener("click", function(){
    t.checked = true;
    d.classList.add("toggler--is-active");
    e.classList.remove("toggler--is-active");
    m.classList.add("hide");
    y.classList.remove("hide");
});

t.addEventListener("click", function(){
    d.classList.toggle("toggler--is-active");
    e.classList.toggle("toggler--is-active");
    m.classList.toggle("hide");
    y.classList.toggle("hide");
});
