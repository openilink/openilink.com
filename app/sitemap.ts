import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://openilink.com';

  // 静态页面
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // 文档页面
  const docSlugs = [
    '',
    'guide',
    'guide/quick-start',
    'guide/architecture',
    'hub',
    'hub/deployment',
    'hub/websocket',
    'hub/webhook',
    'hub/ai-reply',
    'hub/authentication',
    'hub/apps',
    'hub/tracing',
    'sdk',
    'sdk/node',
    'sdk/php',
    'sdk/go',
    'sdk/python',
    'sdk/csharp',
    'sdk/java',
    'api',
    'repositories',
    'roadmap',
    'community',
  ];

  const docPages: MetadataRoute.Sitemap = docSlugs.map((slug) => ({
    url: `${baseUrl}/docs${slug ? `/${slug}` : ''}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: slug === '' ? 0.9 : 0.7,
  }));

  return [...staticPages, ...docPages];
}
