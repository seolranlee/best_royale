<template>
    <div>
      <div class="inner-cont-wrap clearfix">
      <div class="right-menu" v-show="isNavClicked" :class="{ on : isNavClicked }">
        <div class="right-menu-wrapper">
          <a href="" class="btn-rightmenu" v-on:click.prevent="isNavClick()">공식채널</a>
          <ul class="menus">
            <li class="first-child"><a href="https://www.facebook.com/ClashRoyaleKorea" target="_blank">페이스북</a></li>
            <li><a href="https://www.youtube.com/channel/UCgT2gPsXQ0jqb3poL5wN31Q" target="_blank">유튜브</a></li>
            <li><a href="http://post.naver.com/my/series/detail.nhn?seriesNo=163814&memberNo=25094419" target="_blank">네이버 포스트</a></li>
            </ul>
          </div>
        </div>
      <div class="dim" :class="{ on : isNavClicked }"></div>
      <nav class="top-menu">
        <div class="logo">
          <a href="index.html"></a>
          </div>
        <div class="btn-wrap">
          <ul class="btn-holder">
            <li class="channel">
              <a href="" target="_blank" class="btn-rightmenu" v-on:click.prevent="isNavClick()">
                <p>공식채널</p>
              </a>
            </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'navWrapper',
    data:function(){
      return{
        isNavClicked : false
      }
    },
    methods:{
      isNavClick : function( event ){
        this.isNavClicked = !this.isNavClicked
      }
    }
  }
</script>

<style scoped lang="scss">
  @mixin opacity($opacity) {
    opacity: $opacity;
    $opacityIE: $opacity * 100;
    filter: alpha(opacity=$opacityIE);
  }
  @mixin calFontSize( $fontSize,$WW:1080 ){ //VW
    font-size: ($fontSize / $WW) * 100 + vw;
  }


  .logo{ position:absolute; display: block; width:170px; height:84px; left:50%; top:18px; margin-left:-85px; z-index: 100 }
  .logo a{ display:block; width:inherit; height:inherit; background:url('../assets/img/common/common_logo.png'); }
  .dim{ display:none }
  .left-menu{ display:none }
  .wrapper{ overflow:hidden }
  nav{ position: fixed; top:0; z-index:11; width:100%; height:70px; background-color:#141414; font-size:0;  -webkit-transform: translateZ(0)}
  nav .btn-wrap{ position:relative; width: 93%; margin: 0 auto; padding-top:0 }
  nav .btn-wrap li{ display: inline-block; z-index:10 }

  nav a{ display:block; font-family:COC-Display-Light; z-index: 11; font-size:18px;}
  nav a.open-menu{ display:none }
  nav .introduce{ margin-right:54px }

  nav .btn-wrap .channel{ position:absolute; right:0; z-index: 10 }
  nav .btn-wrap .btn-holder li.first-child{ margin-right:55px }
  nav .btn-wrap .btn-holder li a{ padding:22px 0 }
  nav .btn-wrap .channel a p{ display:inline; font-family: COC-Display-Light; color:#fff; }
  nav .btn-wrap .channel a:after{ margin-left:13px; content:''; width:15px; height:8px; display: inline-block; background: url(../assets/img/common/navi/btn_menu.png) no-repeat; vertical-align: middle; margin-top:-1px;  }
  /* under768*/
  nav .btn-wrap .cafe_m_only{ display:none }


  /* right navi */
  .right-menu{width:100%; left:-3.5% }
  .right-menu.on{ position:fixed; display:block; z-index:30; font-family: COC-Display-Light; margin:0 auto }
  .right-menu.on .right-menu-wrapper{ position:absolute; width:150px; height:210px; left:auto; background:url('../assets/img/common/navi/navi_dropdown_bg.png') no-repeat; background-size:100% 100%; right:-31px }
  .right-menu.on .right-menu-wrapper > a{ display:block; font-family:COC-Display-Light; padding:22px 0 22px 25px; font-size:18px; color:#141414 }
  .right-menu.on .right-menu-wrapper > a:after{ margin-left:13px; content:''; width:15px; height:8px; display: inline-block; background: url(../assets/img/common/navi/btn_menu_on.png) no-repeat; vertical-align: middle }
  .right-menu.on .right-menu-wrapper ul.menus li{ padding-bottom:20px }
  .right-menu.on .right-menu-wrapper ul.menus li a{ display:block; color:#303030; font-size:17px; padding-left:25px; line-height: 1 }
  .right-menu.on .right-menu-wrapper ul.menus li.first-child{ padding:25px 0 20px }


  @media screen and (max-width:767px) {
    nav {position: absolute; min-width:320px; max-width:846px; height: auto;}
    nav a{ font-size:3.6vw }
    nav a.open-menu{ position:absolute; width:6.944%; display: block; margin:5.370% 0 5.370% 4.629% }
    nav .btn-wrap{ display:block; padding:0; margin: 15% 3.5% 0; }
    nav .btn-wrap li{ display:none }
    nav .btn-wrap .btn-holder li a{ padding:0 }
    nav .btn-wrap .channel{ position:absolute; right:0; top:0; display:block; margin-top: -10.5%; font-size: 2.5vw; padding-right:5.2% }
    nav .btn-wrap .channel a:after{ position:absolute; background:url('../assets/img/common/navi/btn_menu_m.png') no-repeat; width:15.555%; height:11px; background-size:100%; top:31%; right:0; margin-top:0 }

    .dim{ display:block; position:fixed; top:0; left:0; width:0; height:0; background:url('../assets/img/common/popup/dim.png'); z-index: 20; transition:opacity 0.4s linear; @include opacity(0); }
    .dim.on{ display:block; width:100%; height:100%; @include opacity(1);  }
    .logo{ position: absolute; display:block; width:31.944%; height: auto; left: 50%; top:0; margin:5.185% 0 0 -15.972% }
    .logo a{ display:block; width: 31.94vw; height: 15.55vw; background:url('../assets/img/common/common_logo_m.png') no-repeat; background-size:100%;}
    .left-menu{ position:fixed; display:block; left:0; z-index: 30; width:100%; height:100%; transform: translate(-100%,0) }
    .wrapper{ overflow:visible }


    /* Navi-left-menu */
    .left-menu.open{ position: fixed; top: 0; display:block; z-index: 30 }
    .left-menu.open.on{ transform: translate(0,0) }
    .left-menu.open.off{ transform: translate(-100%,0) }
    .left-menu.open.ease{
      -webkit-transition: all 300ms cubic-bezier(0.500, 0.005, 0.105, 1.000);
      -moz-transition: all 300ms cubic-bezier(0.500, 0.005, 0.105, 1.000);
      -o-transition: all 300ms cubic-bezier(0.500, 0.005, 0.105, 1.000);
      transition: all 300ms cubic-bezier(0.500, 0.005, 0.105, 1.000); /* custom */

      -webkit-transition-timing-function: cubic-bezier(0.500, 0.005, 0.105, 1.000);
      -moz-transition-timing-function: cubic-bezier(0.500, 0.005, 0.105, 1.000);
      -o-transition-timing-function: cubic-bezier(0.500, 0.005, 0.105, 1.000);
      transition-timing-function: cubic-bezier(0.500, 0.005, 0.105, 1.000); /* custom */
    }


    .left-menu.open .btn-wrap{ display:block; position: absolute; left: 0; top: 0; width:100%; height:100%; background-color:#222; margin:0; padding:0; z-index:30 }
    .left-menu.open .btn-holder{ display:block; width:77.777%; margin:0 auto; text-align:center; padding-top:53.148% }
    .left-menu.open .logo{ display:block; z-index:31; width: 44.537%; margin:19.537% 0 0 -22.268% }
    .left-menu.open .logo > a{ padding:0 }
    .left-menu.open .btn-holder li{ display:block; position:static; border-bottom:1px solid #424242; margin-top:0 }
    .left-menu.open .btn-holder li.introduce{ border-top:1px solid #424242 }
    .left-menu.open .btn-holder .channel{ display:none }
    .left-menu.open .btn-holder .channel a:after{ display:none}
    .left-menu.open .btn-holder .cafe_m_only{ display:block }
    .left-menu.open .btn-holder .channel a p{ display:block }

    .left-menu.open .introduce{ margin-right:0}
    .left-menu.open a{ display:block; font-size:4vw; padding:11.904% 0; font-family: COC-Display-Bold; font-weight:100 }
    /*.left-menu.open a:hover{ color:#488bf4 }*/
    .left-menu.open .btn-wrap > a.down-load{ display:block; width:37.222%; margin:15.476% auto 0; padding:0 }
    .left-menu.open .btn-wrap > a.btn-close{ display:block; position:absolute; top:0; font-size:0; width:4.629%; right: -4.629%; margin-top: 0%; padding: 9.657%;}


    /* divide device type */
    .left-menu.open .btn-wrap a.btn-apple{ display: none }
    .left-menu.open .btn-wrap a.btn-android{ display: none }

    .left-menu.open .btn-wrap.m-android a.btn-android{ display:block }
    .left-menu.open .btn-wrap.m-android a.btn-apple{ display:none }
    .left-menu.open .btn-wrap.m-apple a.btn-android{ display:none }
    .left-menu.open .btn-wrap.m-apple a.btn-apple{ display:block }

    /* .btn-wrap.m-android a.btn-android{ display:block }
     .btn-wrap.m-android a.btn-apple{ display:none }
     .btn-wrap.m-apple a.btn-android{ display:none }
     .btn-wrap.m-apple a.btn-apple{ display:block }*/


    /* Navi-right-menu */
    .right-menu{ left:0 }
    .right-menu.on{ width:auto; position:relative }
    .right-menu.on .right-menu-wrapper{ background:url('../assets/img/common/navi/navi_dropdown_bg_m.png') no-repeat; background-size:100%; top: 0; right:0; width:53.703%; height:auto; background-color: #fff; margin-top: 2.963%; margin-right: 3.2%; border-radius:6px }
    .right-menu.on .right-menu-wrapper ul.menus li{ padding:0 0 12% 0 }
    .right-menu.on .right-menu-wrapper ul.menus li a{ display: block; font-size: 5.555vw; padding-left:15.5% }
    .right-menu.on .right-menu-wrapper ul.menus li.first-child{ padding:20% 0 11% }

    .right-menu.on .right-menu-wrapper > a{ font-size:5.555vw; font-family: COC-Display-Light; padding:8% 0 0 15% }
    .right-menu.on .right-menu-wrapper > a:after{ background: url(../assets/img/common/navi/btn_menu_on_m.png) no-repeat; background-size: contain; position: absolute; left: auto; width: 10%; right:15%; top: 0; height: 29px; margin: 11% 0 0 0 }
  }


  @media screen and (max-device-width: 767px) and (orientation: landscape) {
    .left-menu{ width:33.437%; }
    .left-menu.open { width:33.437% }
    .left-menu.open a{ padding:0 }
    .left-menu.open .logo{ display:none }
    .left-menu.open .btn-holder{ text-align:left; width:72%; padding-top: 40.467%; padding-bottom: 30%; margin: 0 auto 0 19% }
    .left-menu.open .btn-holder li{ border:none }
    .left-menu.open .btn-holder li{ padding: 0 0 25.373% 0 }
    .left-menu.open .btn-holder li.introduce{ border-top:none }
    .left-menu.open .btn-holder li.event{ padding-bottom:0 }
    .left-menu.open .btn-wrap > a.down-load{ width: 62.616%; margin: 0 auto }
    .left-menu.open .btn-wrap > a.btn-close{ width: 7.788%; left: 0; padding:9.657%;}


    .right-menu.on .right-menu-wrapper{ width: 40%; margin-top: 3%; margin-right:3%; background:url('../assets/img/common/navi/navi_dropdown_bg_lm.png') no-repeat; background-size:100% 100% }
    .right-menu.on .right-menu-wrapper > a{ font-size:4vw; padding:7% 7% 7% 8% }
    .right-menu.on .right-menu-wrapper > a:after{ width:8%; left:auto; right:8% }

    .right-menu.on .right-menu-wrapper ul.menus li{ padding-bottom:7.5% }
    .right-menu.on .right-menu-wrapper ul.menus li.first-child{ padding:6% 0 7.5% }
    .right-menu.on .right-menu-wrapper ul.menus li a{ font-size: 4.0vw; padding-left: 9.793% }
  }
</style>
