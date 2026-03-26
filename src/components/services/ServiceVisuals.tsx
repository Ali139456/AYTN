/** Decorative hero visuals per service domain — no external assets */

export function InternetHeroVisual() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-500/25 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-blue-400/35 bg-gradient-to-br from-blue-600 to-cyan-600 p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-lg bg-white/15 p-3 backdrop-blur-sm">
            <svg
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
              />
            </svg>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium text-white/85">nbn® ready</p>
            <p className="text-2xl font-black text-white">AYTN</p>
          </div>
        </div>
        <p className="mt-8 text-xs font-medium text-white/90">
          Fibre · HFC · FTTP · Wireless
        </p>
      </div>
    </div>
  );
}

export function PhoneHeroVisual() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute -left-6 bottom-0 h-32 w-32 rounded-full bg-violet-400/30 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border-2 border-violet-300/40 bg-gradient-to-br from-violet-600 to-fuchsia-600 p-5 shadow-xl dark:border-violet-500/30">
        <div className="flex gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="h-10 w-12 rounded-sm bg-black/25" />
            <div className="h-2 w-12 rounded bg-white/35" />
            <div className="h-2 w-8 rounded bg-white/25" />
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <p className="text-[10px] uppercase tracking-wider text-white/70">
              Local numbers
            </p>
            <p className="text-lg font-bold text-white">AU wide</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center rounded-xl bg-black/25 py-3">
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.163-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function DomainHeroVisual() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="relative overflow-hidden rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-700 to-teal-900 p-6 shadow-2xl">
        <div className="flex items-center justify-center gap-2">
          <svg
            className="h-16 w-16 text-white/90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </div>
        <p className="mt-4 text-center font-mono text-lg font-bold text-white">
          yourbrand<span className="text-cyan-200">.com.au</span>
        </p>
        <p className="mt-1 text-center text-xs text-emerald-100/80">
          DNS · hosting · email DNS
        </p>
      </div>
    </div>
  );
}

export function ItHeroVisual() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="relative overflow-hidden rounded-2xl border border-sky-300/40 bg-gradient-to-br from-sky-600 to-indigo-700 p-6 shadow-xl dark:border-sky-500/30">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/15 p-3 backdrop-blur-sm">
            <p className="text-[10px] text-sky-100">Microsoft 365</p>
            <p className="text-sm font-bold text-white">Exchange</p>
          </div>
          <div className="rounded-xl bg-white/15 p-3 backdrop-blur-sm">
            <p className="text-[10px] text-sky-100">Teams</p>
            <p className="text-sm font-bold text-white">Collab</p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center rounded-xl bg-white/20 py-4 backdrop-blur-sm">
          <svg
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.864-3.864A3.75 3.75 0 006 15z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function OutageHeroVisual() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white p-6 shadow-md dark:border-zinc-700 dark:from-zinc-900 dark:to-zinc-950">
        <div className="flex items-end justify-center gap-2 pt-4">
          {[40, 65, 35, 80, 50].map((h, i) => (
            <div
              key={i}
              className="w-3 rounded-t bg-gradient-to-t from-blue-600 to-cyan-400"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-blue-500/10 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
          </span>
          Live status feed
        </div>
      </div>
    </div>
  );
}

export function TrustStripDefault() {
  return (
    <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-500 dark:text-zinc-500">
      <li className="flex items-center gap-2">
        <span className="text-amber-500" aria-hidden>
          ★★★★★
        </span>
        Australian-owned &amp; operated
      </li>
      <li className="flex items-center gap-2">
        <CheckGlyph />
        Local support
      </li>
      <li className="flex items-center gap-2">
        <CheckGlyph />
        No lock-in on selected services*
      </li>
    </ul>
  );
}

function CheckGlyph() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-emerald-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
