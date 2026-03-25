"use client";
import * as React from "react";
import { Share2, Github, Phone, Mail, Linkedin } from "lucide-react";
import { cva } from "class-variance-authority";
import { motion, AnimatePresence } from "motion/react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative overflow-hidden cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      size: {
        default: "min-w-28 h-10 px-4 py-2",
        sm: "min-w-24 h-9 rounded-md gap-1.5 px-3",
        md: "min-w-28 h-10 px-4 py-2",
        lg: "min-w-80 h-14 px-8",
      },
      icon: {
        suffix: "pl-4",
        prefix: "pr-4",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const iconSizeMap = {
  sm: 16,
  md: 20,
  lg: 28,
  default: 16,
};

function ShareButton({
  children,
  className,
  size,
  icon,
  onIconClick,
  ...props
}) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.button
      className={cn(
        "bg-primary text-primary-foreground hover:bg-primary/90",
        buttonVariants({ size, className, icon })
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <AnimatePresence initial={false} mode="wait">
        {!hovered ? (
          <motion.div
            key="content"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.3 }}
            className=" absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center gap-2"
          >
            {icon === "prefix" && (
              <Share2 className="size-4" size={iconSizeMap[size]} />
            )}
            {children}
            {icon === "suffix" && (
              <Share2 className="size-4" size={iconSizeMap[size]} />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="icons"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3 }}
            className=" absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center gap-2"
          >
            <ShareIconGroup size={size} onIconClick={onIconClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

const shareIconGroupVariants = cva("flex items-center justify-center gap-8", {
  variants: {
    size: {
      default: "text-[16px]",
      sm: "text-[16px]",
      md: "text-[20px]",
      lg: "text-[28px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

function ShareIconGroup({ size = "default", className, onIconClick }) {
  const iconSize = iconSizeMap[size];

  const handleClick = (type) => {
    if (type === "gmail") {
      window.location.href = "mailto:monishachaurasia77@gmail.com";
    }
    if (type === "phone") {
      window.location.href = "tel:+919793814986";
    }
    if (type === "linkedIn") {
      window.open(
        "https://www.linkedin.com/in/monisha-chaurasia-732794211/",
        "_blank"
      );
    }
    if (type === "github") {
      window.open("https://github.com/77Monisha", "_blank");
    }
  };

  return (
    <motion.div
      className={cn(shareIconGroupVariants({ size }), "group", className)}
    >
      {/* GMAIL */}
      <motion.div
        whileHover={{ y: -6 }}
        className="cursor-pointer py-3"
        onClick={() => handleClick("gmail")}
      >
        <Mail size={iconSize} />
      </motion.div>

      {/* PHONE */}
      <motion.div
        whileHover={{ y: -6 }}
        className="cursor-pointer py-3"
        onClick={() => handleClick("phone")}
      >
        <Phone size={iconSize} />
      </motion.div>

      <motion.div
        whileHover={{ y: -6 }}
        className="cursor-pointer py-3"
        onClick={() => handleClick("linkedIn")}
      >
        <Linkedin size={iconSize} />
      </motion.div>

      {/* GITHUB */}
      <motion.div
        whileHover={{ y: -6 }}
        className="cursor-pointer py-3"
        onClick={() => handleClick("github")}
      >
        <Github size={iconSize} />
      </motion.div>
    </motion.div>
  );
}

export { ShareButton };
