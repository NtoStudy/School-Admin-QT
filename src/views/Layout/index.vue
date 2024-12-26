<script setup lang="ts">
import Menu from "./Menu/index.vue";
import Header from "./Header/index.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <div class="el-aside-div_header">
          <img class="div-img_logo" src="@/assets/meta/logo.png" alt="" />
          <p class="div-p_title">智慧校园</p>
        </div>
        <Menu />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.el-aside-div_header {
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 60px;
  .div-img_logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .div-p_title {
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
