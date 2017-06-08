import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  render () {
    return (
      <article>
        <div>
          <section className='text-section'>
            <h1>Seja bem vindo!</h1>
          </section>
        </div>
      </article>
    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Home)
