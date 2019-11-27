<template>
  <div :style="{'text-align':column['align']}">
    <template v-if="renderType === 'index'">
      <!-- <span>{{ column.indexMethod ? column.indexMethod(row) : (naturalIndex + 1) }}</span> -->
    </template>
    <template v-if="renderType === 'selection'">
      <!-- <Checkbox :value="checked" @click.native.stop="handleClick" @on-change="toggleSelect" :disabled="disabled"></Checkbox> -->
      <span>
        <e8-checkbox></e8-checkbox>
      </span>
    </template>
    <template v-if="renderType === 'normal'">
      <div class="cell">{{row[column['key']]}}</div>
    </template>
    <!-- <table-slot v-if="renderType === 'slot'" :row="row" :column="column" :index="index"></table-slot> -->
    <!-- <template v-if="renderType === 'slot'">
       <slot-scope :row="row" :column="column" ></slot-scope>
       
    </template> -->
    <!-- <table-expand
            v-if="renderType === 'render'"
            :row="row"
            :column="column"
            :index="index"
            :render="column.render"></table-expand> -->
    <!-- <template v-else-if="'slot' in col">
            <slot-scope :row="row" :column="col" :index="rowIndex"></slot-scope>
          </template> -->
  </div>
</template>
<script>
import TableSlot from "./slot";
import TableRender from './render';
export default {
  inject: ["tableRoot"],
  props: {
    column: Object,
    index: Number,
    row: Object
  },
  created() {
    if (this.column.type === "index") {
      this.renderType = "index";
    } else if (this.column.type === "selection") {
      this.renderType = "selection";
    } else if (this.column.type === "html") {
      this.renderType = "html";
    } else if (this.column.type === "expand") {
      this.renderType = "expand";
    } else if (this.column.render) {
      this.renderType = "render";
    } else if (this.column.slot) {
      this.renderType = "slot";
    } else {
      this.renderType = "normal";
    }
  }
};
</script>