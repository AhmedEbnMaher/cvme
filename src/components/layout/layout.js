import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../Header/header'
import './layout.scss'
export class Layout extends Component {



  render() {
    return (
      <>
        <div className='layout'>
          <Header/>
         <div className='child-content'> {this.props.children }</div>   
        </div>

        {}
      </>
    )
  }
}


export default withRouter(Layout)
