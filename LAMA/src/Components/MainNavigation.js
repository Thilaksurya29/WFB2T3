const MainNavigation = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container">
            <a href="#" className="navbar-brand">
              MyCompany Inc
            </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    List Employees
                  </a>
                 </li>
                 <li className="nav-item">
                  <a href="/" className="nav-link">
                    Add Employee
                  </a>
                 </li>
            </ul>
          </div>
        </nav>
    );
};

export default MainNavigation;