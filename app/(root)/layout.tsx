
import { MobileSideBar, SideBar } from "../components/shared/sidebar"
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <SideBar />
      <MobileSideBar />

      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout