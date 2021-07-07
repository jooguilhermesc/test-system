import React from "react";
import { useAuth } from "../../contexts/auth";
import "./style.css";

// import { Container } from './styles';

const Home: React.FC = () => {
  const { signed, Logout } = useAuth();

  console.log(signed);

  async function handleLogout() {
    Logout();
  }

  return (
    <>
      <div className="home-container">
        <h1>Sistema de análise de KPIs</h1>
        <div className="btn-container">
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
      <div className="multas-container">
        <iframe
          title="dashboard-multas"
          className="multas-iframe"
          width="600"
          height="373.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiYTlkODUxMWYtNzBiOS00ODQxLTkyNjYtYTE3MTU3Nzk4MWRhIiwidCI6IjQyYzRmMGNkLWJiM2EtNDVmYy05MzZiLWU3NzRhNDU1NDQ5OCJ9"
          allowFullScreen={true}
        ></iframe>
      </div>
    </>
  );
};

export default Home;
