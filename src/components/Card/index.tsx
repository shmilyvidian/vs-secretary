import React, { ReactNode } from 'react'
import { View ,Text} from '@tarojs/components'
import { CardList } from '@/components/CardList'
import { EmptyView } from '@/components/EmptyView'
import classNames from 'classnames'

type cardDataType = {
  isActive:boolean
  date: string
  total: string
  dataList: Array<any>
}
type stateType = {
  isflod: boolean
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
    isflod:false
  } as stateType
  // 卡片点选事件
  onActive = (item,index) => {
    this.props.onActiveEvent(item,index)
  }
  toggle = ()=>{
  }

  render() {
    const { cardData = [] } = this.props    
    let { isflod } = this.state   
    return (
      <View>
        {
          cardData.length ?
            cardData.map((item: cardDataType, index: number) => {
              return (
                <View className={classNames('remindItem_Box', item.isActive ?'active':'')} key={index} onClick={this.onActive.bind(this,item,index)}>
                  <View className="title">
                    <Text className="date">{item.date}</Text>
                    <Text className="total">{item.total}</Text>
                  </View>
                  <CardList cardListData={item.dataList}/>
                </View>
              )
            }) : <EmptyView text='啊哦，还没有数据快去新建一个吧' />
        }
      </View>
    )
  }
}