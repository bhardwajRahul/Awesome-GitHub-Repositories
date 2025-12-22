import type { Metadata } from "next";

const siteUrl = "https://awesome-gh-repos.vercel.app";

export const defaultMetadata: Metadata = {
  title: {
    default: "Awesome GitHub Repositories",
    template: "%s | Awesome GitHub Repositories",
  },
  description:
    "Discover curated, high-quality GitHub repositories across every tech stack. Lightning-fast search, filters, and developer-friendly UI.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Awesome GitHub Repositories",
    description:
      "Curated GitHub repositories with filters, categories, and beautiful UI for developers.",
    siteName: "Awesome GitHub Repositories",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Awesome GitHub Repositories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AvinashSingh_20",
    title: "Awesome GitHub Repositories",
    description:
      "Curated GitHub repositories with filters, categories, and beautiful UI for developers.",
    images: [`${siteUrl}/og.png`],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export function buildPageMetadata(
  title: string,
  description?: string,
  path?: string
): Metadata {
  const url = path ? `${siteUrl}${path}` : siteUrl;
  return {
    ...defaultMetadata,
    title,
    description: description ?? defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description: description ?? defaultMetadata.openGraph?.description,
      url,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description: description ?? defaultMetadata.twitter?.description,
    },
  };
}
