let movement_count = 2;
let width_ig = movement_count * 80;
let view_box_num_thing = ["0", "0", width_ig, "2160"];
const see = document.getElementById("aline").setAttribute("x2", width_ig);
let alpha = document.getElementById("brightness").value
const le_width = document.querySelectorAll("svg").forEach(ele => {
    ele.setAttribute(("width"), width_ig);
    ele.setAttribute(("viewBox"), view_box_num_thing.toString())
});document.querySelectorAll("pattern").forEach(ele =>{
    ele.setAttribute("width", width_ig);
});document.querySelectorAll(":root").forEach(thing => {
    thing.style.setProperty('--thing', width_ig);
    thing.style.setProperty('-a-bright', alpha);
});
document.getElementById("the_lines").setAttribute('width',width_ig);

function me_see_see(){
    console.log(guh.getAttribute("width"))
};
function grab_value_repeat(){
    alpha = document.getElementById("brightness").value;
    document.querySelector(":root").style.setProperty('--a-bright', alpha);
    setTimeout(grab_value_repeat,500);
}



