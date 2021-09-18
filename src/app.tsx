import React from 'react'
import { Provider } from 'mobx-react'

import store from './store'

import './app.less'
import 'taro-ui/dist/style/index.scss'
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
