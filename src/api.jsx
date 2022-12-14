import { API_URL } from "./config";

const getMealById= async(mealId) => {
    const response =await fetch(API_URL + 'lookup.php?i=' + mealId);
    return response.json();
}
const getAllCategories = async()=>{
    const response =await fetch(API_URL + 'categories.php');
    return response.json()
}
const getFilterCategories = async(categoryName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + categoryName);
    return response.json()
}

export {getAllCategories, getFilterCategories, getMealById};