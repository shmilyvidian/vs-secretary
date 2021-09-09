import React from 'react'
import { View,Text,Image,Button} from '@tarojs/components'
import recordActive from '@/assets/images/recordActive.png'
import meetingActive from '@/assets/images/TextActive.png'
import deleteIcon from '@/assets/images/delete.svg'
import { EmptyView } from '@/components/EmptyView'
// import { RightIn } from './indexSty'
import { CardItem } from './cardItem';



type cardListDataType = {
  name: string
  iconType: string
  showDelete: boolean
}
interface IProps {
  cardListData?: cardListDataType[]
}
export class CardList extends React.PureComponent<IProps> {
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
    console.log("长按");
    console.log(item,index,e)
  }
  /// 按钮触摸开始触发的事件
  touchStart= (e)=>{
    console.log(e)
    this.state.touchStartTime = e.timeStamp

  }
  /// 单击、双击
  // multipleTap = (e) {
  //   // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  //   if (this.state.touchEndTime - this.state.touchStartTime < 350) {
  //     // 当前点击的时间
  //     var currentTime = e.timeStamp
  //     var lastTapTime = this.state.lastTapTime
  //     // 更新最后一次点击时间
  //     this.state.lastTapTime = currentTime
      
  //     // 如果两次点击时间在300毫秒内，则认为是双击事件
  //     if (currentTime - lastTapTime < 300) {
  //       console.log("double tap")
  //       // 成功触发双击事件时，取消单击事件的执行
  //       clearTimeout(this.state.lastTapTimeoutFunc);
  //       wx.showModal({
  //         title: '提示',
  //         content: '双击事件被触发',
  //         showCancel: false
  //       })
  //     } else {
  //       // 单击事件延时300毫秒执行，这和最初的浏览器的点击300ms延时有点像。
  //       this.state.lastTapTimeoutFunc = setTimeout(function () {
  //         console.log("tap")
  //         wx.showModal({
  //           title: '提示',
  //           content: '单击事件被触发',
  //           showCancel: false
  //         })
  //       }, 300);
  //     }
  //   }
  // }

  showRemindBox = ()=>{
    this.setState({
      isShowRemind: !this.state.isShowRemind
    })
  }
  render(){
    const { cardListData = [] } = this.props;
    let { showDelete } = this.state;
    console.log(cardListData,'vs',this.props)
    return(
      <View className="list">
      {
        cardListData.length ?
        cardListData.map((item: cardListDataType, index: any) => {
            return (
              <CardItem data={item} key={index} />
              // <View className="item" key={index} onTouchStart={this.touchStart.bind(this,item,index)}
              // onLongPress={this.longTap.bind(this,item,index)}>
 
              //   <Text className="text">{item.name}</Text>
              //   <Image src={item.iconType =="record" ? recordActive : meetingActive} className={item.iconType =="record"? 'record' : 'meeting'} />
              //     <View className="deleteBox" style={item.showDelete? "display:block":"display:none"}>
              //       <Image src={deleteIcon} className="deleteIcon" />
              //     </View>
              // </View>
            )
          }) : <EmptyView text='啊哦，还没有数据快去新建一下吧' />
      }
    </View>

    )
  }
}
