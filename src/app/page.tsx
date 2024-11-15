import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Influencers from "@/components/Influencers";
import Main from "@/components/Main";
import Signup from "@/components/Signup";
import Travel from "@/components/Travel";

export default function Home() {
  return (
    <main className="w-full space-y-[48px] max-lg:space-y-[24px]">
      <Main />
      <Travel />
      <Features />
      <Influencers />
      <div className="q-full">
      <Signup />
      <FAQ />
      </div>
    </main>
  );
}
