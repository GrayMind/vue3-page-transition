<template>
  <div class="app-container">
    <van-cell-group class="user-group">
      <van-cell icon="records" title="返回" is-link to="/"/>
    </van-cell-group>
  </div>
</template>

<script lang="ts">

import { Row, Col, Icon, Cell, CellGroup } from 'vant';

import Vue from 'vue'
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  }
}
</script>

<style lang="less">
.app-container {
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: auto;
}
</style>