var menubox = document.getElementById("menu_box");
var topf = document.getElementById("top_face");
var bottom = document.getElementById("bottom_face");
var left = document.getElementById("left_face");
var right = document.getElementById("right_face");
var menu_options = document.getElementsByClassName("reveal_link");
var center_txt = document.getElementsByTagName("button");



function reveal() {
  console.log('hi');
  if (right.className == "reveal_right_face") {
    right.className = "";

    left.className = "";
    topf.className = "";
    bottom.className = "";
    for (i = 0; i <= 3; i++) {
      menu_options[i].style.opacity = 0;
    }

  }
  else {
    right.className = "reveal_right_face";
    topf.className = "reveal_top_face";
    left.className = "reveal_left_face";
    bottom.className = "reveal_bottom_face";

    for (i = 0; i <= 3; i++) {
      menu_options[i].style.opacity = 1;

    }
  };
}
  // menubox.addEventListener( "click", reveal);
  // right.addEventListener("click", reveal);
  // menubox.addEventListener("click", reveal);
  center_txt[0].addEventListener("click",reveal);
