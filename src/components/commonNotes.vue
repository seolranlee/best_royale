<template>
  <li class="info-3">
    <div class="inner-info">
      <div class="txt-box">
        <h4>주의 사항</h4>
        <p>
          <span><em>본 이벤트는 만 13세 이상만 참여 가능합니다.</em></span><br>
          <span><em>당첨 확인 및 경품 증정을 위한 개인정보 수집이 있습니다.
                        (이름/연락처/주소)</em></span>
          <span>
            <em>당첨 사실은 별도의 고지 없이 이벤트 종료 후 1주 이내에 당첨자에 한하여 SMS를 통해 통보 됩니다. SMS를 전달 받지 못하는 일이 없도록<br>
                휴대폰 번호를 정확히 입력해주시고, 휴대폰 내 ‘스팸문자’ 관련 설정을 확인해 주세요.
            </em>
          </span>
        </p>
      </div>
    </div>
  </li>

</template>

<script>
  export default {
    name: 'commonNotes'
  }
</script>

<style scoped lang="scss">
  h4{ @include px-font( $NotoSans_Bold, 28, 44 ); letter-spacing: -0.05em; color:#414141; text-align: left; }
  p{ @include px-font( $NotoSans_Regular, 18, 34 ); letter-spacing: -0.03em; color:#414141; text-align: left; }

  .info-3{ height:380px; background-color:#0c1a38;
    .inner-info{ width:980px; margin:0 auto;
      .txt-box{
        h4{ color:#3c517e; @include px-convert(padding-top,114); }
        p{ color:#3c517e; @include px-convert(padding-top,40);
          span{ display:inline-block;
            em{ position:relative; @include px-convert(left, 20);}
            &:before{ content:'-'; display:inline-block; @include px-convert(margin, 0 0 0 -10);}
          }
        }
      }
    }
  }

  @include break-point($mobile) {
    h4{ @include vw-font-mo( $NotoSans_Bold, 40, 50 ); letter-spacing: -0.05em; color:#414141; text-align: left; }
    p{ @include vw-font-mo( $NotoSans_Regular, 32, 54 ); letter-spacing: -0.03em; color:#414141; text-align: left; }

    .info-3{ @include vw-convert-mo(height,750); background-color:#0c1a38;
      .inner-info{ @include vw-convert-mo(width,1080); margin:0 auto;
        .txt-box{ @include vw-convert-mo(margin, 0 130);
          h4{ color:#3c517e; @include vw-convert-mo(padding-top,114); }
          p{ color:#3c517e; @include vw-convert-mo(padding-top,40);
            span{ display:inline-block;
              em{ position:relative; @include vw-convert-mo(left, 20);}
              &:before{ content:'-'; display:inline-block; @include vw-convert-mo(margin, 0 0 0 -10);}
            }
          }
        }
      }
    }
  }
</style>
