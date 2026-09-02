import { cn } from "@/lib/utils";

type BrandMarkProps = {
  label: string;
  className?: string;
};

/**
 * Consistent section eyebrow + architectural red rule.
 */
export function BrandMark({ label, className }: BrandMarkProps) {
  return (
    <div className={cn(className)}>
      <p className="brand-eyebrow">{label}</p>
      <span className="brand-rule mt-5 block" aria-hidden />
    </div>
  );
}
