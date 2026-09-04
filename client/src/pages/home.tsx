import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { DashboardLayout } from "@/layouts";
import { dashboardNav } from "@/layouts/nav";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-2xl space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Get Started with{" "}
            <span className="relative isolate font-mono tracking-wide font-normal">
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-[0.12em] -z-10 h-[0.38em] bg-cyan-300/45 -rotate-4"
              />
              EmpireMD
            </span>
          </h1>
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            The complete WhatsApp platform: manage your bot, deploy in one
            click, and integrate messaging into your apps with our API.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {dashboardNav.map(
            ({ to, label, description, icon: Icon, iconClass }) => (
              <Link
                key={to}
                to={to}
                className="group rounded-2xl bg-secondary border border-line p-5 sm:p-6 hover:border-muted/40 transition-colors"
              >
                <Icon size={22} strokeWidth={1.75} className={iconClass} />
                <div className="mt-5 flex items-center gap-1">
                  <h2 className="text-base font-semibold">{label}</h2>
                  <ChevronRight
                    size={16}
                    className="text-muted transition-transform group-hover:translate-x-0.5"
                  />
                </div>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {description}
                </p>
              </Link>
            )
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
