import * as React from "react"
import Link from "next/link"
import {
  ClipboardIcon,
  FileText,
  FlaskConicalIcon,
  PackageCheck,
  WrapText,
} from "lucide-react"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { forStrings } from "@/lib/for-strings"
import { cn } from "@/lib/utils"
import LandingAnimation from "@/components/landing-animation"
import { buttonVariants } from "@/components/ui"

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/pablo-kitz/quicktemplates-tool",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

export default async function LandingPage() {
  const stars = await getGitHubStars()

  return (
    <>
      <section className="space-y-6 py-4 md:py-8 lg:py-16">
        <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <WrapText
            className={cn(
              "mx-auto h-16 w-16 rounded-full border p-2 text-foreground"
            )}
          />
          <h1 className="font-heading text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
            Text templating for
          </h1>
          <LandingAnimation strings={forStrings} />
          <p className="max-w-[42rem] leading-normal text-foreground p-6 sm:text-xl sm:leading-8">

            Sharing features and multiple types of placeholders coming soon.
            Follow along on Github.
          </p>
          <div className="space-x-4">
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                ""
              )}
            >
              Get Started
            </Link>
            <Link
              href={siteConfig.links.githubRepo}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                ""
              )}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-muted py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features & Use Cases
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Store your most commonly used pieces of text and simplify the
            process of replacing variable information.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 grid-cols-2 md:max-w-[64rem]">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex sm:h-[180px] flex-col justify-between rounded-md p-6">
              <FileText className="bg-muted p-1 rounded-md h-10 w-10" />
              <div className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base">
                  Same Text, Different Details
                </h3>
                <p className="text-[10px] sm:text-sm">
                  By setting different words or sections of your document as a
                  &apos;Placeholder&apos; customized text is as simple as it
                  gets.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex sm:h-[180px] flex-col justify-between rounded-md p-6">
              <ClipboardIcon className="bg-muted p-1 rounded-md h-10 w-10" />
              <div className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base">
                  Generate & Copy in Seconds
                </h3>
                <p className="text-[10px] sm:text-sm">
                  Easily complete the input for your placeholders & copy the
                  output to your clipboard.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex sm:h-[180px] flex-col justify-between rounded-md p-6">
              <PackageCheck className="bg-muted p-1 rounded-md h-10 w-10" />
              <div className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base">Easy Setup</h3>
                <p className="text-[10px] sm:text-sm">
                  Login is as simple as using an account from your favourite
                  provider. Currently supports Github & Google.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex sm:h-[180px] flex-col justify-between rounded-md p-6">
              <FlaskConicalIcon className="bg-muted p-1 rounded-md h-10 w-10" />
              <div className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base">Flexible</h3>
                <p className="text-[10px] sm:text-sm">
                  Useful for commonly used texts, recurring instructions and
                  many more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="open-source" className="container py-6 md:py-10 lg:py-12">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Open Source
          </h2>
          <Link
            href={siteConfig.links.githubRepo}
            target="_blank"
            rel="noreferrer"
            className="flex"
          >
            <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-foreground"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
              <div className="flex h-10 items-center rounded-md border border-muted bg-card px-4 font-medium">
                <span className=" mr-2">{stars}</span>
                {"  "}
                {stars == "1" ? "Star on GitHub" : "Stars on GitHub"}
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
