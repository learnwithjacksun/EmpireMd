import { useState, type ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";
import ModeToggle from "@/components/ui/mode-toggle";
import { dashboardNav } from "@/layouts/nav";

const GITHUB_URL = "https://github.com";
// const TELEGRAM_URL = "https://t.me";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-background text-main flex">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col border-r border-line bg-background transition-transform duration-200 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-5 pt-6 pb-4">
          <NavLink
            to="/"
            className="text-lg font-bold tracking-[0.18em] uppercase"
            onClick={() => setSidebarOpen(false)}
          >
            EmpireMD
          </NavLink>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="h-10 w-10 flex items-center justify-center rounded-md bg-secondary lg:hidden"
              aria-label="Close sidebar"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <nav className="flex-1 px-3 py-2 space-y-1">
          {dashboardNav.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-foreground text-main"
                    : "text-muted hover:bg-foreground/70 hover:text-main"
                }`
              }
            >
              <Icon size={16} strokeWidth={1.75} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="px-5 pb-5 space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs text-muted">Theme</span>
            <ModeToggle />
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-line bg-background px-3 py-3 hover:bg-foreground"
          >
            <span className="h-9 w-9 center rounded-lg bg-foreground">
              <Github size={18} />
            </span>
            <span className="text-left leading-tight">
              <span className="block text-sm font-medium">Login</span>
              <span className="block text-xs text-muted">Use GitHub.</span>
            </span>
          </a>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 lg:hidden">
          <button
            type="button"
            className="h-10 w-10 center rounded-lg border border-line bg-secondary"
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={18} />
          </button>
          <p className="text-sm font-bold tracking-[0.16em] uppercase">
            EmpireMD
          </p>
          <ModeToggle />
        </header>
        <main className="flex-1 overflow-y-auto px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
          {children}
        </main>
      </div>
    </div>
  );
}
