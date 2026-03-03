import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Column<T> {
  key: string;
  header: string;
  render: (item: T) => ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
  actions?: (item: T) => ReactNode;
  className?: string;
}

export function DataTable<T extends { id: string }>({ columns, data, onRowClick, actions, className }: DataTableProps<T>) {
  return (
    <div className={cn("rounded-lg border border-border overflow-hidden", className)}>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              {columns.map(col => (
                <th key={col.key} className={cn("px-4 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium", col.className)}>
                  {col.header}
                </th>
              ))}
              {actions && <th className="px-4 py-3 text-right text-xs uppercase tracking-wider text-muted-foreground font-medium">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr
                key={item.id}
                className={cn("border-b border-border last:border-0 hover:bg-muted/20 transition-colors", onRowClick && "cursor-pointer")}
                onClick={() => onRowClick?.(item)}
              >
                {columns.map(col => (
                  <td key={col.key} className={cn("px-4 py-3 text-foreground", col.className)}>
                    {col.render(item)}
                  </td>
                ))}
                {actions && (
                  <td className="px-4 py-3 text-right" onClick={e => e.stopPropagation()}>
                    {actions(item)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden divide-y divide-border">
        {data.map(item => (
          <div
            key={item.id}
            className={cn("p-4 space-y-2", onRowClick && "cursor-pointer")}
            onClick={() => onRowClick?.(item)}
          >
            {columns.map(col => (
              <div key={col.key} className="flex items-center justify-between gap-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{col.header}</span>
                <span className="text-sm text-foreground text-right">{col.render(item)}</span>
              </div>
            ))}
            {actions && (
              <div className="pt-2 flex justify-end" onClick={e => e.stopPropagation()}>
                {actions(item)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
