const express = require('express')
const API = require('./API')
const server = express()
const cors = require('cors')
const PORT = process.env.PORT || 9000

server.use(cors())

server.get('/summoner/:name', async (req, res) => {
  const summoner = req.params
  try {
    const formatedRes = await formatResponse(summoner.name)
    res.send(formatedRes)
  } catch (e) {
    res.send(e.message)
  }
})

const formatResponse = async name => {
  const summoner = await API.getSummoner(name)
  const getRecentMatches = await API.getRecentMatchesByAccountId(
    summoner.accountId
  )

  const recentMatchesStats = getRecentMatches.matches.map(async match => {
    const matchStat = await API.getMatch(match.gameId)

    matchStat.participantIdentities.map(player => {
      if (player.player.summonerId === summoner.id) {
        const playerStat = matchStat.participants.find(
          participant => participant.participantId === player.participantId
        )
        matchStat.summonerWin = playerStat.stats.win
      }
      return player
    })
    return matchStat
  })

  const allMatchStats = await Promise.all(recentMatchesStats)
  return { summoner, allMatchStats }
}

server.listen(PORT, () => {
  console.log('Server is listening at PORT', PORT)
})
