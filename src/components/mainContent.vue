<template>
    <div>
      <main-contents-tab v-on:resetEvent="listenEvent"></main-contents-tab>
    </div>
</template>

<script>
  import mainContentsTab from './mainContentsTab'
    export default {
      name: "mainContent",
      components: {mainContentsTab},
        methods: {
            listenEvent: function(){
                this.$emit('resetEvent');
            },
        },
    }
</script>

<style scoped>

</style>
