import React from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import close from '@/assets/images/close.svg'
import copytext from '@/assets/images/copytext.svg'
import share from '@/assets/images/share.svg'
import play from '@/assets/images/play.svg'

type checkDataType = {
  name: string
}
interface IProps {
  checkData?: any
}

export class CheckRecord extends React.PureComponent<IProps>  {
  constructor(IProps) {
    super(IProps)
  }
  state = {
    isShowModal: true
  }
  closeModal = () => {
    this.setState({
      isShowModal: false
    })
  }

  render() {
    let { isShowModal } = this.state
    const { checkData } = this.props
    return (

      <View className="bgFixedBox" style={isShowModal ? "display:block" : "display:none"}>
        <View className="dialogBox" style={"height:190rpx;"}>
          <Image src={close} className="dialogClose" onClick={() => { this.closeModal() }}></Image>
          <View className="dialogTitle check" style={"text-align:left;width:90%;"}>
            <Text className="dialogText">{checkData.name}</Text>
          </View>
          <View className="dialogDate">{checkData.date} {checkData.time}</View>

          <View className="dialogContent" style="margin-top:14rpx">
          <View className="video">
              <View className="videoTop">
                    <Text className="text" style="color:#000000">20210809-51129</Text>
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