import { styled } from 'linaria/react'
import { View } from '@tarojs/components'

export const IndexMain = styled(View)`
  .resume__container{
    background:#F6F6F6;
}
.header__search{
  height:70pt; 
  color:#fff;
  text-align:center;
  background:#F9612A;
  pading-top:12pt;

  .text__count{
      font-family: PingFangSC-Semibold;
      font-size: 48px;
  }
  .label__str{
    
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
  .at-avatar{
    background:none
  }
  .at-card__content {
    position:relative;
    padding:0;
  }
  .at-card__content-info {
    position:relative;
    padding:24px;
    .deleteBox{
      position:relative;
      left:-140px;
    }
    .soldout{
      &.delete{
        position:absolute;
        top:0;
        right:calc(-24rpx - 2pt);
        width:140px;
        height:100%;
        background:#FF5656;
        .text{
          color:#FFFFFF
        }
      }
      position:absolute;
      right:0;
      top:0;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-flow: column;
      width:100%;
      height:100%;
      background:rgba(135,135,135,.3);
      z-index:2;
      .remove{
        .at-avatar{
          left:0;
          width:18pt;
          height:23pt
          .at-avatar__img{
            height:18pt
          }
        }
      }
      .text{
        width:100%;
        text-align:center;
        font-family: PingFangSC-Regular;
        font-size: 32rpx;
        color: #2E1C14;
        letter-spacing: 0;
        text-align: center;
      }
    }
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
    background:#none;
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