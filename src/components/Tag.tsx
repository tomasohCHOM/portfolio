export function Tag({ text }: { text: string }) {
  return (
    <span className="rounded-xl bg-contrast_muted px-2 text-[12px] font-semibold text-contrast">
      {text}
    </span>
  );
}
