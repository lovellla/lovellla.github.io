$(document).ready(function(){
    //유의사항 팝업
     // 유의사항1 - 통신모바일인구이동통계
            //open popup
            $('.status_btn.one').on('click', function(event){
              event.preventDefault();
              $('.precautions_popup.one').addClass('is-visible');
          });
          //close popup
          $('.precautions_popup').on('click', function(event){
              if( $(event.target).is('.precautions_close span')) {
                  event.preventDefault();
                  $(this).removeClass('is-visible');
              }
          });
          // 유의사항2 - 사회적현물이전을반영한소득통계
              //open popup
          $('.status_btn.two').on('click', function(event){
              event.preventDefault();
              $('.precautions_popup.two').addClass('is-visible');
          });
          
          //close popup
          $('.precautions_popup').on('click', function(event){
              if( $(event.target).is('.precautions_close span') ) {
                  event.preventDefault();
                  $(this).removeClass('is-visible');
              }
          });
          // 유의사항3 - 모바일기반국립공원이용량통계
               //open popup
          $('.status_btn.three').on('click', function(event){
              event.preventDefault();
              $('.precautions_popup.three').addClass('is-visible');
          });
          
          //close popup
          $('.precautions_popup').on('click', function(event){
              if( $(event.target).is('.precautions_close span')) {
                  event.preventDefault();
                  $(this).removeClass('is-visible');
              }
          });
          // 유의사항4 - 서울생활인구
          $('.status_btn.four').on('click', function(event){
              event.preventDefault();
              $('.precautions_popup.four').addClass('is-visible');
          });
          
          //close popup
          $('.precautions_popup').on('click', function(event){
              if( $(event.target).is('.precautions_close span')) {
                  event.preventDefault();
                  $(this).removeClass('is-visible');
              }
          });
          // 유의사항5 - 뉴스심리지수
          $('.status_btn.five').on('click', function(event){
              event.preventDefault();
              $('.precautions_popup.five').addClass('is-visible');
          });
          
          //close popup
          $('.precautions_popup').on('click', function(event){
              if( $(event.target).is('.precautions_close span')) {
                  event.preventDefault();
                  $(this).removeClass('is-visible');
              }
          });
          // 유의사항6 - 사업체 매출 및 영업일수
          $('.status_btn.six').on('click', function(event){
              event.preventDefault();
              $('.precautions_popup.six').addClass('is-visible');
          });
          
          //close popup
          $('.precautions_popup').on('click', function(event){
              if( $(event.target).is('.precautions_close span')) {
                  event.preventDefault();
                  $(this).removeClass('is-visible');
              }
          });
          // 유의사항7 - 노란우산공제(폐업)
          $('.status_btn.seven').on('click', function(event){
              event.preventDefault();
              $('.precautions_popup.seven').addClass('is-visible');
          });
          
          //close popup
          $('.precautions_popup').on('click', function(event){
              if( $(event.target).is('.precautions_close span')) {
                  event.preventDefault();
                  $(this).removeClass('is-visible');
              }
          });
          // 유의사항8 - 구인속보성지표
          $('.status_btn.eight').on('click', function(event){
              event.preventDefault();
              $('.precautions_popup.eight').addClass('is-visible');
          });
          
          //close popup
          $('.precautions_popup').on('click', function(event){
              if( $(event.target).is('.precautions_close span')) {
                  event.preventDefault();
                  $(this).removeClass('is-visible');
              }
          });
          // 유의사항9 - 가계지출속보성지표
          $('.status_btn.nine').on('click', function(event){
              event.preventDefault();
              $('.precautions_popup.nine').addClass('is-visible');
          });
          
          //close popup
          $('.precautions_popup').on('click', function(event){
              if( $(event.target).is('.precautions_close span')) {
                  event.preventDefault();
                  $(this).removeClass('is-visible');
              }
          });
          // 유의사항10 - 서울생활이동데이터
          $('.status_btn.ten').on('click', function(event){
              event.preventDefault();
              $('.precautions_popup.ten').addClass('is-visible');
          });
          
          //close popup
          $('.precautions_popup').on('click', function(event){
              if( $(event.target).is('.precautions_close span')) {
                  event.preventDefault();
                  $(this).removeClass('is-visible');
              }
          });
  });