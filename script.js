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
