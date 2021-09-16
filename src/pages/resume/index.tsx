import React, { Component } from 'react'
import { View, Icon, Text } from '@tarojs/components'
import { AtActionSheet, AtActionSheetItem, AtInput, AtBadge, AtButton, AtIcon, AtCard, AtAvatar, AtTag, AtGrid } from "taro-ui"
import { IndexMain } from './indexSty'

import Taro from '@tarojs/taro'

import male from '@/assets/male.png'
import grade from '@/assets/grade.png'
import like from '@/assets/like.png'
import download from '@/assets/download.png'
import share from '@/assets/share.png'
import female from '@/assets/female.png'

import { gennerateTaroNavigateParams } from '@/utils/urlParam'

import detailStore  from '@/store/resumeDetails'


type stateType = {
    showJobType: boolean,
    searchValue: string
}


interface Resume {
    state: stateType,
}
class Resume extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showJobType: false,
            searchValue: ''
        }
    }

    handleJobTypeClick(show) {
        this.setState({
            showJobType: show
        })
    }

    onSearchChange() {

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
        return (
            <IndexMain>
                <View className='resume__container'>
                    <View className="header__search">
                        <view className="search__name" onClick={this.handleJobTypeClick.bind(this, true)}>产品经理</view>
                        <view className="search__icon_down">ˇ</view>
                        <AtActionSheet isOpened={this.state.showJobType} cancelText='取消'>
                            <AtActionSheetItem onClick={this.handleJobTypeClick.bind(this, false)}>
                                产品经理
                            </AtActionSheetItem>
                            <AtActionSheetItem onClick={this.handleJobTypeClick.bind(this, false)}>
                                前端开发
                             </AtActionSheetItem>
                        </AtActionSheet>

                        <view className="search__input">
                            <AtInput
                                name='value'
                                type='text'
                                placeholder='搜索职位'
                                value={this.state.searchValue}
                                onChange={this.onSearchChange.bind(this)}
                            />
                            <view className="search__icon__">
                                <Icon size='14' type='search' />
                            </view>

                        </view>


                        <view className="tags__text">
                            <AtBadge>
                                <AtButton size='small'>外包岗位</AtButton>
                            </AtBadge>
                            <AtBadge>
                                <AtButton size='small'>本科学历</AtButton>
                            </AtBadge>
                            <AtBadge>
                                <AtButton size='small'>5年经验</AtButton>
                            </AtBadge>

                            <AtIcon value='add-circle' size='26' color='#F9612A'></AtIcon>
                        </view>
                    </View>

                    <view className="card">
                        <AtCard onClick={this.onViewResumeInfo.bind(this, '张三','7.8')}>

                            <View className='at-row'>
                                <View className='at-col at-col-9'>
                                    <view className="text_name">张三</view>
                                    <AtAvatar image={male}></AtAvatar>
                                </View>
                                <View className='at-col at-col-2'>
                                    <AtAvatar image={grade}></AtAvatar>
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
                                        <View className='at-col at-col-2 text__count'>29</View>
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
                        </AtCard>

                        <AtCard  onClick={this.onViewResumeInfo.bind(this, '李四','8.2')}>

                            <View className='at-row'>
                                <View className='at-col at-col-9'>
                                    <view className="text_name">李四</view>
                                    <AtAvatar image={male}></AtAvatar>
                                </View>
                                <View className='at-col at-col-2'>
                                    <AtAvatar image={grade}></AtAvatar>
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
                                    <AtAvatar image={grade}></AtAvatar>
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

export default Resume