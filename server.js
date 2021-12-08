import express from "express";
import { readFile, writeFile } from "fs/promises";
import fetch from "node-fetch";
import mongoose from "mongoose";
import Products from "./models/products.js";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(express.static("client/build"));
dotenv.config();

app.get("/api/products", async (req, res) => {
  const { term } = req.query;
  try {
    const products = await Products.find();
    if (term) {
      products = products.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
    }
    res.send(products);
  } catch (e) {
    throw e;
  }
});

app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findById(id);
    res.send(product);
  } catch (e) {
    throw e;
  }
});

app.post("/api/products", async (req, res) => {
  const { title, description, price, category, image } = req.body;
  const product = new Products({ title, description, price, category, image });
  await product.save();
  res.send(product);
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Products.findByIdAndDelete(id);
  res.send(product);
});

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await Products.findByIdAndUpdate(id, body);
  res.send(product);
});

async function initProducts() {
  const productsFromDB = await Products.find();
  if (!productsFromDB.length) {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    const mappedProducts = products.map((product) => ({
      ...product,
      id: null,
    }));
    await Products.insertMany(mappedProducts);
  }
}

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  (err) => {
    if (err) {
      console.log("error connecting to db", err);
    }
    app.listen(process.env.PORT || 8000);
    initProducts();
  }
);
