// Fake data to test
const maxShowItems = 9;
var jsonData=[
	{
	"id":0,
	"srcImag":"img/img1.jpg",
	"name":"Phong Nha Kẻ Bàng",
	"address":"Quảng Bình",
	"description":"Toàn là hang động",
	"region":"Miền Trung",
	"time":"Mùa Thu",
	"type":"Hang động"},
	{
		"id":1,
		"srcImag":"img/img2.jpg",
		"name":"Quần thể Di tích Cố Đô Huế",
		"address":"Huế",
		"description":"Toàn là di tích",
		"region":"Miền Trung",
		"time":"Mùa Thu",
		"type":"Thành phố"},
	{
		"id":2,
		"srcImag":"img/img3.jpg",
		"name":"Bà Nà Hills",
		"address":"Đà Nẵng",
		"description":"Đường lên tiên cảnh",
		"region":"Miền Trung",
		"time":"Mùa Thu",
		"type":"Đồi núi"},
	{
		"id":3,
		"srcImag":"img/img4.jpg",
		"name":"Thánh địa Mỹ Sơn",
		"address":"Quảng Nam",
		"description":"Toàn là thánh địa",
		"region":"Miền Trung",
		"time":"Mùa Thu",
		"type":"Đồi núi"},
	{
		"id":4,
		"srcImag":"img/img5.jpg",
		"name":"Gềnh Đá Đĩa",
		"address":"Phú Yên",
		"description":"Toàn là đá",
		"region":"Miền Trung",
		"time":"Mùa Hạ",
		"type":"Biển, sông, suối"},
	{
		"id":5,
		"srcImag":"img/img6.jpg",
		"name":"Hang rái",
		"address":"Ninh Thuận",
		"description":"Toàn là hang rái",
		"region":"Miền Trung",
		"time":"Mùa Đông",
		"type":"Hang động"},
	{
		"id":6,
		"srcImag":"img/img7.jpg",
		"name":"Vịnh Nha Trang",
		"address":"Khánh Hòa",
		"description":"Toàn là vịnh",
		"region":"Miền Trung",
		"time":"Mùa Xuân",
		"type":"Thành phố"},
	{
		"id":7,
		"srcImag":"img/img8.jpg",
		"name":"Mũi né",
		"address":"Bình Thuận",
		"description":"Toàn là mũi né",
		"region":"Miền Trung",
		"time":"Mùa Thu",
		"type":"Đồi núi"},
	{
		"id":8,
		"srcImag":"img/img9.jpg",
		"name":"Thành Nhà Hồ",
		"address":"Thanh Hóa",
		"description":"Toàn là nhà cổ",
		"region":"Miền Trung",
		"time":"Mùa Hạ",
		"type":"Thành phố"},
	{
		"id":9,
		"srcImag":"img/img10.jpg",
		"name":"Kỳ Co Eo Gió",
		"address":"Bình Định",
		"description":"Toàn là gió",
		"region":"Miền Trung",
		"time":"Mùa Hạ",
		"type":"Biển, sông, suối"},
	{
		"id":10,
		"srcImag":"img/img11.jpg",
		"name":"Lý Sơn",
		"address":"Quảng Ngãi",
		"description":"Toàn là núi",
		"region":"Miền Trung",
		"time":"Mùa Hạ",
		"type":"Đồi núi"},
	{
		"id":11,
		"srcImag":"img/img12.jpg",
		"name":"Đảo Phú Quý",
		"address":"Phan Thiết",
		"description":"Toàn là đảo",
		"region":"Miền Trung",
		"time":"Mùa Hạ",
		"type":"Biển, sông, suối"},
	{
		"id":12,
		"srcImag":"img/img13.jpg",
		"name":"Vườn quốc gia Pù Mát",
		"address":"Nghệ An",
		"description":"Toàn là cỏ",
		"region":"Miền Trung",
		"time":"Mùa Xuân",
		"type":"Đồi núi"},
	{
		"id":13,
		"srcImag":"img/img14.jpg",
		"name":"Đà Lạt",
		"address":"Lâm Đồng",
		"description":"Toàn là thành phố",
		"region":"Miền Trung",
		"time":"Mùa Hạ",
		"type":"Thành phố"},
	{
		"id":14,
		"srcImag":"img/img15.jpg",
		"name":"Biển Thiên Cầm",
		"address":"Hà Tĩnh",
		"description":"Toàn là biển",
		"region":"Miền Trung",
		"time":"Mùa Hạ",
		"type":"Biển, sông, suối"},
	{
		"id":15,
		"srcImag":"img/img16.jpg",
		"name":"Địa đạo Vịnh Mốc",
		"address":"Quảng Trị",
		"description":"Toàn là địa đạo",
		"region":"Miền Trung",
		"time":"Mùa Đông",
		"type":"Hang động"},
	{
		"id":16,
		"srcImag":"img/img17.jpg",
		"name":"Nhà Rông Kon Klor",
		"address":"Kon Tum",
		"description":"Toàn là nhà rông",
		"region":"Miền Trung",
		"time":"Mùa Hạ",
		"type":"Đồi núi"},
	{
		"id":17,
		"srcImag":"img/img18.jpg",
		"name":"Biển Hồ Tơ Nưng",
		"address":"Pleiku",
		"description":"Toàn là biển",
		"region":"Miền Trung",
		"time":"Mùa Thu",
		"type":"Biển, sông, suối"}];

var filteringData;


var contentPage = document.querySelector(".page ul");
// console.log(contentPage);
var currentPage = 1;
// Xử lý chuyển ảnh động
var margin = 0;
var interval_slides = setInterval(changeImgSlider, 7500);
document.querySelector("#bottom_1").style.backgroundColor = "#fff";
document.querySelector("#bottom_1").style.transform = "scale(1.5, 1.5)";
function changeImgSlider() {
	margin -= 20;
	if (margin < -60) {
		margin = 0;
	}
	var img = document.querySelector(".s1");
	img.style.marginLeft = margin + "%";
	zoombtnSlide(margin);
}

function handleBtnSlider(number) {
	clearInterval(interval_slides);
	var img = document.querySelector(".s1");
	switch (number) {
		case 1: arguments
			margin += 20;
			break;
		case 2: arguments
			margin -= 20;
			break;
	}
	if (margin > 0) {
		margin = -60;
	}
	else if (margin < -60) {
		margin = 0;
	}
	img.style.marginLeft = margin + "%";
	zoombtnSlide(margin);
	interval_slides = setInterval(changeImgSlider, 7500);
}

function zoombtnSlide(number) {
	let bottom, oldBottom;
	switch (number) {
		case 0:
			bottom = document.querySelector("#bottom_1");
			break;
		case -20:
			bottom = document.querySelector("#bottom_2");
			break;
		case -40:
			bottom = document.querySelector("#bottom_3");
			break;
		case -60:
			bottom = document.querySelector("#bottom_4");
			break;
	}

	document.querySelectorAll(".navigation .bar").forEach(element => {
		element.style.removeProperty("background-color");
		element.style.removeProperty("transform");
	});

	bottom.style.backgroundColor = "#fff";
	bottom.style.transform = "scale(1.5, 1.5)";
}
function showDropDown(number) {
	switch (number) {
		case 1:
			document.getElementById("myDropdown_1").classList.toggle("show");
			break;
		case 2:
			document.getElementById("myDropdown_2").classList.toggle("show");
			break;
		case 3:
			document.getElementById("myDropdown_3").classList.toggle("show");
			break;
	}

}


function searchByText() {
	var valueSearch = document.getElementById("valueSearch").value;
	valueSearch=removeVietnameseTones(valueSearch).toLowerCase();
    let length=jsonData.length;
	filteringData = []
    for(let i = 0; i < length; i++)
        if (removeVietnameseTones(JSON.stringify(jsonData[i])).toLowerCase().includes(valueSearch))
            filteringData.push(jsonData[i]);
	renderData(filteringData);
}


// let boxes = document.querySelectorAll(".boxed");
let boxes = document.getElementsByClassName("boxed row");
// console.log(boxes);
function displayData(data) {
	let size = data.length;
	// base case: no result
	//
	let inform = document.getElementById("informNoResult");
	inform.style.display = "none";
	if (size == 0) {
		for (let i = 0; i < maxShowItems; i++) {
			boxes[i].style.display = "none";
		}
		inform.innerHTML = "Không tìm thấy kết quả nào phù hợp";
		inform.style.display = "block";
		return;
	}
	// remaining case: display data
	for (let i = 0; i < maxShowItems; i++) {
		if (i < size) {
			boxes[i].style.display = "block";
			boxes[i].querySelector(".item-name").innerHTML = data[i].name;
			boxes[i].querySelector(".item-address").innerHTML = `Địa chỉ: ${data[i].address}`;
			boxes[i].querySelector(".item-idea-time").innerHTML = `Thời gian lý tưởng: ${data[i].time}`;
			boxes[i].querySelector(".item-region").innerHTML = `Khu vực: ${data[i].region}`;
			boxes[i].querySelector(".item-type").innerHTML = `Thể loại: ${data[i].type}`;
			boxes[i].querySelector(".item-description").innerHTML = data[i].description;
			boxes[i].querySelector(".item-img img").src = `./assets/picture/${data[i].picture}`;
			boxes[i].value = data[i].id;
		}
		else boxes[i].style.display = "none";
	}
}



// filter data base on (region, time, type) with checkbox
// status: finish
function filterSS(re, ti, ty) {
	//fetchData();
	//var filterData = jsonData;
	filteringData = jsonData;
	console.log("Here!");
	tempFilter = filteringData.filter
		(
			function (item) { return (item.time == ti[0] || item.time == ti[1] || item.time == ti[2] || item.time == ti[3]) }
		)
	if (tempFilter.length != 0 || ti.length != 0) filteringData = tempFilter;

	tempFilter = filteringData.filter
		(
			function (item) { return (item.region == re[0] || item.region == re[1] || item.region == re[2]) }
		)
	if (tempFilter.length != 0 || re.length != 0) filteringData = tempFilter;

	tempFilter = filteringData.filter(function (item) {
		return (item.type == ty[0] || item.type == ty[1] || item.type == ty[2] || item.type == ty[3])
	}
	)
	if (tempFilter.length != 0 || ty.length != 0) filteringData = tempFilter;

	 console.log(filteringData);
	// let l=filterData.length;
	renderData(filteringData);
	//displayData(filteringData);
}

function changePageNumber(number){
	
	let elmPage = document.querySelectorAll(".page button");
	currentPage = number;
	var newArray = filteringData;
	elmPage.forEach((elm)=>{
		if(elm.classList.contains("is-active")){
			elm.classList.remove("is-active")
		}
	})
	elmPage[number].classList.add("is-active")

	let temp = newArray.slice((number-1)*9,  number*9);
	console.log(temp);

	document.querySelector('.container1').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
	// If it not work, please enter "chrome://flags/#smooth-scrolling" and enable Smooth Scrolling.
	displayData(temp);
}
function changeCurrentPage(info){
	var maxPage = Math.ceil(jsonData.length/9);
	if(info == 1){
		if(currentPage+1 <= maxPage){
			currentPage += 1;
			changePageNumber(currentPage);
		}
	}
	else{
		if(currentPage-1 > 0){
			currentPage -= 1;
			changePageNumber(currentPage);
		}
	}
}
// get data from checkbox
// status: finish
function getChecked() {

	let getType = document.getElementsByName("getType");
	let getTime = document.getElementsByName("getTime");
	let getRegion = document.getElementsByName("getRegion");
	// size of Region=3, Time=4, Type=4   => max=4
	let re = [], ti = [], ty = [];
	for (var i = 0; i < 4; i++) {
		if (getTime[i].checked === true) { ti.push(getTime[i].value) }
		if (getType[i].checked === true) { ty.push(getType[i].value) }
		if (i < 3)
			if (getRegion[i].checked === true) { re.push(getRegion[i].value) }
	}
	filterSS(re, ti, ty);
}
function renderData(data){
	displayData(data)
	var maxPage = Math.ceil(data.length/9);
	var newText = "";
	newText += "<button onclick='changeCurrentPage(0)'><li><</li></button>";
	for(var i = 0; i < maxPage; i++){
		if(i == 0){
			newText += `<button class="is-active"  onclick="changePageNumber(${i+1})"><li>${i+1}</li></button>`;
		}
		else{
			newText += `<button onclick="changePageNumber(${i+1})"><li>${i+1}</li></button>`;
		}
	}
	newText += '<button onclick="changeCurrentPage(1)"><li>></li></button>';

	contentPage.innerHTML = newText;
}


function fetchData() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText)
			jsonData = data;
			filteringData = data;
			console.log(data)
			renderData(data);
        }
    }
    xhttp.open("GET", "../BACK_END/Controller/GetAction.php?action=getContentForMain")
    xhttp.send()
}

fetchData();

function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return str;
}