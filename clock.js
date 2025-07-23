function clock(){
    var monthNames=["january","february","march","April","may","Jun","july","August","september","october","november","december"];
    var dayNames=["sunday","monday","tuesday","wednesday", "thursday","friday","saturday"];
    var today=new Date();
    document.getElementById('date').innerHTML = (dayNames[today.getDay()] + " " + today.getDate() +' '+ monthNames[today.getMonth()] +' '
    +today.getFullYear());

    var h = today.getHours();
    var m =today.getMinutes();
    var s =today.getSeconds();
    var day =h<11? 'AM': 'PM';

    h=h<10? '0'+h: h;
    m=m<10? '0'+m: m;
    s=s<10? '0'+s: s;

    document.getElementById('hours').innerHTML=h;
    document.getElementById('min').innerHTML=m;
    document.getElementById('sec').innerHTML=s;

   
}var inter= setInterval(clock,400);
