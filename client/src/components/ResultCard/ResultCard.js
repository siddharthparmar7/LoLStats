import React from 'react'
import moment from 'moment'
import styles from './styles'

const ResultCard = ({ summoner, matchStat }) => {
  const conatinerColor = matchStat.summonerWin ? styles.victory : styles.defeat
  const containerStyles = { ...styles.container, ...conatinerColor }
  return (
    <div style={containerStyles}>
      <div style={styles.player}>
        <p>Ranked Solo</p>
        <p>
          {moment()
            .startOf(summoner.revisionDate)
            .fromNow()}
        </p>
        <p>{matchStat.summonerWin ? 'Victory' : 'Defeat'}</p>
        <p>{moment(matchStat.gameCreation).format()}</p>
      </div>
      <div style={styles.summonerInfo}>
        <img
          style={styles.summonerPic}
          src={`http://ddragon.leagueoflegends.com/cdn/9.7.1/img/profileicon/${
            summoner.profileIconId
          }.png`}
          alt="Profile pic"
        />
        <p>{summoner.name}</p>
      </div>

      <div style={styles.stats}>
        <p>Level {summoner.summonerLevel}</p>
      </div>
      <div style={styles.participants}>
        {matchStat.participantIdentities.map(participant => (
          <div style={styles.participant} key={participant.participantId}>
            <li>
              <img
                style={styles.participantImg}
                src={`http://ddragon.leagueoflegends.com/cdn/6.3.1/img/profileicon/${
                  participant.player.profileIcon
                }.png`}
                alt="participant pic"
              />
              {participant.player.summonerName}
            </li>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultCard
