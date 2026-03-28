"use client";

import * as React from "react";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tab {
  title: string;
  icon: LucideIcon;
  type?: never;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
}

type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
}

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-primary",
  onChange,
}: ExpandableTabsProps) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const [hovered, setHovered] = React.useState<number | null>(null);
  const outsideClickRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(outsideClickRef as React.RefObject<HTMLElement>, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index: number) => {
    setSelected(index);
    onChange?.(index);
  };

  const Separator = () => (
    <div className="mx-1 h-[24px] w-[1.2px] bg-border" aria-hidden="true" />
  );

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        "flex flex-wrap items-center rounded-2xl border bg-background p-1 shadow-sm",
        className
      )}
      style={{ gap: "0.5rem" }}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }
        const Icon = tab.icon;
        const isExpanded = selected === index || hovered === index;

        return (
          <button
            key={tab.title}
            onClick={() => handleSelect(index)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              paddingLeft: isExpanded ? "1rem" : ".5rem",
              paddingRight: isExpanded ? "1rem" : ".5rem",
            }}
            className={cn(
              "relative flex items-center rounded-xl py-2 text-sm font-medium transition-colors duration-300",
              selected === index
                ? cn("bg-muted", activeColor)
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon size={20} />
            <span
              style={{
                overflow: "hidden",
                maxWidth: isExpanded ? "6rem" : "0",
                opacity: isExpanded ? 1 : 0,
                marginLeft: isExpanded ? "0.5rem" : "0",
                whiteSpace: "nowrap",
                display: "inline-block",
                transition: "max-width 0.3s ease, opacity 0.3s ease, margin-left 0.3s ease",
              }}
            >
              {tab.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}

