
export function deleteItemByKeyValue(data, keyValue, keyField) {
    // options2:[{id: '1',text: 'New York1'},{id: '2',text: 'New York2'},],
    let newData = data.slice();
    newData.forEach((item, index) => {
        if(keyValue==item[keyField]) {
        newData.splice(index,1)
        // this.selectedValue.splice()
        }
    });
    return newData;
  }