import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import { motion, AnimatePresence } from "framer-motion";

export const Router = () => {
  const [show, setShow] = useState(true);

  return (
    <Suspense>
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            {routes.map(({ componentPath, path }) => {
              const Component = lazy(() => import(`../${componentPath}`));
              return <Route key={path} path={path} element={<Component />} />;
            })}
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </Suspense>
  );
};
