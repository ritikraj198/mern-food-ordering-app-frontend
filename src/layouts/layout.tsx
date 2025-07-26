import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      {/* so with flex-1 this div takes the rest of whatever space left in vertical orientation */}
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
