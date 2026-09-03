import { USE_CASE_META, type UseCase } from "@/lib/use-cases";

/** Decorative colour dot — always paired with a visible label or an aria-label. */
export function UseCaseDot({ useCase, className = "" }: { useCase: UseCase; className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block size-2 shrink-0 rounded-full ${USE_CASE_META[useCase].dot} ${className}`}
    />
  );
}

/**
 * The shared use-case badge: colour dot + full category name on the tinted
 * category surface. Used on every Chat post surface and on use-case cards.
 */
export function UseCaseBadge({
  useCase,
  size = "sm",
  className = "",
}: {
  useCase: UseCase;
  size?: "xs" | "sm" | "md";
  className?: string;
}) {
  const meta = USE_CASE_META[useCase];
  const sizing =
    size === "xs"
      ? "px-1.5 py-[1.5px] text-[8.5px] tracking-[0.02em]"
      : size === "sm"
        ? "px-2 py-0.5 text-[11px]"
        : "px-2.5 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold leading-[1.5] ${sizing} ${meta.tone} ${className}`}
    >
      <UseCaseDot useCase={useCase} className={size === "xs" ? "size-1.5" : ""} />
      {meta.label}
    </span>
  );
}
