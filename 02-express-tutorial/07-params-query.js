const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.status(200).send(newProducts);
});
// paramter should be defined with : (colon)
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    res.status(404).send("<h1>Product is Not available</h1>");
    return;
  }
  res.status(200).send(singleProduct);
});
// below one is just an example
app.get("/api/products/:productID/reviews/:review", (req, res) => {
  // Here params property contains an object having two key-value pairs namely productID and review
  console.log(req.params);
  res.send("Hello World!!!");
});
// below is an example for query string parameters also known as URL parameters
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  // if search query parameter is availble in the URL
  if (search) {
    // filtering the array using the first letter of the name
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }
  // if limit query parameter is available in the URL
  if (limit) {
    // since the query paramter is a string, we need to convert it into Number data type
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // we can follow the below approach but it doesn't make sense to send a string as part of API
    // res.status(200).send("No Products matched your search criteria");
    // the more common approach is to send a JSON object
    res.status(200).json({ success: "true", data: [] });
    return;
  }
  res.status(200).json(sortedProducts);
});
// app.all() method is not handling the unavailable resources for products with productID parameter
// but it is working in other cases
app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource Not Found!!!</h1>");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
