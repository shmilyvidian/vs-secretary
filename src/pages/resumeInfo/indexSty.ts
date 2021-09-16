import { styled } from 'linaria/react'
import { View } from '@tarojs/components'

export const IndexMain = styled(View)`
background:#F6F6F6
.header__search{
    height:100pt; 
    background:#F9612A;
    
    .details{
        padding-top:8pt;
        padding-left:12pt;
    }
    .at-avatar {
        height:16pt;
        width:15pt;
        margin-left:14pt;
        background:none
        &.media {
            margin-top:1pt;
            .at-avatar__img{
                width:12pt;
            }
        }
        &.add{
            width:16pt;
        }
    }
   .at-avatar__img{
    height:14pt;
    width:14pt;
    transform:translateY(-6pt);
   
   }
   .text__score{
    color:#fff;
    margin-left:14pt;
   }
   .text__name{
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
      top:-4pt;
      left:6pt;
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