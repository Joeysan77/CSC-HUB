import { List } from './Utilities';

export const courses = [
  // ================= MTH 101 =================
  {
    courseCode: "MTH 101",
    title1: "Elementary Mathematics",
    course: "Mathematics",
    desc1: "Basic concepts of set theory, real numbers, sequences, series, quadratics, trigonometry, and complex numbers.",
    file: '/outlines/MTH 101.pdf',
    size:'23',
    content: (
      <div>
        <List num="1" item="Elementary Of Set Theory" desc="Definition of sets, types of sets, subsets, union and intersection, complements, universal sets, and Venn diagrams." />
        <List num="2" item="Real Numbers, Integers, Rational and Irrational Numbers" desc="Properties, operations, and classifications of real numbers, integers, rational and irrational numbers." />
        <List num="3" item="Principle Of Mathematical Induction" desc="Steps involved in applying mathematical induction to prove statements." />
        <List num="4" item="Real Sequence and Series" desc="Arithmetic and geometric sequences and series, formulas, and applications." />
        <List num="5" item="Theory of Quadratic Equation" desc="Quadratic equations, factorization, roots, and graphing quadratics." />
        <List num="6" item="Binomial Theorem" desc="Binomial expansion, coefficients, properties, and applications." />
        <List num="7" item="Complex Numbers" desc="Algebra of complex numbers, Argand diagram, modulus, and argument." />
        <List num="8" item="Circular Measures, Trig Functions of Angles of any Magnitude, Addition and Factor Formulae" desc="Trigonometric functions, identities, circular measure, addition and factor formulae." />
      </div>
    )
  },

  // ================= PHY 101 =================
  {
    courseCode: "PHY 101",
    title1: "Physics Fundamentals",
    course: "Physics",
    desc1: "Units, vectors, kinematics, dynamics, projectiles, equilibrium, energy, motion, circular motion, SHM, center of mass, gravitation, coordinate geometry, and vector calculus.",
    file: '/outlines/PHY 101.pdf',
    size:'35',
    content: (
      <div>
        <List num="1" item="Units and Dimensions" desc="Fundamental and derived units, dimensional analysis, and conversions." />
        <List num="2" item="Vectors" desc="Scalar and vector quantities, vector addition, resolution, linear dependence, vector products, and applications." />
        <List num="3" item="Kinematics" desc="Motion in one and two dimensions, velocity, acceleration, equations of motion, and projectile motion." />
        <List num="4" item="Dynamics and Friction" desc="Newton’s laws of motion, forces, friction, and resistive forces." />
        <List num="5" item="Projectiles and Vertical Motion" desc="Projectile motion under gravity, vertical motion, and motion with resistance." />
        <List num="6" item="Equilibrium" desc="Conditions for equilibrium of forces and rigid bodies." />
        <List num="7" item="Work, Energy and Power" desc="Work done, forms of energy, conservation of energy, and power calculations." />
        <List num="8" item="Momentum" desc="Linear momentum, impulse, collisions, and conservation of momentum." />
        <List num="9" item="Circular Motion" desc="Angular velocity, centripetal force, and circular motion applications." />
        <List num="10" item="Simple Harmonic Motion" desc="Oscillatory motion, examples, and equations of SHM." />
        <List num="11" item="Centre of Mass" desc="Centre of mass of systems and its applications." />
        <List num="12" item="Gravitational Forces and Planetary Motion" desc="Newton’s law of gravitation, planetary motion, and orbital dynamics." />
        <List num="13" item="Coordinate Geometry & Vector Representation" desc="2D coordinate geometry, lines, circles, parabolas, ellipses, hyperbolas, tangent & normal; vector geometric representation in 1-3D; vector addition, multiplication, and linear dependence." />
        <List num="14" item="Differentiation & Integration of Vectors" desc="Differentiation and integration of vectors with respect to scalar variation." />
      </div>
    )
  },

  // ================= CHM 101 =================
  {
    courseCode: "CHM 101",
    title1: "Chemistry Fundamentals",
    course: "Chemistry",
    desc1: "SI units, chemical reactions, mole concept, stoichiometry, atomic structure, periodic table, bonding, equilibria, gases, and thermodynamics.",
    file: '/outlines/CHM 101.pdf',
    size:'26',
    content: (
      <div>
        <List num="1" item="S.I Unit and Conversion" desc="Measurement systems, SI units, prefixes, and conversions." />
        <List num="2" item="Chemical Reaction and Balancing Equations" desc="Types of chemical reactions and balancing equations." />
        <List num="3" item="Empirical and Molecular Formula" desc="Determination and applications of chemical formulae." />
        <List num="4" item="Mole Concept and Avogadro’s Number" desc="Calculations involving moles, Avogadro’s number, and molar masses." />
        <List num="5" item="Stoichiometry" desc="Quantitative relationships in chemical reactions." />
        <List num="6" item="Mole Fraction and Percentage Composition" desc="Calculations of mole fraction and percentage composition." />
        <List num="7" item="Molarity, Molality and Normality" desc="Concentration terms and conversions." />
        <List num="8" item="Atomic Structures and Spectral Lines" desc="Atomic models, spectral lines, electronic configuration, and quantum numbers." />
        <List num="9" item="Isoelectronicity" desc="Concept of isoelectronic species." />
        <List num="10" item="Periodic Table" desc="Periodic trends and chemical periodicity." />
        <List num="11" item="Chemical Bonding" desc="Ionic, covalent, and metallic bonding." />
        <List num="12" item="Chemical Equilibrium" desc="Reversible reactions, equilibrium constants, and Le Chatelier’s principle." />
        <List num="13" item="Solubility and Solubility Product" desc="Solubility concepts and calculations of solubility product (Ksp)." />
        <List num="14" item="Acid, Base and Salt" desc="pH, pOH, buffers, and salt hydrolysis." />
        <List num="15" item="Gas Laws" desc="Boyle’s law, Charles’ law, ideal gas law, and applications." />
        <List num="16" item="Oxidation Number" desc="Assigning oxidation numbers in chemical species." />
        <List num="17" item="Redox Reactions" desc="Oxidation-reduction reactions and balancing redox equations." />
        <List num="18" item="Electrochemistry/Electrolysis" desc="Redox reactions in cells, electrolysis, and applications." />
        <List num="19" item="Chemical Kinetics" desc="Rate of reactions, factors affecting rate, and order of reaction." />
        <List num="20" item="Nuclear Chemistry (Radioactivity)" desc="Radioactive decay, half-life, and nuclear reactions." />
        <List num="21" item="Thermodynamics" desc="Energy changes in chemical reactions, enthalpy, and spontaneity." />
        <List num="22" item="Crystalline Solids" desc="Types, structures, and properties of crystalline solids." />
      </div>
    )
  },

  // ================= GST 103 =================
  {
    courseCode: "GST 103",
    title1: "Introduction to Philosophy",
    course: "Use of English",
    desc1: "Meaning, scope, and branches of philosophy.",
    content: (
      <div>
        <List num="1" item="Introduction to Philosophy" desc="Definition, nature, scope, and branches of philosophy." />
        <List num="2" item="Permanence and Change" desc="Philosophical views on change and reality." />
        <List num="3" item="Humanism" desc="Human-centered philosophical perspectives." />
        <List num="4" item="Ethical Theories" desc="Classical ethical theories and moral principles." />
        <List num="5" item="History of Philosophy" desc="Major periods in the history of philosophy." />
        <List num="6" item="Philosophical Problems" desc="Key philosophical questions and debates." />
        <List num="7" item="Logic" desc="Introduction to logical reasoning." />
      </div>
    )
  },

  // ================= FRN 101 =================
  {
    courseCode: "FRN 101",
    title1: "French Verb Tenses",
    course: "French",
    desc1: "Basic French verb tenses, pronouns, articles, and translation.",
    content: (
      <div>
        <List num="1" item="French Verb Tenses" desc="Common verb tenses in French language." />
        <List num="2" item="Translation" desc="Basic French to English translation." />
        <List num="3" item="Pronouns" desc="Usage of French pronouns." />
        <List num="4" item="Articles" desc="Definite and indefinite articles." />
      </div>
    )
  },

  // ================= GST 111 =================
  {
    courseCode: "GST 111",
    title1: "Language and Communication",
    course: "Use of English",
    desc1: "Language functions and effective communication processes.",
    content: (
      <div>
        <List num="1" item="Language as Communication" desc="Meaning, functions, and communication process." />
        <List num="2" item="Sound Patterns" desc="Speech sounds, stress, rhythm, and intonation." />
        <List num="3" item="Word Formation" desc="Derivation, compounding, and other processes." />
        <List num="4" item="Sentence Structure" desc="Types, structures, and functions of sentences." />
        <List num="5" item="Grammar and Usage" desc="Tenses, concord, and correct sentence construction." />
        <List num="6" item="Reading Skills" desc="Skimming, scanning, and comprehension techniques." />
        <List num="7" item="Writing Skills" desc="Essay, letter, summary, and report writing." />
        <List num="8" item="Mechanics of Writing" desc="Punctuation, spelling, and paragraphing." />
        <List num="9" item="ICT in Language Learning" desc="Role of technology in language learning." />
        <List num="10" item="Public Speaking" desc="Speech planning, delivery, and audience engagement." />
      </div>
    )
  },
  
  {
        courseCode: 'COS 101',
        file: '/outlines/COS 101.pdf',
        size: '6',
        course: 'Computer Science'
    },
    
    {
        courseCode: 'IGB 101',
        file: '/outlines/IGB 101.pdf',
        size: '35', 
        course: 'Igbo'
    },
    
    {
        courseCode: 'STA 111',
        file: '/outlines/STA 111.pdf',
        size: '16',
        course:'Statistics'
    }
];
