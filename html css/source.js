
// Fake data to test
var jsonData = {
  'ScenicSpots': 
  [
  {   
    id: 1,
    srcImag: 'img/1.jpg',
    name: "Phong Nha Kẻ Bàng",
    address: "Miền Nam",
    description: "...",
    region: "Miền Nam",
    time: "Mùa Thu",
    type: "..."
  },
  {
    id: 2,
    name: "Quần thể di tích cố đô Huế",
    address: "address",
    description: "description",
    region: "Miền Bắc",
    time: "Mùa Hạ",
    type: "Đồi núi"
  },
  {   
    id: 3,
    name: "Bà Nà Hills",
    address: "address",
    description: "description",
    region: "region",
    time: "Mùa Thu",
    type: "type"
  },
  {   
    id: 4,
    name: "Thánh địa Mỹ Sơn",
    address: "address",
    description: "description",
    region: "region",
    time: "time",
    type: "type"
  },
  {   
    id: 5,
    name: "Gềnh Đá Địa",
    address: "address",
    description: "description",
    region: "region",
    time: "time",
    type: "type"
  },
  {
    id: 6,
    name: "Hang Rái",
    address: "address",
    description: "description",
    region: "region",
    time: "time",
    type: "type"
  },
  {   
    id: 7,
    name: "Vịnh Nha Trang",
    address: "Miền Nam",
    description: "description",
    region: "Miền Nam",
    time: "Mùa Thu",
    type: "Thành phố"
  },

  {   
    id: 8,
    name: "Mũi Né",
    address: "Miền Nam",
    description: "description",
    region: "Miền Nam",
    time: "Mùa Thu",
    type: "Thành phố"
  },
  {   
    id: 9,
    name: "Thành Nhà Hồ",
    address: "address",
    description: "description",
    region: "region",
    time: "time",
    type: "type"
  },
  {
    id: 10,
    name: "Thành nhà Hồ",
    address: "address",
    description: "description",
    region: "region",
    time: "time",
    type: "type"
  },
  {
    id: 11,
    name: "Kỳ Co Eo Gió",
    address: "address",
    description: "description",
    region: "region",
    time: "time",
    type: "type"
  },
  {
    id: 12,
    name: "Lý Sơn",
    address: "Miền Nam",
    description: "description",
    region: "region",
    time: "Mùa Thu",
    type: "type"
  },
  {
    id: 13,
    name: "Vườn quốc gia Pù mát",
    address: "Miền Nam",
    description: "description",
    region: "region",
    time: "Mùa Thu",
    type: "type"
  },
  {
    id: 14,
    name: "Đà Lạt",
    address: "address",
    description: "description",
    region: "region",
    time: "time",
    type: "type"
  }
  ]
 };

 var margin = 0;
 var interval_slides = setInterval(changeImg, 7500);
 document.querySelector("#bottom_1").style.backgroundColor = "#fff";
 document.querySelector("#bottom_1").style.transform = "scale(1.5, 1.5)";
 function changeImg(){
   margin -= 20;
   if(margin < -60){
     margin = 0;
   }
   var img = document.querySelector(".s1");
   img.style.marginLeft = margin + "%";
   zoombtnSlide(margin);
 }

 function handleBtn(number){
   clearInterval(interval_slides);
   var img = document.querySelector(".s1");
   switch(number){
     case 1:arguments
       margin += 20;
       break;
     case 2:arguments
       margin -= 20;
       break;	
   }
   if(margin > 0){
     margin = -60;
   }
   else if (margin < -60){
     margin = 0;
   }
   img.style.marginLeft = margin + "%";
   zoombtnSlide(margin);
   interval_slides = setInterval(changeImg, 7500);
 }

 function zoombtnSlide(number){
   let bottom, oldBottom;
   switch(number){
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
 function myFunction(number) {
   switch(number){
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

let boxes=document.getElementsByClassName("boxed");
function displayData(data)
{
  let size=data.length;
  // base case: no result
  //
  let inform=document.getElementById("informNoResult");
  inform.style.display="none";
  if (size==0)
  {
    for (let i=0;i<9;i++)
    {
      boxes[i].style.display="none";
    }
    inform.innerHTML="Không tìm thấy kết quả nào phù hợp";
    inform.style.display="block";
    return;
  }
  // remaining case: display data
  for (let i=0; i<9; i++)
  {
    if (i<size)
    {
      boxes[i].style.display="block";
      boxes[i].querySelector(".item-name").innerHTML=data[i].name;
      boxes[i].querySelector(".item-address").innerHTML=data[i].address;
      boxes[i].querySelector(".item-description").innerHTML=data[i].description;
      boxes[i].value=data[i].id;
    }
    else boxes[i].style.display="none";
  }
}



// filter data base on (region, time, type) with checkbox
// status: finish
function filterSS(re,ti,ty)
{
  var filterData=jsonData.ScenicSpots;

  tempFilter=filterData.filter
  (
    function(item)
    { return (item.time==ti[0] || item.time==ti[1] || item.time==ti[2] || item.time==ti[3]) } 
  )
  if (tempFilter.length!=0 || ti.length!=0) filterData=tempFilter;

  tempFilter=filterData.filter
  (
    function(item) 
    { return (item.region==re[0] || item.region==re[1] || item.region==re[2]) }
  )
  if (tempFilter.length!=0 || re.length!=0) filterData=tempFilter;

  tempFilter=filterData.filter(function(item)
  { 
    return (item.type==ty[0] || item.type==ty[1] || item.type==ty[2] || item.type==ty[3]) }
  )
  if (tempFilter.length!=0 || ty.length!=0) filterData=tempFilter;

  // console.log(filterData);
  // let l=filterData.length;
  displayData(filterData);
}

// get data from checkbox
// status: finish
function getChecked()
{
  
  let getType=document.getElementsByName("getType");
  let getTime=document.getElementsByName("getTime");
  let getRegion=document.getElementsByName("getRegion");
  // size of Region=3, Time=4, Type=4   => max=4
  let re=[], ti=[], ty=[];
  for (var i = 0; i < 4; i++)
  {
    if (getTime[i].checked === true)
    { ti.push(getTime[i].value)} 
    if (getType[i].checked === true)
    { ty.push(getType[i].value)} 
    if (i<3)
    if (getRegion[i].checked === true)
    { re.push(getRegion[i].value)} 
  }
  filterSS(re,ti,ty);
}

// function change page by id
// status: unfinish
/**
 * 0. Đã lấy được id của các box
 * 1. send id to server
 * 2. lấy dữ liệu của cái danh lam có id đó
 * 3. mở tab mới với dữ liệu đó
 * 
 */
function changePage(idOfSS)
{
  console.log(idOfSS);
}