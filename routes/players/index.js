const express = require('express');
const Player = require('../../models/player');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const playerData = await Player.find();
        res.status(200).json(playerData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
router.post('/', async (req, res) => {
    const existPlayer = await Player.findOne({$or: [
        {nickname: req.body.nickname},
        {email: req.body.email}
    ]})
    if (existPlayer) {
        return res.status(400).send('Nickname ou email já cadastrado. Escolha outros valores.');
    }
    const player = new Player({
        nickname: req.body.nickname,
        email: req.body.email
    })

    try {
        const savedPlayer = await player.save();
        if (!savedPlayer) {
            return res.status(400).send('Erro ao registrar usuário');
        }
        res.status(201).json(savedPlayer);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro interno do servidor');
    }
});
router.put('/:email', async (req, res) => {
    try {
        const player = await Player.findOneAndUpdate(
            { email: req.params.email },
            { $set: { nickname: req.body.nickname } },
            { new: true }
        );

        if (!player) {
            return res.status(400).send({ success: false, message: 'Erro ao atualizar jogador' });
        }
        res.send({success: true, message: `Nome de jogador atualizado para: ${player.nickname}`, player});
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro interno do servidor');
    }
});

module.exports = router;