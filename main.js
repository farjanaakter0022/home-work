 $(function(){     'use strict'
    $(window).on('scroll',function(){       var scrollTop = $(this).scrollTop();
       if(scrollTop>500){
           $('#back-top').fadeIn(500)
       }
       else{
           $('#back-top').fadeOut(500)
       }
     })
     $('#back-top').on('click',function(){
         $('html,body').animate({
            scrollTop:0
         },
        
         600
        );
       
    });
    

 })


