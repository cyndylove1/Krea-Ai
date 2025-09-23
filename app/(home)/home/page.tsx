import Footer from "../../components/footer";
import Generate from "../../components/generate";
import SlideImage from "../../components/slideImage";
import ToolsGrid from "../../components/toolsgrid";

export default function Main() {
  return (
    <>
      <div className="overflow-hidden">
        <div>
          <SlideImage />
          <Generate />
          <ToolsGrid />
          <Footer />
        </div>
      </div>
    </>
  );
}
