import axios from "axios";
import response from "../db";

export default class PostService {
    // static async getAllCharacters() {
    //     try {
    //         const response = await axios.get('http://localhost:8000/characters');
    //         return response.data;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    static async getAllCharacter() {
        try {
            const response = require('../db');
            return response.characters;
        } catch (error) {
            console.log(error);
        }
    }

    static async getCharacterItem(title) {
        try {
            const response = require('../db');
            console.log(title)
            response.characters.map((character) => {
                console.log(character.title)
                if (title == character.title) {
                    return character;
                }
            })

        } catch (error) {
            console.log(error);
        }
    }

}