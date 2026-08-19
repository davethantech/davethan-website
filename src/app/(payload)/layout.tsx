import configPromise from '@payload-config';
import '@payloadcms/next/css';
import '../../payload-theme.css';
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts';
import { importMap } from './importMap';
import React from 'react';
import type { ServerFunctionClient } from 'payload';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    icon: '/davethan_logo.webp',
    shortcut: '/davethan_logo.webp',
    apple: '/davethan_logo.webp',
  },
};


type Args = {
  children: React.ReactNode;
};

const serverFunction: ServerFunctionClient = async function (args) {
  'use server';
  return handleServerFunctions({
    ...args,
    config: configPromise,
    importMap,
  });
};

export default function Layout({ children }: Args) {
  return (
    <RootLayout config={configPromise} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  );
}
