import React from 'react'
import { View ,Text,Image,Input} from '@tarojs/components'
import close from '@/assets/images/close.svg'

type dataType = {

}
interface IProps {
  
}
export class AddRecord extends React.PureComponent<IProps>  {
  constructor(IProps) {
    super(IProps)
  }
  state= {
    isShowModal: true
  }
  closeModal = ()=>{
    this.setState({
      isShowModal: false
    })
  }

  render() {
    let { isShowModal } = this.state
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
              <View className="recordarea"></View>
            </View>

            <View className="dialogFooter">
              <View className="button">重新录音</View>
              <View className="button active">确认新增</View>
            </View>
          
          </View>
        </View>
      </View>
      
    )
  }
}