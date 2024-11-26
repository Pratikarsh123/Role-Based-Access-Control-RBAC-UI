import { Link } from 'react-router-dom';
import { Users, Shield } from 'lucide-react';

export function Sidebar() {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/users" className="nav-link">
              <Users className="feather" />
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/roles" className="nav-link">
              <Shield className="feather" />
              Roles & Permissions
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

