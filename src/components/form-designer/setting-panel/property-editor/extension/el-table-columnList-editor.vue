<template>
  <el-form-item label="表格列编辑">
    <el-button link type="primary" @click="openDialog">在线编辑</el-button>
  </el-form-item>

  <el-dialog v-model="visible"
             title="列编辑"
             width="440px"
             header-class="border-b"
             body-class="px-0 pt-4"
             footer-class="border-t"
             fullscreen>
    <el-table ref="actionEditRef"
              size="default"
              :data="dataList"
              :border="true"
              height="100%">
      <el-table-column type="index" width="60px" label="序号" fixed="left" align="center"/>
      <el-table-column prop="prop" label="排序号" fixed="left" align="left" min-width="120px">
        <template #default="scope">
          <el-input-number v-model="scope.row.seq" :min="0" placeholder="" style="width: 100%"/>
        </template>
      </el-table-column>
      <el-table-column prop="prop" label="对应字段" fixed="left" align="left" min-width="160">
        <template #default="scope">
          <el-input v-model="scope.row.prop" placeholder="请输入对应字段(数据库表字段)"/>
        </template>
      </el-table-column>
      <el-table-column prop="label" label="显示名称" fixed="left" align="left" min-width="160">
        <template #default="scope">
          <el-input v-model="scope.row.label" placeholder="请输入表头名称"/>
        </template>
      </el-table-column>
      <el-table-column prop="displayType" label="展示类型" min-width="140" align="left">
        <template #default="scope">
          <el-select v-model="scope.row.displayType" default-first-option>
            <el-option label="字符串" value="string"/>
            <el-option label="图片(单张)" value="image"/>
            <el-option label="图片(多张)" value="images"/>
            <el-option label="头像(单张)" value="avatar"/>
            <el-option label="头像(多张)" value="avatars"/>
            <el-option label="文件(单个)" value="file"/>
            <el-option label="文件(多个)" value="files"/>
            <el-option label="标签tag(单个)" value="tag"/>
            <el-option label="标签tag(多个)" value="tags"/>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="width" label="最小列宽(px)" min-width="120" align="left">
        <template #default="scope">
          <el-input v-model="scope.row.minWidth" placeholder="请输入"/>
        </template>
      </el-table-column>
      <el-table-column prop="isShow" label="是否显示" min-width="120" align="center">
        <template #default="scope">
          <el-switch v-model="scope.row.isShow"/>
        </template>
      </el-table-column>
      <el-table-column prop="sortable" label="可排序" min-width="120" align="center">
        <template #default="scope">
          <el-switch v-model="scope.row.sortable"/>
        </template>
      </el-table-column>
      <el-table-column prop="showOverflowTooltip" label="隐藏过长内容" min-width="120" align="center">
        <template #default="scope">
          <el-switch v-model="scope.row.showOverflowTooltip"/>
        </template>
      </el-table-column>
      <el-table-column prop="fixed" label="是否固定" min-width="120" align="center">
        <template #default="scope">
          <el-select v-model="scope.row.fixed" default-first-option>
            <el-option value="noFixed" label="不固定"></el-option>
            <el-option value="left" label="左侧固定"></el-option>
            <el-option value="right" label="右侧固定"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="align" label="对齐方式" min-width="120" align="left">
        <template #default="scope">
          <el-select v-model="scope.row.align" default-first-option>
            <el-option value="left" label="左对齐"/>
            <el-option value="center" label="居中对齐"/>
            <el-option value="right" label="右对齐"/>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" align="center" min-width="120">
        <template #default="scope">
          <el-button circle icon="el-icon-plus" @click="addRow(scope.$index)"/>
          <el-button circle icon="el-icon-minus" @click="deleteRow(scope.$index)"/>
        </template>
      </el-table-column>
    </el-table>
    <template #footer>
      <div style="flex: auto">
        <el-button size="default" @click="visible=false">关闭</el-button>
        <el-button size="default" type="primary" @click="onSave">保存</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script>
import {orderBy} from "lodash";

export default {
  name: 'el-table-columnList-editor',
  props: {
    designer: Object,
    selectedWidget: Object,
    optionModel: Object,
  },
  data() {
    return {
      visible: false,
      dataList: [],
      defaultDataList: {
        seq: 0,
        prop: '',
        label: '',
        actionWidth: '',
        displayType: 'string',
        minWidth: "120",
        isShow: true,
        sortable: false,
        showOverflowTooltip: true,
        fixed: 'noFixed',
        align: 'left',
        headerClass: '',
        actionClass: '',
        onHideOperationButton: '',
        onDisableOperationButton: '',
      }
    }
  },
  methods: {
    openDialog() {
      this.dataList = this.optionModel.columnList.length ? this.optionModel.columnList : [{...this.defaultDataList}]
      this.visible = true
    },
    addRow(index) {
      this.dataList.splice(index + 1, 0, {...this.defaultDataList})
    },
    deleteRow(index) {
      this.dataList.splice(index, 1)
    },
    onSave() {
      this.optionModel.columnList = orderBy(this.dataList, "seq", "asc")
      this.visible = false
    },
  }
}
</script>

<style scoped>

</style>
