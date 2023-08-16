


//목표 kr과 ▼ 이미지를 click했을때 아래에 hs3_submenu가 다 나와줘야한다.
//if를 하게 되면 trs가 안먹음 그래서 토글로 토글토글로 주면 trs먹음
let lang = document.querySelector(".hs3_lang"); 

lang.addEventListener("click", function(){
    document.querySelector(".hs3_submenu").classList.toggle("on")
 })


// 슬릭 슬라이드
$(".slick.content-slick").slick({
    slidesToShow:1,
    dots: false,
    arrows: true,
    
    autoplay: false,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    draggable : false,
    infinite : false,
    initialSlide: 1,
    row :1 ,
})
$(".slick.menu-content-slick").slick({
    slidesToShow:6,
    dots: false,
    arrows: true,
    ceterMode: true,
    autoplay: false,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    draggable : false,
    infinite : false,
    initialSlide: 0,
    prevArrow: $('#arrow_prev'),
    nextArrow: $('#arrow_next')
})

$('.slick.menu-content-slick').on('afterChange', function() {
    var dataId = $('.slick-current').attr("data-slick-index");    
    console.log(dataId);
    if(dataId == 0){
        $("#arrow_prev").addClass("slick-disabled");
    }else if(dataId == 3){
        
        $("#arrow_next").addClass("slick-disabled");
    }else{
        $("#arrow_prev, #arrow_next").removeClass("slick-disabled");
    }
});


// $('button.slick-prev').click(function(e){
//     let i = $(this)
    
//  });
// $('button.slick-next').click(function(e){
//     let i = $(this).index();
    
//  });



