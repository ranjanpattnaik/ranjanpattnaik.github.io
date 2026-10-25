/* =====================================================================
   PORTFOLIO CONTENT  —  this is the only file you need to edit.
   ---------------------------------------------------------------------
   Edit it on GitHub: open content.js → pencil icon (Edit) → change text
   → "Commit changes". The live site updates in about a minute.
   Full guide with copy-paste templates: HOW-TO-EDIT.md
   Rules of thumb: keep the quotes "…" and the commas between items.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- 1. Contact details ---------- */
  config: {
    email: "ranjanpattnaik.22@gmail.com",   // leave "" to hide
    linkedin: "https://www.linkedin.com/in/ranjanpattnaik/",
    github: "ranjanpattnaik",         // GitHub username
    repo: "ranjanpattnaik.github.io",  // repository holding this site
    cv: ""                           // e.g. "assets/Ranjan-Pattnaik-CV.pdf" after uploading the PDF there
  },

  /* ---------- 2. Project filter buttons ----------
     Each project's  cat:  must match one of these keys.
     "work" is ready for industry projects; its button only appears once a project uses it. */
  categories: [
    ["combustion", "Combustion & calibration"],
    ["airpath", "Air path & boosting"],
    ["vehicle", "Vehicle & hybrid"],
    ["electric", "Electrification"],
    ["structures", "Structures & fatigue"],
    ["work", "Industry projects"]
  ],

  /* ---------- 3. Work experience (newest first) ----------
     Copy this template inside the [ ] brackets to add a role:
     {
       when: "Jul 2025 – present",
       role: "Graduate Powertrain Engineer",
       org: "Company name",
       location: "City, UK",
       summary: "One sentence on the team and what you were there to deliver.",
       points: [
         "Built … in GT-Power to …, cutting … by …%.",
         "Ran … tests on … and correlated …"
       ],
       tags: ["GT-Power", "MATLAB"]
     },
  */
  experience: [
    {
      when: "Apr 2026 – present",
      role: "Powertrain Systems & Trackside Engineer",
      org: "NT219 Motorsports",
      location: "Northampton, UK",
      summary: "Trackside powertrain diagnostics, data logging and calibration during live track testing.",
      points: [
        "Improved PU session reliability by 15% through powertrain diagnostics and real-time data logging, feeding directly into xRT model correlation during live track testing.",
        "Accelerated real-time engineering decisions by 10% by monitoring critical telemetry, enabling rapid evaluation of performance ideas.",
        "Enhanced PU performance by 12% via iterative calibration, sensor validation and MATLAB/MoTeC fault diagnosis."
      ],
      tags: ["MoTeC i2", "MATLAB", "Telemetry", "Calibration"]
    },
    {
      when: "Jul 2025 – Dec 2025",
      role: "Simulation & Calibration Intern",
      org: "Flowthermolab",
      location: "Nottingham, UK",
      summary: "Control and calibration modules for hybrid thermal systems, validated on testbeds and vehicles.",
      points: [
        "Increased calibration accuracy by 10% in hybrid thermal systems by developing and validating Simulink control/calibration modules on testbeds and vehicles.",
        "Refined calibration precision by 15% by correlating simulation results with real engine data.",
        "Documented 5+ refined control strategies for a three-engineer team, resolving key thermal-management challenges."
      ],
      tags: ["Simulink", "MATLAB", "Hybrid thermal", "Calibration"]
    },
    {
      when: "Jan 2024 – Dec 2024",
      role: "Calibration & Data Engineer",
      org: "Oxford Brookes Racing Ltd.",
      location: "Oxford, UK",
      summary: "Powertrain calibration and data analysis for the university race team.",
      points: [
        "Improved engine response by 15% by analysing 500+ MoTeC i2 datasets in MATLAB and optimising powertrain calibration strategies.",
        "Resolved 90% of sensor issues through live trackside calibration updates during events.",
        "Cut calibration workflow time by 30% by automating post-run data processing in MATLAB/Python, standardising reports across 10+ competition events."
      ],
      tags: ["MoTeC i2", "MATLAB", "Python", "Trackside"]
    },
    {
      when: "Jan 2023 – Jun 2023",
      role: "Combustion Simulation Intern",
      org: "Simulation Labs",
      location: "Pune, India",
      summary: "GT-Power combustion modelling to guide calibration decisions.",
      points: [
        "Reduced engine issues by 20% using GT-Power models of transient knock and spark response to refine calibration assumptions.",
        "Delivered CA50 and heat-release trend analyses from 15 engine test campaigns, guiding calibration decisions and improving engine performance by 10%.",
        "Reduced physical testing by 5% by validating calibration strategies in GT-Power."
      ],
      tags: ["GT-Power", "Knock", "CA50", "Heat release"]
    },
    {
      when: "Sep 2020 – Aug 2021",
      role: "Calibration Engineer",
      org: "AM Customs",
      location: "Mumbai, India",
      summary: "ECU calibration and dyno tuning of performance motorcycles.",
      points: [
        "Maximised engine reliability across 50+ motorcycles through ECU diagnostics, fast issue resolution and precise WinOLS calibrations.",
        "Improved throttle response by 15% and fuel efficiency through dyno calibration of ignition and fuel maps on 20+ motorcycles.",
        "Delivered a 10% gain in drivability and thermal stability with structured test plans and data logging."
      ],
      tags: ["WinOLS", "Dyno", "ECU calibration"]
    }
  ],

  /* ---------- 4. Courses & certifications (newest first) ----------
     Template:
     { when: "Mar 2026", title: "GT-SUITE Advanced Combustion", provider: "Gamma Technologies",
       summary: "What you learned or built.", link: "https://… (certificate, optional)" },
  */
  courses: [
    { when: "Jun 2025", title: "Thermal Control Integration for Hybrid Vehicles", provider: "Gannet Engineering", summary: "", link: "" },
    { when: "Jan 2025", title: "Certified Reliability Expert: Engine Electronics Management System", provider: "Automotive Research Association of India (ARAI)", summary: "", link: "" },
    { when: "Jan 2024", title: "CFD Mentorship: Hydrogen Combustion and Turbomachinery Research", provider: "Flowthermolab", summary: "", link: "" },
    { when: "Jun 2023", title: "Powertrain Modelling and Systems Simulation | Systems Engineering Methods", provider: "Skill-Lync", summary: "", link: "" },
    { when: "Dec 2022", title: "Engine Calibration, Dynamometer Testing & Model-Based Development", provider: "Reynlab", summary: "", link: "" },
    { when: "Nov 2022", title: "Race Engineering, Trackside Operations & Data Analysis", provider: "Motorsport Industry Association", summary: "", link: "" }
  ],

  /* ---------- 5. Education (newest first) ---------- */
  education: [
    { when: "June 2025", title: "MSc dissertation", summary: "Development and validation of a machine-learning-based combustion control and knock prediction system for an ethanol-fuelled 2026 F1 power unit." },
    { when: "Sep – Dec 2024", title: "Thermal & electric modules", summary: "Advanced combustion analysis, electric powertrain design, electric machine thermal modelling." },
    { when: "Jan – May 2024", title: "Racing engine systems modules", summary: "Intake system modelling, turbocharger system integration, advanced powertrain engineering, advanced strength of components." },
    { when: "Jan 2024 – May 2025", title: "MSc Racing Engine Systems", summary: "Oxford Brookes University, School of Engineering, Computing and Mathematics." },
    { when: "Oct 2021 – Sep 2022", title: "MSc Automotive Engineering & Electric Propulsion", summary: "University of Bath. Turbocharging and engine boosting, vehicle dynamics and aerodynamics, engine and powertrain technologies, engineering systems simulation." }
  ],

  /* ---------- 6. Projects / case studies ----------
     To add one, copy the TEMPLATE at the bottom of this file into this list.
     Images: put them in  projects/<dir>/images/  and list them in img / figs.
     Fields:  n (card number) · featured: true (one big card at the top) · cat (filter key above)
              kicker (small label) · metric ["label", "value"] shown on the card
              kpis, approach, results, figs, limits shown in the pop-up case study.
              In approach/results you may use <strong>bold</strong>. */
  projects: [
  {
    id: "f1-ml-knock", n: "01", featured: true, cat: "combustion",
    dir: "01-f1-2026-ml-combustion-knock",
    kicker: "MSc dissertation · Combustion · ML",
    title: "ML combustion control & knock prediction for a 2026 F1 power unit",
    summary: "Calibrated a single-cylinder GT-Suite model of an E20-fuelled 2026 F1 cylinder, ran a 900-case DoE, and trained surrogates that locate a knock-safe spark window.",
    metric: ["GPR surrogate accuracy", "R² > 0.95"],
    img: "images/imep-response-surface-gpr.png", imgAlt: "IMEP response surface against spark timing and air-fuel ratio",
    meta: ["ENGR7019 Dissertation", "June 2025", "Individual", "GT-Suite · Data Mining Toolkit"],
    problem: "The 2026 rules keep the 1.6 L turbo V6 but move to 100% sustainable fuel, drop the MGU-H and target a 50/50 ICE/electric split. Ethanol blends burn faster and resist knock, but calibrating spark, mixture and valve timing for a new fuel at 10,000+ rpm is expensive one point at a time. Can a physics model plus an ML surrogate map combustion and knock fast enough to find a safe, high-output window?",
    kpis: [["IMEP", "28.0 bar"], ["Peak pressure", "≈330 bar"], ["CA50", "≈10° ATDC"], ["DoE cases", "900"], ["Best surrogate", "GPR, R² > 0.95"]],
    approach: [
      "<strong>Engine model:</strong> single cylinder of the 2026 1.6 L V6 in GT-Suite at 10,500 rpm, a pressure boundary in place of the turbo, turbulent flame-speed combustion with E20 properties, 0.1° CA output resolution, no EGR (per the regulations).",
      "<strong>Calibration:</strong> matched published 2026 F1 E20 data by tuning AFR, spark timing, intake temperature and the flame-speed multiplier.",
      "<strong>DoE:</strong> AFR 19.5–21.0, spark −34 to −28° CA, IVC −379 to −364° CA, turbulence multiplier 1.4–1.8; seven levels each (2,401 combinations), Latin Hypercube sampled to 900 cases.",
      "<strong>Surrogates:</strong> linear, neural network and Gaussian Process Regression, 80/20 train-test split, compared on RMSE and R².",
      "<strong>Heat release and knock:</strong> first-law apparent heat release plus GT's induction-time knock index to track onset and unburned fraction."
    ],
    results: [
      "Predicted pressure trace and P–V loop match the reference data through compression, combustion and expansion.",
      "GPR beat the linear and neural-network models with <strong>R² above 0.95 on all five outputs</strong>, predicting a case in under one second.",
      "Spark timing drives knock; turbulence drives burn duration; later IVC (beyond ~370° CA) cuts volumetric efficiency; AFR acts non-linearly on IMEP.",
      "Knock onset sat between −15° and −12° CA. Sweeps on the surrogate showed spark can advance to about <strong>−30° CA without knock</strong> with slightly richer AFR and higher turbulence, holding IMEP near 27 bar."
    ],
    figs: [["images/cylinder-pressure-validation.png", "Predicted vs measured cylinder pressure"], ["images/pv-diagram-validation.png", "Predicted vs measured P–V diagram"], ["images/volumetric-efficiency-vs-cam-timing.png", "Kriging prediction: volumetric efficiency vs cam timing and AFR"], ["images/gt-suite-single-cylinder-model.png", "GT-Suite single-cylinder model"]],
    limits: ["Single cylinder and a fixed boost boundary, so no turbo lag or cylinder-to-cylinder effects.", "Steady state at 10,500 rpm only; transients and part load are next.", "Next: couple the surrogate to a real-time spark controller and feed it from telemetry."]
  },
  {
    id: "turbo-altitude", n: "03", cat: "airpath",
    dir: "03-f1-2026-turbocharger-altitude",
    kicker: "Boosting · FIA 2026 regulations",
    title: "2026 F1 turbocharger at altitude: Mexico City GP",
    summary: "Matched a supplier turbo to a 2026-rules V6 in GT-Power and compared sea-level and 2,200 m operation against the 4.8 bar(A) boost limit.",
    metric: ["Boost at 10,500 rpm", "5.1 → 4.1 bar"],
    img: "images/compressor-efficiency-map-operating-points.png", imgAlt: "Compressor efficiency map with operating points",
    meta: ["ENGR7030 System Integration CW2", "Spring 2024", "Individual", "GT-Power"],
    problem: "Mexico City sits at about 2,200 m, where air density is about 22% lower than at sea level. Without the MGU-H in 2026, the turbo alone must recover that air mass within FIA limits on size, shaft speed (150,000 rpm) and inlet pressure (4.8 bar(A)).",
    kpis: [["Sea-level boost (no wastegate)", "5.1 bar"], ["Mexico boost", "4.1 bar"], ["Air mass flow change", "−18%"], ["Shaft speed", "≈93,000 rpm"]],
    approach: [
      "Mapped the governing articles: single-stage compressor and turbine, ≤ 4.8 bar(A) inlet pressure, ≥ 12 kg, compressor exducer 100–110 mm, wastegate only (VGT banned), material rules.",
      "Updated a 1.6 L V6 GT-Power model to 2026 rules and imported measured compressor and turbine maps for an EFR 9180-class turbo.",
      "Left the wastegate out on purpose to see the unregulated boost, then swept 4,000–10,500 rpm at sea level and at Mexico City ambient conditions."
    ],
    results: [
      "At sea level, boost reaches <strong>5.1 bar at 10,500 rpm</strong>, over the 4.8 bar limit, so a wastegate is required.",
      "At 2,200 m, boost drops to <strong>4.1 bar</strong> and air flow falls 18% (0.38 → 0.31 kg/s) despite a higher pressure ratio (4.70 → 4.92).",
      "Shaft speed stays far under 150,000 rpm, so the same hardware needs opposite wastegate strategies: bleed at sea level, stay shut and use the speed margin at altitude.",
      "Operating points were slightly beyond the supplied map's pressure-ratio range, so wider map data is needed before trusting the altitude numbers."
    ],
    figs: [["images/compressor-efficiency-map-operating-points.png", "Compressor operating points on the efficiency map"], ["images/compressor-speed-map.png", "Compressor speed map, ambient conditions"]],
    limits: ["Steady state with no heat transfer or pulsating flow.", "Next: add the wastegate with a boost-target controller and run transient laps."]
  },
  {
    id: "intake", n: "04", cat: "airpath",
    dir: "04-variable-intake-manifold-inline-six",
    kicker: "Gas dynamics · Intake tuning",
    title: "Three-stage variable intake manifold, BMW inline-six",
    summary: "Measured a real BMW resonance manifold, rebuilt it in GT-Power and mapped how two flaps shift the volumetric-efficiency peak across the rev range.",
    metric: ["Peak volumetric efficiency", "96.5% @ 4,250 rpm"],
    img: "images/volumetric-efficiency-vs-speed.png", imgAlt: "Volumetric efficiency against engine speed for four flap states",
    meta: ["ENGR7030 System Integration CW1", "Spring 2024", "Individual", "GT-Power · Python"],
    problem: "A naturally aspirated engine only burns the air it traps. Resonance manifolds use pressure waves to push in extra charge, but each geometry is tuned to one speed band. How do the two flaps on BMW's three-stage manifold move that band on an M52-type engine (84 mm bore, CR 10)?",
    kpis: [["Peak VE, both flaps closed", "96.5% @ 4,250 rpm"], ["Peak VE, both open", "95.2% @ 5,500 rpm"], ["Peak torque", "269 N·m @ 4,000 rpm"], ["Dominant FFT order", "1.5"]],
    approach: [
      "Hand-measured the lab manifold: runner lengths and diameters, resonance pipes, total volume of about 7.1 L.",
      "Built the 1D model with three flow-splits for the resonance pipes, setting X/Y/Z boundary angles so the 1D network keeps the real 3D layout.",
      "Swept 600–6,500 rpm in 250 rpm steps for all four flap states, then exported the results and re-plotted them with a Python script."
    ],
    results: [
      "Closing both flaps gives the highest VE and torque, but tunes the system to <strong>4,250 rpm</strong>; above 4,500 rpm VE falls to about 85%.",
      "Opening both flaps tunes for <strong>5,500 rpm</strong> and keeps VE above 92% to 6,500 rpm.",
      "Choosing the best flap state at each speed keeps VE above <strong>93.8% from 3,750 to 6,250 rpm</strong>, which no single state manages.",
      "Intake-port pressure is dominated by the 1.5 engine order, strongest with both flaps closed."
    ],
    figs: [["images/flap-switching-map.png", "Best flap state at each speed (from the simulation results)"], ["images/torque-vs-speed.png", "Torque vs engine speed"], ["images/gt-power-six-cylinder-three-stage-intake.png", "GT-Power model of the engine and three-stage intake"]],
    limits: ["Hand measurements carry error; plenum CFD would refine loss coefficients.", "Next: combine flap switching with cam phasing and correlate with dyno torque."]
  },
  {
    id: "hybrid", n: "02", cat: "vehicle",
    dir: "02-hybrid-powertrain-drive-cycle-gt-drive",
    kicker: "Vehicle energy · Hybrid",
    title: "Real-world drive cycle & power-split hybrid modelling",
    summary: "Built a real-world Oxford drive cycle, compared fuel use against NEDC in GT-Drive, then audited and ran a Prius-type power-split hybrid model.",
    metric: ["Real-world vs NEDC fuel", "9.7 vs 9.0 L/100 km"],
    img: "images/power-split-hybrid-model.png", imgAlt: "GT-Drive power-split hybrid model",
    meta: ["ENGR7005 Advanced Powertrain Engineering", "Spring 2024", "Individual modelling", "GT-Drive"],
    problem: "Legislative cycles like NEDC are smooth and stylised, so they under-state real fuel use. Part 1: build a real route (urban, A/B roads, motorway) and compare. Part 2: take over a hybrid model as a new R&D engineer, check it, document it and run it on UK driving.",
    kpis: [["Oxford cycle", "9.7 L/100 km"], ["NEDC", "9.0 L/100 km"], ["Peak acceleration", "3.89 vs 1.04 m/s²"], ["HEV on Oxford cycle", "6.5–7.0 L/100 km"]],
    approach: [
      "Backward-kinematic GT-Drive model with VW Lupo engine maps; derived the air-flow map from fuel flow at stoichiometric AFR (14.7).",
      "Ran the Oxford cycle, NEDC and WLTC, and broke fuel use down by acceleration, cruise, deceleration and idle.",
      "For the hybrid, mapped the control logic: tractive power demand, SOC window, mode selection by speed, motor limits and regen vs friction braking split."
    ],
    results: [
      "The real route used about <strong>8% more fuel than NEDC</strong> despite a lower top speed, because it is far more transient.",
      "Earlier upshifts at lower engine speed were the most effective fuel and CO₂ saving on the route.",
      "The HEV used 6.5–7.0 L/100 km on the Oxford cycle across two driver settings, against 4.7 on NEDC; high-speed sections pull SOC down and erode the hybrid advantage."
    ],
    figs: [["images/battery-soc-aggressive-vs-intermediate.png", "Battery SOC, two driver settings"], ["images/oxford-drive-cycle-speed-trace.png", "Oxford drive cycle speed trace"], ["images/hybrid-control-architecture-sketch.png", "My sketch of the hybrid control architecture"]],
    limits: ["One route and vehicle; repeated drives would make the cycle statistically representative.", "Next: optimise the SOC window and engine-on threshold for UK driving."]
  },
  {
    id: "pressure", n: "05", cat: "combustion",
    dir: "05-cylinder-pressure-combustion-analysis",
    kicker: "Combustion diagnostics",
    title: "Cylinder-pressure analysis & pressure reconstruction",
    summary: "Reduced 1.6 L GDI pressure data to mass fraction burned and heat release, then re-implemented a method that reconstructs combustion pressure from crankshaft speed.",
    metric: ["Method", "Speed → pressure"],
    img: "images/synthetic-speed-and-pressure-reconstruction.png", imgAlt: "Synthetic engine speed and reconstructed pressure signals",
    meta: ["ENGR7029 Advanced Combustion Analysis", "November 2024", "Individual", "Excel · MATLAB"],
    problem: "Cylinder pressure is the best window into combustion but transducers in every cylinder are expensive. Part 1: turn measured data from a 1.6 L GDI engine (77 × 85.8 mm, CR 10.5) into burn rate. Part 2: review and test a method that estimates pressure from the crank speed signal every ECU already has.",
    kpis: [["Engine", "1.6 L GDI, 4 cyl"], ["MFB methods", "Rassweiler–Withrow, Wiebe"], ["Polytropic n", "1.32 / 1.27"]],
    approach: [
      "Slider-crank volume, start and end of combustion from departure from pVⁿ, Rassweiler–Withrow and Wiebe MFB, and a single-zone first-law heat release derived from first principles.",
      "Critically reviewed Moro et al.'s pressure reconstruction from instantaneous engine speed: remove reciprocating inertia torque to get a 'synthetic' speed, then map it to combustion pressure through a frequency response function.",
      "Built a simplified four-cylinder MATLAB model that generates synthetic speed from crank dynamics and reconstructs combustion pressure."
    ],
    results: [
      "Reconstruction is highly sensitive to misfire and abnormal combustion, which suits torque-based control and diagnostics.",
      "On four cylinders each cylinder is only recoverable over a 180° window; with more cylinders the expansion strokes overlap, a real limit for V6 and V8 racing engines."
    ],
    figs: [["images/pressure-reconstruction-motored-vs-reconstructed.png", "Motored vs reconstructed pressure (MATLAB)"], ["images/synthetic-speed-and-pressure-reconstruction.png", "Synthetic speed and pressure reconstruction"]],
    limits: ["Next: validate the reconstruction against measured transducer traces and feed it to a misfire and CA50 estimator."]
  },
  {
    id: "fe-powertrain", n: "06", cat: "electric",
    dir: "06-formula-e-electric-powertrain-design",
    kicker: "Electrification · HV systems",
    title: "Formula E Gen3-class electric powertrain design",
    summary: "Sized a 900 V pack for a 350 kW rear motor, chose and simulated a three-phase IGBT inverter, and designed a regenerative braking circuit.",
    metric: ["Pack", "243s12p · 900 V"],
    img: "images/three-phase-igbt-inverter.png", imgAlt: "Three-phase IGBT inverter schematic",
    meta: ["ENGR7031 Electric Powertrain CW1", "December 2024", "Individual", "Multisim · Python"],
    problem: "Design the battery, inverter and regen system around a 350 kW motor with a 900 V, 50 kWh target, justify each choice analytically and check it in circuit simulation.",
    kpis: [["Cells", "2,916 (243s12p)"], ["Energy", "≈54 kWh"], ["Peak current", "389 A"], ["Voltage under load", "821 V"]],
    approach: [
      "Pack: 21700 NMC cells (3.7 V, 5 Ah) compared with 4680; 243 in series, 12 strings; sag from 10 mΩ cells; scaled Multisim model.",
      "Inverter: compared Si IGBT, MOSFET and SiC; chose a 1,200 V / 600 A IGBT module; six-switch PWM bridge into an RL load at 10 kHz.",
      "Regen: reverse-torque PWM, rectifier path, capacitor bank and buck-boost stage, with 80% voltage ceiling and 20–30% current headroom."
    ],
    results: [
      "My Python check shows per-string current within 8% of the cell rating and about 31 kW of I²R loss at peak, pointing to lower-resistance cells.",
      "The inverter switched cleanly; the low-power-factor RL test load is the next thing to replace with a PMSM model and switching-loss model.",
      "Regen transient shows the expected charging sawtooth at braking onset."
    ],
    figs: [["images/battery-pack-multisim.png", "Scaled battery pack model"], ["images/regenerative-braking-transient.png", "Regenerative braking transient"]],
    limits: ["Next: equivalent-circuit cells, a battery/ultracapacitor split for regen peaks, and SiC switches."]
  },
  {
    id: "motor-thermal", n: "07", cat: "electric",
    dir: "07-ev-motor-lumped-parameter-thermal-model",
    kicker: "Thermal management",
    title: "Lumped-parameter thermal model of a hybrid traction motor",
    summary: "Built a 38-resistance thermal network of a Prius motor in OpenModelica, checked it against ORNL test data, and modelled 4th-gen ATF cooling.",
    metric: ["End-winding at 1,000 s", "≈169 → ≈92 °C"],
    img: "images/openmodelica-lptn-model.png", imgAlt: "OpenModelica lumped-parameter thermal network",
    meta: ["ENGR7031 Electric Powertrain (Thermal)", "December 2024", "Individual", "OpenModelica"],
    problem: "Winding temperature limits continuous motor power. Lumped-parameter networks predict it fast enough for design and real-time derating. Review the field, then implement a published cooling study.",
    kpis: [["Network", "R1–R38, C1–C10"], ["ATF flow", "0.1 kg/s @ 60 °C"], ["Stator loss", "1.5 kW"], ["End-winding, 1,000 s", "≈92 °C"]],
    approach: [
      "Baseline Prius motor network with values calculated from geometry and materials, simulated for 1,000 s.",
      "Checked against ORNL tests, where measured winding temperatures were 156–168.5 °C; the model reached about 169 °C.",
      "Added a 4th-gen ATF heat exchanger (IC71W indirect liquid cooling per IEC 60034-6) with stator loss estimated at 2–5% of 53 kW."
    ],
    results: [
      "End-winding temperature at 1,000 s fell from <strong>≈169 °C to ≈92 °C</strong>, well inside the 180 °C Class H limit.",
      "Heat-flow outputs confirm the ATF path now carries the stator heat."
    ],
    figs: [["images/end-winding-temperature-baseline.png", "End-winding temperature, baseline"], ["images/end-winding-temperature-atf-cooling.png", "End-winding temperature with ATF cooling"]],
    limits: ["Not yet at steady state at 1,000 s.", "Next: drive-cycle loss maps and temperature-dependent ATF properties."]
  },
  {
    id: "rocker", n: "08", cat: "structures",
    dir: "08-desmodromic-rocker-arm-random-fatigue",
    kicker: "Structures · Fatigue · Group",
    title: "Random-load fatigue of a desmodromic rocker arm",
    summary: "Modelled the opening rocker of a Desmo V4 valvetrain in Ansys and assessed fatigue with rainflow (time domain) and PSD (frequency domain) methods.",
    metric: ["Peak stress · min FoS", "31.2 MPa · 7.6"],
    img: "images/equivalent-stress.png", imgAlt: "Von Mises stress contour on the rocker arm",
    meta: ["ENGR7012 Advanced Strength of Components", "Spring 2024", "Group of three, equal contribution", "Ansys · MATLAB"],
    problem: "A desmodromic valvetrain closes the valve with a second cam instead of a spring, so the rockers carry inertia and cam loads both ways under random, variable-amplitude loading.",
    kpis: [["Peak von Mises", "31.2 MPa"], ["Min safety factor", "7.6"], ["Mesh", "1 mm"]],
    approach: [
      "Fixed the rocker-shaft bore and applied cam and closing forces; refined the mesh from 5 mm to 1 mm.",
      "Time domain: random load history, strain-life with mean-stress correction, rainflow matrix and Miner's rule.",
      "Frequency domain: load PSD in MATLAB and statistical regeneration of an equivalent time history."
    ],
    results: [
      "Peak stress sits around the bore and neck, where published rocker failures start, and is in line with measured rocker-pad stresses in the literature.",
      "Life estimates depend on the sampled history's bandwidth, level and length, so they should be reported with scatter."
    ],
    figs: [["images/rainflow-matrix.png", "Rainflow matrix"], ["images/psd-matlab.png", "Load PSD (MATLAB)"]],
    limits: ["Next: a valve-lift-derived load spectrum and Dirlik damage alongside rainflow."]
  },
  {
    id: "sn-lab", n: "09", cat: "structures",
    dir: "09-fatigue-lab-sn-life-prediction",
    kicker: "Materials testing",
    title: "Fatigue lab: S-N prediction vs physical test",
    summary: "Predicted the 10⁵-cycle load for plain and drilled AA6082-T6 beams from a tensile test and S-N theory, then tested them.",
    metric: ["Plain beam life at 5.44 kN", "724,992 cycles"],
    img: "images/plain-beam-after-test.jpg", imgAlt: "Fractured plain aluminium beam after fatigue testing",
    meta: ["ENGR7012 Fatigue laboratory", "March 2024", "Individual report", "UTM · Python"],
    problem: "Predict the four-point-bend load at which two AA6082-T6 beams (plain, and with a drilled hole) fail at 10⁵ cycles, then test them.",
    kpis: [["UTS", "336 MPa"], ["Kf (hole)", "2.01"], ["Predicted loads", "5.5 / 4.4 kN"], ["Tested loads", "5.44 / 4.80 kN"]],
    approach: [
      "UTS from a dog-bone tensile test; section properties from measured dimensions.",
      "Marin-modified strengths at 10³ and 10⁸ cycles with Goodman mean-stress correction; Kt = 2.12, q = 0.9.",
      "Basquin line evaluated at 10⁵ cycles and converted to machine load; reproduced in a Python script."
    ],
    results: [
      "Plain beam ran at 1% from the predicted load and lasted <strong>about 7× the target life</strong>: the method is conservative.",
      "The drilled beam carried 8.6% more than predicted for about 10⁵ cycles without breaking, so the notch factor is probably overstated for this hole.",
      "One specimen per condition can't separate model error from scatter."
    ],
    figs: [["images/plain-beam-after-test.jpg", "Plain beam: fractured at 724,992 cycles"], ["images/notched-beam-after-test.jpg", "Drilled beam: intact after 96,320 cycles"]],
    limits: ["Next: several specimens at several stress levels to fit a real S-N curve."]
  }
  ]
};

/* ---------- PROJECT TEMPLATE (copy everything between the lines into "projects" above) ----------
  {
    id: "short-unique-id", n: "10", cat: "work",
    dir: "10-short-folder-name",
    kicker: "Industry · Company name",
    title: "Project title",
    summary: "Two lines for the card: what you did and why it mattered.",
    metric: ["Headline metric", "−12% fuel"],
    img: "images/main-figure.png", imgAlt: "What the image shows",
    meta: ["Company / module", "Month Year", "Individual or team of N", "Main tools"],
    problem: "The engineering question in two or three sentences.",
    kpis: [["Result one", "value"], ["Result two", "value"]],
    approach: ["Step one …", "Step two …"],
    results: ["Finding with a number …", "Second finding …"],
    figs: [["images/figure-2.png", "Caption"]],
    limits: ["What you'd do next."]
  },
------------------------------------------------------------------------------------------------- */
