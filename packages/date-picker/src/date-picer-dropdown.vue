<template>
  <div class="date-picker-dropDown" style="width:280px">
    <div class="date-picker__header">
      <div class="arrow-Left">
        <span class="pre_arrow e8-icon-back" @click.stop="handleClick('decYear')">
          <i class="e8-icon-back"></i>
        </span>
        <span class="pre_arrow e8-icon-back" @click.stop="handleClick('decMonth')"></span>
      </div>
      <div class="selected-date">
        <span @click.stop="handleClick('year')">{{date.year}}年</span>
        <span v-if="dateType!='isYear'" @click.stop="handleClick('month')">{{date.month | formateMonth}}月</span>
      </div>
      <div class="arrow-right">
        <span class="next_arrow e8-icon-back" @click.stop="handleClick('addMonth')"></span>
        <span class="next_arrow next_arrow1 e8-icon-back" @click.stop="handleClick('addYear')">
          <i class="e8-icon-back"></i>
        </span>
      </div>
    </div>
    <div class="date-picker__content">
      <div class="panel-content-row" v-show="panelType=='day'">
        <span>日</span>
        <span>一</span>
        <span>二</span>
        <span>三</span>
        <span>四</span>
        <span>五</span>
        <span>六</span>
      </div>
      <panel :data="rowDataList" :type="panelType" @select="panelClick"></panel>
      <div class="btn-content" v-if="hasConfirmButton">
        <div class="btn" @click="cancel">取消</div>
        <div class="btn current" @click="confirm">确认</div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  deleteItemByKeyValue,
  isEqualDay,
  getNowDate,
  isEqualDate
} from "../../utils/util";
import panel from "./panel.js";

let YEARRANGER = 12

export default {
  name: "DatePicerDropdown",
  props: {
    disabled: {
      type: [Boolean, Object],
      default: false
    },
    defaultDate: {
      type: String,
      default: getNowDate() //'2019-7-22'
    },
    isMonth: "day",
    // value: { type: [String, Object, Number, Array] },
    deleteItem: "",
    hasConfirmButton: false,
    dateType: {
      type: String,
      default: "isDay"
    }
  },
  inject: ["app"],
  data() {
    return {
      clearableValue: this.clearable,
      dropDownShow: false,
      // options: this.value,
      date: {},
      selectValue: "",
      rowDataList: [],
      panelType: "day"
    };
  },
  created() {
    this.date.year = parseInt(this.defaultDate.split("-")[0]);
    this.date.month = parseInt(this.defaultDate.split("-")[1]);
    this.selectValue = this.defaultDate;
    if (this.dateType === "isMonth" || this.dateType === "isYear") {
      this.panelType = "year";
      this.rowDataList = this.yearList();
    } else {
      this.rowDataList = this.dayList();
    }
  },
  methods: {
    handleClear() {
      this.inputValue = "";
      this.$emit("on-clear");
    },
    show() {
      this.dropDownShow = true;
    },
    hide() {
      this.dropDownShow = false;
    },
    handleClick(type) {
      const handlers = {
        addYear: () => {
          if(this.dateType==='isYear') {
            return this.date.year += YEARRANGER
          }
          ++this.date.year
        },
        decYear: () => {
          if(this.dateType==='isYear') {
            return this.date.year -= YEARRANGER
          }
          --this.date.year
        },
        addMonth: () => {
          if (this.panelType === "month") return;
          this.date.month++;
          if (this.date.month > 12) {
            this.date.year++;
            this.date.month = 1;
          }
        },
        decMonth: () => {
          if (this.panelType === "month") return;
          this.date.month--;
          if (this.date.month < 1) {
            this.date.year--;
            this.date.month = 12;
          }
        },
        year: () => {
          this.panelType = "year";
          this.rowDataList = this.yearList();
        },
        month: () => {
          this.panelType = "month";
          this.rowDataList = this.monthList();
        }
      };
      handlers[type]();

      this.selectValue = `${this.date.year}-${this.date.month}-${this.date.day}`;
    },
    panelClick(e) {
      var that = this;
      const { type, value, dateType } = e;

      const handlers = {
        day: () => {
          this.date.month +=
            dateType === "cur-month" ? 0 : dateType === "pre-month" ? -1 : 1; // 根据点击是本月还是上一个月、下一个月确定月份的加减多少
          const {
            date: { year, month, day }
          } = this;

          that.selectValue = `${year}-${month}-${day}`;
          let selectedValue = that.selectValue;

          if (!this.hasConfirmButton) {
            that.$emit("selectedValue", selectedValue);
          }

          this.heightLigtDay = `${year}-${month}-${day}`;
          // that.UI.isOpen = false;
        },
        month: () => {
          const {
            date: { year, month, day }
          } = this;

          if (this.dateType === "isMonth") {
            if (!this.hasConfirmButton) {
              this.$emit("selectedValue", `${year}-${month}`);
            }
            that.heightLigtMonth = value;
            this.rowDataList = this.monthList();
            return;
          }
          this.panelType = "day";
          this.rowDataList = this.dayList();
        }, // 对多个函数做代理排列，根据参数执行不同的函数
        year: () => {
          const {
            date: { year, month, day }
          } = this;
          if (this.dateType === "isYear") {
            if (!this.hasConfirmButton) {
              this.$emit("selectedValue", `${year}`);
            }
            that.heightLigtYear = value;
            this.rowDataList = this.yearList();
            return;
          }
          this.panelType = "month";
          // this.selectValue = `${year}-${month}-${day}`;
          this.rowDataList = this.monthList();
        } // 对多个函数做代理排列，根据参数执行不同的函数
      };
      this.date[type] = Number(value);
      handlers[type]();
    },
    confirm() { //有confirm按钮说明已经是hasConfirmButton
      if(this.dateType ==='isMonth') {
        this.$emit("selectedValue", `${this.date.year}-${this.date.month}`);
        return
      }
      if(this.dateType ==='isYear') {
        this.$emit("selectedValue", `${this.date.year}`);
        return
      }
      this.$emit("selectedValue", this.heightLigtDay);
      
    },
    cancel() {
      this.$emit("cancel");
    },
    dayList() {
      const {
        date: { year, month },
        selectValue
      } = this;

      if (!this.heightLigtDay) {
        //初始化选中的高亮日期
        this.heightLigtDay = selectValue;
      }

      let curMonthDays = new Date(year, month, 0).getDate();
      let firstDay = new Date(year, month - 1, 1).getDay();
      let preMonthDays = new Date(year, month, 0).getDate();

      //当前月的天数
      let days = Array.from({ length: curMonthDays }, (val, index) => {
        let value = index + 1;
        let date = { year, month, day: value };
        let type = isEqualDay(date, new Date(this.heightLigtDay))
          ? "cur-month is-selected"
          : "cur-month";
        return { type, value };
      });

      for (let index = 0; index < firstDay; index++) {
        //当前月前面的天数
        days = [
          {
            type: "pre-month",
            value: preMonthDays--
          }
        ].concat(days);
      }
      for (let index = days.length, item = 1; index < 42; index++, item++) {
        //当前月后面的天数
        days.push({
          type: "next-month",
          value: item
        });
      }
      //  console.log('days：',days)
      return days;
    },
    monthList() {
      const {
        date: { month }
      } = this;
      let that = this;
      if (!this.heightLigtMonth) {
        //初始化选中的高亮月期
        this.heightLigtMonth = month;
      }
      return Array.from({ length: 12 }, (v = month, i) => {
        console.log(that.heightLigtMonth);
        let type =
          Number(1 + i) === Number(that.heightLigtMonth)
            ? "month is-selected"
            : "month";
        return {
          type: type,
          value: 1 + i > 9 ? 1 + i : `0${1 + i}`
        };
      });
    },
    yearList() {
      let that = this;
      const {
        date: { year }
      } = this;
      if (!this.heightLigtYear) {
        //初始化选中的高亮年份
        this.heightLigtYear = year;
      }
      return Array.from({ length: 12 }, (v = year, i) => {
        let type =
          Number(v + i) === Number(that.heightLigtYear)
            ? "year is-selected"
            : "year";
        return {
          type: type,
          value: v + i
        };
      });
    }
  },
  watch: {
    selectValue(val, oldVal) {
      // 观测selectValue的值发生变化就更新日历数据
      this.date.year = parseInt(val.split("-")[0]);
      this.date.month = parseInt(val.split("-")[1]);
      // console.log('val',val)
      // console.log('oldVal',oldVal)
      this.rowDataList =
        this.panelType === "year"
          ? this.yearList()
          : this.panelType === "month"
          ? this.monthList()
          : this.dayList();
    }
  },
  filters: {
    formateMonth(value) {
      return value > 9 ? value : `0${value}`;
    }
  },
  computed: {},
  components: {
    panel
  }
};
</script>
