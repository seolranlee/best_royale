<template>
    <div class="star-wrapper">
      <ul class="star-list onShow">
        <li class="star-1"></li>
        <li class="star-2"></li>
        <li class="star-3"></li>
        <li class="star-4"></li>
      </ul>
    </div>
</template>

<script>


  export default {
    name: 'starLight',
    mounted:function(){
    }
  }
</script>

<style scoped lang="scss">
  $tW: 1080;
  $tH: 1484;
  @keyframes star-light {
    0% { @include opacity(0);}
    50% { @include opacity(1);}
    100% { @include opacity(0);}
  }
  .star-wrapper{width: 100%;height: inherit;overflow: hidden;
    ul.star-list{position: relative;width: 1080px; height: $tH+px;margin: 0 auto;
      li{@include opacity(0);}
      li.star-1{position:absolute;top: percentage(84/$tH);left: percentage(97/$tW);width: percentage(508/$tW); height: percentage(552/$tH); background:{image: url('../assets/img/about_starlight01.png');position: 0 0;size: 100% 100%;repeat: no-repeat;}}
      li.star-2{position:absolute;top: percentage(182/$tH);right: percentage(104/$tW);width: percentage(400/$tW); height: percentage(569/$tH); background:{image: url('../assets/img/about_starlight02.png');position: 0 0;size: 100% 100%;repeat: no-repeat;}}
      li.star-3{position:absolute;top: percentage(590/$tH);left: percentage(60/$tW);width: percentage(276/$tW); height: percentage(815/$tH); background:{image: url('../assets/img/about_starlight03.png');position: 0 0;size: 100% 100%;repeat: no-repeat;}}
      li.star-4{position:absolute;top: percentage(843/$tH);right: percentage(15/$tW);width: percentage(619/$tW); height: percentage(1252/$tH); background:{image: url('../assets/img/about_starlight04.png');position: 0 0;size: 100% 100%;repeat: no-repeat;}}
      &.onShow{
        li{}
        li.star-1{animation:star-light 3.5s 1s linear infinite;}
        li.star-2{animation:star-light 3.2s 0s linear infinite;}
        li.star-3{animation:star-light 3s 2s linear infinite;}
        li.star-4{animation:star-light 2.5s 3s linear infinite;}
      }
    }
  }

  @include break-point($mobile) {
    $tH: 2420;
    .star-wrapper{width: 100%;height: inherit;
      ul.star-list{position: relative;@include vw-convert-mo(width,1080); @include vw-convert-mo(height,$tH); margin: 0 auto;
        li{@include opacity(0);}
        li.star-1{position:absolute;top: percentage(84/$tH);left: percentage(97/$tW);width: percentage(508/$tW); height: percentage(552/$tH); background:{image: url('../assets/img/about_starlight01.png');position: 0 0;size: 100% 100%;repeat: no-repeat;}}
        li.star-2{position:absolute;top: percentage(182/$tH);right: percentage(104/$tW);width: percentage(400/$tW); height: percentage(569/$tH); background:{image: url('../assets/img/about_starlight02.png');position: 0 0;size: 100% 100%;repeat: no-repeat;}}
        li.star-3{position:absolute;top: percentage(590/$tH);left: percentage(60/$tW);width: percentage(276/$tW); height: percentage(815/$tH); background:{image: url('../assets/img/about_starlight03.png');position: 0 0;size: 100% 100%;repeat: no-repeat;}}
        li.star-4{position:absolute;top: percentage(843/$tH);right: percentage(15/$tW);width: percentage(619/$tW); height: percentage(1252/$tH); background:{image: url('../assets/img/about_starlight04.png');position: 0 0;size: 100% 100%;repeat: no-repeat;}}
        &.onShow{
          li{}
          li.star-1{animation:star-light 3.5s 1s linear infinite;}
          li.star-2{animation:star-light 3.2s 0s linear infinite;}
          li.star-3{animation:star-light 3s 2s linear infinite;}
          li.star-4{animation:star-light 2.5s 3s linear infinite;}
        }
      }
    }
  }
</style>
