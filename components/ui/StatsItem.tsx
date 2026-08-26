import { cn } from "@/lib/utils";

type StatsItemProps = {
  label: string;
  value: string;
  className?: string;
};

/**
 * Single statistic for project / company metric rows.
 */
export function StatsItem({ label, value, className }: StatsItemProps) {
  return (
    <div
      className={cn(
        "border-t border-line pt-4",
        className,
      )}
    >
      <p className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}
