import Header from "@/components/Header";
import Hero from "@/components/Hero";

//rfcp prop props shortcut
type Props = {
  children: React.ReactNode;
};

//getting children from Props
const Layout = ({ children }: Props) => {
  return (
    //takes up entire width of screen
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />

      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  );
};

export default Layout;
