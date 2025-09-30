import { Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

export default function SocialBarSection() {
  const links = [
    { href: "https://www.linkedin.com/in/check-before-go-8795a2383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn", color: "#0A66C2", Icon: Linkedin },
    { href: "https://www.instagram.com/checkbeforego_?igsh=c2dlbWtlc3Vtbjc2", label: "Instagram", color: "#E1306C", Icon: Instagram },
    { href: "https://youtube.com/@checkbeforego?si=unokNZghJ1Q5zsxp", label: "YouTube", color: "#FF0000", Icon: Youtube },
    { href: "https://x.com/checkbeforego?t=Xiw_xYD6WzHu5Y-hKOhXkg&s=08", label: "X", color: "#000000", Icon: Twitter },
    { href: "https://www.facebook.com/share/1JLUrtJHxa/", label: "Facebook", color: "#1877F2", Icon: Facebook },
  ];

  return (
    <section className="py-3 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-end gap-6">
          {links.map(({ href, label, color, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="transition transform hover:scale-110 focus:scale-110 outline-none"
            >
              <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
