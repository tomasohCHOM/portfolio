import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import PortfolioV0 from "@/pages/v0";
import PortfolioV1 from "@/pages/v1";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const v1 = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: PortfolioV1,
});

const v0 = createRoute({
  getParentRoute: () => rootRoute,
  path: "/v0",
  component: PortfolioV0,
});

const routeTree = rootRoute.addChildren([v1, v0]);

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
