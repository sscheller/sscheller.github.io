console.log('OK');

    // JQUERY NAV TOGGLE
    $('#menu').bind('click',function(event){
        $('#mainnav ul').slideToggle();
    });

    $(window).resize(function(){  
        var w = $(window).width();  
        if(w > 768) {  
            $('#mainnav ul').removeAttr('style');  
        }  
    });


    $('.tlt').textillate({ 
        in: { effect: 'fadeIn'}, 
        out: {effect: 'fadeOut'},
        loop:'true',
    });