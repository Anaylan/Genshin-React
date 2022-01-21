// import axios from "axios";
// import response from "../characters";

export default class PostService {
    static async getAllCharacter() {
        try {
            const response = require('../data/characters');
            return response.characters;
        } catch (error) {
            console.log(error);
        }
    }

    static async getCharacterItem(title) {
        try {
            const response = require('../data/characters');
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