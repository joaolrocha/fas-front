import FormClient from "../../components/FormClient/FormClient";
import LayoutDashboard from "../../layouts/LayoutDashboard/LayoutDashboard";

export default function RegisterClient() {
  return (
    <LayoutDashboard>
      <div className="register-client-page-form">
        <FormClient />
      </div>
    </LayoutDashboard>
  )
}