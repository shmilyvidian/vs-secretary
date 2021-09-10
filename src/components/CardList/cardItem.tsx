import React from 'react'
import { View,Text,Image } from '@tarojs/components'
import record from '@/assets/images/record.png'
import recordActive from '@/assets/images/recordActive.png'
import text from '@/assets/images/text.png'
import textActive from '@/assets/images/TextActive.png'
import meeting from '@/assets/images/meeting.png'
import meetingActive from '@/assets/images/meetingActive.png'
import deleteIcon from '@/assets/images/delete.svg'
interface IProps {
    data: any
    key: number
    isActive: boolean
    type: string
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
  }

  /// 按钮触摸结束触发的事件
  touchEnd = (e)=>{
    this.state.touchEndTime = e.timeStamp
  }
  /// 长按
  longTap = (item, index, e)=>{
    this.setState({
      showDelete: !this.state.showDelete
    })
  }
  // /// 按钮触摸开始触发的事件
  // touchStart= (e)=>{
  //   this.state.showDelete = false
  // }
  // onTouchStart={this.touchStart.bind(this,data,key)
  
    render() {
      const { data,key,isActive,type} = this.props
      let { showDelete } = this.state
      return (
        <View className="item" key={key} onLongPress={this.longTap.bind(this,data,key)}>
            {data.time?<Image src={isActive? meeting:meetingActive} className="meeting"></Image>:null}
            <Text className="time">{data.time}</Text>
            <View className="text">
              {type=="record"?<Text className="textBefore"></Text>:null}
              {data.name}
            </View>
            <Image src={type=="meeting"?"":data.iconType =="record" ? isActive ? recordActive: record : isActive?textActive: text} className={data.iconType =="record"? 'record' : 'textIcon'} />
              <View className="deleteBox" style={showDelete? "display:block":"display:none"}>
                <Image src={deleteIcon} className="deleteIcon" />
              </View>
          </View>
      )
    }
}