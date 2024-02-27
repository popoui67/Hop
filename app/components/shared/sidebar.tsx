"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { navLinks } from "@/lib/constants"
import { usePathname } from "next/navigation"
export const SideBar =()=>{
    const pathname = usePathname()
    return(
     <aside className="sidebar">
<div className="flex size-full flex-col gap-4">
<Link href="/" className="sidebar-logo">
    <Image src="/assets/images/logo-text.svg" alt="logo" width={100} height={28}/>
</Link>
<nav className="sidebar-nav">
    <SignedIn>
        <ul className="sidebar-nav">
{navLinks.slice(0,6).map((link ) =>{
    const isactive = link.route === pathname
    return(
        <li key={link.route} className={`sidebar-nav_element group ${
            isactive ? "bg-purple-gradient text-white " :"text-gray-700"
        } `}>
         <Link className="sidebar-link" href={   link.label}>
<Image 
src={link.icon}
alt="logo"
width={24}
height={24}
className={`${isactive && 'brightness-200'}`}
/>
         </Link>
        </li>
    )
})}
        </ul>
        <ul className="sidebar-nav">
        {navLinks.slice(0).map((link ) =>{
    const isactive = link.route === pathname
    return(
        <li key={link.route} className={`sidebar-nav_element group ${
            isactive ? "bg-purple-gradient text-white " :"text-gray-700"
        } `}>
         <Link className="sidebar-link" href={   link.label}>
<Image 
src={link.icon}
alt="logo"
width={24}
height={24}
className={`${isactive && 'brightness-200'}`}
/>
         </Link>
        </li>
    )
})}
        <li className=" flex-centre cursor-pointer gap-2 p-4">
    <UserButton afterSignOutUrl="/" showName/>
</li>
        </ul>
    </SignedIn>
    <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>

</nav>
</div>
     </aside>
    )
}
export const MobileSideBar =()=>{
    const pathname= usePathname()
    return(
   <header className="header">
    <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image 
        src="/assets/images/logo-text.svg"
        alt="logo"
        width={180}
        height={28}
        />
        
    </Link>
    <nav className="flex gap-2">
<SignedIn>
    <UserButton afterSignOutUrl="/"/>
</SignedIn>
    </nav>

   </header>
    )
}