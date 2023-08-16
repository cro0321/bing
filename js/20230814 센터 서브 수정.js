
const fixed = document.querySelector(".header_fixed");
const $bg_open = document.querySelectorAll(".header .header-container .header_s2 .s2_menu .s2_list")
const $hover = document.querySelectorAll(".header .header-container .header_s2 .s2_menu .s2_list>a")
 console.log($hover)
const $sublist = document.querySelectorAll(".header .header-container .header_s2 .s2_menu .sublist")
// console.log($sublist)

const up_down = document.querySelector(".btn_fixed .btn_side")

//목표 
// 1.센터 메뉴 네비의 li를 마우스오버했을때 header_fixed open이 되게 하기.
// 2. 서브메뉴 나오게하기
// 3. 서브메뉴가 나오면 서브메뉴 mouseover .on이벤트 추가하기
// 4. 서브메뉴와 네비 연동하기. i아래의 서브메뉴 mouseover되면 i도 그대로 빨간색 유지하기 

    




        $bg_open.forEach((e,i) => {
        e.addEventListener("mouseover", function(){
        //    alert("open")
        fixed.classList.add("open")
        
        // $hover.classList.add("on")
        
        $sublist.forEach((ele) => {
            ele.style.opacity = "1"
            ele.style.transition = " all 1s 0.4s"
            
            
        })
        e.addEventListener("mouseout" , function(){
            fixed.classList.remove("open")
            $sublist.forEach((ele) => {
                ele.style.opacity = "0"
                // trs 걸려있어서 빠져나갈때도 느리게 빠져나감 그래서 초기화한것
                ele.style.transition = ""
                // $hover.classList.remove("on1")
                // $hover.classList.remove("on2")
                // $hover.classList.remove("on3")
             });
             
        })

       
        // if($mouseover_sublist.style.opacity = '0'){
        //     $mouseover.classList.add("open")
            
        // }else{
        //     $mouseover_sublist.classList.remove("open")
        // }
        
        
        
        //   $mouseover_sublist.toggle("on")
        //   $mouseover_sublist.forEach((el,idx) => {
        //     console.log(el,idx)
        //     $mouseover[idx].classList.add("on")
        //   });
        })
});



// $mouseover[num].addEventListener("mouseover", function(){
//     console.log($mouseover[num])
//     hover_sublist.classList.toggle("on")
// })


// $mouseover[num].addEventListener("mouseover", function(){
//     console.log($mouseover[num])
//    if(hover_sublist.style.opacity != 0){
//     hover_sublist.classList.add("on")

//    }

// })

// let i = 0
// $mouseover[i].addEventListener("mouseover", function(){
//     $mouseover.forEach((ele,idx) => {
//         console.log(ele,idx)
//         hover_sublist[idx].classList.remove("on")

//         $mouseover.forEach((element,index) => {
//         hover_sublist[index].classList.remove("on")
//         })
//  })




//  fixed.classList.toggle("open")
// hover_sublist.style.opacity = 1
// })


//목표 kr과 ▼ 이미지를 click했을때 아래에 hs3_submenu가 다 나와줘야한다.
let lang = document.querySelector(".hs3_lang"); 
lang.addEventListener("click", function(){
    document.querySelector(".hs3_submenu").classList.toggle("on")
 })



// 스크롤 이벤트
document.addEventListener("scroll", function(){

    /*EventListenerOptions 사전에 "수동" 부울을 노출합니다. 패시브 등록 콜백 실행 내부에서 preventDefault를 호출하면 콘솔에 대한 경고만 생성되도록 패시브 EventListener 디스패치와 관련된 동작을 구현합니다. 스크롤 성능을 획기적으로 향상시키는 데 사용할 수 있습니다. huh..?.? ???? */

    // 스크롤 위치 알아보기 위해서 postion
    let postion = window.scrollY
    // console.log(postion)
    //상단헤더 fixe bg-white
    if(postion >= 100){
        fixed.classList.add("on")
    }else{
        fixed.classList.remove("on")
    }

    //사이드 버튼 up_down
    up_down.classList.toggle("on")
    if(postion >= 300){
        up_down.style.transform = " scaleY(-1)"
    }else{
        up_down.style.transform = " scaleY(1)";
    }
    
    })


// 사이드 버튼 up_down 클릭이벤트
up_down.addEventListener("click", function(){
    let postion = window.scrollY
    
    if(postion >= 100){
        // 클릭시 최상단으로 이동
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }else{
        // 클릭시 최하단으로 이동
         window.scrollTo({ 
            top: document.body.scrollHeight, 
            behavior: "smooth" 
        });
    }

 
})

//햄버거 버튼 클릭 이벤트
let ham = document.querySelector(".hamberger");
let ham_sub = document.querySelector(".hamberger_submenu");


ham.addEventListener("click", function(){
    // 목표 1.햄버거 버튼 클릭했을때 햄버거 메뉴가 나타나고 사라지게 하기. 
    ham_sub.classList.toggle("on");
    //목표 2. 햄버거 버튼 메뉴가X 표시가 되기.
    ham.classList.toggle("on");
    // 목표3. 햄버거 메뉴나왔을때 스크롤바 사라지게하기
//    if(ham == "hamberger_submenu on"){
//     document.body.style.overflow="hidden";
//    }else{
//     overflow: visible;
//    }
 })












// const fixed = document.querySelector(".header_fixed");
// const fixedHight = window.scrollY
// console.log(fixedHight)
// fixed.addEventListener(scroll,function(){
//     if(fixedHight>=100){
//         console.log(fixedHight)
//         fixed.classList.add("on")
//     }
// })

//
// const fixed = document.querySelector(".header_fixed");
// const fixedHight = window.scrollY
// console.log(fixedHight)

// 컨텐츠 영역부터 브라우저 최상단까지의 길이 구하기


// window.addEventListener('scroll', function(){
//   if(window.scrollY >= 100){
//     wing.classList.add("on");
//   }else{
//     wing.classList.remove("on");
//   }
// });



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

// $(".slick.menu2-content-slick").slick({
//     slidesToShow:6,
//     dots: false,
//     arrows: true,
//     ceterMode: true,
//     autoplay: false,
//     slidesToScroll: 1,
//     autoplaySpeed: 0,
//     draggable : false,
//     infinite : false,
//     initialSlide: 0,
//     prevArrow: $('#arrow_prev'),
//     nextArrow: $('#arrow_next')
// })

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
$('.slick.menu-content2-slick').on('afterChange', function() {
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

$('button.slick-prev').click(function(e){
    let i = $(this)
    
 });
$('button.slick-next').click(function(e){
    let i = $(this).index();
    
 });



