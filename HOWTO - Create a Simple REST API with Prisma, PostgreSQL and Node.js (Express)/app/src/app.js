const express = require("express");
require("dotenv").config();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to 'HOWTO - Create a Simple CRUD App with Prisma and Node.js (Express)'.");
});

// Create a Book
app.post("/api/v1/book", async (req, res) => {
    try {
      const { title, description, author } = req.body;
      if (!title || !description || !author) {
        return res
          .status(400)
          .json({ message: "Please input Title, Description, Author." });
      }
  
      const book = await prisma.book.create({
        data: { title, description, author },
      });
  
      return res
        .status(201)
        .json({ message: "Book created successfully.", data: book });
    } catch (error) {
      return res.status(500).json({ message: "Error creating book." });
    }
  });
  
  // Get all Books
  app.get("/api/v1/books", async (req, res) => {
    try {
      const books = await prisma.book.findMany();
      return res.status(201).json({ data: books.length, books });
    } catch (error) {
      return res.status(500).json({ message: "Error fetching books." });
    }
  });
  
  // Get a single Book by id
  app.get("/api/v1/book/:id", async (req, res) => {
      const id = parseInt(req.params.id);
      try {
        const book = await prisma.book.findFirst({
          where: { id }
        });
        if (book) {
          return res.status(200).json(book);
        } else {
          return res.status(404).json({ message: "Book not found" });
        }
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error fetching Book" });
      }
  });
  
  
  // Update a Book by id
  app.put("/api/v1/book/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, author } = req.body;
    try {
      const updatedBook = await prisma.book.update({
        where: { id: parseInt(id) },
        data: { title, description, author },
      });
      return res.json({
        message: "Book updated successfully.",
        data: updatedBook,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error updating Book." });
    }
  });
  
  // Delete a Book by id
  app.delete("/api/v1/book/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      await prisma.book.delete({
        where: { id },
      });
      return res.json({ message: "Book deleted successfully." });
    } catch (error) {
      return res.status(500).json({ message: "Error deleting Book." });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });