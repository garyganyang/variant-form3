<template>
  <el-form-item label="操作列编辑">
    <el-button link type="primary" @click="openDialog">在线编辑</el-button>
  </el-form-item>

  <el-dialog v-model="visible"
             title="操作按钮编辑"
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
      <el-table-column prop="prop" label="排序号" fixed="left" align="left" min-width="100px">
        <template #default="scope">
          <el-input-number v-model.trim="scope.row.seq" :min="0" placeholder="" style="width: 100%"/>
        </template>
      </el-table-column>
      <el-table-column prop="prop" label="按钮keyCode" fixed="left" align="left" min-width="160">
        <template #default="scope">
          <el-input v-model.trim="scope.row.prop" placeholder="请输入按钮keyCode"/>
        </template>
      </el-table-column>
      <el-table-column prop="label" label="按钮显示名称" fixed="left" align="left" min-width="160">
        <template #default="scope">
          <el-input v-model.trim="scope.row.label" placeholder="请输入按钮显示名称"/>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="展示类型" align="left" min-width="160">
        <template #default="scope">
          <el-select v-model="scope.row.type" default-first-option placeholder="请选择">
            <el-option label="default" value=""/>
            <el-option label="primary" value="primary"/>
            <el-option label="success" value="success"/>
            <el-option label="warning" value="warning"/>
            <el-option label="danger" value="danger"/>
            <el-option label="info" value="info"/>
          </el-select>
        </template>
      </el-table-column>
      <!--      <el-table-column prop="size" label="大小" align="left">-->
      <!--        <template #default="scope">-->
      <!--          <el-select v-model="scope.row.size" default-first-option>-->
      <!--            <el-option v-for="item in formSizes" :key="item.label" :label="item.label" :value="item.value"/>-->
      <!--          </el-select>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <!--      <el-table-column prop="icon" label="图标" align="left">-->
      <!--        <template #default="scope">-->
      <!--          <el-input v-model="scope.row.icon"/>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <el-table-column prop="isShow" label="是否显示" align="center" min-width="120">
        <template #default="scope">
          <el-switch v-model="scope.row.isShow"/>
        </template>
      </el-table-column>
      <el-table-column prop="isCollapsed" label="是否折叠" align="center" min-width="120">
        <template #default="scope">
          <el-switch v-model="scope.row.isCollapsed"/>
        </template>
      </el-table-column>
      <el-table-column prop="requireConfirm" label="二次确认" align="center" min-width="120">
        <template #default="scope">
          <el-switch v-model="scope.row.requireConfirm"/>
        </template>
      </el-table-column>
      <!--      <el-table-column prop="circle" label="是否圆角" align="center">-->
      <!--        <template #default="scope">-->
      <!--          <el-switch v-model="scope.row.circle"/>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <el-table-column prop="onClick" label="点击事件" align="center" min-width="120">
        <template #default="scope">
          <el-button type="info" icon="el-icon-edit" plain round @click="editEventHandler('onClick', scope.row, scope.$index)">
            编写代码
          </el-button>
        </template>
      </el-table-column>
      <el-table-column prop="onHideOperationButton" label="隐藏按钮" align="center" min-width="120">
        <template #default="scope">
          <el-button type="info"
                     disabled
                     size="small"
                     icon="el-icon-edit"
                     plain
                     round
                     @click="editEventHandler('onHideOperationButton', scope.row, scope.$index)">
            编写代码
          </el-button>
        </template>
      </el-table-column>
      <el-table-column prop="onDisableOperationButton" label="禁用按钮" align="center" min-width="120">
        <template #default="scope">
          <el-button type="info"
                     disabled
                     size="small"
                     icon="el-icon-edit"
                     plain
                     round
                     @click="editEventHandler('onDisableOperationButton', scope.row, scope.$index)">
            编写代码
          </el-button>
        </template>
      </el-table-column>
      <!--      <el-table-column prop="headerClass" label="头样式" width="140" align="center">-->
      <!--        <template #default="scope">-->
      <!--          <el-button type="info" icon="el-icon-edit" plain round @click="editEventHandler('headerClass', scope.row, scope.$index)">-->
      <!--            {{ i18nt('designer.setting.addEventHandler') }}-->
      <!--          </el-button>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <!--      <el-table-column prop="columnClass" label="列样式" width="140" align="center">-->
      <!--        <template #default="scope">-->
      <!--          <el-button type="info" icon="el-icon-edit" plain round @click="editEventHandler('columnClass', scope.row, scope.$index)">-->
      <!--            {{ i18nt('designer.setting.addEventHandler') }}-->
      <!--          </el-button>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <el-table-column label="操作" align="center" fixed="right" min-width="120">
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

    <div v-if="eventEditorDialogVisible" class="" v-drag="['.drag-dialog.el-dialog', '.drag-dialog .el-dialog__header']">
      <el-dialog title="编写代码"
                 v-model="eventEditorDialogVisible"
                 :show-close="true"
                 class="drag-dialog small-padding-dialog"
                 :append-to-body="false"
                 :close-on-click-modal="false"
                 :close-on-press-escape="false"
                 :destroy-on-close="true">
        <el-alert type="info" :closable="false" :title="eventEditorDialogForm.functionName"/>
        <code-editor ref="ecEditor"
                     v-model="eventEditorDialogForm.selectedRow[eventEditorDialogForm.curEventName]"
                     :mode="'javascript'"
                     :readonly="false"/>
        <el-alert type="info" :closable="false" title="}"/>
        <template #footer>
          <div style="flex: auto">
            <el-button @click="eventEditorDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="saveEventHandler">确定</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </el-dialog>
</template>
<script>
import {ElMessage} from "element-plus";
import CodeEditor from "@/components/code-editor/index.vue";
import {orderBy} from "lodash";

export default {
  name: 'el-table-actionList-editor',
  components: {CodeEditor},
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
        type: 'primary',
        isShow: true,
        isCollapsed: false,
        requireConfirm: false,
        onClick: '',
      },
      eventEditorDialogVisible: false,
      eventEditorDialogForm: {
        functionName: '',
        curEventName: '',
        selectedRow: {},
        selectedRowIndex: 0,
      }
    }
  },
  methods: {
    openDialog() {
      this.dataList = this.optionModel.actionList.length ? this.optionModel.actionList : [{...this.defaultDataList}]
      this.visible = true
    },
    addRow(index) {
      this.dataList.splice(index + 1, 0, {...this.defaultDataList})
    },
    deleteRow(index) {
      this.dataList.splice(index, 1)
    },
    onSave() {
      if (this.optionModel.actionList.length && this.optionModel.actionList.find(item => !item.prop)) return ElMessage.error("还有按钮KeyCode未设置")
      this.optionModel.actionList = orderBy(this.dataList, "seq", "asc")
      this.visible = false
    },
    editEventHandler(eventName, row, index) {
      if (!row.prop) return ElMessage.error("按钮KeyCode还未填写")
      // if (!row.label) return ElMessage.error("按钮显示名称还未填写")
      this.eventEditorDialogForm = {
        functionName: `${row.prop}.${eventName}(row, rowIndex, btnConfig) {`,
        curEventName: eventName,
        selectedRow: row,
        selectedRowIndex: index,
      }
      this.eventEditorDialogVisible = true
    },
    saveEventHandler() {
      this.dataList[this.eventEditorDialogForm.selectedRowIndex] = this.eventEditorDialogForm.selectedRow
      this.eventEditorDialogVisible = false
    },
  }
}
</script>

<style scoped>

</style>
