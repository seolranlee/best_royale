<template>
    <div>
      <div class="txt-box">
        <p>
          테스트입니다.
        </p>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'guideComponent'
  }
</script>

<style scoped lang="scss">
  // Pc tablet
  .txt-box{
    p{ @include px-convert(padding, 30 0); @include px-font( $COC_Display_Bold, 28, 28 ); color:red; }
  }



  // Mobile
  @include break-point($mobile) {
    .txt-box {
      p{ @include vw-convert-mo(padding, 30 0); @include vw-font-mo( $COC_Display_Bold, 40, 46 ); color:blue; }
    }
  }
</style>
