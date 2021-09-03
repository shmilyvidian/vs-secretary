import { styled } from 'linaria/react'
import {  View,Image,Input } from '@tarojs/components'
import { css } from 'linaria'

const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}

export const IndexMain = styled(View)`
    width:750px;
    height:100%;
    padding-bottom:110px;
    box-sizing:border-box;
    ${center}
    .tabItem_GBox{
        width:686px;
        height:98px;
        line-height:48px;
        border-radius:8px;
        background:rgba(249,249,249,1);
        ${center}
        flex-direction:row;
    }
    .tabItem{
        width:330px;
        height:82px;
        line-height:82px;
        margin-right:8px;
        border-radius:8px;
        font-size:34px;
        text-align:center;
        color:rgba(196,180,172,1);
        background: none;
        &.active{
            color:rgba(255,255,255,1);
            background:linear-gradient(rgba(255,187,0,1), rgba(255,145,0,1))
        }
    }
    .remindItem_Box{
        width:686px;
        min-height:340px;
        margin-top:32px;
        padding:32px;
        border-radius: 8px;
        background: #F9F9F9;
        background-image:none;
        box-sizing:border-box;
        .title{
            width:100%;
            height:38px;
            .date{
                float:left;
                width:130px;
                height:38px;
                line-height: 38px;
                border-radius: 4px;
                text-align:center;
                font-family: PingFangSC-Semibold;
                font-size: 24px;
                color:rgba(255,118,53,1);
                background: rgba(255,185,53,.16);
            }
            .total{
                float:right;
                font-family: PingFangSC-Medium;
                font-size: 32px;
                color: #93796D;
                text-align: right;
                line-height: 36px;
            }
        }
        .list{
            margin-top:16px;
            .item{
                position:relative;
                height:80px;
                margin-bottom:8px;
                .text{
                    position:relative;
                    float:left;
                    display:inline-block;
                    margin-bottom:8px;
                    padding-left:24px;
                    line-height:80px;
                    font-family: PingFangSC-Regular;
                    font-size: 28px;
                    color: rgba(46,28,20,1);
                    max-width:550px;
                    overflow:hidden;
                    white-space:nowrap;
                    text-overflow:ellipsis;
                    &:before{
                        position:absolute;
                        left:0;
                        top:34px;
                        display:inline-block;
                        width:12px;
                        height:12px;
                        border-radius:50%;
                        background: #FFB935;
                        box-shadow: 0 2px 4px 0 rgba(255,118,53,0.45);
                        content:"";
                    }
                }
                .record{
                    display:inline-block;
                    float:left;
                    margin-top:26px;
                    margin-left:17px;
                    width:19px;
                    height:28px;
                 }
                .meeting{
                    display:inline-block;
                    float:left;
                    margin-top:28px;
                    margin-left:15px;
                    width:21px;
                    height:28px;
                }
                .deleteBox{
                    position:absolute;
                    top:0;
                    right:-32px;
                    width:120px;
                    height:80px;
                    line-height:80px;
                    background: #FF5656;
                    text-align:center;
                }
                .deleteIcon{
                    
                    width:26px;
                    height:26px;
                }
            }
        }


        &.active{
            opacity:1;
            background-image: linear-gradient(134deg, #FFBB00 0%, #FF9100 100%);
            box-shadow: 0 8px 10px 0 rgba(255,118,53,0.28);
            .date{
                background: rgba(255,255,255,1);
                border-radius: 4px;
                box-shadow: 0 4px 6px 0 rgba(255,118,53,0.38);
            }
            .total{
                color:#FFFFFF
            }
            .list{
                .item{
                    .text{
                        color:#FFFFFF
                        &:before{
                            background: #FFFFFF;
                            box-shadow: 0 2px 4px 0 rgba(255,118,53,0.45);
                         
                        }
                    }
                    .record{
                        color:#FFFFFF;
                    }
                }
            }
        }
    }
    .addFixedBox{
        position:fixed;
        left:0;
        bottom:0;
        width:100%;
        height:110px;
        background:#fff;
        .addFixed{
            height:100%;
            .icon{
                position:absolute;
                top:28px;
                left:32px;
                display:inline-block;
                width:74px;
                height:74px;
            }
            .text{
                float:left;
                margin-left:106px;
                margin-top:38px;
                line-height:36px;
                font-family: PingFangSC-Semibold;
                font-size: 28px;
                color: #2E1C14;
                text-align: center;
            }

        }
    }
`
export const tabItem_GBox = css`
    width:343px;
    height:49px;
    background:rgba(249,249,249,1);
    ${center}
`
export const tabItem = css`
    width:165.5px;
    height:41px;
    margin-right:4px;
    font-size:17px;
    background: linear-gradient(rgba(255,187,0,1), rgba(255,145,0,1));
`