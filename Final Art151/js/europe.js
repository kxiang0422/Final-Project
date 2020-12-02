var bl = [
    {
        text:"Paris\n" +
            "Paris is the capital and largest metropolis of France, and the capital of the ile-de-France region.\n" +
            "It is the political and cultural center of France and belongs to the Paris province under the ile-De-France region.\n"
    },
    {
        text:"Paris is one of the oldest cities in the world. According to archaeological data, the Paris area was settled by ancestors 40,000 years ago in the upper Paleolithic age, and the remains of villages around 4200 BC have been discovered.",
        img:''
    },
    {
        text:"Goose liver\n" +
            "Foie gras is a famous French dish. It is a food made from the liver of a goose or duck. According to French regulations, foie gras is made from goose or duck that must be fed with a special method of spoon feeding to fatten the liver. While foie gras has traditionally been made from foie gras, the vast majority of foie gras is now made from duck liver, which accounted for 97 percent of all foie gras produced in France in 2014, largely because of the cost.\n",
        img:'./img/blfood.png'
    },
    {
        text:"Notre Dame DE Paris\n" +
            "The Cathedral of Notre Dame DE Paris is officially known as the Cathedral of our Lady of Paris. It is a Catholic church located on the Sidi Island in Paris, France, and also the cathedral of the Archdiocese of Paris. Built from about 1163 to 1250, it belongs to the Gothic architecture and is one of the representative gothic churches in the Ile-de-France region.\n",
        img:"./img/blac.png"
    }
];
var Vienna = [
    {
        text:"Vienna is the capital and largest city of the Republic of Austria and one of the nine states of Austria. Vienna is Austria's premier city, with a population of 1.889 million (2.4 million if you include the metro area), and is the political, economic, and cultural center of Austria, making it the seventh most populous city in the European Union."
    },
    {
        text:"Music is the soul of Vienna, economic prosperity, social progress, a good artistic atmosphere and cultural environment has produced many classical music masters and their creative world, numerous music buildings and world-class symphony, the long history and splendid music culture, worthy of Vienna is known as music",
        img:""
    },
    {
        text:"Vienna is a gourmet's paradise, and the food can be described as a gathering of famous people. The dining here attracts the styles of different countries. Here, visitors can taste food from all countries. The cuisine of Vienna originates from the fusion of the diets of various ethnic groups. After absorbing various cooking methods, local dishes such as Viennese fried steak, refined beef, grilled ribs and grilled pork knuckle have been formed.",
        img:"./img/vynfood.png"

    },
    {
        text:"Hofburg Palace\n" +
            "Is a palace building located in the Austrian capital Vienna. It has been the residence of the Duke\n" +
            "of Austria since 1279. Hofburg Palace was once the winter palace of the Austrian and\n" +
            "Austro-Hungarian emperors under the Habsburg dynasty. Summer Palace is a beautiful Spring Palace. Today the Hofburg Palace is the residence of the Austrian President.\n",
        img:"./img/vynac.png"
    },
];

let region = "Paris";
$(".dw1").on("click",()=>{
    $(".btn_s1s").html("Paris")
    $(".name").css("display","none")
    $(".culture_text").css("display","block")
    $(".culture_text").html(bl[0].text)
    $(".peo").css({
        left:$(".dw1").css("left"),
        top:parseInt($(".dw1").css("top")) - 30 +"px"
    })
    return region = "Paris"
})
$(".dw2").on("click",function () {
    $(".btn_s1s").html("Vienna")
    $(".name").css("display","none")
    $(".culture_text").css("display","block")
    $(".culture_text").html(Vienna[0].text)
    $(".peo").css({
        left:$(".dw2").css("left"),
        top:parseInt($(".dw2").css("top")) - 30 +"px"
    })
    return region = "Vienna"
})
$(".btn_s1s").on("click",function () {
    $(".culture_text").css("display","block")
    $(".name").css("display","none")
})
$(document).on("click",function () {
    console.log(region);
    if (region == "Paris"){
        creattext(bl)
    }
    if (region == "Vienna"){
        creattext(Vienna)
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
