"use client";

import Clarity from "@microsoft/clarity";
import { useEffect, useRef } from "react";

const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? "";

export default function MicrosoftClarity() {
  const started = useRef(false);

  useEffect(() => {
    if (!projectId || started.current) return;
    started.current = true;
    Clarity.init(projectId);
  }, []);

  return null;
}
