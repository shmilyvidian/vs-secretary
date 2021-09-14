import React from 'react'
import { View ,Text,Image,Input} from '@tarojs/components'
import close from '@/assets/images/close.svg'
import copytext from '@/assets/images/copytext.svg'
import start from '@/assets/images/start.png'
import stop from '@/assets/images/stop.png'
import mark from '@/assets/images/mark.png'
import pause from '@/assets/images/pause.png'
import play from '@/assets/images/play.png'
import share from '@/assets/images/share.png'

type checkDataType = {
  name: string
}
interface IProps {
  checkData?: any
  onCheckModalClose:()=>void
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
    this.props.onCheckModalClose()
  }

  render() {
    let { isShowModal } = this.state
    const { checkData } = this.props
    return (

      <View className="bgFixedBox" style={isShowModal? "display:block":"display:none"}>
      <View className="dialogBox">
        <Image src={close} className="dialogClose" onClick={()=> {this.closeModal()}}></Image>
        <View className="dialogTitle check" style={"text-align:left;width:90%;"}>
          <Text className="dialogText">{checkData.name}</Text>
        </View>
        <View className="dialogDate">{checkData.date} {checkData.time}</View>
          <View className="dialogContent">
            <View className="textarea content">
              {checkData.content}
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