import React from 'react'
import { View ,Text,Image,Input} from '@tarojs/components'
import close from '@/assets/images/close.svg'
import start from '@/assets/images/start.png'
import stop from '@/assets/images/stop.png'
import mark from '@/assets/images/mark.png'
import pause from '@/assets/images/pause.png'
import play from '@/assets/images/play.png'


type dataType = {

}
interface IProps {
  
}
export class AddRecord extends React.PureComponent<IProps>  {
  constructor(IProps) {
    super(IProps)
  }
  state= {
    isShowModal: true,
    isAdd: true,
    isAdding: false,
    isReactAdd: false,
  }
  closeModal = ()=>{
    this.setState({
      isShowModal: false
    })
  }
  handleAdd = ()=>{
    this.setState({
      isAdd: false,
      isAdding: true
    })
  }
  handleAdding = ()=>{
    this.setState({
      isAdding: false,
      isReactAdd: true
    })
  }

  handleAddReact () {
    this.setState({
      isAdd: true,
      isReactAdd:false,
    })
  }


  render() {
    let { isShowModal,isAdd,isAdding,isReactAdd } = this.state
    return (

      <View className="bgFixedBox" style={isShowModal? "display:block":"display:none"}>
        <View className="dialogBox">
          <Image src={close} className="dialogClose" onClick={()=> {this.closeModal()}}></Image>
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
              <View className="recordarea" style={isAdd?"display:block":"display:none"}>
                <Image src={start} className="start" onClick={()=>this.handleAdd()} />
              </View>
              <View className="recordarea" style={isAdding?"display:block":"display:none"}>
                <Text className="time">00:05.11</Text>
                <Image src={stop} className="stop" onClick={()=>this.handleAdding()} />
                <View className="stopLeft">
                  <Image src={mark} className="mark" />
                  <Text>标记</Text>
                </View>
                <View className="stopRight">
                  <Image src={pause} className="pause" />
                  <Text>暂停</Text>
                </View>
              </View>
              <View className="recordarea" style={isReactAdd?"display:block":"display:none"}>
                <View className="video">
                    <View className="videoTop">
                      <Text className="text">20210809-51129</Text>
                      <Image src={play} className="play" />
                    </View>
                    <View className="videoBottom">
                      <View className="progress">
                        <Image src={play} className="play" />
                      </View>
                      <Text className="videoBottomLeft">00:00</Text>
                      <Text className="videoBottomRight">29:51</Text>
                    </View>
                  </View>
              </View>
            </View>

          </View>
          <View className="dialogFooter" style={isReactAdd?"display:block":"display:none"}>
              <View className="button" onClick={()=>this.handleAddReact()} >重新录音</View>
              <View className="button active">确认新增</View>
            </View>
          
        </View>
      </View>
      
    )
  }
}