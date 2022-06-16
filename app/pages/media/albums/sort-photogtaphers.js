export default (images) => {
  const clickies = images.map(({ photographer }) => photographer);
  let newArr = [];
  let uniObj = [];

  for (let i in clickies) {
    let objName = clickies[i]['name'];
    uniObj[objName] = clickies[i];
  }

  for (let i in uniObj) {
    newArr.push(uniObj[i]);
  }

  newArr.sort((a, b) => {
    if (a.name === 'Lucy Cull') {
      return -1;
    }
    if (b.name === 'Lucy Cull') {
      return 1;
    }
    return 0;
  });

  return newArr;
};
