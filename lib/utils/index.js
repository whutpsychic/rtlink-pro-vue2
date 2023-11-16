// 深克隆
export function deepClone(obj) {
  // moment
  if (obj._isAMomentObject) {
    return obj.clone()
  }
  // 数组
  if (obj instanceof Array) {
    let newArray = [];
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] !== "number" && typeof obj[i] !== "string") {
        newArray[i] = deepClone(obj[i]);
      } else {
        newArray[i] = obj[i];
      }
    }
    return newArray;
  }
  // 对象
  else if (Object.prototype.toString.call(obj) === '[object Object]') {
    let newObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] !== "number" && typeof obj[key] !== "string") {
          newObj[key] = deepClone(obj[key]);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  }
  // 其他浅对象
  else {
    return obj
  }
}

export function tilingTreeData(dataArr = [], option = { childStr: 'children' }) {
  // 深克隆
  let _opDataArr = deepClone(dataArr)
  const result = []

  _opDataArr.forEach((item) => {
    _helper._putThemAllIn(result, item, option)
  })

  return result
}

