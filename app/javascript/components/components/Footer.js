import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <footer>
        <ul>
          <NavLink to="/">&copy; 2021 Mayuri Dalavai</NavLink>
        </ul>
        <ul>
        <button type="button" className="btn btn-secondary">Not Found</button>
      </ul>
        </footer>
        )
    }
}
