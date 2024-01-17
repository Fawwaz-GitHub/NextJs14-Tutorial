"use client";

import Link from "next/link"
import styles from "./navbar.module.css"
import { usePathname } from "next/navigation"
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

const Navbar = async () => {

    const pathname = usePathname();
    const [open ,setOpen] = useState(false);

    const links = [
        {
            title: "Homepage",
            link: "/"
        },
        {
            title: "About",
            link: "/about"
        },  
        {
            title: "Contact",
            link: "/contact"
        },   
        {
            title: "Blogs",
            link: "/blogs"
        },   
    ]

    //TEMPORARY
    const session = await auth();
    const isAdmin = true;

  return (
    <div className={styles.container}>
        <Link href={"/"} className={styles.logo}>Logo</Link>
        <div>
            <div>
                <div className={styles.links}>
                    {links.map((e) => <Link className={`${styles.linkElement} ${pathname === e.link && styles.active}`} href={e.link} key={e.title}>{e.title}</Link>)}
                    {
                        session?.user ?
                            <> 
                            {session?.user?.isAdmin && <Link className={`${styles.linkElement} ${pathname === "/admin" && styles.active}`} href={"/admin"}>Admin</Link>}
                            <form action={handleLogout}>
                                <button className={styles.logout}>Logout</button>
                            </form>
                            </> :
                        <Link className={`${styles.linkElement} ${pathname === "/login" && styles.active}`} href={"/login"}>Login</Link>    
                    }
                </div>
                <Image src="/menu.png" alt="" height={25} width={25} className={styles.menuButton} onClick={()=>{setOpen(prev => !prev)}}/>
                {open && (
                    <div className={styles.mobileLinks}>
                    {links.map((e) => (
                        <Link className={`${styles.linkElement} ${pathname === e.link && styles.active}`} href={e.link} key={e.title}>{e.title}</Link>
                    ))}
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar