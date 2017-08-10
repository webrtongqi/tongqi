<template>
    <div class="menu">
        <ul>
            <li>
                 <router-link to="/pageone" class="add"><span>菜单一</span></router-link>
            </li>
            <li>
                 <router-link to="/pagetwo" class="add"><span>菜单二</span></router-link>
            </li>
            <li>
                 <router-link to="/pagetwo" class="add"><span>菜单二</span></router-link>
            </li>
            <li>
                 <router-link to="/pagetwo" class="add"><span>菜单二</span></router-link>
            </li>
        </ul>
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
        padding:10px 0;
    }

</style>