import { cn } from "@/lib/utils";

/**
 * SectionHeading — consistent heading + subtitle for every section.
 */
export function SectionHeading({
  title,
  subtitle,
  className,
  centered = false,
}) {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}