function dif(a, b) {
  return a - b;
}


function testDif() {
  const result = dif(3, 2);
  const expected = 1;
  if (result === expected) {
    console.log('Test passed');
  } else {
    console.error('Test failed. Expected', expected, 'but got', result);
  }
}

testDif();
