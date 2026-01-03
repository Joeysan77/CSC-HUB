import {List} from './Utilities'

export const courses = [
  // ================= MTH 101 =================
  {
    courseCode: "MTH 101",
    title1: "Elementary Set Theory",
    course: 'Mathematics',
    desc1: "Basic concepts of sets, operations, and Venn diagram representation.",
    content: (
      <div>
        <List num="1" item="Elementary Set Theory" desc="Definition of sets, types of sets, subsets, union and intersection, complements, universal sets, and Venn diagrams." />
        <List num="2" item="Indices, Surds and Logarithms" desc="Laws of indices, simplification of surds, logarithmic laws, change of base, and applications." />
        <List num="3" item="Number Systems" desc="Real numbers, integers, rational and irrational numbers, and their properties." />
        <List num="4" item="Mathematical Induction" desc="Principle of mathematical induction, steps involved, and applications." />
        <List num="5" item="Sequences and Series" desc="Arithmetic and geometric sequences and series with applications." />
        <List num="6" item="Polynomials and Quadratics" desc="Polynomial functions, factorization, quadratic equations, and graphs." />
        <List num="7" item="Binomial Theorem" desc="Binomial expansion, coefficients, properties, and applications." />
        <List num="8" item="Permutations and Combinations" desc="Counting principles, permutations, combinations, and applications." />
        <List num="9" item="Complex Numbers" desc="Algebra of complex numbers, Argand diagram, modulus, and argument." />
        <List num="10" item="Trigonometry" desc="Trigonometric functions, identities, and circular measure." />
      </div>
    )
  },

  // ================= PHY 101 =================
  {
    courseCode: "PHY 101",
    title1: "Units and Dimensions",
    course:  'Physics',
    desc1: "Fundamental units, derived units, and dimensional analysis.",
    content: (
      <div>
        <List num="1" item="Units and Dimensions" desc="Fundamental and derived units, dimensional analysis, and conversions." />
        <List num="2" item="Vectors" desc="Scalar and vector quantities, vector addition, and resolution." />
        <List num="3" item="Kinematics" desc="Motion in one and two dimensions and equations of motion." />
        <List num="4" item="Dynamics and Friction" desc="Newton’s laws of motion and types of friction." />
        <List num="5" item="Projectiles" desc="Projectile motion, range, time of flight, and maximum height." />
        <List num="6" item="Equilibrium" desc="Conditions for equilibrium of forces and rigid bodies." />
        <List num="7" item="Work, Energy and Power" desc="Work done, energy forms, conservation, and power." />
        <List num="8" item="Momentum" desc="Linear momentum, impulse, and collisions." />
        <List num="9" item="Circular Motion" desc="Angular velocity, centripetal force, and applications." />
        <List num="10" item="Simple Harmonic Motion" desc="Oscillatory motion, examples, and equations of SHM." />
        <List num="11" item="Centre of Mass" desc="Centre of mass of systems and applications." />
        <List num="12" item="Gravitation" desc="Newton’s law of gravitation and planetary motion." />
      </div>
    )
  },

  // ================= CHM 101 =================
  {
    courseCode: "CHM 101",
    title1: "SI Units and Conversions",
    course: 'Chemistry',
    desc1: "Measurement systems, prefixes, and chemical unit conversions.",
    content: (
      <div>
        <List num="1" item="SI Units and Conversions" desc="Measurement systems, SI units, prefixes, and conversions." />
        <List num="2" item="Chemical Reactions" desc="Types of chemical reactions and balancing equations." />
        <List num="3" item="Empirical and Molecular Formulae" desc="Determination and applications of chemical formulae." />
        <List num="4" item="Mole Concept" desc="Moles, Avogadro’s number, and calculations." />
        <List num="5" item="Stoichiometry" desc="Quantitative relationships in chemical reactions." />
        <List num="6" item="Concentration Terms" desc="Molarity, molality, normality, and mole fraction." />
        <List num="7" item="Atomic Structure" desc="Atomic models, spectral lines, and electronic structure." />
        <List num="8" item="Electronic Configuration" desc="Quantum numbers and electron arrangement." />
        <List num="9" item="Periodic Table" desc="Periodic trends and chemical periodicity." />
        <List num="10" item="Chemical Bonding" desc="Ionic, covalent, and metallic bonding." />
        <List num="11" item="Chemical Equilibrium" desc="Reversible reactions and equilibrium concepts." />
        <List num="12" item="Acids, Bases and Salts" desc="pH, pOH, buffers, and salt hydrolysis." />
        <List num="13" item="Gas Laws" desc="Boyle’s, Charles’, and ideal gas laws." />
        <List num="14" item="Electrochemistry" desc="Redox reactions, electrolysis, and cells." />
        <List num="15" item="Thermodynamics" desc="Energy changes in chemical processes." />
      </div>
    )
  },

  // ================= GST 103 =================
  {
    courseCode: "GST 103",
    title1: "Introduction to Philosophy",
    course: 'Use Of English',
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
    course: 'French',
    desc1: "Basic French verb tenses and usage.",
    content: (
      <div>
        <List num="1" item="French Verb Tenses" desc="Common verb tenses in French language." />
        <List num="2" item="Translation" desc="Basic French to English translation." />
        <List num="3" item="Pronouns" desc="Usage of French pronouns." />
        <List num="4" item="Articles" desc="Definite and indefinite articles in French." />
      </div>
    )
  },

  // ================= GST 111 =================
  {
    courseCode: "GST 111",
    title1: "Language and Communication",
    course: 'Use of English',
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
  }
];