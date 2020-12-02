var nbe = [
    {
        text:"The Republic of Namibia is located in southwestern Africa, bordered by Angola and Zambia to the north, Botswana to the east, South Africa to the south, and the Atlantic Ocean to the west. ",
    },
    {
        text:"Namibia has a population of 2.6 million and a stable multi-party parliamentary democracy. Agriculture, animal husbandry, tourism and mining (including the mining of diamonds, uranium, gold, silver and base metals) form the basis of its economy. The large and arid Namib Desert makes Namibia one of the least densely populated countries in the world.",
        img:''
    },
    {
        text:"Namibia is also a foodie paradise! There is a wide variety of local specialties, as well as exotic dishes from all over the world.",
        img:'./img/ajfood.png'
    },
    {
        text:"The Namib Desert is a desert in western Namibia, located in the Namib-Naukluft National Park, the largest national park in Africa.",
        img:"./img/ajc.png"
    }
];
var aj = [
    {
        text:"Cairo is the capital of Egypt. Cairo in the period of ancient Egypt said optimal or anu, called Ann in the bible, and of mizpah heliopolis, later renamed the stainton, 868 Aaron dynasty emil ahmad ibn tu Aaron called, in another new northern fox Tate and towers, to 969 caliph jose, pie\n" +
            " \n" +
            "will Qiao Haier Fatima dynasty conquer abbas dynasty ruled Egypt, moved the capital from the 973, called the new capital Cairo for name beginning of Cairo.\n"
    },
    {
        text:"Cairo is one of the oldest cities in the world. It is also one of the few ancient cities in the world that are least damaged by war. And through the continuous construction and expansion of dynasties and governments, this great city of ancient and modern coexist and reflect each other. ",
        img:""
    },
    {
        text:"Simit (Turkish bread)\n" +
            "This sesame-covered bread looks like a combination of bagel and pretzel, with a soft, fluffy interior. It is usually served with hard-boiled eggs and is most popular during Easter.\n",
        img:"./img/nbefood.png"

    },
    {
        text:"Memphis and its cemetery pyramid\n" +
            "Memphis and its cemetery pyramid are situated outside Cairo, Egypt, near Memphis, Giza Plateau (English: Giza Plateau) on archaeological sites, including three pyramids, a large, called the great sphinx statue, cemetery and a worker of the village, etc.\n",
        img:"./img/nreac.png"
    },
];
let region = "Namibia";
$(".dw1").on("click",()=>{
    $(".btn_s1s").html("Namibia")
    $(".name").css("display","none")
    $(".culture_text").css("display","block")
    $(".culture_text").html(nbe[0].text)
    $(".peo").css({
        left:$(".dw1").css("left"),
        top:parseInt($(".dw1").css("top")) - 30 +"px"
    })
    return region = "Namibia"
})
$(".dw2").on("click",function () {
    $(".btn_s1s").html("Cairo")
    $(".name").css("display","none")
    $(".culture_text").css("display","block")
    $(".culture_text").html(aj[0].text)
    $(".peo").css({
        left:$(".dw2").css("left"),
        top:parseInt($(".dw2").css("top")) - 30 +"px"
    })
    return region = "Cairo"
})
$(".btn_s1s").on("click",function () {
    $(".culture_text").css("display","block")
    $(".name").css("display","none")
})
$(document).on("click",function () {
    console.log(region);
    if (region == "Namibia"){
        creattext(nbe)
    }
    if (region == "Cairo"){
        creattext(aj)
    }

})
    function creattext(arr){
        $(".btn_1").on("click",function () {
            $(".culture_text").css("display","none")
            $(".name").css("display","block")
            $(".right_con_text").html(arr[1].text)
            $(".right_con_img").children()[0].src=arr[1].img;
        })
        $(".btn_2").on("click",function () {
            $(".culture_text").css("display","none")
            $(".name").css("display","block")
            $(".right_con_text").html(arr[2].text)
            $(".right_con_img").children()[0].src=arr[2].img;
        })
        $(".btn_3").on("click",function () {
            $(".culture_text").css("display","none")
            $(".name").css("display","block")
            $(".right_con_text").html(arr[3].text)
            $(".right_con_img").children()[0].src=arr[3].img;
        })
    }
$(document).ready(function () {
    $(".peo").css({
        left:$(".dw1").css("left"),
        top:parseInt($(".dw1").css("top")) - 30 +"px"
    })
})
$(".two_btn").on("click",function () {
    window.location = "twoPage.html"
})

