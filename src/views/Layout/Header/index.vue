<script setup lang="ts">
import { ArrowLeft } from "@element-plus/icons-vue";
import Switch from "@/components/Switch.vue";
import screenfull from "screenfull";
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
const isFullscreen = ref(false);
const toggleFullscreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle();
    isFullscreen.value = screenfull.isFullscreen;
  }
  if (isFullscreen.value) {
    ElMessage({ message: "全屏模式", type: "success" });
  } else {
    ElMessage({ message: "退出全屏", type: "warning" });
  }
};
onMounted(() => {
  screenfull.on("change", () => {
    isFullscreen.value = screenfull.isFullscreen;
  });
});
</script>

<template>
  <div class="LayoutHeader-container">
    <div class="LayoutHeader-container-left">
      <el-icon class="el-icon-arrow-left"><ArrowLeft /></el-icon>
      <el-input placeholder="请输入内容"></el-input>
    </div>
    <div class="LayoutHeader-container-right_userInfo">
      <Switch v-model="themeType" active-value="dark" inactive-value="light" />
      <span class="right-span_line">|</span>
      <img class="right-img_message" src="@/assets/meta/村委信箱.png" alt="" />
      <img class="right-img_setting" src="@/assets/meta/设置.png" alt="" />
      <el-tooltip
        class="item"
        effect="dark"
        :content="isFullscreen ? '退出全屏' : '全屏'"
        placement="bottom"
      >
        <img class="right-img_screen" src="#" @click="toggleFullscreen" />
      </el-tooltip>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.LayoutHeader-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .LayoutHeader-container-left {
    display: flex;
    align-items: center;
    .el-icon-arrow-left {
      font-size: 14px;
      background-color: #efeded;
      width: 32px;
      height: 32px;
      margin: 0 10px;
      cursor: pointer;
    }
    .el-input {
      width: 200px;
      :deep(.el-input__inner) {
        background-color: var(--bg-color);
        border: none;
      }
    }
  }
  .LayoutHeader-container-right_userInfo {
    display: flex;
    align-items: center;
    .right-img_userPic {
      margin-left: 28px;
    }
    .right-span {
      &_userName {
        font: {
          size: 13px;
          color: #2c2c2c;
        }
        white-space: nowrap;
      }
      &_line {
        margin: 0 20px;
        color: #2c2c2c;
      }
    }
    .right-img {
      &_userPic {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        margin-right: 20px;
      }
      &_message {
        cursor: pointer;
        width: 20px;
        height: 20px;
      }
      &_screen {
        cursor: pointer;
        width: 25px;
        height: 25px;
      }
      &_setting {
        cursor: pointer;
        width: 20px;
        height: 20px;
        margin: 0 10px;
      }
    }
  }
}
</style>
