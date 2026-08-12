"use client"
import { VoseoLogo } from '@/components/svg/voseo-logo';
import { Underline } from "@/components/svg/underline";
import { Stroke } from "@/components/svg/stroke";
import { AppleLogo } from "@/components/svg/apple-logo";
import { PlayStoreLogo } from "@/components/svg/play-store-logo";
import Link from "next/link";
import { useIsMobile } from "./hooks/use-is-mobile";

const APP_STORE_URL = "https://apps.apple.com/gb/app/voseo-every-photo-counts/id6749246751";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.voseo.voseoapp";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Voseo",
      "url": "https://voseo.co",
      "email": "adam@voseo.co",
      "founder": {
        "@type": "Person",
        "name": "Adam",
      },
      "description":
        "Voseo turns your phone into a modern disposable camera, printing and delivering real photo prints through your letterbox.",
    },
    {
      "@type": "MobileApplication",
      "name": "Voseo",
      "applicationCategory": "PhotographyApplication",
      "operatingSystem": "iOS, Android",
      "description":
        "Voseo turns moments into real photo prints delivered to your door. Choose a 24, 36 or 50-shot film roll, shoot with no previews, no retakes and no filters, and we'll process, print and deliver your photos through your letterbox.",
      "downloadUrl": [APP_STORE_URL, PLAY_STORE_URL],
      "url": "https://voseo.co",
    },
  ],
};

export default function Home() {
  const { isMobile, isLoading } = useIsMobile()

  return (
    <div className="flex-1 flex flex-col font-sans min-h-full w-full overflow-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <main className="flex flex-1 min-w-full z-10 min-h-full flex-col text-center justify-between items-center ">
        {!isMobile && !isLoading &&
          <>
            <div className="min-w-fit min-h-fit overflow-clip z-0 self-start">
              <VoseoLogo containerClassName="" viewBox="920 252 1000 252" className="fill-[rgba(255,182,40)] stroke-[rgba(255,182,40)]" />
            </div>
          </>
        }
        <div className="flex flex-col items-center justify-center grow min-h-full px-4 pt-16">

          <h1 className="font-hero text-4xl leading-tight">
            {"WEBSITES FOR APPS ARE "}
            <span className="relative inline-block">
              <span className="relative">{"BORING"}</span>
              <Underline containerClassName="absolute -bottom-5 h-[36px] w-full left-0 scale-110 -rotate-3" className="stroke-[rgba(255,182,40)] [stroke-linecap:round] [stroke-linejoin:round] stroke-[12px]" />
            </span>
          </h1>

          <h2 className="font-normal text-2xl pt-4">{"Let's go and make memories instead."}</h2>

          <div className="flex flex-col justify-between w-72 h-52 pb-28 pt-16">
            <div className="max-w-1/2 self-start p-2 font-semibold z-10 decoration-[rgba(255,182,40)] hover:underline">
              <Link href={APP_STORE_URL} className="f gap-2">
                <AppleLogo containerClassName="w-5 h-5 my-2 mx-auto shrink-0" className="fill-foreground" />
                Apple people click here
              </Link>
            </div>
            <div className="left-0 w-0 h-0">
              <Stroke containerClassName="ml-8 w-50 h-50 -translate-y-1/2 rotate-12 translate-x-[10%] z-0" className="stroke-[rgba(255,182,40)] [stroke-linecap:round] [stroke-linejoin:round] stroke-[12px]" />
            </div>
            <div className="p-2 max-w-[54%] self-end flex flex-col font-semibold z-10 decoration-[rgba(255,182,40)] hover:underline">
              <Link href={PLAY_STORE_URL} className="items-center  gap-2">
                <PlayStoreLogo containerClassName="w-5 h-5 mx-auto my-2 shrink-0" className="fill-foreground" />
                Android people click here
              </Link>
            </div>
          </div>


          <VoseoLogo containerClassName="w-50 pt-16" className="fill-foreground" />
        </div>


        {!isMobile && !isLoading &&
          <>
            <div className="min-w-fit min-h-fit overflow-clip z-0 self-end mt-8">
              <VoseoLogo containerClassName="" viewBox="0 0 900 252" className="fill-[rgba(255,182,40)] stroke-[rgba(255,182,40)]" />
            </div>
          </>
        }

        <section aria-labelledby="about-heading" className={"relative z-10 w-full max-w-2xl px-4 pt-16 text-center"}>
          <h2 id="about-heading" className="font-hero text-3xl text-center pb-16 pt-32">{"Your memories don't belong in the cloud"}</h2>
          <p className="text-base leading-relaxed ">
            {"Voseo turns your phone into a modern disposable camera. Choose a 24, 36 or 50-shot film roll and start shooting - "}
            <span className="font-semibold">{"no previews, no retakes, no filters."}</span>
            {" Every photo counts."}
          </p>
          <p className="text-base leading-relaxed pt-4">
            {"When your roll is finished, we process, print and deliver your photos through your letterbox - nostalgic, film-style prints you'll want to keep."}
          </p>
        </section>

        <section aria-labelledby="founder-quote" className="relative z-10 w-full max-w-2xl px-4 py-16 text-left">
          {/* <h2 id="founder-heading" className="font-hero text-3xl text-center py-6">{"A note from the founder"}</h2> */}
          <blockquote className="flex flex-col gap-4 text-base leading-relaxed italic text-foreground/80 dark:border-l-white border-l-black border-l-2 pl-4">
            <p>{"I've started to miss the days of sitting with family and looking through old photo albums. The photos that mattered most weren't sitting in the cloud or buried in a camera roll - they were on the shelf, in a drawer, or passed around the table."}</p>
            <p>{"I built Voseo to create a modern alternative: something that uses the incredible camera we already carry every day, but brings back the anticipation, intention and permanence of printed photographs."}</p>
          </blockquote>
          <p className="pt-4 text-right font-semibold not-italic">{"- Adam, Founder of Voseo"}</p>
        </section>

        <footer className="relative z-10 flex flex-col items-center gap-3 pb-0 w-full pt-4">

          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center items-center text-sm text-foreground/60">
            <Link className="hover:underline" href="/privacy-policy">Privacy policy</Link>
            <span aria-hidden className="text-foreground/30">•</span>
            <Link className="hover:underline" href="/support">Support</Link>
            <span aria-hidden className="text-foreground/30">•</span>
            <Link className="hover:underline" href="/delete-account">Delete account</Link>
          </div>
          <div aria-hidden className="flex flex-col w-full max-w-2xl h-5 overflow-hidden">
            <div className="flex-1 basis-1/3 bg-[#f1e60a]" />
            <div className="flex-1 basis-1/3 bg-[#ffa228]" />
            <div className="flex basis-1/3 bg-[#ff034a]" />
          </div>
        </footer>
      </main>
    </div >
  );
}
