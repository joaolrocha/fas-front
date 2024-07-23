import FormClient from "../../components/FormClient/FormClient";
import Header from "../../components/Header/Header";

export default function RegisterClient() {
  return (
    <div className="register-client-page-container">
      <div className="register-client-page-container-header">
        <Header />
      </div>
      <div className="register-client-page-container-form">
        <FormClient />
      </div>
    </div>
  )
}