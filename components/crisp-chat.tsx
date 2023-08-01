"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('05387ad6-209c-45ea-aa72-97e52c27242c')
  }, []);
  return null
};
