/* @flow */
import React from 'react'
import render from './render'

type S = {
  editing: boolean,
  container: any
}

class App extends React.PureComponent<{}, S> {
  state = {
    editing: false,
    container: {
      type: 'container',
      background: 'tomato',
      children: [
        { type: 'h1', text: 'Heading 1' },
        { type: 'h1', text: 'Lorem ipsum dolor sit amet' },
        {
          type: 'container',
          background: 'tomato',
          children: [
            { type: 'h1', text: 'Subchild' }
          ]
        }
      ]
    }

  }
  render () {
    return (
      <div className='App'>
        <input
          type='checkbox'
          value={this.state.editing}
          onChange={e => this.setState({editing: e.target.checked})}
        />
        { this.state.editing ? 'Editing' : 'Viewing'}
        {
          render(
            this.state.container,
            (newProps) => this.setState({
              container: { ...newProps, type: 'container' }
            }),
            this.state.editing
          )
        }
      </div>
    )
  }
}

export default App
