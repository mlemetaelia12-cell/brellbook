import Link from "next/link";
import { Check } from "lucide-react";

export function Brand({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return <Link href="/" aria-label="BrellBook home" className="inline-flex items-center gap-2.5">
    <span className="grid h-10 w-10 place-items-center rounded-[13px] bg-[#6C2BFF] shadow-lg shadow-purple-200">
      <span className="relative grid h-[25px] w-[22px] place-items-center rounded-[5px] border-2 border-white/95">
        <span className="absolute -top-[5px] left-[3px] h-[5px] w-[3px] rounded-full bg-white"/><span className="absolute -top-[5px] right-[3px] h-[5px] w-[3px] rounded-full bg-white"/>
        <Check size={15} strokeWidth={3.4} className="text-white" />
      </span>
    </span>
    {!compact && <span className={`text-[21px] font-extrabold tracking-[-.055em] ${light ? "text-white" : "text-[#1B1B3A]"}`}>Brell<span className="text-[#6C2BFF]">Book</span></span>}
  </Link>;
}
