window.onscroll = () => loadMoreImages();

let imagesJson = undefined;

function loadMoreImages() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        loadImages();
    }
}

function randImage(imagesJsonLen) {
    const rand = Math.floor(Math.random() * imagesJsonLen);
    const url = imagesJson.animals[rand].imagemUrl;

    return url;
}

function loadImages() {
    const imagesJsonLen = imagesJson.animals.length;
    const divImages = document.getElementById("images");

    for(let i = 0; i < imagesJsonLen; i++) {
        const img = document.createElement("img");
        img.src = randImage(imagesJsonLen);
        console.log(img.src)
        img.style.width = "500px";
        divImages.appendChild(img);
    }
}

function loadJSON() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./images.json", true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            imagesJson = JSON.parse(xhr.response);
            loadImages();
        }
    };
    xhr.send();
}

loadJSON();