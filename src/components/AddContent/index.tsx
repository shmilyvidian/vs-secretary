import React, { useState, useEffect,Fragment } from "react";
import { View ,Text,Image} from '@tarojs/components'
import create from '@/assets/images/create.svg'

interface IProps {
  currentAddIndex: number | undefined;
  callback: (currentAddIndex: number) => void;
}

export const AddContent = React.memo(({ currentAddIndex, callback }: IProps) => {
  const [tabs, setTabs] = useState<number>()
  const [addIndex, setTabIndex] = useState<number | undefined>(currentAddIndex)
  const [isShow, setIsShow] = useState(false);
  const showRemindBox = () => {
    const reverseIsShow = !isShow
    setIsShow(reverseIsShow);
};

  useEffect(() => {
    setTabs(tabs)
    typeof callback === "function" && callback.call(null, addIndex);
  }, [addIndex])
  return (
    <Fragment>
    <View className="remindBox" style={isShow? "display:block":"display:none"}>
      <View className="remindText" 
        onClick={() => setTabIndex(1)}
      >
        <Text>文本提醒事项</Text>
      </View>
      <View className="remindVoice" 
        onClick={() => setTabIndex(2)}
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