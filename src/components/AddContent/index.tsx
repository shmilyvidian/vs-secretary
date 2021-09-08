import React from 'react'
import { View ,Text,Image} from '@tarojs/components'
import create from '@/assets/images/create.svg'

type cardDataType = {

}
interface IProps {
  
}
export class AddContent extends React.PureComponent<IProps>  {
  constructor(IProps) {
    super(IProps)
  }
  state= {
    isShowRemind: false
  }

  showRemindBox = ()=>{
    this.setState({
      isShowRemind: !this.state.isShowRemind
    })
  }
  
  render() {
    let { isShowRemind } = this.state
    return (
      <React.Fragment>
        <View className="remindBox" style={isShowRemind? "display:block":"display:none"}>
          <View className="remindText" onClick={()=> {}}>
            <Text>文本提醒事项</Text>
          </View>
          <View className="remindVoice" onClick={()=> {}}>
            <Text>语音提醒事项</Text>
          </View>
        </View>

        <View className="addFixedBox">
          <View className="addFixed" onClick={()=> {this.showRemindBox()}}>
            <Image src={create} className="icon"></Image>
            <Text className="text">新建提醒事项</Text>
          </View>
        </View>
      </React.Fragment>
    )
  }
}