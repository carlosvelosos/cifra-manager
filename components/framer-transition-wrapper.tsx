"use client";

import React from "react";

interface FramerTransitionWrapperProps {
  children: React.ReactNode;
}

/**
 * Legacy/iOS10 branch: animations removed for Safari 10 compatibility.
 * (framer-motion uses globalThis which throws ReferenceError on Safari 10.)
 */
export default function FramerTransitionWrapper({
  children,
}: FramerTransitionWrapperProps) {
  return <>{children}</>;
}
