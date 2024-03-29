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

### Image

In Nextjs we dont use img tag instead of the we use Image tag from next js itself which provides better optimization. Nextjs first stores the image in cache then calls the particular image. 

In Nextjs we can't use external Url for image. If we want to we should allow the specific at next.config.js then we can proceed to use it.

```
const nextConfig = {
    images:
    {
        remotePatterns:[
          {
            protocol: 'https',
            hostname: "images.pexels.com"
          }
        ]
    },
}
```

### Rendering

There are basically two types of rendering

1. Client Side Rendering (CSR) - HTML Comes From Server Then It Is Processed 
2. Server Side Rendering (SSR) - Processed HTML Comes From Server

For Client Pages (User Activity) we should always call "use client" at the top. But by default pages are in "use server" as nextjs uses SSR.

Even if we wrap a parent component as "use client" component outside child. children will always be server component.

Most of the we will encounter Hydration errors. it result from a mismatch between server- and client-rendered markup and differences in component states.

we can prevent this by using
1. useEffect
2. mentioning suppressHydrationWarning inside div
3. by using this import method, 
>const Component = dynamic(()=>import("./component"),{ ssr: false})

### Navigation

NextJs Provides Navigation 

> import useRouter from "next/navigation"

```
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchQuery();
```

| React Js      | Next Js                |
| :---          |                   ---: |
| navigate()    | router.push("/")       |
|      -        | router.replace("/")    | // Doesn't Add History To Browser
|      -        | router.refresh()       | // Refresh The Component
| navigate(-1)  | router.back()          |
| navigate(1)   | router.forward()       |

### Data Fetching With API

If A Component Has To Fetch Data Then That Component Should Be Async Function.

After API Is Called It Is Stored In The Cache Of NextJs But We Can Modify It If Certain API Has Frequent Changes Or So

```
fetch("url", {cache: "force-cache" }) // Be Default
fetch("url", {cache: "no-store" }) // No Cache To Be Stored
fetch("url", {next: {revalidate: 3600}}) // Time Period Of Cache
```

### Suspense

We Can Show Different UI While The Api Is Loading Using Suspense Tag Fallback

### Data Fetching Without API

As NextJs Can Be Connected To DB We Can Directly Fetch Data From DB

There Is No Specific Structure For It But This Is How We Will Be Using It

- Src
    - lib
        - utils.js ("To Connect To DB")
        - data.js ("Query Or Function To Get Data From DB")
        - models.js ("Schemas")

> To Avoid Cache In This
> import { unstable_noStore as noStore } from "next/cache";
> call noStore(); as each data.js function    

### SEO

NextJs Makes SEO Easier As We Can Change Title And Description Of The Page By Content

For Static Page
```
export const metadata = {
  title: {
    default:"Next.js 14 Homepage",
    template:"%s | Next.js 14"
  },
  description: "Next.js starter app description",
};

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};
```

For Dynamic Page
```
export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};
```

### Server Actions

Server Action When A Data Has To Be Posted Without An API

Always Use "use server" at the top or in the function;

- lib
    - action.js

### API Router

We Can Also Write API Endpoints In NextJs.

Here Are Some Of The Basic Structure To Use For Different Routing In Src App Api Directory

> Api Would Be Inside App Directory

1. For Basic Route 
    - route.js ("/")

2. For About Route
    - about
        - route.js ("/about")

3. For Nested About Route
    - about
        - project
            - route.js ("/about/project") 
            
4. For Dynamic About Route
    - about
    - \[id\]
        - route.js ("/about/123")      

### Authentication

For Authentication We Are Using Next Auth Package Here. We Can Social Authenticate With google, facebook etc.

> npm install next-auth@beta

- lib
    - auth.js

> OAuth Callback URL - url/api/auth/callback/(github,google)

save client_id in .env

```
Example For GitHub

import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
export const { handlers, auth, signIn, signOut } = NextAuth({ 
    providers: [ GitHub({ 
        clientId: process.env.GITHUB_ID, 
        clientSecret: process.env.GITHUB_SECRET 
    }), // Change Or Add Social Provider
    CredentialsProvider: ({
        //default signin function
    })    
    ],
    callbacks: {
        //here after signin, signout functionality can be written
    } 
})
```

> useFormState - It Is Used To Update Form Based On Form Action

### Middleware

It Is Used To Guard The Protected Routes Which Should Accessed Only When Conditions Met

- src
    - middleware.js

define config matcher for routes in middleware

> it allows us to filter middleware ton run on specifc path. if we dont
> add any matcher, middleware will be invoked for every route

> middleware is independent from nodejs library hence we will create 
> seperate auth.config file then will call it here

In Callback The Conditions Can Be Written

## Functions And Tags Compare To React In NextJs

| React Js      | Next Js                |
| :---          |                   ---: |
| <a></a>       | <Link></Link>;         |
| <img/>        | <Image/>               |
| useLocation();| usePathname();         |    
| useEffect();  | revalidatePath("/");   | // Used In Server Action

## Some Doubts While Learning

- [ESLINT] - Shows Us Potential Error Before Running The Application!
- [Experimental_Features]
- [Hydration_Error]
- [Random-Token] - openssl rand -base 64 32
- [OAuth] - Why Do We Need To Create An Account ?
- [(...Spread)] - Can Have Multiple Nested Routes api/auth/blogs/new/1
- [NEXT_REDIRECT]

### Check Point
04:33:00