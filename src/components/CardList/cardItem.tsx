import React from 'react'
import { View,Text,Image } from '@tarojs/components'
import activeImg from '@/assets/images/test.jpeg'
import recordActive from '@/assets/images/recordActive.png'
import meetingActive from '@/assets/images/TextActive.png'
import deleteIcon from '@/assets/images/delete.svg'
interface IProps {
    data: any
    key: number
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
      const { data,key} = this.props
      let { showDelete } = this.state
      return (
        <View className="item" key={key} onLongPress={this.longTap.bind(this,data,key)}>
            <Text className="text">{data.name}</Text>
            <Image src={data.iconType =="record" ? recordActive : meetingActive} className={data.iconType =="record"? 'record' : 'meeting'} />
              <View className="deleteBox" style={showDelete? "display:block":"display:none"}>
                <Image src={deleteIcon} className="deleteIcon" />
              </View>
          </View>
      )
    }
}