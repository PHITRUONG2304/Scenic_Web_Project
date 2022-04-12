
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


/*
// get box from html (from line 70 to 136)
let boxes=document.getElementsByClassName("boxed");
let dispName=document.getElementsByClassName("item-name");
let dispAddress=document.getElementsByClassName("item-address");
let dispDescription=document.getElementsByClassName("item-description");
let dispRegion=document.getElementsByClassName("item-region");
let dispTime=document.getElementsByClassName("item-time");
let box=document.getElementsByClassName("boxed")
displayData(jsonData.ScenicSpots);

function noResult()
{
  var inform=document.getElementsByName("informResult");
  inform[0].innerHTML="Không tìm thấy kết quả nào phù hợp!";
}


//display data to boxed
// status: unfinish
function displayData(data)
{
  let size=data.length;
  if (size==0) {
    noResult();
  }
  for (let i=0; i<size; i++)
  {
    dispName[i].innerHTML=data[i].name;
    dispAddress[i].innerHTML=data[i].address;
    dispDescription[i].innerHTML=data[i].description;
    // dispRegion[i].innerHTML=jsonData.ScenicSpots[i].region;
    // dispTime[i].innerHTML=jsonData.ScenicSpots[i].time;
  }

  let box=document.getElementsByClassName("boxed")
  for (let i=0; i<9; i++)
  {
    if (i<size) box[i].style.display="block";
    else box[i].style.display="none";
  }
  console.log(data)
}
*/

/**
 * new function to display data by box
 * 
 */

let boxes=document.getElementsByClassName("boxed");
function displayData(data)
{
  let size=data.length;
  // base case: no result
  //

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