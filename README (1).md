
# Photographer Album Sharing Platform

This project allows photographers to create albums for their clients, upload photos, and generate a shareable link with a secure PIN. Clients can access the album via the link, enter the PIN, and select their preferred photos.

## Features

- Photographer registration and login (with JWT-based authentication)
- Create albums for individual clients
- Generate unique shareable links for each album
- Protect albums with a secure PIN
- Allow clients to access the album by entering the PIN
- Upload photos to albums
- Clients can select and submit photos

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Token)
- **Password Encryption**: bcrypt
- **Frontend (optional)**: React.js or any frontend framework
- **File Upload**: Multer (for image uploads)
- **Environment**: dotenv for configuration management

## Installation Instructions

### Prerequisites

- Node.js installed on your system
- MongoDB server running (either locally or on a cloud platform like MongoDB Atlas)

### Setup Steps

1. **Clone the repository**:

   \`\`\`bash
   git clone https://github.com/yourusername/photographer-album-sharing.git
   cd photographer-album-sharing
   \`\`\`

2. **Install dependencies**:

   \`\`\`bash
   npm install
   \`\`\`

3. **Create a `.env` file** at the root of the project and add the following variables:

   \`\`\`
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/photographer-app # or your MongoDB Atlas URI
   JWT_SECRET=your_jwt_secret_key
   \`\`\`

4. **Run the server**:

   \`\`\`bash
   npm start
   \`\`\`

   The server will start on `http://localhost:5000`.

## Project Structure

<!-- \`\`\`bash
.
├── controllers
│   ├── AlbumController.js      # Handles album creation, PIN verification, etc.
│   ├── PhotographerController.js  # Handles photographer registration, login, albums
├── middleware
│   ├── auth.js                 # JWT authentication middleware
├── models
│   ├── Album.js                # Mongoose schema for albums
│   ├── Photographer.js         # Mongoose schema for photographers
├── routes
│   ├── photographerRoutes.js   # Routes for photographer-related operations
│   ├── albumRoutes.js          # Routes for album-related operations
├── uploads                     # Directory for storing uploaded images
├── .env                        # Environment configuration file
├── app.js                      # Main entry point of the application
└── package.json                # NPM dependencies and scripts
\`\`\` -->

## API Endpoints

### Authentication Routes

| Method | Endpoint               | Description             |
|--------|------------------------|-------------------------|
| POST   | `/api/photographers/register` | Register a new photographer |
| POST   | `/api/photographers/login`    | Login a photographer       |

### Album Routes

| Method | Endpoint                         | Description                         |
|--------|----------------------------------|-------------------------------------|
| POST   | `/api/photographers/album`       | Create an album and generate a link |
| POST   | `/api/albums/verify-pin`         | Verify client PIN to access an album |
| GET    | `/api/photographers/albums/:id`  | Get all albums for a photographer   |
| DELETE | `/api/photographers/:id`         | Delete a photographer               |

### Client Access Routes

- A client can visit the generated album link, enter the PIN to access the album, view photos, and select preferred ones.

### Album and Photo Management

- **Upload Photos**: You can use Multer middleware to handle file uploads (not shown in the example but can be easily integrated).

## Authentication

- Authentication is handled using **JWT (JSON Web Token)**.
- After logging in, the photographer receives a token, which should be included in the `Authorization` header for all protected routes.

### Example:

\`\`\`bash
Authorization: Bearer <your_token_here>
\`\`\`

## Deployment

1. **Local Deployment**:
   - Follow the setup instructions above to run the project locally.

2. **Production Deployment**:
   - Configure your production environment variables.
   - Deploy the application on platforms such as **Heroku**, **DigitalOcean**, or **AWS**.
   - Set up a **MongoDB Atlas** database for the production environment.

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Added feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License.
