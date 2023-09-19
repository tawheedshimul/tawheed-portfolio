import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Contact from "../../Pages/Contact/Contact/Contact";
import ErrorPage from "../../Pages/EroorPage/EroorPage";
import AboutMe from "../../Pages/About/AboutMe";
import Player from "../../Pages/Player/Player";
import Project from "../../Pages/Project/Project/Project";
import CardDetails from "../../Pages/Home/ProjectCard/CardDetails";
import Service from "../../Pages/Services/Service/Service";
import ServicesDynamic from "../../Pages/Services/ServiceSection/ServicesDynamic";




export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/projects',
        element: <Project></Project>
      },
      {
        path: '/about',
        element: <AboutMe></AboutMe>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/player',
        element: <Player></Player>
      },
      {
        path: "/project/:id",
        element: <CardDetails></CardDetails>
      },
      {
        path: "/services/:id",
        element: <ServicesDynamic></ServicesDynamic>
      },

    ]
  }
])