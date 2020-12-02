var mg = [
    {
        text:"The endless sandy beaches and bright sunshine, the famous \"Movie Kingdom\" Hollywood, the fascinating Disneyland, and the beautiful Beverly Hills make Los Angeles a world-famous \"movie city\" and \"tourist city\". Tangerines pile up like a mountain.",

    },
    {
        text:"The history of Los Angeles began when Spanish explorers set foot on this land at the end of the 18th century. Later, Mexican priests moved here and opened churches in many places including San Diego. Starting from a small village, Los Angeles gradually developed into a port city. In 1848, when gold mines were discovered on the north side of the Sierra Nevada Mountains, the so-called \"Gold Rush\" ushered in. With the opening of the transcontinental railway, many people who have dreams and hopes and want to get rich at once have poured in, and the city has also become lively. After the Second World War, the rise of modern industry, the prosperity of commerce, finance and tourism, the surge of immigration, and the continuous expansion of urban areas, made Los Angeles a megacity in the United States. Now Los Angeles has become the *base of the US petrochemical, marine, aerospace and electronics industries.\n"
            ,
        img:''
    },
    {
        text:"Local people in Los Angeles also like salad and coffee. Some common fast foods such as hot dogs and hamburgers are also very common. Locally, there are many restaurants with foreign national tastes. For example, there are Jewish restaurants and Eastern European restaurants in the downtown area, Mexican restaurants in the east, and Japanese restaurants and Chinese restaurants.",
        img:'./img/mgfood (2).png'
    },
    {
        text:"Universal Studios Hollywood\n" +
            "Universal Studios Hollywood is located in the northwestern suburbs of the city and is a\n" +
            "must-visit place for tourists to Los Angeles. Hollywood is a world-famous movie studio. At the beginning of the 20th century, some filmmakers began to film here. By 1928, it had formed a strong lineup led by eight major film companies such as Paramount. Since the 1930s and 1940s, Hollywood has become a cultural center of the United States. Numerous writers, musicians, and movie stars live in nearby Beverly Hills. Universal Studios is an attractive place in Hollywood, where you can observe the production process of the movie and review the wonderful film clips.\n",
        img:"./img/mgc.png"
    }
];
var bx = [
    {
        text:"Brazil is a large country in Latin America. There are many fun things in this magical land. In addition to football, samba, and various shows, the three famous cities of Brasilia, Sao Paulo and Rio de Janeiro are also not to be missed.",
    },
    {
        text:"Brazil’s culture has the characteristics of multiple ethnic groups. Brazil, as a national melting pot, has immigrants from Europe, Africa, Asia and other regions. There are very different performances in music and dance.",
        img:""
    },
    {
        text:"Brazilian barbecue is a popular way to eat barbecued meat in South America. All kinds of meat are worn on iron skewers and eaten after charcoal grilling.",
        img:"./img/bxfood.png"

    },
    {
        text:"Iguaçu Falls\n" +
            "At the point where Brazil, Paraguay, and Argentina meet, the Iguaçu river drops spectacularly in a semicircle of 247 waterfalls that thunder down into the gorge below. Just above the falls, the river is constricted to one-fourth of its usual width, making the force of the water even stronger.\n",
        img:"./img/bxac.png"
    },
];
var dld = [
    {
        text:"Toronto is one of the more diversified cities in the world. Its colorful ethnic characteristics make this city colorful and full of charm. Toronto is also a beautiful city, with more than 100 parks."
    },
    {
        text:"Before 1720, the Seneca Indians still lived in the Toronto area. Later, France established a leather goods trading station on the west side of Toronto today. Later, France traded to Britain. In 1793, the United Kingdom made Toronto the capital of Upper Canada and renamed the new \"York Village\". Because the streets here are muddy everywhere, Toronto has also been given the title of \"Muddy York\".",
        img:""
    },
    {
        text:"Toronto is a diversified country. It can be seen from the food in Toronto. There are various kinds of food, including different foods from various countries. There are also different styles of restaurants, from high-end restaurants in the world to street snacks, from high-end red wine to cheap hot dog milk tea, which meet the needs of people of different levels. The main dishes are Italian, Turkish, and conveyor belt sushi.",
        img:"./img/Dldfood.png"
    },
    {
        text:"Ontario Lake (Ontario Lake) is between the United States and Canada. It extends slightly from east to west, with a length of about 311 kilometers from east to west, and a width of 85 kilometers from north to south. It covers an area of 19,500 square kilometers, which is the smallest among the Great Lakes. The lake is 75 meters above sea level, 99 meters lower than Lake Erie. The average water depth is 85 meters and the maximum depth is 236 meters.",
        img:"./img/dldac.png"
    }
];
let region = "Los Angeles";
$(".dw1").on("click",()=>{
    $(".btn_s1s").html("Los Angeles")
    $(".name").css("display","none")
    $(".culture_text").css("display","block")
    $(".culture_text").html(mg[0].text)
    $(".peo").css({
        left:$(".dw1").css("left"),
        top:parseInt($(".dw1").css("top")) - 30 +"px"
    })
    return region = "Los Angeles"
})
$(".dw2").on("click",function () {
    $(".btn_s1s").html("Brazil")
    $(".name").css("display","none")
    $(".culture_text").css("display","block")
    $(".culture_text").html(bx[0].text)
    $(".peo").css({
        left:$(".dw2").css("left"),
        top:parseInt($(".dw2").css("top")) - 30 +"px"
    })
    return region = "Brazil"
})
$(".dw3").on("click",()=>{
    $(".btn_s1s").html("Toronto")
    $(".name").css("display","none")
    $(".culture_text").css("display","block")
    $(".culture_text").html(dld[0].text)
    $(".peo").css({
        left:$(".dw3").css("left"),
        top:parseInt($(".dw3").css("top")) - 30 +"px"
    })
    return region = "Toronto"
})

$(".btn_s1s").on("click",function () {
    $(".culture_text").css("display","block")
    $(".name").css("display","none")
})
$(document).on("click",function () {
    console.log(region);
    if (region == "Los Angeles"){
        creattext(mg)
    }
    if (region == "Brazil"){
        creattext(bx)
    }
    if(region == "Toronto"){
        creattext(dld)
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
