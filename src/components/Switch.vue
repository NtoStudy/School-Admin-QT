<script setup lang="ts">
import { defineProps, useSlots } from "vue";
interface IProps {
  activeIcon?: string;
  inactiveIcon?: string;
  activeColor?: string;
  inactiveColor?: string;
}

const props = defineProps<IProps>();
const slots = useSlots();
</script>

<template>
  <el-switch
    v-bind="$attrs"
    style="
      --el-switch-on-color: #000;
      --el-switch-off-color: #ccc;
      --el-switch-border-color: #ccc;
      --el-switch-background-color: rgba(46, 78, 150, 0.8);
      --el-switch-handle-color: #fff;
      --el-switch-border-radius: 10px;
      --el-switch-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
    "
  >
    <template #active-action>
      <span class="custom-active-action flex justify-center content-center">
        <i class="iconfont icon-yueliang text-gray-300" />
      </span>
    </template>
    <template #inactive-action>
      <span class="custom-inactive-action flex justify-center content-center">
        <i class="iconfont icon-taiyang text-gray-800" />
      </span>
    </template>
  </el-switch>
</template>

<style scoped>
:deep(.el-switch__core .el-switch__action) {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
