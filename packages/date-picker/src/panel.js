import Vue from 'vue'
function GeneratorRows(_h, type, list, itemNum) {
  let rows = []
  let row = []

  list.forEach((elem, index) => {
    // let dom = index < itemNum ? 'th' : 'td'
    let dom = 'span'
    // let className = index < itemNum && type === 'day' ? 'date-table-head__item' : `date-table-data__item ${elem.type}`
    let className =  `date-table-data__item ${elem.type}`
    let label = elem.label || elem.value

    row.push(
      _h(
        dom, {
          attrs: {
            class: className,
            dateType: elem.type,
            index: elem.value,
          }
        },
        label
      )
    )
    if (row.length % itemNum === 0 && row.length) {

      rows.push(
        _h(
          'div', {
            attrs: {
              class: "panel-content-row"
            }
          },
          row
        )
      )
      row = []
    }
  })
  return rows
}

export default Vue.component('panel', {
  functional: true,
  render: function (_h, context) {
    const {
      data: list,
      type
    } = context.props
    let result = null
    let num = type === 'day' ? 7 : 3

    const clickHandler = (e) => {
      if (e.target.attributes.index) {
        let value = e.target.attributes.index.value
        let params = {
          type,
          value
        }

        type === 'day' && Object.assign(params, {
          dateType: e.target.attributes.dateType.value
        })
        context.listeners.select(params) // context.listeners接受父组件传递的事件
      }
      e.stopPropagation()
    }

    result = _h('div', {
      attrs: {
        class: context.data.staticClass
      },
      on: {
        click: clickHandler
      }
    }, GeneratorRows(_h, type, list, num))

    return result
    // return GeneratorRows(_h, type, list, num)
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    type: {
      type: String
    }
  }
})