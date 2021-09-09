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

export class CheckRecord extends React.PureComponent<IProps>  {
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
      <View className="dialogBox" style={"height:294px"}>
        <Image src={close} className="dialogClose" onClick={()=> {this.closeModal()}}></Image>
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
      
    )
  }
}