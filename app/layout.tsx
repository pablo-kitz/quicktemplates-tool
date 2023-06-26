import { Montserrat as FontSans } from "next/font/google"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import BackgroundDecoration from "@/components/bg-decoration"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster, TooltipProvider } from "@/components/ui"

import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Next.js", "Templating", "React", "Tailwind CSS"],
  authors: [
    {
      name: "Pablo Kitzberger",
      url: siteConfig.links.githubProfile,
    },
  ],
  creator: "Pablo Kitzberger",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  // TODO: Add following metadata:
  // openGraph
  // twitter
  // icons
  // manifest
  icons: "../public/favicon.svg",
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider>
          <TooltipProvider>
            <BackgroundDecoration />
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
