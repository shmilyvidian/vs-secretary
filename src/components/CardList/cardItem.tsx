import React from 'react'
import { View,Text,Image } from '@tarojs/components'
import activeImg from '@/assets/images/test.jpeg'
import recordActive from '@/assets/images/recordActive.png'
import meetingActive from '@/assets/images/TextActive.png'
import deleteIcon from '@/assets/images/delete.svg'
interface IProps {
    data: any
    key: number
}

export function CardItem({data,key}: IProps) {
    // 跳详情页
    // const onClickItem = () => {
    //     typeof callback === 'function' && callback.call(null)
    // }

    return (

        <View className="item">

          <Text className="text">{data.name}</Text>
          <Image src={data.iconType =="record" ? recordActive : meetingActive} className={data.iconType =="record"? 'record' : 'meeting'} />
            <View className="deleteBox" style={data.showDelete? "display:block":"display:none"}>
              <Image src={deleteIcon} className="deleteIcon" />
            </View>
        </View>
    )
}