import axios from "axios";

export default class PostService {
    static async getAll() {
        try {
            const response = await axios.get('http://localhost:8000/characters');
            return response.data
        } catch (er) {
            console.log(er)
        }

    }
}