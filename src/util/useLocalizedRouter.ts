import { useRouter as nextUseRouter } from "next/router";

// https://github.com/vercel/next.js/blob/2a1dc3c647ee28d858ebc818e8bbe86b39f770df/packages/next/shared/lib/router/router.ts
interface TransitionOptions {
    shallow?: boolean
    locale?: string | false
    scroll?: boolean
    unstable_skipClientCache?: boolean
  }

let hooked = false;
let oldPush;

export const useLocalizedRouter = () => {
    // Get next.js router
    const router = nextUseRouter();

    // Save original function so we can call it later
    if (!oldPush) {
       oldPush = new Function('return ' + nextUseRouter().push.toString()) as ((url: string, as?: string, options?: TransitionOptions) => Promise<boolean>);
    }

    const newPush = (url: string, as?: string, options?: TransitionOptions): Promise<boolean> => {
        // Attatch locale to url
        if (url.startsWith("/")) {
            url = url.substring(1, url.length);
        }
        url = `/${router.locale}/${url}`;

        console.log(oldPush.toString());
        console.log(url, options);

        router.push = oldPush;
        // Call the original function with the newly changed url
        // var ret = oldPush.apply(this, [url, as, options]);
        const ret = router.push(url, as, options);

        router.push = newPush;

        return ret;
    };

    // Overwrite push function on router with a new one that attatches locale string to the url
    router.push = newPush;

    // Return the new router object with the hooked push
    return router;
}