import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ROOM',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
};

export default function HomeLayout({children}: {children: React.ReactNode;}) {
  return (
   <main className="relative">
    Navbar
    <div className="flex">
      Sidebar
      <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
        <div className="w-full"></div>
      </section>
    </div>
    {children}
   </main>
  );
}
