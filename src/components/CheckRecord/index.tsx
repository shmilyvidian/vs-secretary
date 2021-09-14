import React from 'react'
import { View, Text, Image, Button } from '@tarojs/components'
import close from '@/assets/images/close.svg'
import copytext from '@/assets/images/copytext.svg'
import share from '@/assets/images/share.svg'
import play from '@/assets/images/play.svg'
import switchText from '@/assets/images/switchtext.png'
import switchTextActive from '@/assets/images/switchtextActive.png'


type checkDataType = {
  name: string
}
interface IProps {
  checkData?: any
  onCheckModalClose:()=>void
}

export class CheckRecord extends React.PureComponent<IProps>  {
  constructor(IProps) {
    super(IProps)
  }
  state = {
    isShowModal: true,
    isSwitchChange: true
  }
  closeModal = () => {
    this.setState({
      isShowModal: false
    })
    this.props.onCheckModalClose()
  }
  changeSwitch = () => {
    this.setState({
      isSwitchChange: !this.state.isSwitchChange
    })
  }

  render() {
    let { isShowModal,isSwitchChange } = this.state
    const { checkData } = this.props
    return (

      <View className="bgFixedBox" style={isShowModal ? "display:block" : "display:none"}>
        <View className="dialogBox" style={isSwitchChange?"height:170rpx":"height:900rpx"}>
          <Image src={close} className="dialogClose" onClick={() => { this.closeModal() }}></Image>
          <View className="dialogTitle check" style={"text-align:left;width:90%;"}>
            <Text className="dialogText">{checkData.name}</Text>
          </View>
          <View className="dialogDate">{checkData.date} {checkData.time}</View>

          <View className="dialogContent" style="margin-top:14rpx">
          <View className="video">
              <View className="videoTop">
                    <Text className="text" style="color:#000000">20210809-51129</Text>
                    <Image src={isSwitchChange?switchText:switchTextActive} className="switchText" onClick={ ()=>this.changeSwitch()} />
                    <Image src={play} className="play" />
                  </View>
                  <View className="videoBottom">
                    <View className="progress">
                      <Image src="" className="circle" />
                    </View>
                    <Text className="videoBottomLeft">00:00</Text>
                    <Text className="videoBottomRight">29:51</Text>
                  </View>
                </View>
          </View>

          <View className="videoSwitch" style={isSwitchChange?"display:none":"display:block"}>
            主要基于为期3天的调用得出结论结论，主要汇报事项如下：
            1.调研背景
   
          </View>

          <View className="dialogFooter">
            {/* <View className="button active">
              <Image src={copytext} className="copytext"></Image>
              下载录音
            </View> */}
            <Button className="button share" open-type="share">
              <Image src={share} className="share"></Image>
              分享
            </Button>
          </View>

        </View>
      </View>

    )
  }
}