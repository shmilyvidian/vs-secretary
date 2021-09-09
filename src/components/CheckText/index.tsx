import React from 'react'
import { View ,Text,Image,Input} from '@tarojs/components'
import close from '@/assets/images/close.svg'
import copytext from '@/assets/images/copytext.svg'
import share from '@/assets/images/share.svg'
type checkDataType = {
  name: string
}
interface IProps {
  checkData?: checkDataType[]
}

export class CheckText extends React.PureComponent<IProps>  {
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
      
    )
  }
}