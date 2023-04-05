import { Outlet } from "react-router-dom";
import Sections from "../components/Sections";
import { SwitchPagesTab } from "../components/SwitchPagesTab";
import { PageContextProvider } from "../context/context";
import { useLocation } from "react-router-dom";
import "./Default.css";
import PersonalInfo from "../components/PersonalInfo";

export const Default = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <PageContextProvider>
      <main className="layout">
        <Sections />
        {path === "/" && (
          <div className="content">
            <PersonalInfo />
          </div>
        )}
        <div className="content">
          <Outlet />
        </div>
        <SwitchPagesTab />
      </main>
    </PageContextProvider>
  );
};
