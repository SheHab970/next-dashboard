import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const disabled = true;
  const isRounded = false;
  return (
    <>
      <main className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <div className=" bg-primary-foreground p-4 rounded-lg lg:col-span-2">
            <AppBarChart />
          </div>
          <div className=" bg-primary-foreground p-4 rounded-lg">Test</div>
          <div className=" bg-primary-foreground p-4 rounded-lg">Test</div>
          <div className=" bg-primary-foreground p-4 rounded-lg lg:col-span-2">
            <AppAreaChart />
          </div>
          <div className=" bg-primary-foreground p-4 rounded-lg">Test</div>
          <div className=" bg-primary-foreground p-4 rounded-lg">Test</div>
      </main>  
    </>
  );

}
