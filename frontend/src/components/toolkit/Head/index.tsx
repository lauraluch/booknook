// Bibliotecas Externas
import React from "react";
import NextHead from "next/head";
import shine from "@assets/images/shine.png";

interface HeadProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const Head: React.FC<HeadProps> = ({
  title,
  description,
  keywords,
  image,
  url,
}) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {keywords && <meta name="keywords" content={keywords} />}

      <link rel="apple-touch-icon" sizes="57x57" href={shine.src} />

      <link rel="icon" href={shine.src} />

      <link rel="manifest" href="/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </NextHead>
  );
};

export default Head;
