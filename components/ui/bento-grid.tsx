import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

interface BentoGridProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<'div'> {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    className={cn(
      'group relative col-span-1 flex flex-col justify-end overflow-hidden rounded-xl',
      'transform-gpu border border-neutral-800 bg-neutral-900/50 transition-colors hover:border-neutral-700',
      className,
    )}
    {...props}
  >
    {/* 背景区域 */}
    <div className="absolute inset-0">{background}</div>

    {/* 底部渐变遮罩 */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent" />

    {/* 内容区域 */}
    <div className="relative z-10 p-6">
      <div className="pointer-events-none flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
        <Icon className="h-10 w-10 origin-left transform-gpu text-neutral-500 transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="text-lg font-semibold text-neutral-200">
          {name}
        </h3>
        <p className="max-w-lg text-sm text-neutral-500">{description}</p>
      </div>

      <div className="pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden">
        <a
          href={href}
          className="pointer-events-auto inline-flex items-center gap-1 text-sm text-[#07C160] hover:underline"
        >
          {cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>

    {/* Hover CTA */}
    <div className="pointer-events-none absolute bottom-0 z-10 hidden w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex">
      <a
        href={href}
        className="pointer-events-auto inline-flex items-center gap-1 text-sm text-[#07C160] hover:underline"
      >
        {cta}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>

    {/* Hover overlay */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
