import React from 'react'
import { View ,Text} from '@tarojs/components'
import { CardList } from '@/components/CardList'
import { EmptyView } from '@/components/EmptyView'

type cardDataType = {
  date: string
  total: string
  dataList: Array<any>
}
interface IProps {
    cardData?: cardDataType[]
}

export class Card extends React.PureComponent<IProps> {
  constructor(IProps) {
    super(IProps)
  }
  // //卡片点选事件
  // onActive = () => {

  // }
  render() {
    const { cardData = [] } = this.props    
    return (
      <View>
        {
          cardData.length ?
            cardData.map((item: cardDataType, index: number) => {
              return (
                <View className="remindItem_Box active" key={index}>
                  <View className="title">
                    <Text className="date">{item.date}</Text>
                    <Text className="total">{item.total}</Text>
                  </View>
                  <CardList cardListData={item.dataList} />
                </View>
              )
            }) : <EmptyView text='啊哦，还没有数据快去新建一个吧' />
        }
      </View>
    )
  }
}