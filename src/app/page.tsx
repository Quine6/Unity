"use client";

import ClientOnly from "../components/ClientOnly";
import AppClient from "../components/AppClient";

export default function Page() {
  return (
    <ClientOnly>
      <AppClient />
    </ClientOnly>
  );
}
