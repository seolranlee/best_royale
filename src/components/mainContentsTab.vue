<template>
  <div>
    <ol class="tab-view-list">
      <li>
        <tab1></tab1>
      </li>
      <li>
        <transition name="fade">
          <master-reg v-if="numActive === 0" v-on:sendUser="getsetJsonUser"></master-reg>
        </transition>
        <transition name="fade">
          <master-test v-if="numActive === 1" v-on:sendAnswer="getsetJsonAnswer"></master-test>
        </transition>
        <transition nam="fade">
          <master-complete v-if="numActive === 2"></master-complete>
        </transition>
      </li>
    </ol>
  </div>
</template>

<script>
  import tab1 from './tab1';
  import masterReg from './masterReg';
  import masterTest from './masterTest';
  import guideComponent from './guideComponent';
  import progressBar from './progressBar';
  import masterComplete from './masterComplete';
  export default {
      name: "mainContentsTab",
      data:function(){
        return {
          arrHash : [],
          arrClass : [],
          arrTag : [],
          selctedIndex : '',
          INDEX_0_ABOUT : '',
          INDEX_1_TEST : '',
          numActive: 1,
          userInfo: {},
          selected: {},
        }
      },
      mounted:function(){
        this.addEvent();
      },
      components:{ progressBar, tab1, masterReg,masterTest,guideComponent, masterComplete},
      methods:{
        addEvent : function(){
          window.addEventListener('hashchange', this.onChange_hash);
          this.$eventHub.$on('hashDatas',this.getsetEmitData);
          this.$eventHub.$on('userDatas',this.getsetUserData);
          this.$eventHub.$on('selectedDatas',this.getsetSelectedData);
        },
        getsetEmitData : function( data ){
          this.arrHash = data.arrHash;
          this.arrClass = data.arrClass;
          this.arrTag = data.arrTag;
          this.selctedIndex = data.selctedIndex;
          this.INDEX_0_ABOUT = data.INDEX_0_ABOUT;
          this.INDEX_1_TEST = data.INDEX_1_TEST;
        },
        getsetUserData : function( data ){
          this.userInfo = data.userInfo;
        },
        getsetSelectedData : function( data ){
          this.selected = data.selected;
          // this.numActive = data.numActive;
        },
        getsetJsonUser: function (){
          // event.preventDefault();
          let that = this;
          const baseURI = '/event/proc/bestroyale/regist.json.php';
          this.$http.post(baseURI, '?mode=STEP1&user_name='+this.userInfo.userName+'&user_phonenum='+this.userInfo.userPhone)
            .then(function( response ){
              /*console.log(response.data);*/
              if(response.data.res === true){
                that.numActive = 1;
              }else{
                alert(response.data.message);
              }
            })
        },
        getsetJsonAnswer: function (){
          // event.preventDefault();
          let that = this;
          var arr = Object.values(this.selected);
          var answer = '';
          for ( var key in arr ) {
            if( typeof arr[key] == 'object' ) {
              answer = answer + arr[key].join('|');
            } else {
              answer = answer + arr[key];
            }
            answer+=',';
          }
          answer = answer.slice(0,-1);

          const baseURI = '/event/proc/bestroyale/regist.json.php';
          this.$http.post(baseURI, 'mode=STEP2&user_name='+this.userInfo.userName+'&user_phonenum='+this.userInfo.userPhone+'&user_answer='+answer)
            .then(function( response ){

              /*console.log(response.data);*/
              if(response.data.res === true){
                /*console.log(answer);
                console.log(that.userInfo);*/
                that.numActive = 2;
              }else{
                alert(response.data.message);
              }
            })
        },

        onChange_hash : function(e){
          var hash = window.location.hash;
          this.checkHash(hash);
        },
        checkHash : function(hash){
          var len = this.arrHash.length;
          var i = 0 ;
          for(i=0; i<len; i++){
            var checkHash = "#"+this.arrHash[i];
            if(hash == checkHash){
              this.setClass(this.selctedIndex, i);
              this.setTag(this.selctedIndex, i);
              this.selctedIndex = i;
              return;
            }
          }
          this.setDefaultHash();
        },
        setDefaultHash : function(){
          window.location.hash = this.arrHash[0];
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
      }
  }
</script>

<style scoped lang="scss">
  .tab-btn-list{ width: 100%; @include px-convert(height, 147); border-radius: 10px 10px 0 0; overflow: hidden;
    li{ width:50%; height:inherit; background-color:#4d3a06; float:left;
      a{ display:block; color:#2c2101; @include px-font( $COC_Display_Bold, 45, 147 ); text-align:center; transition:color 0.1s linear; }
    }
    li:hover{
      a{ color:#fff;  }
    }
  }
  .tab-view-list{ position:relative;width: 100%;
      >li:nth-child(2){height: auto;background: {image: url('../assets/img/vote_bg.jpg');position: 50% 50%;repeat: no-repeat;}}
    li{ position:relative;}
  }


  @include break-point($mobile) {
    .tab-btn-list{ width: 100%; height:147px; border-radius: 10px 10px 0 0; overflow: hidden;
      li{ width:50%; height:inherit; background-color:#4d3a06; float:left;
        a{ display:block; color:#2c2101; @include vw-font-mo( $COC_Display_Bold, 45, 147 ); text-align:center; transition:color 0.1s linear; }
      }
      li:hover{
        a{ color:#fff;  }
      }
    }
    .tab-view-list{ position:relative;width: 100%; overflow:hidden;
      >li:nth-child(2){height: auto;background: {image: none;}}
      li{ position:relative;}
    }
  }
</style>
