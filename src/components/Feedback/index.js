// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedBackShown: false,
  }

  onFeedBack = () => this.setState({isFeedBackShown: true})

  renderQestion = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="ul">
            {emojis.map(emoji => (
              <li className="center" key={emoji.id} onClick={this.onFeedBack}>
                <img className="img" alt={emoji.name} src={emoji.imageUrl} />
                <p className="para">{emoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderFeedback = () => {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData

    return (
      <div className="bg-container">
        <div className="card">
          <div className="center">
            <img className="img2" alt="loveEmoji" src={loveEmojiUrl} />
            <h1 className="heading">Thank You!</h1>
            <p className="para">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isFeedBackShown} = this.state

    return (
      <div>
        {isFeedBackShown ? this.renderFeedback() : this.renderQestion()}
      </div>
    )
  }
}

export default Feedback
