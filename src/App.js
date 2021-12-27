import Header from './components/Header';
import Home from './components/Home';
import ArticleDetails from './components/ArticleDetails';
import Register from './components/Register';
import CreateArticle from './components/createArticle';
import Profile from './components/Profile';
import Login from './components/Login';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
      <header className="App-header">
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<CreateArticle />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/articles/:id" element={<ArticleDetails />} />
      </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
