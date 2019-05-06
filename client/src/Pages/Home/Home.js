import React from 'react'
import ResultCard from '../../components/ResultCard'

const Home = ({ data }) => {
  return (
    data &&
    data.allMatchStats.map(match => (
      <ResultCard
        key={match.gameId}
        summoner={data.summoner}
        matchStat={match}
      />
    ))
  )
}

export default Home
