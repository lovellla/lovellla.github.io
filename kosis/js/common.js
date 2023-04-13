$(document).ready(function(){
    var btn = $(".detail_btn");
    var ui_box = $(".sortable").width();
    var num = 1;
    
    btn.click(function(){
      if( num > 0){
        $(this).parent().animate({
          left: + ui_box
        });
        $(this);
        num = num - ui_box;
      }else {
        $(this).parent().animate({
          left: 0
        });
        $(this);
        num = num + ui_box;
      }
      console.log(num)
      console.log(ui_box)
    });
  });