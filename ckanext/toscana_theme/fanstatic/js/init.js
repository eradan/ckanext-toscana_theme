$(document).ready(function(){
    /* INIT */
    $('a.nuovafinestra').click(function(){
            $(this).attr('target','_blank');
    });
    $('a.disabled').click(function(event){
            event.preventDefault();
    });
    
    /*
    if($('.responsive-button').length > 0){
        $('.responsive-button').scrollToFixed({
            marginTop: $('#top-bar').outerHeight() + $('#nav-interna').outerHeight(),
            zIndex: 999
        });
    }
    */
    
    /* sistemo altezza box homepage */ 
    if($('.index #header').length > 0){
        var box_height = 0;
        $(".box-home .box-wrapper").each(function(){
            if(box_height < $(this).outerHeight())
                box_height = $(this).outerHeight();
        });
        $(".box-home .box-wrapper").each(function(){
            if(box_height > $(this).outerHeight())
                $(this).css("height", box_height+"px");
        });
    }
    
    /* miglioro la centratura verticale gli oggetti del footer */
    var footer_height = 0;
    $(".footer-col .inner").each(function(){
        if(footer_height < $(this).height())
            footer_height = $(this).height();
    });
    $(".footer-col .inner").each(function(){
        if(footer_height > $(this).height())
            $(this).css("height", footer_height+"px");
    });
    
    
    /* EVENTI */
    $(".responsive-button").click(function(){
         $("#sidebar-left").toggleClass("view");
         $("#sidebar-left").toggleClass("closed");
    });
    
    // posiziono la sidebar all'altezza giusta
    $('.responsive-button').click(function(){
        if($('aside.closed').length == 0 ){
            var altMain = $("#main").offset();
            var altezza = altMain.top - 110;
            $('html, body').animate({scrollTop:altezza}, 'slow');
        }
    });
    
    $(".right-zone .action a.altri-siti").click(function(event){
        event.preventDefault();
        $(this).toggleClass("open");
        
    });
    
    
    // Accordion filtro temi
    $('#filter-box h3').click(function(){
        $(this).parents(".filter-group").toggleClass("open");
        $(this).parents(".filter-group").find("ul").toggle(600);
        $(this).find("i").toggleClass("fa-angle-down");
        $(this).find("i").toggleClass("fa-angle-up");
    });
    
    /* disattiva tutti i filtri */
    $("#filter-box .close-all a").click(function(event){
        event.preventDefault();
        $(".filter-group ul li").removeClass("selected");
        $(".filter-group ul li .close-filter").remove();
        $(this).toggleClass("nothing");
        
    });
    
    // Select on/off filtro (aggiungo "pulsante" chiusura)
    $('#filter-box a.filter-descr').click(function(){
        $(this).parent().toggleClass("selected")
        var classe = $(this).parent().attr("class");
        if(classe.indexOf("selected") > 0){
            $(this).parent().find(".filter-descr").append('<div class="close-filter"><i class="fa fa-times"></i></div>');
        }else{
            $(this).parent().find(".close-filter").remove();
        }
        
        if($("#filter-box ul li.selected").length > 0 ){
            $("#filter-box .close-all a").removeClass("nothing");
        }else{
            $("#filter-box .close-all a").addClass("nothing");
        }
        
    });
    
    $('#filter-box .mostra-tutti').click(function(){
            $(this).toggle();
            /*$(this).parents(".filter-group").find("li.comprimibile").removeClass("nascosto");*/
            $(this).parents(".filter-group").find("li.comprimibile").toggle(200);
            $(this).parents(".filter-group").find(".comprimi").toggle(200);
    });
    $('#filter-box .comprimi').click(function(){
            $(this).toggle();
            /*$(this).parents(".filter-group").find("li.comprimibile").removeClass("nascosto");*/
            $(this).parents(".filter-group").find("li.comprimibile").toggle(200);
            $(this).parents(".filter-group").find(".mostra-tutti").toggle(200);
    });
    
    
    // login button
    $(".right-zone .action a.login").click(function(event){
        $(".overlay .sites").hide();    /* solo un overlay alla volta, nascondo l'altro */
        $(".right-zone .action a.altri-siti").removeClass("open"); /* stessa cosa per la classe open del link */
        $(".overlay .login-form").toggle();  // show/hide overlay
        // switch LOGIN/chiudi (this)
        if($(this).hasClass("open"))
             $(this).find("span").text("chiudi");
        else
            $(this).find("span").text("LOGIN");
        $(this).find("i").toggleClass("fa-lock");
        $(this).find("i").toggleClass("fa-times");
        
        // resetto altro link
        if($(".action a.altri-siti").hasClass("open")){
            $(".action a.altri-siti span").text("chiudi");
            $(".action a.altri-siti i").removeClass("fa-angle-down");
            $(".action a.altri-siti i").addClass("fa-times");
        }else{
            $(".action a.altri-siti span").text("altri siti");
            $(".action a.altri-siti i").addClass("fa-angle-down");
            $(".action a.altri-siti i").removeClass("fa-times");
        }
        
    });
    
    // altri siti button
    $(".right-zone .action a.altri-siti").click(function(event){
        $(".overlay .login-form").hide();  /* solo un overlay alla volta, nascondo l'altro */
        $(".right-zone .action a.login").removeClass("open"); /* stessa cosa per la classe open del link */
        $(".overlay .sites").toggle();  // show/hide overlay
        // switch altri siti/chiudi (this)
        if($(this).hasClass("open"))
             $(this).find("span").text("chiudi");
        else
            $(this).find("span").text("altri siti");
        $(this).find("i").toggleClass("fa-angle-down");
        $(this).find("i").toggleClass("fa-times");
        
        // resetto altro link
        if($(".action a.login").hasClass("open")){
            $(".action a.login span").text("chiudi");
            $(".action a.login i").removeClass("fa-lock");
            $(".action a.login i").addClass("fa-times");
        }else{
            $(".action a.login span").text("LOGIN");
            $(".action a.login i").addClass("fa-lock");
            $(".action a.login i").removeClass("fa-times");
        }
        
        // centratura link overlay
        if($(".overlay .sites").is(":visible") && $("body").width() > 480)
            centraLinkOverlay();
    });
 
});


$(window).resize(function(){
    /* INIT */
    if($("body").width() > 480)
        centraLinkOverlay();
    
    var bar_width = 0;
    if($(".progress-container").length > 0){
        $(".progress_bar").each(function(){
            bar_width = $(this).width() + 10;
            $(this).parents(".progress-container").find(".nr").css("left", bar_width+"px");
            $(this).parents(".progress-container").find(".nr").css("right", "none");
        });
    }
    
    /*if($('.index #header').length > 0){
        var box_height = 0;
        var diff = 0;
        $(".box-home").each(function(){
            if(box_height < $(this).height())
                box_height = $(this).height();
        });
        $(".box-home").each(function(){
            if(box_height > $(this).height()){
               diff =  box_height - $(this).height();
                $(this).find(".bottone").css("margin-top", (diff+30)+"px");
            }
        });
    }*/
    box_height = 0;
    $(".box-home .box-wrapper").css("height", "auto");
    /* sistemo altezza box homepage */ 
    if($('.index #header').length > 0){
        $(".box-home .box-wrapper").each(function(){
            if(box_height < $(this).outerHeight())
                box_height = $(this).outerHeight();
        });
        $(".box-home .box-wrapper").each(function(){
            if(box_height > $(this).outerHeight())
                $(this).css("height", box_height+"px");
        });
    }
});

$(window).load(function(){
    /* progress bar homepage */
    var bar_width = 0;
    if($(".progress-container").length > 0){
        $(".progress_bar").each(function(){
            bar_width = $(this).width() + 10;
            $(this).parents(".progress-container").find(".nr").css("left", bar_width+"px");
            $(this).parents(".progress-container").find(".nr").css("right", "none");
        });
    }
});

function centraLinkOverlay(){
    var link_width = 0;
    var link_parent_width = 0;
    var my_padding = 0;
    /* centratura overlay sites */
    $(".overlay .sites a").each(function(){
        if(link_width < $(this).width()){
            link_width = $(this).width();
            link_parent_width = $(this).parent().outerWidth();
        }
    });
    
    my_padding = link_parent_width/2 - link_width/2;
    $(".overlay .sites li").css("padding-left", my_padding);
}
