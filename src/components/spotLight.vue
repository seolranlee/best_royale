<template>
    <div class="canvas-wrapper">
      <canvas id="canvas" width="800" height="1030" :style="{ width : this.canvasW+'px' }"></canvas>
    </div>
</template>

<script>
  export default {
    name: 'spotLight',
    data:function(){
      return{
        winW : 0,
        winH : 0,
        canvasW : 800,
        canvasH : 0
      }
    },
    watch:{
      winW:function(){
        this.winW <= 768 ? this.canvasW = this.winW * 1.25 : this.canvasW = 800
      }
    },
    mounted:function(){
      let that = this;
      let isCorrect = false;

      let spotLightCanvas = (function(){
        function _init(){
          let op = 0;
          let rot0 = 0;
          let rot1 = 0;
          let rot2 = 0;

          const DIS0 = 18;
          const DIS1 = 45;
          const DIS2 = 15;

          const COEFF0 = 0.055;
          const COEFF1 = 0.06;
          const COEFF2 = 0.03;

          draw();



          function draw(){
            const ctx = document.getElementById('canvas').getContext("2d");

            let $thumb0 = document.getElementById('circle0');
            let $thumb1 = document.getElementById('circle1');
            let $thumb2 = document.getElementById('circle2');

            rot0 += COEFF0;
            rot1 -= COEFF1;
            rot2 += COEFF2;


            let circle1 = { x:(205 + DIS0 - (10 + DIS0/2)) + (Math.sin(rot0) * DIS0), y:(18 + DIS0 - (10+DIS0/2)) + (Math.cos(rot0) * DIS0) }
            let circle2 = { x:(480 + DIS1 ) + (DIS1) - (10 + DIS1/2), y:( 216 ) + (DIS1 - ( 10 + DIS1/2)) }
            let circle3 = { x:(150 + DIS2) + (Math.cos(rot2) * DIS2) - (20 + DIS2/2), y:(502 ) + (Math.sin(rot2) * DIS2) - (20 + DIS2/2) }


            ctx.clearRect(0,0,800,1030);
            ctx.globalCompositeOperation = "lighter";


            //원 그리기
            ctx.beginPath();
            ctx.drawImage($thumb0, circle1.x, circle1.y);
            ctx.fill();
            ctx.restore();
            ctx.closePath();


            ctx.beginPath();
            ctx.save();
            if( op <= 1 && !isCorrect ){
              op += 0.01;
            }else{
              op -= 0.01;
              isCorrect = true;
            }
            if( op < 0 ) isCorrect = false;
            ctx.globalAlpha = Math.sin(Math.abs(op));



            ctx.drawImage($thumb1, circle2.x, circle2.y);
            ctx.fill();
            ctx.restore();
            ctx.closePath();


            ctx.beginPath();
            ctx.drawImage($thumb2, circle3.x, circle3.y);
            ctx.fill();
            ctx.restore();
            ctx.closePath();


            window.requestAnimationFrame(draw);
          }
        }
        return{
          init:_init
        }
      })();

      let addEvent = function(){
        window.onresize = resizeHandler;
      }

      function resizeHandler(){
        that.winW = window.innerWidth;
        that.winH = window.innerHeight;
      }


      addEvent();
      resizeHandler();
      spotLightCanvas.init();
    }
  }
</script>

<style scoped lang="scss">
  .canvas-wrapper{ width:800px; height:1430px; background-color:#0a1630; padding-top:50-30px;
    canvas{ position:absolute;  }
  }


  @include break-point($mobile) {
    .canvas-wrapper{ width:100%; /*@include vw-convert-mo( height,1430 ); */@include vw-convert-mo(padding-top, 50-30);
      canvas{ @include vw-convert-mo( left,-120 ); }
    }
  }
</style>
