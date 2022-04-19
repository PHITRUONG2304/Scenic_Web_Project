var url_img = ['img01', 'img02', 'img03', 'img04', 'img05', 'img06'];
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
    var numberRandom = Math.floor(Math.random() * 6);
    document.querySelector(".slidershow").style.backgroundImage = "url(./image/img_GenhDaDia/" + url_img[numberRandom] + ".jpg)";
}

setInterval(changeBackground, 7500);
const app = {
    contents: {},
    renderContent: function (id) {
        let final_inner_html = "";
        switch(id){
            case 0:
                final_inner_html = `<p>${this.contents.detail_contents.intro}</p>`;
                break; 
            case 1:
                final_inner_html = `<p>${this.contents.detail_contents.address}</p>`;
                break;
            case 2:
                final_inner_html = `<p>${this.contents.detail_contents.time}</p>`;
                break;
            case 3:
                final_inner_html = `<p>${this.contents.detail_contents.active}</p>`;
                break;
            case 4:
                final_inner_html = `<p>${this.contents.detail_contents.food}</p>`;
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