/**
 * Academic & Research Knowledge Base — Dr. Jagdish Gouda
 * Comprehensive Q&A structured for client-side search and AI assistant modules.
 */

const RESEARCH_QA = [
  // --- MINE OVERBURDEN (MOM) & GEOCELLS ---
  {
    id: "qa-001",
    category: "Geotechnology & Overburden Recycling",
    question: "How do geocells improve mine overburden materials in haul road construction?",
    answer: "Placing single or double-pocket geocells in the upper layer yields an Improvement Factor (If) of 2–3. Under unsoaked conditions, double-pocket geocells achieved CBR values of 80.39% (Sandstone + Stone Dust) and 92.27% (Basalt + Lameta), compared to 40.26% for conventional methods. In soaked conditions, CBR reached up to 51.32% compared to 28.83% unreinforced.",
    tags: ["haul roads", "geocells", "CBR", "mine overburden", "sandstone", "basalt"],
    doi: "10.1007/s42461-024-01072-5"
  },
  {
    id: "qa-002",
    category: "Haul Road Design & Modeling",
    question: "What haul road design methods were evaluated in the Archives of Mining Sciences study?",
    answer: "The study compared empirical CBR methods, design charts, mechanistic design approaches using IITPAVE software, and geocell-reinforced designs. Both mechanistic and reinforced approaches met Critical Strain Limits (CSL), with vertical strains ranging from 1238 to 3700 µε and deflections between 1.5 to 4.5 mm.",
    tags: ["IITPAVE", "mechanistic design", "vertical strain", "deflection", "haul roads"],
    doi: "10.24425/ams.2024.151608"
  },
  {
    id: "qa-003",
    category: "Geotechnology & Overburden Recycling",
    question: "What geotechnical properties were observed in samples from the Umrer Open-Cast Mine?",
    answer: "Microstructural analysis (XRD, SEM, XRF) showed basalt had the highest load-bearing capacity with CBR values of 46.89% (unsoaked) and 38.22% (soaked). Topsoil exhibited low CBR values (5.35% unsoaked, 2.33% soaked), requiring stabilization before pavement use.",
    tags: ["Umrer Mine", "microstructure", "XRD", "SEM", "XRF", "basalt", "topsoil"],
    doi: "10.1000/geomandu2024-v4"
  },

  // --- COCONUT COIR GEOTEXTILES (CGT) ---
  {
    id: "qa-004",
    category: "Sustainable Geotextiles",
    question: "How does bitumen-treated coconut coir geotextile (CGT) enhance low-volume road subbases?",
    answer: "Reinforcing Mine Overburden Materials (MOM) with bitumen-treated coir geotextile (RTC2 with 0.6 kg/m² bitumen) increased unsoaked CBR from 76.40% to 134.01%, and soaked CBR from 57% to 97.3%. Static plate load tests showed a Modulus Improvement Factor (MIF) of 2.06 under maximum density and 2.61 in weak subgrade conditions.",
    tags: ["coconut coir", "bitumen treatment", "low-volume roads", "plate load test", "MIF"],
    doi: "10.1080/cgt-mom-2024"
  },

  // --- LOW-CARBON BINDERS & SUSTAINABLE CONCRETE ---
  {
    id: "qa-005",
    category: "Low-Carbon Binders & Pavements",
    question: "How does Limestone-Calcined Clay Blend (LC2) perform compared to Fly Ash (FA) in Roller-Compacted Concrete Pavements (RCCP)?",
    answer: "At 50% cement replacement, LC2 exhibited a minimal 28-day compressive strength reduction of 3.52%, compared to a 19.20% reduction with 25% Fly Ash. LC2 required lower optimal moisture content (7.13%–21.77%) than FA (16.38%–28.71%) and maintained performance up to 60% replacement.",
    tags: ["LC2", "fly ash", "RCCP", "compressive strength", "sustainable cement"],
    doi: "10.1080/14680629.2025.2486526"
  },

  // --- SOIL STABILIZATION & FORENSIC INVESTIGATIONS ---
  {
    id: "qa-006",
    category: "Geotechnical Stabilization",
    question: "How can Black Cotton (BC) soil be stabilized using agricultural and industrial wastes?",
    answer: "Combining 7.5% Sugarcane Bagasse Ash (SBA) and 15% Ceramic Waste Powder (CWP) significantly reduces plasticity, free swell index, and Optimum Moisture Content (OMC) while improving MDD, CBR, and UCS strength. Plaxis 2D finite element modeling validated enhanced subgrade stability.",
    tags: ["black cotton soil", "sugarcane bagasse ash", "ceramic waste", "Plaxis 2D", "subgrade"],
    doi: "10.1088/1755-1315/1326/1/012118"
  },
  {
    id: "qa-007",
    category: "Forensic Geotechnics",
    question: "What caused the overburden (OB) dump failure in the Central India opencast mine case study?",
    answer: "Forensic borehole, micrographic, and mineralogical analyses linked large-scale dump failure (ground heaving, mass sliding, peripheral cracks) to concealed high-swelling clays and weak foundation subsoil stratigraphy.",
    tags: ["forensic investigation", "OB dump failure", "high-swelling clay", "opencast mine"],
    doi: "10.1016/j.pce.2025.104091"
  },

  // --- CAREER & ACADEMIC BACKGROUND ---
  {
    id: "qa-008",
    category: "Academic & Career Background",
    question: "What is Dr. Jagdish Gouda's current academic role and specialization?",
    answer: "Dr. Jagdish Gouda is an Ad-hoc Assistant Professor in the Department of Civil Engineering at Visvesvaraya National Institute of Technology (VNIT), Nagpur. He specializes in transportation geotechnics, circular economy solutions for civil infrastructure, low-carbon binders, and mine overburden utilization.",
    tags: ["VNIT Nagpur", "assistant professor", "pavement geotechnics", "civil engineering"],
    doi: null
  },
  {
    id: "qa-009",
    category: "Academic & Career Background",
    question: "What consultancy and technical auditing experience does Dr. Gouda possess?",
    answer: "Dr. Gouda has served as a Technical Auditor and Consultant executing quality audits, structural viability assessments of RE walls, and rigid pavement evaluations for government agencies including NHAI, Maha Metro, and PWD Nagpur.",
    tags: ["NHAI", "Maha Metro", "PWD Nagpur", "quality audit", "RE walls"],
    doi: null
  }
];

if (typeof module !== 'undefined') {
  module.exports = { RESEARCH_QA };
}