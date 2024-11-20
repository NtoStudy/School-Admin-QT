<script setup lang="ts">
import Menu from './Menu/index.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <div class="el-aside-div_header">
          <img class="div-img_logo" src="@/assets/meta/logo.png" alt="" />

        </div>
        <Menu />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.div-img_logo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
</style>
