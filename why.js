const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 800, inStock: true },
    { name: "Monitor", price: 300, inStock: true },
    { name: "Keyboard", price: 100, inStock: false },
  ];
  
  //Solution
  
  function applyDiscount(discount) {
    return function (price) {
      return price - price * (discount / 100);
    };
  }
  
  let startTime = performance.now();
  
  const discount10 = applyDiscount(10); // 10% discount
  const discountedPrices = products.map((product) => ({
    ...product,
    price: discount10(product.price),
  }));
  
  let endTime = performance.now();
  const solutionTime = endTime - startTime;
  
  console.log("Discounted Prices:", discountedPrices);
  
  //Map
  
  function applyDiscount(discount) {
    return function (price) {
      return price - price * (discount / 100);
    };
  }
  
  startTime = performance.now();
  
  const discount = 10;
  const discountedPrices2 = products.map((product) => ({
    ...product,
    price: product.price - product.price * (discount / 100),
  }));
  
  endTime = performance.now();
  const mapTime = endTime - startTime;
  
  console.log("Discounted Prices:", discountedPrices2);
  
  //For...of loop
  
  function applyDiscountForOfLoop(originalProductArr, discount) {
    let discountedProductArr = [];
    for (let product of originalProductArr) {
      discountedProductArr.push( { ...product, price: product.price - product.price * (discount / 100) } );
    }
    return discountedProductArr;
  }
  
  startTime = performance.now();
  
  const discountedPrices3 = applyDiscountForOfLoop(products, 10);
  
  endTime = performance.now();
  const foLoopTime = endTime - startTime;
  
  console.log("Discounted Prices:", discountedPrices3);
  
  console.log(`
    Return function execution time: ${solutionTime} ms
    Map execution time: ${mapTime} ms
    For...of loop time: ${foLoopTime} ms
    `);