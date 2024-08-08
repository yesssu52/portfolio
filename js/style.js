$(function(){
    $('.gnb li').click(function(){
        let num = $(this).index()
    
        $('.gnb li').removeClass('on')
        $(this).addClass('on')
    
    
        $('.swiper').hide()
        $('.swiper').eq(num).show()
    })

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView : 4,
        spaceBetween : 16,
        direction: 'horizontal',
        loop: true,
        observer:true,
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
            });

})