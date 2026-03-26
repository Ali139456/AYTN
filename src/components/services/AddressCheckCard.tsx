export function AddressCheckCard() {
  return (
    <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-zinc-700 dark:bg-zinc-900 sm:p-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-xl font-bold text-zinc-900 sm:text-2xl dark:text-zinc-50">
          Check what&apos;s available at your address
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Enter your full Australian address, choose <strong className="text-zinc-800 dark:text-zinc-200">home</strong> or{" "}
          <strong className="text-zinc-800 dark:text-zinc-200">business</strong>, then see real nbn® technology and plans for
          your line.
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Address
          </label>
          <div className="mt-2 rounded-xl border-2 border-dashed border-blue-200 bg-blue-50/50 px-4 py-3 text-sm text-zinc-600 dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-zinc-400">
            Start typing your street address…
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Property type
          </label>
          <div className="mt-2 flex gap-2">
            <span className="inline-flex flex-1 items-center justify-center rounded-xl border-2 border-blue-600 bg-blue-600 py-3 text-sm font-semibold text-white">
              Home
            </span>
            <span className="inline-flex flex-1 items-center justify-center rounded-xl border-2 border-zinc-200 bg-white py-3 text-sm font-semibold text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200">
              Business
            </span>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-xl text-center text-xs text-zinc-500 dark:text-zinc-500">
        Address checks run securely; your details stay in your session.
      </p>
    </section>
  );
}
