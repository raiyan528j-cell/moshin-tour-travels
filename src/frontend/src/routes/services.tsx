import { createRoute } from "@tanstack/react-router";
import Services from "../pages/Services";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});
