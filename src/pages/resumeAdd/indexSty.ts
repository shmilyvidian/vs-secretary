import { styled } from 'linaria/react'
import {  View } from '@tarojs/components'


export const IndexMain = styled(View)`
    text-align:left;
    padding-bottom:120px;
    .addTitle{
        height:40px;
        padding-left:30px;
        text-align:left;
        font-family: PingFangSC-Regular;
        font-size: 28px;
        color: #2E1C14;
    }
    .addNode{
        margin:12px 0 ;
        padding-left:30px;
        font-family: PingFangSC-Regular;
        font-size: 24px;
        color: #ACACAC;
    }
    .at-list::after {
        border:none;
        border-bottom:1px solid rgba(172,172,172,0.20)
    }
    .at-list__item {
        padding:30px;
        height:112px;
        &::after{
            border-bottom:1px solid rgba(172,172,172,0.20)
        }
    }
    
    .item-extra__icon-arrow {
        font-size:36px;
        margin-left:23px;
    }
    .item-extra__info,item-content__info-title{
        font-size:34px;
    }
    .card{
        padding:25px 32px;
        border-bottom:1px solid rgba(172,172,172,0.20);
        .title{
            margin-bottom:20px;
            font-size: 34px;
            color: #2E1C14;
            .add{
                float:right;
                display:inline-block;
                width:44px;
                height:44px;
                background:#ACACAC;
                border-radius:50%;
            }
        }
        .tags{
            .tag {
                display:inline-block;
                background: #F6F6F6;
                border-radius: 24px;
                margin-right:16px;
                padding:0 24px;
                height:48px;
                line-height:48px;
                box-sizing:border-box;
                font-size: 24px;
                color: #878787;
                font-weight:normal;
            }
        }
        .resume{
            .tag{
                display:inline-block;
                padding:22px 24px;
                margin-right:16px;
                background: #F6F6F6;
                border-radius: 38px;
                font-size: 28px;
                font-family: PingFangSC-Regular;
                color: #878787;
                line-height: 32px;
            }
            .download{
                position:relative;
                top:5px;
                display:inline-block;
                width:32px;
                height:32px;
                margin-left:20px;
            }
        }
        
    }

`