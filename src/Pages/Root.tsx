import Header from "@Components/Header/Header";
import Sidebar from "@Components/Sidebar/Sidebar";

const Root = () => {
  return (
    <div className="grid grid-cols-[16rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      <Sidebar />
    </div>
  );
};

export default Root;
