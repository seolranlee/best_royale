<template>
  <div class="masterComplete">
    <div class="masterComplete-wrap">
      <progress-bar class="progress-bar"></progress-bar>
      <div class="img-holder">
        <div class="ribbon-box"></div>
        <div class="trophy-box"></div>
      </div>
      <h2>참여해 주셔서 감사합니다!</h2>
      <p>
        도전자 여러분들의 소중한 의견이<br>
        더 나은 클래시 로얄을 만듭니다.
      </p>
      <span class="particle"></span>
      <a href="./#about" class="btn_back"><span>이벤트 안내 보러가기</span></a>
    </div>

  </div>
</template>

<script>
  import progressBar from './progressBar';

  export default {
    name: "masterComplete",
    components: {progressBar},
    data: function(){
      return {
      }
    },
    methods: {
      addEvent: function(){
        this.$eventHub.$emit('progressDatas',{
          'currentStep': 11
        });
      }
    },
    mounted: function(){
      let that = this;
      that.addEvent();
    },

    created:function(){},
    beforeMount:function(){},
  }
</script>

<style lang="scss">
  .inner-wrap{
    .masterComplete{@include px-convert(width, 800);@include px-convert(margin, 119 auto 0);text-align: center;
      .masterComplete-wrap{position: relative;@include px-convert(width, 688);@include px-convert(margin, 0 auto);@include px-convert(padding, 126 94 110);background: {image: url('../assets/img/survey_bg.png');size: 100% auto;position: 0 0;repeat: no-repeat;};@include px-convert(padding-bottom, 284);
        .progress-bar{@include px-convert(margin-bottom, 170);}
        .img-holder{position: relative;@include px-convert(width, 279);@include px-convert(height, 146);@include px-convert(margin, 0 auto 53);
          .ribbon-box{position: absolute;bottom: 0;left: 0;@include px-convert(width, 279);@include px-convert(height, 48);background: {image: url('../assets/img/complete_ribbon.png');size: 100% 100%;position: 0 0;repeat: no-repeat;}}
          .trophy-box{position: absolute;top: 0;left: 50%;@include px-convert(width, 156);@include px-convert(height, 116);@include px-convert(margin-left, -(156/2));background: {image: url('../assets/img/complete_trophy.png');size: 100% 100%;position: 0 0;repeat: no-repeat;}}
        }
        h2{@include px-convert(margin-bottom, 44);@include px-font( $COC_Display_Bold, 40.3, 40 );color: #473400;letter-spacing: -0.025em;text-align: center;}
        p{@include px-convert(margin-bottom, 84);@include px-font( $NotoSans_Meduim, 22.52, 30.81 );color: #575757;letter-spacing: -0.04em;text-align: center;}
        .btn_back{display: inline-block;vertical-align: middle;position: relative;@include px-font( $NotoSans_Bold, 18.96, 35.56 );color: #00baff;border-bottom: 1px solid #00baff;
          &:before{display: inline-block;vertical-align: middle;content:'';@include px-convert(margin-right, 10);@include px-convert(width, 9);@include px-convert(height, 16);background: {image: url('../assets/img/complete_ico_back.png');size: 100% 100%;repeat: no-repeat;}}
        }
        .particle{position: absolute;@include px-convert(top, 239);left: 50%;display: block;@include px-convert(width, 512);@include px-convert(height, 680);@include transform(translateX(-50%));background: {image: url('../assets/img/complete_particle.png');position: 0 0;size: 100%;repeat: no-repeat;}}
      }
    }
  }

  @include break-point($mobile){
    .inner-wrap{
      .masterComplete{@include vw-convert-mo(width, 1080);@include vw-convert-mo(margin,0 auto);@include vw-convert-mo(padding, 61 0 86);text-align: center;
        .masterComplete-wrap{position: relative;@include vw-convert-mo(width, 1059);@include vw-convert-mo(height, 1797);@include vw-convert-mo(margin, 0 auto);@include vw-convert-mo(padding, 159 0 0);@include vw-convert-mo(padding-bottom, 284);background: {image: url('../assets/img/survey_bg_m.png');size: 100% auto;position: 0 0;repeat: no-repeat;};
          .progress-bar{@include vw-convert-mo(margin-bottom, 290);}
          .img-holder{position: relative;@include vw-convert-mo(width, 471);@include vw-convert-mo(height, 244);@include vw-convert-mo(margin, 0 auto 90);
            .ribbon-box{position: absolute;bottom: 0;left: 0;@include vw-convert-mo(width, 471);@include vw-convert-mo(height, 79);background: {image: url('../assets/img/complete_ribbon.png')}}
            .trophy-box{position: absolute;top: 0;left: 50%;@include vw-convert-mo(width, 263);@include vw-convert-mo(height, 193);@include vw-convert-mo(margin-left, -(263/2));background: {image: url('../assets/img/complete_trophy.png')}}
          }
          h2{@include vw-convert-mo(margin-bottom, 60);@include calFontSize_Low(40.3);color: #473400;letter-spacing: -0.025em;text-align: center;}
          p{@include vw-convert-mo(margin-bottom, 114);@include calFontSize_Low(22.52);color: #575757;letter-spacing: -0.04em;text-align: center;}
          .btn_back{display: inline-block;vertical-align: middle;position: relative;@include calFontSize_Low(18.96);color: #00baff;border-bottom: 1px solid #00baff;
            &:before{display: inline-block;vertical-align: middle;content:'';@include vw-convert-mo(margin-right, 14);@include vw-convert-mo(width, 16);@include vw-convert-mo(height, 28);background: {image: url('../assets/img/complete_ico_back.png');size: 100% 100%;repeat: no-repeat;}}
            span{display: inline-block;vertical-align: middle;}
          }
          .particle{position: absolute;@include vw-convert-mo(top, 400);left: 50%;display: block;@include vw-convert-mo(width, 863);@include vw-convert-mo(height, 1147);@include transform(translateX(-50%));background: {image: url('../assets/img/complete_particle.png');position: 0 0;size: 100%;repeat: no-repeat;}}
        }
      }
    }
  }
</style>
