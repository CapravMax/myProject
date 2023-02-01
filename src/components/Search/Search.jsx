import React from "react"
import {TbSearch} from 'react-icons/tb'
import './Search.scss'

export function Search () {

    return (
        <div className ="search">
            <button type="button" className="search_button">
            <TbSearch/>
            </button>
                      
          <form action="#">
            <div className="search_form">
              <input type="search" placeholder="Search Here" autoFocus />
            </div>
          </form>

      </div>
    )
}

