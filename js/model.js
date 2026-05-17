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

const lv2 = document.querySelector("#lv2");
if (lv2) {
	const lv2_list = document.querySelectorAll("#lv2 .lv2_list");
	const lv2_box_listOutside = document.querySelector("#lv2_box_listOutside");
	var lv2_count = 0;
	for (let i = 0; i < lv2_list.length; i++) {
		const element = lv2_list[i];
		element.onclick = function () {
			lv2_list[lv2_count].classList.remove("on");
			element.classList.add("on");
			lv2_count = i;
			var move = -100 * i + "%"
			lv2_box_listOutside.style = `transform: translateY( ${move} );`;
		}
	}
}