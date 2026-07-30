import {
  BookOpen,
  Cpu,
  Download,
  FolderKanban,
  GitBranch,
  Github,
  Mail,
  Monitor,
  NotebookPen,
  Package,
  Search,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const SITE = {
  appName: "Local Workspace",
  version: "1.0.3",
  tagline: "One simple place to find, open, and manage every project on your computer.",
  logoSrc: "/logo.png",
  videoSrc: "/local-workspace-demo1.mp4",
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
    title: "All projects, one view",
    description: "Add your project folders and open any workspace in seconds.",
  },
  {
    icon: Search,
    title: "Quick search",
    description: "Find the project you need without digging through folders.",
  },
  {
    icon: TerminalSquare,
    title: "Built-in terminal",
    description: "Run project commands and follow their output inside the app.",
  },
  {
    icon: GitBranch,
    title: "Git at a glance",
    description: "See your current branch and repository status as you work.",
  },
  {
    icon: NotebookPen,
    title: "Project notes",
    description: "Keep useful notes and reminders beside each local project.",
  },
  {
    icon: ShieldCheck,
    title: "Local by default",
    description: "Your projects and workspace data stay on your computer.",
  },
]

const DOWNLOADS = [
  {
    icon: Monitor,
    platform: "Windows",
    format: "64-bit installer",
    filename: "Local Workspace Setup 1.0.3.exe",
    href: "/Local%20Workspace%20Setup%201.0.3.exe",
    action: "Download for Windows",
  },
  {
    icon: Package,
    platform: "Linux",
    format: "AppImage",
    filename: "Local Workspace-1.0.3.AppImage",
    href: "/Local%20Workspace-1.0.3.AppImage",
    action: "Download AppImage",
  },
  {
    icon: Package,
    platform: "Linux",
    format: "Debian / Ubuntu",
    filename: "local-workspace_1.0.3_amd64.deb",
    href: "/local-workspace_1.0.3_amd64.deb",
    action: "Download .deb",
  },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <img
            src={SITE.logoSrc}
            alt={`${SITE.appName} logo`}
            className="size-8 rounded-lg"
          />
          <span className="hidden sm:inline">{SITE.appName}</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#demo" className="hover:text-foreground">Demo</a>
          <a href="#download" className="hover:text-foreground">Download</a>
        </nav>
        <Button asChild size="sm">
          <a href="#download">
            <Download />
            Get v{SITE.version}
          </a>
        </Button>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_50%_-10%,oklch(0.55_0.22_285/18%),transparent)]" />
      <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <img
          src={SITE.logoSrc}
          alt=""
          className="mx-auto mb-7 size-24 rounded-3xl shadow-2xl shadow-primary/20"
        />
        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <Cpu className="size-3.5" />
          Version {SITE.version} · Windows & Linux
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Your projects, ready when you are.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted-foreground">
          {SITE.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="#download">
              <Download />
              Download v{SITE.version}
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

function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Everything close at hand</h2>
        <p className="mt-2 text-muted-foreground">
          The essentials for moving between local projects without the clutter.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <Card key={title}>
            <CardHeader>
              <div className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function VideoSection() {
  return (
    <section id="demo" className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">See it in action</h2>
        <p className="mt-2 text-muted-foreground">A quick look at Local Workspace.</p>
      </div>
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <video
          className="aspect-video w-full bg-black"
          src={SITE.videoSrc}
          controls
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}

function DownloadSection() {
  return (
    <section id="download" className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Download version {SITE.version}</h2>
        <p className="mt-2 text-muted-foreground">
          Choose the package for your computer.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {DOWNLOADS.map(({ icon: Icon, platform, format, filename, href, action }) => (
          <Card key={filename} className="flex flex-col">
            <CardHeader>
              <div className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <CardTitle>{platform}</CardTitle>
              <CardDescription>{format}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button asChild className="w-full">
                <a href={href} download={filename}>
                  <Download />
                  {action}
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-5 text-center text-xs text-muted-foreground">
        Linux users can choose the portable AppImage or the Debian package.
      </p>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Questions or feedback?</CardTitle>
          <CardDescription>
            Report an issue on GitHub or get in touch with {SITE.developer.name}.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={SITE.developer.githubUrl} target="_blank" rel="noreferrer">
              <Github />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`mailto:${SITE.developer.email}`}>
              <Mail />
              Email
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} {SITE.appName} · Version {SITE.version}</p>
        <p>
          Built by{" "}
          <a
            href={SITE.developer.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground hover:underline"
          >
            {SITE.developer.name}
          </a>
        </p>
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
        <FeaturesSection />
        <VideoSection />
        <DownloadSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
