import type { 
  Metadata, 
  Viewport 
} from "next";
import { ColorSchemeEnum } from "next/dist/lib/metadata/types/metadata-types";
import { NavigationDesktop } from "./_components/navigation_desktop/navigation_desktop";
import { NavigationMobile } from "./_components/navigation_mobile/navigation_mobile";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./klaro.css";
import { Footer } from "./_components/footer/footer";

const url: URL = new URL("https://www.tjarkprokoph.com");
const title: string = "CVCore: Tjark Prokoph";
const description: string = "Driven by data, fueled by creativity - turning ideas into impactful solutions. 🌱 I am a result-oriented professional with a drive for continuous learning and personal development. 👨🏻‍💻 My interests include software engineering and data science, especially machine learning. 🔎 I strive to deliver high quality results and thrive on every challenge I face.";

const montserrat = Montserrat({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  metadataBase: url,
  openGraph: {
    type: "website",
    url: url,
    title: title,
    description: description,
    siteName: title,
    images: "/opengraph-image.png"
  },
  twitter: { 
    card: "summary_large_image", 
    site: title, 
    creator: "Tjark Prokoph", 
    "images": "https://www.tjarkprokoph.com/twitter-image.png" 
  },
  title: title,
  description: description,
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  }
};
export const colorScheme: ColorSchemeEnum = 'light dark';
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          <meta name="google" content="nositelinkssearchbox"/>
          <meta name="google-site-verification" content="mnedaoKNNXG36r6l1UiIZ9QPB1idB58v_EVDwGjwCxM"/>
          <script data-type="application/javascript" type="application/javascript" data-name="google-tag-manager" src="/gtm.js.txt" async></script>
          <script defer type="application/javascript" src="/klaro_config.js" async></script>
          <script defer data-config="klaroConfig" type="application/javascript" src="https://cdn.kiprotect.com/klaro/v0.7/klaro.js" async></script>
        </head>
        <body className={montserrat.className}>
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PQ9ZCHDL" height="0" width="0" style={{display:"none", visibility:"hidden"}}></iframe></noscript>
          <NavigationDesktop></NavigationDesktop>
          <NavigationMobile></NavigationMobile>
          <main>{children}</main>
          <Footer></Footer>
        </body>
      </html>
    )
  }