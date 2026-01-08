import { experienceData } from "@/lib/data";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-3 md:mb-4">
            {"$ whoami"}
          </h1>
        </div>

        {/* About Section */}
        <div className="mb-8 md:mb-12 space-y-4 md:space-y-6">
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            I'm a passionate full-stack developer and machine learning
            enthusiast from Salem, Tamilnadu, India. Currently working as a SWE
            at Arrcus Networks. I have previously worked at Zoho, Audio ML side
            of things and Software Developer Intern at naas.ai
          </p>

          <p className="text-base md:text-lg text-foreground leading-relaxed">
            With a strong foundation in data science, networking, and full-stack
            development, I enjoy building intelligent systems and scalable web
            applications. I'm a life-long learner who believes in practical
            implementation through building projects and participating in
            hackathons.
          </p>

          <p className="text-base md:text-lg text-foreground leading-relaxed">
            In my free time, I contribute to open-source projects, write
            technical blogs, and explore deep learning and web development. I'm
            currently learning German and love playing football whenever I get
            the chance.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-8 md:mb-12 p-4 md:p-6 border border-border rounded-lg bg-card">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-accent">
            Core Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <h3 className="font-mono text-xs md:text-sm text-muted-foreground mb-2">
                Languages
              </h3>
              <p className="text-sm md:text-base text-foreground">
                Python, JavaScript, TypeScript, C, C++, Java
              </p>
            </div>
            <div>
              <h3 className="font-mono text-xs md:text-sm text-muted-foreground mb-2">
                ML & Data Science
              </h3>
              <p className="text-sm md:text-base text-foreground">
                TensorFlow, PyTorch, scikit-learn, NLP, Computer Vision
              </p>
            </div>
            <div>
              <h3 className="font-mono text-xs md:text-sm text-muted-foreground mb-2">
                Web Development
              </h3>
              <p className="text-sm md:text-base text-foreground">
                React, Next.js, Node.js, Express, REST APIs
              </p>
            </div>
            <div>
              <h3 className="font-mono text-xs md:text-sm text-muted-foreground mb-2">
                Databases
              </h3>
              <p className="text-sm md:text-base text-foreground">
                PostgreSQL, MongoDB, Firebase, Supabase
              </p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-accent">
            Experience
          </h2>

          <div className="space-y-4 md:space-y-6">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6 md:pl-8 pb-6 md:pb-8 border-l border-accent"
              >
                <div className="absolute left-[-12px] top-0 w-6 h-6 bg-accent rounded-full border-4 border-background" />

                <div className="mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-accent font-mono text-xs md:text-sm">
                    {exp.position}
                  </p>
                </div>

                <p className="text-muted-foreground text-xs md:text-sm font-mono mb-2">
                  {exp.duration}
                </p>
                <p className="text-sm md:text-base text-foreground">
                  {exp.skills}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <a href="/contact" className="w-full sm:w-auto">
            <Button className="w-full font-mono text-sm md:text-base">
              Let's Connect
            </Button>
          </a>
          <a href="https://github.com/srini047/portfolio/tree/master/public/Sriniketh.pdf">
            <Button
              variant="outline"
              className="w-full sm:w-auto font-mono bg-transparent text-sm md:text-base"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
