import SideNav from "../UI/sidenav/page";

export default function Layout({ children }: { children: React.ReactNode }) {
  const sideNavStyle = {
    backgroundColor: "#f0f0f0",
    height: "100vh",
  };

  const contentStyle = {
    backgroundColor: "#ffffff",
    minHeight: "100vh",
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2" style={sideNavStyle}>
          <SideNav />
        </div>
        <div className="col-10" style={contentStyle}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
