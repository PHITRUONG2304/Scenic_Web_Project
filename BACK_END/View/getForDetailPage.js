var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var jsonData = JSON.parse(this.responseText)
    }
}
xhttp.open("GET", "../BACK_END/Controller/GetAction.php?action=getContentForDetail&id=" + data.id)
xhttp.send()

window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    console.log(data.id);
}