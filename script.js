$(".box").fadeOut();
$(".next").hide();
$(".springimg").hide();
$(".winterimg").hide();
$(".summerimg").hide();
$(".fallimg").hide();
$(".reset").fadeOut();
$(".oops").fadeOut();

let counter = 0;

$(".submit").click(function() {
    let weather2 = $(".weather").val();
    let temperature2 = $(".temperature").val();
    $(".box").append("<p>" + "You like " + weather2 + " weather and " + temperature2 + "℉ is hot temperature for you." + "</p>");
    $(".next").show();
    $(".box").show();
    counter = counter + 1;
    $(".counter").text(counter);
});

$(".next").click(function() {
    $(".first").hide();
    let weather2 = $(".weather").val();
    let temperature2 = $(".temperature").val();
    if (weather2 === "hot" && temperature2 < 70) {
        $(".open").text("Spring");
        $(".paragraph").text("Spring season fits you!!! 🌸");
        $(".springimg").show();
        $("body").css("background-color", "orange");
        $(".reset").show();

    } else if (weather2 === "cold" && temperature2 < 70) {
        $(".open").text("Winter");
        $(".paragraph").text("Winter season fits you!!! ❄");
        $(".winterimg").show();
        $("body").css("background-color", "white");
        $(".reset").show();

    } else if (weather2 === "hot" && temperature2 >= 70) {
        $(".open").text("Summer");
        $(".paragraph").text("Summer season fits you!!! ☀️");
        $(".summerimg").show();
        $("body").css("background-color", "aqua");
        $(".reset").show();

    } else if (weather2 === "cold" && temperature2 >= 70) {
        $(".open").text("Autumn/Fall");
        $(".paragraph").text("Autumn/Fall season fits you!!! 🍁");
        $(".fallimg").show();
        $("body").css("background-color", "orange");
        $(".reset").show();

    } else {
        $(".paragraph").text("Oops you did it wrong...");
        $(".oops").show();
        $("body").css("background-color", "red");
        $(".reset").show();
    }
    $(".reset").click(function() {
        location.reload();
    });
});