/* @flow */
import EditableH1 from './EditableH1'
import EditableContainer from './EditableContainer'
import React from 'react'
type Element = {
  type: 'h1',
  text: string
} | {
  type: 'container',
  background: string,
  children: Array<Element>
}
const render = (element: Element, setProps: (any) => void, editing: boolean) => {
  switch (element.type) {
    case 'h1': return (
      <EditableH1
        text={element.text}
        editing={editing}
        onChange={setProps}
      />
    )
    case 'container': return (
      <EditableContainer
        background={element.background}
        editing={editing}
        onChange={({background}) => setProps({background, children: element.children})}
        children={
          element.children.map((child, i) => (
            render(
              child,
              (newProps) => setProps({
                background: element.background,
                children: [
                  ...element.children.slice(0, i),
                  {
                    ...newProps,
                    type: child.type
                  },
                  ...element.children.slice(i + 1)
                ]
              }),
              editing
            )
          ))
        }
      />
    )
  }
}

export default render
