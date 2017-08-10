<template>
  <div class="hello">
      <vHeader></vHeader>
      <vmenu></vmenu>
      <div class="content">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
    import vHeader from './Header.vue';
    import vmenu from './menu.vue'
    export default {
      components: {
            vHeader,vmenu
        }
    }
</script>
<style scoped>
  .content{
    position: absolute;
    top: 70px;
    bottom: 0;
    left: 250px;
    right: 0;
    overflow-y: auto;
    overflow-x: auto;
  }
</style>
