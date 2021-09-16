import { styled } from 'linaria/react'
import { View } from '@tarojs/components'

export const IndexMain = styled(View)`
.resume__container{
    background:#F6F6F6;
}
  .header__search{
    height:100pt; 
    background:#F9612A;

    .search__name{
        font-family: PingFangSC-Semibold;
        font-size: 34px;
        color: #FFFFFF;
        margin-left:16pt;
        margin-right:4pt;
        float:left;
        line-height:44pt;
    }
    .search__icon_down{
        font-size:18pt;
        padding-top:12pt;
        color:#fff;
        float:left;
        line-height:36pt;
        margin-left:-2pt;
    }
   
    .search__input{
        padding-top:6pt;
        margin-right:8pt;
        .at-search-bar{
            background-color:#F9612A;
        }
        .at-input::after {
            display:none
        }
        .at-input{
            margin-left:74pt;
            border-radius: 32px;
            height:22px;
            margin-top:6pt;

            .at-input__input{
                margin-top:-5pt;
                margin-left:24pt;
            }
        }

        .search__icon__{
            margin-top:-17pt;
            icon{
                position:absolute;
                margin-left:15pt;
            }
        }
    }

    .tags__text{
        display:inline-block;
        width:100%;
        margin-left:16pt;

        .at-badge {
            margin-right:4pt;

            .at-button {
                border-radius: 12pt;
                background-color:rgba(255,255,255,0.25);
                color:#fff;
                border:none;
                padding-left:12pt;
                padding-right:12pt;
            }
        }

        .at-icon-add-circle{
            background:#fff;
            border-radius:100%;
            margin-left:16pt;
        }
    }
  }
  .card{
      margin-top:-26pt;
      padding: 6pt 2pt;
    .at-card__header{
        display:none;
    }
    .at-col-9{
        padding-left:8pt;
    }
    .at-card{
        margin-bottom:8pt;
        border:none;
    }
    .at-card__content{
        padding-left:0pt;
        padding-right:0pt;
        padding-bottom:0pt;
        .card__footer {
            border-top:1px solid rgba(172,172,172,0.20);
            .col__download{
                border-right:1px solid rgba(172,172,172,0.20)
            }
            .col__download:last-child{
                .content-inner__text{
                    color:#FFB935
                }
            }
        }

    }
    .text_name{
        font-family: PingFangSC-Semibold;
        font-size: 14pt;
        font-weight:600;
        color: #2E1C14;
        float:left;
    }
    .at-avatar{
        background:#fff;
        width:12pt;
        height:23pt;
        position:relative;
        top:-4pt;
        left:6pt;
        .at-avatar__img{
            height:12pt;
        }
        &.icon__grade{
            .at-avatar__img{
                position:relative;
                top:2pt;
                height:15pt;
            }
        }
    }
    .text__score{
        font-size:16pt;
        margin-left:-14pt;
        color:#F9612A;
    }
  
    .tags__1{
        margin-left:-7pt;
        padding-left:8pt;
        padding-right:8px;
        .at-tag{
            background:#fff;
            border:none
            border-right:1PX #d6e4ef solid;
            border-radius:0px;
            height:10pt;
            line-height:10pt;
            color: #ACACAC;
            margin-top:8pt;
            font-size:32rpx
        }
    }
    
    .no__border{
        border:none;
    }

    .tags__2{
        .at-tag{
            padding:0 38rpx 0 32rpx;
        }
        padding-left:8pt;
        padding-right:8px;
        color: #878787;
        margin-top:12pt;
        .at-avatar{
            height:14pt;
            margin-left:-3pt;
            margin-top:4.5pt;
            background-color:#F7F7F7;

            .at-avatar__img{
                height:9pt;
                width:9pt;
                transform:translateY(-8pt);
            }
        }
        .at-tag{
            margin-right:8pt;
            margin-bottom:6pt;
            border-radius: 29pt;
        }
        .text__count{
            margin-left:5pt;
            color: #ACACAC;
        }
    }

    .card__footer{
        border-top:1PX #d6e4ef solid;
        line-height:28pt;
        height:28pt;
        margin-top:12pt;

        .col__download{
            border-right:1PX #d6e4ef solid;
        }

        .at-grid__flex-item{
            flex:1 !important;
        }
        .content-inner__img{
            height:12pt;
            width:12pt;
        }
        .at-grid-item__content-inner{
            height:28pt;
            .content-inner__text{
                color: #F9612A;
            }
        }
    }
}

`