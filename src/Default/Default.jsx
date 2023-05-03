import { Outlet } from "react-router-dom";
import TopNavigation from "../components/TopNavigation";
import { BottomNavigation } from "../components/BottomNavigation";
import { PageContextProvider } from "../context/context";
import { useLocation } from "react-router-dom";
import PersonalInfo from "../components/PersonalInfo";
import "./Default.css";

export const Default = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <PageContextProvider>
      <main className="layout">
        <TopNavigation />
        {(path === "/" || path === '') && (
          <div className="content">
            <PersonalInfo />
          </div>
        )}
        <div className="content">
          <Outlet />
        </div>
        <BottomNavigation />
      </main>
    </PageContextProvider>
  );
};
