<template>
    <div class="menua">
        <el-menu default-active="2" class="el-menu-vertical-demo el-menu--dark" unique-opened router>
          <el-submenu  v-for="(menus,index) in menu" :index="menus.index">
            <template slot="title"><i :class="menus.icon"></i>{{menus.title}}</template>
            <el-menu-item-group>
              <el-menu-item v-for="(names,index) in menus.name" :index="names.index">{{names.nameindex}}</el-menu-item>
             </el-menu-item-group>
          </el-submenu>
        </el-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
               menu:[
                    { 
                        title:"导航一",
                        icon:"el-icon-message",
                        index:'1',
                        name:[
                           {index:"pageone",nameindex:"选项1"},
                           {index:"pagetwo",nameindex:"选项2"}
                        ]

                    },
                    { 
                        title:"导航二",
                        icon:"el-icon-menu",
                        index:'2',
                        name:[
                           {index:"pagethree",nameindex:"选项1"},
                           {index:"pagefour",nameindex:"选项2"}
                        ]

                    },
                    { 
                        title:"导航三",
                        icon:"el-icon-setting",
                        index:'3',
                        name:[
                           {index:"pagefive",nameindex:"选项1"},
                           {index:"pagesix",nameindex:"选项2"}
                        ]

                    },
                    { 
                        title:"导航四",
                        icon:"el-icon-setting",
                        index:'4',
                        name:[
                           {index:"pageseven",nameindex:"选项1"},
                           {index:"pageeight",nameindex:"选项2"},
                           
                        ]

                    }

               ]
            }
        }
    }
</script>
<style scoped>
    .menua{
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