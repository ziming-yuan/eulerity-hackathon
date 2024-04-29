# Eulerity Web Hackathon

This project is a full-stack web application built using React, TypeScript, and Styled Components. It has a pet gallery **home** page where users can search, sort, select, and download images as well as an **about me** page that displays my web projects. This README provides an overview of the code organization and instructions on how to set up and run the project locally.

## Code Organization

Below is a brief overview of the project's directory structure and key components:

- `src/`: Contains all the source files for the project.
  - `App.tsx`: The root component that wraps all other components and sets up routes using react-router-dom.
  - `index.tsx`: Entry point for the React application.
  - `assets/`: Contains static assets such as background images.
  - `components/`: Contains all React components structured grouped by functionality.
    - `Footer.tsx`: Footer component.
    - `Navigation.tsx`: Navigation bar component.
    - `TitleSection.tsx`: Component for rendering the title section on the home page.
    - `aboutme/`: Project and profile section components related to the aboutme page.
    - `controls/`: Components of search, sort, select all, clear selection controls for the pet gallery.
    - `images/`: Image display components for the pet gallery.
    - `pages/`: Page components.
  - `hooks/`: Contains `PetContext.tsx` for the pet gallery.
  - `icons/`: SVG icons.
  - `theme/`: Contains styling themes and global styles for styled components.
  - `types/`: TypeScript types and interfaces.
  - `utils/`: Utility function to handle the fetch API call.
- `public/`: Contains favicon, and static files.
- `README.md`: Documentation about the project (this file).

## Getting Started

To get this project running on the local machine, follow these steps:

### Prerequisites

- Node.js. If not installed yet, download it from [Node.js website](https://nodejs.org/).

### Installation

1. Clone the repository to the local machine:
   ```bash
    git clone https://github.com/ziming-yuan/eulerity-hackathon.git
    cd eulerity-hackathon
   ```
2. Install the packages:
   ```bash
   npm install

   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Viewing the Application

Once the server is running, we can view the application by navigating to http://localhost:3000 in the web browser. The development server will reload if we make edits, and we will also see any lint errors in the console.
