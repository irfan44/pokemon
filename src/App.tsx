import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import PageLayout from "./components/PageLayout.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PageLayout>
          <Home />
        </PageLayout>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
