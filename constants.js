const PROFILE_DATA = {
  name: "Dr. Jagdish Gouda",
  title: "Ad-hoc Assistant Professor",
  department: "Department of Civil Engineering",
  institution: "Visvesvaraya National Institute of Technology (VNIT)",
  location: "Nagpur, India",
  email: "jagdishgouda113@gmail.com",
  phone: "+91-8143124621",

  about: "I am a transportation geotechnics researcher specializing in circular economy solutions for civil infrastructure. My work focuses on mine overburden utilization, low-carbon sustainable binders, and geocell/coir reinforcement for low-volume roads. Through full-scale field testing and microstructural characterization, I engineer resilient pavement layers from industrial waste.",

  topics: [
    "Pavement Geotechnics",
    "Mine Overburden Recycling",
    "Geocell & Coir Reinforcement",
    "Low-Carbon Binders"
  ],

  socials: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=GyLHPA0AAAAJ&hl=en" },
    { label: "ORCID", url: "https://orcid.org/0000-0002-9271-4523" },
    { label: "ResearchGate", url: "https://www.researchgate.net/profile/Jagdish-Gouda" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jagdish-gouda-phd-b513a6122/" }
  ],

  timeline: [
    {
      year: "2025 – Present",
      role: "Ad-hoc Assistant Professor",
      org: "VNIT Nagpur",
      details: "Instructing undergraduate and postgraduate courses in Pavement Analysis, Concrete Engineering, and Highway Construction & Maintenance."
    },
    {
      year: "2021 – 2025",
      role: "Ph.D. in Transportation Engineering",
      org: "VNIT Nagpur",
      details: "Thesis: Testing and evaluation of Natural and Synthetic reinforcement in subbase/base layers using mine overburden materials."
    },
    {
      year: "2024 – 2025",
      role: "Technical Auditor & Consultant",
      org: "NHAI, Maha Metro, PWD Nagpur",
      details: "Executed third-party quality audits, structural viability assessments of RE walls, and rigid pavement evaluations."
    },
    {
      year: "2018 – 2020",
      role: "M.Tech. in Excavation Engineering",
      org: "VNIT Nagpur",
      details: "Researched correlations between Cerchar Abrasivity Index (CAI) and geomechanical properties of intact and jointed rock masses."
    }
  ],

  publications: [
  // --- PEER-REVIEWED JOURNALS ---
  {
    id: "pub-1",
    type: "journal",
    title: "Unlocking the Potential of Mine Overburden Materials and Coconut Coir Geotextile: A Full-Scale Study on Reinforcing Low-Volume Roads in India",
    venue: "Road Materials and Pavement Design",
    year: "2025",
    impact: "IF 3.9",
    doi: "https://doi.org/10.1080/14680629.2025.2470887",
    authors: "Jagdish Gouda, D. Sitarami Reddy, Srinivasan V., Ayush Dudhabaware",
    abstract: "Evaluates the performance of coconut coir geotextiles combined with processed mine overburden as a sustainable subbase material for rural and low-volume roads using full-scale field testing.",
    citation: "Gouda, J., Reddy, D. S., V., S., & Dudhabaware, A. (2025). Unlocking the Potential of Mine Overburden Materials and Coconut Coir Geotextile. Road Materials and Pavement Design, 1–25."
  },
  {
    id: "pub-2",
    type: "journal",
    title: "Comparative Assessment of Limestone-Calcined Clay Blend and Fly Ash as Binders in Roller-Compacted Concrete Pavement: Evaluation of Fresh and Hardened Properties",
    venue: "Road Materials and Pavement Design",
    year: "2025",
    impact: "IF 3.9",
    doi: "https://doi.org/10.1080/14680629.2025.2486526",
    authors: "Vaibhav Butle, Srinivasan V., D. Sitarami Reddy, Jagdish Gouda",
    abstract: "Comparative evaluation of cement replacement with LC2 and fly ash (25–80%) in roller-compacted concrete pavements, showing LC2 maintains structural viability up to 60% substitution.",
    citation: "Butle, V., V., S., Reddy, D. S., & Gouda, J. (2025). Comparative Assessment of Limestone-Calcined Clay Blend and Fly Ash as Binders in Roller-Compacted Concrete Pavement. Road Materials and Pavement Design."
  },
  {
    id: "pub-3",
    type: "journal",
    title: "Forensic Investigation of a Failed Overburden Dump: A Case Study of an Opencast Mine Site in Central India",
    venue: "Physics and Chemistry of the Earth",
    year: "2025",
    impact: "IF 4.1",
    doi: "https://doi.org/10.1016/j.pce.2025.104091",
    authors: "Rahul Shende, Srinivasan V, Anjan Patel, Ajay Chhangani, Jagdish Gouda",
    abstract: "Forensic geotechnical investigation of an unstable overburden dump site in Central India, integrating subsurface borehole logging, mineralogy, and stability modeling.",
    citation: "Shende, R., V, S., Patel, A., Chhangani, A., & Gouda, J. (2025). Forensic Investigation of a Failed Overburden Dump. Physics and Chemistry of the Earth."
  },
  {
    id: "pub-4",
    type: "journal",
    title: "Recycling Mine Waste in Low-Volume Roads: A Geocell-Based Approach for Base Layer Reinforcement",
    venue: "Innovative Infrastructure and Solutions",
    year: "2026",
    impact: "IF 2.8",
    doi: "https://doi.org/10.1007/s41062-026-02790-z",
    authors: "Jagdish Gouda, Srinivasan V., Sita Rami Reddy D., Meka Nagendra, Yallati Varshith",
    abstract: "Investigates three-dimensional geocell confinement for reinforcing uncrushed mine waste in pavement base layers through laboratory and field testing.",
    citation: "Gouda, J., V., S., Reddy, D. S. R., Nagendra, M., & Varshith, Y. (2026). Recycling Mine Waste in Low-Volume Roads. Innovative Infrastructure and Solutions."
  },
  {
    id: "pub-5",
    type: "journal",
    title: "Field and Laboratory Evaluation of Fly Ash–Stabilized Moisture Control Technique for Roads Over Expansive Black Cotton Soils: A Case Study",
    venue: "International Journal of Pavement Research and Technology",
    year: "2026",
    impact: "IF 2.5",
    doi: "https://doi.org/10.1007/s42947-026-00778-7",
    authors: "Jagdish Gouda, Mainak Majumder, Srinivasan V.",
    abstract: "Analyzes fly ash-stabilized subgrades as a moisture-barrier mechanism to mitigate volumetric swelling and seasonal deflections in expansive black cotton soils.",
    citation: "Gouda, J., Majumder, M., & V., S. (2026). Field and Laboratory Evaluation of Fly Ash–Stabilized Moisture Control Technique. Int. J. Pavement Res. Technol."
  },
  {
    id: "pub-6",
    type: "journal",
    title: "Evaluating Overburden Materials for Haul Road Construction with and without Cellular Confinement: A Comprehensive Study in Indian Context",
    venue: "Mining, Metallurgy & Exploration",
    year: "2024",
    impact: "IF 1.5",
    doi: "https://doi.org/10.1007/s42461-024-01090-3",
    authors: "Jagdish Gouda, Srinivasan V., D. Sitarami Reddy, Rahul Shende",
    abstract: "Evaluates single and double-pocket geocells for reinforcing mine overburden materials in haul roads, achieving substantial CBR improvements under soaked and unsoaked conditions.",
    citation: "Gouda, J., V., S., Reddy, D. S., & Shende, R. (2024). Evaluating Overburden Materials for Haul Road Construction with and without Cellular Confinement. Mining, Metallurgy & Exploration."
  },
  {
    id: "pub-7",
    type: "journal",
    title: "Comprehensive Review of Haul Road Design Methods: A Comparative Approach",
    venue: "Archives of Mining Sciences",
    year: "2024",
    impact: "IF 1.2",
    doi: "https://doi.org/10.24425/ams.2024.151449",
    authors: "Jagdish Gouda, D. Sitarami Reddy, Srinivasan V., Vaibhav Butle",
    abstract: "A comparative review of empirical CBR, mechanistic, and reinforced haul road design methods, utilizing IITPAVE software to evaluate vertical strain limits and surface deflections.",
    citation: "Gouda, J., Reddy, D. S., V., S., & Butle, V. (2024). Comprehensive Review of Haul Road Design Methods: A Comparative Approach. Archives of Mining Sciences, 69(3), 529-554."
  },
  {
    id: "pub-8",
    type: "journal",
    title: "Laboratory Evaluation of Mine Waste Utilization in Sub-base of Low-Volume Roads",
    venue: "Journal of The Institution of Engineers (India): Series D",
    year: "2026",
    impact: "IF 0.7",
    doi: "https://doi.org/10.1007/s40033-026-01002-3",
    authors: "Varshith Shankar Yallati, Jagdish Gouda, D. Sitarami Reddy, Srinivasan V.",
    abstract: "Laboratory investigation assessing physical, mechanical, and compaction characteristics of raw mine overburden aggregates for low-volume road subbase applications.",
    citation: "Yallati, V. S., Gouda, J., Reddy, D. S., & V., S. (2026). Laboratory Evaluation of Mine Waste Utilization in Sub-base of Low-Volume Roads. J. Inst. Eng. India Ser. D."
  },

  // --- CONFERENCE PROCEEDINGS & BOOK CHAPTERS ---
  {
    id: "pub-9",
    type: "conference",
    title: "Utilization of Mine Overburdened Materials in Low Volume Roads Subbase/Base with Coconut Coir Geotextile Reinforcement",
    venue: "8th CETRA Conference, University of Zagreb, Croatia",
    year: "2024",
    impact: "Peer-Reviewed",
    doi: "https://doi.org/10.5592/CO/cetra.2024.1581",
    authors: "Jagdish Gouda, Ayush Dudabhaware, D. Sitarami Reddy, Srinivasan V.",
    abstract: "Presents laboratory compaction and CBR studies evaluating mine overburden aggregate interaction with coir geotextile interfaces.",
    citation: "Gouda, J., Dudabhaware, A., Reddy, D. S., & V., S. (2024). Utilization of Mine Overburdened Materials in Low Volume Roads. 8th CETRA Conference, Croatia."
  },
  {
    id: "pub-10",
    type: "conference",
    title: "Characterization of Mine Overburden Materials for Pavement Applications: A Microstructural and Small-Scale Study",
    venue: "GeoMandu 2024, Lecture Notes in Civil Engineering (Vol. 659), Springer",
    year: "2024",
    impact: "Peer-Reviewed",
    doi: "https://doi.org/10.1007/978-981-96-8536-3_21",
    authors: "Jagdish Gouda, Ayush Dudhabaware, Rahul Shende, Sita Rami Reddy, Srinivasan V.",
    abstract: "Microstructural (XRD, SEM, XRF) and geotechnical characterization of topsoil, sandstone, and basalt overburden samples from Umrer Open-Cast Mine.",
    citation: "Gouda, J., Dudhabaware, A., Shende, R., Reddy, S. R., & V., S. (2024). Characterization of Mine Overburden Materials for Pavement Applications. GeoMandu 2024, Springer."
  },
  {
    id: "pub-11",
    type: "conference",
    title: "Slope Stability Analysis of Mine Slope Section with Haul Roads: A Case Study",
    venue: "CTSEM 2024, Lecture Notes in Civil Engineering (Vol. 621), Springer",
    year: "2025",
    impact: "Peer-Reviewed",
    doi: "https://doi.org/10.1007/978-981-96-1984-9_38",
    authors: "Rahul Shende, Srinivasan V., Jagdish Gouda",
    abstract: "Numerical slope stability analysis evaluating factor of safety and deformation behavior in opencast mine benches containing active heavy haul roads.",
    citation: "Shende, R., V., S., & Gouda, J. (2025). Slope Stability Analysis of Mine Slope Section with Haul Roads. CTSEM 2024, Springer, LNCE vol 621."
  },
  {
    id: "pub-12",
    type: "conference",
    title: "Enhancing Subgrade Properties of Black Cotton Soil through the Combined Use of Sugarcane Bagasse Ash and Ceramic Waste Powder",
    venue: "CISCE-2023, IOP Conf. Series: Earth and Environmental Science (1326 012118)",
    year: "2023",
    impact: "Peer-Reviewed",
    doi: "https://doi.org/10.1088/1755-1315/1326/1/012118",
    authors: "Jagdish Gouda, Badavath Santosh, D. Sitarami Reddy",
    abstract: "Experimental evaluation and Plaxis 2D numerical modeling of expansive soil stabilization using sugarcane bagasse ash and ceramic waste powder.",
    citation: "Gouda, J., Santosh, B., & Reddy, D. S. (2023). Enhancing Subgrade Properties of Black Cotton Soil. IOP Conf. Ser.: Earth Environ. Sci., 1326, 012118."
  },
  {
    id: "pub-13",
    type: "conference",
    title: "Experimental Studies on the Use of Fly Ash in Grout Slurry for CGB Mixes",
    venue: "13th Structural Engineering Convention (SEC-2023), Springer Nature",
    year: "2023",
    impact: "Peer-Reviewed",
    doi: "https://doi.org/10.1007/978-981-97-6067-1_42",
    authors: "Jagdish Gouda, Santhosh Kotale, D Sitarami Reddy",
    abstract: "Investigates fluid and compressive strength properties of fly ash-infused grout slurries for cement-grouted bituminous (CGB) semi-rigid pavement mixtures.",
    citation: "Gouda, J., Kotale, S., & Reddy, D. S. (2023). Experimental Studies on the Use of Fly Ash in Grout Slurry for CGB Mixes. Structural Engineering Convention, Springer."
  },
  {
    id: "pub-14",
    type: "conference",
    title: "Evaluation Of Mechanical Properties Of Cement Grouted Bituminous Mix With Varied Types Of Grouts",
    venue: "1st Indian Conference on Disaster Resilient Infrastructure (I-DRI 2024)",
    year: "2024",
    impact: "Peer-Reviewed",
    doi: "https://doi.org/10.5281/zenodo.14234856",
    authors: "Jagdish Gouda, Basvaraj Patil, D. Sitarami Reddy, Ayush Dudabhaware",
    abstract: "Assesses rutting resistance, marshall stability, and flexural tensile properties of cement-grouted bituminous pavements using varying fluid grout formulations.",
    citation: "Gouda, J., Patil, B., Reddy, D. S., & Dudabhaware, A. (2024). Evaluation Of Mechanical Properties Of Cement Grouted Bituminous Mix. I-DRI 2024, NIT Pondicherry."
  }
]
};