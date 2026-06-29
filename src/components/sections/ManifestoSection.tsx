"use client";

import { Code2, Grid2X2, Target, TrendingUp } from "lucide-react";

const cards = [
  {
    number: "01",
    title: "Estratégia",
    text: "Planejamento inteligente com foco em posicionamento e conversão.",
    icon: Target,
  },
  {
    number: "02",
    title: "Experiência",
    text: "Design que comunica, conecta e transforma visitantes em clientes.",
    icon: Grid2X2,
  },
  {
    number: "03",
    title: "Código",
    text: "Desenvolvimento moderno, seguro e escalável com alta performance.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Resultado",
    text: "Sites que geram impacto real, autoridade e crescimento contínuo.",
    icon: TrendingUp,
  },
];

type Manifesto3DCardProps = {
  number: string;
  title: string;
  text: string;
  icon: React.ElementType;
};

function Manifesto3DCard({ number, title, text, icon: Icon }: Manifesto3DCardProps) {
  return (
    <article className="manifesto-card-3d">
      <div className="manifesto-card-inner">
        <div className="manifesto-card-content">
          <div className="manifesto-card-top">
            <div className="manifesto-card-icon">
              <Icon size={22} strokeWidth={1.6} />
            </div>

            <span>{number}</span>
          </div>

          <h4>{title}</h4>

          <div className="manifesto-card-line" />

          <p>{text}</p>
        </div>
      </div>
    </article>
  );
}

export function ManifestoSection() {
  return (
    <section className="manifesto-section" id="manifesto">
      <div className="manifesto-shell">
        <div className="manifesto-background-lines" />

        <div className="manifesto-top">
          <div className="manifesto-label-area">
            <span className="manifesto-eyebrow">Manifesto / Impacto</span>
            <span className="manifesto-small-line" />
          </div>

          <div className="manifesto-visual">
            <span className="manifesto-tag tag-strategy">Estratégia</span>
            <span className="manifesto-tag tag-tech">Tecnologia</span>
            <span className="manifesto-tag tag-exp">Experiência</span>
            <span className="manifesto-tag tag-perf">Performance</span>

            <div className="manifesto-orbit orbit-one" />
            <div className="manifesto-orbit orbit-two" />
            <div className="manifesto-dashed-orbit" />

            <div className="manifesto-sphere">
              <div className="manifesto-sphere-shine" />
            </div>

            <span className="manifesto-dot dot-one" />
            <span className="manifesto-dot dot-two" />
          </div>

          <div className="manifesto-copy">
            <h2>
              Um site não deve <br />
              apenas existir.
            </h2>

            <h3>
              Ele precisa posicionar, <br />
              vender e elevar a percepção <br />
              da sua marca.
            </h3>

            <p>
              Cada projeto é pensado como uma experiência digital completa:
              visual forte, estrutura estratégica, tecnologia moderna e
              performance real para negócios que querem crescer.
            </p>
          </div>

          <div className="manifesto-compass" aria-hidden="true">
            ✦
          </div>

          <div className="manifesto-slider-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span className="active" />
          </div>
        </div>

        <div className="manifesto-cards-3d-wrap">
          <div className="manifesto-cards-3d">
            {cards.map((card) => (
              <Manifesto3DCard
                key={card.title}
                number={card.number}
                title={card.title}
                text={card.text}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}