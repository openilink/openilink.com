import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2">
          <img src="/icon-white.svg" alt="OpeniLink" className="h-6 w-6" />
          <span className="font-mono text-sm font-bold tracking-tight">
            Open<span className="text-[#07C160]">i</span>Link
          </span>
        </span>
      ),
    },
    links: [
      { text: 'Hub', url: 'https://hub.openilink.com', external: true },
      { text: 'GitHub', url: 'https://github.com/openilink', external: true },
    ],
    githubUrl: 'https://github.com/openilink',
  };
}
