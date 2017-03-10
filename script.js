//切换
var TabHeads = document.getElementById("tab-head").getElementsByTagName("a");
var TabActive = document.getElementById("tab-head-active");
var TabContent = document.getElementById("tab-content");
var Locations = document.getElementsByClassName("location");

TabHeads[0].onclick = function (){
	events.index = 0;
	TabHeadActive(this);
	TabActive.style.transform = "translateX(0)";
	TabContent.style.transform = "translateX(0)";
	Locations[0].style.transform = "translateX(0)";
};
TabHeads[1].onclick = function (){
	events.index = 1;
	TabHeadActive(this);
	TabActive.style.transform = "translateX(117%)";
	TabContent.style.transform = "translateX(-100%)";
	Locations[0].style.transform = "translateX(-100%)";
};
TabHeads[2].onclick = function (){
	events.index = 2;
	TabHeadActive(TabHeads[2]);
	TabActive.style.transform = "translateX(240%)";
	TabContent.style.transform = "translateX(-200%)";
	Locations[0].style.transform = "translateX(-200%)";
};


function TabHeadActive(obj){
	for (var i = 0; i < TabHeads.length; i++){
		if (TabHeads[i] == obj) {
			TabHeads[i].className = "tab-head-item tab-head-item-active";
		}
		else {
			TabHeads[i].className = "tab-head-item";
		}
	}
}

//焦点
var input = document.getElementById("search");
var inputcover = document.getElementById("inputcover");

function GetFocus(){
	inputcover.style.display = "none";
	input.focus();
}

function LostFocus(){
	inputcover.style.display = "block";
}