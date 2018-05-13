/* @flow */
import * as React from 'react'
type P = {
  background: string,
  children: React.Node,
  editing: boolean,
  onChange: ({background: string}) => void
}
export default class EditableContainer extends React.PureComponent<P> {
  renderView = (children) => (
    <div style={{backgroundColor: this.props.background}}>
      { children }
    </div>
  )
  renderEdit = () => (
    this.renderView(
      <React.Fragment>
        <input
          type='text'
          value={this.props.background}
          onChange={(e) => this.props.onChange({
            background: e.target.value
          })}
        />
        { this.props.children }
      </React.Fragment>
    )

  )
  render = () => !this.props.editing ? this.renderView(this.props.children) : this.renderEdit()
}
