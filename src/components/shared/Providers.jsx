"use client";

import { Provider } from "react-redux";
import { store } from "@/redux";
import { Toaster } from "react-hot-toast";
import AnalyticsTracker from "./AnalyticsTracker";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <AnalyticsTracker />
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </Provider>
  );
}
