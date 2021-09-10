import React, { useState, useEffect,Fragment } from "react";
import { View ,Text,Image} from '@tarojs/components'
import create from '@/assets/images/create.svg'
import store from "@/store/index";

interface IProps {
  currentAddIndex: number | undefined;
  isCloseModal: Boolean;
  callback: (currentAddIndex: number) => void;
}

export const AddContent = React.memo(({ currentAddIndex, callback,isCloseModal }: IProps) => {
  const [tabs, setTabs] = useState<number>()
  const [addIndex, setTabIndex] = useState<number | undefined>(currentAddIndex)
  const [isShow, setIsShow] = useState(false);
  const showRemindBox = () => {
    const reverseIsShow = !isShow
    setIsShow(reverseIsShow);
};
const closeAddContentFN = ()=>{
  setIsShow(false)
}
store.homeStore.setCloseAddContentFN(closeAddContentFN)


  const showAddNoticeModal =(type) =>{
    setTabIndex(type)
    setTabs(tabs)
    typeof callback === "function" && callback.call(null, type);
  }

  return (
    <Fragment>
    <View className="remindBox" id="remindBox" style={isShow? "display:block":"display:none"}>
      <View className="remindText" 
        onClick={() => showAddNoticeModal(1)}
      >
        <Text>文本提醒事项</Text>
      </View>
      <View className="remindVoice" 
        onClick={() => showAddNoticeModal(2)}
      >
        <Text>语音提醒事项</Text>
      </View>
    </View>

    <View className="addFixedBox">
      <View className="addFixed" onClick={()=> {showRemindBox()}}>
        <Image src={create} className="icon"></Image>
        <Text className="text">新建提醒事项</Text>
      </View>
    </View>
  </Fragment>
  )
})