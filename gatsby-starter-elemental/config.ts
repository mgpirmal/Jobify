const siteMetadata = {
    title: `Matthew Pirmal`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/mattlogo3.png`,
    icon: `/images/mattlogo3.png`,
    titleImage: `/images/pixel.jpg`,
    ogImage: `/images/wall.png`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `Full Stack Web Developer | MERN Stack`,
    description: `Welcome to my Portfolio. Please explore, you never know what you might find!`,
    about:
        "Hello there! I'm Matthew Pirmal and I am Full Stack Web Developer. Every day, I become better at my craft. I mostly work with the MERN stack and really enjoy Front-End Development using React. I do have experience with Wordpress and PHP as well! When I am not honing my skills, I collect trading cards, play video games and learn new dairy-free recipes (I have a dairy allergy). Email or call me anytime! I love talking about business inquiries and recipes.",
    author: `@_mattpirmal`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        
        {
            name: "GitHub",
            url: "https://github.com/mgpirmal",
        },
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "#",
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "#",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "#",
        },
       
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "",
        description: `Thanks for checking out my portfolio. Here is my contact infomation if you wanna see more. You can also check out my code on Github in the link in the footer.`,
        mail: "mgpirmal678@gmail.com",
        phone: "407-633-8314",
        address: "927 McPherson Place \nWinter Garden \nFlorida, 34787",
    },
    disqus: "elemental-netlify-com",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
