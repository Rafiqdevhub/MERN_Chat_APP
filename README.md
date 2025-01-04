# Connectify

Connectify is a real-time chat application built using the MERN stack. This application enables seamless and instantaneous communication between users. The project utilizes **TailwindCSS** for responsive and modern UI styling and **Socket.IO** for real-time messaging.

---

## Features

- **Real-Time Conversations**: Instant messaging powered by Socket.IO.
- **Modern UI/UX**: Styled with TailwindCSS for a responsive and visually appealing design.
- **User Authentication**: Secure login/signup functionality.
- **Scalable Backend**: Built with Node.js and Express for a robust server-side architecture.
- **MongoDB Integration**: NoSQL database for efficient data management.

---

## Tech Stack

### Frontend

- **React.js**
- **TailwindCSS**

### Backend

- **Node.js**
- **Express.js**
- **Socket.IO**

### Database

- **MongoDB**

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rafiqdevhub/MERN_Chat_APP.git
   cd MERN_Chat_APP
   ```

2. **Install dependencies:**

   ```bash
   npm install
   cd client && npm install
   ```

3. **Environment variables:**
   Create a `.env` file in the root directory with the following variables:

   ```env
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. **Run the application:**

   ```bash
   # Start the backend
   npm run start

   # Start the frontend
   cd client && npm run dev
   ```

5. **Access the app:**
   Open your browser and navigate to `http://localhost:3000`.

---

## Usage

1. Register an account or log in with existing credentials.
2. Start a real-time conversation by selecting a user or group.
3. Enjoy seamless communication with the responsive interface.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature-name'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.

## Contact

For any questions or suggestions, feel free to contact me:

- Email: <rafkhan9323@gmail.com>
