import Home from "../components/Home.jsx";
import Fsd from "../components/FullStackDevelopment.jsx";
import Ds from '../components/DataScience.jsx';
import Cyber from "../components/CyberSecurity.jsx";
import Career from "../components/Career.jsx";

export const Approutes = [
  {
    path: "/",
        element: <Home />,
  },
  {
    path: "/FullStackDevelopment",
    element: <Fsd />,
  },
  {
    path: "/DataScience",
    element: <Ds />,
  },
  {
    path: "/CyberSecurity",
    element: <Cyber />,
  },
  {
    path: "/Career",
    element: <Career />,
  },
];

export default Approutes;
