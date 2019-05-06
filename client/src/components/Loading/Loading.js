import React from 'react'
import LoagingGif from '../../resources/images/loading.gif'
import styles from './styles'

const Loading = () => (
  <div style={styles.container}>
    <img src={LoagingGif} style={styles.img} alt="Loading" />
  </div>
)

export default Loading
