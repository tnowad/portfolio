import { ProfileSummary } from "./components/ProfileSummary";
import Introduction from "./components/Introduction";
import { Metadata } from "next";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export const metadata: Metadata = {
  title: "Portfolio | Nguyen Minh Tuan",
};

export default function Home() {
  return (
    <main>
      <Introduction />
      <ProfileSummary />
      <AboutMe />
      <Projects />
      <Skills />
    </main>
  );
}
