var sc = [
    {
        text:"Sichuan Located in the west of China, Sichuan is an important junction of southwest, northwest and central " +
            "regions, and an important junction and transportation corridor connecting south and central China, southwest " +
            "and northwest China, central Asia, South Asia and Southeast Asia. It covers an area of 486,000 square kilometers" +
            " and ranks the fifth in China. It has 21 cities (prefectures) and 183 " +
            "counties (cities and districts). It is a province with large resources, large population and large economy."
    },
    {
        text:"Sichuan is vast and diverse. As a traveler, your biggest problem is " +
            "how to explore the best highlights of Sichuan culture in a trip since your " +
            "time is limited, budget has to be under\n" +
            "control, and energy is not infinite. To help you plan your trip easily, we have " +
            "concluded the best highlights of Sichuan culture according to specific themes, such " +
            "as Ancient Civilization, Three Kingdom, Tea Culture, etc.\n",
        img:'img/scculture.png'
    },
    {
        text:"Sichuan cuisine is mainly spicy and fragrant, and the more famous one is Sichuan hot pot. " +
            "Whether it’s cold winter or hot summer, it’s very popular among locals",
        img:'./img/scfood.jpg'
    },
    {
        text:"Sichuan Giant Panda Sanctuaries, home to more than 30% of the world's pandas which are classed as highly endangered, covers 924,500 ha with seven nature reserves and nine scenic parks in the Qionglai and Jiajin Mountains. The sanctuaries constitute the largest remaining contiguous habitat of the giant panda, a relic from the paleo-tropic forests of the Tertiary Era. It is also the species' most important site for captive breeding. The sanctuaries are home to other globally endangered animals such as the red panda, the snow leopard and clouded leopard. They are among the botanically richest sites of any region in the world outside the\n" +
            " \n" +
            "tropical rainforests, with between 5,000 and 6,000 species of flora in over 1,000 genera.\n",
        img:"./img/imga.png"
    }
];
var huaguo = [
    {
        text:"Seoul, the capital of South Korea, a city* in South Korea, is also a* city in the Korean Peninsula. The ancient and modern buildings in Seoul coexist, including Gyeongbokgung Palace and other Joseon-era ancient palaces, as well as cutting-edge comprehensive cultural facilities. , Myeongdong, Apgujeong Dong and other shopping streets and colorful performance facilities are also world-famous.",
    },
    {
        text:"Seoul is also the education and cultural center of Korea, with 34 colleges and universities including Seoul National University and Korea University, accounting for 50% of the total number of colleges and universities in the country. There are 12 museums in the city including the Central Museum, Folk Museum and Postal Museum. There are 11 newspapers in Seoul, which distribute more than 3,000 newspapers, accounting for 92% of the national newspapers and periodicals. There are many cultural institutions in Seoul. Museum institutions include National Central Museum, National Folk Museum, King Sejong Memorial, War Memorial, National Music Museum, Lotte World Folk Museum, Samsung Publishing Museum, Korean Embroidery Museum, Korean Kimchi Museum, etc. Theaters and art galleries include Sejong Cultural Center, National Central Theater, National Chinese Music Academy, Jeongdong Theater, LG Art Center, KBS Hall, Art Hall (Theater and Art Museum), Seoul Metropolitan Art Museum, Deoksugung Art Museum, Thousands of museums such as the Comprehensive Art Museum, Chosun Ilbo Art Museum, Seoul Art Gallery, Lotte Art Gallery, etc. Famous movie theaters include CGV and Megabox.",
        img:""
    },
    {
        text:"Although South Korea’s food is not as diverse as China’s variety and fancy methods, it also has its own unique charm. The staple food of Koreans is rice, and they eat various soups and dishes according to the season. Among them, the most representative ones are bibimbap, kimchi, sam chicken soup and barbecue. This will definitely make you drool.",
        img:"./img/hgfooder.jpg"

    },
    {
        text:"Founded in 1945, the National Museum of Korea is Korea's largest museum of historical art. The National Museum of Korea receives more than 3 million visitors a year, making it one of the most visited art museums in the world and the third most visited museum in Asia.",
        img:"./img/hgjd.jpg"
    },
];
var tg = [
    {
        text:"Bangkok, officially known as Mahanakon, is the capital and largest city of Thailand. It is also known in the local Chinese community as Thai Kyung, the center of Thai politics, economy, trade, transportation, culture, science and technology, education and other aspects. Located on the east bank of The Zhaopyeya River, near the Gulf of Thailand."
    },
    {
        text:"Bangkok is a very tolerant city. You can experience the sacredness of Thai Buddhism in the majestic Grand Palace, or you can melt into the feasting streets after nightfall. In short, in Bangkok, there is peace of faith and freedom to release oneself.",
        img:"./img/mgimg.png"
    },
    {
        text:"Bangkok is the birthplace of Thai cuisine. The dishes are mainly spicy, sour and sweet, and they also have a collection of cuisines from various countries. In addition, there are various fruit stalls and food stalls in the streets. All major shopping malls near Siam Square have food courts, and the snacks in Chinatown and Khao San Road are also very good.",
        img:"./img./mgfood.png"
    },
    {
        text:"Bangkok's tourism industry is very developed and is known as the \"Venice of the East\". At the same time, the city has a long history of Buddhism, strong oriental colors, numerous Buddhist temples, and exquisite buildings.\n" +
            "The Erawan Buddha, also known as the \"every request\" Buddha, is located on the corner of the road next to the Sogo Department Store in Bangkok. It is famous and has a strong incense.The Buddha has four Buddha faces, representing love, career, health and wealth. It can be said to be in charge of all human affairs and is one of the Buddha statues in Thailand.\n",
        img:"./img/mgf.png"
    }
];
let region = "sichuan";
$(".dw1").on("click",()=>{
    $(".btn_s1s").html("SiChuan")
    $(".name").css("display","none")
    $(".culture_text").css("display","block")
    $(".culture_text").html(sc[0].text)
    $(".peo").css({
        left:$(".dw1").css("left"),
        top:parseInt($(".dw1").css("top")) - 30 +"px"
    })
    return region = "sichuan"
})
$(".btn_s1s").on("click",function () {
    $(".culture_text").css("display","block")
    $(".name").css("display","none")
})
$(document).on("click",function () {
    console.log(region);
    if (region == "sichuan"){
        creattext(sc)
    }
    if (region == "Seoul"){
        creattext(huaguo)
    }
    if(region == "Bangkok"){
        creattext(tg)
    }

})
    function creattext(arr){
        $(".btn_1").on("click",function () {
            $(".culture_text").css("display","none")
            $(".name").css("display","block")
            $(".right_con_text").html(arr[1].text)
            $(".right_con_img").children()[0].src=huaguo[1].img;
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

    $(".dw2").on("click",function () {
        $(".btn_s1s").html("Seoul")
        $(".name").css("display","none")
        $(".culture_text").css("display","block")
        $(".culture_text").html(huaguo[0].text)
        $(".peo").css({
            left:$(".dw2").css("left"),
            top:parseInt($(".dw2").css("top")) - 30 +"px"
        })
        return region = "Seoul"
    })
$(".dw3").on("click",()=>{
    $(".btn_s1s").html("Bangkok")
    $(".name").css("display","none")
    $(".culture_text").css("display","block")
    $(".culture_text").html(tg[0].text)
    $(".peo").css({
        left:$(".dw3").css("left"),
        top:parseInt($(".dw3").css("top")) - 30 +"px"
    })
    return region = "Bangkok"
})
$(document).ready(function () {
    $(".peo").css({
        left:$(".dw1").css("left"),
        top:parseInt($(".dw1").css("top")) - 30 +"px"
    })
})
$(".two_btn").on("click",function () {
    window.location = "twoPage.html"
})
