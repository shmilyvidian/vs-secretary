import React, { Component } from 'react'
import { View, Text, Button,Image,Picker,ScrollView} from '@tarojs/components'
import { AtAvatar, AtCard, AtTag, AtModal, AtModalHeader, AtModalContent, AtModalAction, AtInput,AtList, AtListItem,} from "taro-ui"
import detailStore from '@/store/resumeDetails'
import { IndexMain } from './indexSty'
import download from '@/assets/download.png'
import add from '@/assets/add.png'
import { getBackgroundFetchToken } from '@tarojs/taro'
import './indexSty.scss'

type stateType = {
    showAddTags: boolean,
    showModal:boolean,
    value:string,
    sex:string,
    sexSelector:string[] | number[] | Record<string, any>[],
    station:string,
    stationType:string[] | number[] | Record<string, any>[]
}


interface ResumeUpload {
    state: stateType,
}
class ResumeUpload extends Component {


    constructor(props) {
        super(props)
        this.state = {
          sex:"男",
          sexSelector:["男","女"],
          station:"外包",
          stationType:["外包","金服","行编"],
          showModal:false,
        } as stateType
        this.onScrollToLower = this.onScrollToLower.bind(this);
    }

    onScrollToLower() {
      this.setState({
        showModal: true
      })
    }

    addTags(show) {
        this.setState({
            showAddTags: show
        })
    }

    handleChange(){

    }
    onChangeSex = e => {
      this.setState({
        sex: this.state.sexSelector[e.detail.value]
      })
    }
    onChangeStation = e => {
      this.setState({
        station: this.state.stationType[e.detail.value]
      })
    }
    handleClick(){

    }
  
    render() {
        return (
            <IndexMain>
              <ScrollView className='month-calendar-container'
                scrollX
                scrollWithAnimation
                style='height: 100%;'
                onScrollToLower={this.onScrollToLower}
                >
                <View className="addTitle">添加简历</View>
                <View className="addNode">填写求职者基本信息，简历详细信息请上传简历附件</View>
                <View style="width:100%">
                  <AtList>
                    <AtListItem title='姓名' extraText='张三' onClick={this.handleClick} />
                    <AtListItem title='职位' extraText='产品经理' />
                    <AtListItem title='经验' extraText='6年' />
                    <AtListItem title='学历' extraText='本科' />
                    <Picker mode='selector' range={this.state.sexSelector} onChange={this.onChangeSex}>
                      <AtList>

                        <AtListItem title='性别' extraText={this.state.sex} arrow='right' />

                      </AtList>
                    </Picker>
                    <Picker mode='selector' range={this.state.stationType} onChange={this.onChangeStation}>
                      <AtList>

                        <AtListItem title='岗位类型' extraText={this.state.station} arrow='right' />

                      </AtList>
                    </Picker>
                  </AtList>
                </View>

                <View className="card">
                  <View className="title">
                    <Text>标签</Text>
                    <Image src={add} className="add" onClick={this.addTags.bind(this, true)} />
                  </View>
                  <View className="tags"> 
                    <Text className="tag">有数据思维</Text>
                    <Text className="tag">经验丰富</Text>
                    <Text className="tag">方法论完善</Text>
                    <Text className="tag">经验丰富</Text>

                    <Text className="tag">有数据思维</Text>
                    <Text className="tag">经验丰富</Text>
                    <Text className="tag">方法论完善</Text>
                    <Text className="tag">经验丰富</Text>

                  </View>
                </View>

                <View className="card">
                  <View className="title">
                    <Text>简历附件</Text>
                    <Image src={add} className="add" />
                  </View>
                  <View className="resume"> 
                    <View className="tag">
                      <Text>张三的简历.docx</Text>
                      <Image src={download} className={download}/>
                    </View>
                  </View>
                </View>


                <View className="card">
                  <View className="title">
                    <Text>其他附件</Text>
                    <Image src={add} className="add" />
                  </View>
                  <View className="resume"> 
                    <View className="tag">
                      <Text>张三的作品集1.pdf</Text>
                      <Image src={download} className={download}/>
                    </View>
                    <View className="tag">
                      <Text>张三的作品集2.pdf</Text>
                      <Image src={download} className={download}/>
                    </View>
                  </View>
                </View>

                {/* <AtModal isOpened={this.state.showAddTags}>
                    <AtModalHeader>创建标签</AtModalHeader>
                    <AtModalContent>
                        <AtInput
                            name='value'
                            type='text'
                            placeholder='请输入标签，最多可添加8个'
                            value={this.state.value}
                            onChange={this.handleChange.bind(this)}
                        />
                    </AtModalContent>
                    <AtModalAction>
                        <Button onClick={this.addTags.bind(this, false)}>取消</Button> <Button onClick={this.addTags.bind(this, false)}>确定</Button> </AtModalAction>
                </AtModal> */}
                  <AtModal isOpened>
                    <AtModalContent>
                        <View>复制链接到浏览器后，上传简历</View>
                    </AtModalContent>
                    <AtModalAction>
                      <Button>复制</Button>
                    </AtModalAction>
                  </AtModal>      

                </ScrollView>

            </IndexMain>
        )
    }
}

export default ResumeUpload