import { ReactNode } from "react";
import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'


const font = Inter({ subsets: ["latin"] });

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          <PlausibleProvider domain={config.domainName} />
          <GoogleTagManager gtmId="GTM-TKFGJDZK" />
          <script defer data-domain="partnerwise.io" src="https://plausible.io/js/script.js"></script>
          <script async src="https://cdn.tolt.io/tolt.js" data-tolt="acec7d7c-d622-40ba-95ec-8d5b21564e28"></script>
        </head>
      )}
      <body>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
