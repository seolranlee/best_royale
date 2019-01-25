<template>
    <div id="kv" class="kv">
        <div class="img-box"></div>
        <a href="./#vote" v-bind:class="{ inActive : isBtnInActive }" v-scroll-to="{
                    el: '.tab-view-list',
                    duration: 750,
                    offset: 0,
                    force: true,
                    cancelable: true,
                    onStart:onStart,
                    x: false,
                    y: true
        }"></a>
    </div>
</template>

<script>
    export default {
        name: "keyVisual",
        data:function(){
          return{
            isBtnInActive:false,
            arrHash : [],
            currentHash :'',
          }
        },
        watch:{
          currentHash:function(){
            let hash = window.location.hash;
            this.currentHash = hash.split('/')[0];
            this.currentHash = hash.split('?')[0];
            this.currentHash === '#about' ? this.isBtnInActive = false : this.isBtnInActive = true
          }
        },
        methods:{
          addEvent:function(){
            this.currentHash = window.location.hash
            window.addEventListener('hashchange', this.getsetCurrentHash);
            //console.log( 'init Hash = ',this.currentHash )
          },
          getsetCurrentHash:function( e ){
            this.currentHash = window.location.hash
            //console.log( 'detected Hash = ',this.currentHash )
          },
          onStart:function(){
            location.href="./#vote";
          }
        },
        mounted:function(){
          this.addEvent();
        },
    }
</script>

<style scoped lang="scss">
  .kv{ width:100%; margin:0 auto; height:1000px; background:{ image:url("../assets/img/kv_bg_gradient.png");color:#09122c; repeat:repeat-x; }
    .img-box{ width:inherit; height:inherit; margin:0 auto; max-width:1600px; background:{ image:url("../assets/img/kv.jpg");color:#09122c; repeat:no-repeat; position-x: center; }; }
    a{ display:block; width:655px; height:167px; margin:-219px auto 0; background:{ image:url("../assets/img/kv_btn.png"); }
      &.inActive{ cursor:default; background:{ position-y:bottom; }}
    }
  }

  @include break-point($mobile) {
    .kv{ width:100%; @include vw-convert-mo('margin',170 auto 0); @include vw-convert-mo('height',1280); background:{ image:url("../assets/img/kv_bg_gradient.png");color:#09122c; repeat:repeat-x; }
      .img-box{ height:inherit; margin:0 auto; max-width:none; background:{ image:url("../assets/img/kv_m.jpg");color:#09122c; size:100%; repeat:no-repeat; position-x: center; }; }
      a{ display:block; @include vw-convert-mo('width',779);@include vw-convert-mo('height',196);@include vw-convert-mo('margin',-214 auto 0);background:{ image:url("../assets/img/kv_btn.png"); size:100%; }
        &.inActive{ cursor:default; background:{ position-y:bottom; }}
      }
    }
  }
</style>
