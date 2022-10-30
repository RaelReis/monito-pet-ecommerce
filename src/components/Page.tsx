import Head from "next/head";
import React from "react";

interface PageProps {
  title: string;
  children: React.ReactNode;
  description: string;
}

export function Page({ title, children, description }: PageProps) {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </React.Fragment>
  );
}
