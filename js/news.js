const overallUpdates = document.querySelector(".updates")
const titleForm = document.querySelector("#title_form")
// one form has two inputs
const updateForm = document.querySelector("#update_form")
// im also uploading an image


updateForm.addEventListener("submit", displayUpdate)

titleForm.addEventListener("submit", displayTitle)

function displayTitle(event) {
    event.preventDefault()

    const titleFormData = new FormData(event.target)
    const titleText = titleFormData.get("title")

    const title = document.createElement("h4")
    title.textContent = titleText
    overallUpdates.append(title)

    event.target.reset()
}

function displayUpdate(event) {
    event.preventDefault()

    const updateFormData = new FormData(event.target)
    const updateText = updateFormData.get("update")

    const update = document.createElement("p")
    update.textContent = updateText
    updates.append(update)

    event.target.reset()
}


