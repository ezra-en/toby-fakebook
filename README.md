## Template repo, built with Vite, TailwindCSS, Ripple-UI and TinyBase

There is a fair bit of goodness in this one, but it is at core a vanilla js repo. 

We started by building a Vite (https://vitejs.dev/) project, vanilla javascript. To that, we added Tailwind CSS (https://tailwindcss.com/docs/guides/vite) and Ripple UI (https://ripple-ui.com). Last dependency included was Tinybase (https://tinybase.org/). 

That taken care of, we build a templating utility, and we scaffold some page sections: a layout, a header, and a main content area.

The reason for the TinyBase addition was twofold: it's useful for creating a reactive datastore, and in this template repository I use it to track the dark/light mode, and to persist that in localStorage.

*** Further Reading:

https://dev.to/parenttobias/templating-with-tinybase-tailwind-and-rippleui-5a1h