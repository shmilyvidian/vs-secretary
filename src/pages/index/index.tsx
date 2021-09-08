import React, { useState, useEffect,Component } from "react";
import { View,Input,Text, Image } from '@tarojs/components'
import { observer, inject, MobXProviderContext } from "mobx-react";
//样式
import store from "@/store/index";
import { IndexMain } from './indexSty'
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
  const onClickTab = (currentTabIndex: number) => {
    setTabIndex(currentTabIndex)
  };
  // tab内容区渲染
  const renderTabContent = () => {
    const remindCardData = [
      {
        date: "08月09日",
        total: "5个提醒事项",
        dataList: [
          {
            name:'跟领导汇报调研报告',
            iconType:'text',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'record',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'text',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'record',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'text',
          }
        ],
      },
      {
        date: "08月10日",
        total: "3个提醒事项",
        dataList: [
          {
            name:'跟领导汇报调研报告2',
            iconType:'text',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'record',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'text',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'record',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'text',
          }
        ],
      },
      {
        date: "08月11日",
        total: "3个提醒事项",
        dataList: [
          {
            name:'跟领导汇报调研报告2',
            iconType:'text',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'record',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'text',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'record',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'text',
          }
        ],
      },
    ];
    const meetingCardData = [
      {
        date: "08月09日",
        total: "6个提醒事项",
        dataList: [
          {
            name:'跟领导汇报调研报告',
            iconType:'text',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'record',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'text',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'record',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'text',
          }
        ],
      },
      {
        date: "08月10日",
        total: "3个提醒事项",
        dataList: [
          {
            name:'跟领导汇报调研报告2',
            iconType:'text',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'record',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'text',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'record',
          },
          {
            name:'跟领导汇报调研报告',
            iconType:'text',
          }
        ],
      },
    ];
    if (currentTabIndex === 0) {
      return <Card cardData={remindCardData} />;
    } else if (currentTabIndex === 1) {
      return <Card cardData={meetingCardData} />;
    }
  };
  // add按钮区渲染
  const renderAddContent = () =>{
    return <AddContent/>
  }
  return (
    <IndexMain>
      <TabBar
        currentTabIndex={currentTabIndex}
        callback={onClickTab}
      />
      {renderTabContent()}
      {renderAddContent()}
    </IndexMain>
  )
})

export default Index
