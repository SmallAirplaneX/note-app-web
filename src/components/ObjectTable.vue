

<template>
  <el-table :data="store.list" >
    <el-table-column type="index" label="序号" width="60" />
    <el-table-column prop="name" label="笔记名称" width="250" />
    <el-table-column prop="id" label="索引" />
    <el-table-column prop="templateId" label="模板索引" />
    <el-table-column fixed="right" label="操作" width="150">
      <template #default="scope">
                <el-button type="danger" size="small" @click="store.handleDelete(scope)">删除</el-button>
                <el-button  type="primary" size="small" @click="store.handleUpdata(scope)">变更</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      v-model:current-page="currentPage"
      :background="true"
      layout="prev, pager, next, jumper"
      :page-count="Math.ceil(store.count / 15)"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
  />
</template>
<script setup>
import { useObjectStore } from '@/stores'

import {storeToRefs} from "pinia";
const store = useObjectStore()

const { handleSizeChange,handleCurrentChange } = store
const { currentPage} = storeToRefs(store)

onMounted(() => {
  store.flash()
})
</script>
<style scoped>

</style>