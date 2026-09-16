/* =====================================================================
   ID STUDENT HUB — SITE CONTENT
   =====================================================================
   This file holds ALL the editable content for the website: books,
   software, websites, courses, opportunities, research, student work,
   faculty picks and FAQ.

   You do NOT need to know how to code to edit this file. Just follow
   the pattern of the existing entries.

   HOW TO EDIT
   -----------
   1. Find the list you want to change (e.g. "const BOOKS = [ ... ]").
   2. Each item is wrapped in { curly braces } and separated by commas.
   3. To ADD an item: copy an existing { ... } block (including the
      comma after it), paste it, and change the text inside the quotes.
   4. To REMOVE an item: delete its whole { ... } block, including the
      comma that follows it (but not the comma after the item before it).
   5. To EDIT an item: just change the text between the quotes " ".
      Do not remove or add quote marks, colons, or commas.
   6. Always keep matching curly braces { } and square brackets [ ].
      If the site stops working after an edit, the most common cause
      is a missing comma or an extra/missing bracket — compare your
      edit closely to the surrounding entries.
   7. Save the file and re-upload it (or push it) exactly as
      "content.js" — the filename must not change.
   8. Text containing "PLACEHOLDER — TO BE REPLACED" is example content
      only. Replace it with real information (or delete the flag once
      the entry is confirmed real) before publishing.

   Search tips (Ctrl+F / Cmd+F in your code editor):
   - "const BOOKS"            → Books & References
   - "const SOFTWARE"         → Software & Tools
   - "const WEBSITES"         → Websites & Platforms
   - "const COURSES"          → Courses & Workshops
   - "const COMPETITIONS_RES" → Competitions & Opportunities (resources)
   - "const TEMPLATES"        → Templates & Materials
   - "const GUIDE"            → Student Guide (New Students, Year 1-4)
   - "const WORK"             → Student Work gallery
   - "const RESEARCH"         → Research library
   - "const OPPORTUNITIES"    → Opportunities (with deadlines/status)
   - "const FAQ"              → FAQ accordion
   - "const FACULTY"          → Faculty Picks
   ===================================================================== */

/* ============================================================ DATA ============================================================ */

const BOOKS = [
 {title:"101 Things I Learned in Architecture School", author:"Matthew Frederick", category:"Design Theory", year:"All Years", level:"Beginner",
  desc:"Short, illustrated principles covering design thinking, structure and presentation — the book most students read before anything else.",
  why:"Gives you a shared vocabulary for critique before you've had much studio experience.", topics:["design thinking","fundamentals","presentation"], link:"https://mitpress.mit.edu/9780262062664/101-things-i-learned-in-architecture-school/"},
 {title:"Architecture: Form, Space & Order", author:"Francis D.K. Ching", category:"Design Theory", year:"2nd–4th Year", level:"Intermediate",
  desc:"The standard reference on spatial organization, proportion, and the formal principles behind architectural composition.",
  why:"Useful for design principles, spatial organization, form, hierarchy, circulation and conceptual development.", topics:["form","spatial organization","circulation"], link:"https://www.wiley.com/en-us/Architecture%3A+Form%2C+Space%2C+and+Order%2C+4th+Edition-p-9781118745086"},
 {title:"Architects' Data", author:"Ernst Neufert", category:"Technical", year:"2nd–4th Year", level:"Intermediate",
  desc:"Dimensional and planning standards for nearly every building type — the reference you check before finalizing a plan.",
  why:"Essential for checking real-world dimensions: clearances, room sizes, and planning standards across building types.", topics:["dimensions","planning standards","technical"], link:"https://www.wiley.com/en-us/Neufert+Architects%27+Data%2C+4th+Edition-p-9781405192533"},
 {title:"The Interior Design Reference & Specification Book", author:"Julia Piotrowski", category:"Interior Design", year:"2nd–4th Year", level:"Intermediate",
  desc:"A field-guide style reference for materials, finishes, furniture dimensions and specification writing.",
  why:"Bridges the gap between a design idea and a buildable, specified interior.", topics:["specification","materials","furniture dimensions"], link:"https://www.quarto.com/books/9781631598881/the-interior-design-reference-specification-book-updated-revised"},
 {title:"Time-Saver Standards for Interior Design", author:"Various (McGraw-Hill)", category:"Interior Design", year:"3rd–4th Year", level:"Advanced",
  desc:"Comprehensive planning and specification data specifically for interior spaces, from residential to hospitality.",
  why:"Good for technical development once your design work moves past schematic stages.", topics:["planning data","interiors","specification"], link:"https://www.accessengineeringlibrary.com/"},
 {title:"Metric Handbook: Planning and Design Data", author:"Pamela Buxton (ed.)", category:"Technical", year:"2nd–4th Year", level:"Intermediate",
  desc:"UK-oriented planning and design data organized by building typology, widely used alongside Neufert.",
  why:"A second reference point for planning standards — useful when Neufert doesn't cover a specific typology.", topics:["planning data","building typologies"], link:"https://www.routledge.com/Metric-Handbook-Planning-and-Design-Data/Buxton/p/book/9780367picks"},
 {title:"Materials for Design", author:"Victoria Ballard Bell", category:"Materials", year:"2nd–3rd Year", level:"Intermediate",
  desc:"A material-by-material survey of properties, applications and case studies across wood, metal, glass, concrete and composites.",
  why:"Helps you choose materials based on real performance and precedent, not just appearance.", topics:["materials","construction","case studies"], link:"https://www.papress.com/html/product.details.dna?isbn=9781616897705"},
 {title:"Interior Lighting for Designers", author:"Gary Gordon", category:"Technical", year:"3rd–4th Year", level:"Intermediate",
  desc:"Lighting theory paired with practical calculations, fixture types and application strategies for interior spaces.",
  why:"Covers both the physics and the design judgment lighting requires — most studios only touch on one.", topics:["lighting","technical","interiors"], link:"https://www.wiley.com/en-us/Interior+Lighting+for+Designers%2C+5th+Edition-p-9780470112143"},
 {title:"Interaction of Color", author:"Josef Albers", category:"Design Theory", year:"1st–2nd Year", level:"Beginner",
  desc:"The classic study of how color behaves relative to context — a foundation text for color theory, not a swatch book.",
  why:"Changes how you see color relationships rather than giving you rules to memorize.", topics:["color theory","perception"], link:"https://www.yalebooks.com/book/9780300179354/interaction-of-color/"},
 {title:"Architectural Graphic Standards", author:"The American Institute of Architects", category:"Representation", year:"3rd–4th Year", level:"Advanced",
  desc:"The comprehensive US reference for drawing conventions, details and construction documentation standards.",
  why:"The document professionals actually keep on the shelf once drawings need to be construction-ready.", topics:["drafting standards","construction documents"], link:"https://www.wiley.com/en-us/Architectural+Graphic+Standards-p-9781119585177"},
 {title:"Building Construction Illustrated", author:"Francis D.K. Ching", category:"Technical", year:"1st–3rd Year", level:"Beginner",
  desc:"Hand-drawn illustrations explaining how buildings are actually assembled, from foundations to finishes.",
  why:"The clearest entry point into construction logic before you're expected to detail your own work.", topics:["construction","assemblies","technical"], link:"https://www.wiley.com/en-us/Building+Construction+Illustrated%2C+6th+Edition-p-9781119583080"},
 {title:"A Pattern Language", author:"Christopher Alexander et al.", category:"History", year:"2nd–4th Year", level:"Intermediate",
  desc:"253 interconnected 'patterns' describing recurring problems in the built environment and their design solutions.",
  why:"A different way of thinking about design problems — as reusable patterns rather than one-off concepts.", topics:["design theory","urbanism","history"], link:"https://global.oup.com/academic/product/a-pattern-language-9780195019193"},
];

const SOFTWARE = [
 {name:"AutoCAD", category:"CAD", use:"Technical drawings: plans, sections, elevations and construction drawings.", year:"1st Year onward", difficulty:"Moderate", path:"Start with 2D drafting commands and layer management before layout/plotting.", level:"Essential", link:"https://www.autodesk.com/products/autocad/"},
 {name:"Revit", category:"BIM", use:"Building Information Modeling — coordinated 3D models with linked plans, sections and schedules.", year:"2nd Year onward", difficulty:"Steep", path:"Learn basic modeling first, then families, then documentation workflows.", level:"Essential", link:"https://www.autodesk.com/products/revit/"},
 {name:"SketchUp", category:"3D Modeling", use:"Fast conceptual 3D modeling for massing, spatial studies and early design iteration.", year:"1st Year onward", difficulty:"Easy", path:"Usually the first 3D tool students learn — approachable and quick to sketch in.", level:"Essential", link:"https://www.sketchup.com/"},
 {name:"Rhino", category:"3D Modeling", use:"Precise NURBS-based 3D modeling for complex geometry and surface work.", year:"2nd–3rd Year", difficulty:"Steep", path:"Build on general 3D literacy first; often paired with Grasshopper for parametric work.", level:"Useful", link:"https://www.rhino3d.com/"},
 {name:"3ds Max", category:"3D Modeling", use:"3D modeling with strong rendering and animation pipelines, common in visualization-heavy work.", year:"3rd Year onward", difficulty:"Steep", path:"Best picked up once you already know one modeling tool and want stronger render output.", level:"Optional", link:"https://www.autodesk.com/products/3ds-max/"},
 {name:"D5 Render", category:"Rendering", use:"Real-time rendering with a fast learning curve and strong interior lighting results.", year:"2nd Year onward", difficulty:"Easy", path:"Import a model, focus on lighting and materials before camera composition.", level:"Useful", link:"https://www.d5render.com/"},
 {name:"Enscape", category:"Rendering", use:"Real-time rendering plugin that works directly inside Revit, SketchUp and Rhino.", year:"2nd Year onward", difficulty:"Easy", path:"Great as a first renderer since it works live inside tools you already use.", level:"Useful", link:"https://enscape3d.com/"},
 {name:"Twinmotion", category:"Rendering", use:"Real-time visualization with built-in landscaping, people and weather assets.", year:"2nd Year onward", difficulty:"Easy", path:"Strong for exterior and site-context renders; pairs well with SketchUp.", level:"Optional", link:"https://www.twinmotion.com/"},
 {name:"V-Ray", category:"Rendering", use:"High-end physically based rendering used widely in professional practice.", year:"3rd Year onward", difficulty:"Steep", path:"Worth learning once you understand lighting fundamentals from a simpler renderer.", level:"Optional", link:"https://www.chaos.com/vray"},
 {name:"Photoshop", category:"Adobe", use:"Image editing, rendering post-production, and collage-based concept diagrams.", year:"1st Year onward", difficulty:"Moderate", path:"Learn layers and masking first — most render post-production relies on both.", level:"Essential", link:"https://www.adobe.com/products/photoshop.html"},
 {name:"Illustrator", category:"Adobe", use:"Vector diagrams, site plans, icons and clean presentation graphics.", year:"1st Year onward", difficulty:"Moderate", path:"Useful once you're producing diagrams that need to stay crisp at any scale.", level:"Essential", link:"https://www.adobe.com/products/illustrator.html"},
 {name:"InDesign", category:"Adobe", use:"Laying out portfolios, presentation boards and multi-page documents.", year:"2nd Year onward", difficulty:"Moderate", path:"Learn master pages and grids early — they save enormous time on portfolios.", level:"Useful", link:"https://www.adobe.com/products/indesign.html"},
 {name:"Autodesk Forma", category:"Site & Environmental Analysis", use:"Early-stage site and environmental analysis — sun, wind, and massing studies in a browser.", year:"3rd Year onward", difficulty:"Easy", path:"Useful once studio briefs start asking for environmental justification of design decisions.", level:"Optional", link:"https://www.autodesk.com/products/forma/"},
];

const WEBSITES = [
 {name:"ArchDaily", category:"Architectural References", what:"A large, constantly updated archive of built architecture projects with drawings and photography.", why:"Fast way to find precedent projects and see how professional teams document their work.", who:"All years, especially when starting concept research.", link:"https://www.archdaily.com/"},
 {name:"Dezeen", category:"Interior Design References", what:"Design journalism covering interiors, architecture and products with an editorial point of view.", why:"Good for staying current on trends and seeing interior projects presented as complete stories.", who:"All years.", link:"https://www.dezeen.com/"},
 {name:"Material Bank", category:"Material Libraries", what:"A sourcing platform for architectural and interior material samples from major manufacturers.", why:"Useful once a project needs real, specifiable material references rather than renders.", who:"3rd–4th Year, thesis and specification work.", link:"https://www.materialbank.com/"},
 {name:"Architonic", category:"Product Libraries", what:"A curated directory of architecture and design products, from lighting to furniture systems.", why:"Helps you specify real products instead of generic render assets.", who:"2nd Year onward.", link:"https://www.architonic.com/"},
 {name:"3D Warehouse", category:"3D Model Libraries", what:"SketchUp's model-sharing platform with furniture, fixtures and site elements.", why:"Speeds up massing and interior studies without modeling every object from scratch.", who:"All years using SketchUp.", link:"https://3dwarehouse.sketchup.com/"},
 {name:"Behance", category:"Inspiration", what:"A portfolio platform where designers publish full case studies of their work.", why:"Useful for both inspiration and studying how others present a project narrative.", who:"All years, especially portfolio season.", link:"https://www.behance.net/"},
 {name:"Google Scholar", category:"Research Databases", what:"A search engine for academic papers, theses and citations across disciplines.", why:"The starting point for any literature search on a research-based studio or thesis.", who:"3rd–4th Year.", link:"https://scholar.google.com/"},
 {name:"JSTOR", category:"Research Databases", what:"A digital library of academic journals, books and primary sources.", why:"Often accessible through your university library login — good for design history and theory research.", who:"3rd–4th Year, history/theory coursework.", link:"https://www.jstor.org/"},
 {name:"American Society of Interior Designers (ASID)", category:"Professional Organizations", what:"A professional association for interior designers, with standards, events and student resources.", why:"A way to see what professional practice and licensure look like beyond school.", who:"3rd–4th Year, career planning.", link:"https://www.asid.org/"},
 {name:"American Institute of Architects (AIA)", category:"Professional Organizations", what:"The primary professional body for architects in the US, including student chapters.", why:"Useful for understanding licensure paths and professional standards.", who:"3rd–4th Year, career planning.", link:"https://www.aia.org/"},
];

const COURSES = [
 {title:"Introduction to Parametric Design with Grasshopper", provider:"Independent / online", category:"Software", year:"3rd Year", desc:"A workshop-style course covering parametric logic on top of Rhino.", note:"PLACEHOLDER — TO BE REPLACED"},
 {title:"Revit for Interiors: Documentation Fast-Track", provider:"Independent / online", category:"Software", year:"2nd Year", desc:"A focused course on documenting interior projects efficiently in Revit.", note:"PLACEHOLDER — TO BE REPLACED"},
 {title:"Portfolio Design Workshop", provider:"Club-run workshop", category:"Career", year:"4th Year", desc:"A club-organized session on structuring and laying out a graduation portfolio.", note:"PLACEHOLDER — TO BE REPLACED"},
];

const COMPETITIONS_RES = [
 {name:"Bee Breeders Architecture Competitions", category:"Open Competitions", what:"A recurring series of themed international student and open architecture competitions.", why:"A reliable source of competitions sized for student teams and solo entries.", link:"https://beebreeders.com/"},
 {name:"ArchStorming", category:"Open Competitions", what:"Themed architecture competitions with published juries and results archives.", why:"Good for seeing past winning entries alongside current open briefs.", link:"https://www.archstorming.com/"},
 {name:"UNI (Undergraduate Awards) / Non Architecture", category:"Student Competitions", what:"Platforms aggregating student-focused design competitions and awards.", why:"Useful for finding briefs scaled to coursework rather than professional practice.", link:"https://www.non-architecture.com/"},
];

const TEMPLATES = [
 {title:"Studio Presentation Sheet Template", type:"Layout template", desc:"A print-ready sheet layout sized for standard studio pin-ups.", note:"PLACEHOLDER — TO BE REPLACED"},
 {title:"Portfolio Grid Starter (InDesign)", type:"Layout template", desc:"A grid-based starting point for graduation and internship portfolios.", note:"PLACEHOLDER — TO BE REPLACED"},
 {title:"Site Analysis Checklist", type:"Checklist", desc:"A checklist covering the site data most studio briefs expect before concept design.", note:"PLACEHOLDER — TO BE REPLACED"},
];

const GUIDE = {
 new: {
   title:"New Students", subtitle:"Starting Interior Design & Architecture",
   expect:["Studio is unlike lecture-based courses — expect long working hours and open-ended briefs.","Critique (\"crit\") is normal and is about the work, not you.","Progress is iterative — first ideas are meant to change."],
   need:["A reliable laptop that can run CAD/3D software.","A physical model-making kit and basic drafting tools.","A system for saving and backing up files — assume you will lose work at least once.","External storage or cloud backup for large render/model files."],
   software:["SketchUp or Rhino for early 3D modeling.","Photoshop and Illustrator for presentation.","AutoCAD, introduced once technical drawing begins."],
   culture:["Studio culture rewards showing up and iterating in front of others, not perfecting alone.","Ask upperclassmen questions — most are glad to help.","Keep a sketchbook; not everything needs to start digitally."],
   files:["Name files with project, date and version (e.g. proj_floorplan_v03).","Keep a single working folder per project with clearly labeled subfolders.","Export a flattened PDF or image at the end of every work session."],
   projects:["Break every brief into research, concept, development and documentation phases.","Set your own internal deadlines earlier than the real ones.","Keep a running list of open questions to raise at your next crit."],
   present:["Lead with the idea in one sentence before showing drawings.","Practice your pin-up talk out loud at least once beforehand.","Prioritize clarity over decoration in early-year presentations."],
   mistakes:["Starting to model in 3D before the plan actually works in 2D.","Over-investing in one direction before testing alternatives.","Leaving all production for the night before a deadline."],
   wishes:[
     {text:"I wish I'd learned keyboard shortcuts in AutoCAD in first year instead of third — it would have saved me hundreds of hours.", meta:"4th Year student — PLACEHOLDER"},
     {text:"Nobody told me it was normal to throw out a whole concept in week 3. I thought I was behind; I was actually on schedule.", meta:"3rd Year student — PLACEHOLDER"},
     {text:"Buy a proper cutting mat and a self-healing one for models before your first crit, not after you ruin a desk.", meta:"2nd Year student — PLACEHOLDER"},
   ],
 },
 y1: {
   title:"1st Year", subtitle:"Building the fundamentals",
   focus:["Design fundamentals: proportion, scale, composition.","Basic drafting conventions and line weights.","Developing a habit of iterative sketching."],
   skills:["Freehand sketching and quick massing studies.","Reading and producing basic orthographic drawings.","Model-making at small scale."],
   software:["SketchUp for massing and spatial studies.","Illustrator/Photoshop basics for diagrams.","Introductory AutoCAD toward the end of the year."],
   books:["101 Things I Learned in Architecture School","Interaction of Color","Building Construction Illustrated"],
   websites:["ArchDaily","Dezeen","3D Warehouse"],
   courses:["Portfolio Design Workshop (attend even as an observer)"],
   studio:["Say yes to every pin-up opportunity, even informal ones.","Don't skip physical models in favor of only digital work this year."],
   mistakes:["Jumping straight to 3D software before understanding 2D drafting logic.","Treating every crit comment as a required change rather than a prompt to think."],
   before_next:["You should be comfortable producing a clean plan, section and elevation by hand or in basic CAD.","You should be able to explain your concept in one sentence before showing drawings."],
 },
 y2: {
   title:"2nd Year", subtitle:"Developing technical and spatial fluency",
   focus:["Program and spatial planning at a building scale.","Introducing structure and construction logic into design decisions.","More independent research before concept development."],
   skills:["Coordinating plan, section and elevation as one consistent set.","Basic BIM modeling (Revit) alongside SketchUp.","Diagramming concepts clearly for crits."],
   software:["Revit fundamentals.","Rhino, if your program introduces complex geometry.","Enscape or D5 Render for quick real-time visualization."],
   books:["Architecture: Form, Space & Order","Architects' Data","Materials for Design"],
   websites:["Architonic","Behance","ArchDaily"],
   courses:["Revit for Interiors: Documentation Fast-Track"],
   studio:["Start building a personal library of precedent projects.","Push past your first idea — generate at least two real alternatives per brief."],
   mistakes:["Letting a renderer's default lighting stand in for actual lighting design decisions.","Under-documenting technical drawings in favor of pretty renders."],
   before_next:["You should be able to take a project from concept through a coordinated technical set without help.","You should have a working, if basic, BIM modeling habit."],
 },
 y3: {
   title:"3rd Year", subtitle:"Integrating concept with technical decisions",
   focus:["Stronger design development and spatial planning.","Technical development alongside visualization and presentation.","Material selection grounded in performance, not just appearance.","Deeper independent research integrated into concept."],
   skills:["Detailing key moments of a project, not just overall form.","Producing presentation-quality renders with intentional lighting.","Writing and structuring a design rationale."],
   software:["V-Ray or D5 Render for higher-quality visualization.","Autodesk Forma for early environmental analysis, where relevant.","InDesign for structured presentation boards."],
   books:["Time-Saver Standards for Interior Design","Interior Lighting for Designers","A Pattern Language"],
   websites:["Material Bank","Google Scholar","JSTOR"],
   courses:["Introduction to Parametric Design with Grasshopper (optional, program-dependent)"],
   studio:["Start treating your studio work as portfolio material, not just coursework.","Seek out a faculty member whose focus matches your interests for informal feedback."],
   mistakes:["Choosing materials or systems primarily because they render well.","Leaving research shallow while over-polishing final visuals."],
   before_next:["You should be able to defend material and technical choices with reasoning, not preference alone.","You should have early drafts of portfolio-ready project documentation."],
 },
 y4: {
   title:"4th Year", subtitle:"Graduation-level independence",
   focus:["Thesis or capstone-level independent research and design.","Full integration of concept, technical resolution and presentation.","Preparing for portfolio review, internships or graduate study."],
   skills:["Managing a long-term, self-directed project timeline.","Producing a complete, professional-quality construction or specification set for key areas.","Presenting and defending work to a panel confidently."],
   software:["Whichever rendering pipeline you're most fluent in — depth over breadth this year.","Advanced InDesign layout for a full portfolio or thesis document."],
   books:["Architectural Graphic Standards","Metric Handbook: Planning and Design Data"],
   websites:["ASID","AIA","JSTOR"],
   courses:["Portfolio Design Workshop"],
   studio:["Build in review checkpoints with faculty well before the final deadline.","Start your portfolio in parallel with your thesis, not after it."],
   mistakes:["Underestimating how long final production and printing take.","Waiting until the final month to start portfolio layout."],
   before_next:["You should leave with a portfolio, not just a finished project.","You should be able to speak about your work to someone outside the program."],
 },
};

const WORK = [
  {
    title: "Horizon Flow",
    student: "Juri Alrasheed · Limar Alasmari · Ghadeer Shehab · Dareen Saif",
    course: "Competition Entry",
    semester: "—",
    category: "Competitions",
    image: "WhatsApp Image 2026-09-16 at 3.31.32 PM.jpeg",
    concept: "Inspired by ZEECO’s vapor recovery systems, the sculpture explores continuous flow and rotational movement, combined with the symbolism of flame as a representation of energy and transformation. The form also draws from Al-Ahsa’s traditional Al-Baydhana ornament, translating its rhythm and repetition into intertwined curved bands that balance industrial character with cultural identity.",
    desc: "A proposal developed for the “Art That Embodies the Unseen” competition, exploring how industrial processes, energy, movement, and cultural identity can be expressed through an urban sculptural form."
  }
];

const RESEARCH = [
 {title:"Daylight Autonomy in Small-Footprint Interiors", author:"PLACEHOLDER — TO BE REPLACED", year:"2024", category:"Lighting", topic:"Daylighting strategy",
  abstract:"A comparative study of daylighting strategies in compact residential interiors and their effect on perceived spaciousness.",
  why:"A useful reference point when a studio brief asks you to justify lighting or window strategy decisions.", relevantYear:"3rd–4th Year"},
 {title:"Circular Material Sourcing in Interior Renovation", author:"PLACEHOLDER — TO BE REPLACED", year:"2023", category:"Sustainability", topic:"Material reuse",
  abstract:"An overview of reclaimed and circular material sourcing practices applied to interior renovation projects.",
  why:"Good grounding if your studio brief involves adaptive reuse or sustainability criteria.", relevantYear:"2nd–4th Year"},
 {title:"Spatial Behavior in Open-Plan Learning Environments", author:"PLACEHOLDER — TO BE REPLACED", year:"2022", category:"Human Behavior & Space", topic:"Occupant behavior",
  abstract:"A behavioral study observing how students use open-plan educational spaces differently from enclosed classrooms.",
  why:"Relevant precedent if you're designing any kind of learning or shared-work environment.", relevantYear:"2nd–3rd Year"},
 {title:"Thermal Mass and Comfort in Renovated Masonry Buildings", author:"PLACEHOLDER — TO BE REPLACED", year:"2023", category:"Building Technology", topic:"Thermal performance",
  abstract:"An analysis of how existing masonry mass affects thermal comfort strategies in adaptive reuse projects.",
  why:"Useful technical grounding for adaptive reuse studios dealing with existing structures.", relevantYear:"3rd–4th Year"},
];

const OPPORTUNITIES = [
 {name:"Bee Breeders: Small Spaces Competition — PLACEHOLDER", org:"Bee Breeders", type:"Competitions", deadline:"TBD", location:"Online / International", status:"UPCOMING",
  desc:"An open international competition brief focused on compact, adaptable living spaces.", eligibility:"Open to students and professionals; team entries allowed.", link:"https://beebreeders.com/"},
 {name:"Summer Materials Workshop — PLACEHOLDER", org:"Interior Design Club", type:"Workshops", deadline:"TBD", location:"On campus", status:"OPEN",
  desc:"A hands-on workshop covering timber, textile and finish sampling led by senior students.", eligibility:"Open to all years; limited seats.", link:"#"},
 {name:"Design Studio Summer Internship — PLACEHOLDER", org:"Local firm partner (to be confirmed)", type:"Internships", deadline:"TBD", location:"Local / Hybrid", status:"UPCOMING",
  desc:"A summer internship opportunity for students who have completed at least their second year.", eligibility:"2nd Year and above.", link:"#"},
 {name:"Spring Portfolio Review Volunteers — PLACEHOLDER", org:"Interior Design Club", type:"Volunteering", deadline:"TBD", location:"On campus", status:"CLOSED",
  desc:"Volunteers helped set up and run the spring portfolio review event for graduating students.", eligibility:"Open to all years.", link:"#"},
];

const FAQ = [
 {q:"What software should I learn first?", a:"Most programs start with SketchUp for 3D thinking, plus Photoshop and Illustrator for presentation. AutoCAD and Revit typically follow once technical drawing is introduced. Check the Software & Tools section for a full breakdown by year.", cat:"Software"},
 {q:"Which books are useful for design students?", a:"It depends on the year and what you're working on — a beginner-friendly starting point is 101 Things I Learned in Architecture School, while technical references like Architects' Data become more useful from 2nd year onward. See Books & References for year-specific picks.", cat:"Resources"},
 {q:"Where can I find architectural references?", a:"ArchDaily and Dezeen are strong general starting points; for materials and products specifically, try Material Bank and Architonic. All are listed with descriptions in Websites & Platforms.", cat:"Resources"},
 {q:"How can I improve my design presentation?", a:"Lead with your idea in one sentence, keep drawings and diagrams consistent in style, and rehearse your pin-up talk out loud beforehand. The Student Guide has year-specific presentation advice.", cat:"Studio"},
 {q:"How can I build a strong portfolio?", a:"Start earlier than you think — ideally documenting projects as you finish them, not all at once in 4th year. The club runs a Portfolio Design Workshop; see Courses & Workshops.", cat:"General"},
 {q:"Where can I find competitions?", a:"Check Resources → Competitions & Opportunities for curated competition platforms, and Opportunities for live, dated postings with deadlines.", cat:"Opportunities"},
 {q:"What should I focus on during studio?", a:"Iteration matters more than perfecting a single idea early on. Push through multiple concept directions before committing, and treat crit feedback as a prompt to think, not a required edit.", cat:"Studio"},
 {q:"How can I start learning Revit?", a:"Start with basic modeling and navigation before touching families or documentation. The Software & Tools page links to Revit's official learning resources and notes a recommended starting year.", cat:"Software"},
 {q:"What is BIM?", a:"Building Information Modeling — a workflow where a 3D model carries coordinated data (dimensions, materials, schedules) across plans, sections and elevations simultaneously, rather than drawing each separately. Revit is the most common BIM tool students use.", cat:"Software"},
 {q:"What is Autodesk Forma?", a:"A browser-based tool for early-stage site and environmental analysis — sun studies, wind, and massing options — useful when a studio brief asks you to justify design decisions environmentally.", cat:"Software"},
 {q:"How can I find academic research?", a:"Google Scholar is a good general starting point; JSTOR (often free through your university library login) covers design history and theory in more depth. See Websites & Platforms.", cat:"Resources"},
 {q:"How can I submit my work to the Student Hub?", a:"Use the 'Recommend a resource' or relevant submission form linked in the footer — student work submissions are reviewed by the club and only published with your permission.", cat:"General"},
];
