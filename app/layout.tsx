import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'KCS Green Energy Solutions | Solar Advisory & Project Management',
  description: 'End-to-end renewable energy advisory, engineering, project management and asset management services from Coimbatore, India.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
