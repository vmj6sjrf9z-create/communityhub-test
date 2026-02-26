import TopNavHome from "./TopNavHome";
import HomeContents from "./HomeContents";
import BottomNav from "../../components/bottomNav/BottomNav";

function HomeRender() {
  return (
    <div className="phone">
      <TopNavHome />
      <HomeContents />
      <BottomNav active="home" />
    </div>
  );
}

export default HomeRender;
