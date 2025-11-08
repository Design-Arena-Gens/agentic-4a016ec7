import Link from "next/link";
import { buyingChecklist, recommendations } from "@/data/recommendations";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="max-w-2xl space-y-4">
            <p className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Trusted WiFi Upgrade Guide
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Hand-picked WiFi 7 routers that outperform ONO and stay secure for
              years.
            </h1>
            <p className="text-lg text-zinc-600">
              Skip the risky brands. These top-tier systems come from companies
              with industry-leading hardware, long-term firmware support, and
              proven security track records—so your home network stays fast and
              hazard-free.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-6 text-sm text-emerald-900 shadow-sm md:max-w-sm">
            <div className="font-semibold uppercase tracking-wide text-emerald-700">
              Upgrade Priorities
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <span>WiFi 7 radios for future-proof throughput and low latency.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <span>Multi-gig WAN/LAN for current and upcoming fiber plans.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <span>Regular security updates, WPA3, and threat filtering suites.</span>
              </li>
            </ul>
            <Link
              href="#recommendations"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              View Top Picks
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
        <section
          id="recommendations"
          className="space-y-8 rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-sm backdrop-blur"
        >
          <div>
            <h2 className="text-3xl font-semibold text-zinc-900">
              Elite WiFi 7 routers worth owning now
            </h2>
            <p className="mt-2 max-w-3xl text-base text-zinc-600">
              Each option below comes from a global networking leader with a
              strong reputation for longevity, consistent firmware updates, and
              robust threat protection. They deliver materially better
              performance than ONO-branded hardware while keeping your network
              locked down.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {recommendations.map((entry) => (
              <article
                key={entry.model}
                className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                        {entry.brand}
                      </p>
                      <h3 className="text-2xl font-semibold text-zinc-900">
                        {entry.model}
                      </h3>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {entry.wifiStandard}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-zinc-500">
                    {entry.tagline}
                  </p>
                  <p className="text-base text-zinc-700">{entry.whyBuy}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">
                      Standout capabilities
                    </h4>
                    <ul className="mt-2 space-y-2 text-sm text-zinc-600">
                      {entry.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 space-y-2 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
                  <div className="flex flex-wrap items-center gap-3 text-zinc-900">
                    <span className="font-semibold">Best for:</span>
                    <span>{entry.bestFor}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-zinc-900">
                    <span className="font-semibold">MSRP:</span>
                    <span>{entry.msrp}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-zinc-900">
                    <span className="font-semibold">Warranty & support:</span>
                    <span>{entry.warranty}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900">Security focus</p>
                    <ul className="mt-1 space-y-1">
                      {entry.securityNotes.map((note) => (
                        <li key={note} className="flex gap-2 text-zinc-600">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.5fr,1fr]">
          <div className="space-y-6 rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-sm backdrop-blur">
            <h2 className="text-2xl font-semibold text-zinc-900">
              How to choose the right alternative to ONO
            </h2>
            <p className="text-base text-zinc-600">
              Prioritize routers from manufacturers with transparent update
              schedules, recognized security partners, and proven component
              quality. Pair that with the right deployment plan to harden your
              network and boost performance across every room.
            </p>
            <div className="grid gap-3">
              {buyingChecklist.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-zinc-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="flex flex-col justify-between gap-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-emerald-900 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Quick security hardening tips
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                  <span>
                    Enable WPA3 and disable legacy TKIP devices to block weak
                    cipher attacks.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                  <span>
                    Schedule automatic firmware updates or check monthly for
                    security patches.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                  <span>
                    Segment smart devices into a guest or IoT network to limit
                    lateral movement.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                  <span>
                    Activate bundled malware shielding (AiProtection, Armor,
                    HomeShield, or Eero Plus) for added DNS/IP blocking.
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-300 bg-white/70 p-4 text-sm text-emerald-800">
              <p className="font-semibold text-emerald-900">
                Pro deployment move
              </p>
              <p className="mt-2">
                Combine a WiFi 7 router with a reputable UPS (APC, CyberPower) to
                keep power surges from shortening hardware lifespan and to avoid
                unexpected drops during firmware updates.
              </p>
            </div>
          </aside>
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-sm backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1fr,1.2fr] md:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-zinc-900">
                Why skip ONO-branded hardware?
              </h2>
              <p className="text-base text-zinc-600">
                ONO WiFi kits typically rebadge budget chipsets with limited
                firmware updates and minimal security track records. That leaves
                you exposed to unpatched vulnerabilities and shorter lifespans.
              </p>
              <p className="text-base text-zinc-600">
                Established networking companies invest in long software support
                windows, global certification labs, and hardened supply chains.
                Those factors translate into consistent performance and safer
                internet use over the years you will own the router.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-zinc-200">
              <table className="min-w-full divide-y divide-zinc-200 text-sm">
                <thead className="bg-zinc-50 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  <tr>
                    <th className="px-4 py-3">Factor</th>
                    <th className="px-4 py-3">Top-tier brands</th>
                    <th className="px-4 py-3">ONO-branded kits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-zinc-700">
                  <tr>
                    <td className="px-4 py-3 font-medium text-zinc-900">
                      Firmware cadence
                    </td>
                    <td className="px-4 py-3">Monthly or quarterly security releases</td>
                    <td className="px-4 py-3">Infrequent updates, limited change logs</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-zinc-900">
                      Hardware durability
                    </td>
                    <td className="px-4 py-3">High-efficiency chipsets, thermal design validation</td>
                    <td className="px-4 py-3">Budget components prone to thermal throttling</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-zinc-900">
                      Security tooling
                    </td>
                    <td className="px-4 py-3">Bundled threat intelligence from Trend Micro, Bitdefender</td>
                    <td className="px-4 py-3">Basic firewall with no active monitoring</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-zinc-900">
                      Smart home readiness
                    </td>
                    <td className="px-4 py-3">Matter, Thread, and IoT VLAN options</td>
                    <td className="px-4 py-3">Limited smart home integration or QoS control</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-zinc-900">
                      Support longevity
                    </td>
                    <td className="px-4 py-3">2–3 year warranties and mature support portals</td>
                    <td className="px-4 py-3">Short warranties and uncertain replacement paths</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            Built to help you transition from ONO hardware to proven WiFi 7
            systems with safer, long-lasting performance.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="https://www.wi-fi.org/"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-600 hover:text-emerald-700"
            >
              Wi-Fi Alliance certifications
            </Link>
            <Link
              href="https://www.trendmicro.com/en_us/business/products/iot/asus-router.html"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-600 hover:text-emerald-700"
            >
              Router security partners
            </Link>
            <span className="text-xs text-zinc-400">
              Last updated {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
