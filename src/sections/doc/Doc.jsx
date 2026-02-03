"use client";
import { useState } from "react";

import OHomeDoc from "../../components/organisms/HomeDoc";
import ODoc from "@/components/organisms/Doc";

export default function SDoc({ data }) {
  const [route, setRoute] = useState("home");

  return !route || route === "home" ? (
    <OHomeDoc data={data} setState={setRoute} />
  ) : (
    <ODoc data={data.documentation} />
  );
}
