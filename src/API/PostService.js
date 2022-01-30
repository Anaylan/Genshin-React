// import axios from "axios";
// import response from "../characters";



export default class PostService {
    static async getAllCharactersCard() {
        let item;
        let items=[];
        try {
            const response = require('../data/characters');
            response.characters.map((character) => {
                item = {};
                item.id = character.id;
                item.title = character.title;
                item.body = character.body;
                item.rarity = character.rarity;
                items.push(item)
            })
            return items;
        } catch (error) {
            console.log(error);
        }
    }

    static async getHome() {
        try {
            return require('../data/home');
        } catch (error) {
            console.log(error);
        }
    }

    static async getAllCharacters() {
        try {
            const response = require('../data/characters');
            return response.characters

        } catch (error) {
            console.log(error);
        }
    }

}