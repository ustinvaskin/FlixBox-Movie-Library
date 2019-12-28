import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import axios from 'axios'

import { API_KEY, VIDEO_LINK } from '../../config'
import FontAwesome from 'react-fontawesome'
// import PropTypes from 'prop-types'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      videoID: ""
    }
    this.openModal = this.openModal.bind(this)
  }

  componentWillMount() {
    const id = this.props.modal
    const url = `${VIDEO_LINK}${id}/videos${API_KEY}`
    axios.get(url).then(response => {
      this.setState({ videoID: response.data.results[0].key })
    })
  }
  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    let videoID;
    if (this.state.videoID !== "") {
      videoID = this.state.videoID;
    }

    return (
      <div className="play-list">
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={videoID}
          onClose={() => this.setState({ isOpen: false })}
        />
        <li className="col-m-4" onClick={this.openModal}>
        <h3>PLAY TRAILER</h3>
          <FontAwesome className="fa-budget" name="play" size="2x" />
        </li>

        {/* <div className="director">  */}
    </div>

    )
  }
}

export default Modal;