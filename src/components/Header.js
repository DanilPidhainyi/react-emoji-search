import React, { useState, useEffect, useCallback } from 'react'
import GitHubButton from 'react-github-btn'
import './Header.css'
import Toggle from './Toggle.js'
import { keepTheme } from '../utils/theme'
import {BearToggle} from "./BearToggle.js";

function Header({resultsIsLine, setResultIsLine}) {

  const theme = localStorage.getItem('theme')
  const [togClass, setTogClass] = useState('dark')

  const callback = useCallback((theme) => {
    setTogClass(theme)
  }, [setTogClass])

  useEffect(() => {
    keepTheme()
    const storedTheme = localStorage.getItem('theme')
    setTogClass(storedTheme)
  }, [togClass])

  return (
    <div className="header">
      <h1 className={'Bear_line'}>
        Line <BearToggle state={resultsIsLine} callback={setResultIsLine}/> Full
      </h1>
      <p>
        A simple emoji search tool made with ReactJS.
      </p>


      <div className="container">
        <Toggle parentCallback={callback} />
        <p className="theme-info">
          Switch to your preferred theme.
        </p>
      </div>
    </div>
  )
}

export default Header
