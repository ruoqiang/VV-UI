// export default {
//     functional: true,
//     props: {
//       render: Function
//     },
//     render: (h, ctx) => {
//       return ctx.props.render(h);
//     }
//   };
export default {
  name: 'TableRender',
  functional: true,
  props: {
      row: Object,
      render: Function,
      index: Number,
      column: {
          type: Object,
          default: null
      }
  },
  render: (h, ctx) => {
      const params = {
          row: ctx.props.row,
          index: ctx.props.index
      };
      if (ctx.props.column) params.column = ctx.props.column;
      return ctx.props.render(h, params);
  }
};