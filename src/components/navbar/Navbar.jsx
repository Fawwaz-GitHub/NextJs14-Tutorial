import Link from "next/link"

const Navbar = () => {

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

  return (
    <div>
        <div>Logo</div>
        <div>
            <div>
                {links.map((e) => <Link href={e.link} key={e.title}>{e.title}</Link>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar