
export function deleteItemByKeyValue(data, keyValue, keyField) {
  // options2:[{id: '1',text: 'New York1'},{id: '2',text: 'New York2'},],
  let newData = data.slice();
  newData.forEach((item, index) => {
    if (keyValue == item[keyField]) {
      newData.splice(index, 1)
      // this.selectedValue.splice()
    }
  });
  return newData;
}

export function utilIsArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}

export const isEqualDay = function ({
  year,
  month,
  day
}, anotherDay) {
  // debugger
  return !!anotherDay && year === anotherDay.getFullYear() && month === anotherDay.getMonth() + 1 && day === anotherDay.getDate()
}
export function isEqualDate(date1, date2) {
  return new Date(date1) - new Date(date2) === 0
}

export function getNowDate(addDayCount) {
  var AddDayCount = addDayCount || 0
  var nowDate = new Date()
  // var newDate = new Date()
  nowDate.setDate(nowDate.getDate() + AddDayCount)
  var year = nowDate.getFullYear()
  var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
    : nowDate.getMonth() + 1
  var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
    .getDate()
  var dateStr = year + "-" + month + "-" + day
  console.log(dateStr)
  return dateStr
}

export function formateDate(date) {
  let dateArr = date.split('-')
  if (!dateArr[1]) {
    return dateArr[0]
  }
  let dateArr1 = dateArr[1] < 10 ? '0' + dateArr[1] : dateArr[1]
  let dateArr2 = dateArr[2] && (dateArr[2] < 10 ? '0' + dateArr[2] : dateArr[2])
  let newDate = dateArr2 ? `${dateArr[0]}-${dateArr1}-${dateArr2}` : `${dateArr[0]}-${dateArr1}`
  return newDate
}

function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  return map[toString.call(obj)];
}
export function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === 'array') {
    o = [];
  } else if (t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}

