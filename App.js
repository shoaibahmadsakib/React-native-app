import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

import { AuthenticationContextProvider } from "./src/Service/authentification/authentification.context";
import { Navigation } from "./src/infrastructure/navigation/index";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCG4w2kTYflscs5uM4wQYneC2W2OR-tz74",
  authDomain: "mobile-food-delevary-app.firebaseapp.com",
  projectId: "mobile-food-delevary-app",
  storageBucket: "mobile-food-delevary-app.appspot.com",
  messagingSenderId: "724558082954",
  appId: "1:724558082954:web:9cc123e08d19a7b4d60e73",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
