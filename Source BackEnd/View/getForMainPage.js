export function getContent() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonData = JSON.parse(this.responseText)
            var elm = document.getElementsByClassName("boxed");
            for (var i = 0; i < elm.length; i++) {
                elm[i].children[1].children[0].innerHTML = jsonData[i].Name;
                elm[i].children[1].children[1].innerHTML = jsonData[i].Address;
            }
        }
    }
    xhttp.open("GET", "../Source BackEnd/Controller/GetAction.php?action=getContentForMain")
    xhttp.send()
}