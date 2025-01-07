let movement_count = 2;
let width_ig = movement_count * 80;
let view_box_num_thing = ["0", "0", width_ig, "2160"];
const see = document.getElementById("aline").setAttribute("x2", width_ig);
const le_width = document.querySelectorAll("svg").forEach(ele => {
    ele.setAttribute(("width"), width_ig);
    ele.setAttribute(("viewBox"), view_box_num_thing.toString())
});document.querySelectorAll("pattern").forEach(ele =>{
    ele.setAttribute("width", width_ig);
});document.querySelector(":root").style.setProperty('--thing', width_ig);document.getElementById("the_lines").setAttribute('width',width_ig);

function me_see_see(){
    console.log(guh.getAttribute("width"))
}