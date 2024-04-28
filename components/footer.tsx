import React from 'react';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2030 Eli Manzo. All Rights Reserved
      </small>
      <p className="mb-2 text-xs">
        <span>About this website:</span> built with React & Next.js (App Router
        & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email
        & Resend, Vercel hosting
      </p>
      <p className="text-xs">
        Thanks to Bytegrad for inspiration for this porfolio and Md Tanvirul
        Haque for the assets.
      </p>
    </footer>
  );
}
