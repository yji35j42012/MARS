const header = document.querySelector("#header");
const user_name = document.querySelector("#user_name");
const logout = document.querySelector("#logout");
const menuBtn = document.querySelector("#menuBtn");

user_name.addEventListener("click", function () {
	logout.classList.toggle("show")
})

menuBtn.addEventListener("click", function () {
	header.classList.toggle("showMenu");
})

const back_home = document.querySelector("#back_home");
const back_prev = document.querySelector("#back_prev");
const lv2 = document.querySelector("#lv2");
const lv2_list = document.querySelectorAll("#lv2 .lv2_list");
var lv2_count = 0;

function close_lv2_list(params) {
	for (let i = 0; i < lv2_list.length; i++) {
		lv2_list[i].classList.remove("on");
	}
}

if (lv2) {
	const lv2_box_listOutside = document.querySelector("#lv2_box_listOutside");

	for (let i = 0; i < lv2_list.length; i++) {
		const element = lv2_list[i];
		element.onclick = function () {
			lv2_list[lv2_count].classList.remove("on");
			element.classList.add("on");
			lv2_count = i;
			var move = -100 * i + "%"
			lv2_box_listOutside.style = `transform: translateY( ${move} );`;
			if (dev == "ph") {
				back_home.style.display = "none";
				back_prev.style.display = "block";
			}
		}
	}
}
if (back_home) {
	back_prev.onclick = function () {
		back_home.style.display = "block";
		back_prev.style.display = "none";
		close_lv2_list();
	}
}


var dev = window.innerWidth >= 995 ? "pc" : "ph";
if (dev == "ph") {
	close_lv2_list();
}
window.addEventListener('resize', function () {
	console.log('dev', dev);
	// console.log(lv2_list);
	if (window.innerWidth <= 995 && dev == "pc" && lv2_list) {
		close_lv2_list();
	}
	if (window.innerWidth > 995 && dev == "pc" && lv2_list) {
		lv2_list[lv2_count].classList.add("on");
	}
	window.innerWidth >= 995 ? dev = "pc" : dev = "ph"
	// console.log('目前視窗寬度：', window.innerWidth);
});

