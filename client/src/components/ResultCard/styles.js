const styles = {
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    margin: '5%',
    padding: '2%'
  },

  victory: {
    backgroundColor: 'aliceblue'
  },

  defeat: {
    backgroundColor: '#ef9a9a'
  },

  summonerInfo: {
    textAlign: 'left'
  },

  summonerPic: {
    borderRadius: '50%',
    height: '50px',
    width: '50px'
  },

  player: {
    textAlign: 'center',
    justifyContent: 'flex-start'
  },

  participants: {
    display: 'flex',
    flexFlow: 'column',
    flexWrap: 'wrap',
    height: '250px',
    textAlign: 'left'
  },

  participantImg: {
    height: '20px',
    width: '20px'
  }
}

export default styles
