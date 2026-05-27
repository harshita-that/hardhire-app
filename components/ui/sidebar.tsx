"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { ds } from "@/lib/design-system";
import { motion as motionPresets } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  const nav = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Contractors", href: "/contractors" },
    { name: "Reports", href: "/reports" },
    { name: "Settings", href: "/settings" },
  ];

  return (
    <aside className={ds.layout.sidebar}>
      <div className="mb-6 px-2">
        <div className={cn(ds.text.pageTitle, "text-sm")}>HardHire</div>
        <div className={ds.text.caption}>Safety Intelligence</div>
      </div>

      <nav className="flex-1 space-y-0.5">
        {nav.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link key={item.href} href={item.href} className="relative block">
              {active ? (
                <motion.span
                  layoutId="sidebar-active"
                  className={ds.sidebar.activePill}
                  transition={motionPresets.sidebarSpring}
                />
              ) : null}
              <span
                className={cn(
                  ds.sidebar.navItem,
                  active ? ds.sidebar.navActive : ds.sidebar.navInactive
                )}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 border-t border-white/[0.08] px-2 pt-4 text-xs text-white/25">
        v1.0
      </div>
    </aside>
  );
}
