<script lang="ts" setup>
import { version } from "vue";
import { version as epVersion } from "element-plus";
import { ElementPlus } from "@element-plus/icons-vue";
const viteVersion = import.meta.env.VITE_VERSION;
</script>
<template>
  <div>
    <p>
      <el-icon color="var(--el-color-primary)"><ElementPlus /></el-icon>
      Vite {{ viteVersion }} + Element Plus {{ epVersion }} + Vue {{ version }}
    </p>
    <el-button>test</el-button>
    <mouse></mouse>
    <nested-tooltip></nested-tooltip>
  </div>
</template>
