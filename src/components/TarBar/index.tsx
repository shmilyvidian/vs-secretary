import React, { useState, useEffect } from "react";
import { css } from "linaria";
import { View, CoverView, CoverImage,Image } from "@tarojs/components";
import { IndexTabBar } from "./indexSty";
import Taro, { Component } from '@tarojs/taro'

class TabBar extends Component{
  state = {
    selected : 0,
    color: 'rgba(196,180,172,1)',
    selectedColor: 'rgba(255,255,255,1)',
    list: [
        {
            pagePath: 'pages/index/index',
            text: '提醒',
        },
        {
            pagePath: 'pages/me/me',
            text: '会议',
          
        }
    ]
  }
  switchTab = (item) => {
    const url = '/' + item.pagePath
    Taro.switchTab({
        url: url
    })
  }
  render() {
    return (
        <CoverView className='bottom-tab'>
            {
                this.state.list.map((item, index) => {
                    return <CoverView className='bottom-tab-item' onClick={this.switchTab.bind(this, item)} data-path={item.pagePath} key={item.text}>
                        <CoverView className='bottom-tab-item-text' style={{ color: this.state.selected === index ? this.state.selectedColor : this.state.color }}>
                            {item.text}
                        </CoverView>
                    </CoverView>
                })
            }
        </CoverView>
    )
  }
}
export default TabBar
// export const TabBar = React.memo(({ currentTabIndex, callback }: IProps) => {
//   // const tab_arr = [{ url: chatGray }, { url: heart }, { url: activityGray }]
//   // const [tabs, setTabs] = useState<ITabs[]>(tab_arr)
//   // const [initTranslateY800, setTranslate] = useState<string>(translateY800)
//   const [tabIndex, setTabIndex] = useState<number>(currentTabIndex)
  
//   useEffect(() => {
//     if (currentTabIndex === tabIndex) return;
//     // const isIncludeGray = (val) => val.url.includes("gray");
//     // const tabIcons = [chat, heart, activity];
//     // const isHighlight = tabs.some((o) => isIncludeGray(o));
//     // if (isHighlight) {
//     //   tabs.forEach((o, i) =>
//     //     i === 1
//     //       ? o.url
//     //       : (o.url = isIncludeGray(o)
//     //         ? o.url
//     //         : o.url.substring(0, o.url.indexOf(".png")) + "-gray.png")
//     //   );
//     //   tabs[tabIndex].url = tabIcons[tabIndex];
//     // }
//     // setTabs(tabs)
//     // setTranslate('')
//     typeof callback === "function" && callback.call(null, tabIndex);
//   }, [tabIndex])


//   return (
//     <IndexTabBar >
//       {
//         // tabs.map((o, i) => {
//           // return (
//             <View
//               className="item-group-btn"
//               key={1}
//               onClick={() => setTabIndex(0)}
//             >
//               <Image className="item-group-btn-image" src="www.baidu.com" />
//             </View>
//           // );
//         // })
//       }
//     </IndexTabBar>
//   )
// })