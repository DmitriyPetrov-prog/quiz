const menuTemplate = () => {
    return `
        <div class="main">
            <h1>Quiz Please</h1>
            <form action="">
                <div class="number_input">
                    <label for="number" class="number_input__label">Number of questions</label>
                    <input type="number" id="questionQuantity" class="number_input__input" min="1" max="50" value="10" required>
                </div>
                <div id="category"></div>
                <div id="difficulty"></div>
                <div id="type"></div>
                <button class="start" id="start">Start quiz</button>
            </form>
        </div>
    `
}

export {
    menuTemplate
}