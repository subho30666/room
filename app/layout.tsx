import "./globals.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ROOM',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
};

export default function RoomLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
   <body className="bg-dark-2">
    {children}
   </body>
    </html>
  );
}
