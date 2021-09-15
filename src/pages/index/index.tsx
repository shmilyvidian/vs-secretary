import React,{Component}from 'react'
import { Text,View,Picker,Image } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { HomeStore } from '@/store/homeStore'
import { CommonStore } from '@/store/commonStore'
import { IndexMain } from './indexSty'
import Taro, { Config } from '@tarojs/taro'
import { AtButton,AtTabBar,AtNavBar,AtList, AtListItem,AtTag} from 'taro-ui'
import add from '@/assets/add.png'
import download from '@/assets/download.png'

import Resume from '../resume/index' 

type propsType = {
  store: {
    homeStore,
  }
}

type stateType = {
  current:number
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
    this.state = {
      current:0
    } 
  }
  handleClick (value) {
    this.setState({
      current: value
    })
    switch (value) {
      case 0:
          Taro.redirectTo({
              url: `/pages/index/index`
          })
          Taro.setNavigationBarTitle({
            title: '简历助手'
          });
          break;
      case 1:
          Taro.redirectTo({
              url: `/pages/pinglun/index`
          })
          break;
      case 2:
          Taro.redirectTo({
              url: `/pages/yindao/index`
          })
          Taro.setNavigationBarTitle({
            title: '我的'
          });
          break;         
      default:
          break;
    }    
  }
  Config = {
    navigationBarTitleText: '个人中心'
  }

  render () {
    const { homeStore } = this.props.store
    console.log(homeStore);
    
    return (
      <IndexMain>
           <AtTabBar fixed tabList={[
            { title: '简历', iconType: 'home'},
            { title: '上传', iconType: 'upload' },
            { title: '我的', iconType: 'user'}
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
          color='#ACACAC'
          selectedColor='#F9612A'
        />


      <Resume></Resume>
      </IndexMain>
    )
  }
}

export default Index
