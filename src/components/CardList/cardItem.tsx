import React from 'react'
import { View,Text,Image } from '@tarojs/components'
import record from '@/assets/images/record.png'
import recordActive from '@/assets/images/recordActive.png'
import text from '@/assets/images/text.png'
import textActive from '@/assets/images/TextActive.png'
import meeting from '@/assets/images/meeting.png'
import meetingActive from '@/assets/images/meetingActive.png'
import deleteIcon from '@/assets/images/delete.svg'
import { observer, MobXProviderContext } from "mobx-react";
import store from "@/store/index";
import { CheckRecord } from '@/components/CheckRecord/index';
import { CheckText } from '@/components/CheckText/index';

interface IProps {
    data: any
    key: number
    isActive: boolean
    type: string
    parentKey:string
}

export class CardItem extends React.PureComponent<IProps> {
  constructor(IProps) {
    super(IProps)
  }

  state={
    // 触摸开始时间
    touchStartTime: 0,
    // 触摸结束时间
    touchEndTime: 0,  
    // 最后一次单击事件点击发生时间
    lastTapTime: 0, 
    // 单击事件点击后要触发的函数
    lastTapTimeoutFunc: null, 

    showDelete: false,
    isShowRemind: false,
    isShowCheck: false,
  }

  /// 按钮触摸结束触发的事件
  touchEnd = (e)=>{
    this.state.touchEndTime = e.timeStamp
  }
  /// 长按
  longTap = (item, index, e)=>{
    e.stopPropagation();
    this.setState({
      showDelete: !this.state.showDelete
    })
  }
  deleteItems = (item,parentKey,e) => {
    console.log('e',e)
    console.log('par',parentKey);
    e.stopPropagation();
    const { homeStore } = store
    this.setState({
      showDelete: !this.state.showDelete
    })
    homeStore.userInfo.delNoticeFN && homeStore.userInfo.delNoticeFN(item,parentKey)
  }
  handlerCheck = (e) => {
    this.setState({
      isShowCheck: !this.state.isShowCheck
    })
  }
  
  renderCheckModal = () => {
    const { data } = this.props
    if ( data.iconType== "text") {
      return <CheckText checkData={data} />;
    } else if(data.iconType== "record"){
      return <CheckRecord checkData={data}/>;
    } 
  }


  // /// 按钮触摸开始触发的事件
  // touchStart= (e)=>{
  //   this.state.showDelete = false
  // }
  // onTouchStart={this.touchStart.bind(this,data,key)
  
    render() {
      const { data,key,isActive,type,parentKey} = this.props
      let { showDelete,isShowCheck } = this.state
      return (
        <View className="item" key={key} onLongPress={this.longTap.bind(this,data,key)} onClick={this.handlerCheck.bind(this)}>
          {isShowCheck?this.renderCheckModal():null}
            {type=="meeting"?<Image src={isActive? meeting:meetingActive} className="meeting"></Image>:null}
            {type=="remind"?null:<Text className="time">{data.time}</Text>}
            <View className="text">
              {type=="remind"?<Text className="textBefore"></Text>:null}
              {data.name}
            </View>
            <Image src={type=="meeting"?"":data.iconType =="record" ? isActive ? recordActive: record : isActive?textActive: text} className={data.iconType =="record"? 'record' : 'textIcon'} />
              <View className="deleteBox" style={type=="meeting"?null:showDelete? "display:block":"display:none"} onClick={this.deleteItems.bind(this, data,parentKey)}>
                <Image src={deleteIcon} className="deleteIcon" />
              </View>
          </View>
      )
    }
}