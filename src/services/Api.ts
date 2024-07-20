import axios from "axios";

export default async function getContacts() {
    const { data } = await axios.get('https://jellybellywikiapi.onrender.com/api/recipes?pageSize=30');
    console.log(data.items);
    return data.items;
}