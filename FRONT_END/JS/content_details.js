var url_img = ['img01', 'img02', 'img03', 'img04', 'img05', 'img06'];
const render_content_block = document.querySelector('.inside-content');
const button_contents = document.querySelectorAll('.detail-content button');
const content_blocks = document.querySelectorAll(".detail-content .top-nav");
console.log(button_contents);

const bg = document.querySelector('.slidershow');
window.addEventListener('scroll', function () {
    bg.style.backgroundSize = (120 - window.pageYOffset / 20) + "%";
    bg.style.opacity = (1 - window.pageYOffset / 700) + "";
})
setInterval(changeBackground, 7500);
function changeBackground() {
    var numberRandom = Math.floor(Math.random() * 6);
    document.querySelector(".slidershow").style.backgroundImage = "url(./image/img_GenhDaDia/" + url_img[numberRandom] + ".jpg)";
}

const app = {
    contents: [
        {
            id: 0,
            details: ["Gành Đá Dĩa còn có các cách gọi (viết) khác là Gành Đá Dĩa là một danh thắng thiên nhiên kỳ thú về cảnh quan và độc đáo về địa chất ở Việt Nam, thắng cảnh này nằm tại xã An Ninh Đông, huyện Tuy An, tỉnh Phú Yên.",
                "Nó được công nhận là một thắng cảnh thiên nhiên cấp quốc gia từ năm 1998. Cảnh sắc nơi đây luôn được ngợi khen vì những hình thù khác lạ của những khối đá. Chính điều này đã tạo ra một “sự hỗn loạn có chủ ý” của mẹ thiên nhiên.</br>Bởi sự sắp xếp quá hoàn hảo nên nhiều người vẫn lầm tưởng những tảng đá xếp chồng lên nhau nơi đây là do bàn tay con người tạo ra.</br>Cũng có nhiều cuộc nghiên cứu chỉ ra rằng, những khối đá đó đã có tuổi đời lên đến 200 triệu năm. Do những hoạt động của núi lửa và và cao nguyên Vân Hòa. Phần nham thạch phun trào dẫn ra biển nhưng gặp nước và “hiện tượng dị ứng lực”. Đây chính là lý do khiến Phú Yên bây giờ sở hữu kỳ quan này.</br>Khi bạn nhìn từ trên cao xuống, nơi đây trông như một tổ ong khổng lồ rất kỳ thú, đen bóng và gồ ghề – khá ghê rợn đúng không nào. Nhưng nếu bạn dần dần di men xuống có thể thấy vẻ đẹp Ghềnh Đá Đĩa Phú Yên nên thơ, trữ tình. Sự hài hòa của đá của nước như một bức tranh sơn dầu vậy.Nơi đây cũng chính là điểm níu chân du khách gần xa. Khi đến Ghềnh Đá Đĩa thì các du khách trong nước và nước ngoài đều “đứng hình” vì vẻ đẹp độc đáo của tạo hóa ở đây."],
            images: ["./image/img_GenhDaDia/img03.jpg"]
        }, {
            id: 1,
            details: ["Ghềnh Đá Đĩa nằm ở An Ninh Đông, Tuy An, Phú Yên, Việt Nam. Từ thành phố Tuy Hòa khoảng 30km đến thị trấn Chí Thạnh thì rẽ hướng Đông đi thêm 15km nữa là đến. Đường đi khá dễ vì hệ thống giao thông rất tốt."],
            images: ["./image/img_GenhDaDia/img07.PNG"]
        },
        {
            id: 2,
            details: ["Phú Yên là một mảnh đất của miền Trung Việt Nam  nhưng sở hữu khí hậu ôn hòa mát mẻ. Do đó bạn có thể đến du lịch thắng cảnh và tham quan Ghềnh Đá Đĩa thành phố Tuy Hòa mùa xuân, hè là thích hợp nhất.</br>Cụ thể là khoảng thời gian từ tháng 1 đến tháng 8 khi khí hậu mát mẻ không nắng gắt cũng chẳng mưa nhiều.",
                "Cùng khoảng đầu tháng 2 và tháng 8 âm lịch, người dân tổ chức lễ hội Cầu Ngư. Bạn có thể đến vào dịp này để ngắm Ghềnh Đá Đĩa dịp lễ hội, thấy được sự sôi nổi khác với sự trầm tư thường ngày nơi đây.</br>Nên đặc biệt chú ý đến thành phố Tuy Hòa vào mùa bão, bạn có thể theo dõi lịch dự báo thời tiết. Bởi vì mùa bão, các tỉnh miền Trung Việt Nam luôn chịu ảnh hưởng nhiều nhất nên luôn có mưa lớn, biển động mạnh."],
            images: ["./image/img_GenhDaDia/img06.jpg"]
        }, {
            id: 3,
            details: ["Nếu đến đây, bạn đừng nên bỏ qua những khoảnh khắc để chụp cảnh quan thiên nhiên Ghềnh Đá Đĩa độc đáo nơi đây nhé. Các tảng đá xếp chồng lên nhau hòa quyền với mây xanh đem đến những góc chụp đáng giá và đặc trưng. Chính vì vậy, nơi đây thường được chọn làm địa điểm chụp ảnh cưới, ảnh kỉ yếu.", "Tại đây có những hồ nước rộng mà khách du lịch có thể ngả lưng vào những phiến đá cảm nhận được làn nước trong xanh và mát lạnh. Ngoài núi đá hùng vĩ, nước biển xanh bát ngát thì những cuộn sóng vỗ ào ạt đã làm bao người thích thú.", "Sóng ở đây liên tục vỗ mạnh lên các mỏm đá tạo nên những bọt sóng trắng xóa cả một vùng. Vẻ đẹp chân thật này cần bạn đến tận nơi để ngắm nhìn mới cảm nhận hết được. Dù đã qua tay các thiên tài chụp ảnh nhưng cảnh sắc thật mới là điều chân thực và đáng quý nhất.", "Đây là một thắng cảnh độc đáo của Việt Nam, không chỉ nổi tiếng ở trong mà còn được các bạn bè quốc tế ghé thăm nhiều trong những năm gần đây."],
            images: ["./image/img_GenhDaDia/img01.jpg", "./image/img_GenhDaDia/img05.jpg", "./image/img_GenhDaDia/img02.jpg"]
        },
        {
            id: 4,
            details: [],
            images: []
        }
    ],
    renderContent: function (id) {
        let final_inner_html = "";
        this.contents[id].details.forEach((element, index) => {
            final_inner_html += `<p>${element}</p>`;
            if (index < this.contents[id].images.length) {
                final_inner_html += `<img src=${this.contents[id].images[index]}>`;
            }
        })
        render_content_block.innerHTML = final_inner_html;
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
        this.renderContent(0);
    }
}
app.start();