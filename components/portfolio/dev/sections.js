import {
  BookMarked,
  BookOpen,
  Braces,
  GitCommitHorizontal,
  SquareTerminal,
} from "lucide-react";
import { PROJECTS, SIDE_PROJECTS } from "@/lib/portfolio-data";

// Section anchors for the Developer View, shared by the tab bar and the
// command palette.
export const DEV_SECTIONS = [
  { id: "overview", label: "Overview", icon: BookOpen },
  {
    id: "repositories",
    label: "Repositories",
    icon: BookMarked,
    count: PROJECTS.length + SIDE_PROJECTS.length,
  },
  { id: "experience", label: "Experience", icon: GitCommitHorizontal },
  { id: "skills", label: "Skills", icon: Braces },
  { id: "contact", label: "Contact", icon: SquareTerminal },
];
