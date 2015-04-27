$(function() {
    $(".red").click(function() {
        $(".box").css("background-color", "red")
    });
    $(".green").click(function() {
        $(".box").css("background-color", "green")
    });
    $(".blue").click(function() {
        $(".box").css("background-color", "blue")
    });

    $( "#accordion" ).accordion();

    $("#submit").click(function() {
        $("#username-display").html($("#username").val());
        $("#password-display").html($("#password").val());
    });
});
