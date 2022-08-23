function findOdd(A) {
  
    const ints = A.reduce((acc, int) => {
      if(!acc[int]){
        acc[int] = 1
      return acc
      }
      acc[int] += 1
    return acc
    }, {})
   
   const result = Object.keys(ints).filter(int => {
      if(ints[int] % 2 !== 0){
        return int
      }
  })
    return parseInt(result[0])
  }

  function doTest(a, n) {
    console.log("A = ", a);
    console.log("n = ", n);
    Test.assertEquals(findOdd(a), n);
  }
  describe('Example tests', function() {
    doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
    doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
    doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
    doTest([10], 10);
    doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
    doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
  });