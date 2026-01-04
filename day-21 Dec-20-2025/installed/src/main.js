import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <button class="btn btn-neutral">Neutral</button>
`

setupCounter(document.querySelector('#counter'))
