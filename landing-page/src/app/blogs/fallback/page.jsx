'use client';

import { NewsLetterFooter } from '@/components/NewsLetterFooter'
import { Header } from '@/components/Header'
import { FallBackBlog } from '@/components/FallBackBlog';

function fallback() {
  return (
    <>
    <Header />
      <main>
        <FallBackBlog/>
        <NewsLetterFooter/>
      </main>
    </>
  )
}
export default fallback;

