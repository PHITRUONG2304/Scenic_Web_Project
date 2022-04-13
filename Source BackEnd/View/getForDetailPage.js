var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var jsonData = JSON.parse(this.responseText)
        var elm = document.getElementsByClassName("boxed");
        for (var i = 0; i < elm.length; i++) {

        }
    }
}
xhttp.open("GET", "../Source BackEnd/Controller/GetAction.php?action=getContent")
xhttp.send()