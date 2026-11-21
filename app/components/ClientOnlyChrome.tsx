"use client";

import dynamic from 'next/dynamic';

// Next.js 15 以降、`ssr: false` は Server Component（app/layout.tsx）では使えないため、
// クライアントコンポーネント側で定義して従来どおり SSR を無効にする。
export const Header = dynamic(() => import('./Header'), { ssr: false });
export const Footer = dynamic(() => import('./Footer'), { ssr: false });
