import React, { ReactNode } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ROOM',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
};

function RootLayout({children}:{children:ReactNode}) {
  return (
    <main>{children}</main>
  )
}

export default RootLayout