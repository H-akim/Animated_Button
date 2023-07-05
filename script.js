var btn = document.getElementById("btn");
var btn_text = document.getElementById("btn_text");

btn.onclick = function() {
    btn_text.innerHTML = "Thanks";
    btn.classList.add("active");
}