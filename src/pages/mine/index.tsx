import React, { Component } from 'react'
import { View,  Text } from '@tarojs/components'
import { AtCard, AtAvatar, AtTag, AtGrid } from "taro-ui"
import { IndexMain } from './indexSty'
import classNames from 'classnames'

import Taro from '@tarojs/taro'
import male from '@/assets/male.png'
import grade from '@/assets/grade.png'
import like from '@/assets/like.png'
import download from '@/assets/download.png'
import share from '@/assets/share.png'
import female from '@/assets/female.png'
import remove from '@/assets/remove.png'
import removeWhite from '@/assets/removeWhite.png'
import { gennerateTaroNavigateParams } from '@/utils/urlParam'
import detailStore  from '@/store/resumeDetails'
type stateType = {
    showJobType: boolean,
    searchValue: string,
    showDelete:boolean
}

interface Mine {
    state: stateType,
}
class Mine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showJobType: false,
            searchValue: '',
            showDelete:false,
        }
    }

    handleJobTypeClick(show) {
        this.setState({
            showJobType: show
        })
    }

    onSearchChange() {

    }
    longTap(e){
        e.stopPropagation();
        console.log('show',e)
        this.setState({
          showDelete: !this.state.showDelete
        })
    }
    onViewResumeInfo(name,score) {
        detailStore.setResumeDetail({
            name,
            score
        })
        Taro.navigateTo(gennerateTaroNavigateParams('resumeInfo', {}))
        Taro.setNavigationBarTitle({
            title: '简历助手'
          });
    }
    render() {
        const { showDelete } = this.state
        return (
            <IndexMain>
                <View className='resume__container'>
                    <View className="header__search">
                        <View className='at-row'>
                            <View className='at-col'>
                                <view className="text__count">10</view>
                                <view className="label__str">共上传</view>
                            </View>
                            <View className='at-col'>
                                <view  className="text__count">7</view>
                                <view className="label__str">上架</view>
                            </View>
                            <View className='at-col'>
                                <view  className="text__count">3</view>
                                <view className="label__str">已下架</view>
                            </View>
                        </View>

                    </View>

                    <view className="card">
                        <AtCard onClick={this.onViewResumeInfo.bind(this, '张三','7.8')}>
                        <View className={classNames('soldout', showDelete?'delete':'')} style={showDelete?"display:flex":"display:none"}>
                            <View className="remove"> <AtAvatar image={showDelete?removeWhite:remove}></AtAvatar></View>
                            <View className="text">
                                <Text>已下架</Text>
                            </View>
                        </View>
                        <View onLongPress={this.longTap.bind(this)} >
                            <View className='at-row'>
                                <View className='at-col at-col-9'>
                                    <view className="text_name">张三</view>
                                    <AtAvatar image={male}></AtAvatar>
                                </View>
                                <View className='at-col at-col-2'>
                                    <AtAvatar image={grade} className="icon__grade"></AtAvatar>
                                </View>
                                <View className='at-col at-col-1'>
                                    <Text className="text__score">7.8</Text>
                                </View>
                            </View>

                            <view className="tags__1">
                                <AtTag>产 品</AtTag>
                                <AtTag>6 年</AtTag>
                                <AtTag>本 科</AtTag>
                                <AtTag className="no__border">行 编</AtTag>
                            </view>


                            <view className="tags__2">
                                <AtTag>
                                    <View className='at-row'>
                                        <View className='at-col at-col-8'>有数据思维</View>
                                        <View className='at-col at-col-2'><AtAvatar image={like}></AtAvatar></View>
                                        <View className='at-col at-col-1 text__count'>29</View>
                                    </View>
                                </AtTag>
                                <AtTag>
                                    <View className='at-row'>
                                        <View className='at-col at-col-8'>经验丰富</View>
                                        <View className='at-col at-col-2'><AtAvatar image={like}></AtAvatar></View>
                                        <View className='at-col at-col-2 text__count'>9</View>
                                    </View>
                                </AtTag>
                                <AtTag >
                                    <View className='at-row'>
                                        <View className='at-col at-col-8'>项目管理</View>
                                        <View className='at-col at-col-2'><AtAvatar image={like}></AtAvatar></View>
                                        <View className='at-col at-col-2 text__count'>19</View>
                                    </View>
                                </AtTag>
                            </view>

                            <View className='at-row card__footer'>
                                <View className='at-col col__download'>
                                    <AtGrid mode='rect' hasBorder={false} data={
                                        [
                                            {
                                                image: download,
                                                value: '下载(23)'
                                            },
                                        ]
                                    } />
                                </View>
                                <View className='at-col col__download'>
                                    <AtGrid mode='rect' hasBorder={false} data={
                                        [
                                            {
                                                image: share,
                                                value: '分享'
                                            },
                                        ]
                                    } />
                                </View>
                            </View>
                            </View>
                        </AtCard>

                        <AtCard  onClick={this.onViewResumeInfo.bind(this, '李四','8.2')}>
                            <View className="soldout">
                                <View className="remove"> <AtAvatar image={remove}></AtAvatar></View>
                                <View className="text">
                                    <Text>已下架</Text>
                                </View>
                            </View>
                            <View className='at-row'>
                                <View className='at-col at-col-9'>
                                    <view className="text_name">李四</view>
                                    <AtAvatar image={male}></AtAvatar>
                                </View>
                                <View className='at-col at-col-2'>
                                    <AtAvatar image={grade} className="icon__grade"></AtAvatar>
                                </View>
                                <View className='at-col at-col-1'>
                                    <Text className="text__score">8.2</Text>
                                </View>
                            </View>

                            <view className="tags__1">
                                <AtTag>产 品</AtTag>
                                <AtTag>6 年</AtTag>
                                <AtTag>本 科</AtTag>
                                <AtTag className="no__border">行 编</AtTag>
                            </view>
                            <View className='at-row card__footer'>
                                <View className='at-col col__download'>
                                    <AtGrid mode='rect' hasBorder={false} data={
                                        [
                                            {
                                                image: download,
                                                value: '下载(13)'
                                            },
                                        ]
                                    } />
                                </View>
                                <View className='at-col col__download'>
                                    <AtGrid mode='rect' hasBorder={false} data={
                                        [
                                            {
                                                image: share,
                                                value: '分享'
                                            },
                                        ]
                                    } />
                                </View>
                            </View>
                        </AtCard>

                        <AtCard onClick={this.onViewResumeInfo.bind(this, '王五五','8.5')}>

                            <View className='at-row'>
                                <View className='at-col at-col-9'>
                                    <view className="text_name">王五五</view>
                                    <AtAvatar image={female}></AtAvatar>
                                </View>
                                <View className='at-col at-col-2'>
                                    <AtAvatar image={grade} className="icon__grade"></AtAvatar>
                                </View>
                                <View className='at-col at-col-1'>
                                    <Text className="text__score">8.5</Text>
                                </View>
                            </View>

                            <view className="tags__1">
                                <AtTag>产 品</AtTag>
                                <AtTag>6 年</AtTag>
                                <AtTag>本 科</AtTag>
                                <AtTag className="no__border">行 编</AtTag>
                            </view>
                            <View className='at-row card__footer'>
                                <View className='at-col col__download'>
                                    <AtGrid mode='rect' hasBorder={false} data={
                                        [
                                            {
                                                image: download,
                                                value: '下载(13)'
                                            },
                                        ]
                                    } />
                                </View>
                                <View className='at-col col__download'>
                                    <AtGrid mode='rect' hasBorder={false} data={
                                        [
                                            {
                                                image: share,
                                                value: '分享'
                                            },
                                        ]
                                    } />
                                </View>
                            </View>
                        </AtCard>
                    </view>

                   
                </View>
            </IndexMain>
        )
    }
}

export default Mine
