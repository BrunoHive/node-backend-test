const users = require('../models/user')

module.exports = {
    async create(request, response) {
        try {
            const result = await users.create(request.body);
            response.status(201)
            response.json(result)
        } catch (error) {
            response.status(500)
            response.json(JsonError(request, response, 'Não foi possível adicionar o user'))
        }
    },

    async read(request, response) {
        try {
            const result = await users.findAll({ raw: true })
            response.json(result)
        } catch (error) {
            response.status(500)
            response.json(JsonError(request, response, 'Não foi possível buscar os users'))
        }
    },

    async update(request, response) {
        try {
            const { id } = request.params
            const user = await users.findOne({ where: { id } })
            if (user) {
                await users.save(request.body)
                response.json(user)
                response.status(200)
            } else {
                response.status(404)
                response.json(JsonError(request, response, 'Usuario não encontrado'))
            }
        } catch (error) {
            response.status(500)
            response.json(JsonError(request, response, 'Não foi possível atualizar o user'))
        }
    },

    async delete(request, response) {
        const { id } = request.params
        try {
            const users = await users.findOne({ where: { id } })
            if (users) {
                await users.destroy();
                response.json({ status: '200', message: 'Usuario deletado com sucesso' })
            } else {
                response.status(404);
                response.json(JsonError(request, response, 'Usuario não encontrado'))
            }
        } catch (error) {
            response.status(500);
            response.json(JsonError(request, response, 'Não foi possível deletar o user'))
        }
    }
};