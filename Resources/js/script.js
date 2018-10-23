$(document).ready(function(){
   
    
//    sticky navigation
   $('.js--section-features').waypoint(function(direction){
       if(direction == "down"){
           $('nav').addClass('sticky');
       }
       else {
            $('nav').removeClass('sticky');
       }
   },{
       offset: '60px;'
   });
    
//    I’m hungry button
    $('.js--scroll-to-plans-section').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });
    
//    Show me more button
    $('.js--scroll-to-features-section').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-features').offset().top},500);
    });
    
//    navigation scroll
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
//    animation
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'
    })
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        offset: '50%'
    })
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    },{
        offset: '50%'
    })
    
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    },{
        offset: '50%'
    })
    
//    Mobile nav
//    $('.js--mobile-nav').click(function(){
//        var nav = $('.js--main-nav');
//        class close = $('<ion-icon name="close"></ion-icon>');
//        
//        nav.slideToggle(200);
//        var icon = $('.js--mobile-nav ion-icon');
//        
//        if(icon.hasClass('menu')){
//            icon.addClass('close');
//            icon.removeClass('menu')
//        }
//        else {
//            icon.addClass('menu');
//            icon.removeClass('close');
//        }
//        
//    });
    
    
//    mobile$(') nav
    $('.js--mobile-nav').click(function(){
       var nav = $('.js--main-nav');
       
        nav.slideToggle(200);
    });
});