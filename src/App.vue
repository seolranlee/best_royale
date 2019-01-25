<template>
  <div id="app">
    <wrapper id="wrapper"></wrapper>
  </div>
</template>

<script>
  import wrapper from './wrapper'

  export default {
    name: 'App',
    data:function(){
      return{
        arrHash : ['about', 'vote'],
        arrClass : ['main-selected-1', 'main-selected-2'],
        arrTag : ['about', 'vote'],
        selctedIndex : 0,
        INDEX_0_ABOUT : 0,
        INDEX_1_TEST : 1
      }
    },
    components: {
      wrapper
    },
    methods:{
      addEvent:function(){
        this.detectHash( window.location.hash )
      },
      detectHash:function(hash){
        if( hash === ''){
          location.href="./#about";
        }else{
          for( var i=0; i<3; i++){
            var checkHash = "#"+this.arrHash[i];
            hash = hash.split('/')[0];
            hash = hash.split('?')[0];
            if(hash == checkHash){
              this.setClass(this.selctedIndex, i);
              this.setTag(this.selctedIndex, i);
              this.selctedIndex = i;
              return;
            }
          }
        }
      },
      setClass : function(oldIndex, newIndex){
        var ele = document.querySelector('body');
        ele.classList.remove( this.arrClass[oldIndex] );
        ele.classList.add( this.arrClass[newIndex] );
      },
      setTag : function(oldIndex, newIndex){
        var tagname = this.arrTag[newIndex];
        this.$ga.page(tagname)
      },
    },
    mounted:function(){
      this.addEvent();
      let that = this;
      this.$eventHub.$emit( 'hashDatas',{
          'arrHash':that.arrHash,'arrClass':that.arrClass,'arrTag':that.arrTag,
          'selctedIndex':that.selctedIndex,
          'INDEX_0_ABOUT':that.INDEX_0_ABOUT,
          'INDEX_1_TEST':that.INDEX_1_TEST
        }
      )
    }
  }
</script>

<style lang="scss">
  html{ width:100%; }
  #app{ visibility:hidden; /*background:{ image:url('../src/assets/img/bg.jpg'); repeat: no-repeat; position: center 0; }*/
    #wrapper{ /*background:{ image:url('assets/img/bg_pattern.png'); repeat: repeat; }*/ }
    &.onShow{ visibility: visible; }
  }

  @media only screen and (max-width:767px){
    /*#app{ background:{ image:url('../src/assets/img/bg_m.jpg'); size:contain;}
      #wrapper{ background:{ image:url('assets/img/bg_pattern_m.png'); repeat: repeat;  } }
    }*/
  }
</style>
