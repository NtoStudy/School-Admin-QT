<script lang="ts" setup>
import {ref} from 'vue'
import {
  Menu as IconMenu,
} from '@element-plus/icons-vue'
const isCollapse = ref(false)


</script>

<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :value="false">expand</el-radio-button>
    <el-radio-button :value="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu
      default-active="home"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
  >
    <el-menu-item index="home">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="info">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>个人信息</template>
    </el-menu-item>
    <el-menu-item index="system">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>系统管理</template>
    </el-menu-item>
    <el-menu-item index="examine">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>考核管理</template>
    </el-menu-item>
    <el-menu-item index="education">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>思政队伍</template>
    </el-menu-item>
    <el-menu-item index="fund">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>学生资助</template>
    </el-menu-item>
    <el-menu-item index="awards">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>评奖评优</template>
    </el-menu-item>
    <el-menu-item index="workStudy">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>勤工助学</template>
    </el-menu-item>
    <el-menu-item index="disciplinary">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>勤工助学</template>
    </el-menu-item>
    <el-menu-item index="apartment">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>公寓管理</template>
    </el-menu-item>
    <el-menu-item index="daily">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>日常事务</template>
    </el-menu-item>

  </el-menu>
</template>


<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
