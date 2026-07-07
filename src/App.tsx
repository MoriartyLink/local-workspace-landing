import {
  Github,
  Download,
  BookOpen,
  Mail,
  PlayCircle,
  Rocket,
  FolderKanban,
  Cpu,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const SITE = {
  appName: "local-workspace",
  tagline: "Your local productivity hub for managing every project on your machine.",
  logoSrc: "/logo.png",
  // Local demo video in /public. Set to "" to show the "coming soon" placeholder.
  videoSrc: "/local-workspace-demo1.mp4",
  appImageUrl: "https://github.com/MoriartyLink/local-workspace/releases",
  docsUrl: "https://github.com/MoriartyLink/local-workspace#readme",
  developer: {
    name: "MoriartyLink",
    githubUrl: "https://github.com/MoriartyLink",
    email: "moriartylink@gmail.com",
  },
}

const FEATURES = [
  {
    icon: FolderKanban,
    title: "Project hub",
    description:
      "Organize and switch between your local projects from one clean dashboard.",
  },
  {
    icon: Cpu,
    title: "Lightweight",
    description: "A fast, native desktop experience that stays out of your way.",
  },
]

const DOCS = [
  {
    id: "architecture",
    title: "Architecture",
    body: "local-workspace is a desktop application packaged as a single, self-contained AppImage. It is built from two cooperating layers: a thin native shell that owns the window, filesystem access, and process spawning, and a React-based UI that renders the interface and talks to the shell over an IPC bridge. Nothing in the UI layer touches the OS directly — every privileged operation is brokered by the shell.",
    bullets: [
      "Native shell — owns the OS window, reads the filesystem, and spawns child processes. [EDIT: name the real framework, e.g. Electron / Tauri / Wails.]",
      "Renderer / UI — a React single-page app that requests data and actions through the bridge instead of calling the OS directly.",
      "Local store — project metadata is persisted on disk and never leaves the machine.",
    ],
  },
  {
    id: "setup",
    title: "Setup & installation",
    body: "Because the app is one self-contained AppImage, there is no system-wide install and no dependency to resolve. It runs on any mainstream 64-bit Linux distribution.",
    steps: [
      "Download local-workspace.AppImage from the latest release.",
      "Make it executable: chmod +x local-workspace.AppImage",
      "Launch it: ./local-workspace.AppImage (or double-click from a file manager).",
      "On first run, choose the root folders local-workspace should index.",
    ],
    bullets: [
      "No root or sudo required — everything runs inside your user session.",
      "Optional desktop integration: drop the AppImage into ~/.local/bin and add a .desktop entry. [EDIT: adjust to your packaging convention.]",
      "User data lives in [EDIT: e.g. ~/.config/local-workspace] and holds the cached index plus settings.",
    ],
  },
  {
    id: "window",
    title: "The window & UI",
    body: "The single main window is divided into three regions that stay in sync through local application state:",
    bullets: [
      "Sidebar — a virtualized list of every tracked project with a debounced search filter.",
      "Workspace — the detail view for the selected project: file tree, recent commands, and notes.",
      "Status bar — shows the active project, current git branch, and quick-action buttons.",
    ],
  },
  {
    id: "how-it-works",
    title: "How it works",
    body: "Internally the app performs four jobs to keep your projects organized and runnable:",
    bullets: [
      "Indexing — it recursively scans the folders you select, reads lightweight metadata (git remote/branch, manifest files), and writes a local cache so the UI stays instant on every open.",
      "Storage — all project metadata is kept in a local database/file on disk; no network calls are made and nothing is uploaded.",
      "Execution — the quick-run bar spawns commands as child processes through your system shell, pipes stdout/stderr back into the UI, and tracks each process lifecycle (start, exit, kill).",
      "Resolution — selecting a project resolves its absolute path once and reuses it for every action (open in editor, run, reveal in file manager).",
    ],
  },
]


function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_50%_-10%,oklch(0.55_0.22_285/18%),transparent)]" />
      <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <Rocket className="size-3.5" />
          Now available for Linux
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {SITE.appName}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted-foreground">
          {SITE.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href={SITE.appImageUrl} download>
              <Download />
              Download AppImage
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={SITE.docsUrl} target="_blank" rel="noreferrer">
              <BookOpen />
              Read the docs
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function VideoSection() {
  const hasVideo = Boolean(SITE.videoSrc)

  return (
    <section id="video" className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">See it in action</h2>
        <p className="mt-2 text-muted-foreground">
          A quick walkthrough of local-workspace.
        </p>
      </div>
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        {hasVideo ? (
          <video
            className="aspect-video w-full bg-black"
            src={SITE.videoSrc}
            controls
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-muted text-muted-foreground">
            <PlayCircle className="size-14 opacity-70" />
            <p className="text-sm font-medium">Video coming soon</p>
            <p className="max-w-sm text-center text-xs text-muted-foreground/80">
              Set <code className="rounded bg-background px-1 py-0.5">videoSrc</code>{" "}
              in <code className="rounded bg-background px-1 py-0.5">src/App.tsx</code>{" "}
              to embed your demo.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Why local-workspace</h2>
        <p className="mt-2 text-muted-foreground">
          Everything you need to manage local projects, in one place.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <Card key={title}>
            <CardHeader>
              <div className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}



function DownloadSection() {
  return (
    <section id="download" className="mx-auto max-w-5xl px-6 py-16">
      <Card className="overflow-hidden">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <CardHeader>
            <CardTitle className="text-2xl">Get the AppImage</CardTitle>
            <CardDescription>
              No installer required. Download, make it executable, and run it on
              any Linux distribution.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-start md:justify-end">
            <Button asChild size="lg">
              <a href={SITE.appImageUrl} download>
                <Download />
                Download AppImage
              </a>
            </Button>
          </CardContent>
        </div>
        <CardFooter className="text-xs text-muted-foreground">
          After downloading, run{" "}
          <code className="mx-1 rounded bg-muted px-1.5 py-0.5">
            chmod +x local-workspace.AppImage
          </code>{" "}
          then double-click to launch.
        </CardFooter>
      </Card>
    </section>
  )
}

function DocsSection() {
  return (
    <section id="docs" className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Documentation</h2>
        <p className="mt-2 text-muted-foreground">
          How local-workspace is built, installed, and how it works under the
          hood.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {DOCS.map((doc) => (
          <a
            key={doc.id}
            href={`#doc-${doc.id}`}
            className="rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            {doc.title}
          </a>
        ))}
      </div>

      <div className="space-y-6">
        {DOCS.map((doc) => (
          <Card key={doc.id} id={`doc-${doc.id}`} className="scroll-mt-24">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <BookOpen className="size-5 text-primary" />
                {doc.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>{doc.body}</p>
              {doc.steps && (
                <ol className="list-decimal space-y-1 pl-5">
                  {doc.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              )}
              {doc.bullets && (
                <ul className="list-disc space-y-1 pl-5">
                  {doc.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="h-auto p-0">
                <a href={SITE.docsUrl} target="_blank" rel="noreferrer">
                  Read the full docs on GitHub →
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Contact the developer</CardTitle>
          <CardDescription>
            Questions, feedback, or bug reports? Reach out to{" "}
            {SITE.developer.name}.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={SITE.developer.githubUrl} target="_blank" rel="noreferrer">
              <Github />
              GitHub: {SITE.developer.name}
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`mailto:${SITE.developer.email}`}>
              <Mail />
              Email developer
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <img
            src={SITE.logoSrc}
            alt={`${SITE.appName} logo`}
            className="size-6 rounded-md"
          />
          {SITE.appName}
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#video" className="hover:text-foreground">
            Demo
          </a>
          <a href="#download" className="hover:text-foreground">
            Download
          </a>
          <a href="#docs" className="hover:text-foreground">
            Docs
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </nav>
        <Button asChild size="sm">
          <a href={SITE.appImageUrl} download>
            <Download />
            Download
          </a>
        </Button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {SITE.appName}. Built by{" "}
          <a
            href={SITE.developer.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground hover:underline"
          >
            {SITE.developer.name}
          </a>
          .
        </p>
        <div className="flex items-center gap-4">
          <a
            href={SITE.developer.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            <Github className="size-4" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={`mailto:${SITE.developer.email}`} className="hover:text-foreground">
            <Mail className="size-4" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
        <DownloadSection />
        <DocsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

