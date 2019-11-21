export default {
    methods: {
        alignCls(column, row = {}) {
            let cellClassName = '';
            if(row.cellClassName && column.key && row.cellClassName[column.key]) {
                cellClassName = row.cellClassName[column.key];
            }
            return [
                `${this.prefixCls}-column-${column.__id}`,
                {
                    [`${cellClassName}`]: cellClassName,    // cell className
                    [`${column.className}`]: column.className,    // column className
                    [`${this.prefixCls}-column-${column.align}`]: column.align,
                    [`${this.prefixCls}-hidden`]: (this.fixed === 'left' && column.fixed !== 'left') || (this.fixed === 'right' && column.fixed !== 'right') || (!this.fixed && column.fixed && (column.fixed === 'left' || column.fixed === 'right'))
                }
            ];
        },
        isPopperShow(column) {
            return column.filters && ((!this.fixed && !column.fixed) || (this.fixed === 'left' && column.fixed === 'left') || (this.fixed === 'right' && column.fixed === 'right'));
        },
        
    }
};