$(document).ready(function(){
  $('.myCarousel').owlCarousel({
    items : 5,
    margin : 10,
    loop : true,
    nav : true,
    // dots : false,
    autoplay: true,
    autoplayHoverPause : true,
    smartSpeed : 100,
    responsive : {
      0 :
      {
        items : 1
      },
      768 : {
        items : 2
      },
      992 : {
        items : 3
      },
      1200 : {
        items : 5
      }
    }
  });

  $('.owl-prev').empty().append('<i class="bi bi-arrow-left-square-fill"></i>');
  $('.owl-next').empty().append('<i class="bi bi-arrow-right-square-fill"></i>');
});



