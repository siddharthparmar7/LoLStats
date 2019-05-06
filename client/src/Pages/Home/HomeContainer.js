import React, { Component } from 'react'
import Home from './Home'
import Loading from '../../components/Loading'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      summonerName: null,
      loading: false,
      data: null
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true })
    const res = await fetch(
      `http://localhost:9000/summoner/${this.state.summonerName}`
    )
    const stats = await res.json()
    this.setState({ data: stats })
    this.setState({ loading: false })
  }

  render() {
    const { loading, data } = this.state
    return (
      <div>
        <h1>League Stats</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="summonerName"
            onChange={e => {
              this.setState({ summonerName: e.target.value })
            }}
          />
        </form>

        {loading ? <Loading /> : data && <Home data={data} />}
      </div>
    )
  }
}

export default HomeContainer
