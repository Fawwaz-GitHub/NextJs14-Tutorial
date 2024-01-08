This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Learning Next With Javascript

There Are Many Advantages Of Using Nextjs Such As It Gives Us Options Of SSR, CSR, Server Actions Etc..

Create Next App Using This Command

> npx create-next-app@latest .

After Creating The Application Here Are Some Of The Files That Can Be Deleted

- page.module.css
- page.js - delete whole content - just have home component with hello world! as content
- globals.css - delete content

Then run the application using this command

> npm run dev

### Folder Structure

- [next.config.js] - Shows nextjs experimental features and different URLs to show images
- [jsconfig.json] - Shows our src path directory, it will be useful while importing component
- Rest are same as react

### App Router

In React for routing we have to install some packages whereas it isn't the case in nestjs. It has inbuild feature called app router. It is one of the main feature of nextjs

Here Are Some Of The Basic Structure To Use For Different Routing In Src App Directory

1. For Home Page Route 
    - page.jsx ("/")

2. For About Page Route
    - about
        - page.jsx ("/about")

3. For Nested About Page Route
    - about
        - project
            - page.jsx ("/about/page")

4. For Dynamic Page Route
    - blogs
        - \[id\] *Should Be Wrapped In Square Bracket*
            - page.jsx ("/blogs/123")

5. For Authenticed Page Routes
    - (auth)  *Folders Should Be Wrapped In Curly Brackets If That Certain Route Should Be Authenticated*
        - blogs
            - page.jsx ("/blogs") 

### Layouts

Layouts are the common components that can used in every page for example like sidebar, header. Whenever layouts are used childrens should be passed are props.

layouts can alse be used for specific routes by this structure 

- For Dynamic Page Route
    - blogs
        - layouts.js *Here Common Components Can Be Used In Every Blogs Route*
        - page.jsx
        - \[id\]
            - page.jsx

Others file like layout which can used commonly            

| File Name     | Description                       |
| :---          |                              ---: |
| loading.jsx   | Loader For Specific Route         |
| error.jsx     | Error Handling For Specfic Route  |
| not-found.jsx | Not Found Page For Specfic Route  |

### Components

- Src
    - Components
        - Header
            - header.jsx
    - App
        - page.jsx *Route Files*

```
Note: While creating next app it asked us to include src directory or not. For better 
practice always include src directory as you can have components, library folder there 
and inside app directory you can have routes. It would be easy to differentiate 
```

> Instead Of Using <a><a/> Tag We Can Use <Link><Link/> Tag In Next Js 

### Styles

Global CSS are written in the globals.css file. Here we can create and use variable in css file just like scss. 

```
:root{
    --bgColor: #000000;
}

.container{
    color: var(--bgColor);
}
```

We Can Also Have Separate CSS file for separate components. But there is a catch here we use (filename).module.css just to avoid collision of parent children css file.

- Navbar
    - Navbar.jsx
    - navbar.module.css

> CSS is written as usual but there is difference in importing & calling the class

```
import styles from "./navbar.module.css"

<div className={styles.container}>
    CONTENT
</div>
```

## In Build Js Functions Compare To React

| React Js      | Next Js                |
| :---          |                   ---: |
| useLocation();| usePathname();         |

## Some Doubts While Learning

- [ESLINT] - Shows Us Potential Error Before Running The Application!
- [Experimental_Featured]

### Check Point
59:30