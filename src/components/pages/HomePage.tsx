import { PetProvider } from "../../hooks/PetContext";
import TopBar from "../controls/TopBar";
import ImageGrid from "../images/ImageGrid";
import TitleSection from "../TitleSection";

function HomePage() {
  return (
    <PetProvider>
      <TitleSection />
      <TopBar />
      <ImageGrid />
    </PetProvider>
  );
}

export default HomePage;
