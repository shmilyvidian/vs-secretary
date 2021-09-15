import React, { useState, useEffect,Component } from "react";
import { View,Input,Text, Image } from '@tarojs/components'
import { observer, MobXProviderContext } from "mobx-react";
import Taro,{Events} from '@tarojs/taro'

//样式
import store from "@/store/index";
import { IndexMain } from './indexSty'
//组件
import { TabBar } from '@/components/TarBar/index';
import { Card } from '@/components/Card/index';
import { AddContent } from '@/components/AddContent/index';
import { AddText } from '@/components/AddText/index';
import { AddRecord } from '@/components/AddRecord/index';
//数据源
import { remindCardData,meetingCardData } from './mockData'

export enum CardStatus {
  remindStatus = 0,
  meetingStatus = 1,
}
export enum ModalStatus {
  addTextStatus = 1,
  addRecordStatus = 2,
  checkTextStatus = 3,
  checkRecordStatus = 4,
}
function useStores() {
  return React.useContext(MobXProviderContext)
}
function useStoreData() {
  const { store } = useStores()
  return {
    commonStore: store.commonStore,
    homeStore: store.homeStore,
  }
}

const Index = observer(() => {
  const store = useStoreData()
  const [currentTabIndex, setTabIndex] = useState<number>(0)
  const [currentAddIndex, setAddIndex] = useState<number>(0)
  const [isCloseModal, setIsCloseModal] = useState<boolean>(false) // 是否手动关闭modal
  const [ currentRemindCardData, setRemindCardData] = useState<Array<any>>(remindCardData)
  const [ currentMeetingCardData, setMeetingCardData] = useState<Array<any>>(meetingCardData)
  const onClickTab = (currentTabIndex: number) => {
    setTabIndex(currentTabIndex)
  };
  const onClickAdd = (currentAddIndex: number) => {
    setAddIndex(currentAddIndex)
    store.homeStore.setModalIndex(currentAddIndex)

  };
  const activeEvent = (item,cur)=>{
    const newRecordData =currentRemindCardData.map((item,index)=>{
      item.isActive = false;
      if(index == cur) item.isActive = true
      return item
    })
    const newMeetingData =currentMeetingCardData.map((item,index)=>{
      item.isActive = false;
      if(index == cur) item.isActive = true
      return item
    })
    setRemindCardData(newRecordData)
    setMeetingCardData(newMeetingData)
  }

  const delNoticeFN =(data,parentKey) => {
    const newData = currentRemindCardData.map((item,index,arr)=>{
      if(item.date === parentKey ){
        const childItemIndex = item.dataList.findIndex(f=>f.id === data.id)
        if(childItemIndex>-1){
          const newChildList = [...item.dataList]
          newChildList.splice(childItemIndex,1)
          item.dataList = newChildList
        }
      }
      return item
    })
  
    let newCardData = newData.filter(item=>{
      if(item.dataList.length != 0) return item
    })
    const hasActive = newCardData.some(item=>{
      if(item.isActive == true) return true
    })
    if(!hasActive){
      newCardData[0].isActive = true
    }
    setRemindCardData(newCardData)
  }
  store.homeStore.setDelNoticeFN(delNoticeFN)

  // tab内容区渲染
  const renderTabContent = () => {
    if (currentTabIndex === CardStatus.remindStatus) {
      return <Card cardData={currentRemindCardData} onActiveEvent = {activeEvent.bind(this)} />;
    } else if (currentTabIndex === CardStatus.meetingStatus) {
      return <Card cardData={currentMeetingCardData} onActiveEvent = {activeEvent.bind(this)}/>;
    }
  };
  // add按钮区渲染
  const renderAddContent = () =>{
    return <AddContent
      currentAddIndex={currentAddIndex}
      isCloseModal={isCloseModal}
      callback={onClickAdd}
    />
  }

   // 新增文本提醒事项
   const onAddTextDataHandler = (data) => {
    // 转换添加的数据日期
    const getDate = date => {
      var now = new Date(date),
        m = ("0" + (now.getMonth() + 1)).slice(-2),
        d = ("0" + now.getDate()).slice(-2);
      return m + "月" + d + "日"
    }
    const dateStr = getDate(data.dateSel)
    const newRemindCardData = [...currentRemindCardData]
    const noticeItem = {
      id:"6",
      name:data.noticeName || '',
      iconType:'text',
      showDelete: false,
      content:data.noticeTextarea,
      time:data.timeSel,
      date:getDate(data.dateSel)
    }
    let inCurrentGrop = false
    newRemindCardData.forEach(item => {
      item.isActive = false
      if (item.date === dateStr) {
        inCurrentGrop = true
        const newChildList = [...item.dataList]
        newChildList.unshift(noticeItem)
        item.dataList = newChildList
        item.isActive = true
      }
    })
    // 如果在当前分组日期内直接插入数组，否则新增一个日期分组
    if (!inCurrentGrop) {
      newRemindCardData.unshift({
        id: Date.parse(new Date()).toString(),
        date: dateStr,
        type: "remind",
        isActive: true,
        dataList: [noticeItem]
      })
    }
    setRemindCardData(newRemindCardData)
    setIsCloseModal(true)
  }

  // 新建语音提示事项
  const onAddRecordDataHandler = (data) => {

    // 转换添加的数据日期
    const getDate = date => {
      var now = new Date(date),
        m = ("0" + (now.getMonth() + 1)).slice(-2),
        d = ("0" + now.getDate()).slice(-2);
      return m + "月" + d + "日"
    }
    const dateStr = getDate(data.dateSel)
    console.log('dd',data)
    //定义新建语音数据格式
    const newRemindCardData = [...currentRemindCardData]
    const noticeItem = {
      date:data.dateSel || '',
      time:data.timeSel || '',
      name:data.recordTheme || '',
      iconType:'record',
      status:'ing'
    }
    let inCurrentGrop = false
    newRemindCardData.forEach(item => {
      item.isActive = false
      if (item.date === dateStr) {
        inCurrentGrop = true
        const newChildList = [...item.dataList]
        newChildList.unshift(noticeItem)
        item.dataList = newChildList
        item.isActive = true
      }
    })
    // 如果在当前分组日期内直接插入 数组，否则新增一个日期分组
    if (!inCurrentGrop) {
      newRemindCardData.unshift({
        id: Date.parse(new Date()).toString(),
        date: dateStr,
        type: "remind",
        isActive: true,
        dataList: [noticeItem]
      })
    }
    setRemindCardData(newRemindCardData)
    setIsCloseModal(true)
  }

  // Modal弹窗区渲染
  const renderModalContent = () =>{
    if (currentAddIndex === ModalStatus.addTextStatus) {
      return <AddText onAddTextDataHandler={onAddTextDataHandler.bind(this)} onAddModalClose={onAddModalClose.bind(this)} />;
    } else if (currentAddIndex === ModalStatus.addRecordStatus) {
      return <AddRecord onAddRecordDataHandler={onAddRecordDataHandler.bind(this)} onAddModalClose={onAddModalClose.bind(this)} />;
    } 
  }
  //关闭Modal
  const onAddModalClose =()=>{
    onClickAdd(0)
  }
  
  return (
    <IndexMain> 
      <TabBar currentTabIndex={currentTabIndex} callback={onClickTab}/>
      {renderTabContent()}
      {currentTabIndex === CardStatus.remindStatus? renderAddContent():null}
      {renderModalContent()}
    </IndexMain>
  )
})

export default Index
