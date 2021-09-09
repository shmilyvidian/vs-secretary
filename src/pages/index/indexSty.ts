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
        height:360px;
        margin-top:32px;
        padding:32px;
        border-radius: 8px;
        background: #F9F9F9;
        background-image:none;
        box-sizing:border-box;
        overflow:hidden;
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
            height:auto;
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
    .remindBox{
        position:fixed;
        bottom:110px;
        width:686px;
        height:221px;
        padding:0 24px;
        font-family: PingFangSC-Semibold;
        font-size: 32px;
        line-height:110px;
        text-align:center;
        color: #2E1C14;
        background: #FFFFFF;
        box-shadow: 0 0 16px 0 rgba(255,118,53,0.26);
        border-radius: 8px;
        box-sizing:border-box;
        z-index:2;
        .remindText{
            width:100%;
            height:110px;
            border-bottom:1px solid #F6F6F6;
            opacity: 0.9;
        }
    }
    .bgFixedBox{
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.4);
        z-index:3;
        .dialogBox{
            position:absolute;
            top:0;
            right:0;
            bottom:0;
            left:0;
            margin:auto;
            padding:0 32px;
            width:640px;
            border-radius: 16px;
            min-height:494px;
            height:900px;
            background:rgba(255,255,255,1);
            box-sizing:border-box;
        }
        .dialogClose{
            position:absolute;
            top:0;
            right:32px;
            width:48px;
            height:58px;
            z-index:2;
        }
        .dialogTitle{
            height:110px;
            line-height:110px;
            opacity: 0.9;
            font-family: PingFangSC-Semibold;
            font-size: 36px;
            color: #2E1C14;
            text-align: center;
        }
        .dialogContent{
            text-align:left;
            margin-top:8px;
            .item{
                position:relative;
                height:88px;
                line-height:88px;
                margin-bottom:24px;
                border-radius: 8px;
                background: #F9F9F9;
                .label{
                    position:absolute;
                    width:84px;
                    left:20px;
                    font-family: PingFangSC-Semibold;
                    font-size: 28px;
                    color: #000000;
                }
                .input{
                    padding-left:104px;
                    box-sizing:border-box;
                    height:88px;
                    line-height:88px;
                    font-size: 28px;
                    color: #C4B4AC;
                }
            }
            .textarea{
                padding:24px;
                width:100%;
                height:314px;
                background: #F9F9F9;
                border-radius: 8px;
                box-sizing:border-box;
                &.text{
                    height:auto;
                    font-size: 28px;
                    color: #93796D;
                    text-align: justify;
                    line-height: 40px;
                }
            }
            .recordarea{
                position:relative;
                width:100%;
                height:426px;
                border-radius: 8px;
                .time{
                    display:inline-block;
                    width:100%;
                    text-align:center;
                    opacity: 0.9;
                    font-family: PingFangSC-Regular;
                    font-size: 24px;
                    color: #93796D;
                    text-align: center;
                    line-height: 32px;
                }
                .start,.stop    {
                    position:absolute;
                    left:260px;
                    bottom:0;
                    left:50%;
                    margin-left:-60px;
                    width:120px;
                    height:120px;
                }
                .stopLeft{
                    position:absolute;
                    left:106px;
                    bottom:36px;
                    opacity: 0.9;
                    font-family: PingFangSC-Regular;
                    font-size: 24px;
                    color: #2E1C14;
                    text-align: center;
                    line-height: 32px;
                }
                .stopRight{
                    position:absolute;
                    right:106px;
                    bottom:36px;
                    opacity: 0.9;
                    font-family: PingFangSC-Regular;
                    font-size: 24px;
                    color: #2E1C14;
                    text-align: center;
                    line-height: 32px;
                }
                .mark,.pause{
                    display:block;
                    width:28px;
                    height:28px;
                    margin:0 auto;
                }
            }
        
        }
        .video{
            position:relative;
            width:100%;
            height:204px;
            background: #FFFFFF;
            box-shadow: 0 0 16px 0 rgba(255,118,53,0.25);
            border-radius: 8px;
            .videoTop{
                font-family: PingFangSC-Semibold;
                font-size: 28px;
                color: #2E1C14;
                text-align: justify;
                .text{
                    position:absolute;
                    top:24px;
                    left:24px;
                    display:inline-block;
                    width:220px;
                    height:40px;
                    line-height:40px;
                }
                .play{
                    display:inline-block;
                    position:absolute;
                    top:25px;
                    right:21px;
                    width:38px;
                    height:38px;
                }
              
            }
            .videoBottom{
                position:relative;
                height:204px;
                .progress{
                    position:absolute;
                    left:24px;
                    top:108px;
                    width:528px;
                    height:12px;
                    background: rgba(196,180,172,0.40);
                    border-radius: 6px;
                    .play{
                        position:absolute;
                        left:0;
                        top:-6px;
                        width:28px;
                        height:28px;
                    }
                }
                .videoBottomLeft{
                    position:absolute;
                    left:24px;
                    bottom:32px;
                    opacity: 0.9;
                    font-family: PingFangSC-Regular;
                    font-size: 24px;
                    color: #93796D;
                    text-align: justify;
                    line-height: 32px;
                }
                .videoBottomRight{
                    position:absolute;
                    right:24px;
                    bottom:32px;
                    opacity: 0.9;
                    font-family: PingFangSC-Regular;
                    font-size: 24px;
                    color: #93796D;
                    text-align: justify;
                    line-height: 32px;
                }
            }
        }
        .dialogFooter{
            position:absolute;
            bottom:32px;
            width:calc(100% - 64px);
            text-align:center;
            display:flex;
            justify-items:space-around;
            flex-diretion:column;

            .confirm{
                width:100%;
                height:76px;
                line-height:74px;
                margin-top:24px;
                font-size:28px;
                color:#FFFFFF;
                background-image: linear-gradient(134deg, #FFBB00 0%, #FF9100 100%);
                box-shadow: 0 8px 12px 0 rgba(255,118,53,0.40);
                border-radius: 8px;
            }
            .button{
                float:left;
                width:276px;
                height:76px;
                margin-right:24px;
                line-height:76px;
                border: 1px solid #FF7635;
                border-radius: 8px;
                box-sizing:border-box;
                font-size: 28px;
                color: #FF7635;
                text-align:center;
                &:last-child{
                    margin-right:0
                }
                &.active{
                    color:#FFFFFF;
                    background: #FF7635;
                }
                .copytext{
                    position:relative;
                    top:5px;
                    width:28px;
                    height:28px;
                    margin-right:8px;
                }
                .share{
                    position:relative;
                    top:5px;
                    width:28px;
                    height:28px;
                    margin-right:8px;
                }
                .download{
                    position:relative;
                    top:5px;
                    width:28px;
                    height:28px;
                    margin-right:8px;
                }
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