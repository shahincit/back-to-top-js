$(document).ready(function(){
  
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
         $('.btn_back_top').fadeIn();  
        }else{
            $('.btn_back_top').fadeOut();
        }
    });
    
    $('.btn_back_top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});