import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./components/layouts/PageLayout.tsx";
import Details from "./pages/Details.tsx";
import Home from "./pages/Home.tsx";
import MyPokemon from "./pages/MyPokemon.tsx";

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
    {
      path: "/pokemon/:name",
      element: (
        <PageLayout>
          <Details />
        </PageLayout>
      ),
    },
    {
      path: "/my-pokemon",
      element: (
        <PageLayout>
          <MyPokemon />
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
