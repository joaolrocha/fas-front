import FormProject from "../../components/FormProject/FormProject";
import LayoutDashboard from "../../layouts/LayoutDashboard/LayoutDashboard";

export default function RegisterProject() {
  return (
    <LayoutDashboard>
      <div className="register-project-container">
        <FormProject />
      </div>
    </LayoutDashboard>
  )
}