import { Component } from 'react'

export default class Error extends Component {
  constructor(props: any) {
    super(props)
  }

  render() {
    // @ts-ignore
    return <div>{undefinedConstant}</div>
  }
}
