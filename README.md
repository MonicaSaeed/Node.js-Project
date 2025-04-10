# 🍽️ Node.js Restaurant Menu Project

## How to Run the Project

1. **Download the Food Dataset**  
   Download [`food.csv`](https://github.com/user-attachments/files/19673557/food.csv)

2. **Set Up MongoDB**  
   - Create a database named `resturant`
   - Create a collection named `Foods`
   - Import the downloaded `food.csv` into the `Foods` collection
   - Create another collection named `RUsers` for user authentication
   - Add users via the following POST request to [http://localhost:7100/register](http://localhost:7100/register):  
     ```json
     {
       "email": "example@gmail.com",
       "name": "Your Name",
       "age": 25,
       "password": "yourpassword",
       "isAdmain": true
     }
     ```

3. **Start the Server**  
   Run the following command:
   ```
   node index.js
   ```

4. **Open in Your Browser**  
   Visit: [http://localhost:7100/](http://localhost:7100/)

---

## Project Description

This is a Node.js web application that provides a user-friendly interface for managing a restaurant menu. It includes authentication and role-based access control (admin vs. regular users). The app follows the MVC (Model-View-Controller) architecture for maintainability and clarity.

---

## Authentication Features

- User registration (with name, email, password, and age)
- Secure login with session management
- Role-based access:
  - **Admins** can add, edit, and delete food items
  - **Users** can only view items

---

## App Features

- View all food items with:
  - Name
  - Description
  - Price
  - Availability
  - Image
- Add new food items *(admin only)*
- Edit food items *(admin only)*
- Delete food items *(admin only)*
- Distinct UI and functionality based on user role

---

## Technologies Used

- **Node.js** – JavaScript runtime environment
- **Express.js** – Web application framework
- **MongoDB** – NoSQL database (via **Mongoose** ODM)
- **EJS** – Templating engine for rendering views
- **AJV** – Advanced JSON Schema validator
- **express-session** – Middleware for session management
- **bcrypt** – Password hashing for authentication
- **jsonwebtoken (JWT)** – Token-based authentication support
- **CSS** – Styling the UI
- **JavaScript** – Frontend scripting
- **MVC Pattern** – Separation of concerns using Models, Views, and Controllers

---


## Screenshots

### 🔹 Login Page  
![Login Page](https://github.com/user-attachments/assets/973a6aa1-97d4-4891-9e59-64816045382d)  
➡️ [http://localhost:7100/](http://localhost:7100/)

---

### 🔹 Welcome Page (After Login)  
![Welcome Page](https://github.com/user-attachments/assets/79301f73-93bf-4472-b7b5-cc7f5a7204e8)  
➡️ [http://localhost:7100/login](http://localhost:7100/login)

---

### 🔹 Food Menu (User View)  
![User View](https://github.com/user-attachments/assets/24372f32-0539-41f2-b694-8c28d1d34248)  
➡️ [http://localhost:7100/food](http://localhost:7100/food)

---

### 🔹 Food Menu (Admin View)  
![Admin View](https://github.com/user-attachments/assets/3da560a9-1b8b-4ac7-9abb-e5bc366f2c6e)  
➡️ [http://localhost:7100/food](http://localhost:7100/food)

---

### 🔹 Edit Food Item (Admin View)  
![Image](https://github.com/user-attachments/assets/8886bf7a-27b7-4bbe-b3d4-634098ea6ffa)  
➡️ [http://localhost:7100/food/F002](http://localhost:7100/food/F002)

----