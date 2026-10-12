import styles from "./page.module.css";

const comandos = [
  { comando: "git init", descripcion: "Crea un repositorio nuevo" },
  { comando: "git add .", descripcion: "Prepara los cambios para guardarlos" },
  { comando: 'git commit -m "mensaje"', descripcion: "Guarda los cambios en el historial" },
  { comando: "git switch -c mi-rama", descripcion: "Crea una rama y cambia a ella" },
  { comando: "git push", descripcion: "Sube tus commits a GitHub" },
  { comando: "git pull", descripcion: "Trae los cambios de GitHub" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <h1>Git y GitHub</h1>
        <p>
          Guía rápida para entender qué es cada uno, en qué se diferencian y
          cómo trabajan juntos.
        </p>
      </header>

      <main className={styles.main}>
        <section className={styles.cards}>
          <article className={styles.card}>
            <h2>¿Qué es Git?</h2>
            <p>
              Git es un sistema de control de versiones que se instala en tu
              computador. Guarda el historial de cambios de tu proyecto para
              que puedas volver a cualquier versión anterior, probar ideas en
              ramas separadas y trabajar en equipo sin pisarte el trabajo.
            </p>
            <ul>
              <li>Funciona en local, sin necesidad de internet.</li>
              <li>Registra qué cambió, quién lo cambió y cuándo.</li>
              <li>Permite crear ramas y fusionarlas después.</li>
            </ul>
          </article>

          <article className={styles.card}>
            <h2>¿Qué es GitHub?</h2>
            <p>
              GitHub es una plataforma en internet que aloja repositorios Git.
              Funciona como una copia remota de tu proyecto, y añade
              herramientas para colaborar con otras personas.
            </p>
            <ul>
              <li>Guarda tu código en la nube como respaldo.</li>
              <li>Permite revisar cambios con pull requests.</li>
              <li>Ofrece issues para organizar tareas y errores.</li>
            </ul>
          </article>
        </section>

        <section className={styles.section}>
          <h2>¿En qué se diferencian?</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th></th>
                  <th>Git</th>
                  <th>GitHub</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Tipo</th>
                  <td>Herramienta de control de versiones</td>
                  <td>Servicio web para alojar repositorios</td>
                </tr>
                <tr>
                  <th>Dónde vive</th>
                  <td>En tu computador</td>
                  <td>En internet</td>
                </tr>
                <tr>
                  <th>Para qué sirve</th>
                  <td>Gestionar el historial del código</td>
                  <td>Compartir y colaborar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Cómo trabajan juntos</h2>
          <ol className={styles.steps}>
            <li>Haces cambios en tu proyecto y los guardas con Git (commit).</li>
            <li>Conectas tu repositorio local con uno en GitHub.</li>
            <li>Subes tus commits a GitHub con push.</li>
            <li>Otras personas los descargan con pull y colaboran.</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>Comandos básicos</h2>
          <ul className={styles.commands}>
            {comandos.map(({ comando, descripcion }) => (
              <li key={comando}>
                <code>{comando}</code>
                <span>{descripcion}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://git-scm.com/doc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentación de Git
        </a>
        <a
          href="https://docs.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentación de GitHub
        </a>
      </footer>
    </div>
  );
}
