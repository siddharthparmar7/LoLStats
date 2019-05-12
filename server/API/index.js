require('dotenv').config()
process.env.LEAGUE_API_PLATFORM_ID = 'na1'

const LeagueJS = require('leaguejs')
const leagueJs = new LeagueJS(process.env.RIOT_API_KEY)

const getSummoner = async name => {
  try {
    const summoner = await leagueJs.Summoner.gettingByName(name)
    return summoner
  } catch (err) {
    return err
  }
}

const getRecentMatchesByAccountId = async accountId => {
  try {
    const recentMatches = await leagueJs.Match.gettingListByAccount(accountId, {
      endIndex: 5
    })

    return recentMatches
  } catch (err) {
    return err
  }
}

const getMatch = async gameId => {
  try {
    const match = await leagueJs.Match.gettingById(gameId)
    return match
  } catch (err) {
    return err
  }
}

module.exports = { getSummoner, getRecentMatchesByAccountId, getMatch }
