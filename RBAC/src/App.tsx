import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { Roles } from './pages/Roles';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/roles" element={<Roles />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

