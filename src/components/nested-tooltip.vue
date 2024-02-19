<template>
  <el-tooltip>
    <template #content>
      <div class="box">
        <el-tooltip placement="top-start" content="top-start" effect="light">
          <el-button> Tooltip </el-button>
        </el-tooltip>
      </div>
    </template>
    <el-button> Tooltip </el-button>
  </el-tooltip>
</template>
<style scoped>
.box {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
