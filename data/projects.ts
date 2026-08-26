export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  scope: string[];
  description: string;
  tools: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "modern-sports-arena",
    title: "Modern Sports Arena & Stadium Complex",
    category: "Structural Steel & Truss Geometry",
    image: "/stadium.jpg",
    scope: [
      "Structural steel framework drafting",
      "Load distribution modeling",
      "Roof truss parametric design",
    ],
    description:
      "Full structural BIM coordination and roof truss engineering for a 45,000-seat sports complex.",
    tools: ["AutoCAD", "Revit", "Fusion 360"],
  },
  {
    slug: "shanghai-skyscraper-tower",
    title: "Iconic Shanghai Skyscraper Tower",
    category: "High-Rise Seismic & Facade Architecture",
    image: "/residential.jpg",
    scope: [
      "High-rise curtain wall detailing",
      "Core shaft 3D structural coordination",
      "Seismic parametric analysis",
    ],
    description:
      "Detailed structural core drafting and dynamic lateral wind/seismic resistance modeling.",
    tools: ["AutoCAD", "SolidWorks", "Revit"],
  },
  {
    slug: "suspension-bridge-infrastructure",
    title: "Massive Cable-Stayed Suspension Bridge",
    category: "Civil Infrastructure & BIM",
    image: "/site-plan.jpg",
    scope: [
      "Cable-stayed structural assembly",
      "Concrete pier foundation modeling",
      "Civil BIM coordination",
    ],
    description:
      "Precision structural modeling for a 1.2km cable-stayed bridge spanning major marine channels.",
    tools: ["Autodesk Inventor", "AutoCAD", "Civil 3D"],
  },
];