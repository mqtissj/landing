import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle, AlertCircle, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/projects";

export const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );
      setSubmitStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Correspondencia", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Telefonía", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Localización", value: personalInfo.location, href: null },
  ];

  return (
    <section ref={ref} id="contacto" className="py-24 sm:py-32 border-t-2 border-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between border-b-2 border-foreground pb-4 mb-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] mb-2">
              <span className="bg-pop-mint text-foreground px-2 py-0.5 border border-foreground">Capítulo 04 · Final</span>
            </p>
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl mt-3">
              <em className="marker-mint">Contacto</em> editorial
            </h2>
          </div>
          <span className="hidden md:block font-mono text-xs text-foreground/60">P. 04 / 04</span>
        </div>


        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-10"
          >
            <p className="font-serif text-3xl leading-snug">
              ¿Tenés un proyecto, una <em>oportunidad</em> o simplemente
              ganas de conversar? Escribime — respondo siempre.
            </p>

            <div className="space-y-6">
              {contactInfo.map((c) => (
                <div key={c.label} className="border-t border-border pt-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1 flex items-center gap-2">
                    <c.icon size={12} /> {c.label}
                  </p>
                  {c.href ? (
                    <a href={c.href} className="font-serif text-2xl hover-underline">{c.value}</a>
                  ) : (
                    <p className="font-serif text-2xl">{c.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pop flex items-center gap-2 px-5 py-3 bg-foreground text-background text-xs uppercase tracking-[0.18em]"
              >
                <Github size={14} /> GitHub <ArrowUpRight size={12} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pop flex items-center gap-2 px-5 py-3 bg-pop-cobalt text-background text-xs uppercase tracking-[0.18em]"
              >
                <Linkedin size={14} /> LinkedIn <ArrowUpRight size={12} />
              </a>
            </div>

            <div className="bg-pop-mint text-foreground p-6 border-2 border-foreground shadow-pop">
              <p className="text-[10px] uppercase tracking-[0.3em] mb-2 opacity-80">Estado</p>
              <p className="font-serif text-xl">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-foreground animate-pulse mr-2 align-middle" />
                Disponible para nuevas oportunidades.
              </p>
            </div>

          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 border-2 border-foreground p-8 sm:p-10 bg-background shadow-pop">
              <div className="flex items-center justify-between border-b-2 border-foreground pb-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] bg-pop-yellow text-foreground px-2 py-0.5 border border-foreground">Formulario · v.01</p>
                <p className="font-mono text-[10px] text-foreground/60">Vía EmailJS</p>
              </div>

              {[
                { id: "name", name: "user_name", label: "Nombre", type: "text" },
                { id: "email", name: "user_email", label: "Correo electrónico", type: "email" },
                { id: "subject", name: "subject", label: "Asunto", type: "text" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block text-[10px] uppercase tracking-[0.3em] text-foreground/60 mb-2">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    id={f.id}
                    name={f.name}
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-foreground/30 focus:border-pop-cobalt py-2 font-serif text-2xl outline-none transition-colors"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.3em] text-foreground/60 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-transparent border-0 border-b-2 border-foreground/30 focus:border-pop-cobalt py-2 text-base outline-none resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-pop w-full flex items-center justify-center gap-3 px-6 py-4 bg-pop-coral text-background text-xs uppercase tracking-[0.25em] font-semibold disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3 h-3 border border-background/40 border-t-background rounded-full animate-spin" />
                    Enviando
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Enviar mensaje
                  </>
                )}
              </button>


              {submitStatus === "success" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4" /> Mensaje enviado correctamente.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm text-destructive">
                  <AlertCircle className="w-4 h-4" /> Error al enviar. Probá nuevamente o escribime por email.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
