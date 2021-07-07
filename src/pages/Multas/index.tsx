import React from "react";
import { useAuth } from "../../contexts/auth";
import "./style.css";

// import { Container } from './styles';

const Multas: React.FC = () => {
  const { signed } = useAuth();

  console.log(signed);

  return (
    <div className="multas-container">
      <iframe
        title="dashboard-multas"
        width="600"
        height="373.5"
        src="https://app.powerbi.com/view?r=eyJrIjoiYTlkODUxMWYtNzBiOS00ODQxLTkyNjYtYTE3MTU3Nzk4MWRhIiwidCI6IjQyYzRmMGNkLWJiM2EtNDVmYy05MzZiLWU3NzRhNDU1NDQ5OCJ9"
      ></iframe>
    </div>
  );
};

export default Multas;
