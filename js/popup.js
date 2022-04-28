let url = Object.fromEntries((new URLSearchParams(window.location.search)).entries())["url"];
if(url.indexOf("https://") == -1){
    url = url.replace("http://", "https://");
    if(url.indexOf("https://") == -1){
        url = "https://" + url;
    }
}
document.getElementById("url").value = url;
fetch(url, {
    method: 'GET'
})
.then(function(response){
    if (!response.ok){
        document.getElementById("progress").style.display = "none";
        document.getElementById("value").style.display = "inline-block";
        document.getElementById("code").innerText = response.status;
        document.getElementById("code").style.color = "#dd3546";
        document.getElementById("data").innerText = "";
    } else{
        document.getElementById("progress").style.display = "none";
        document.getElementById("value").style.display = "inline-block";
        document.getElementById("code").innerText = response.status;
        document.getElementById("code").style.color = "#1b8754";
        response.text().then(function (text){
            document.getElementById("data").innerText = text;
        });
    }
}).catch(function(err){
    document.getElementById("progress").style.display = "none";
    document.getElementById("value").style.display = "inline-block";
    document.getElementById("code").innerText = "ERROR";
    document.getElementById("code").style.color = "#dd3546";
    document.getElementById("data").innerHTML = "API's response is not available for one of the following reasons.<br><br>1) Invalid API address<br><br>2) No Internet connection<br><br>3) API that does not support https secure connections<br><br>4) API that does not support GET method<br><br>5) API that does not support CORS";
    console.log(err);
});