<template>
  <div
    class="e8__table__wrap"
    :style="{'height':height+ 'px','width':width+ 'px'}"
    ref="tableWrap"
    :class="[{'table-overflowX':width}]"
  >
    <div class="e8__table">
      <table :class="[{'border':isBorder}]" :style="[tableWrapHeight,tableWrapWidth]">
        <colgroup>
          <!-- <col  ><col ><col  ><col  > -->
          <col v-for="(column,index) in cells" :key="index" :width="setCellWidth(column)" />
        </colgroup>
        <thead>
          <tr>
            <th v-for="(column,index) in cells" :key="index">
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
      ref="tableContent"
    >
      <table :class="[{'striped':isStriped},{'border':isBorder}]" :style="[tableWrapWidth]">
        <colgroup>
          <!-- <col  width="180"><col  width="180"><col  width="180"><col  width="280"> -->
          <col v-for="(column,index) in cells" :key="index" :width="setCellWidth(column)" />
        </colgroup>
        <tbody>
          <tr v-for="(item,index) in data" :key="index">
            <!-- <td  v-for="(title,idex) in columnsTitles" :key="idex">
              <div class="cell">{{item[title]}}</div>
            </td>-->
            <td v-for="(column,idex) in cells" :key="idex">
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
    width: {
      type: [Number, String]
    },
    defaultCellWidth:{
      type: [Number, String],
      default:100
    },
    columns: Array,
    data: Array
  },
  data() {
    return {
      tableWidth: this.width,
      cells: [],
      reduceTableWidth:0
    };
  },
  mounted() {
    // thi = this.columnsTitles
    this.makeData();

    this.$nextTick(() => {
      this.initTable();
    });
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
    },
    setCellWidth(column) {
      let width = "";
      if (column.width) {
        width = column.width;
      }
      // else if (this.columnsWidth[column._index]) {
      //     width = this.columnsWidth[column._index].width;
      // }
      else if (width === "0") {
        width = "";
      } else {
        width = "100"; //根据cell宽度计算td宽度待做
      }
      return width;
    },
    initTable() {
      let tableWidth = this.$refs.tableWrap.clientWidth;
      let reduceCellWidth = 0;
      let reduceCellCount = 0;
      let totalCellCount = this.columns.length;
      this.columns.forEach(item => {
        if (item.width) {
          reduceCellWidth += item.width;
          reduceCellCount++;
        }
      });
      let otherCellCount = totalCellCount - reduceCellCount;
      let otherCellTotalWidth =
        tableWidth - reduceCellWidth - this.getScrollBarWidth();
      let cellWidth = otherCellTotalWidth / otherCellCount;

      this.getScrollBarWidth();

      let cloums = deepCopy(this.columns);
      let reduceTableWidth = 0
      if (this.width) {
        cloums.forEach(item => {
          if (!item.width) {
            item.width = parseInt(this.defaultCellWidth);
          }
          reduceTableWidth += item.width
        });
        this.reduceTableWidth = reduceTableWidth
      } else {
        cloums.forEach(item => {
          if (!item.width) {
            item.width = cellWidth;
          }
        });
      }
      this.cells = cloums;

      console.log(this.columns);
      console.log(reduceCellWidth);
      console.log(reduceCellCount);
    },
    // calculateCellWidth() {}
    getScrollBarWidth() {
      let el = this.$refs.tableContent;
      return el.offsetWidth - el.clientWidth;
    }
  },
  computed: {
    tableWrapStyle() {
      let style = {};
      if (this.width) {
        let width = this.width;
        style.width = `${width}px`;
      }
      if (this.height) {
        let height = this.height;
        style.height = `${height}px`;
      }
      return style;
    },
    tableWrapWidth() {
      let style = {};
      if (this.width) {
        let width = this.reduceTableWidth;
        style.width = `${width}px`;
      }
      return style;
    },
    tableWrapHeight() {
      let style = {};
      if (this.height) {
        let height = this.height;
        style.height = `${height}px`;
      }
      return style;
    }
  }
};
</script>
