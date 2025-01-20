let page_name = "";
function boilernav() {
    return '<div class="top">This is a page</div>'
    + '<hr>'
    + '<ul>'
    +    '<li><a class="active" href="/">Home Page</a></li>'
    +    '<li><a href="/Py">Nav Hub</a></li>'
    +    '<li><a href="https://github.com/MindustryLogic/Mindustry-Terraria-Overhaul">A mod</a></li>'
    +    '<li><a href="/translate-thing">Dict</a></li>'
    +'</ul>'
}
function boilernav_but_navhub() {
    return '<div class="top">This is a page</div>'
        + '<hr>'
        + '<ul>'
        +    '<li><a href="/">Home Page</a></li>'
        +    '<li><a href="/Py">Nav Hub</a></li>'
        +    '<li><a href="https://github.com/MindustryLogic/Mindustry-Terraria-Overhaul">A mod</a></li>'
        +    '<li><a href="/translate-thing">Dict</a></li>'
        +'</ul>'
        +'<div class="fancy">'
        +'<ul>'
        +    '<li class="dropdown">'
        +    '<a href="/Py/html/index.html" class="dropbtn">HTML</a>'
        +    '<div class="dropdown-content">'
        +        '<a href="/Py/html#Top">Top</a>'
        +        '<a href="/Py/html#Structure">Structure</a>'
        +        '<a href="/Py/html#nerd">More advanced stuff</a>'
        +    '</div>'
        +    '</li>'
        +    '<li class="dropdown">'
        +        '<a href="/Py/xml/index.html" class="dropbtn">XML</a>'
        +        '<div class="dropdown-content">'
        +            '<a href="/Py/xml#Top">XML</a> '
        +            '<a href="/Py/xml#svg">SVG</a> '
        +        '</div>'
        +    '</li>'
        +    '<li class="dropdown">'
        +        '<a href="/Py/tools" class="dropbtn">Tools</a>'
        +            '<div class="dropdown-content">'
        +                '<a href="/Py/tools">Stuff</a>'
        +                '<a href="/Py/tools/math">Math thing</a>'
        +            '</div>'
        +    '</li>'
        +'</ul>'
        +'</div>'
}
function page_path_check(){ 
    page_name = window.location.pathname;
    console.log(page_name, "hi");
    if (page_name != "/") {
        document.getElementById("navnav").innerHTML = boilernav_but_navhub();
        console.log("not home");
    }else{
        document.getElementById("nav").innerHTML = boilernav()
}}