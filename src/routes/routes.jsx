import { createBrowserRouter } from "react-router-dom";
import { Default } from "../Default/Default";
import PersonalInfo from "../components/PersonalInfo";
import AddOns from "../components/AddOns";
import PlanSelection from "../components/PlanSelection";
import Summary from "../components/Finish";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      { path: "/page1", element: <PersonalInfo /> },
      { path: "/page2", element: <PlanSelection /> },
      { path: "/page3", element: <AddOns /> },
      { path: "/page4", element: <Summary /> },
    ],
  },
]);
