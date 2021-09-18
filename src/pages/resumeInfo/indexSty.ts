import { styled } from 'linaria/react'
import { View } from '@tarojs/components'

export const IndexMain = styled(View)`
.share{
    background:none;
    border:none;
    outline:none;
    text-align:left;
    &::after{
        display:none
    }
}
background:#F6F6F6
.header__search{
    .img__share{
        .at-avatar {
            width:16pt;
            height:16pt;
            margin-top:2pt;
            .at-avatar__img{
                float:left;
                width:14pt;
                height:14pt;
            }
        }
        
    }
    height:100pt; 
    background:#F9612A;
    
    .details{
        padding-top:8pt;
        padding-left:12pt;
    }
    .at-avatar {
        width:13pt;
        height:17pt;
        margin-left:14pt;
        background:none
        &.media {
            margin-top:1pt;
            .at-avatar__img{
                float:left;
                width:13pt;
                height:16pt;
            }
        }
        &.add{
            width:16pt;
        }
    }
   .at-avatar__img{
    height:14pt;
    width:14pt;
   
   }
   .text__score{
    color:#fff;
    margin-left:14pt;
   }
   .text__name{
       float:left;
       color:#fff;
   }
   .text__info{
       padding-left:13pt;
       display:inline-block;
       transform:translateY(8pt);
       font-size:10pt;
       color:#fff;
       opacity: 0.8;
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
      border:none;
      margin-bottom:8pt;
  }
  .at-card__content{
      padding-left:0pt;
      padding-right:0pt;
      padding-bottom:0pt;
  }
  .text_tags{
      font-family: PingFangSC-Semibold;
      font-size: 10pt;
      padding-left:8pt;
      font-weight:500;
      color: #2E1C14;
      float:left;
  }
  .at-avatar{
      background:#fff;
      width:12pt;
      height:22pt;
      position:relative;
      left:5pt;
      .at-avatar__img{
          height:12pt;
      }
      &.add{
          width:16pt;
          height:16pt
          top:0pt;
          .at-avatar__img{
              float:left;
              height:16pt;
          }
      }
  }

  .tags__2{
      .at-row{
          display:flex;
          justify-content:space-around;
          .at-col-8 {
                width:70%;
            }
      }
    .at-tag{
        .at-col{
            float:left
        }
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
        background:none;
        top:6pt;
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
        margin-left:3pt;
        color: #ACACAC;
    }
    .img__download{
        margin-left:12pt;
    }
    .row__down__count{
        background-color:#fff;
        border:none;
        margin-left:-6pt;
    }
}

`