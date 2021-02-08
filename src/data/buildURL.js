import {URL} from "../constants";

const buildURL = (options) => {
    const {questionQuantity, category, difficulty, type} = options;
    return URL.BASE
         + getApiAmount(questionQuantity)
         + getApiCategory(category)
         + getApiDifficulty(difficulty)
         + getApiType(type)
         + URL.ENCODE_TYPE;
}

const getApiAmount = (amount) => {
    return amount ? `amount=${amount}` : "amount=10";
}

const getApiCategory = (category) => {
    return category ? `&category=${category}` : "";
}

const getApiDifficulty = (difficulty) => {
    return difficulty ? `&difficulty=${difficulty.toLowerCase()}` : "";
}

const getApiType = (type) => {
    return type ? `&type=${type}` : "";
}

export {
    buildURL
}