<template>
  <footer>
    <div class="inner-cont-wrap clearfix">
    <div class="privacy-info">
      <ol class="privacy-info-list">
        <li> <a href="http://supercell.com/en/parents/ko/" target="_blank">보호자를 위한 안내</a></li>
        <li><a href="http://supercell.com/en/terms-of-service/ko/" target="_blank">서비스 이용약관</a></li>
        <li><a href="https://supercell.helpshift.com/a/clash-royale/?p=web" target="_blank">문의하기</a></li>
        <li class="last-child"><a href="http://supercell.com/en/privacy-policy/ko/" target="_blank">개인정보 보호정책</a></li>
        </ol>
      <div class="logos download-list">
          <a href="https://itunes.apple.com/kr/app/keullaesi-loyal/id1053012308?mt=8" target="_blank" onclick="" class="apple" v-if="this.isSmartPhone && this.isApple" v-on:click="gaEvent('MASTER_footer_apple')"></a>
          <a href="https://play.google.com/store/apps/details?id=com.supercell.clashroyale&hl=ko" target="_blank" onclick="" class="google" v-if="this.isSmartPhone && !this.isApple" v-on:click="gaEvent('MASTER_footer_google')"></a>

          <a href="https://itunes.apple.com/kr/app/keullaesi-loyal/id1053012308?mt=8" target="_blank" onclick="" class="apple" v-if="!this.isSmartPhone" v-on:click="gaEvent('MASTER_footer_apple')"></a>
          <a href="https://play.google.com/store/apps/details?id=com.supercell.clashroyale&hl=ko" target="_blank" onclick="" class="google" v-if="!this.isSmartPhone" v-on:click="gaEvent('MASTER_footer_google')"></a>
        </div>
      </div>
    <div class="policy-share">
      <div class="txt-box">
          <a href="http://supercell.com/" target="_blank" v-on:click="this.$ga.event('category')">Supercell</a>
          <a href="http://supercell.com/en/fan-content-policy/ko/" target="_blank" class="last-child" v-on:click="this.$ga.event('category')">Fan Content Policy </a>
      </div>
      <div class="logo-box">
          <a href="https://www.facebook.com/ClashRoyaleKorea/?fref=ts" target="_blank" class="sns-fb"></a>
          <a href="https://www.youtube.com/channel/UCgT2gPsXQ0jqb3poL5wN31Q" target="_blank" class="sns-yt"></a>
      </div>
    </div>
  </div>
    <!--<p>Copyright Clash Royale corp. all rights reserved.</p>-->
  </footer>
</template>

<script>
    export default {
        name: "footerWrapper",
        data:function(){
          return{
            isSmartPhone:'',
            isApple:'',
          }
        },
        watch:{

        },
        methods:{
            detect:function(){
              if( window.detectDevice.smartphone ){
                  this.isSmartPhone = true;
                if( window.detectDevice.os === 0 ){
                  this.isApple = false;
                }else if( window.detectDevice.os === 1 ){
                  this.isApple = true;
                }
              }
            },
            gaEvent:function( category ){
              this.$ga.event( category,'action' );
            },
        },
        mounted:function(){
            this.detect();
        },
    }
</script>

<style scoped lang="scss">
  footer{ width:100%; background-color:#000; height:220px;letter-spacing: 0;
    .inner-cont-wrap{ padding: 0 10%; max-width: 1600px; margin: 0 auto;
      .privacy-info{ display:table;width:100%; margin:0 auto; padding:30px 0; border-bottom:1px solid #323232;
        ol.privacy-info-list{ font-size:0; display:table-cell; vertical-align:middle;
          li{ display:inline-block; margin-right:16px;
            a{ font-family:'NotoSansKR-medium';color:#ccc; font-size:12px;}
            a:hover{color:#fff}
          }
        }
        .logos{ display:block; float:right;
          .apple{background: url('../assets/img/btn_apple.png') no-repeat;width:112px;height:33px;display: inline-block;}
          .google{background: url('../assets/img/btn_google.png') no-repeat;width:112px;height:33px;display: inline-block;margin-left: 10px;}
        }
      }
      .policy-share{ display:table;
        width:100%; margin:0 auto; padding:30px 0;
        .txt-box{ display:table-cell; font-size:0; vertical-align: middle;
          a{ font-family:'NotoSansKR-medium';color:#858585; font-size:12px; margin-right:16px;
            &.last-child{ margin-right:0}
          }
          a:hover{ color:#fff}
        }
        .logo-box{ float:right; font-size:0;
          a{margin-right:16px; @include opacity(0.3);
            &.sns-fb{background: url('../assets/img/sns_fb.png') no-repeat;width:19px;height:19px;display: inline-block;}
            &.sns-yt{background: url('../assets/img/sns_yt.png') no-repeat;width:19px;height:19px;display: inline-block;margin-right:0 ;}
          }
          a:hover{
            @include opacity(1);
          }
        }
      }
    }
  }

  @media screen and (max-width:767px) {
    footer{ overflow: hidden; width:100%; background-color:#000; height:auto;
      img{width:100%;}
      .inner-cont-wrap{ width:90%; margin:0 auto; padding:0;
        .privacy-info{ display:table;width:auto; margin:0 auto; padding:14.7% 0; border-bottom:1px solid #323232;
          ol.privacy-info-list{ font-size:0; display:block; vertical-align:middle; text-align:center;
            li{ display:inline-block; margin-right:6.53%;
              a{ font-family:'NotoSansKR-medium';color:#fff; @include calFontSize(38);}
              a:hover{color:#fff}
            }
            li.last-child{ margin-right:0; margin-top:6.73%;}
          }
          .logos{ display:block; float:none; width:41%; margin:0 auto; margin-top:13%;
            &.m-apple{
              .google{ display:none }
            }
            &.m-android{
              .apple{ display:none }
            }
            .apple{background: url('../assets/img/btn_apple_m.png') no-repeat;width:100%;height:(121/402*41)*0.9vw;background-size: contain;}
            .google{background: url('../assets/img/btn_google_m.png') no-repeat;width:100%;height:(121/405*41)*0.9vw;background-size: contain;margin-left: 0;}
          }
        }

        .policy-share{ display:block; text-align:center;
          width:auto; margin:0 auto; padding:13% 0;
          .txt-box{ display:block; font-size:0; vertical-align: middle; padding-bottom: 12.44%;
            a{ font-family:'NotoSansKR-medium';color:#858585; margin-right:6.53%; @include calFontSize(38);
              &.last-child{ margin-right:0}
            }
            a:hover{ color:#858585}
          }
          .logo-box{ float:none; font-size:0; text-align:center;
            a{ display:inline-block; width:8%; margin-right:7.14%; @include opacity(0.3);vertical-align: top;
              &.sns-fb{background: url('../assets/img/sns_fb_m.png') no-repeat;width:8%;height:(79/78*8)*0.9vw;background-size: contain;}
              &.sns-yt{background: url('../assets/img/sns_yt_m.png') no-repeat;width:8%;height:(79/70*9)*0.9vw;background-size: contain;margin-right:0;}
            }
            a:hover{
              @include opacity(0.3);
            }
          }
        }
      }
    }
  }
</style>
