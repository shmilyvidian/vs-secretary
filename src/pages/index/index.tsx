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

type propsType = {
  store: {
    homeStore,
  }
}

type stateType = {
  currentIndex: Number | undefined,
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
  Config = {
    navigationBarTitleText: '个人中心'
  }

  render () {
    const { homeStore } = this.props.store
    console.log(homeStore);
    
    return (
      <IndexMain>
        <View className="addTitle">添加简历</View>
        <View className="addNode">填写求职者基本信息，简历详细信息请上传简历附件</View>
        <View style="width:100%">
          <AtList>
            <AtListItem title='姓名' extraText='张三' onClick={this.handleClick} />
            <AtListItem title='职位' extraText='产品经理' />
            <AtListItem title='经验' extraText='6年' />
            <AtListItem title='学历' extraText='本科' />
            <AtListItem title='性别' extraText='男' arrow='right' />
            <AtListItem title='岗位类型' extraText='外包' arrow='right' />
          </AtList>
        </View>

        <View className="card">
          <View className="title">
            <Text>标签</Text>
            <Image src={add} className="add" />
          </View>
          <View className="tags"> 
            <Text className="tag">有数据思维</Text>
            <Text className="tag">经验丰富</Text>
            <Text className="tag">方法论完善</Text>
            <Text className="tag">经验丰富</Text>

            <Text className="tag">有数据思维</Text>
            <Text className="tag">经验丰富</Text>
            <Text className="tag">方法论完善</Text>
            <Text className="tag">经验丰富</Text>

          </View>
        </View>

        <View className="card">
          <View className="title">
            <Text>简历附件</Text>
            <Image src={add} className="add" />
          </View>
          <View className="resume"> 
            <View className="tag">
              <Text>张三的简历.docx</Text>
              <Image src={download} className={download}/>
            </View>
          </View>
        </View>


        <View className="card">
          <View className="title">
            <Text>其他附件</Text>
            <Image src={add} className="add" />
          </View>
          <View className="resume"> 
            <View className="tag">
              <Text>张三的作品集1.pdf</Text>
              <Image src={download} className={download}/>
            </View>
            <View className="tag">
              <Text>张三的作品集2.pdf</Text>
              <Image src={download} className={download}/>
            </View>
          </View>
        </View>



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

      </IndexMain>
    )
  }
}

export default Index
