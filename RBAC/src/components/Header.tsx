import { Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">RBAC Admin Dashboard</a>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <a className="nav-link px-3" href="#">
            <Bell className="feather" />
          </a>
        </div>
        <div className="nav-item text-nowrap">
          <a className="nav-link px-3" href="#">
            <User className="feather" />
          </a>
        </div>
      </div>
    </header>
  );
}

