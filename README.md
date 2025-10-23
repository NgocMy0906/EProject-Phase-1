-Truy cập route register - thành công
Method: POST
URL: http://localhost:3003/auth/register
Kết quả:
{
    "username": "testuser2",
    "password": "$2a$10$4lvESmFopEZRVAsy.98OeOHpClZ.LIqSKTxoh5zczuanKmoFToXPW",
    "_id": "68fa0fd9ff4ae2b68efffbea",
    "__v": 0
}
![alt text](public/images/dk1.png)

-Truy cập route register - thất bại - thiếu username
Method: POST
URL: http://localhost:3003/auth/register
Kết quả:
{
    "message": "User validation failed: username: Path `username` is required."
}
![alt text](public/images/dk2.png)

-Truy cập route login - thành công - tạo ra token
Method: POST
URL: http://localhost:3003/auth/login
Kết quả:
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZmEwZmQ5ZmY0YWUyYjY4ZWZmZmJlYSIsImlhdCI6MTc2MTIyMDIyOX0.qndEdrS_v21h9piUvxoWKlTafmcBnmIxCeft_Rex8Bc"
}
![alt text](public/images/dn1.png)

-Truy cập route login - thất bại - sai tên đn
Method: POST
URL: http://localhost:3003/auth/login
Kết quả:
{
    "message": "Invalid username or password"
}
![alt text](public/images/dn2.png)

-Truy cập route dashboard - thành công 
Method: GET
URL: http://localhost:3003/auth/dashboard
Kết quả:
{
    "message": "Welcome to dashboard"
}
![alt text](public/images/db1.png)

PRODUCT
-Truy cập route / - thành công 
Method: POST
URL: http://localhost:3003/products/api/products
Kết quả:
{
    "name": "iPhone 17",
    "price": 999.999,
    "description": "Apple iPhone 15 Pro Max",
    "_id": "68fa18cd24551f26867430af",
    "__v": 0
}
![alt text](public/images/sp1.png)

-Truy cập route / - thất bại - thiếu price 
Method: POST
URL: http://localhost:3003/products/api/products
Kết quả:
{
    "message": "Product validation failed: price: Path `price` is required."
}
![alt text](public/images/sp2.png)

-Truy cập route / - thành công 
Method: GET
URL: http://localhost:3003/products/api/products
Kết quả:
    {
        "_id": "68f8c2eb145a259fb629424b",
        "name": "iPhone 16",
        "price": 999.999,
        "description": "Apple iPhone 15 Pro Max",
        "__v": 0
    },
    {
        "_id": "68fa18cd24551f26867430af",
        "name": "iPhone 17",
        "price": 999.999,
        "description": "Apple iPhone 15 Pro Max",
        "__v": 0
    }
!![alt text](public/images/sp3.png)

-Truy cập route /buy - thành công 
Method: POST
URL: http://localhost:3003/products/api/products/buy
Kết quả:
    {
    "status": "completed",
    "products": [
        "68fa18cd24551f26867430af"
    ],
    "orderId": "c3b1ce28-ef58-4bc8-9c1d-a3e45a0ee349",
    "totalPrice": 999.999
}
![alt text](public/images/sp4.png)