import { createBrowserRouter } from "react-router-dom";
import { Default } from "../Default/Default";
import PersonalInfo from "../components/PersonalInfo";
import AddOns from "../components/AddOns";
import PlanSelection from "../components/PlanSelection";
import Finish from "../components/Finish";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      { path: "/personalinfo", element: <PersonalInfo /> },
      { path: "/plans", element: <PlanSelection /> },
      { path: "/addons", element: <AddOns /> },
      { path: "/finish", element: <Finish /> },
    ],
  },
]);
