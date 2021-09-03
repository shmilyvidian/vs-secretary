import React, { Component } from 'react'
import { View,Input,Text, Image } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { HomeStore } from '@/store/homeStore'
import { CommonStore } from '@/store/commonStore'
import { IndexMain } from './indexSty'
import record from '@/assets/images/record.png'
import meeting from '@/assets/images/Text.png'
import recordActive from '@/assets/images/recordActive.png'
import meetingActive from '@/assets/images/TextActive.png'
import deleteIcon from '@/assets/images/delete.svg'
import create from '@/assets/images/create.svg'
import close from '@/assets/images/close.svg'
import copytext from '@/assets/images/copytext.svg'
import share from '@/assets/images/share.svg'
import download from '@/assets/images/download.svg'
// import './index.scss'
type propsType = {
  store: {
    homeStore,
  }
}

type stateType = {
  currentIndex: Number | undefined,
  
  showAll: true,
  showFold: false,
  isShowRemind: false,
  isShowDialogText: false,
  isShowDialogRecord: false,
  isShowDialogTextDetail: false,
  isShowDialogRecordDetail: false,
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
    } as stateType
  }
  showDialogText = ()=>{
    this.setState({
      isShowDialogText: !this.state.isShowDialogText,
    })
  }
  showDialogRecord = ()=>{
    this.setState({
      isShowDialogRecord: !this.state.isShowDialogRecord,
    })
  }
  showDialogTextDetail = ()=>{
    this.setState({
      isShowDialogTextDetail: !this.state.isShowDialogTextDetail,
    })
  }
  showDialogRecordDetail = ()=>{
    this.setState({
      isShowDialogRecordDetail: !this.state.isShowDialogRecordDetail,
    })
  }
  closeDialogText = ()=>{
    this.setState({
      isShowDialogText: !this.state.isShowDialogText,
      isShowRemind: !this.state.isShowRemind
    })
  }
  closeDialogRecord = ()=>{
    this.setState({
      isShowDialogRecord: !this.state.isShowDialogRecord,
      isShowRemind: !this.state.isShowRemind
    })
  }
  closeDialogTextDetail = ()=>{
    this.setState({
      isShowDialogTextDetail: !this.state.isShowDialogTextDetail,
    })
  }
  closeDialogRecordDetail = ()=>{
    this.setState({
      isShowDialogRecordDetail: !this.state.isShowDialogRecordDetail,
    })
  }
  showRemindBox = ()=>{
    this.setState({
      isShowRemind: !this.state.isShowRemind
    })
  }
  
  


  render() {
    const { homeStore } = this.props.store
    const { isShowDialogText,isShowDialogRecord,isShowRemind,isShowDialogTextDetail,isShowDialogRecordDetail} = this.state
    
    console.log(homeStore);

    return (
      <IndexMain>
        <View className="tabItem_GBox">
          <View className="tabItem active">
            <Text>提 醒</Text>
          </View>
          <View className="tabItem">
            <Text>会 议</Text>
          </View>
        </View>
        <View className="remindItem_Box active">
          <View className="title">
            <Text className="date">08月09日</Text>
            <Text className="total">5个提醒事项</Text>
          </View>
          <View className="list">
            <View className="item" onClick={()=> {this.showDialogTextDetail()}}>
              <Text className="text">跟领导汇报调研报告</Text>
              <Image src={meetingActive} className="meeting" />
            </View>
            <View className="item" onClick={()=> {this.showDialogRecordDetail()}}>
              <Text className="text">跟领导汇报调研</Text>
              <Image src={recordActive} className="record" />
            </View>
            <View className="item" onClick={()=> {this.showDialogTextDetail()}}>
              <Text className="text">跟领导汇报调研报告调研报告报告调研报</Text>
              <Image src={recordActive} className="record" />
              <View className="deleteBox">
                <Image src={deleteIcon} className="deleteIcon" />
              </View>
            </View>
            <View className="item" onClick={()=> {this.showDialogTextDetail()}}>
              <Text className="text">跟领导汇报调研</Text>
              <Image src={meetingActive} className="meeting" />
            </View>
            <View className="item" onClick={()=> {this.showDialogTextDetail()}}>
              <Text className="text">跟领导汇报调研报告调研报告调研报告调研报告调研报告</Text>
              <Image src={meetingActive} className="meeting" />
            </View>
          </View>
        </View>

        <View className="remindItem_Box">
          <View className="title">
            <Text className="date">08月10日</Text>
            <Text className="total">3个提醒事项</Text>
          </View>
          <View className="list">
            <View className="item">
              <Text className="text" >跟领导汇报调研报告</Text>
              <Image src={record} className="record" />
            </View>
            <View className="item">
              <Text className="text">跟领导汇报调研</Text>
              <Image src={meeting} className="meeting" />
            </View>
            <View className="item">
              <Text className="text">跟领导汇报调研报告调研报告调研报告调研报告调研报告</Text>
              <Image src={meeting} className="meeting" />
            </View>
          </View>
        </View>

        <View className="remindItem_Box">
          <View className="title">
            <Text className="date">08月10日</Text>
            <Text className="total">3个提醒事项</Text>
          </View>
          <View className="list">
            <View className="item">
              <Text className="text">跟领导汇报调研报告</Text>
              <Image src={meeting} className="meeting" />
            </View>
            <View className="item">
              <Text className="text">跟领导汇报调研</Text>
              <Image src={meeting} className="meeting" />
            </View>
            <View className="item">
              <Text className="text">跟领导汇报调研报告调研报告调研报告调研报告调研报告</Text>
              <Image src={meeting} className="meeting" />
            </View>
          </View>
        </View>

        <View className="remindBox" style={isShowRemind? "display:block":"display:none"}>
          <View className="remindText" onClick={()=> {this.showDialogText()}}>
            <Text>文本提醒事项</Text>
          </View>
          <View className="remindVoice" onClick={()=> {this.showDialogRecord()}}>
            <Text>语音提醒事项</Text>
          </View>
        </View>

        <View className="addFixedBox">
          <View className="addFixed" onClick={()=> {this.showRemindBox()}}>
            <Image src={create} className="icon"></Image>
            <Text className="text">新建提醒事项</Text>
          </View>
        </View>
        <View className="bgFixedBox" style={isShowDialogText? "display:block":"display:none"}>
          <View className="dialogBox">
            <Image src={close} className="dialogClose" onClick={()=> {this.closeDialogText()}}></Image>
            <View className="dialogTitle">
              <Text>新增文本提醒事项</Text>
            </View>
            <View className="dialogContent">
                <View className="item">
                  <Text className="label">主题：</Text>
                  <Input
                    type="text"
                    placeholder="请输入主题名称"
                    className="input"
                  />
                </View>
                <View className="item">
                  <Text className="label">日期：</Text>
                  <Input
                    type="text"
                    placeholder="请选择日期"
                    className="input"
                  />
                </View>
                <View className="item">
                  <Text className="label">时间：</Text>
                  <Input
                    type="text"
                    placeholder="请选择时间"
                    className="input"
                  />
                </View>
                <View className="textarea"></View>
              </View>

              
              <View className="dialogFooter">
                <View className="confirm">确认新增</View>
              </View>
              <View className="dialogFooter">
                <View className="button">重新录音</View>
                <View className="button active">确认新增</View>
              </View>
              <View className="dialogFooter">
                <View className="button active">
                  <Image src={copytext} className="copytext"></Image>
                  复制文本
                </View>
                <View className="button">
                <Image src={share} className="share"></Image>
                  分享
                </View>
              </View>
              <View className="dialogFooter">
                <View className="button active">
                  <Image src={download} className="download"></Image>
                  下载录音
                </View>
                <View className="button">
                <Image src={share} className="share"></Image>
                  分享
                </View>
              </View>
          </View>
        </View>

        <View className="bgFixedBox" style={isShowDialogRecord? "display:block":"display:none"}>
          <View className="dialogBox">
            <Image src={close} className="dialogClose" onClick={()=> {this.closeDialogRecord()}}></Image>
            <View className="dialogTitle">
              <Text>新增语音提醒事项</Text>
              <View className="dialogContent">
                <View className="item">
                  <Text className="label">主题：</Text>
                  <Input
                    type="text"
                    placeholder="请输入主题名称"
                    className="input"
                  />
                </View>
                <View className="item">
                  <Text className="label">日期：</Text>
                  <Input
                    type="text"
                    placeholder="请选择日期"
                    className="input"
                  />
                </View>
                <View className="item">
                  <Text className="label">时间：</Text>
                  <Input
                    type="text"
                    placeholder="请选择时间"
                    className="input"
                  />
                </View>
                <View className="recordarea"></View>
              </View>

              <View className="dialogFooter">
                <View className="button">重新录音</View>
                <View className="button active">确认新增</View>
              </View>
             
            </View>
          </View>
        </View>

        <View className="bgFixedBox" style={isShowDialogTextDetail? "display:block":"display:none"}>
          <View className="dialogBox">
            <Image src={close} className="dialogClose" onClick={()=> {this.closeDialogTextDetail()}}></Image>
            <View className="dialogTitle" style={"text-align:left;width:90%;"}>
              <Text>跟领导汇报调研报告</Text>
              </View>
              <View className="dialogContent">
                <View className="textarea text">
                主要基于为期3天的调用得出结论结论，主要汇报事项如下：
                  1.调研背景
                  2.调研样本
                  3.调研方法
                  4.这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四这里是步骤四
                </View>
              </View>

              <View className="dialogFooter">
                <View className="button active">
                  <Image src={copytext} className="copytext"></Image>
                  复制文本
                </View>
                <View className="button">
                <Image src={share} className="share"></Image>
                  分享
                </View>
              </View>
             
          </View>
        </View>

        <View className="bgFixedBox" style={isShowDialogRecordDetail? "display:block":"display:none"}>
          <View className="dialogBox" style={"height:294px"}>
            <Image src={close} className="dialogClose" onClick={()=> {this.closeDialogRecordDetail()}}></Image>
            <View className="dialogTitle" style={"text-align:left;width:90%;"}>
              <Text>跟领导汇报调研报告</Text>
              </View>
              <View className="dialogContent">
                <View className="recordarea">
  
                </View>
              </View>

              <View className="dialogFooter">
                <View className="button active">
                  <Image src={copytext} className="copytext"></Image>
                  下载录音
                </View>
                <View className="button">
                <Image src={share} className="share"></Image>
                  分享
                </View>
              </View>
             
          </View>
        </View>
    
      </IndexMain>
    )
  }
}

export default Index
