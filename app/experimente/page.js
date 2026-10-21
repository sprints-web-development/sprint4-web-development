import Experimente from "../components/Experimente/experimente";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

export const metadata = {
  title: "Experimente o SnapNote",
};

export default function ExperimentePage() {
  return (
    <>
      <Header />
      <Experimente />
      <Footer />
    </>
  );
}
