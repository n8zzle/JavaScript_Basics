//Two functions one object !
//Is it possible to create Functions A & B , to be the equals ?
//Yes it is possible
let obj = {};
function C() {
  return obj;
}
function D() {
  return obj;
}
console.log(new C() == new D());
