const obj = {
  left: {
    left: {
      right: 1,
    },
    right: 1,
  },
};

const deepClone = (obj) => {
  // Deep cloning
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object') newObj[key] = deepClone(obj[key]);
    else newObj[key] = obj[key];
  });
  return newObj;
};

const obj2 = deepClone(obj);
// const obj2 = obj;

obj2.left.right = 2;
// console.log(obj.left.right);

console.log(obj, obj2, obj === obj2);
