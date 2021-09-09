import React, { useState, useEffect,Component } from "react";
import { View,Input,Text, Image } from '@tarojs/components'
import { observer, inject, MobXProviderContext } from "mobx-react";
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
// 
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
  const onClickTab = (currentTabIndex: number) => {
    setTabIndex(currentTabIndex)
  };
  const onClickAdd = (currentAddIndex: number) => {
    setAddIndex(currentAddIndex)
  };
  // tab内容区渲染
  const renderTabContent = () => {
    if (currentTabIndex === CardStatus.remindStatus) {
      return <Card cardData={remindCardData}  />;
    } else if (currentTabIndex === CardStatus.meetingStatus) {
      return <Card cardData={meetingCardData} />;
    }
  };
  // add按钮区渲染
  const renderAddContent = () =>{
    return <AddContent
      currentAddIndex={currentAddIndex}
      callback={onClickAdd}
    />
  }
  // modal弹窗区渲染
  const renderModalContent = () =>{
    if (currentAddIndex === 1) {
      return <AddText/>;
    } else if (currentAddIndex === 2) {
      return <AddRecord/>;
    } else if (currentAddIndex === 3) {
      return <CheckText/>;
    } else if (currentAddIndex === 4) {
      return <CheckRecord/>;
    } 
  }
  return (
    <IndexMain>
      <TabBar currentTabIndex={currentTabIndex} callback={onClickTab}/>
      {renderTabContent()}
      {renderAddContent()}
      {renderModalContent()}
    </IndexMain>
  )
})

export default Index
