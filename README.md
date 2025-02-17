# Team Member Evaluation App

A modern web application for managing team member evaluations, built with React, TypeScript, and Tailwind CSS.

Live Demo: [https://abdoelsaed.github.io/TeamEval](https://abdoelsaed.github.io/TeamEval)

## Features

### Evaluation Management

- Create and manage evaluations for different team roles (Engineers, Designers, Product Owners)
- Track both behavioral and technical evaluations
- View evaluation progress and completion status
- Edit existing evaluations
- Delete individual evaluations or clear all data

### Data Import/Export

- Export evaluations as JSON files for backup
- Import evaluations from JSON files
- Merge imported data with existing evaluations

### Role-Specific Evaluations

#### Behavioral Evaluation (All Roles)

- Self Appraisal
- Manager Review
- Peer Review
- Teamwork Assessment
- Leadership Evaluation
- Ownership & Responsibility
- Achievements & Improvements

#### Technical Evaluation (Role-Specific)

##### Software Engineers

- Code Quality Assessment
- Speed of Work Metrics
- Bug Metrics & Prevention

##### UI/UX Designers

- Design Quality & Consistency
- Usability and UX Implementation
- Collaboration with Engineers

##### Product Owners

- Backlog Management
- Requirements Communication
- Delivery Impact Analysis

### User Interface

- Modern, responsive design
- Dark mode support
- Grid layout for evaluations list
- Modal-based detailed views
- Confirmation dialogs for destructive actions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd annual-eval
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The application will be deployed to `https://abdoelsaed.github.io/TeamEval`

## Usage

### Creating a New Evaluation

1. Click "Start New Evaluation"
2. Fill in team member details (name, email, role)
3. Complete the behavioral evaluation
4. Complete the role-specific technical evaluation

### Managing Evaluations

- View all evaluations in the grid layout
- Use the "Edit" button to modify an evaluation
- Use the "View" button to see evaluation details
- Click the X button on a card to delete an individual evaluation
- Use "Clear All" to remove all evaluations

### Data Management

- Click "Export" to download evaluations as JSON
- Click "Import" to load evaluations from a JSON file
- All data is stored in the browser's localStorage

## Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Radix UI Components
- React Router
- React Hook Form
- Zod for validation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
