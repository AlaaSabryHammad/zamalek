const api = 'https://youtube.googleapis.com/youtube/v3/search?channelId=UC2Rt6zIRj0xvUkcMqlVIjoA&maxResults=2000&order=date&key=AIzaSyAzEHlTQQ21j-F9b1vO-S_kUFtUjIsI9Jg';
const Req = new Request(api);
fetch(Req)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.items.length; i++) {
            // document.querySelector("#youtube").innerHTML += `<iframe type="text/html" width="640" height="390"
            //     src='https://www.youtube.com/embed/${data.items[i].id.videoId}'
            //     frameborder="0"></iframe>`;
        }
    });


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.1)";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
  }
}

let nav = document.querySelector(".nav");
let navigation = document.querySelector(".navigation");
nav.onclick = function() {
    nav.classList.toggle("active");
    navigation.classList.toggle("active");
}
