const s = [5, 7, 2];
function editInPlace() {
  s[2] = s[1];
  s[1] = s[0];
  s[0] = 2;
}
editInPlace();

alert(s);