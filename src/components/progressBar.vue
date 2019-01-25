<template>
    <div class="progress-holder">
      <div id="sitePointer" class="step-pointer" :style="{ left:pointerX+'px' }" v-bind:class="{ movePointer : isMovePointer}">
        <span id="num" class="num" v-bind:class="{ ['onQ' + currentStep] : isChanged }"></span>
        <span class="step-pointer-obj"></span>
      </div>
      <div class="track-sh">
        <span class="progress">
          <em class="bg"></em>
        </span>
      </div>
      <div class="track">
        <span class="progress" :style="{ width:progressWidth+'px'}">
          <em class="bg"></em>
        </span>
      </div>
    </div>
</template>

<script>
  let barWidth = 442;
  let pointer_w = 72;
  const MAXSTEP = 12;

  export default {
    name: 'progressBar',
    watch:{
      winW:function(){
        this.winW <= 768 ? barWidth = this.winW: barWidth = 442;
        if( this.winW <= 768 ){
          barWidth = this.winW * 0.6935;
        }else {
          barWidth = 442;
        }
      }
    },
    data:function(){
      return{
        winW:0,
        winH:0,
        currentStep:1,
        pointerX:(barWidth / MAXSTEP),
        progressWidth:barWidth / MAXSTEP,
        isMovePointer:false,
        isChanged:true,
        pointerW:0
      }
    },
    methods:{
      next:function( data ){
        //console.log( data.currentStep )
        if( data.currentStep <= 11 ){
          this.currentStep = data.currentStep + 1;
          if( this.currentStep <= MAXSTEP ){
            let multiple = (barWidth / MAXSTEP) * this.currentStep;
            this.pointerX = ((barWidth / MAXSTEP) * this.currentStep);
            this.progressWidth = multiple;
            this.isMovePointer = true;
          }
        }
      },
      resizeHandler:function(){
        this.winW = window.innerWidth;
        this.winH = window.innerHeight;
      },
      addEvent:function(){
        this.$eventHub.$on('progressDatas',this.next);
        let thatThis = this;
        window.onresize = this.resizeHandler;
        this.resizeHandler();

        document.getElementById('sitePointer').addEventListener("animationend", function(){
          document.getElementById('sitePointer').classList.remove('movePointer');
          thatThis.isMovePointer = false;
        }, false);
      }
    },
    mounted:function(){
      this.addEvent();
      //this.next( 3 );
    },
    computed:{
      /*bgStyles:function(){
        return{
          'background-size' : (this.winW * 0.6935)+'px' + '100%'
        };
      }*/
    }
  }
</script>

<style scoped lang="scss">
  // 0.05 : 0.2
  // 0.025 : 0.1
  $scaleX_Value : 0;
  @function calScaleX( $scaleY_Multiple ){
    @if( $scaleY_Multiple > 1 ){
      @return 1 - ((abs( 1 - $scaleY_Multiple )) * 0.35);
    }@else{
      @return 1 + ((abs( 1 - $scaleY_Multiple )) * 0.35);
    }
  }

  .progress-holder{ position:relative;
    $progressEase : cubic-bezier(0.385, 0.000, 0.060, 0.990);
    $trackWidth : 442;
    $trackHeight : 77;
    @keyframes scaleElastic {
      0%{ transform:scale(1); }
      50%{ transform:scale(calScaleX(0.8),0.8); }
      80%{ transform:scale(calScaleX(1.03),1.03); }
      100%{ transform:scale(1); } // 원위치
    }

    @include px-convert(width, $trackWidth); height:$trackHeight+px; @include px-convert(margin,0 auto);
    .step-pointer{ position:absolute; @include px-convert(left, -38); top:0; @include css-value-transition('left 0.35s '+$progressEase+''); @include transform-origin(center, bottom); margin-left:-25px;
      .step-pointer-obj{ display:block; @include px-convert(width, 45); @include px-convert(height, 54);background:{ image:url("../assets/img/step_pointer.png"); repeat: no-repeat; } }
      .num{ display:block; position:absolute; left:50%; top:50%; color:#98740b; @include px-font( $NotoSans_Bold, 14, 14); @include transform( translate(-50%,-100%) );
        &:after{ content:"1"; }
        $numArr :"1" "2" "3" "4" "5" "6" "7" "8" "9" "10" "11" "12";
        @for $i from 1 through 12{
          &.onQ#{$i}{
            &:after{ content:nth($numArr,$i); };
          }
        }
      }
      &.movePointer{ animation: scaleElastic 0.35s $easeInOutCubic; }
    }
    .track{ position:absolute; bottom:0; width:inherit; @include px-convert(height, 18); border-radius:15px; overflow:hidden;
      .progress{ display:block; width:$trackWidth/12+px; height:inherit; border-radius:15px; overflow:inherit; @include css-value-transition('width 0.35s '+ $progressEase+'');
        em{ display:block; width:inherit; height:inherit; background:{ image:url('../assets/img/bar_track.png'); repeat: no-repeat; } }
      }
    }
    .track-sh{ position:absolute; bottom:0; width:inherit; @include px-convert(height, 18); border-radius:15px; overflow:hidden;
      .progress{ display:block; width:100%; height:inherit; border-radius:15px; overflow:inherit; @include css-value-transition('width 0.35s '+ $progressEase+'');
        em{ display:block; width:inherit; height:inherit; background:{ color:#cabb9b; repeat: no-repeat; } }
      }
    }
  }

  @include break-point($mobile) {
    .progress-holder{ position:relative;
      $progressEase : cubic-bezier(0.385, 0.000, 0.060, 0.990);
      $trackWidth : 750;
      $trackHeight : 31;
      @keyframes scaleElastic {
        0%{ transform:scale(1); }
        50%{ transform:scale(calScaleX(0.8),0.8); }
        80%{ transform:scale(calScaleX(1.03),1.03); }
        100%{ transform:scale(1); } // 원위치
      }

      @include vw-convert-mo(width, $trackWidth); @include vw-convert-mo(height, 128); @include vw-convert-mo(margin,0 auto);
      .step-pointer{ position:absolute; @include vw-convert-mo(left, -38); top:0; @include css-value-transition('left 0.35s '+$progressEase+''); @include transform-origin(center, bottom); @include vw-convert-mo(margin-left, -(72 * 0.55));
        .step-pointer-obj{ display:block; @include vw-convert-mo(width, 72); @include vw-convert-mo(height, 86);background:{ image:url("../assets/img/step_pointer.png"); repeat: no-repeat; size:100%; } }
        .num{ display:block; position:absolute; left:50%; top:50%; color:#98740b; @include vw-font-mo( $NotoSans_Bold, 22, 22); @include transform( translate(-50%,-100%) );
          &:after{ content:"1"; }
          $numArr :"1" "2" "3" "4" "5" "6" "7" "8" "9" "10" "11" "12";
          @for $i from 1 through 12{
            &.onQ#{$i}{
              &:after{ content:nth($numArr,$i); };
            }
          }
        }
        &.movePointer{ animation: scaleElastic 0.35s $easeInOutCubic; }
      }
      .track{ position:absolute; bottom:0; width:inherit; @include vw-convert-mo(height, $trackHeight); border-radius:15px; overflow:hidden;
        .progress{ display:block; @include vw-convert-mo( width,$trackWidth / 12 ); height:inherit; border-radius:15px; overflow:inherit; @include css-value-transition('width 0.35s '+ $progressEase+'');
          em{ display:block; width:inherit; height:inherit; background:{ image:url('../assets/img/bar_track_m.png'); repeat: no-repeat; size:69.35vw 100%; } }
        }
      }
      .track-sh{ position:absolute; bottom:0; width:inherit; @include vw-convert-mo(height, $trackHeight); border-radius:15px; overflow:hidden;
        .progress{ display:block; width:100%; height:inherit; border-radius:15px; overflow:inherit; @include css-value-transition('width 0.35s '+ $progressEase+'');
          em{ display:block; width:inherit; height:inherit; background:{ color:#cabb9b; repeat: no-repeat; size:100%;} }
        }
      }
    }
  }
</style>
