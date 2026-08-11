import Link from "next/link";
import { VoseoLogo } from "@/components/svg/voseo-logo";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 flex flex-col font-sans min-h-full w-full">
      <main className="flex flex-1 flex-col items-center px-6 py-16">
        <div className="w-full max-w-xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:underline decoration-[rgba(255,182,40)]">
            ← Back to Voseo
          </Link>

          <div className="flex flex-col gap-4 text-base leading-relaxed pt-8 [&_h1]:font-hero [&_h1]:text-3xl [&_h1]:pb-8 [&_h2]:font-hero [&_h2]:text-xl [&_h2]:pt-4 [&_h3]:font-hero [&_h3]:text-base [&_h3]:pt-2 [&_a]:underline [&_a]:decoration-[rgba(255,182,40)] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-1">
            {children}
          </div>

          <VoseoLogo containerClassName="w-28 pt-16 opacity-70" className="fill-foreground" />
        </div>
      </main>
    </div>
  );
}
