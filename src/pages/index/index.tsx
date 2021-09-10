import React, { useState, useEffect,Component } from "react";
import { View,Input,Text, Image } from '@tarojs/components'
import { observer, MobXProviderContext } from "mobx-react";
import Taro,{Events} from '@tarojs/taro'

//样式
import store from "@/store/index";
import { IndexMain } from './indexSty'
//图片
import record from '@/assets/images/record.png'
import meeting from '@/assets/images/Text.png'
import recordActive from '@/assets/images/recordActive.png'
import meetingActive from '@/assets/images/TextActive.png'
import deleteIcon from '@/assets/images/delete.svg'
import close from '@/assets/images/close.svg'
import copytext from '@/assets/images/copytext.svg'
import share from '@/assets/images/share.svg'
import download from '@/assets/images/download.svg'
//组件
import { TabBar } from '@/components/TarBar/index';
import { Card } from '@/components/Card/index';
import { AddContent } from '@/components/AddContent/index';
import { AddText } from '@/components/AddText/index';
import { AddRecord } from '@/components/AddRecord/index';
import { CheckRecord } from '@/components/CheckRecord/index';
import { CheckText } from '@/components/CheckText/index';
import { remindCardData,meetingCardData } from './mockData'

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
    const newData = currentRemindCardData.map(item=>{
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
    setRemindCardData(newData)
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
//   const searchId = (currentNode): void =>{
//     let nowList: string[] = idList;
//     nowList.push(currentNode.uid);
//     setIdList(nowList)
//     debugger
//     if (currentNode.childNodes.length) {
//         for (let i = 0; i < currentNode.childNodes.length; i++) {
//             searchId(currentNode.childNodes[i])
//         }
//     }
// }
  // const cancel = (e) =>{
  //   // searchId(e)
  //   // console.log(e,'xxx');
  //     if (!idList.includes(e.target.id)) {
  //         // console.log('ok'); 
  //     }
  // }

   // 新增文本提醒事项
   const onAddTextDataHandler = (data) => {

    const getDate = date => {
      var now = new Date(date),
        m = ("0" + (now.getMonth() + 1)).slice(-2),
        d = ("0" + now.getDate()).slice(-2);
      return m + "月" + d + "日"
    }
    // 转换添加的数据日期
    const dateStr = getDate(data.dateSel)

    const newRemindCardData = [...currentRemindCardData]
    const noticeItem = {
      name: data.noticeName || '',
      iconType: 'text'
    }
    let inCurrentGrop = false
    newRemindCardData.forEach(item => {
      item.isActive = false
      if (item.date === dateStr) {
        inCurrentGrop = true
        const newChildList = [...item.dataList]
        newChildList.unshift(noticeItem)
        item.dataList = newChildList
      }
    })
    // 如果在当前分组日期内直接插入数组，否则新增一个日期分组
    if (!inCurrentGrop) {
      newRemindCardData.unshift({
        id: Date.parse(new Date()).toString(),
        date: dateStr,
        type: "record",
        isActive: true,
        dataList: [noticeItem]
      })
    }
    setRemindCardData(newRemindCardData)
    setIsCloseModal(true)
  }

  // 新建语音提示事项
  const onAddRecordDataHandler = (data) =>{
    //定义转换日期函数
    const getDate = date =>{
      var now = new Date(date),
      m = ("0" + (now.getMonth() + 1)).slice(-2),
      d = ("0" + now.getDate()).slice(-2);
      return m + "月" + d + "日"

    }
    // 转换添加的数据日期
    const dateStr = getDate(data.dateSel)
    const newMeetingCardData = [...currentMeetingCardData]
    //定义添加的item数据
    const noticeItem = {
      name: data.recordTheme || '',
      time:'16:40',
      iconType:'meeting',
      status:'done'
    }
    //判断添加数据是否在当前日期分组，如果在直接插入分组，否则新增一个日期分组
    let inCurrentGrop = false
    newMeetingCardData.forEach(item => {
      item.isActive = false
      if (item.date === dateStr) {
        inCurrentGrop = true
        const newChildList = [...item.dataList]
        newChildList.unshift(noticeItem)
        item.dataList = newChildList
      }
    })
    // 如果在当前分组日期内直接插入数组，否则新增一个日期分组
    if (!inCurrentGrop) {
      newMeetingCardData.unshift({
        id: Date.parse(new Date()).toString(),
        date: dateStr,
        type: "record",
        isActive: true,
        dataList: [noticeItem]
      })
    }
    setRemindCardData(newMeetingCardData)
    setIsCloseModal(true)
  }

  // modal弹窗区渲染
  const renderModalContent = () =>{
    if (currentAddIndex === ModalStatus.addTextStatus) {
      return <AddText onAddTextDataHandler={onAddTextDataHandler.bind(this)} onAddModalClose={onAddModalClose.bind(this)} />;
    } else if (currentAddIndex === ModalStatus.addRecordStatus) {
      return <AddRecord/>;
    } else if (currentAddIndex === ModalStatus.checkTextStatus) {
      return <CheckText/>;
    } else if (currentAddIndex === ModalStatus.checkRecordStatus) {
      return <CheckRecord/>;
    } 
  }
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
