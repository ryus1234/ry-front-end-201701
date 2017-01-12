import React from 'react'
import ReactDOM from 'react-dom'

import Link from './components/Link'
import Button from './components/Button'
import Counter from './components/Counter'

const App = (props) => (
  <div>
    <h1>Hello</h1>
    <Link url="https://google.com">Google</Link>
    <Link url="about.html">About Me</Link>
    <Button styleBtton="btn">Google</Button>
    <hr />
    <Counter initialCount="0" />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);