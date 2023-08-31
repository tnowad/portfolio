import { ProfileSummary } from "@/components/ProfileSummary";
import Introduction from "@/components/Introduction";
import { Metadata } from "next";
import AboutMe from "@/components/AboutMe";

export const metadata: Metadata = {
  title: "Portfolio | Nguyen Minh Tuan",
};

export default function Home() {
  return (
    <main>
      <Introduction />
      <ProfileSummary />
      <AboutMe />
    </main>
  );
}
