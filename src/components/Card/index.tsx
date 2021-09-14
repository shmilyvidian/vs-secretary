import React, { ReactNode } from 'react'
import { View ,Text} from '@tarojs/components'
import { CardList } from '@/components/CardList'
import { EmptyView } from '@/components/EmptyView'
import classNames from 'classnames'
import store from "@/store/index";
type cardDataType = {
  isActive:boolean
  date: string
  type: string
  dataList: Array<any>
}
type stateType = {

}
interface IProps {
    cardData?: cardDataType[]
    onActiveEvent: (item:any,index:number) => void
}

export class Card extends React.PureComponent<IProps> {
  constructor(IProps) {
    super(IProps)
  }
  state={

  } as stateType
  // 卡片点选事件
  onActive = (item,index,e) => {
    e.stopPropagation();
    this.props.onActiveEvent(item,index)
    const { homeStore } = store
    homeStore.userInfo.closeAddContentFN && homeStore.userInfo.closeAddContentFN()
  }
  toggle = ()=>{
  }

  render() {
    const { cardData = [] } = this.props    
    // console.log('beforefilter',cardData)
    // let cindex = cardData.findIndex(item=>{
    //   item.dataList
    // })
    // console.log('xx',cardData,cindex)

    return (
      <View>
        {
          cardData.length ?
            cardData.map((item: cardDataType, index: number,arr) => {
              return (
                <View className={classNames('remindItem_Box', item.isActive ?'active':'')} key={index} onClick={this.onActive.bind(this,item,index)}>
                  <View className="title">
                    <Text className="date">{item.date}</Text>
                    <Text className="total">{item.dataList.length}个{item.type=="remind"?"提醒事项":"会议"}</Text>
                  </View>
                  <CardList cardListData={item.dataList} type={item.type} isActive={item.isActive} itemKey={item.date}/>
                </View>
              )
            }) : <EmptyView text='啊哦，还没有数据快去新建一个吧' />
        }
      </View>
    )
  }
}