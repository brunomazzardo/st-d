import React from "react";
// @ts-ignore
import { Authentication } from "@compliance-total/react-lib";
import { Redirect } from "react-router-dom";
import { NonAuthRoutes } from "./Routes";

type RequiredRole = {
  role: string[];
  attribution?: string;
};

type Props = {
  children: any;
  requiredRoles?: RequiredRole[];
};

const defaultPolicy = { role: ["co", "ceo-co", "ceo"] };

const ProtectedRoutes = ({
  children,
  requiredRoles = [defaultPolicy]
}: Props): JSX.Element => {
  const isLoggedIn = Authentication.isAuthenticated();
  if (!isLoggedIn) return <Redirect to={NonAuthRoutes.login} />;
  const hasAuth = Authentication.checkPolicies(requiredRoles);
  if (hasAuth) return children;
  return <Redirect to={NonAuthRoutes.login} />;
};

export default ProtectedRoutes;
