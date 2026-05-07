import { createRoute } from "@tanstack/react-router";
import Contact from "../pages/Contact";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});
