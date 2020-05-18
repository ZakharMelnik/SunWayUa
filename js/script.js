$(document).ready(function() {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });

    $('.sf1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      draggable: false,
      asNavFor: '.sn1',
      dots: false
    });
    $('.sn1').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.sf1',
      centerMode: false,
      focusOnSelect: true,
      vertical: true,
      dots: false,
      arrows: false,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
    });  

    $('.sf2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      draggable: false,
      asNavFor: '.sn2',
      dots: false
    });
    $('.sn2').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.sf2',
      centerMode: false,
      focusOnSelect: true,
      vertical: true,
      dots: false,
      arrows: false,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
    });  

});

function call4() {
    var msg   = $('#form-more4').serialize();
    $('#form-more4 button').prop('disabled',true); // блокирует множественные отправки сообщения с формы.
    $.ajax({
        type: 'POST',
        url: 'send-more.php',
        data: msg,
    success: function(data) {
        $('.modal-thanks').addClass('active');
    },
    error:  function(xhr, str){
       alert('Произошла ошибка! Перезагрузите страницу и попробуйте еще.')
    }
    });
    
}