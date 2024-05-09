// source: https://github.com/shadcn-ui/ui/pull/363#issuecomment-1659259897

import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

const textVariants = cva('text-foreground', {
    variants: {
        variant: {
            h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
            h2: 'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight',
            h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
            h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
            p: 'leading-7 [&:not(:first-child)]:mt-6',
            lead: 'text-xl text-muted-foreground',
            large: 'text-lg font-semibold',
            small: 'text-sm font-medium leading-none',
            muted: 'text-sm text-muted-foreground',
        },
    },
    defaultVariants: {
        variant: "p",
    },
});

type VariantPropType = VariantProps<typeof textVariants>;

const variantElementMap: Record<
    NonNullable<VariantPropType['variant']>,
    string
> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    p: 'p',
    lead: 'p',
    large: 'div',
    small: 'small',
    muted: 'p',
};

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'div';

export interface TextProps
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof textVariants> {
    asChild?: boolean;
    as?: TextElement;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
    ({ className, variant, as, asChild, ...props }, ref) => {
        const Comp = asChild ? Slot : as ?? (variant ? variantElementMap[variant] : undefined) ?? 'div';
        return (
            <Comp
                className={cn(textVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Text.displayName = 'Text';

export { Text, textVariants };