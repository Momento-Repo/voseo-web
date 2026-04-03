"use client"
import { VoseoLogo } from '@/components/svg/voseo-logo';
import { Underline } from "@/components/svg/underline";
import { Stroke } from "@/components/svg/stroke";
import Link from "next/link";
import { useIsMobile } from "./hooks/use-is-mobile";

export default function Home() {
  const { isMobile, isLoading } = useIsMobile()

  return (
    <div className="flex-1 flex flex-col font-sans min-h-full w-full overflow-clip">

      {/* {!isMobile && !isLoading &&
        <>
          <div className="absolute min-w-fit min-h-fit overflow-clip bottom-0 right-0 z-0">
            <VoseoLogo containerClassName="" viewBox="0 0 920 252" className="fill-[rgba(255,182,40)] stroke-[rgba(255,182,40)]" />
          </div>
        </>
      } */}


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

          <h2 className="font-normal text-2xl pt-4">{"Let's go outside and make memories instead."}</h2>

          <div className="flex flex-col justify-between w-72 h-52 pb-28 pt-16">
            <div className="max-w-1/2 self-start p-2 font-semibold z-10 decoration-[rgba(255,182,40)] hover:underline">
              <Link href="https://apple.com">Apple people click here</Link>
            </div>
            <div className="left-0 w-0 h-0">
              <Stroke containerClassName="ml-8 w-50 h-50 -translate-y-1/2 rotate-12 translate-x-[10%] z-0" className="stroke-[rgba(255,182,40)] [stroke-linecap:round] [stroke-linejoin:round] stroke-[12px]" />
            </div>
            <div className="p-2 max-w-[54%] self-end font-semibold z-10 decoration-[rgba(255,182,40)] hover:underline">
              <Link href="https://google.com">Android people click here</Link>
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
      </main>



    </div >
  );
}
