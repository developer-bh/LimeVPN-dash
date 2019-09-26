$(document).ready(function() {

    // Rewards add new form

    // Add new element
    $(".add").click(function(){
        // Finding total number of elements added
        var total_element = $(".element").length;
        // last <div> with element class id
        var lastid = $(".element:last").attr("id");
        var split_id = lastid.split("_");
        var nextindex = Number(split_id[1]) + 1;
        var max = 10;
        // Check total number elements
        if(total_element < max ){
            // Adding new div container after last occurance of element class
            $(".element:last").after("<div class='element' id='div_"+ nextindex +"'></div>");
            // Adding element to <div>
            $("#div_" + nextindex).append("<input type='email' placeholder='Add names or email addresses' id='add_"+ nextindex +"'><input type=\"submit\" value='Send Invite'><span id='remove_" + nextindex + "' class='remove'>+</span>");
        }
    });

    // Remove element
    $('.container').on('click','.remove',function(){

        var id = this.id;
        var split_id = id.split("_");
        var deleteindex = split_id[1];

        // Remove <div> with id
        $("#div_" + deleteindex).remove();

    });

    // Modal close stop video

    $('#tutorial').on('hidden.bs.modal', function () {
        $("#tutorial iframe").attr("src", $("#tutorial iframe").attr("src"));
    });

    // Select all billing

    $('.selectAll').click(function(e){
        var table= $('table');
        $('.form-check input:checkbox',table).prop('checked',this.checked);
    });

    // Remove hover on touch devices

    (function addPointerClasses() {
        var is_touch_event = false;

        function hasMouse() {
            if(is_touch_event === false) {
                document.documentElement.classList.add('mouse');
                document.body.removeEventListener('mousemove', hasMouse);
            }
        }

        document.body.addEventListener('mousemove', hasMouse);

        document.body.addEventListener('touchstart', function ()  {
            is_touch_event = true;
        });
        document.body.addEventListener('touchend', function ()  {
            is_touch_event = false;
        });
        document.body.addEventListener('click', function ()  {
            if(is_touch_event) is_touch_event = false;
        });

        function isTouchDevice() {
            try {
                document.createEvent('TouchEvent');
                return true;
            } catch (e) {
                return false;
            }
        }

        if(isTouchDevice()) {
            document.documentElement.classList.add('touch');
        }
    })();

    // Phone

    window.onload = function() {var input = document.querySelector("#phone"); window.intlTelInput(input);};

    // Header notification

    $('.notification_close').on('click', function () {
        $('.header__notification').slideUp();
    });

    // Hamburger

    $('#mob_nav').on('click', function () {
       $(this).toggleClass('active');
    });

    // Steps tabs

    $('.btnNext').click(function() {
        $('.nav-tabs .active').parent().next('li').find('a').trigger('click');
    });

    $('.btnPrevious').click(function() {
        $('.nav-tabs .active').parent().prev('li').find('a').trigger('click');
    });

    // Steps choose

    $('.steps__choose li').on('click', function () {
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

    // Chart open

    $('.chart_open').on('click', function () {
        $(this).toggleClass('rotate');
        $('.chart__content').slideToggle();
        $('.plan_graph__top').toggleClass('b-b');
    });

    // Submit feedback active

    $('.feedback_item__list li a').on('click', function () {
        $(this).parent('li').parent('.feedback_item__list').find('a').removeClass('active');
        $(this).toggleClass('active');
    });

    // Tutorials logos

    // $('.tutorials__logos li a').on('click', function () {
    //     $('.tutorials__logos li a').removeClass('active');
    //     $(this).toggleClass('active');
    // });

    // Tutorials instructions

    // $('.tutorials__instructions li a').on('click', function () {
    //     $('.tutorials__instructions li a').removeClass('active');
    //     $(this).toggleClass('active');
    // });

    // How to use accordion

    $('.accordion_action').on('click', function () {
        $(this).parent().find('.htu_list_item').slideToggle();
        $(this).parent('.box').toggleClass('active');
    });

    // Show password

    $(".toggle-password").click(function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $('.show_pass');
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
       $('.billing_subscribed').hide();
       $('.billing_active').show();
    });

    $('#nav-profile-tab').on('click', function () {
        $('.billing_subscribed').show();
        $('.billing_active').hide();
    });

    $('#nav-contact-tab').on('click', function () {
        $('.billing_subscribed').show();
        $('.billing_active').hide();
    });

    $('.billing_check .cr').on('click', function () {
        $('.billing_pay_meth').slideToggle();
        $('.billing_pay_meth ul li a').removeClass('active');
    });

    $('.plans_method__check .cr').on('click', function () {
        $('.plans_info__select').slideToggle();
    });

    // Billing payment

    $('.professional_billing ul li a').on('click', function () {
        $('.professional_billing ul li a').removeClass('active');
        $(this).addClass('active');
    });

    // Billing mobile

    $('.accordion_arrow').on('click', function () {
        $('.billing_accordion').removeClass('active');
        $(this).parent('.billing_accordion').addClass('active');
        $(this).parent('.billing_accordion').find('.accordion_hidden').slideToggle();
    });

    $('.plans_info__select a').on('click', function () {
        $('.plans_info__select a').removeClass('active');
        $(this).addClass('active');
    });

    $('.plans_method__card').on('click', function () {
        $('.plans_method__check').slideToggle();
    });

    // Chart

    $(function() {
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ['15-6-2019', '20-6-2019', '25-6-2019', '30-6-2019', '06-6-2019'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#2693ff',
                    pointRadius: 4,
                    borderColor: '#e6e6e6',
                    data: [0, 10, 5, 2, 20]
                }]
            },

            // Configuration options go here
            options: {
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            fontColor: "#808080",
                            fontSize: 11,
                            top: 25
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        }
                    }]
                }
            }
        });
    });

    Chart.Legend.prototype.afterFit = function() {
        this.height = this.height + 50;
    };

    $(function() {
        var ctx = document.getElementById('myChart2').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['06:00', '12:00', '18:00', '24:00'],
                datasets: [{
                    label: 'Download',
                    yAxisID: 'A',
                    backgroundColor: 'transparent',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#39b54a',
                    pointRadius: 0,
                    borderColor: '#39b54a',
                    borderWidth: 1,
                    data: [1, 4, 5, 5]
                }, {
                    label: 'Upload',
                    yAxisID: 'B',
                    backgroundColor: 'transparent',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#f7931e',
                    pointRadius: 0,
                    borderColor: '#f7931e',
                    borderDash: [8,3],
                    borderWidth: 1,
                    data: [2, 4, 6, 10]
                }]
            },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            fontColor: "#808080",
                            fontSize: 11,
                            top: 25
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        },
                        id: 'A',
                        type: 'linear'
                    }, {
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        },
                        id: 'B',
                        type: 'linear'
                    }]
                }
            }
        });
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

    // Plan modal wizard

    $(function() {
        $(".modal_professional").modalWizard();
    });

});

