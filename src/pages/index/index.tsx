import React ,{ Component } from 'react'
import { Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { HomeStore } from '@/store/homeStore'
import { CommonStore } from '@/store/commonStore'
import { IndexMain } from './indexSty'

type propsType = {
  store: {
    homeStore,
  }
}

type stateType = {
  currentIndex: Number | undefined,
}

interface Index {
  props: propsType
  state: stateType
}

@inject('store')
@observer
class Index extends Component {
  private homeStore: HomeStore
  private commonStore: CommonStore
  constructor(props) {
    super(props)
    this.homeStore = props.store.homeStore
    this.commonStore = props.store.commonStore
    this.state = {} as stateType
  }

  render () {
    const { homeStore } = this.props.store
    console.log(homeStore);
    
    return (
      <IndexMain>
        <Text>平安小秘书test</Text>
      </IndexMain>
    )
  }
}

export default Index
