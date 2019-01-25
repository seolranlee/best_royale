<template>
  <div class="about-holder">
    <spot-light class="spot-light"></spot-light>
    <star-light class="star-light"></star-light>
    <ul class="info">
      <li class="info-1">
        <div class="inner-info">
          <h1>
            <div class="invisible-images" style="opacity:0; visibility: hidden; display:none; z-index:-999; text-indent:-999px;">
              <img src="../assets/img/circle_0.png" id="circle0">
              <img src="../assets/img/circle_1.png" id="circle1">
              <img src="../assets/img/circle_2.png" id="circle2">
            </div>
            <span class="txt-1">
              <strong>2018 최고의 로얄 </strong>
              이벤트를 뽑는 설문에 참여해주세요!
            </span>
            <span class="txt-2">
              추첨을 통해 클래시 로얄<br>
              신상 양말 세트를 드립니다.
            </span>
          </h1>
          <div class="img-box gift"></div>
          <h2>
            <span class="txt-3">
              <em>연말 분위기가 물씬 나는</em>
              클래시마스 양말 세트<strong>(100명)</strong>
            </span>
            <i>기간 <span class="bar"></span> 2018.12.21 - 2018.12.28</i>
          </h2>
        </div>
        <div class="star-deco"></div>
        <div class="img-box hog"></div>
        <div class="btn-box">
          <h3>
            <span>
              도전자 여러분들의 소중한 의견이<br>
              더 나은 클래시 로얄을 만듭니다.
            </span>
            <a href="" v-on:click.prevent="toTabTest" v-scroll-to="{
                    el:'#mainContent_Tabs',
                    duration: 750,
                    offset:0,
                    force: true,
                    cancelable: true,
                    x: false,
                    y: true
        }">설문참여하기</a>
          </h3>

        </div>
      </li>
      <common-notes></common-notes>
    </ul>
  </div>
</template>

<script>
  import commonNotes from './commonNotes';
  import spotLight from './spotLight'
  import starLight from './starLight'


  export default {
        name: "tab1",
        components: { commonNotes,spotLight,starLight },
        methods:{
          toTabTest:function(event){
            location.href="./#vote"
          },
        }
    }
</script>

<style scoped lang="scss">
  .about-holder{
    .spot-light{ position:absolute; left:50%; top:0; overflow:hidden; @include px-convert(margin-left,0); transform:translateX(-50%)}
    .star-light{ position:absolute; left:0; top:0; }
    .info{ position:relative; width:100%;
      h1{ @include px-font( $COC_Display_Bold, 35, 41 ); letter-spacing: -0.04em; color:#443407; text-align:center; }
      h2{ @include px-font( $COC_Display_Bold, 54, 56 ); letter-spacing: -0.025em; color:#443407; text-align:center; }
      h3{ @include px-font( $NotoSans_Meduim, 22, 30 ); letter-spacing: -0.04em; color:#fff; text-align: center; }
      h4{ @include px-font( $NotoSans_Bold, 40, 50 ); letter-spacing: -0.05em; color:#414141; text-align: left; }
      p{ @include px-font( $NotoSans_Regular, 32, 54 ); letter-spacing: -0.03em; color:#414141; text-align: left; }
      span{}


      li{
        .inner-info{ @include px-convert(width,1080); margin:0 auto; }
      }


      .info-1{ position:relative; @include px-convert(height,1427);
        h1{ @include px-convert(padding, 150 0 0); color:#fff; text-shadow: 0px 10px 24px rgba(27, 34, 60, 0.7);
          span{ display:block;
            strong{ display:block; color:#ffd640; @include px-font( $COC_Display_Bold, 40, 41 );  }
          }
          span.txt-1{ @include px-convert(padding, 0 0 19); }
        }
        .img-box.gift{ position:absolute; @include px-convert(top,470); left:50%; @include px-convert(width,843); @include px-convert(height,430); @include px-convert(margin-left,-421); background:{ image:url("../assets/img/circle_2_gift.png"); repeat: no-repeat; } }
        h2{ @include px-convert(padding-top, 566); text-shadow: 0px 10px 24px rgba(27, 34, 60, 0.7);
          span.txt-3{ display:block; color:#ffda2c; @include px-font( $COC_Display_Bold, 32, 33 );
            em{ display:block; color:#fff; @include px-font( $COC_Display_Bold, 32, 33 );  }
            strong{ @include px-font( $COC_Display_Bold, 32, 33 ); }
          }
          span.bar{ display:inline-block; content:'&#124;'; background-color:#fff; width:1px; @include px-convert(height,15); @include px-convert(margin,0 8); }
          i{ display:block; color:#fff; letter-spacing:-0.04em; @include px-font( $NotoSans_Meduim, 19, 35); @include px-convert(margin-top,12); }
        }

        .star-deco{ background:{ image:url("../assets/img/sec2_star_deco.png"); repeat: no-repeat; size:100%; }; @include px-convert(width, 68); @include px-convert(height, 168); @include px-convert(margin, 6 auto 0);}
        .img-box.hog{ position:absolute; left:50%; bottom:0; @include px-convert(width, 260); @include px-convert(height, 252); @include px-convert(margin-left, -350);background:{ image:url("../assets/img/hog.png"); repeat: no-repeat; }}
        .btn-box{ @include px-convert(padding, 28 0 0 );
          h3{
            span{ display:block; color:#ced0d6; }
            a{ display:inline-block; color:#ceb10a; border-bottom:1px solid #ceb10a; @include px-convert(margin, 14 auto 0 auto );
              &:after{ display:block; content:''; @include px-convert(width, 10); @include px-convert(height, 31); @include px-convert(margin-left, 10); float:right; background:{ image:url('../assets/img/sec2_btn_deco.png'); repeat: no-repeat; position-y:center; } }
            }
          }
        }
      }
    }
  }


  @include break-point($mobile) {
    .about-holder{
      .spot-light{ position:absolute; left:50%; top:0; overflow:hidden; transform: translateX(-50%); }
      .star-light{ position:absolute; left:0; top:0; }
      .info{ position:relative; width:100%;
        h1{ @include vw-font-mo( $COC_Display_Bold, 68, 70 ); letter-spacing: -0.04em; color:#443407; text-align:center; }
        h2{ @include vw-font-mo( $COC_Display_Bold, 54, 56 ); letter-spacing: -0.025em; color:#443407; text-align:center; }
        h3{ @include vw-font-mo( $NotoSans_Meduim, 38, 52 ); letter-spacing: -0.04em; color:#fff; text-align: center; }
        h4{ @include vw-font-mo( $NotoSans_Bold, 40, 50 ); letter-spacing: -0.05em; color:#414141; text-align: left; }
        p{ @include vw-font-mo( $NotoSans_Regular, 32, 54 ); letter-spacing: -0.03em; color:#414141; text-align: left; }
        span{}


        li{
          .inner-info{ @include vw-convert-mo(width,1080); margin:0 auto; }
        }


        .info-1{ position:relative; @include vw-convert-mo(height, 2418);
          h1{ @include vw-font-mo( $COC_Display_Bold, 68, 70 ); @include vw-convert-mo(padding, 250 0 0); color:#fff; text-shadow: 0px 10px 24px rgba(27, 34, 60, 0.7);
            span{ display:block;
              strong{ display:block; color:#ffd640; @include vw-font-mo( $COC_Display_Bold, 68, 70 ); }
            }
            span.txt-1{ @include vw-convert-mo(padding, 0 0 35); }
            span.txt-2{ @include vw-font-mo( $COC_Display_Bold, 60, 70 ); }
          }
          .img-box.gift{ position:absolute; @include vw-convert-mo(top,790); left:0; width:100%; @include vw-convert-mo(height,725); margin-left:0; background:{ image:url("../assets/img/circle_2_gift_m.png"); repeat: no-repeat; size:100%; } }
          h2{ @include vw-convert-mo(padding-top, 960); height:auto; text-shadow: 0px 10px 24px rgba(27, 34, 60, 0.7);
            span.txt-3{ display:block; color:#ffda2c; @include vw-font-mo( $COC_Display_Bold, 54, 56 );
              em{ display:block; color:#fff; @include vw-font-mo( $COC_Display_Bold, 54, 55 );  }
              strong{ @include vw-font-mo( $COC_Display_Bold, 54, 55 ); }
            }
            span.bar{ display:inline-block; content:'&#124;'; background-color:#fff; width:1px; @include vw-convert-mo(height,15); @include vw-convert-mo(margin,0 8); }
            i{ display:block; color:#fff; letter-spacing:-0.04em; @include vw-font-mo( $NotoSans_Meduim, 32, 60); @include vw-convert-mo(margin-top,12); }
          }

          .star-deco{ @include vw-convert-mo(width, 115);@include vw-convert-mo(height, 271);  @include vw-convert-mo(margin, 6 auto 0);}
          .img-box.hog{ position:absolute; left:50%; bottom:0; @include vw-convert-mo(width, 438); @include vw-convert-mo(height, 425); margin-left: -54%; background:{ image:url("../assets/img/hog.png"); repeat: no-repeat; size:100%;}}
          .btn-box{ @include vw-convert-mo(padding, 55 0 0 );
            h3{
              span{ display:block; color:#ced0d6; }
              a{ display:inline-block; color:#ceb10a; border-bottom:1px solid #ceb10a; @include vw-convert-mo(margin, 14 auto 0 auto );
                &:after{ display:block; content:''; @include vw-convert-mo(width, 14); @include vw-convert-mo(height, 45); @include vw-convert-mo(margin-left, 10); float:right; background:{ image:url('../assets/img/sec2_btn_deco.png'); repeat: no-repeat; position-y:center; size:100%}; vertical-align:middle }
              }
            }
          }
        }
      }
    }

  }
</style>
