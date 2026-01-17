import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            // Define the custom element and its props.
            // If the element accepts standard HTML attributes, you can use DetailedHTMLProps.
            // If it has specific props, define them in an interface.
            'elevenlabs-convai': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

            // If you are using React 19, you might need a slightly different declaration module
        }
    }
}

// For users of the "jsx-runtime" (common in modern React projects via Vite, Next.js, etc.)
declare module "react/jsx-runtime" {
    namespace JSX {
        interface IntrinsicElements {
            'elevenlabs-convai': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
