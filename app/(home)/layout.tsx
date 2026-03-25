import type { ReactNode } from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* 自定义首页导航栏 */}
      <nav className="fixed top-0 z-50 w-full overflow-hidden border-b border-neutral-800/50 bg-[#050505]/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-10">
          <Link href="/" className="flex items-center gap-2">
            <img src="/icon-white.svg" alt="OpeniLink" className="h-7 w-7" />
            <span className="font-mono text-sm font-bold tracking-tight text-white">
              Open<span className="text-[#07C160]">i</span>Link
            </span>
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/docs"
              className="font-mono text-xs uppercase tracking-wider text-neutral-400 transition-colors hover:text-white"
            >
              Docs
            </Link>
            <Link
              href="https://hub.openilink.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-neutral-400 transition-colors hover:text-white"
            >
              Hub
            </Link>
            <Link
              href="https://github.com/openilink"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-neutral-400 transition-colors hover:text-white"
            >
              GitHub
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}
