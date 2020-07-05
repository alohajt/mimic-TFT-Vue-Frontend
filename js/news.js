const overallUpdates = document.querySelector(".comment_container")
const titleForm = document.querySelector("#title_form")
const updateForm = document.querySelector("#update_form")
// im also uploading an image


updateForm.addEventListener("submit", displayUpdate)

// titleForm.addEventListener("submit", displayTitle)


function displayUpdate(event) {
    event.preventDefault()

    const updateFormData = new FormData(event.target)
    const updateText = updateFormData.get("update")
    const titleText = updateFormData.get("title")
    const imgUpload = updateFormData.get("image")

    const title = document.createElement("h4")
    title.textContent = titleText
    const update = document.createElement("p")
    update.textContent = updateText
    const image = document.createElement("image")
    image.src = imgUpload
    

    overallUpdates.append(title, update, image)

    event.target.reset()
}


