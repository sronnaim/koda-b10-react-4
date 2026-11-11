import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import AppLayout from './App';
import { addMessage } from './lib/messages';

const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "contact-us",
        Component: ContactUs,
        action: async ({ request }) => {
          let formData = await request.formData();
          formData.set("createdAt", Date.now())
          const submitted = Object.fromEntries(formData.entries())

          addMessage(submitted)

          return submitted
        }
      },
      { path: "about", Component: About }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
