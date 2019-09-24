function zipList(list1, list2) {
  const zipArray = [];
  for (let i = 0; i < list1.length; i++) {
    zipArray.push(list1[i]);
    zipArray.push(list2[i]);
  }
  return zipArray;
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

console.log(zipList(list1, list2));

function zipListTheSimpleWay(list1, list2) {
  const unflattenArray =  _.zip(list1, list2);
  return _.flatten(unflattenArray);
}

const list3 = ['a', 'b', 'c'];
const list4 = [1, 2, 3];

console.log(zipListTheSimpleWay(list3, list4));
