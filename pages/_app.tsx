import "raf/polyfill";

import { useRouter } from "next/router";
import { Text } from "@gluestack-ui/themed";
import { NextPage } from "next";

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  const onLogoutSuccess = () => {
    router.push("/auth/sign-in");
  };
  const onSignInSuccess = () => {
    router.push("/dashboard");
  };
  return (
    <main style={{ display: "flex", flex: 1 }}>
      <Text>Hello</Text>
    </main>
  );
}

export default MyApp;
