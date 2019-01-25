<template>
  <div class="userReg">
    <div class="userReg-wrap">
      <h1>설문조사</h1>
      <fieldset class="insert-user-data">
        <legend>개인 정보 입력 폼</legend>
        <h2>개인 정보 입력</h2>
        <strong>본인 확인 및 당첨 시 경품 제공을 위한 정보</strong>
        <div class="forms">

          <div class="form form-group-1">
            <label for="userName">이름</label>
            <input type="text" id="userName" maxlength="10" v-model="userInfo.userName" placeholder="한글/영문 이름 입력">
          </div>

          <div class="form form-group-2">
            <label for="userPhone">휴대폰 번호</label>
            <input type="tel" id="userPhone" maxlength="11" v-model="userInfo.userPhone" placeholder="- 를 제외한 숫자 입력">
          </div>

        </div>
      </fieldset>
      <div class="custom-chk">
        <label class="input_check">
          <input
            @click="agree = !agree"
            type="checkbox"
            id="check_collect"
            value="">
          <i></i>
          <span class="label_text">개인 정보 수집 및 이용 동의</span>
        </label>
        <span class="terms" @click.stop.prevent="pop"><i>자세히 보기</i></span>
      </div>
      <a href="#" @click.stop="sendInfo" class="reg_btn" v-scroll-to="{
              el: '#mainContent_Tabs',
              duration: 750,
              offset:-70,
              force: true,
              cancelable: true,
              x: false,
              y: true
          }">다음</a>


      <a href="./#about" class="btn_back" v-scroll-to="{
                    el:'#mainContent_Tabs',
                    duration: 750,
                    offset: -70,
                    force: true,
                    cancelable: true,
                    x: false,
                    y: true,
                    onStart:onStart
        }"><span>이벤트 안내 보러가기</span></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "masterReg",
    components: {},
    data: function(){
      return {
        userInfo: {
          userName: '',
          userPhone: '',
        },
        agree: false,
      }
    },
    methods: {
      pop: function(){
        this.$eventHub.$emit('togglePop');
      },
      reset : function(){
        document.getElementById("check_collect").checked = false;
        document.getElementById("userName").value = "";
        document.getElementById("userPhone").value = "";
      },
      checkUserPhoneNum: function(target){
        var regExp =  /^\d{3}\d{4}\d{4}$/;
        return regExp.test( target );
      },
      checkUserName: function(target){
        var regexp=/(^[가-힣]{2,20}$)|(^[a-zA-Z]{1,20}(\s[a-zA-Z]{1,20})?$)/;
        return regexp.test( target );
      },
      sendInfo: function(){
        if(!this.checkUserName(this.userInfo.userName)) {
          alert('이름을 정확히 입력해 주세요. (숫자나 특수문자 입력 불가)');
        }
        else if(!this.checkUserPhoneNum(this.userInfo.userPhone)) {
          alert('숫자만 입력해 주세요. (특수문자 및 한글 입력 불가)');
        }
        else if(this.agree === false){
          alert('개인정보 동의를 해야 진행이 가능합니다.');
        }
        else{
          this.$eventHub.$emit('userDatas',{
            'userInfo': this.userInfo,
            // 'numActive': 1
          });
          this.$emit('sendUser');
        }
      },
      onStart: function(){
        location.href="./#about";
      }
    },
    created:function(){},
    beforeMount:function(){},
  }
</script>

<style lang="scss">
  .inner-wrap{
    .userReg{@include px-convert(width, 800);@include px-convert(margin, 0 auto);@include px-convert(padding, 61 0 86);text-align: center;
      .userReg-wrap{@include px-convert(width, 688);@include px-convert(height, 1065);@include px-convert(margin, 0 auto);@include px-convert(padding, 126 94 110);background: {image: url('../assets/img/survey_bg.png');size: 100% auto;position: 0 0;repeat: no-repeat;};
        h1{@include px-convert(width, 208);@include px-convert(height, 60);@include px-convert(margin, 0 auto 55);background: {image: url('../assets/img/reg_title.png');size: 100%;position: 0 0;repeat: no-repeat;};font-size: 0;}
        h2{@include px-convert(margin-bottom, 30);@include px-font( $COC_Display_Bold, 40, 40 );color: #473400;letter-spacing: -0.04em;text-align: center;}

        .insert-user-data{text-align: center;
          strong{@include px-font( $NotoSans_Meduim, 18, 18 ); letter-spacing: -0.04em; color:#575757; text-align: center;}
          .forms{@include px-convert(margin, 88 0 37);
            .form{font-size: 0;width: 100%;
              &:last-child{@include px-convert(margin-top, 12)}
              label{display: inline-block;vertical-align: top;@include px-convert(width, 150);@include px-convert(height, 67);@include px-convert(padding-left, 20);background-color: #ffd63d;@include px-convert(border-top-left-radius, 10);@include px-convert(border-bottom-left-radius, 10);border: 1px solid #473400;@include px-font( $NotoSans_Bold, 20, 65);color: #2a1e00;letter-spacing: -0.03em;text-align: left;}
              input{display: inline-block;vertical-align: top;@include px-convert(width, 348);@include px-convert(height, 67);@include px-convert(padding-left, 20);background-color: #f5f3ed;border: 1px solid #473400;border-left: none;@include px-font( $NotoSans_Regular, 20, 65);color: #2a1e00;letter-spacing: -0.025em;@include px-convert(border-top-left-radius, 0);@include px-convert(border-bottom-left-radius, 0);@include px-convert(border-top-right-radius, 10);@include px-convert(border-bottom-right-radius, 10);
                -webkit-appearance: none;appearance: none;
                &:focus {
                  border-color: #1d1dc5;
                }
              }
              input::-webkit-input-placeholder {line-height: normal}
              input::-moz-placeholder {line-height: normal}
              input:-ms-input-placeholder {line-height: normal}
              input:-moz-placeholder {line-height: normal}
            }
          }
        }
        .custom-chk{display: inline-block;@include px-convert(margin-bottom, 106);
          label{position: relative;overflow: hidden;width: inherit;text-align: left;font-size: 0;display: inline-block;vertical-align: middle;;@include px-convert(margin-right, 17);
            input{position: absolute;top: 0;left: 0;@include opacity(0);}
            input+i{display: inline-block;vertical-align: middle;overflow: hidden;@include px-convert(margin-right, 10);@include px-convert(width, 34);@include px-convert(height, 34);background: {image: url('../assets/img/reg_ico_checkbox_off.png');repeat: no-repeat;position: 0 0;size: 100% 100%;}}
            .label_text{display: inline-block;vertical-align: middle;@include px-font( $NotoSans_Meduim, 22, 34);letter-spacing: -0.04em;color: #6d6967;}

            input[type='checkbox']:checked + i { background: {image: url('../assets/img/reg_ico_checkbox_on.png');}}
          }
          .terms{display: inline-block;vertical-align: middle;@include px-convert(width, 87);@include px-convert(height, 25);background-color: #69635f;text-align: center;cursor: pointer;font-size: 0;
            i{display: inline-block;vertical-align: middle;@include px-font( $NotoSans_Meduim, 14.56, 14.56 ); letter-spacing: -0.04em; color:#efebe2;}
            &:after{display: inline-block;content: '';vertical-align: middle;height: 100%;}
          }
        }
        .reg_btn{display: block;@include px-convert(width, 218);@include px-convert(height, 82);@include px-convert(margin, 0 auto 106);background:{image: url('../assets/img/reg_next.png');size: 100%;repeat: no-repeat;};font-size: 0;}
        .btn_back{display: inline-block;vertical-align: middle;position: relative;@include px-font( $NotoSans_Bold, 18, 33 );color: #70533a;border-bottom: 1px solid #70533a;
          &:before{display: inline-block;vertical-align: middle;content:'';@include px-convert(margin-right, 15);@include px-convert(width, 9);@include px-convert(height, 17);background: {image: url('../assets/img/reg_ico_back.png');size: 100% 100%;repeat: no-repeat;}}
        }
      }
    }
  }

  @include break-point($mobile) {
    .inner-wrap{
      .userReg{@include vw-convert-mo(width, 1080);@include vw-convert-mo(margin, 0 auto);@include vw-convert-mo(padding, 61 0 86);text-align: center;
        .userReg-wrap{@include vw-convert-mo(width, 1059);@include vw-convert-mo(height, 1797);@include vw-convert-mo(margin, 0 auto);@include vw-convert-mo(padding, 213 107 110);background: {image: url('../assets/img/survey_bg_m.png');size: 100% auto;position: 0 0;repeat: no-repeat;};
          h1{@include vw-convert-mo(width, 352);@include vw-convert-mo(height, 99);@include vw-convert-mo(margin, 0 auto 94);background: {image: url('../assets/img/reg_title.png');size: 100%;position: 0 0;repeat: no-repeat;};font-size: 0;}
          h2{@include vw-convert-mo(margin-bottom, 45);@include calFontSize_Low(40);color: #473400;letter-spacing: -0.04em;text-align: center;}

          .insert-user-data{text-align: center;
            strong{@include calFontSize_Low(18);letter-spacing: -0.04em; color:#575757; text-align: center;}
            .forms{@include vw-convert-mo(margin, 145 0 63);
              .form{font-size: 0;width: 100%;
                &:last-child{@include vw-convert-mo(margin-top, 20)}
                label{display: inline-block;vertical-align: top;@include vw-convert-mo(width, 250);@include vw-convert-mo(height, 111);@include vw-convert-mo(padding-left, 20);background-color: #ffd63d;@include vw-convert-mo(border-top-left-radius, 10);@include vw-convert-mo(border-bottom-left-radius, 10);border: 1px solid #473400;@include calFontSize_Low(20);color: #2a1e00;letter-spacing: -0.03em;text-align: left;}
                input{line-height: 3.125vw;display: inline-block;vertical-align: top;@include vw-convert-mo(width, 590);@include vw-convert-mo(height, 111);@include vw-convert-mo(padding-left, 20);background-color: #f5f3ed;border: 1px solid #473400;border-left: none;@include calFontSize_Low(20);color: #2a1e00;letter-spacing: -0.025em;@include vw-convert-mo(border-top-left-radius, 0);@include vw-convert-mo(border-bottom-left-radius, 0);@include vw-convert-mo(border-top-right-radius, 10);@include vw-convert-mo(border-bottom-right-radius, 10);
                  -webkit-appearance: none;appearance: none;
                  &:focus {
                    border-color: #1d1dc5;
                  }
                }
                input::-webkit-input-placeholder { line-height: normal; }
                input::-moz-placeholder {line-height: normal;}
                input:-ms-input-placeholder {line-height:normal; }
                input:-moz-placeholder {line-height:normal; }
              }
            }
          }
          .custom-chk{display: inline-block;@include vw-convert-mo(margin-bottom, 180);
            label{position: relative;overflow: hidden;width: inherit;text-align: left;font-size: 0;display: inline-block;vertical-align: middle;;@include vw-convert-mo(margin-right, 20);
              input{position: absolute;top: 0;left: 0;@include opacity(0);}
              input+i{display: inline-block;vertical-align: middle;overflow: hidden;@include vw-convert-mo(margin-right, 20);@include vw-convert-mo(width, 58);@include vw-convert-mo(height, 58);background: {image: url('../assets/img/reg_ico_checkbox_off.png');repeat: no-repeat;position: 0 0;size:99% 99%;}}
              .label_text{display: inline-block;vertical-align: middle;@include calFontSize_Low(22);letter-spacing: -0.04em;color: #6d6967;}

              input[type='checkbox']:checked + i { background: {image: url('../assets/img/reg_ico_checkbox_on.png');}}
            }
            .terms{display: inline-block;vertical-align: middle;@include vw-convert-mo(width, 146);@include vw-convert-mo(height, 41);background-color: #69635f;text-align: center;cursor: pointer;
              i{display: inline-block;vertical-align: middle;@include calFontSize_Low(14.56);letter-spacing: -0.04em; color:#efebe2; }
            }
          }
          .reg_btn{display: block;@include vw-convert-mo(width, 368);@include vw-convert-mo(height, 139);@include vw-convert-mo(margin, 0 auto 195);background:{image: url('../assets/img/reg_next.png');size: 100%;repeat: no-repeat;};font-size: 0;}
          .btn_back{display: inline-block;vertical-align: middle;position: relative;@include calFontSize_Low(18);color: #70533a;border-bottom: 1px solid #70533a;
            &:before{display: inline-block;vertical-align: middle;content:'';@include vw-convert-mo(margin-right, 15);@include vw-convert-mo(width, 14);@include vw-convert-mo(height, 26);background: {image: url('../assets/img/reg_ico_back.png');size: 100% 100%;repeat: no-repeat;}}
            span{display: inline-block;vertical-align: middle;}
          }
        }
      }
    }
  }
</style>
