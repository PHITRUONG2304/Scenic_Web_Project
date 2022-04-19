var url_img = [];
const render_content_block = document.querySelector('.inside-content');
const button_contents = document.querySelectorAll('.detail-content button');
const content_blocks = document.querySelectorAll(".detail-content .top-nav");
// const header_content = document.querySelectorAll(".header-content")
const header_title = document.querySelector(".header-content h1")
const header_region = document.querySelectorAll(".header-content p")[0]
const header_time = document.querySelectorAll(".header-content p")[1]

var readyHeader = false, readyContent = false;
const bg = document.querySelector('.slidershow');
window.addEventListener('scroll', function () {
    bg.style.backgroundSize = (120 - window.pageYOffset / 20) + "%";
    bg.style.opacity = (1 - window.pageYOffset / 700) + "";
})
function changeBackground() {
    var numberRandom = Math.floor(Math.random() * url_img.length);
    document.querySelector(".slidershow").style.backgroundImage = "url(./assets/picture/" + url_img[numberRandom] + ")";
}
const app = {
    contents: {},
    renderContent: function (id) {
        let final_inner_html = "";
        let img = this.contents.detail_contents.picture.split(";");
        console.log(img)
        switch(id){
            case 0:
                let intro = this.contents.detail_contents.intro.split("($)");
                let imgIntro = img[id].split(",")
                if(intro.length > imgIntro.length){
                    intro.forEach((element, index) => {
                        final_inner_html += `<p>${element}</p>`;
                        if (index < imgIntro.length) {
                            final_inner_html += `<img src="./assets/picture/${imgIntro[index]}"}>`;
                        }
                    })
                }
                else{
                    imgIntro.forEach((element, index) => {
                        if (index < intro.length){
                            final_inner_html += `<p>${intro[index]}</p>`;
                        }
                        final_inner_html += `<img src="./assets/picture/${element}"}>`;
                    })
                }
                break; 
            case 1:
                let address = this.contents.detail_contents.address.split("($)")
                for(let i = 0; i < address.length; i++){
                    final_inner_html += `<p>${address[i]}</p>`;
                }
                break;
            case 2:
                let time = this.contents.detail_contents.time.split("($)")
                let imgTime = img[id-1].split(",")
                if(time.length > imgTime.length){
                    time.forEach((element, index) => {
                        final_inner_html += `<p>${element}</p>`;
                        if (index < imgTime.length) {
                            final_inner_html += `<img src="./assets/picture/${imgTime[index]}"}>`;
                        }
                    })
                }
                else{
                    imgTime.forEach((element, index) => {
                        if (index < intro.length){
                            final_inner_html += `<p>${time[index]}</p>`;
                        }
                        final_inner_html += `<img src="./assets/picture/${element}"}>`;
                    })
                }
                break;
            case 3:
                let active = this.contents.detail_contents.active.split("($)")
                let imgActive = img[id-1].split(",")
                if(active.length > imgActive.length){
                    active.forEach((element, index) => {
                        final_inner_html += `<p>${element}</p>`;
                        if (index < imgActive.length) {
                            final_inner_html += `<img src="./assets/picture/${imgActive[index]}"}>`;
                        }
                    })
                }
                else{
                    imgActive.forEach((element, index) => {
                        if (index < active.length){
                            final_inner_html += `<p>${active[index]}</p>`;
                        }
                        final_inner_html += `<img src="./assets/picture/${element}"}>`;
                    })
                }
                break;
            case 4:
                let food = this.contents.detail_contents.food.split("($)")
                let imgFood = img[id-1].split(",")
                if(food.length > imgFood.length){
                    food.forEach((element, index) => {
                        final_inner_html += `<p>${element}</p>`;
                        if (index < imgFood.length) {
                            final_inner_html += `<img src="./assets/picture/${imgFood[index]}"}>`;
                        }
                    })
                }
                else{
                    imgFood.forEach((element, index) => {
                        if (index < food.length){
                            final_inner_html += `<p>${food[index]}</p>`;
                        }
                        final_inner_html += `<img src="./assets/picture/${element}"}>`;
                    })
                }
                break;

        }
        // this.contents[id].details.forEach((element, index) => {
        //     final_inner_html += `<p>${element}</p>`;
        //     if (index < this.contents[id].images.length) {
        //         final_inner_html += `<img src=${this.contents[id].images[index]}>`;
        //     }
        // })
        render_content_block.innerHTML = final_inner_html;
    },
    renderHeader: function(){
        console.log(this.contents.header_contents)
        header_title.innerText = this.contents.header_contents.name;
        header_region.innerText = `Khu vực:${this.contents.header_contents.region}`;
        header_time.innerText = `Thời gian lý tưởng: ${this.contents.header_contents.time}`;
    },
    handleEvents: function () {
        button_contents.forEach((element, index) => {
            element.onclick = function () {
                content_blocks.forEach((e) => {
                    e.classList.remove('scaleChoose');
                });
                app.renderContent(index);
                element.parentElement.classList.add('scaleChoose');
            };
        });
    },
    start: function () {
        this.handleEvents();
        this.renderHeader()
        this.renderContent(0);
    }
}
// get id to fetchdata
function fetchContent(i) {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonData = JSON.parse(this.responseText)
            // console.log(jsonData)
            app.contents.detail_contents = jsonData[0];
            url_img = jsonData[0].picture.split(";")[0].split(",")
            changeBackground();
            setInterval(changeBackground, 7500);
            // console.log(url_img1)
            app.start();
        }
    }
xhttp.open("GET", "../BACK_END/Controller/GetAction.php?action=getContentForDetail&id=" + i)
xhttp.send()
}
function fetchHeaderData(i) {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText)
			console.log(data)
			app.contents.header_contents = data[i - 1];
            fetchContent(i);
        }
    }
    xhttp.open("GET", "../BACK_END/Controller/GetAction.php?action=getContentForMain")
    xhttp.send()
}
window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    // fetchContent(data.id);
    fetchHeaderData(data.id);
}