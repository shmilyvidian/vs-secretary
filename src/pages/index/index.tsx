import React, { Component } from 'react'
import { Text, Image } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { HomeStore } from '@/store/homeStore'
import { CommonStore } from '@/store/commonStore'
import { IndexMain } from './indexSty'
import record from '@/assets/images/record.png'
import meeting from '@/assets/images/meeting.png'
import deleteIcon from '@/assets/images/delete.png'
import create from '@/assets/images/create.png'
// import './index.scss'
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

  render() {
    const { homeStore } = this.props.store
    console.log(homeStore);

    return (
      <IndexMain>
        <view className="tabItem_GBox">
          <view className="tabItem active">
            <text>提 醒</text>
          </view>
          <view className="tabItem">
            <text>会 议</text>
          </view>
        </view>
        <view className="remindItem_Box active">
          <view className="title">
            <text className="date">08月09日</text>
            <text className="total">5个提醒事项</text>
          </view>
          <view className="list">
            <view className="item">
              <text className="text">跟领导汇报调研报告</text>
              <Image src={meeting} className="meeting" />
            </view>
            <view className="item">
              <text className="text">跟领导汇报调研</text>
              <Image src={record} className="record" />
            </view>
            <view className="item">
              <text className="text">跟领导汇报调研报告调研报告报告调研报</text>
              <Image src={record} className="record" />
              <view className="deleteBox">
                <Image src={deleteIcon} className="deleteIcon" />
              </view>
            </view>
            <view className="item">
              <text className="text">跟领导汇报调研</text>
              <Image src={meeting} className="meeting" />
            </view>
            <view className="item">
              <text className="text">跟领导汇报调研报告调研报告调研报告调研报告调研报告</text>
              <Image src={meeting} className="meeting" />
            </view>
          </view>
        </view>

        <view className="remindItem_Box">
          <view className="title">
            <text className="date">08月10日</text>
            <text className="total">3个提醒事项</text>
          </view>
          <view className="list">
            <view className="item">
              <text className="text">跟领导汇报调研报告</text>
              <Image src={meeting} className="meeting" />
            </view>
            <view className="item">
              <text className="text">跟领导汇报调研</text>
              <Image src={meeting} className="meeting" />
            </view>
            <view className="item">
              <text className="text">跟领导汇报调研报告调研报告调研报告调研报告调研报告</text>
              <Image src={meeting} className="meeting" />
            </view>
          </view>
        </view>

        <view className="addFixedBox">
          <view className="addFixed">
            <Image src={create} className="icon"></Image>
            <text className="text">新建提醒事项</text>
          </view>
        </view>


      </IndexMain>
    )
  }
}

export default Index
