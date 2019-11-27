<template>
  <div :style="{'text-align':column['align']}">
    <template v-if="renderType === 'index'">
      <!-- <span>{{ column.indexMethod ? column.indexMethod(row) : (naturalIndex + 1) }}</span> -->□
    </template>
    <template v-if="renderType === 'selection'">
      <!-- <Checkbox :value="checked" @click.native.stop="handleClick" @on-change="toggleSelect" :disabled="disabled"></Checkbox> -->
      <span><e8-checkbox></e8-checkbox></span>
    </template>
    <template v-if="renderType === 'normal'">
            <div class="cell">{{column['title']}}</div>
        </template>
  </div>
</template>
<script>
export default {
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