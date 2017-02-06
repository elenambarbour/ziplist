/**
 * Created by owner on 2/6/2017.
 * Author: Elena Barbour
 */

const testList1 = ['a', 'b', 'c', 'd'];
const testList2 = [1, 2, 3, 4];

function zipList(list1, list2) {
  const zipped = [];
  for (let i = 0; i < list1.length; i += 1) {
    zipped.push(list1[i]);
    zipped.push(list2[i]);
  }
  return zipped;
}

console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  let zipped = [];
  const combine = _.zip(list1, list2);
  zipped = _.flatten(combine);
  return zipped;
}

console.log(zipListTheSimpleWay(testList1, testList2));
