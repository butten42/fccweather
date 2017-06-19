if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position){
        var lon="lon="+position.coords.longitude;
        var lat="lat="+position.coords.latitude;
        url="http://v.juhe.cn/weather/geo?format=1&key=b659d823f163f39564ff9a21c172708c&"+lon+"&"+lat;
    $.ajax({
        url: url,
        dataType: "jsonp"
    }).done(function(response){
        var today=response.result.today;
        var city=today.city;
        var future=response.result.future;
        var date_y=today.date_y;
        $("#city").text(city);
        $("#date_y").text(date_y);
        $("#weather").text(today.weather);
        $("#temperature").text(today.temperature);
        $("#uv").text(today.uv_index);
        $("#wind").text(today.wind);
        $("#humidity").text(response.result.sk.humidity);
        $("#dress").text(today.dressing_advice);
        /*var wl="";
        future.forEach(function(val){
            var keys=Object.keys(val);
            wl+="<div>";
            keys.forEach(function(key){
                wl+="<b>"+key+"</b>: "+val[key]+"<br>";
            });wl+="</div><br>";
        })
        $("#future").html(wl);*/

    })
    });
}
function search(){
    var cityName=$("input").val();
    var cityUrl="http://v.juhe.cn/weather/index?cityname="+cityName+"&key=b659d823f163f39564ff9a21c172708c";
   $("body").append('<a href="'+cityUrl+'"></a>');
   }
$("#button").click(search);
$("input").keypress(function(event){
    if(event.keyCode=='13'){
        $("button").trigger("click");
    }
});