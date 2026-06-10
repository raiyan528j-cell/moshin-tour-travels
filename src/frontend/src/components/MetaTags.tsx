import { useEffect } from "react";

interface MetaTagsProps {
  title: string;
  description: string;
}

export default function MetaTags({ title, description }: MetaTagsProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? "";
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;
      if (metaDescription) {
        metaDescription.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);

  return null;
}
