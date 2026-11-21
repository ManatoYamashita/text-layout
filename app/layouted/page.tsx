import React from 'react';
import TextLayout from '@/components/TextLayout';
import styles from './page.module.scss';
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface LayoutPageProps {
  // Next.js 15 以降、searchParams は Promise として渡される
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function LayoutPage({ searchParams }: LayoutPageProps) {
  const { text } = await searchParams;

  if (!text || typeof text !== 'string') {
    return (
      <div className={styles.layoutContainer}>
        <h1 className={styles.title}>☕️エラー: テキストを入力してください。</h1>
        <div className={styles.error}>No text provided.</div>
      </div>
    );
  }

  return (
    <div className={styles.layoutContainer}>
      <h1 className={styles.title}>✨Looks good?</h1>
      <TextLayout text={text} />
      <div className="text-center">
        <Link href="/" aria-label='もう一度試す（retry）' className={styles.retryBtn}>
          <Button>
              もう一度試す (retry)
          </Button>
        </Link>
      </div>
    </div>
  );
}
