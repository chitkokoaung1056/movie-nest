import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description?: string;
  className?: string;
  action?: React.ReactNode;
};

export function SectionHeader({
  title,
  description,
  className,
  action,
}: Props) {
  return (
    <div className={cn("mb-10 flex items-end justify-between", className)}>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {title}
        </h2>

        {description && (
          <p className="text-sm text-slate-400">
            {description}
          </p>
        )}
      </div>

      {/* optional right side action */}
      {action && <div>{action}</div>}
    </div>
  );
}