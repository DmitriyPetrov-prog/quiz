const menuTemplate = () => {
    const minNumberOfQuestions = 1;
    const maxNumberOfQuestions = 50;

    return `
        <div class="main">
            <h1>Quiz Please</h1>
            <form action="">
                <div class="number-input">
                    <label for="number" class="number-input__label">Number of questions(from ${minNumberOfQuestions} to ${maxNumberOfQuestions})</label>
                    <input type="number" id="questionQuantity" class="number-input__input" min="${minNumberOfQuestions}" max="${maxNumberOfQuestions}" value="10" oninput="validity.valid||(value='');" required>
                </div>
                <div id="category"></div>
                <div id="difficulty"></div>
                <div id="type"></div>
                <button class="start btn" id="start">Start quiz</button>
            </form>
        </div>
    `;
}

export {
    menuTemplate
}