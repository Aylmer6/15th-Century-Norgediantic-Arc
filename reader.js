const params = new URLSearchParams(window.location.search)

const chapter = params.get("chapter")

const reader = document.getElementById("reader")

const totalPages = 20

for(let i=1;i<=totalPages;i++){

let img = document.createElement("img")

img.src = `Tagalog/${chapter}/page_${i}.jpg`

img.onerror = function(){

this.src = `Tagalog/${chapter}/page_${i}.png`

}

reader.appendChild(img)

}