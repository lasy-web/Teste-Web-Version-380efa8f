import { MadeWithLasy } from "@/components/made-with-lasy";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 mx-auto">
        <div className="flex h-20 items-center justify-between py-6">
          <a href="#" className="text-lg font-bold">
            Meu App
          </a>
          <Button variant="outline" size="sm">
            Fazer Login
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto flex flex-col items-center px-4 py-12 text-center md:py-24">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Construa o Futuro, Hoje.
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Uma plataforma moderna e escalável para transformar suas ideias em
            realidade. Comece a criar agora mesmo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg">Começar Agora</Button>
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-5 w-5" />
              Ver no GitHub
            </Button>
          </div>
        </section>
      </main>
      <MadeWithLasy />
    </div>
  );
}