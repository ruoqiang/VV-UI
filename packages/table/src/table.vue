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
          <col v-for="(column,index) in cells" :key="index" :width="setCellWidth(column)" />
        </colgroup>
        <thead>
          <tr>
            <th v-for="(column,index) in cells" :key="index">
              <!-- <div class="cell">{{column.title}}</div> -->
              <header-cell :column="column"></header-cell>
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
          <col v-for="(column,index) in cells" :key="index" :width="setCellWidth(column)" />
        </colgroup>
        <tbody>
          
          <tr v-for="(item,index) in renderData" :key="index">
            <td v-for="(column,idex) in cells" :key="idex" >
               
               <!-- <template v-if="column.type==='slot'">
                <slot-scope :row="item" :column="column" :index="idex" :slot="idex"></slot-scope>
              </template> -->
              <template><cell :row="item" :column="column"></cell></template>
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
import cell from './cell'
import headerCell from './headerCell'
export default {
  name: "E8Table",
  mixins: [mixin],
  provide () {
            return {
                tableRoot: this
            };
        },
  props: {
    isStriped: false,
    isBorder: false,
    height: {
      type: [Number, String]
    },
    width: {
      type: [Number, String]
    },
    defaultCellWidth: {
      type: [Number, String],
      default: 100
    },
    cellType: String,
    columns: Array,
    data: Array
  },
  data() {
    return {
      tableWidth: this.width,
      cells: [],
      reduceTableWidth: 0,
      renderData: this.data
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initTable();
    });
  },
  methods: {
   
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
      let cellWidth = this.getTableCellWidth();
      let cloums = deepCopy(this.columns);
      if (this.width) {
        this.getScrollTableWidthAndSetDefaultCellWidth(cloums);
      } else {
        this.getNormalTableWidthAndSetCellWidth(cloums, cellWidth);
      }
      this.cells = cloums;
    },
    getTableCellWidth() {
      let tableWidth 
      if(!this.$refs.tableWrap) {
       return
      }
      tableWidth = this.$refs.tableWrap.clientWidth
      let reduceCellWidth = 0,
        reduceCellCount = 0,
        totalCellCount = this.columns.length;
      this.columns.forEach(item => {
        if (item.width) {
          reduceCellWidth += item.width;
          reduceCellCount++;
        }
      });
      let otherCellCount = totalCellCount - reduceCellCount;
      let otherCellTotalWidth =
        tableWidth - (reduceCellWidth + this.getScrollBarWidth());
      return otherCellTotalWidth / otherCellCount;
    },
    getScrollTableWidthAndSetDefaultCellWidth(cloums) {
      let reduceTableWidth = 0;
      cloums.forEach(item => {
        if (!item.width) {
          item.width = parseInt(this.defaultCellWidth);
        }
        reduceTableWidth += item.width;
      });
      this.reduceTableWidth = reduceTableWidth;
    },
    getNormalTableWidthAndSetCellWidth(cloums, cellWidth) {
      cloums.forEach(item => {
        if (!item.width) {
          item.width = cellWidth;
        }
      });
      return cloums;
    },
    getScrollBarWidth() {
      let el = this.$refs.tableContent;
      return el.offsetWidth - el.clientWidth;
    },
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
  },
  components: {
    cell,
    headerCell
  }
};
</script>
