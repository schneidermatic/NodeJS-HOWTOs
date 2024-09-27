#!/usr/bin/env bash


for i in {1..3}; do
    curl -X POST -H "Content-Type: application/json" -d @book$i.json http://localhost:3000/api/v1/book
done

# Get book by id
# curl http://localhost:3000/api/v1/book/1

# Get book by title
# curl http://localhost:3000/api/v1/book/Mastering%20Node.js%20Web%20Development

# Update book by id
# curl -X PUT -H "Content-Type: application/json" -d @book4.json http://localhost:3000/api/v1/book/1

# Delete book by id
# curl -X DELETE http://localhost:3000/api/v1/book/1