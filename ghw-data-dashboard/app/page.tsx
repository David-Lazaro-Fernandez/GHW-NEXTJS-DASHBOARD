import Card from "./components";

export default function Home() {
  const speakerInformation = [
    {
      name: "Guillermo Rauch",
      role: "Vercel CEO",
      description: "Next.js Conf kicks off with Vercel CEO Guillermo Rauch and VP of DX Lee Robinson sharing the latest updates. You’ll hear more about our work on performance and reliability, how the community has been evolving, and maybe even one extra update at the end.",
      image: "/guillermo.jpg"
    },
    {
      name: "Lee Robinson",
      role: "Vercel VP of DX",
      description: "Next.js Conf kicks off with Vercel CEO Guillermo Rauch and VP of DX Lee Robinson sharing the latest updates. You’ll hear more about our work on performance and reliability, how the community has been evolving, and maybe even one extra update at the end.",
      image: "/lee.jpg"
    },
    {
      name: "Delba",
      role: "Developer Experience at Vercel",
      description: "What I'm learning about shipping great products, becoming a better developer, and growing a career in tech.",
      image: "/delba.jpg"
    },
    {
      name: "Lydia Hallie",
      role: "Staff Developer Advocate, Vercel",
      description: "Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.",
      image: "/lydia.jpg"
    }
  ]

  return (
    <div>
      <header className="text-6xl text-center">Hello GHW</header>
      <h1 className="text-xl text-center">WELCOME TO MY DASHBOARD</h1>
      <div className="flex flex-row justify-center items-center gap-4 flex-wrap">
        {speakerInformation.
          map((speaker) =>
            <Card
              name={speaker.name}
              role={speaker.role}
              description={speaker.description}
              image={speaker.image}
            />
          )}
      </div>
    </div>
  );
}
