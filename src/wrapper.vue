<template>
  <div class="wrapper hold">
    <nav-wrapper class="nav-wrapper"></nav-wrapper>
    <div class="con-dim" :class="[ isShow===true ? 'onShow' : '' ]"></div>
    <div class="popup" :class="[ isShow===true ? 'onShow' : '' ]" @click="togglePop">
      <popup></popup>
    </div>

    <div class="inner-wrap">
      <div class="content-holder">
        <key-visual></key-visual>
        <main-content id="mainContent_Tabs"></main-content>
      </div>
    </div>
    <!--<transition name="fade">-->
    <!--<master-reg v-on:sendJson="getsetJson" v-if="numActive === 1"></master-reg>-->
    <!--</transition>-->
    <!--<transition name="fade">-->
    <!--<master-finish v-if="numActive === 2" v-on:resetEvent="reset"></master-finish>-->
    <!--</transition>-->

    <footer-wrapper></footer-wrapper>
  </div>
</template>

<script>

  import keyVisual from './components/keyVisual'
  import mainContent from './components/mainContent'
  import masterReg from './components/masterReg'
  import navWrapper from './components/navWrapper'
  import footerWrapper from './components/footerWrapper'
  import popup from './components/popup'
  import viewport from "./assets/js/vendor/viewport";
  export default {
    name: "wrapper",
    components: {
      keyVisual,mainContent,footerWrapper,masterReg,navWrapper,popup
    },
    data:function(){
      return{
        winW:'',
        winH:'',
        scrollTop: '' ,
        scrollBottom:'',
        motionTarget:'',
        numActive: 0,
        answer : {},
        userInfo: {},
        isShow: false,
      }
    },
    methods: {
      init:function(){
        document.getElementById("app").classList.add('onShow');
        this.kvMotion();
      },
      reset: function(){
        this.answer = {};
        this.userInfo = {};
      },
      togglePop: function(){
        this.isShow = !this.isShow;
        if(this.isShow === true){
          document.body.classList.add("hold");
        }else{
          document.querySelector('body').classList.remove('hold');
        }
      },
      addEvent:function(){
        window.addEventListener('resize', this.resizeHandler);
        window.addEventListener('scroll', this.scrollHandler);
        this.resizeHandler();
        this.scrollHandler();
        this.$eventHub.$on('pageDatas',this.getsetPageData);
        this.$eventHub.$on('answerDatas',this.getsetAnswerData);
        this.$eventHub.$on('userDatas',this.getsetUserData);
        this.$eventHub.$on('togglePop',this.togglePop);
      },
      getsetPageData : function( data ){
        this.numActive = data.numActive;
      },
      getsetAnswerData : function( data ){
        this.answer = data.answer;
        this.numActive = data.numActive;
      },
      getsetUserData : function( data ){
        this.userInfo = data.userInfo;
        this.numActive = data.numActive;
      },
      getsetJson: function (){
        let that = this;
        event.preventDefault();
        const baseURI = '/cms/json/setData_master_join.php?';
        this.$http.post(baseURI, 'user_name='+this.userInfo.userName+'&user_phonenum='+this.userInfo.userPhone+'&user_answer='+this.answer.q1+','+this.answer.q2+','+this.answer.q3+','+this.answer.q4+','+this.answer.q5)
          .then(function( response ){
            if(response.data.result === true){
              that.numActive = 2;
            }else{
              that.numActive = 1;
              alert(response.data.message);
            }
          })
      },
      resizeHandler:function(){
        viewport.change();
        this.winW = window.innerWidth;
        this.winH = window.innerHeight;
        this.motionTarget = document.body.getElementsByClassName('motion');
      },
      scrollHandler:function(){
        this.scrollTop = window.pageYOffset;
        this.scrollBottom = this.scrollTop + this.winH;
      },
      motionInteraction:function(point){
        for( let i=0; i<this.motionTarget.length; i++ ){
          if(point === undefined){
            point = 1;
          }
          if( this.motionTarget[i].dataset.point !== undefined ){
            point = this.motionTarget[i].dataset.point;
          }
          if( this.scrollBottom > this.motionTarget[i].offsetTop + this.motionTarget[i].offsetHeight * point ){
            this.motionTarget[i].classList.add('onShow');
          }
        }
      },
      changeNumber: function(num){
        this.numActive = num;
      },
      kvMotion:function(){
        document.getElementById("kv").classList.add('onShow');
      }
    },
    created:function(){},
    beforeMount:function(){},
    mounted:function(){
      let that = this;
      window.addEventListener('load', function(){
        that.init();
        that.addEvent();
      });
    },

  }
</script>
<style lang="scss">
  @keyframes ani-view-on{ 0%{opacity:0} to {opacity:1} }

  body{
    min-width:1200px; background-color:#000;
    #app{ background-color:#0a1630; }
    &.hold{overflow: hidden;}
    .con-dim{position: fixed;width: 100%;height: 100%;background-color: rgba(0,0,0,0.7);z-index: 20;visibility: hidden;@include opacity(0);
      &.onShow{visibility: visible;@include opacity(1);}
    }
    .popup{position: fixed;z-index: 100;@include opacity(0);
      .popup-wrap{position: fixed;top: 50%;left: 50%;@include px-convert(width, 500);@include px-convert(height, 491);@include px-convert(margin-left, -(500/2));@include px-convert(margin-top, -(491/2));@include opacity(1);@include transform(translateY(50%));pointer-events: none;
        >img{width: 100%;}
      }
      &.onShow{visibility: visible;@include opacity(1);
        .popup-wrap{@include opacity(1);@include transform(translateY(0));z-index: 100;@include css-value-transition('transform 0.35s cubic-bezier(0.605, 0.090, 0.435, 1.365), opacity 0.3s cubic-bezier(0.605, 0.090, 0.435, 1.365)');cursor: pointer;pointer-events: auto;
        }
      }
    }
    .inner-wrap{ width:100%; margin:0 auto;
      .content-holder{ width:inherit; margin:0 auto;
        .tab-view-list{
          >li{ display: none; }
        }
      }
    }
    &.main-selected-1{
      .tab-btn-list{
        li:nth-child(1){ background:{ color:#ebca56; }
          a{ color:#fff; }
        }
      }
      .tab-view-list{
        li:nth-child(1){ display: block; animation: ani-view-on .5s alternate ease-out; opacity:1;
          .about-holder{  }
        }
      }
    }
    &.main-selected-2{
      .tab-btn-list{
        li:nth-child(2){ background:{ color:#ebca56; }
          a{ color:#fff; }
        }
      }
      .tab-view-list{
        /*>li:nth-child(2){ display: block; @include px-convert(width, 1600);@include px-convert(margin, 0 auto);background:{ image: url('assets/img/vote_bg.jpg');size: 100%;position: 0 0;repeat: no-repeat; };animation: ani-view-on .5s alternate ease-out; opacity:1; }*/
        > li:nth-child(2){ display: block; animation: ani-view-on .5s alternate ease-out; opacity:1; }
      }
    }
    footer{height: 270px;background-color: #000;}
  }

  @include break-point($mobile) {
    body{ min-width:0;
      .popup{position: fixed;z-index: 100;@include opacity(0);
        .popup-wrap{position: fixed;top: 50%;left: 50%;@include vw-convert-mo(width, 761);@include vw-convert-mo(height, 700);@include vw-convert-mo(margin-left, -(761/2));@include vw-convert-mo(margin-top, -(700/2));@include opacity(1);@include transform(translateY(50%));pointer-events: none;}
        &.onShow{visibility: visible;@include opacity(1);
          .popup-wrap{@include opacity(1);@include transform(translateY(0));z-index: 100;@include css-value-transition('transform 0.35s cubic-bezier(0.605, 0.090, 0.435, 1.365), opacity 0.3s cubic-bezier(0.605, 0.090, 0.435, 1.365)');cursor: pointer;pointer-events: auto;
          }
        }
      }
      .inner-wrap{ width:auto; margin:0;
        .content-holder{ width:auto;
        }
      }
      &.main-selected-1{
        .tab-view-list{
          li:nth-child(1){ height:auto; }
        }
      }
      &.main-selected-2{
        .content-holder{ width:auto; margin-bottom: calWidth(100); }
        .tab-view-list{
          >li:nth-child(2){width: 100%;}
        }
      }
      footer{ }
    }
  }
</style>
