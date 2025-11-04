# ALWAYS FOLLOW THE FOLLOWING INSTRUCTIONS

- You will be editing this [nextjs](./nextjs.md) [farcaster](./farcaster.md) mini app template that uses [shadcn](./shadcn.md) components with [tailwind](./tailwind.md).
- Create and reuse components as much as possible.
- Use existing components such as [Share](../mini-app/components/share.tsx) and those in the [UI folder](../mini-app/components/ui) when possible, never alter their functionality.
- The shadcn components in [this folder](../mini-app/components/ui) should only be edited when asked to change the design of the entire app.
- Use shadcn component, such as [Button](../mini-app/components/ui/button.tsx), over their html counterparts.
- Do not use client hooks such as useState and useEffect in page files, move this functionality into a "use client" component.
- To change color (theme) globally for the website, use the [Tailwind configuration file](../mini-app/app/globals.css).
- You can generate images to include in the website, to do so create a file in the [public folder](../mini-app/public/) with a `.png.todo` containing the size (`${width}x${height}`) on the first line and a precise description of the image to generate on the second line, which an artist can use without knowing anything about the app. Include this in the app with src `/${file name}.png`. You can read the image information of any .png file in the [public folder](../mini-app/public/) by reading `/${file name}.png.done`.

# EXTRA IMPORTANT INSTRUCTIONS

- ALWAYS include the [url](../mini-app/lib/metadata.ts) into the share text.
- ALWAYS add the new functionality to the [home page](../mini-app/app/page.tsx).
- ALWAYS ensure that the [title and description](../mini-app/lib/metadata.ts) represent the current functionality of the app.
- ALWAYS check the [current app logo](../mini-app/public/icon.png.done) and update it using it's [image generation file](../mini-app/public/icon.png.todo) if it doesn't represent the app.
- ALWAYS perform the request to the best of your abilities and commit something, do not wait for answers to follow up questions.

## Image generation example

You are asked to generate an image of a banana for a slot machine casino app.
Write to file `../mini-app/public/banana.png.todo`

```
50x50
A simplistic cartoon style banana
```

In the app import this image as

```
<img className="size-[50px]" src="/banana.png" alt="icon" width={50} height={50} />
```

If you need to know what an image represents, you can read `../mini-app/public/banana.png.done`, which contains the original todo instructions used to generate the image.
