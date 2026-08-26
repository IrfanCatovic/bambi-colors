import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type PageShellProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

/**
 * Minimal page shell for routes that are not yet fully designed.
 */
export function PageShell({
  title,
  eyebrow,
  description,
  children,
  className,
}: PageShellProps) {
  return (
    <main className={cn("flex-1", className)}>
      <section className="border-b border-line bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            as="h1"
          />
        </Container>
      </section>
      {children ? (
        <section>
          <Container className="py-12 sm:py-16">{children}</Container>
        </section>
      ) : null}
    </main>
  );
}
