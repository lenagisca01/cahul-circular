export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mt-6 text-3xl font-bold text-emerald-900">
        Împreună pentru un Cahul mai verde
      </h1>

      <p className="mt-4 text-slate-600">
        Descoperă cum poți reutiliza obiectele și colecta selectiv
        deșeurile în municipiul Cahul.
      </p>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        <article className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-emerald-800">
            Anunțuri de reutilizare
          </h2>
          <p className="mt-3">
            Lista obiectelor oferite pentru donație va apărea aici.
          </p>
        </article>

        <article className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-emerald-800">
            Puncte de colectare
          </h2>
          <p className="mt-3">
            Locațiile pentru colectarea selectivă vor apărea aici.
          </p>
        </article>

        <article className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-emerald-800">
            Recomandări
          </h2>
          <p className="mt-3">
            Sfaturile despre reciclare și reutilizare vor apărea aici.
          </p>
        </article>
      </section>
    </main>
  );
}