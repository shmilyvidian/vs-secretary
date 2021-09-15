import React,{Component}from 'react'
import { Text,View,Picker,Image } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { HomeStore } from '@/store/homeStore'
import { CommonStore } from '@/store/commonStore'
import Taro, { Config } from '@tarojs/taro'
import { AtButton,AtTabBar,AtNavBar,AtList, AtListItem,AtTag} from 'taro-ui'


type propsType = {
  store: {
    homeStore,
  }
}

type stateType = {
  currentIndex: Number | undefined,
  current:number
}

interface Search {
  props: propsType
  state: stateType
}

@inject('store')
@observer
class Search extends Component {
  private homeStore: HomeStore
  private commonStore: CommonStore

  constructor(props) {
    super(props)
    this.homeStore = props.store.homeStore
    this.commonStore = props.store.commonStore
    this.state = {} as stateType
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
      case 3:
          Taro.redirectTo({
              url: `/pages/wode/index`
          })
          break;            
      default:
          break;
    }    
  }

  render () {
    const { homeStore } = this.props.store
    console.log(homeStore);
    
    return (
      <View>

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

      </View>
    )
  }
}

export default Search
