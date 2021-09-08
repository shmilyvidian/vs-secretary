import React from 'react'
import { View,Text,Image} from '@tarojs/components'
import recordActive from '@/assets/images/recordActive.png'
import meetingActive from '@/assets/images/TextActive.png'
import deleteIcon from '@/assets/images/delete.svg'
import { EmptyView } from '@/components/EmptyView'

type cardListDataType = {
  name: string
  iconType: string
}
interface IProps {
  cardListData?: cardListDataType[]
}
export class CardList extends React.PureComponent<IProps> {
  constructor(IProps) {
    super(IProps)
  }
  render(){
    const { cardListData = [] } = this.props;
    console.log(cardListData,'vs',this.props)
    return(
      <View className="list">
      {
        cardListData.length ?
        cardListData.map((item: cardListDataType, index: number) => {
            return (
              <View className="item" key={index}>
                <Text className="text">{item.name}</Text>
                <Image src={item.iconType =="record" ?recordActive : meetingActive} className={item.iconType =="record"? 'record' : 'meeting'} />
              </View>
            )
          }) : <EmptyView text='啊哦，还没有数据快去新建一下吧' />
      }
    </View>

    )
  }
}
