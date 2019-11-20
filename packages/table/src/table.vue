<template>
  <div class="e8__table__wrap" :style="{'height':height+ 'px'}">
    <div class="e8__table">
      <table :class="[{'border':isBorder}]">
        <colgroup>
          <!-- <col  ><col ><col  ><col  > -->
          <col v-for="(column,index) in columns" :key="index" :width="setCellWidth(column)" />
        </colgroup>
        <thead>
          <tr>
            <th v-for="(column,index) in columns" :key="index">
              <div class="cell">{{column.title}}</div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div
      class="e8__table"
      :style="{'height':(height-50)+ 'px'}"
      :class="[{'table-overflowY':height}]"
    >
      <table :class="[{'striped':isStriped},{'border':isBorder}]">
        <colgroup>
          <!-- <col  width="180"><col  width="180"><col  width="180"><col  width="280"> -->
          <col v-for="(column,index) in columns" :key="index" :width="setCellWidth(column)" />
        </colgroup>
        <tbody>
          <tr v-for="(item,index) in data" :key="index">
            <!-- <td  v-for="(title,idex) in columnsTitles" :key="idex">
              <div class="cell">{{item[title]}}</div>
            </td>-->
            <td v-for="(column,idex) in columns" :key="idex">
              <div class="cell">{{item[column['key']]}}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
</style>
<script>
import mixin from "./mixin";
import { deepCopy } from "../../utils/util";
export default {
  name: "E8Table",
  mixins: [mixin],
  props: {
    isStriped: false,
    isBorder: false,
    height: {
      type: [Number, String]
    },
    columns: Array,
    data: Array
  },
  data() {
    return {};
  },
  mounted() {
    // thi = this.columnsTitles
    this.makeData()
  },
  methods: {
    handleClear() {
      this.inputValue = "";
      this.$emit("on-clear");
    },
    makeData() {
      let data = deepCopy(this.data);
      data.forEach((row, index) => {
        row._index = index;
        // row._rowKey = rowKey++;
      });
      return data;
    }
  },
  computed: {
    tableWrapStyle() {
      let style = {};
      if (this.heigh !== 0) {
        let width = "";
        width = this.tableWidth;
        style.width = `${width}px`;
      }
      return style;
    }
  }
};
</script>
