# Hi, I'm Lynn Thit! 👋

This is my final assessment for Web Application Development, semester 2/2022. Vincent Mary School of Science and Technology, Assumption University of Thailand.

# Supplier Management System

A full stack web application that allows its users to manage suppliers using CRUD Operation techniques.

![App Screenshot](https://github.com/LynnT-2003/stock-final-6411271/blob/main/screenshots/image.png?raw=true)

## Functions (CRUD)

- Create & Add new suppliers
- Read suppliers from MongoDB
- Update a supplier record
- Delete a supplier record

## Pages and Screenshots

### 1. A page for displaying suppliers List

![App Screenshot](https://github.com/LynnT-2003/stock-final-6411271/blob/main/screenshots/Screenshot_2566-03-19_at_03.41.04.png?raw=true)

### 2. A page for adding suppliers

![App Screenshot](https://github.com/LynnT-2003/stock-final-6411271/blob/main/screenshots/Screenshot_2566-03-19_at_03.42.16.png?raw=true)

### 3. A page for updating suppliers

![App Screenshot](https://github.com/LynnT-2003/stock-final-6411271/blob/main/screenshots/Screenshot_2566-03-19_at_03.41.34.png?raw=true)

## API Reference

#### Get all suppliers

```http
GET /api/stockFinal/suppliers
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get single supplier

```http
GET /api/stockFinal/suppliers/${id}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | **Required**. Id of supplier to fetch |

#### Add a new supplier

```http
POST /api/stockFinal/suppliers

```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `api_key` | `string` | **Required**. Id of supplier to fetch |
| `name`    | `string` | **Required**. Name of supplier        |
| `address` | `string` | **Required**. Address of supplier     |
| `phone`   | `string` | **Required**. Phone of supplier       |

#### Update supplier

```http
PUT /api/stockFinal/suppliers/${id}


```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | **Required**. Id of supplier to update |
| `api_key` | `string` | **Required**. Id of supplier to fetch  |
| `name`    | `string` | Name of supplier                       |
| `address` | `string` | Address of supplier                    |
| `phone`   | `string` | Phone of supplier                      |

#### Delete supplier

```http
DELETE /api/stockFinal/suppliers/${id}


```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | **Required**. Id of supplier to delete |
| `api_key` | `string` | **Required**. Your API key             |

## Honorable Features

- Responsive Navbars in every page
- Self-explanatory friendly UI design
- Design and Styling with professional CSS
- API endpoints all set up and ready
- Suppliers List sorted alphabetically
- Supplier details saved on Atlas MongoDB

## Environment Variables

To run this project, you might need to check for the following environment variables to your .env file

`MONGODB_URI="mongodb+srv://newUser:Dabbingdubu208@cluster0.fc9enro.mongodb.net/STOCK-FINAL"`

`APIURL=https://stock-next-new.vercel.app/api/`

## 🔗 Deployment

https://stock-final-6411271.vercel.app

## Tech Stack

**Client:** HTML, CSS, React, Javascript, Next.js

**Server:** MongoDB

**Misc:** React-bootstrap, Vercel
