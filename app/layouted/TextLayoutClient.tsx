"use client";

import dynamic from 'next/dynamic';

// TextLayout は gsap / budoux が window を参照するため、SSR すると
// `ReferenceError: window is not defined` で 500 になる。クライアントでのみ描画する。
const TextLayoutClient = dynamic(() => import('@/components/TextLayout'), { ssr: false });

export default TextLayoutClient;
