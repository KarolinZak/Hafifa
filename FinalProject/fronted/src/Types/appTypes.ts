import type { ReactNode } from "react";

export interface AppRoute {
  path : string;
  element: ReactNode,
  protected: boolean,
};

export interface MenuRoutes {
  routeName: string;    
  routeIcon: React.ElementType;
}
