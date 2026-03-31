import Image from "next/image";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  label?: string;
  image?: string;
};

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1920&q=80";

export function PageHeader({ title, subtitle, label, image }: PageHeaderProps) {
  return (
    <div className="relative h-72 md:h-80 flex items-center justify-center overflow-hidden">
      <Image
        src={image || DEFAULT_IMAGE}
        alt=""
        fill
        className="object-cover"
        priority
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-dark/70 via-blue-dark/60 to-blue-dark/80" />
      <div className="relative text-center px-6 pt-16">
        {label && (
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            {label}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-white/70 text-lg max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
