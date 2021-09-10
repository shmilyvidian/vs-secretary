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
  const [ currentRemindCardData, setRemindCardData] = useState<Array<any>>(remindCardData)
  const [ currentMeetingCardData, setMeetingCardData] = useState<Array<any>>([])
  const [ idList, setIdList] = useState<Array<any>>([])
  const onClickTab = (currentTabIndex: number) => {
    console.log(333)
    setTabIndex(currentTabIndex)
  };
  const onClickAdd = (currentAddIndex: number) => {
    setAddIndex(currentAddIndex)
    store.homeStore.setModalIndex(currentAddIndex)

  };
  const activeEvent = (item,cur)=>{
    const newData =currentRemindCardData.map((item,index)=>{
      item.isActive = false;
      if(index == cur) item.isActive = true
      return item
    })
    setRemindCardData(newData)
  }
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
      callback={onClickAdd}
    />
  }
  const searchId = (currentNode): void =>{
    let nowList: string[] = idList;
    nowList.push(currentNode.uid);
    setIdList(nowList)
    if (currentNode.childNodes.length) {
        for (let i = 0; i < currentNode.childNodes.length; i++) {
            searchId(currentNode.childNodes[i])
        }
    }
}
  const cancel = (e) =>{
    console.log(2);
  console.log(e);
      if (!idList.includes(e.target.id)) {
          console.log('ok'); // 里面执行符合条件的方法，最常见的就是关闭小窗口
      }
  }

  // modal弹窗区渲染
  const renderModalContent = () =>{
    if (currentAddIndex === ModalStatus.addTextStatus) {
      return <AddText/>;
    } else if (currentAddIndex === ModalStatus.addRecordStatus) {
      return <AddRecord/>;
    } else if (currentAddIndex === ModalStatus.checkTextStatus) {
      return <CheckText/>;
    } else if (currentAddIndex === ModalStatus.checkRecordStatus) {
      return <CheckRecord/>;
    } 
  }
  return (
    <View onClick={cancel}>
    <IndexMain>
      <TabBar currentTabIndex={currentTabIndex} callback={onClickTab}/>
      {renderTabContent()}
      {renderAddContent()}
      {renderModalContent()}
    </IndexMain>
    </View>
  )
})

export default Index
