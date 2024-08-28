# Agri-Connect

**Agri-Connect** is a comprehensive platform designed to bridge the gap between farmers, suppliers, and buyers. The platform facilitates better communication, resource sharing, and transaction management, ultimately aiming to enhance agricultural productivity and sustainability.
## Video Demo

Watch the demo of **Agri-Connect** below:

[![Watch the video](https://img.youtube.com/vi/zM1XmWfIMLs/0.jpg)](https://youtu.be/zM1XmWfIMLs?si=NctBcsTFNG1tSsBR)
<p align="center">
  <a href="https://youtu.be/zM1XmWfIMLs?si=NctBcsTFNG1tSsBR" target="_blank">
    <img src="https://img.shields.io/badge/Watch%20Demo-YouTube-red?style=for-the-badge&logo=youtube" alt="Watch Demo">
  </a>
</p>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Video Demo](#video-demo)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Marketplace:** Connect farmers with buyers for direct transactions, cutting out the middleman.
- **Resource Sharing:** Allows farmers to share tools, machinery, and resources with each other.
- **Knowledge Hub:** A repository of agricultural knowledge, best practices, and tutorials.


## Installation

### Prerequisites

- Node.js (version 14 or above)
- MongoDB (for the database)
- Git

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/shivamkasaudhan/Agri-Connect.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Agri-Connect
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```env
     MONGO_URI=<your-mongodb-connection-string>
     PORT=5000
     JWT_SECRET=<your-jwt-secret>
     ```
5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and go to `http://localhost:5000`.

## Usage

- **User Registration:** Sign up as a farmer, supplier, or buyer.
- **Profile Management:** Update your profile with relevant information.
- **Marketplace:** Browse through listings, post your own, and connect with potential buyers or sellers.
- **Dashboard:** Track your activities and monitor trends.

## Technologies Used

- **Frontend:** React.js, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-Time Communication:** Socket.io

## Contributing

We welcome contributions to **Agri-Connect**! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes.
4. Commit your changes:
   ```bash
   git commit -m "Describe your changes"
   ```
5. Push to the branch:
   ```bash
   git push origin feature-name
   ```
6. Create a pull request to merge your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact [your-email@example.com](mailto:your-email@example.com).
```

Replace `YOUR_FILE_ID` with your Google Drive file ID and `your-email@example.com` with your actual contact email. This `README.md` file is ready to be used in your project.
