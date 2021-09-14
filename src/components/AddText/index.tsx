import React from 'react'
import { View, Text, Image, Input, Button, Textarea,Picker } from '@tarojs/components'
import close from '@/assets/images/close.svg'
import { AtList, AtListItem, AtInput,AtTextarea } from "taro-ui"

type dataType = {

}
interface IProps {
  onAddTextDataHandler:any
  onAddModalClose:()=>void
}
export class AddText extends React.PureComponent<IProps>  {
  constructor(IProps) {
    super(IProps)
  }
  state = {
    isShowModal: true,
    noticeName: '',
    dateSel: (new Date().getMonth() + 1) + '-' + new Date().getDate(),
    timeSel: new Date().getHours() + ':' + new Date().getMinutes(),
    noticeTextarea: '',
  }

  closeModal = () => {
    this.setState({
      isShowModal: false
    })
    this.props.onAddModalClose()
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }
  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onTextareaChange = value => {
    this.setState({
      noticeTextarea: value
    })
    return value
  }

  
  saveDataHandler = data => {
    this.closeModal()
    this.props.onAddTextDataHandler(data)
  }
  noticeNameChangeHandler = value =>{
    this.setState({
      noticeName: value
    })
  }
  render() {
    let { isShowModal } = this.state
    return (
      <View className="bgFixedBox" style={isShowModal ? "display:block" : "display:none"}>
        <View className="dialogBox">
          <Image src={close} className="dialogClose" onClick={() => { this.closeModal() }}></Image>
          <View className="dialogTitle">
            <Text>新增文本提醒事项</Text>
          </View>
          <View className="dialogContent">
            <View className="item">
              <Text className="label">主题：</Text>
              <AtInput
                className="input"
                name='value1'
                type='text'
                placeholder='请输入主题名称'
                value={this.state.noticeName}
                onChange={this.noticeNameChangeHandler.bind(this)}
              />
            </View>

            <View className="item">
              <Text className="label">日期：</Text>
              <Picker mode='date' onChange={this.onDateChange}>
                <AtList>
                  <AtListItem extraText={this.state.dateSel} />
                </AtList>
              </Picker>
            </View>
            <View className="item">
              <Text className="label">时间：</Text>
              <Picker mode='time' onChange={this.onTimeChange}>
                <AtList>
                  <AtListItem extraText={this.state.timeSel} />
                </AtList>
              </Picker>
            </View>

            <View>
            <AtTextarea
              className="textarea"
              value={this.state.noticeTextarea}
              onChange={this.onTextareaChange.bind(this)}
              maxLength={200}
              placeholder='备注：请输入备注（非必填）'
            />
            </View>
          </View>


          <View className="dialogFooter">
            <View className="confirm" onClick={() => { this.saveDataHandler(this.state) }}>确认新增</View>
          </View>

        </View>
      </View>
    )
  }
}