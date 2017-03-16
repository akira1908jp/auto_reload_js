$(function() {
    function init() {
        timestamp = new Date();
        upDateTime = timestamp.getHours() + ':' 
        + timestamp.getMinutes() + ':' 
        + timestamp.getSeconds();
        console.log(upDateTime);
        return upDateTime;
    };
    var initTime = init();
    $("#updatetime").text(initTime);
    $("#auto-refresh-toggle").click(function(){
        $(this).toggleClass("on");
    });
})