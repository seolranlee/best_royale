
<template>
  <div class="survey">
    <div class="survey-wrap">
      <progress-bar class="progress-bar"></progress-bar>
      <ol class="questions">
        <li v-for="(item, index) in items" v-bind:class="[ qnumber === index ? 'active' : '' ]">
          <div v-if="qnumber === index" :class="[ qnumber===0 || qnumber===1 ? 'question-title type1' : 'question-title']">
            <div class="question-number"><i>Q{{index+1}}</i></div>
            <p class="question-content" v-html="item.msg"></p>

            <ol class="answers" :class="[ qnumber===2 || qnumber===3 ? 'type2' : [ qnumber===4 || qnumber===5 || qnumber===6 || qnumber===7 || qnumber===8 || qnumber===9 || qnumber===10 ? 'type3' : [ qnumber===11 ? 'type4' : 'type1'] ] ]">
              <li v-if="item.multi === true" v-for="q in item.question" :class="{highlight:selected['q'+(index+1)].includes(q.id)}" v-on:click="multiSelected(index, q.id)">
                <div v-if="q.imageSrc" class="img-clip">
                  <img :src="q.imageSrc">
                </div>
                <p v-html="q.q"></p>
              </li> v
              <li v-if="item.multi === undefined" v-for="q in item.question" v-on:click="singleSelected(index, q.id)" :class="[ q.id === selected['q'+(index+1)]===true ? 'highlight' : [ q.selected!==undefined && q.selected===false ? 'hold' : '' ]]">
                <div v-if="q.imageSrc" class="img-clip" :class="[ q.selected!==undefin  && q.selected===false ? 'hold' : '' ]">
                  <img :src="q.imageSrc">
                </div>
                <p v-html="q.q"></p>
              </li>
            </ol>
          </div>
        </li>
      </ol>
      <ul class="button">
        <li>
          <a href="#" v-on:click="prevStep" class="btnPrev" :class="[ qnumber === 0 ? 'hold' : '' ]" v-scroll-to="{
              el: '.survey',
              duration: 750,
              offset:0,
              force: true,
              cancelable: true,
              onStart: function(element) {
              },
              onDone: function(element) {
              },
              x: false,
              y: true
          }">이전 스텝으로</a>
        </li>
        <li>
          <a href="#" v-on:click="nextStep" class="btnNext" :class="[ isNext === false ? [ qnumber === 11 ? 'complete hold' : 'hold' ] : [ qnumber === 11 ? 'complete' : '' ]]" v-scroll-to="{
              el: '.survey',
              duration: 750,
              offset:0,
              force: true,
              cancelable: true,
              onStart: function(element) {
              },
              onDone: function(element) {
              },
              x: false,
              y: true
          }">다음스텝으로</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import progressBar from './progressBar';

  export default {
    name: "masterTest",
    components: {progressBar},
    data: function(){
      return {
        qnumber: 0,
        isNext: false,
        // isBack: true,
        selected: {
          'q1': '',
          'q2': '',
          'q3': '',
          'q4': '',
          'q5': [],
          'q6': '',
          'q7': [],
          'q8': '',
          'q9': [],
          'q10': '',
          'q11': '',
          'q12': [],
        },
        items: [
          { msg: '자신의 최대 트로피는?',
            question: [
              {id: 1, q: '3,000이하'},
              {id: 2, q: '3,000 - 3,999'},
              {id: 3, q: '4,000 - 4,599'},
              {id: 4, q: '4,600 이상'},
            ]
          },
          { msg: '도전에서 얻은 카드 수는?',
            question: [
              {id: 1, q: '1만 장 이하'},
              {id: 2, q: '1만 장 이상'},
              {id: 0, q: '모름'},
            ]
          },
          { msg: '클래시 로얄 이벤트 등 소식을<br>가장 많이 접하는 채널은?',
            question: [
              {id: 1, q: '로얄 뉴스'},
              {id: 2, q: '게임 내 메시지함'},
              {id: 3, q: '페이스북 공식 페이지'},
              {id: 4, q: '유튜브 공식 채널'},
              {id: 5, q: '공식 카페'},
              {id: 6, q: '클랜원 / 클랜 채팅창'},
              {id: 7, q: '해당사항 없음'},
            ]
          },
          { msg: '클래시 로얄 이벤트 등<br>소식을 아는 정도는?',
            question: [
              {id: 1, q: '거의 다 알고 있음'},
              {id: 2, q: '많이 알고 있는 편'},
              {id: 3, q: '보통'},
              {id: 4, q: '몇 개 빼고 거의 모름'},
              {id: 5, q: '아예 모름'},
            ]
          },
          { msg: '다음 클래시 로얄 이벤트 중<br>알고 있는 것은?<br><span>복수 선택 가능</span>',
            multi: true,
            question: [
              {id: 1, q: '로얄 패밀리', imageSrc: require('../assets/img/survey_q5_a1.png')},
              {id: 2, q: '클랜배틀', imageSrc: require('../assets/img/survey_q5_a2.png')},
              {id: 3, q: '댄싱 고블린<br>팝업 트럭', imageSrc: require('../assets/img/survey_q5_a3.png')},
              {id: 4, q: '클래시 로얄<br>프렌즈', imageSrc: require('../assets/img/survey_q5_a4.png')},
              {id: 5, q: '클래시 로얄<br>리그 아시아', imageSrc: require('../assets/img/survey_q5_a5.png')},
              {id: 6, q: '리그 마스터<br>인증 고사', imageSrc: require('../assets/img/survey_q5_a6.png')},
              {id: 7, q: '예지력 상승<br>투표 이벤트', imageSrc: require('../assets/img/survey_q5_a7.png')},
              {id: 0, q: '없음', allclear: true, imageSrc: require('../assets/img/survey_q_none.png')},
            ]
          },
          { msg: '가장 좋았던 이벤트<br><em>한 개</em>를 선택하세요',
            question: [
              {id: 1, q: '로얄 패밀리', imageSrc: require('../assets/img/survey_q5_a1.png'), selected: false},
              {id: 2, q: '클랜배틀', imageSrc: require('../assets/img/survey_q5_a2.png'), selected: false},
              {id: 3, q: '댄싱 고블린<br>팝업 트럭', imageSrc: require('../assets/img/survey_q5_a3.png'), selected: false},
              {id: 4, q: '클래시 로얄<br>프렌즈', imageSrc: require('../assets/img/survey_q5_a4.png'), selected: false},
              {id: 5, q: '클래시 로얄<br>리그 아시아', imageSrc: require('../assets/img/survey_q5_a5.png'), selected: false},
              {id: 6, q: '리그 마스터<br>인증 고사', imageSrc: require('../assets/img/survey_q5_a6.png'), selected: false},
              {id: 7, q: '예지력 상승<br>투표 이벤트', imageSrc: require('../assets/img/survey_q5_a7.png'), selected: false},
              {id: 0, q: '없음', allclear: true, imageSrc: require('../assets/img/survey_q_none.png'), selected: false},
            ]
          },
          { msg: '다음 클래시 로얄 컨텐츠 중<br>알고 있는 것은?<br><span>복수 선택 가능</span>',
            multi: true,
            question: [
              {id: 1, q: '더 로얄 라이브', imageSrc: require('../assets/img/survey_q7_a1.png')},
              {id: 2, q: '로얄 어드벤처', imageSrc: require('../assets/img/survey_q7_a2.png')},
              {id: 3, q: '고블린 로얄 웹툰', imageSrc: require('../assets/img/survey_q7_a3.png')},
              {id: 4, q: 'CLASH A RAMA<br>애니메이션', imageSrc: require('../assets/img/survey_q7_a4.png')},
              {id: 5, q: '우리 클랜을<br>소개합니다<br>(우.클.소)', imageSrc: require('../assets/img/survey_q7_a5.png')},
              {id: 6, q: '클전 병법서', imageSrc: require('../assets/img/survey_q7_a6.png')},
              {id: 0, q: '없음', allclear: true, imageSrc: require('../assets/img/survey_q_none.png')},
            ]
          },
          { msg: '가장 좋았던 컨텐츠<br><em>한 개</em>를 선택하세요',
            question: [
              {id: 1, q: '더 로얄 라이브', imageSrc: require('../assets/img/survey_q7_a1.png'), selected: false},
              {id: 2, q: '로얄 어드벤처', imageSrc: require('../assets/img/survey_q7_a2.png'), selected: false},
              {id: 3, q: '고블린 로얄 웹툰', imageSrc: require('../assets/img/survey_q7_a3.png'), selected: false},
              {id: 4, q: 'CLASH A RAMA<br>애니메이션', imageSrc: require('../assets/img/survey_q7_a4.png'), selected: false},
              {id: 5, q: '우리 클랜을<br>소개합니다<br>(우.클.소)', imageSrc: require('../assets/img/survey_q7_a5.png'), selected: false},
              {id: 6, q: '클전 병법서', imageSrc: require('../assets/img/survey_q7_a6.png'), selected: false},
              {id: 0, q: '없음', allclear: true, imageSrc: require('../assets/img/survey_q_none.png'), selected: false},
            ]
          },
          { msg: '2018 업데이트 중 좋았던 것은?<br><span>복수 선택 가능</span>',
            multi: true,
            question: [
              {id: 1, q: '클랜전 업데이트', imageSrc: require('../assets/img/survey_q9_a1.png')},
              {id: 2, q: '한 달에 한 번<br>밸런스 조정', imageSrc: require('../assets/img/survey_q9_a2.png')},
              {id: 3, q: '교환 토큰<br>업데이트', imageSrc: require('../assets/img/survey_q9_a3.png')},
              {id: 4, q: '신규 카드 출시', imageSrc: require('../assets/img/survey_q9_a4.png')},
              {id: 5, q: '카드 레벨 평준화', imageSrc: require('../assets/img/survey_q9_a5.png')},
              {id: 6, q: '신규 이모티콘<br>출시', imageSrc: require('../assets/img/survey_q9_a6.png')},
              {id: 0, q: '없음', allclear: true, imageSrc: require('../assets/img/survey_q_none.png')},
            ]
          },
          { msg: '2018 진행된 도전 모드 중<br>가장 좋았던 것은?',
            question: [
              {id: 1, q: '클래시 로얄 리그<br>20승 도전', imageSrc: require('../assets/img/survey_q10_a1.png')},
              {id: 2, q: '블라인드 덱 도전', imageSrc: require('../assets/img/survey_q10_a2.png')},
              {id: 3, q: '2V2 도전', imageSrc: require('../assets/img/survey_q10_a3.png')},
              {id: 4, q: '터치다운 도전', imageSrc: require('../assets/img/survey_q10_a4.png')},
              {id: 5, q: '드래프트 도전', imageSrc: require('../assets/img/survey_q10_a5.png')},
              {id: 6, q: '엘릭서 도전<br><em>(램프업, 더블, 트리플)</em>', imageSrc: require('../assets/img/survey_q10_a6.png')},
              {id: 7, q: '분노 도전', imageSrc: require('../assets/img/survey_q10_a7.png')},
              {id: 0, q: '없음', allclear: true, imageSrc: require('../assets/img/survey_q_none.png')},
            ]
          },
          { msg: '다음 클래시 굿즈 중<br>가장 마음에 드는 것은?',
            question: [
              {id: 1, q: '노트패드 세트', imageSrc: require('../assets/img/survey_q11_a1.png')},
              {id: 2, q: '다이어리 세트', imageSrc: require('../assets/img/survey_q11_a2.png')},
              {id: 3, q: '클래시 로얄 리그<br>기프트 세트', imageSrc: require('../assets/img/survey_q11_a3.png')},
              {id: 4, q: '댄싱 고블린<br>피규어', imageSrc: require('../assets/img/survey_q11_a4.png')},
              {id: 5, q: '클래시 캐릭터<br>피규어', imageSrc: require('../assets/img/survey_q11_a5.png')},
              {id: 6, q: '클래시<br>양말 세트', imageSrc: require('../assets/img/survey_q11_a6.png')},
              {id: 7, q: '클래시 로얄<br>스티커', imageSrc: require('../assets/img/survey_q11_a7.png')},
              {id: 0, q: '없음', allclear: true, imageSrc: require('../assets/img/survey_q_none.png')},
            ]
          },
          { msg: '다음 중 내년에 했으면 하는<br>이벤트/컨텐츠는?<br><span>복수 선택 가능</span>',
            multi: true,
            question: [
              {id: 1, q: '<span>랭커나 유튜버와 함께 하는<br>덱 상담</span>'},
              {id: 2, q: '<span>클랜 배틀 등 클랜 대회</span>'},
              {id: 3, q: '<span>유저들끼리 모여서 즐기는<br>오프라인 행사</span>'},
              {id: 4, q: '<span>다양한 클래시 애니메이션</span>'},
              {id: 5, q: '<span>다양한 내 게임 데이터를<br>보는 사이트</span>'},
              {id: 6, q: '<span>유튜버들과 함께 하는<br>방송 컨텐츠</span>'},
              {id: 7, q: '<span>클래시 로얄 리그<br>ESPORTS 컨텐츠</span>'},
              {id: 0, q: '<span>없음</span>', allclear: true},
            ]
          },
        ],
      }
    },
    methods: {
      singleSelected: function(index, id){
        alert('singleSelected')
      },
      multiSelected: function(index,id){
        alert('multiSelected')
      },
      prevStep: function(){
        alert('prevStep')
      },
      nextStep: function(){
        alert('nextStep')

      },
      reset: function(){
        this.selected = {};
      },
    },
    created:function(){},
    beforeMount:function(){
    },
    mounted: function () {

    }
  }
</script>

<style lang="scss">
  .inner-wrap{
    .survey{@include px-convert(width, 800);@include px-convert(margin,0 auto);@include px-convert(padding, 61 0 86);text-align: center;
      .survey-wrap{position: relative;@include px-convert(width, 688);@include px-convert(height, 1065);@include px-convert(margin, 0 auto);@include px-convert(padding, 95 87 110);background: {image: url('../assets/img/survey_bg.png');size: 100% auto;position: 0 0;repeat: no-repeat;};
        .progress-bar{}
        .questions{position: absolute;@include px-convert(width, 514);left: 50%;top: 50%;@include transform(translate(-50%, -50%));
          >li{@include transform(translateX(10%));@include opacity(0);
            &.active{@include opacity(1);@include transform(translateX(0));@include css-value-transition('transform 0.3s '$easeInOutQuad', opacity 0.5s ease-out');}
          }
          .question-title{
            .question-number{display: inline-block;@include px-convert(padding, 0 18);@include px-convert(margin-bottom, 17);@include px-convert(height, 39);background-color: #6a4f00;@include px-convert(border-radius, 50);
              i{@include px-font( $COC_Display_Bold, 26, 39);color: #fff;}
            }
            .question-content{@include px-convert(margin-bottom, 50);@include px-font( $COC_Display_Bold, 40, 48 );color: #473400;letter-spacing: -0.04em;
              span{@include px-convert(margin-bottom, 98);@include px-font( $NotoSans_Meduim, 18.96, 35.56 );color: #575757;border-bottom: 1px solid #575757;}
              em{color: #d40000;border-bottom: 3px solid #d40000;}
            }
            &.type1{
              .question-number{@include px-convert(margin-bottom, 40)}
            }
          }
          .answers{@include px-convert(margin-bottom, 45);overflow: hidden;text-align: center;font-size: 0;
            >li{position: relative;@include px-convert(margin-top, 12);@include px-convert(width, 514);@include px-convert(height, 96);background: {image: url('../assets/img/survey_q_bg.png');size: 100% 100%;repeat: no-repeat;};cursor: pointer;font-size: 0;
              p{display: inline-block;vertical-align: middle;@include px-font( $NotoSans_Meduim, 25, auto );letter-spacing: -0.04em;color: #575757;
                span{@include px-font( $NotoSans_Meduim, 20, 23 );}
                em{;@include px-font( $NotoSans_Meduim, 14, 19 );letter-spacing: -0.07em;color: #575757;}
              }
              &:before{display: inline-block;vertical-align: middle;content: '';height: 100%;}

              &.hold{pointer-events: none;}
              &:after{content: '';position: absolute;top: 0;left: 0;width: inherit;height: inherit;background: {image: url('../assets/img/survey_q_bg_checked.png');size: 100% 100%;repeat: no-repeat;} @include css-value-transition('opacity 0.15s '$easeOutCubic' '); opacity: 0; }
              &:first-child{margin-top: 0;}
              &:hover, &.highlight{
                &:after{opacity: 1; }
              }
            }
            &.type2{text-align: center;
              >li{display: inline-block;vertical-align:top;@include px-convert(width, 240);@include px-convert(height, 96);background: {image: url('../assets/img/survey_q_bg2.png');size: 100% 100%;repeat: no-repeat;};@include px-convert(margin, 0 0 12);
                &:after{background: {image: url('../assets/img/survey_q_bg_checked2.png');size: 100% 100%;repeat: no-repeat;}}
                &:last-child{float: none;display: inline-block;@include px-convert(margin-left, 0);}
                &:nth-child(2n){@include px-convert(margin-left, 15);}
              }
            }
            &.type3{width: 100%;@include px-convert(margin-top, -27);
              >li{position: relative;display: inline-block;vertical-align:top;width: auto;@include px-convert(height,auto);background: none;@include px-convert(margin, 0 0 0 20);@include px-font( $NotoSans_Meduim, 28, 28 );
                &:first-child, &:nth-child(5n){margin-left: 0;}
                >p{vertical-align: top;}
                >.img-clip{position: relative;@include px-convert(width, 110);@include px-convert(height, 110);@include px-convert(margin, 0 auto 17 0);@include css-value-transition('transform 0.15s '$easeInOutCubic'');
                  >img{width: 100%;}
                  &:after{@include px-convert(width, 110);@include px-convert(height, 110);content: '';position: absolute;top: 0;left: 0;background: {image: url('../assets/img/survey_q_bg_checked3.png');size: 100% 100%;repeat: no-repeat;} @include css-value-transition('opacity 0.15s '$easeOutCubic''); opacity: 0;}
                  &:hover{
                    &:after{opacity: 1; }
                  }
                  &.hold{
                    &:after{opacity: 1; border-radius: 50%;background: {image: none;color: rgba(0,0,0,0.7);}}
                  }
                }
                /*&.highlight{*/
                  /*.img-clip{*/
                    /*&:after{display: block}*/
                  /*}*/
                /*}*/
                >p{@include px-font( $NotoSans_Meduim, 16, 18.96 );letter-spacing: -0.04em;color: #575757;}
                &:after{ @include px-convert(width, 112);@include px-convert(height, 112);@include px-convert(margin, -1 0 0 -1); top:28px; background: {image: url('../assets/img/survey_q_bg_checked3.png');size: 100% 100%;repeat: no-repeat; }; @include css-value-transition('transform 0.15s '$easeInOutQuad', opacity 0.15s '$easeOutCubic' ');
                  &:hover{ &:after{opacity: 1; } }
                }
                &:hover{
                  &:after{ transform:scale(1.05); }
                  .img-clip{
                    transform:scale(1.05);
                  }
                }
              }
            }
            &.type4{text-align: center;
              >li{display: inline-block;vertical-align:top;@include px-convert(width, 252);@include px-convert(height, 82);background: {image: url('../assets/img/survey_q_bg4.png');size: 100% 100%;repeat: no-repeat;};@include px-convert(margin, 0 0 12);
                &:after{background: {image: url('../assets/img/survey_q_bg_checked4.png');size: 100% 100%;repeat: no-repeat;}}
                &:last-child{float: none;display: inline-block;@include px-convert(margin-left, 0);}
                &:nth-child(2n){@include px-convert(margin-left, 10);}
              }
            }
          }
        }
        .button{overflow: hidden;display: block;position: absolute;width: 100%;left: 50%;@include px-convert(bottom, 121);@include transform(translateX(-50%));text-align: center;font-size: 0;
          li{display: inline-block;
            &:first-child{@include px-convert(margin-right, 19);}
            .btnPrev{display: inline-block;@include px-convert(width, 218);@include px-convert(height, 82);@include px-convert(margin-left,0);background:{image: url('../assets/img/reg_back.png');size: 100%;repeat: no-repeat;};font-size: 0;
              &.hold{pointer-events: none;background: {image: url('../assets/img/reg_back_hold.png');}}
              &.complete{/*@include px-convert(height, 83);*/background: {image: url('../assets/img/reg_complete.png');}
                &.hold{pointer-events: none;background: {image: url('../assets/img/reg_complete_hold.png');}}
              }
            }
            .btnNext{display: inline-block;@include px-convert(width, 218);@include px-convert(height, 82);@include px-convert(margin-left, 0);background:{image: url('../assets/img/reg_next.png');size: 100%;repeat: no-repeat;};font-size: 0;
              &.hold{pointer-events: none;background: {image: url('../assets/img/reg_next_hold.png');}}
              &.complete{/*@include px-convert(height, 83);*/background: {image: url('../assets/img/reg_complete.png');}
                &.hold{pointer-events: none;background: {image: url('../assets/img/reg_complete_hold.png');}}
              }
            }
          }
        }
      }

    }
  }

  @include break-point($mobile){
    .inner-wrap{
      .survey{@include vw-convert-mo(width, 1080);@include vw-convert-mo(margin,0 auto);@include vw-convert-mo(padding, 61 0 86);text-align: center;
        .survey-wrap{position: relative;@include vw-convert-mo(width, 1059);@include vw-convert-mo(height, 1797);@include vw-convert-mo(margin, 0 auto);@include vw-convert-mo(padding, 159 0 0);background: {image: url('../assets/img/survey_bg_m.png');size: 100% auto;position: 0 0;repeat: no-repeat;};
          .progress-bar{}
          .questions{position: absolute;@include vw-convert-mo(width, 864);left: 50%;top: 50%;@include transform(translate(-50%, -50%));
            .question-title{
              .question-number{display: inline-block;@include vw-convert-mo(padding, 0 32);@include vw-convert-mo(margin-bottom, 25);@include vw-convert-mo(height, 65);background-color: #6a4f00;@include vw-convert-mo(border-radius, 50);
                i{@include calFontSize_Low(26);color: #fff;}
              }
              .question-content{@include vw-convert-mo(margin-bottom, 50);@include calFontSize_Low(40);color: #473400;letter-spacing: -0.04em;
                span{@include vw-convert-mo(margin-bottom, 98);@include calFontSize_Low(18.96);color: #575757;border-bottom: 1px solid #575757;}
                em{color: #d40000;border-bottom: 3px solid #d40000;}
              }
              &.type1{
                .question-number{@include vw-convert-mo(margin-bottom, 72)}
              }
            }
            .answers{@include vw-convert-mo(margin-bottom, 45);overflow: hidden;text-align: center;font-size: 0;
              >li{position: relative;@include vw-convert-mo(margin-top, 25);width: 100%;@include vw-convert-mo(height, 158);background: {image: url('../assets/img/survey_q_bg.png');size: 100% 100%;repeat: no-repeat;};cursor: pointer;font-size: 0;
                p{display: inline-block;vertical-align: middle;@include calFontSize_Low(25);letter-spacing: -0.04em;color: #575757;
                  span{@include calFontSize_Low(20);}
                  em{@include calFontSize_Low(14);letter-spacing: -0.07em;color: #575757;}
                }
                &:before{display: inline-block;vertical-align: middle;content: '';height: 97%;}

                &.hold{pointer-events: none;}
                &:after{display: none;content: '';position: absolute;top: 0;left: 0;width: inherit;height: inherit;background: {image: url('../assets/img/survey_q_bg_checked.png');size: 100% 100%;repeat: no-repeat;}}
                &:first-child{margin-top: 0;}
                &:hover{
                  &:after{display: none;}
                }
                &.highlight{
                  &:after{display: block;}
                }
              }
              &.type2{text-align: center;
                >li{display: inline-block;vertical-align:top;@include vw-convert-mo(width, 401);@include vw-convert-mo(height, 158);background: {image: url('../assets/img/survey_q_bg2.png');size: 100% 100%;repeat: no-repeat;};@include vw-convert-mo(margin, 0 0 28);
                  &:after{background: {image: url('../assets/img/survey_q_bg_checked2.png');size: 100% 100%;repeat: no-repeat;}}
                  &:last-child{float: none;display: inline-block;@include vw-convert-mo(margin-left, 0);}
                  &:nth-child(2n){@include vw-convert-mo(margin-left, 25);}
                }
              }
              &.type3{width: 100%;@include vw-convert-mo(margin-top, -27);
                >li{position: relative;display: inline-block;vertical-align:top;@include vw-convert-mo(width, 188);@include vw-convert-mo(height,auto);background: none;@include vw-convert-mo(margin, 0 0 0 20);@include calFontSize_Low(28);
                  &:first-child, &:nth-child(5n){margin-left: 0;}
                  >p{vertical-align: top;}
                  >.img-clip{position: relative;@include vw-convert-mo(width, 188);@include vw-convert-mo(height, 188);@include vw-convert-mo(margin, 0 auto 17 0);
                    >img{width: 100%;}
                    &:after{display: none;content: '';position: absolute;top: 0;left: 0;width: inherit;height: inherit;background: {image: url('../assets/img/survey_q_bg_checked3.png');size: 100% 100%;repeat: no-repeat;}}
                    &:hover{
                      &:after{display: none;}
                    }
                    &.hold{
                      &:after{display: block;border-radius: 50%;background: {image: none;color: rgba(0,0,0,0.7);}}
                    }

                  }
                  /*&.highlight{*/
                    /*.img-clip{*/
                      /*&:after{display: block}*/
                    /*}*/
                  /*}*/
                  >p{@include calFontSize_Low(16);letter-spacing: -0.04em;color: #575757;}
                  &:after{ @include vw-convert-mo(width, 190);@include vw-convert-mo(height, 190); @include vw-convert-mo(top,47);@include vw-convert-mo(margin, -1 0 0 -1); background: {image: url('../assets/img/survey_q_bg_checked3.png');size: 100% 100%;repeat: no-repeat; }; @include css-value-transition('transform 0.15s '$easeInOutQuad', opacity 0.15s '$easeOutCubic' ');
                    &:hover{ &:after{opacity: 1; } }
                  }
                  &:hover{
                    .img-clip{ transform:scale(1); }
                    &:after{ transform:scale(1.01); }
                  }
                }
              }
              &.type4{text-align: center;
                >li{display: inline-block;vertical-align:top;@include vw-convert-mo(width, 421);@include vw-convert-mo(height, 134);background: {image: url('../assets/img/survey_q_bg4.png');size: 100% 100%;repeat: no-repeat;};@include vw-convert-mo(margin, 0 0 27);
                  &:after{background: {image: url('../assets/img/survey_q_bg_checked4.png');size: 100% 100%;repeat: no-repeat;}}
                  &:last-child{float: none;display: inline-block;@include vw-convert-mo(margin-left, 0);}
                  &:nth-child(2n){@include vw-convert-mo(margin-left, 20);}
                }
              }
            }
          }

          .button{overflow: hidden;display: block;position: absolute;width: 100%;left: 50%;@include vw-convert-mo(bottom, 190);@include transform(translateX(-50%));text-align: center;font-size: 0;
            li{display: inline-block;
              &:first-child{@include vw-convert-mo(margin-right, 32);}
              .btnPrev{display: inline-block;@include vw-convert-mo(width, 368);@include vw-convert-mo(height, 139);@include vw-convert-mo(margin-left,0);background:{image: url('../assets/img/reg_back.png');size: 100%;repeat: no-repeat;};font-size: 0;
                &.hold{pointer-events: none;background: {image: url('../assets/img/reg_back_hold.png');}}
                &.complete{/*@include vw-convert-mo()(height, 83);*/background: {image: url('../assets/img/reg_complete.png');}
                  &.hold{pointer-events: none;background: {image: url('../assets/img/reg_complete_hold.png');}}
                }
              }
              .btnNext{display: inline-block;@include vw-convert-mo(width, 368);@include vw-convert-mo(height, 139);@include vw-convert-mo(margin-left, 0);background:{image: url('../assets/img/reg_next.png');size: 100%;repeat: no-repeat;};font-size: 0;
                &.hold{pointer-events: none;background: {image: url('../assets/img/reg_next_hold.png');}}
                &.complete{/*@include px-convert(height, 83);*/background: {image: url('../assets/img/reg_complete.png');}
                  &.hold{pointer-events: none;background: {image: url('../assets/img/reg_complete_hold.png');}}
                }
              }
            }
          }



        }

      }
    }
  }


</style>
