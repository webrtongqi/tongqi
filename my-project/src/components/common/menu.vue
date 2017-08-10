<template>
    <div class="menu">
        <router-link to="/pageone"><span>菜单一</span></router-link>
        <router-link to="/pagetwo"><span>菜单二</span></router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'linxin'
            }
        }
    }
</script>
<style scoped>
    .menu{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    span{
        color: #fff;
        font-size: 20px;
        display: block;
        text-align: center;
    }
</style>