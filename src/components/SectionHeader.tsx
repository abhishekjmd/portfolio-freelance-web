import { FadeIn, Stagger } from './FadeIn';
import clsx from 'clsx';
import React from 'react';

export default function SectionHeader({ icon, className, title, description }: { icon: React.ReactNode; className?: string; title: string; description: React.ReactNode }) {
  return (
    <Stagger className={clsx('flex flex-col gap-4 sm:pl-0 mt-4', className)}>
      <div className="flex gap-6 pl-3">
        <FadeIn
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="relative"
        >
          {icon}
        </FadeIn>
        <FadeIn
          variants={{
            hidden: { opacity: 0, x: -15 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-2xl leading-6">{title}</h2>
        </FadeIn>
      </div>
      <div className="">
        <FadeIn
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-6 text-4xl"
        >
          {description}
        </FadeIn>
      </div>
    </Stagger>
  );
}
