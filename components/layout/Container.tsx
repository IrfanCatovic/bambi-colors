import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
};

/**
 * Site content width — architectural scale (~1320px), not narrow editorial.
 */
export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
