import { styled } from 'linaria/react'
import { View } from '@tarojs/components'

export const IndexMain = styled(View)`
    width:100%;
    overflow-x:hidden;
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
        margin-top:16pt;
    }
    .search__icon_down{
        font-size:18pt;
        margin-top:18pt;
        color:#fff;
        float:left;
        margin-left:-2pt;
        margin-right:5pt;
    }
   
    .search__input{
        padding-top:6pt;
        margin-right:8pt;
        margin-left:4pt;
        margin-bottom:10pt;
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
            margin-top:-20pt;
            z-index:3;
            icon{
                position:relative;
                margin-left:10pt;
            }
        }
    }

    .tags__text{
        display:inline-block;
        width:100%;
        margin-left:16pt;
        margin-top:5pt;

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
      overflow:hidden;
      margin-top:-26pt;
      padding: 6pt 2pt;
      border-bottom:none;
      .at-avatar{
        background:none
      }
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
        height:12pt;
        position:relative;
        top:4pt;
        left:6pt;
        background:none;
        .at-avatar__img{
            float:left;
            height:12pt;
        }
        &.icon__grade{
            background:none;
            width:13pt;
            height:16pt;
            .at-avatar__img{
                float:left;
                width:13pt;
                height:16pt;
                position:relative;
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
            width:10pt;
            height:10pt;
            margin-top:1pt;
            margin-left:-1pt;
            .at-avatar__img{
                float:left;
                height:9pt;
                width:9pt;
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
            float:left;
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