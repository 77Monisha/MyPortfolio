"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Older browsers / non-secure contexts.
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    return ok;
  }
}

export default function CopyEmail({ email, className }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const Icon = copied ? Check : Copy;

  return (
    <button
      type="button"
      title={copied ? "Copied" : "Copy email"}
      onClick={async () => setCopied(await copyText(email))}
      className={cn(
        "group inline-flex items-center gap-2 rounded-md px-2 py-1 font-code text-xs text-pf-muted transition-colors hover:text-pf-text",
        className,
      )}
    >
      {email}
      <Icon
        aria-hidden
        className={cn("size-3.5", copied ? "text-pf-green" : "text-pf-muted/70 group-hover:text-pf-text")}
      />
      <span className="sr-only">(copy to clipboard)</span>
      <span aria-live="polite" className="sr-only">
        {copied ? "Email copied" : ""}
      </span>
    </button>
  );
}
