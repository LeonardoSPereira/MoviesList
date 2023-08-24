const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class NotesController {
    async create(request, response) {
        const { title, description, rating, tags } = request.body;
        const { user_id } = request.params;

        if(typeof rating !== 'number') {
            throw new AppError("O valor da nota deve ser um número")
        }


        const ratingInteger = Number.isInteger(rating);
        const ratingInterval = rating >= 1 && rating <= 5;
        console.log(ratingInteger, ratingInterval)

        if(!ratingInteger || !ratingInterval) {
            throw new AppError("O valor da nota deve ser um número inteiro entre 1 e 5");
        }


        const {note_id} = await knex("movieNotes").insert({
            title,
            description,
            rating,
            user_id
        });

        const tagsInsert = tags.map(name => {
            return {
                note_id,
                name,
                user_id
            }
        });

        await knex("tags").insert(tagsInsert);

        response.json()
    }
}

module.exports = NotesController;