const load= require('loadash');
const items=[1,[2,[3,[4]]]];
const newItems=load.flattenDeep(items);
console.log(newItems);