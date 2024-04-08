import Logo from "@Components/Logo/Logo";

const Sidebar = () => {
  return (
    <aside className="row-span-full bg-gray-50 border-r border-gray-100 py-9 px-6 flex flex-col gap-12">
      <Logo />
    </aside>
  );
};

export default Sidebar;
