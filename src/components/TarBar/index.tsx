import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import classNames from 'classnames'


interface IProps {
  currentTabIndex: number | undefined;
  callback: (currentTabIndex: number) => void;
}

export const TabBar = React.memo(({ currentTabIndex, callback }: IProps) => {
  const [tabs, setTabs] = useState<number>()
  const [tabIndex, setTabIndex] = useState<number | undefined>(currentTabIndex)
  
  useEffect(() => {
    if (currentTabIndex === tabIndex)  {
      return;
    }
    setTabs(tabs)
    typeof callback === "function" && callback.call(null, tabIndex);
  }, [tabIndex])
  return (
        <View className="tabItem_GBox">
          <View 
            className={classNames('tabItem', currentTabIndex === 0 ?'active':'')}
            onClick={() => setTabIndex(0)}
          >
             <Text>提 醒</Text>
           </View>
           <View 
            className={classNames('tabItem', currentTabIndex === 1 ?'active':'')}
            onClick={() => setTabIndex(1)}
           >
             <Text>会 议</Text>
           </View>
         </View>
  )
})