import type { Metadata } from 'next';
import { ApolloProvider } from '@mockp/network/src/config/apollo';
import '@mockp/ui/src/app/globals.css';
import { SessionProvider } from '@mockp/ui/src/components/molecules/SessionProvider';
import { Header } from '@mockp/ui/src/components/organisms/Header';
import { MenuItem } from '@mockp/util/types';

export const metadata: Metadata = {
  title: 'Mockp',
};

const MENUITEMS: MenuItem[] = [
  { label: 'Search', href: '/search' },
  { label: 'Bookings', href: '/bookings' },
  { label: 'About', href: '/about' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <ApolloProvider>
          <body>
            <Header menuItems={MENUITEMS} />
            {children}
          </body>
        </ApolloProvider>
      </SessionProvider>
    </html>
  );
}
