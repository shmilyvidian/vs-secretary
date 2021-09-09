import React from 'react'
import { View ,Text} from '@tarojs/components'
import { CardList } from '@/components/CardList'
import { EmptyView } from '@/components/EmptyView'
import classNames from 'classnames'

type cardDataType = {
  date: string
  total: string
  dataList: Array<any>
}
type stateType = {
  isflod: boolean
}
interface IProps {
    cardData?: cardDataType[]
}

export class Card extends React.PureComponent<IProps> {
  constructor(IProps) {
    super(IProps)
  }
  state={
    isflod:false
  } as stateType
  // //卡片点选事件
  onActive = (e) => {
    e.stopPropagation();
    this.setState({
      isflod: !this.state.isflod
    })
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
                <View className={classNames('remindItem_Box', item.isActive ?'active':'')} key={index} onClick={this.onActive}>
                  
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