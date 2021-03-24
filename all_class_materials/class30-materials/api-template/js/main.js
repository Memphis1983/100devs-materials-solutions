//Make an api request using async await

document.querySelector("button").addEventListener("click", getDogPhotos)

async function getDogPhotos() {
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await res.json()
        console.log(data)
        const image  = document.querySelector("img")
        image.src = data.message;
        image.classList.remove("hidden")

    } catch (e) {
    console.log(`Error: ${e}`)
    }
}
