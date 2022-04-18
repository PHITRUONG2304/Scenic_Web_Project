var data = {}

window.onload = function () {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText)
            console.log(data)
        }
    }
    xhttp.open("GET", "../BACK_END/Controller/GetAction.php?action=getContentForMain")
    xhttp.send()
}