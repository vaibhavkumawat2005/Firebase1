<h1>Authentication & Admin Dashboard</h1>
    <p>A React-based web application with Firebase authentication and admin functionality for user management and product administration.</p>

   <div class="section">
        <h2>Overview</h2>
        <p>This project implements a secure user authentication system with email/password and Google sign-in options, protected routes, and an admin panel for managing products. It features a clean, responsive UI with gradient backgrounds and modern styling.</p>
    </div>

   <div class="section">
        <h2>Features</h2>
        <ul>
            <li><strong>User Authentication:</strong>
                <ul>
                    <li>Email and password signup/login</li>
                    <li>Google authentication integration</li>
                    <li>Password confirmation during signup</li>
                    <li>Error handling with meaningful messages</li>
                </ul>
            </li>
            <li><strong>Protected Routes:</strong>
                <ul>
                    <li>Dashboard accessible only to authenticated users</li>
                    <li>Automatic redirect to login for unauthenticated access</li>
                </ul>
            </li>
            <li><strong>Admin Panel:</strong>
                <ul>
                    <li>Add products with name and price</li>
                    <li>Firestore database integration</li>
                </ul>
            </li>
            <li><strong>UI/UX:</strong>
                <ul>
                    <li>Responsive design with Tailwind-inspired CSS</li>
                    <li>Gradient backgrounds and smooth transitions</li>
                    <li>Lucide icons and Google logo for enhanced visuals</li>
                    <li>Loading states for better user feedback</li>
                </ul>
            </li>
        </ul>
    </div>


  <div class="photos">
  <h1>Screenshot and Video</h1>



https://github.com/user-attachments/assets/91f873cf-5395-49e4-96ed-ff8dc23143b9




![Screenshot 2025-03-24 134547](https://github.com/user-attachments/assets/8fed9262-af80-41dc-a101-b4d86c11e255)
![Screenshot 2025-03-24 134521](https://github.com/user-attachments/assets/50277294-caeb-47b1-83ef-f7d90f55d803)

  </div>

   <div class="section">
        <h2>Technologies Used</h2>
        <ul>
            <li><a href="https://reactjs.org/">React.js</a> - Frontend framework</li>
            <li><a href="https://reactrouter.com/">React Router</a> - Client-side routing</li>
            <li><a href="https://firebase.google.com/">Firebase</a> - Authentication & Firestore database</li>
            <li><a href="https://lucide.dev/">Lucide React</a> - Icon library</li>
            <li>CSS - Custom styling with gradient effects</li>
            <li>Context API - State management for authentication</li>
        </ul>
    </div>

   <div class="section">
        <h2>Prerequisites</h2>
        <ul>
            <li>Node.js (v14 or higher)</li>
            <li>npm or yarn package manager</li>
            <li>Firebase project with Authentication and Firestore enabled</li>
        </ul>
    </div>

   <div class="section">
        <h2>Installation</h2>
        <ol>
            <li>Clone the repository:
                <pre>git clone [your-repository-url]</pre>
            </li>
            <li>Navigate to the project directory:
                <pre>cd [project-name]</pre>
            </li>
            <li>Install dependencies:
                <pre>npm install</pre>
            </li>
            <li>Install additional required packages:
                <pre>
npm install firebase react-router-dom lucide-react
                </pre>
            </li>
        </ol>
    </div>

  <div class="section">
        <h2>Firebase Configuration</h2>
        <ol>
            <li>Create a Firebase project at <a href="https://console.firebase.google.com/">Firebase Console</a></li>
            <li>Enable Email/Password and Google authentication methods</li>
            <li>Enable Firestore database</li>
            <li>Add a web app to your Firebase project and copy the configuration</li>
            <li>Create <code>src/firebase.js</code> with your configuration:
                <pre>
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
                </pre>
            </li>
        </ol>
    </div>
    <div class="section">
        <h2>Project Setup</h2>
        <h3>Directory Structure</h3>
        <pre>
src/
├── components/
│   ├── Dashboard.jsx      # User dashboard
│   ├── Login.jsx         # Login page
│   ├── Signup.jsx        # Signup page
│   ├── PrivateRoute.jsx  # Protected route component
│   └── AdminPanel.jsx    # Admin product management
├── context/
│   └── AuthContext.jsx   # Authentication context
├── firebase.js           # Firebase configuration
└── App.jsx              # Main app with routing
        </pre>
        <h3>Routing Setup (App.jsx)</h3>
        <p>Add this to your <code>App.jsx</code>:</p>
        <pre>
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
        </pre>
    </div>

   <div class="section">
        <h2>Running the Application</h2>
        <ol>
            <li>Start the development server:
                <pre>npm start</pre>
            </li>
            <li>Access the app at:
                <pre>http://localhost:3000</pre>
            </li>
        </ol>
    </div>

  <div class="section">
        <h2>Usage Guide</h2>
        <ul>
            <li><strong>Signup:</strong> Create an account with email/password</li>
            <li><strong>Login:</strong> Sign in with email/password or Google</li>
            <li><strong>Dashboard:</strong> View user info and logout</li>
            <li><strong>Admin Panel:</strong> Add products (accessible via /admin)</li>
            <li><strong>Navigation:</strong>
                <ul>
                    <li><code>/signup</code> - Registration page</li>
                    <li><code>/login</code> - Login page</li>
                    <li><code>/dashboard</code> - User dashboard</li>
                    <li><code>/admin</code> - Admin product management</li>
                </ul>
            </li>
        </ul>
    </div>

  <div class="section">
        <h2>Known Issues & Limitations</h2>
        <ul>
            <li>Admin panel lacks product listing and editing functionality</li>
            <li>No role-based access control (anyone can access admin panel)</li>
            <li>Basic error handling without detailed user feedback</li>
            <li>AdminPanel form submission button missing from JSX</li>
            <li>Typo in <code>AdminPanel.jsx</code> (<code>setPRoductName</code>)</li>
        </ul>
    </div>

   <div class="section">
        <h2>Future Improvements</h2>
        <ul>
            <li>Add product listing and management in Admin Panel</li>
            <li>Implement role-based authentication</li>
            <li>Enhance error handling with toast notifications</li>
            <li>Add form validation</li>
            <li>Improve responsive design for mobile devices</li>
        </ul>
    </div>

   <div class="section">
        <h2>Contributing</h2>
        <p>Fork the repository, make your changes, and submit a pull request. All contributions are welcome!</p>
    </div>

