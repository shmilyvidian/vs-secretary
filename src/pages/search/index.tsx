import React,{Component}from 'react'
import { Text,View,Picker,Image,Button } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { HomeStore } from '@/store/homeStore'
import { CommonStore } from '@/store/commonStore'
import Taro, { Config } from '@tarojs/taro'
import { AtButton,AtTabBar,AtNavBar,AtList, AtListItem,AtTag,AtModal,AtModalHeader, AtModalContent, AtModalAction,AtSearchBar} from 'taro-ui'
import './indexSty.scss'

type propsType = {
  store: {
    homeStore,
  }
}

type stateType = {
  currentIndex: Number | undefined,
  current:number,
  searchValue:string
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
  onClick (){
    return;
  }
  onChangeSearch (){
    return;
  }
  onActionClick (){
    return;
  }

  
  render () {
    const { homeStore } = this.props.store
    console.log(homeStore);
    
    return (
      <View className="fixedBox">
         <AtSearchBar
            actionName='搜索岗位'
            value={this.state.searchValue}
            onChange={this.onChangeSearch.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
          />
        
        <View className="fixedContent">
          <View className="fixedLeft">
            <View className="item active">技术</View>
            <View className="item">销售</View>
            <View className="item">人事/财务/财务/财务</View>
            <View className="item">高级管理</View>
            <View className="item">金融</View>
            <View className="item">设计</View>
            <View className="item">市场</View>
            <View className="item">传媒</View>
            <View className="item">教育培训</View>
            <View className="item">传媒</View>
            <View className="item">教育培训</View>
            <View className="item">传媒</View>
            <View className="item">教育培训</View>
          </View>
          <View className="fixedRight">
            <View className="items">
              <View className="title">后端开发</View>
              <View className="children">
                <View className="item">Java</View>
                <View className="item">C++</View>
                <View className="item">Java</View>
                <View className="item">C++</View>
              </View>
            </View>
            <View className="items">
              <View className="title">移动开发</View>
              <View className="children">
                <View className="item">Java</View>
                <View className="item">C++</View>
                <View className="item">Java</View>
                <View className="item">C++</View>
              </View>
            </View>
            <View className="items">
              <View className="title">前端开发</View>
              <View className="children">
                <View className="item">Java</View>
                <View className="item">C++</View>
                <View className="item">Java</View>
                <View className="item">C++</View>
              </View>
            </View>
            <View className="items">
              <View className="title">后端开发</View>
              <View className="children">
                <View className="item">Java</View>
                <View className="item">C++</View>
                <View className="item">Java</View>
                <View className="item">C++</View>
              </View>
            </View>
            <View className="items">
              <View className="title">C#开发</View>
              <View className="children">
                <View className="item">Java</View>
                <View className="item">C++</View>
                <View className="item">Java</View>
                <View className="item">C++</View>
              </View>
            </View>
          </View>
        </View>
 

        {/* <AtModal isOpened>
          <AtModalContent>
              <View>复制链接到浏览器后，上传简历</View>
          </AtModalContent>
          <AtModalAction>
            <Button>复制</Button>
          </AtModalAction>
        </AtModal>       */}
        {/* <AtTabBar fixed tabList={[
            { title: '简历', iconType: 'home'},
            { title: '上传', iconType: 'upload' },
            { title: '我的', iconType: 'user'}
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
          color='#ACACAC'
          selectedColor='#F9612A'
        /> */}

      </View>
    )
  }
}

export default Search
