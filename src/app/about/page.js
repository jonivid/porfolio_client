import dynamic from "next/dynamic";

const AboutMe = dynamic(() => import("../../components/about/aboutMe"), {
  ssr: false,
});

export default function Page() {
  return <AboutMe />;
}
