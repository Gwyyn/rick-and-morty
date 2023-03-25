import axios from "axios";

export default class CardService {
    static async getAll(){
        const response = await axios.get("https://rickandmortyapi.com/api/character")
        return response;
    }

    static async getCards(page) {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        return response;
    }

}
// static async getCards(page) {
//     const response = await axios.get("https://rickandmortyapi.com/api/character", {
//         params: {
//             _page:page
//         }
//     })
//     return response;
// }
