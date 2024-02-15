


// !Customer Email List: Use map to create an array of all customer emails


// const customers = [
//     { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
//     { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
//     // more customers...
//   ];
//  customers.map((email)=>console.log(email));



// !High-Value Orders: Use filter to find all orders with a total value (quantity * price) greater than $1000.

// const orders = [
//     { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
//     { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
//     // more orders...
//   ];

//   console.log(orders.filter((p) => p.price >1000))


// !ind Customer by Name: Use find to retrieve the customer object for a customer named "Alice".
// const customers = [
//     { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
//     { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
//     // more customers...
//   ];
//   const found = customers.find((name) => name);
//   console.log(found);

// !Index of a Specific Order: Use findIndex to find the index of the order with orderId 102.

// const orders = [
//     { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
//     { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
//     // more orders...
//   ];
//   const order = (orderId) => orderId =102;

// console.log(orders.findIndex(order));

// !Check for Orders in a Specific Country: Use some to check if there are any orders from customers located in "USA".


// const customers = [
//     { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
//     { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
//     // more customers...
//   ];
//   const location=customers.some((country)=>country=== "USA")
//   console.log({location});

// !Print Order Summaries: Use forEach to print a summary for each order in the format "Order [orderId] by [customerName]: [quantity] x [product] for $[price] each."

// const orders = [
//     { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
//     { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
//     // more orders...
//   ];
//   orders.forEach((element)=>console.log(element));

// !Sort Customers by Name: Use sort to create a new array of customers sorted alphabetically by name.

// const firtsName = ['Mary', 'Alice', 'Cenk', 'Dilara'];
// firtsName.sort();
// console.log(firtsName);




