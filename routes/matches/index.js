const express = require('express');
const Match = require('../../models/match')
const Player  = require('../../models/player')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const matchesData = await Match.find()
        .populate('player_1', 'nickname')
        .populate('player_2', 'nickname')
        .select('id player_1 player_2 message');

    res.status(200).json(matchesData);
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});
router.get('/bests', async (req, res) => {
  try {
      const bestPlayers = await Player.aggregate([
          {
              $sort: { total_points: -1 } 
          },
          {
              $limit: 5 
          },
          {
              $project: { _id: 0, id: '$_id', nickname: 1, total_points: 1, total_wins: 1, total_loses: 1 } // Projeta os campos desejados
          }
      ]);

      res.status(200).json(bestPlayers);
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  const player1Nickname = req.query.nickname[0];
  const player2Nickname = req.query.nickname[1];

  try {
      const player1 = await Player.findOne({ nickname: player1Nickname });
      const player2 = await Player.findOne({ nickname: player2Nickname });
      const scorePlayer1 = Number(req.body.score_player_1);
      const scorePlayer2 = Number(req.body.score_player_2);

      if (!player1 || !player2) {
          return res.status(400).json({ success: false, message: 'Jogador não encontrado' });
      }

      let winner;
      let loser;

      // Lógica para determinar o vencedor com base nos pontos
      if (scorePlayer1 > scorePlayer2) {
          winner = player1;
          loser = player2
      } else if (scorePlayer2 > scorePlayer1) {
          winner = player2;
          loser = player1
      }
      if (winner) {
        winner.total_wins++;
        winner.total_matches++;
        winner.total_points += 3;
        await winner.save();
      } 
      if (loser) {
        loser.total_loses++;
        loser.total_matches++;
        await loser.save();
       }

      // Crie a partida com os dados fornecidos
      const match = new Match({
          player_1: player1,
          player_2: player2,
          score_player_1: scorePlayer1,
          score_player_2: scorePlayer2,
          message: `Jogador vencedor foi: ${winner.nickname}`
      });

      // Salve a partida e atualize os jogadores
      const savedMatch = await match.save();

      res.json({ success: true, message: 'Partida salva com sucesso', match: savedMatch });
  } catch (error) {
      res.status(500).json({ success: false, message: 'Erro ao salvar a partida', error });
  }
});

module.exports = router;