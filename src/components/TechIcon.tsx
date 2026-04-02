import {
  siApachekafka,
  siCaddy,
  siCloudflare,
  siCss,
  siDiscord,
  siDocker,
  siElectron,
  siExpress,
  siFastapi,
  siGrafana,
  siHtml5,
  siHuggingface,
  siJavascript,
  siJenkins,
  siKubernetes,
  siLangchain,
  siLanggraph,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNginx,
  siOpenai,
  siPostgresql,
  siPrometheus,
  siPython,
  siReact,
  siRedis,
  siSentry,
  siSocketdotio,
  siTailwindcss,
  siTraefikproxy,
  siTypescript,
} from "simple-icons";

const icons: Record<string, { path: string; hex: string }> = {
  Python: { path: siPython.path, hex: siPython.hex },
  JavaScript: { path: siJavascript.path, hex: siJavascript.hex },
  TypeScript: { path: siTypescript.path, hex: siTypescript.hex },
  HTML: { path: siHtml5.path, hex: siHtml5.hex },
  CSS: { path: siCss.path, hex: siCss.hex },
  SQL: { path: siMysql.path, hex: siMysql.hex },
  React: { path: siReact.path, hex: siReact.hex },
  "Next.js": { path: siNextdotjs.path, hex: "ffffff" },
  "Tailwind CSS": { path: siTailwindcss.path, hex: siTailwindcss.hex },
  FastAPI: { path: siFastapi.path, hex: siFastapi.hex },
  Express: { path: siExpress.path, hex: siExpress.hex },
  WebSockets: { path: siSocketdotio.path, hex: siSocketdotio.hex },
  "discord.py": { path: siDiscord.path, hex: siDiscord.hex },
  Electron: { path: siElectron.path, hex: siElectron.hex },
  LangChain: { path: siLangchain.path, hex: siLangchain.hex },
  LangGraph: { path: siLanggraph.path, hex: siLanggraph.hex },
  "Hugging Face": { path: siHuggingface.path, hex: siHuggingface.hex },
  "OpenAI API": { path: siOpenai.path, hex: "ffffff" },
  PostgreSQL: { path: siPostgresql.path, hex: siPostgresql.hex },
  MongoDB: { path: siMongodb.path, hex: siMongodb.hex },
  Sentry: { path: siSentry.path, hex: siSentry.hex },
  Prometheus: { path: siPrometheus.path, hex: siPrometheus.hex },
  Grafana: { path: siGrafana.path, hex: siGrafana.hex },
  Docker: { path: siDocker.path, hex: siDocker.hex },
  Kubernetes: { path: siKubernetes.path, hex: siKubernetes.hex },
  Jenkins: { path: siJenkins.path, hex: siJenkins.hex },
  Redis: { path: siRedis.path, hex: siRedis.hex },
  Nginx: { path: siNginx.path, hex: siNginx.hex },
  Caddy: { path: siCaddy.path, hex: siCaddy.hex },
  Traefik: { path: siTraefikproxy.path, hex: siTraefikproxy.hex },
  Kafka: { path: siApachekafka.path, hex: siApachekafka.hex },
  "Cloudflare R2": { path: siCloudflare.path, hex: siCloudflare.hex },
};

export default function TechIcon({
  name,
  className = "size-5",
}: {
  name: string;
  className?: string;
}) {
  const icon = icons[name];
  if (!icon) return null;

  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={`#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  );
}

export const techNames = Object.keys(icons);
