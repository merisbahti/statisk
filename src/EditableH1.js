/* @flow */
import React from 'react'
type P = {
  text: string,
  editing: boolean,
  onChange: ({text: string}) => void
}
export default class EditableH1 extends React.PureComponent<P> {
  renderView = () => (
    <h1>{this.props.text}</h1>
  )
  renderEdit = () => (
    <input
      type='text'
      value={this.props.text}
      onChange={(e) => this.props.onChange({text: e.target.value})}
    />
  )
  render = () => !this.props.editing ? this.renderView() : this.renderEdit()
}
