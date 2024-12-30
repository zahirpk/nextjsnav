import Link from "next/link";
import React from "react";

export default function Login() {
  return (
<div className="flex flex-col items-center justify-center h-screen space-y-4">
  <p className="h-0 text-center">This is login page</p>
  <Link
    href="/"
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    Go to About
  </Link>
</div>


  );
}
