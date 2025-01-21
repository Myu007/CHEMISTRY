const questions = [
  {
    question: 'What does Chemical Thermodynamics study?',
    answers: [
      {text: 'The rate of chemical reactions', correct: false},
      {text: 'Chemical processes that cause electrons to move', correct: false},
      {text: 'Energy changes during chemical transformations.', correct: false},
      {text: 'Energy changes during physical processes.', correct: false},
      {text: 'General laws of mutual energy conversions from one form to another', correct: true},
    ],
  },
  {
    question: 'What process is called isothermal?',
    answers: [
      {text: 'The process taking place at a constant temperature', correct: true},
      {text: 'The process taking place at a constant pressure', correct: false},
      {text: 'The process taking place at constant heat capacity', correct: false},
      {text: 'The process takes place at a changing temperature', correct: false},
      {text: 'The process taking place at a constant volume', correct: false},
    ],
  },
  {
    question: 'Who formulated the Law of Mass Action ?',
    answers: [
      {text: 'Bodenstein', correct: false},
      {text: 'Guldberg and Waage', correct: true},
      {text: 'Berthelot', correct: false},
      {text: 'Graham', correct: false},
      {text: 'Hess', correct: false},
    ],
  },
  {
    question: 'How can you name a system consisting of three different phases?',
    answers: [
      {text: 'Heterogeneous system', correct: true},
      {text: 'Homogeneous system', correct: false},
      {text: 'Open system', correct: false},
      {text: 'Closed system', correct: false},
      {text: 'Isolated system', correct: false},
    ],
  },
  {
    question: 'How do we know if a reaction is spontaneous?',
    answers: [
      {text: 'The sign of ΔG∘', correct: true},
      {text: 'The first law of thermodynamics', correct: false},
      {text: 'The second law of thermodynamics', correct: false},
      {text: 'The sign of ΔH', correct: false},
      {text: 'The value of k (the rate constant) tells us', correct: false},
    ],
  },
  {
    question: 'Which of the following techniques will not increase the rate of a reaction?',
    answers: [
      {text: 'Heating the reactants in order to reach the activation energy', correct: false},
      {text: 'Introducing a catalyst to lower the activation energy of the reaction', correct: false},
      {text: 'Reduce the amount of product', correct: true},
      {text: 'Increasing the amount of reactants', correct: false},
      {text: 'Increasing the surface area between reactants', correct: false},
    ],
  },
  {
    question: 'Which of the following true for a spontaneous endothermic process?',
    answers: [
      {text: '∆G>0', correct: false},
      {text: '∆H<0', correct: false},
      {text: '∆G=0', correct: false},
      {text: '∆S<0', correct: false},
      {text: '∆G<0', correct: true},
    ],
  },
  {
    question: 'Which of the following reactions are monomolecular?',
    answers: [
      {text: 'CH4+Cl2→CH3Cl+HCl', correct: false},
      {text: 'NH4Cl→NH3+HCl', correct: true},
      {text: '2NO+O2→2NO2', correct: false},
      {text: '2NO+Cl2→2NOCl', correct: false},
      {text: 'NH3+HCl→NH4Cl', correct: false},
    ],
  },
  {
    question: 'Calculate the standard enthalpy of reaction for the combustion of methane: CH₄(g) + 2O₂(g) → CO₂(g)+2H₂O(g), if ΔHf°(CH₄(g)) = −75 kJ/mol; ΔHf°(CO₂ (g)) = −394 kJ/mol;ΔHf°(H₂O(g)) = −284 kJ/mol; ΔHf°(O₂ (g)) = 0 kJ/mol',
    answers: [
      {text: 'ΔHf°rxn = - 887 kJ/mol', correct: true},
      {text: 'ΔHf°rxn = 1037 kJ/mol', correct: false},
      {text: 'ΔHf°rxn = - 603 kJ/mol', correct: false},
      {text: 'ΔHf°rxn = 603 kJ/mol', correct: false},
      {text: 'ΔHf°rxn = 887 kJ/mol', correct: false},
    ],
  },
  {
    question: 'What is the mass fraction?',
    answers: [
      {text: 'the ratio of the mass of the solute in the mass solution:', correct: true},
      {text: 'the mass of substance in 1 liter of solution.', correct: false},
      {text: 'the mass of solute contained in 1ml of solvent', correct: false},
      {text: 'the equivalent amount of a substance contained in 1 liter of solution.', correct: false},
      {text: 'the number of moles solute contained in 1 kg of solvent.', correct: false},
    ],
  },
  {
    question: 'What is the molar concentration?',
    answers: [
      {text: 'the mass of solute contained in 1ml of solvent', correct: false},
      {text: 'the mass of substance in 1 liter of solution', correct: true},
      {text: 'the ratio of the mass of the solute in the mass solution', correct: false},
      {text: 'the equivalent amount of a substance contained in 1 liter of solution', correct: false},
      {text: 'the mass of solute contained in 1 kg of solvent', correct: false},
    ],
  },
  {
    question: 'What is the pH solution of the salt formed by a weak acid and weak base?',
    answers: [
      {text: 'pH > 7', correct: false},
      {text: 'pH = 7', correct: false},
      {text: 'pH<7', correct: false},
      {text: 'pH ~7', correct: true},
      {text: 'pH ≤ 7', correct: false},
    ],
  },
  {
    question: 'Which of the following factors does not affect the solubility of solids in liquids?',
    answers: [
      {text: 'Stirring', correct: true},
      {text: 'The nature of the solute', correct: false},
      {text: 'Temperature', correct: false},
      {text: 'Liquid density', correct: false},
      {text: 'The nature of the solvent', correct: false},
    ],
  },
  {
    question: 'What is the name of a solution having an osmotic pressure higher than that of blood plasma?',
    answers: [
      {text: 'Hypotonic', correct: false},
      {text: 'Hypertonic', correct: true},
      {text: 'Saturated', correct: false},
      {text: 'Isoosmotic', correct: false},
      {text: 'Isotonic', correct: false},
    ],
  },
  {
    question: 'Which of the following is a buffer solution?',
    answers: [
      {text: 'NH4OH + NH4Cl', correct: true},
      {text: 'NaOH + CH3COONa', correct: false},
      {text: 'K2SO4 + H2SO4', correct: false},
      {text: 'CH3COONa', correct: false},
      {text: 'NaOH + Na2SO4', correct: false},
    ],
  },
  {
    question: 'Which of the following is an unknown solution if an addition of a methyleorange indicator into an unknown solution changes its color into red?',
    answers: [
      {text: 'HCl', correct: true},
      {text: 'NaCl', correct: false},
      {text: 'NaHCO₃', correct: false},
      {text: 'NaOH', correct: false},
      {text: 'NH₃', correct: false},
    ],
  },
  {
    question: 'Determine the mass of 0.16 mol H2SO4',
    answers: [
      {text: '13.68 g', correct: false},
      {text: '17.68 g', correct: false},
      {text: '15.68 g', correct: true},
      {text: '19.68 g', correct: false},
      {text: '11.68 g', correct: false},
    ],
  },
  {
    question: 'Which of the following has the lowest boiling point?',
    answers: [
      {text: 'HBr', correct: false},
      {text: 'HF', correct: false},
      {text: 'H2O', correct: false},
      {text: 'HI', correct: false},
      {text: 'HCl', correct: true},
    ],
  },
  {
    question: 'Find equivalent mass of sulphuric acid',
    answers: [
      {text: '32', correct: false},
      {text: '2', correct: false},
      {text: '18', correct: false},
      {text: '49', correct: true},
      {text: '98', correct: false},
    ],
  },
  {
    question: 'Calculate the mass fraction of sodium in the sodium carbonate Na2CO3.',
    answers: [
      {text: '33%', correct: false},
      {text: '23%', correct: false},
      {text: '53%', correct: false},
      {text: '43%', correct: true},
      {text: '63%', correct: false},
    ],
  },
  {
    question: 'In which red-ox reaction different atoms of same substance change oxidation numbers?',
    answers: [
      {text: 'double exchange', correct: false},
      {text: 'counter disproportion', correct: false},
      {text: 'intramolecular', correct: true},
      {text: 'intermolecular', correct: false},
      {text: 'disproportion', correct: false},
    ],
  },
  {
    question: 'What is the name of the electrode from which the electrons enter the solution, as well as the chemical change that occurs on this electrode?',
    answers: [
      {text: 'anode, oxidation', correct: false},
      {text: 'can\'t say for sure.', correct: false},
      {text: 'cathode, reduction', correct: true},
      {text: 'cathode, oxidation', correct: false},
      {text: 'anode, reduction', correct: false},
    ],
  },
  {
    question: 'What does the double vertical line '||' mean in the standard designation of the voltaic cell?',
    answers: [
      {text: 'a wire (metal) connection', correct: false},
      {text: 'a standard hydrogen electrode', correct: false},
      {text: 'gas electrode', correct: false},
      {text: 'a salt bridge', correct: true},
      {text: 'a phase boundary', correct: false},
    ],
  },
  {
    question: 'What is the name of the element lossing of electrons in the redox reaction?',
    answers: [
      {text: 'Reductant', correct: false},
      {text: 'Reactant', correct: true},
      {text: 'Product', correct: false},
      {text: 'Oxidant', correct: false},
      {text: 'Donor', correct: false},
    ],
  },
  {
    question: 'When one end of a metal plate is heated, why does the other end heat up too?',
    answers: [
      {text: 'due to a change in the density of the metal', correct: false},
      {text: 'energised electrons moving to the other end', correct: true},
      {text: 'due to the mobility of atoms in the metal', correct: false},
      {text: 'due to the resistance of the metal', correct: false},
      {text: 'due to a minor perturbation in the energy of the atoms.', correct: false},
    ],
  },
  {
    question: 'Oxygen has a +2 oxidation state in',
    answers: [
      {text: 'H2O', correct: false},
      {text: 'SO2', correct: false},
      {text: 'F2O', correct: true},
      {text: 'Na2O', correct: false},
      {text: 'H2O2', correct: false},
    ],
  },
  {
    question: 'Which of the following is the strongest reducing agent?',
    answers: [
      {text: 'Na', correct: false},
      {text: 'Zn', correct: false},
      {text: 'Mg', correct: false},
      {text: 'Ca', correct: false},
      {text: 'Li', correct: true},
    ],
  },
  {
    question: 'When the following equation is balanced using the smallest whole number coefficients, what is the coefficient of H2O? NH3 + O2 → NO + H2O',
    answers: [
      {text: '6', correct: true},
      {text: '2', correct: false},
      {text: '3', correct: false},
      {text: '4', correct: false},
      {text: '5', correct: false},
    ],
  },
  {
    question: 'What is the composition consist of a coordination compound?',
    answers: [
      {text: 'a metal ion and counterions', correct: false},
      {text: 'a metal ion and complex ion', correct: false},
      {text: 'a complex ion and metal', correct: false},
      {text: 'a complex ion and counterions', correct: false},
      {text: 'a metal ion and ligands', correct: true},
    ],
  },
  {
    question: 'How many percent microelements content in the organism?',
    answers: [
      {text: '10-7– 10-9 %', correct: false},
      {text: '10-5– 10-7 %', correct: false},
      {text: '10-3– 10-5 %', correct: true},
      {text: '10-1– 10-3 %', correct: false},
      {text: '10-9– 10-11 %', correct: false},
    ],
  },
  {
    question: 'Which of thefollowing biogenic element is microelement?',
    answers: [
      {text: 'Zn', correct: true},
      {text: 'C', correct: false},
      {text: 'S', correct: false},
      {text: 'O', correct: false},
      {text: 'N', correct: false},
    ],
  },
  {
    question: 'Which among the following is a polydentate ligand?',
    answers: [
      {text: 'acetate', correct: false},
      {text: 'nitro', correct: false},
      {text: 'oxalate', correct: true},
      {text: 'aqua', correct: false},
      {text: 'carbonyl', correct: false},
    ],
  },
  {
    question: 'Which is an example a ligand «en»?',
    answers: [
      {text: 'bidentate ligand', correct: true},
      {text: 'pentadentate ligand', correct: false},
      {text: 'hexadentate ligand', correct: false},
      {text: 'monodentate ligand', correct: false},
      {text: 'tridentate ligand', correct: false},
    ],
  },
  {
    question: 'What is the coordination number of the following complex? [Cr(NH3)4Cl2]Cl',
    answers: [
      {text: '8', correct: false},
      {text: '2', correct: false},
      {text: '4', correct: false},
      {text: '6', correct: true},
      {text: '10', correct: false},
    ],
  },
  {
    question: 'Which of the following are bidentate ligands? (1) oxalate (2) ammonia (3) chloride (4) hydroxide (5) nitrite (6) en',
    answers: [
      {text: '1, 4', correct: false},
      {text: '1, 5', correct: false},
      {text: '1, 2', correct: false},
      {text: '1, 6', correct: true},
      {text: '1, 3', correct: false},
    ],
  },
  {
    question: 'A complex ion contains a Cr3+ bound to four H2O molecules and two Cl– ions. Write its formula.',
    answers: [
      {text: '[Cr(H2O)4]Cl', correct: false},
      {text: '[ (H2O) Cr 4Cl2]', correct: false},
      {text: '[Cl(H2O)4Cr2]', correct: false},
      {text: '[Cr(H2O)4Cl2]', correct: true},
      {text: '[CrCl2(H2O)4]', correct: false},
    ],
  },
  {
    question: 'What are the geometry of the following complex: [Ag(NH3)2]+ ?',
    answers: [
      {text: 'linear', correct: true},
      {text: 'hexahedral', correct: false},
      {text: 'octahedral', correct: false},
      {text: 'trigonal', correct: false},
      {text: 'tetrahedral', correct: false},
    ],
  },
  {
    question: 'A molecule that cannot be superimposed on its mirror image is said to exhibit which of the following?',
    answers: [
      {text: 'linkage isomerism', correct: false},
      {text: 'optical isomerism', correct: true},
      {text: 'reactive isomerism', correct: false},
      {text: 'geometrical isomerism', correct: false},
      {text: 'coordination isomerism', correct: false},
    ],
  },
  {
    question: 'What is the oxidation number of cobalt in K[Co(CO)2Cl4]?',
    answers: [
      {text: '5', correct: false},
      {text: '9', correct: false},
      {text: '1', correct: false},
      {text: '7', correct: false},
      {text: '3', correct: true},
    ],
  },
  {
    question: 'Which one of the following systems has the smallest sized domains in its dispersed phase?',
    answers: [
      {text: 'Suspension', correct: false},
      {text: 'Nanoemulsion', correct: true},
      {text: 'Microemulsion', correct: false},
      {text: 'Emulsion', correct: false},
      {text: 'Flocculation', correct: false},
    ],
  },
  {
    question: 'Which of the following substances that belongs to colloid system?',
    answers: [
      {text: 'Vinegar', correct: false},
      {text: 'Water', correct: false},
      {text: 'Beer', correct: false},
      {text: 'Wine', correct: false},
      {text: 'Milk', correct: true},
    ],
  },
  {
    question: 'What is the dispersed phase and dispersing medium of smoke?',
    answers: [
      {text: 'Gas in solid', correct: false},
      {text: 'Solid in gas', correct: true},
      {text: 'Solid in liquid', correct: false},
      {text: 'Solid in solid', correct: false},
      {text: 'Liquid in solid', correct: false},
    ],
  },
  {
    question: 'Which of the following will show Tyndall effect?',
    answers: [
      {text: 'Aqueous solution of soap above critical micelle concentration', correct: true},
      {text: 'Aqueous solution of sugar above critical micelle concentration', correct: false},
      {text: 'Aqueous solution of sugar above critical micelle concentration', correct: false},
      {text: 'Aqueous solution of salt above critical micelle concentration', correct: false},
      {text: 'Aqueous solution of soap below critical micelle concentration', correct: false},
    ],
  },
  {
    question: 'Which of the following methods is used for the destruction of sol?',
    answers: [
      {text: 'condensation of an electrolyte', correct: false},
      {text: 'dialysis of an electrolyte', correct: false},
      {text: 'addition of an electrolyte', correct: true},
      {text: 'addition of an electrolyte', correct: false},
      {text: 'diffusion of an electrolyte', correct: false},
    ],
  },
  {
    question: 'What type of dispersed systems are tobacco smoke, dust, fog, clouds related to?',
    answers: [
      {text: 'suspensions', correct: false},
      {text: 'organosols', correct: false},
      {text: 'hydrosols', correct: false},
      {text: 'emulsion', correct: false},
      {text: 'aerosols', correct: true},
    ],
  },
  {
    question: 'What type of dispersed systems are cast iron, steel, precious stones, alloys?',
    answers: [
      {text: 'suspensions', correct: false},
      {text: 'solid colloids', correct: true},
      {text: 'emulsions', correct: false},
      {text: 'capillary systems', correct: false},
      {text: 'solid emulsions', correct: false},
    ],
  },
  {
    question: 'For which ion exchangers listed below will adsorption of Н+ ions be maximum?',
    answers: [
      {text: 'strongly acidic cation exchangers', correct: true},
      {text: 'soils, grounds, protein substances', correct: false},
      {text: 'weakly basic anion exchangers', correct: false},
      {text: 'charcoal, teflon powder, soot', correct: false},
      {text: 'strongly basic anion exchangers', correct: false},
    ],
  },
  {
    question: 'In which of the following media the sodium oleate micelle is formed?',
    answers: [
      {text: 'С4Н9ОН', correct: false},
      {text: 'С6Н6', correct: false},
      {text: 'СНCl3', correct: false},
      {text: 'СН4', correct: false},
      {text: 'Н2О', correct: true},
    ],
  },
  {
    question: 'How can the sign of the charge of particles of a positive sol of iron hydroxide Fe(OH)3 be changed?',
    answers: [
      {text: 'adding HCl', correct: true},
      {text: 'adding NaOH', correct: false},
      {text: 'adding Fe2SO4', correct: false},
      {text: 'charge sign cannot be changed', correct: false},
      {text: 'adding FeCl3', correct: false},
    ],
  },
  {
    question: 'The Ca3(PO4)2 sol was obtained as a result of an exchange reaction between CaCl2 and H3PO4, with H3PO4 taken in excess. Indicate the correct sol micelle formula.',
    answers: [
      {text: '{m[(Ca3(PO4)2]nH+(n - x)PO43-}xPO43-', correct: true},
      {text: '{m[(Ca3(PO4)2]nH+(n - x)PO43-}xPO44-', correct: false},
      {text: '{m[(Ca3(PO4)2]nH +(n - x)PO43-}xPO43', correct: false},
      {text: '{m[(Ca3(PO4)2]nCl-2(n - x)Ca2+}2xCl-', correct: false},
      {text: '{m[(Ca3(PO4)2]nCa2+ 2(n - x)Cl-}2xCl-', correct: false},
    ],
  },
  {
    question: 'When does the sreaming potential arise?',
    answers: [
      {text: 'with directional movement of particles of the dispersed phase', correct: false},
      {text: 'when an electric field is applied to a single capillary', correct: false},
      {text: 'when shaking the dispersed phase particles', correct: false},
      {text: 'when the particles of the dispersed phase settle under the action of gravity', correct: false},
      {text: 'when forcing a liquid through a capillary-porous system', correct: true},
    ],
  },
  {
    question: 'Which of these ions Be2+, Mg2+, Ca2+, Ba2+ and Sr2+ have the lowest coagulation critical concentration?',
    answers: [
      {text: 'Ba2+', correct: true},
      {text: 'Ca2+', correct: false},
      {text: 'Mg2+', correct: false},
      {text: 'Sr2+', correct: false},
      {text: 'Be2+', correct: false},
    ],
  },
  {
    question: 'Which element is present in all organic compounds?',
    answers: [
      {text: 'phosphorous', correct: false},
      {text: 'oxygen', correct: false},
      {text: 'sulfur', correct: false},
      {text: 'carbon', correct: true},
      {text: 'nitrogen', correct: false},
    ],
  },
  {
    question: 'Which property is generally characteristic of an organic compound?',
    answers: [
      {text: 'insoluble in nonpolar solvents', correct: false},
      {text: 'high melting point', correct: false},
      {text: 'soluble in nonpolar solvents', correct: true},
      {text: 'low melting point', correct: false},
      {text: 'soluble in polar solvents', correct: false},
    ],
  },
  {
    question: 'Which compounds are isomers?',
    answers: [
      {text: 'methanol and methanal', correct: false},
      {text: 'ethanone and ethanol', correct: false},
      {text: 'ethane and ethanol', correct: false},
      {text: 'methanoic acid and ethanoic acid', correct: false},
      {text: '1-propanol and 2-propanol', correct: true},
    ],
  },
  {
    question: 'Which class of organic compounds can be represented as R –C (=O) - R?',
    answers: [
      {text: 'esters', correct: false},
      {text: 'ethers', correct: false},
      {text: 'ketone', correct: true},
      {text: 'acids', correct: false},
      {text: 'alcohols', correct: false},
    ],
  },
  {
    question: 'Which of the following organic compound is a product of a saponification reaction?',
    answers: [
      {text: 'C6H6', correct: false},
      {text: 'CCl4', correct: false},
      {text: 'C3H5(OH)3', correct: true},
      {text: 'C6H12O6', correct: false},
      {text: 'C8H18', correct: false},
    ],
  },
  {
    question: 'Identify the one which does not come under the organic addition reaction?',
    answers: [
      {text: 'Hydrohalogenation', correct: false},
      {text: 'Hydration', correct: false},
      {text: 'Dehydration', correct: true},
      {text: 'Dehalogenation', correct: false},
      {text: 'alogenation', correct: false},
    ],
  },
  {
    question: 'Which of the following organic compound is a product of a fermentation reaction?',
    answers: [
      {text: 'C2H2', correct: false},
      {text: 'C2H5OH', correct: true},
      {text: 'CCl2F2', correct: false},
      {text: 'C2H5OOC2H5', correct: false},
      {text: 'C2H5OC2H5', correct: false},
    ],
  },
  {
    question: 'How many structural isomers are possible for C4H9Br?',
    answers: [
      {text: '5', correct: false},
      {text: '1', correct: false},
      {text: '2', correct: false},
      {text: '4', correct: true},
      {text: '3', correct: false},
    ],
  },
  {
    question: 'What type of organic reactions are involved in this following reaction? CH3CH=CH2 + HCl = _______',
    answers: [
      {text: 'a hydrolysis reaction', correct: false},
      {text: 'an esterification reaction', correct: false},
      {text: 'a substitution reaction', correct: false},
      {text: 'an addition reaction', correct: true},
      {text: 'a saponification reaction', correct: false},
    ],
  },
  {
    question: 'Which of the following is produced by oxidation of an aldehyde?',
    answers: [
      {text: 'Ketone', correct: false},
      {text: 'Primary alcohol', correct: false},
      {text: 'Carboxylic acid', correct: true},
      {text: 'Aldehyde', correct: false},
      {text: 'Secondary alcohol', correct: false},
    ],
  },
  {
    question: 'Which functional group contains a carbonyl group and a hydroxyl group bonded to the same carbon atom?',
    answers: [
      {text: 'Carboxylic acid', correct: true},
      {text: 'Ketone', correct: false},
      {text: 'Ester', correct: false},
      {text: 'Amino acid', correct: false},
      {text: 'Amide', correct: false},
    ],
  },
  {
    question: 'What is the product of oxidation of butanal?',
    answers: [
      {text: '2-butanol', correct: false},
      {text: 'Butanoate', correct: false},
      {text: '1-butanol', correct: false},
      {text: 'Butane', correct: false},
      {text: 'Butanoic acid', correct: true},
    ],
  },
  {
    question: 'Which of the following is produced by reduction of an aldehyde?',
    answers: [
      {text: 'Ether', correct: false},
      {text: 'Carboxylic acid', correct: false},
      {text: 'Ester', correct: false},
      {text: 'Secondary alcohol', correct: false},
      {text: 'Primary alcohol', correct: true},
    ],
  },
  {
    question: 'How this reaction can be classified CH2=CH2 + H2O ==> C2H5OH?',
    answers: [
      {text: 'Polymerization', correct: false},
      {text: 'Elimination', correct: false},
      {text: 'Oxidation', correct: false},
      {text: 'Hydration', correct: true},
      {text: 'Chlorination', correct: false},
    ],
  },
  {
    question: 'What is the reaction between an alcohol and carboxylic acid called?',
    answers: [
      {text: 'Hydrolysis', correct: false},
      {text: 'Esterification', correct: true},
      {text: 'Hydration', correct: false},
      {text: 'Polymerization', correct: false},
      {text: 'Dehydration', correct: false},
    ],
  },
  {
    question: 'Which of the following option describes hydrolysis the best?',
    answers: [
      {text: 'Heating of a compound in order to drive off excess water and concentrate its volume', correct: false},
      {text: 'Constant removal of hydrogen atoms from the surface of a carbohydrate', correct: false},
      {text: 'Linking of two or more molecules by the removal of one or more water molecules', correct: false},
      {text: 'Addition of hydrogen atoms to an unsaturated compounds', correct: false},
      {text: 'Breaking of a long-chain compound into subunits by adding water', correct: true},
    ],
  },
  {
    question: 'Which of the following compound is obtained by the reaction of ethene with diborane followed by hydrolysis with alkaline H2O2?',
    answers: [
      {text: 'ethanol', correct: true},
      {text: 'pentanol', correct: false},
      {text: 'propanol', correct: false},
      {text: 'butanol', correct: false},
      {text: 'triethyl bromide', correct: false},
    ],
  },
  {
    question: 'Which of the following compounds will give butanone on oxidation with alkaline KMnO4 solution?',
    answers: [
      {text: 'Butan-4-ol', correct: false},
      {text: 'Butan-2-ol', correct: true},
      {text: 'Butan-3-ol', correct: false},
      {text: 'Butan-5-ol', correct: false},
      {text: 'Butan-1-ol', correct: false},
    ],
  },
  {
    question: 'Which is not a heterocyclic aromatic compound?',
    answers: [
      {text: 'Naphthalene', correct: true},
      {text: 'Thiophene', correct: false},
      {text: 'Furan', correct: false},
      {text: 'Imidazole', correct: false},
      {text: 'Pyrrole', correct: false},
    ],
  },
  {
    question: 'What is the molecular formula of pyrrole?',
    answers: [
      {text: 'C5H5N', correct: false},
      {text: 'C6H6S', correct: false},
      {text: 'C6H6N', correct: false},
      {text: 'C4H4N', correct: false},
      {text: 'C4H5N', correct: true},
    ],
  },
  {
    question: 'Which of the following compounds are heterofunctional compounds?',
    answers: [
      {text: 'Acetic acid', correct: false},
      {text: 'Sorbitol', correct: false},
      {text: 'Lactic acid', correct: true},
      {text: 'Glucose', correct: false},
      {text: 'Oxalic acid', correct: false},
    ],
  },
  {
    question: 'What are the salts and derivatives of citric acid called?',
    answers: [
      {text: 'oxaloacetate', correct: false},
      {text: 'malate', correct: false},
      {text: 'pyruvate', correct: false},
      {text: 'citrate', correct: true},
      {text: 'lactate', correct: false},
    ],
  },
  {
    question: 'What form of lactic acid is involved in the metabolism of animals?',
    answers: [
      {text: 'L-lactic acid', correct: true},
      {text: 'lactic acid ester', correct: false},
      {text: 'lactic acid ethyl ester', correct: false},
      {text: 'D-lactic acid', correct: false},
      {text: 'lactic acid methyl ester', correct: false},
    ],
  },
  {
    question: 'What are the salts and derivatives of malic acid called?',
    answers: [
      {text: 'tartrates', correct: false},
      {text: 'acetate', correct: false},
      {text: 'malate', correct: true},
      {text: 'lactate', correct: false},
      {text: 'pyruvates', correct: false},
    ],
  },
  {
    question: 'Which compound is an example of a heterocyclic amine?',
    answers: [
      {text: 'Acetic acid', correct: false},
      {text: 'Pyrimidine', correct: true},
      {text: 'Benzene', correct: false},
      {text: 'Ethanol', correct: false},
      {text: 'Phenol', correct: false},
    ],
  },
  {
    question: 'What type of compound is thymine, a component of DNA?',
    answers: [
      {text: 'Heterocyclic', correct: true},
      {text: 'Ketone', correct: false},
      {text: 'Carbohydrate', correct: false},
      {text: 'Aromatic hydrocarbon', correct: false},
      {text: 'Carboxylic acid', correct: false},
    ],
  },
  {
    question: 'What specific reaction occurs when hydroxycarboxylic acids are heated?',
    answers: [
      {text: 'formation of diketopiperazine', correct: false},
      {text: 'lactide formation', correct: true},
      {text: 'lactone formation', correct: false},
      {text: 'formation of an ester', correct: false},
      {text: 'lactam formation', correct: false},
    ],
  },
  {
    question: 'Which of the following compounds are derivatives of para-aminobenzoic acid?',
    answers: [
      {text: 'streptocide', correct: false},
      {text: 'novocaine', correct: true},
      {text: 'salicylic acid', correct: false},
      {text: 'aspirin', correct: false},
      {text: 'citric acid', correct: false},
    ],
  },
  {
    question: 'Which of the following product is possible of the interaction of acetic and salicylic acids?',
    answers: [
      {text: 'phenyl salicylate', correct: false},
      {text: 'aspirin', correct: true},
      {text: 'phenylacetate', correct: false},
      {text: 'phenolphthalein', correct: false},
      {text: 'methyl salicylate', correct: false},
    ],
  },
  {
    question: 'Which of the following is not a function of Vitamin A in the body?',
    answers: [
      {text: 'Normal cell development and reproduction', correct: false},
      {text: 'Vision', correct: false},
      {text: 'Blood clotting', correct: true},
      {text: 'Immune defenses, maintenance of body linings and skin', correct: false},
      {text: 'Bone and body growth', correct: false},
    ],
  },
  {
    question: 'Which of the following is a monomeric link of protein?',
    answers: [
      {text: 'Sugar rest', correct: false},
      {text: 'Isoprene', correct: false},
      {text: 'Amine acid rest', correct: true},
      {text: 'Pyrrole', correct: false},
      {text: 'Ethylene', correct: false},
    ],
  },
  {
    question: 'Which of the following is an imino acid?',
    answers: [
      {text: 'Alanine', correct: false},
      {text: 'Glycine', correct: false},
      {text: 'Aspartate', correct: false},
      {text: 'Proline', correct: true},
      {text: 'Serine', correct: false},
    ],
  },
  {
    question: 'Which of the following is a bond a double helical structure of DNA is held together by?',
    answers: [
      {text: 'Peptide bonding', correct: false},
      {text: 'Glycosidic bonds', correct: false},
      {text: 'Ionic bonds', correct: false},
      {text: 'Hydrogen bonding', correct: true},
      {text: 'Sulphur-sulphur linkages', correct: false},
    ],
  },
  {
    question: 'Which of the followings is a simple sugar or monosaccharide?',
    answers: [
      {text: 'Sucrose', correct: false},
      {text: 'Lactose', correct: false},
      {text: 'Celluliose', correct: false},
      {text: 'Galactose', correct: true},
      {text: 'Maltose', correct: false},
    ],
  },
  {
    question: 'Which of the following Vitamin is also called as Pyridoxine?',
    answers: [
      {text: 'Vitamin B2', correct: false},
      {text: 'Vitamin B5', correct: false},
      {text: 'Vitamin B1', correct: false},
      {text: 'Vitamin B3', correct: false},
      {text: 'Vitamin B6', correct: true},
    ],
  },
  {
    question: 'Which of the following lipids provide insulation against cold and hot weather to exoskeleton of insects?',
    answers: [
      {text: 'Cholesterol', correct: false},
      {text: 'Steroids', correct: false},
      {text: 'Oil', correct: false},
      {text: 'Waxes', correct: true},
      {text: 'Fat', correct: false},
    ],
  },
  {
    question: 'Which of the following is not found in DNA?',
    answers: [
      {text: 'Uracil', correct: true},
      {text: 'Adenine', correct: false},
      {text: 'Thymine', correct: false},
      {text: 'Cytosine', correct: false},
      {text: 'Guanine', correct: false},
    ],
  },
  {
    question: 'Which of the following process descires synthesis of RNA from DNA',
    answers: [
      {text: 'Transcription', correct: true},
      {text: 'Transgenic', correct: false},
      {text: 'Replication', correct: false},
      {text: 'Translation', correct: false},
      {text: 'Duplication', correct: false},
    ],
  },
  {
    question: 'Which of the following molecules contain an anticodon?',
    answers: [
      {text: 'DNA', correct: false},
      {text: 'Small nuclear RNA', correct: false},
      {text: 'Ribosomal RNA', correct: false},
      {text: 'Messenger RNA', correct: true},
      {text: 'Transfer RNA', correct: false},
    ],
  },
  {
    question: 'Which of the following reagents is used to distinguish fructose and glucose?',
    answers: [
      {text: 'Barfoed\'s reagent', correct: false},
      {text: 'Fehling\'s reagent', correct: false},
      {text: 'Molish\'s reagent', correct: false},
      {text: 'Seliwanoff\'s reagent', correct: true},
      {text: 'Benedict\'s reagent', correct: false},
    ],
  },
  {
    question: 'Which polysaccharide is formed by β1→4 Glycosidic linkages?',
    answers: [
      {text: 'Glucose', correct: false},
      {text: 'Glycogen', correct: false},
      {text: 'Starch', correct: false},
      {text: 'Cellulose', correct: true},
      {text: 'Dextrin', correct: false},
    ],
  },
  {
    question: 'Where will be the bond form between sugar rest and pyrimidine N-base in nucleoside atoms?',
    answers: [
      {text: 'C1 and N1', correct: true},
      {text: 'C3 and N1', correct: false},
      {text: 'C3 and N9', correct: false},
      {text: 'C5 and N1', correct: false},
      {text: 'C1 and N9', correct: false},
    ],
  },
  {
    question: 'Which of the following takes place when denaturation of protein leads to loss of its biological activity?',
    answers: [
      {text: 'disruption of primary structure', correct: false},
      {text: 'disruption of both primary and secondary structure', correct: false},
      {text: 'disruption of both secondary', correct: false},
      {text: 'disruption of both secondary and tertiary structures only', correct: true},
      {text: 'formation of amino acids', correct: false},
    ],
  },
  {
    question: 'Which of the amino acids below is the uncharged derivative of an acidic amino acid?',
    answers: [
      {text: 'Cysteine', correct: false},
      {text: 'Glutamine', correct: true},
      {text: 'Serine', correct: false},
      {text: 'Arginine', correct: false},
      {text: 'Tyrosine', correct: false},
    ],
  },
  {
    question: 'Which of the following is known as the pH at which the amino acid shows no tendency to migrate when placed in an electric field?',
    answers: [
      {text: 'Isoelectric point', correct: false},
      {text: 'Resonance', correct: false},
      {text: 'Delocalization', correct: false},
      {text: 'Optical activity', correct: false},
      {text: 'Dipole moment', correct: true},
    ],
  },
  {
    question: 'Which of the following test may turn yellow a protein solution on warming with concentrated HNO3?',
    answers: [
      {text: 'Xanthoproteic test', correct: true},
      {text: 'Tollens test', correct: false},
      {text: 'Ninhydrin test', correct: false},
      {text: 'Biuret test', correct: false},
      {text: 'Millions test', correct: false},
    ],
  },
  {
    question: 'Which of the following statement is incorrect?',
    answers: [
      {text: 'Excess vitamin intake is harmful', correct: false},
      {text: 'Vitamin deficiency causes diseases', correct: false},
      {text: 'Vitamins can be produced by plants', correct: false},
      {text: 'Vitamins contain amino acids', correct: true},
      {text: 'Vitamins is a type of protein', correct: false},
    ],
  },
  {
    question: 'Which of the following is true about vitamin K deficiency?',
    answers: [
      {text: 'Causes heart disease and cancer', correct: false},
      {text: 'Causes failure to grow', correct: false},
      {text: 'Causes Wernicke-Korsakoff syndrome', correct: false},
      {text: 'Causes delayed blood clotting', correct: true},
      {text: 'Causes Keratinization of the cornea', correct: false},
    ],
  },
  {
    question: 'What is the mathematical expression of the first law of thermodynamics?',
    answers: [
      {text: '∆U = U(f) – U(i)', correct: false},
      {text: 'Q=∆U+W', correct: true},
      {text: 'S = KlnW', correct: false},
      {text: '∆H = H(f) – H(i)', correct: false},
      {text: 'H=U+pV', correct: false},
    ],
  },
  {
    question: 'Who had opened the first law of thermodynamics?',
    answers: [
      {text: 'Rudolf Clausius', correct: false},
      {text: 'Gibbs', correct: false},
      {text: 'Vant Hoff', correct: false},
      {text: 'Bodenstein', correct: false},
      {text: 'Julius Robert von Mayer', correct: true},
    ],
  },
  {
    question: 'How can you name a system consisting of one phases?',
    answers: [
      {text: 'Homogeneous system', correct: true},
      {text: 'Closed system', correct: false},
      {text: 'Open system', correct: false},
      {text: 'Heterogeneous system', correct: false},
      {text: 'Isolated system', correct: false},
    ],
  },
  {
    question: 'In what units is the reaction rate measured?',
    answers: [
      {text: 'liter per minute', correct: false},
      {text: 'decimeter per minute', correct: false},
      {text: 'mole per liter per second', correct: true},
      {text: 'centimeter per hour', correct: false},
      {text: 'meter per second', correct: false},
    ],
  },
  {
    question: 'What happens when two fluorine atoms combine to form a fluorine molecule?',
    answers: [
      {text: 'The connection is broken as the energy is released', correct: false},
      {text: 'As energy is absorbed , a bond is formed', correct: false},
      {text: 'The enthalpy of the system increases.', correct: false},
      {text: 'When energy is released, a bond is formed', correct: true},
      {text: 'The bond breaks as energy is absorbed.', correct: false},
    ],
  },
  {
    question: 'Which characteristic is best suited for the following process: Pumping water uphill',
    answers: [
      {text: 'Irreversible process', correct: false},
      {text: 'Reversible process', correct: false},
      {text: 'Not a spontaneous process', correct: true},
      {text: 'The equilibrium process', correct: false},
      {text: 'Spontaneous process', correct: false},
    ],
  },
  {
    question: 'Which of the following statements is incorrect about the collison theory of chemical reaction?',
    answers: [
      {text: 'It considers reacting molecules or atoms to be hard spheres and ignores their structural features.', correct: false},
      {text: 'Тhe condition for effective collisions is the presence of sufficient threshold energy of molecules', correct: false},
      {text: 'Number of effective collisions determines the rate of reaction.', correct: false},
      {text: 'Molecules should collide with sufficient threshold energy and proper energy', correct: false},
      {text: 'Collision of atoms or molecules possessing sufficient threshold energy results into the product formation.', correct: true},
    ],
  },
  {
    question: 'What is the unit of reaction rate measurement for a second-order reaction?',
    answers: [
      {text: 'mol-l L c - 1', correct: true},
      {text: 'mol-2 L2 s-1', correct: false},
      {text: 'mole L s', correct: false},
      {text: 'mol - 2 L 2', correct: false},
      {text: 's-1', correct: false},
    ],
  },
  {
    question: 'A breakfast cereal contains 5 g of protein, 24 g of carbohydrates, and 8 g of fat. What is the Calorie content of a serving of this cereal if the average number of Calories for fat is 9.4 Calories/g, for carbohydrates is 4.1 Calories/g, and for protein is 4.1 Calories/g?',
    answers: [
      {text: '162 Calories', correct: false},
      {text: '114 Calories', correct: false},
      {text: '225 Calories', correct: false},
      {text: '194 Calories', correct: true},
      {text: '70 Calories', correct: false},
    ],
  },
  {
    question: 'What is the molar concentration of equivalent?',
    answers: [
      {text: 'the mass of substance in 1 liter of solution', correct: false},
      {text: 'the mass of solute contained in 1ml of solvent', correct: false},
      {text: 'the equivalent amount of a substance contained in 1 liter of solution', correct: true},
      {text: 'the ratio of the mass of the solute in the mass solution', correct: false},
      {text: 'the number of moles solute contained in 1 kg of solvent', correct: false},
    ],
  },
  {
    question: 'What is the molal concentration?',
    answers: [
      {text: 'the mass of solute contained in 1ml of solvent', correct: false},
      {text: 'the ratio of the mass of the solute in the mass solution', correct: false},
      {text: 'the equivalent amount of a substance contained in 1 liter of solution', correct: false},
      {text: 'the number of moles solute contained in 1 kg of solvent', correct: true},
      {text: 'the mass of substance in 1 liter of solution', correct: false},
    ],
  },
  {
    question: 'What is the pH solution of the salt formed by a strong base and weak acid?',
    answers: [
      {text: 'pH <7', correct: false},
      {text: 'pH = 7', correct: false},
      {text: 'pH ~7', correct: false},
      {text: 'pH > 7', correct: true},
      {text: 'pH ≤ 7', correct: false},
    ],
  },
  {
    question: 'Which of the following is not a colligative property?',
    answers: [
      {text: 'Osmotic pressure', correct: false},
      {text: 'Elevation of bolling point', correct: false},
      {text: 'Vapor pressure redaction', correct: false},
      {text: 'Freezing point', correct: true},
      {text: 'Lowering of vapour pressure', correct: false},
    ],
  },
  {
    question: 'What is the name of a solution having an osmotic pressure lower than that of blood plasma?',
    answers: [
      {text: 'Hypertonic', correct: false},
      {text: 'Isoosmotic', correct: false},
      {text: 'Saturated', correct: false},
      {text: 'Isotonic', correct: false},
      {text: 'Hypotonic', correct: true},
    ],
  },
  {
    question: 'Find equivalent mass of phosphoric acid',
    answers: [
      {text: '32.7', correct: true},
      {text: '0.5', correct: false},
      {text: '65', correct: false},
      {text: '2', correct: false},
      {text: '1', correct: false},
    ],
  },
  {
    question: 'Which of the following solutions has the minimum freezing point?',
    answers: [
      {text: 'One molal KCI solution', correct: false},
      {text: 'One Molal NaCI solution', correct: false},
      {text: 'One molal LiCl solution', correct: false},
      {text: 'One molal urea solution', correct: false},
      {text: 'One molal CaCI2 solution', correct: true},
    ],
  },
  {
    question: 'What is the nature of the sodium sulfite solution?',
    answers: [
      {text: 'insufficient data', correct: false},
      {text: 'acidic', correct: false},
      {text: 'neutral', correct: false},
      {text: 'slightly acidic', correct: false},
      {text: 'alkaline', correct: true},
    ],
  },
  {
    question: 'Which of the following is not a property of solution?',
    answers: [
      {text: 'It is consist of a single phase.', correct: true},
      {text: 'Can be solid, liquid, gaseous', correct: false},
      {text: 'It has a homogeneous composition', correct: false},
      {text: 'It has a definite composition', correct: false},
      {text: 'It consists of several phases', correct: false},
    ],
  },
  {
    question: 'Which of the following salts undergoes hydrolysis?',
    answers: [
      {text: 'KBr', correct: false},
      {text: 'NaClO4', correct: false},
      {text: 'Ca(NO3)2', correct: false},
      {text: 'NaCl', correct: false},
      {text: 'FeSO4', correct: true},
    ],
  },
  {
    question: 'Determine the mass of 0.16 mol H2SO4',
    answers: [
      {text: '17.68 g', correct: false},
      {text: '19.68 g', correct: false},
      {text: '11.68 g', correct: false},
      {text: '15.68 g', correct: true},
      {text: '13.68 g', correct: false},
    ],
  },
  {
    question: 'In which red-ox reaction atoms of different substances change oxidation numbers?',
    answers: [
      {text: 'intramolecular', correct: false},
      {text: 'counter disproportion', correct: false},
      {text: 'intermolecular', correct: true},
      {text: 'disproportion', correct: false},
      {text: 'double exchange', correct: false},
    ],
  },
  {
    question: 'How can the oxidation process in the redox reaction be characterized?',
    answers: [
      {text: 'the process of increasing the degree of oxidation', correct: false},
      {text: 'the process of lossing of electrons', correct: true},
      {text: 'the process of equalizing the number of electrons', correct: false},
      {text: 'the process of gaining of electrons', correct: false},
      {text: 'the decrease in the valence of the electropositive component', correct: false},
    ],
  },
  {
    question: 'What can the oxidation process be called?',
    answers: [
      {text: 'removal of oxygen', correct: false},
      {text: 'addition of hydrogen', correct: false},
      {text: 'addition of water', correct: false},
      {text: 'addition of oxygen', correct: true},
      {text: 'removal of nitrogen', correct: false},
    ],
  },
  {
    question: 'Who invented the galvanic cell?',
    answers: [
      {text: 'Galvani and Volta', correct: true},
      {text: 'Joseph Priestley', correct: false},
      {text: 'Hermann Hess', correct: false},
      {text: 'Antoine Lavoisier', correct: false},
      {text: 'Henry Cavendish', correct: false},
    ],
  },
  {
    question: 'What is the oxidation number of Cr in K2Cr2O7?',
    answers: [
      {text: '3', correct: false},
      {text: '6', correct: true},
      {text: '-6', correct: false},
      {text: '-2', correct: false},
      {text: '2', correct: false},
    ],
  },
  {
    question: 'Consider the following reaction:Zn + Cu2+ → Zn2+ + Cu With reference to the above, which one of the following is the correct statement?',
    answers: [
      {text: '(c) Zn2+ ions are oxidised to Zn.', correct: false},
      {text: '(b) Zn is oxidised to Zn2+ ions.', correct: true},
      {text: 'Zn is reduced to Zn2+ ions.', correct: false},
      {text: 'Cu is oxidized to Cu2+ ions', correct: false},
      {text: '(d) Cu2+ ions are oxidized to Cu.', correct: false},
    ],
  },
  {
    question: 'Which of the above will not conduct electricity in an aqueous solution?',
    answers: [
      {text: 'Table salt', correct: false},
      {text: 'Nitric acid', correct: false},
      {text: 'Copper sulfate', correct: false},
      {text: 'Sugar', correct: true},
      {text: 'Sodium hydroxide', correct: false},
    ],
  },
  {
    question: 'When the following equation is balanced using the smallest whole number coefficients, what is the coefficient of NH3?NH3 + O2 → NO + H2O',
    answers: [
      {text: '5', correct: false},
      {text: '6', correct: false},
      {text: '2', correct: false},
      {text: '4', correct: true},
      {text: '3', correct: false},
    ],
  },
  {
    question: 'Which of the following option correct the donor of electrons in coordination compound?',
    answers: [
      {text: 'central ion and ligands', correct: false},
      {text: 'central ion', correct: false},
      {text: 'outer sphere ions', correct: false},
      {text: 'ligands', correct: true},
      {text: 'ligands and outer sphere ion', correct: false},
    ],
  },
  {
    question: 'What will be in the sequence of d-p-s-elements of complex forming ability?',
    answers: [
      {text: 'doesn’t change', correct: false},
      {text: 'increases', correct: true},
      {text: 'release', correct: false},
      {text: 'decreases', correct: false},
      {text: 'absorb', correct: false},
    ],
  },
  {
    question: 'What is the dentatness of EDTA?',
    answers: [
      {text: '5', correct: false},
      {text: '2', correct: false},
      {text: '3', correct: false},
      {text: '6', correct: true},
      {text: '4', correct: false},
    ],
  },
  {
    question: 'What is the coordination number of the following complex? [Cu(NH3)4]SO4',
    answers: [
      {text: '5', correct: false},
      {text: '2', correct: false},
      {text: '3', correct: false},
      {text: '1', correct: false},
      {text: '4', correct: true},
    ],
  },
  {
    question: 'What is the explanation for the formation of complexes on the basis of valent bonds theory?',
    answers: [
      {text: 'protons number', correct: false},
      {text: 'electrostatic model', correct: false},
      {text: 'electron number', correct: false},
      {text: 'donor-acceptor interaction', correct: true},
      {text: 'rate of reaction', correct: false},
    ],
  },
  {
    question: 'Which of the following has a coordination number as a feature?',
    answers: [
      {text: 'complex compound', correct: false},
      {text: 'Coordination entity', correct: false},
      {text: 'Ligand', correct: true},
      {text: 'Coordination compound', correct: false},
      {text: 'Central atom', correct: false},
    ],
  },
  {
    question: 'Which one of the following complexes can exhibit geometrical isomerism?',
    answers: [
      {text: '[Pt(NH3)2Cl2] (square planar)', correct: false},
      {text: '[Zn(NH3)2Cl2] (tetrahedral)', correct: false},
      {text: '[Cu(CN)2]- (linear)', correct: false},
      {text: '[Cu(NH3)4]2+ (square planar)', correct: false},
      {text: '[Co(NH3)5Cl]2+ (octahedral)', correct: true},
    ],
  },
  {
    question: 'How many geometrical isomers are possiple in [Al(C2O4)3]3+?',
    answers: [
      {text: '1', correct: true},
      {text: '3', correct: false},
      {text: '0', correct: false},
      {text: '2', correct: false},
      {text: '4', correct: false},
    ],
  },
  {
    question: 'Identify the correct naming for K2[PdCl4].',
    answers: [
      {text: 'Potassium tetrachlorinepalladium(II)', correct: false},
      {text: 'Potassium tetrachloridopalladate(II)', correct: true},
      {text: 'Potassium tetrachlorinepalladate(II)', correct: false},
      {text: 'Potassium tetrachloridopalladate(IV)', correct: false},
      {text: 'Potassium tetrachloridopalladium(II)', correct: false},
    ],
  },
  {
    question: 'Which of the following compounds has tetrahedral geometry?',
    answers: [
      {text: '[Ni(CN)4]2-', correct: false},
      {text: '[PdCl4]2-', correct: false},
      {text: '[Pd(CN)4]2-', correct: false},
      {text: '[Fe(CN)6]', correct: false},
      {text: '[NiCl4]2-', correct: true},
    ],
  },
  {
    question: 'What is the name of following coordination compound? K4[Fe(CN)6]',
    answers: [
      {text: 'hexacyanoferrate(II) potassium', correct: false},
      {text: 'potassium cyanoferrate(II)', correct: false},
      {text: 'potassium hexacyanoferrate(II)', correct: true},
      {text: 'potassium hexacyanoferrate(III)', correct: false},
      {text: 'tetrapotassiumhexacyanoferrate(II)', correct: false},
    ],
  },
  {
    question: 'Which of the following is not a mechanism for the separation of a physically unstable suspension of magnesium hydroxide in water?',
    answers: [
      {text: 'Filtration', correct: false},
      {text: 'Aggregation', correct: false},
      {text: 'Hydrolysis', correct: true},
      {text: 'Flocculation', correct: false},
      {text: 'Separation', correct: false},
    ],
  },
  {
    question: 'Which of the following is a colloid?',
    answers: [
      {text: 'urea solution', correct: false},
      {text: 'water solution', correct: false},
      {text: 'sugar solution', correct: false},
      {text: 'salt solution', correct: false},
      {text: 'acid solution', correct: true},
    ],
  },
  {
    question: 'Which of the following is a homogeneous system?',
    answers: [
      {text: 'muddy water', correct: false},
      {text: 'concrete in water', correct: false},
      {text: 'sugar in water', correct: true},
      {text: 'smoke in water', correct: false},
      {text: 'bread in water', correct: false},
    ],
  },
  {
    question: 'Which property of colloidal suspension is used to determine the nature of charge on the particles?',
    answers: [
      {text: 'ectrophoresis', correct: true},
      {text: 'centrifugation', correct: false},
      {text: 'titration', correct: false},
      {text: 'ultrafiltration', correct: false},
      {text: 'sedimentation', correct: false},
    ],
  },
  {
    question: 'Which one of the following is not represented by sols?',
    answers: [
      {text: 'absorption', correct: true},
      {text: 'flocculation', correct: false},
      {text: 'paramagnetism', correct: false},
      {text: 'tyndall effect', correct: false},
      {text: 'coagulation', correct: false},
    ],
  },
  {
    question: 'What components can form an emulsion?',
    answers: [
      {text: 'liquid medium - solid particles', correct: false},
      {text: 'gaseous medium - liquid particles', correct: false},
      {text: 'solid medium - solid particles', correct: false},
      {text: 'solid medium - gaseous particles', correct: false},
      {text: 'liquid medium - liquid particles', correct: true},
    ],
  },
  {
    question: 'Which of the following systems are direct emulsions?',
    answers: [
      {text: 'milk', correct: true},
      {text: 'greases', correct: false},
      {text: 'mineral', correct: false},
      {text: 'motor oils', correct: false},
      {text: 'natural oil', correct: false},
    ],
  },
  {
    question: 'What phenomena are observed when light passes on colloid systems?',
    answers: [
      {text: 'opalescence, reflection, scattering and absorption of light', correct: false},
      {text: 'reflection, interference and scattering', correct: false},
      {text: 'light scattering, reflection, refraction and interference', correct: true},
      {text: 'scattering, concentration, refraction and diffraction of ligh', correct: false},
      {text: 'light scattering, reflection, refraction and interference', correct: false},
    ],
  },
  {
    question: 'What rule determines the adsorption of substances at the solid-solution interface?',
    answers: [
      {text: 'Surface action', correct: false},
      {text: 'Langmuir-Blodgett', correct: false},
      {text: 'Traube-Duclaux Rule', correct: true},
      {text: 'Equalizing the polarities of the contacting phases according to Rebinder', correct: false},
      {text: 'Micelle formation according to Peskov-Fayans', correct: false},
    ],
  },
  {
    question: 'Which of the following adsorbents is well wetted by a polar liquid?',
    answers: [
      {text: 'Paraffin', correct: false},
      {text: 'Coal', correct: true},
      {text: 'Sulfur', correct: false},
      {text: 'Graphite', correct: false},
      {text: 'Paraffin', correct: false},
    ],
  },
  {
    question: 'For which of the below mentioned ion exchangers will OH- adsorption be maximum?',
    answers: [
      {text: 'strongly acidic cation exchangers', correct: false},
      {text: 'weakly basic anion exchangers', correct: false},
      {text: 'charcoal, teflon powder, soot', correct: false},
      {text: 'soils, grounds, protein substances', correct: false},
      {text: 'strongly basic anion exchangers', correct: true},
    ],
  },
  {
    question: 'Indicate the formula of the micelle of AgJ sol obtained in excess of KJ:',
    answers: [
      {text: '{[m(AgJ)]nAg+(n-x)NO3-}x NO3-', correct: false},
      {text: '{[m(AgJ)]nJ-(n-x)K+}x K+', correct: false},
      {text: '{[m(AgJ)]nAg+(n-x)J-}x J-', correct: true},
      {text: '{[m(AgJ)]n NO3-(n-x)NO3-}x Ag+', correct: false},
      {text: '{[m(AgJ)]nK+(n-x)J-}x J', correct: false},
    ],
  },
  {
    question: 'How the influence of the radius of monovalent ions on their coagulating ability is expressed by the lyotropic series?',
    answers: [
      {text: 'Li+<Cs+<Rb+< Na+<K+', correct: false},
      {text: 'Li+<Na+<K+<Rb+<Cs+', correct: true},
      {text: 'Cs+<Rb+<K+< Na+< Li+', correct: false},
      {text: 'Cs+<K+< Na+<Rb+<Li+', correct: false},
      {text: 'Li+<Na+<Rb+<Cs+<K+', correct: false},
    ],
  },
  {
    question: 'Which statement explains why the element carbon forms so many compounds?',
    answers: [
      {text: 'Carbon atoms combine readily with oxygen.', correct: false},
      {text: 'Carbon readily forms covalent bonds with other carbon atoms.', correct: true},
      {text: 'Carbon atoms have very low electronegativity.', correct: false},
      {text: 'Carbon readily forms ionic bonds with other carbon atoms.', correct: false},
      {text: 'Carbon atoms have very high electronegativity.', correct: false},
    ],
  },
  {
    question: 'Which polymers occur naturally?',
    answers: [
      {text: 'starch and nylon', correct: false},
      {text: 'plastic and nylon', correct: false},
      {text: 'protein and nylon', correct: false},
      {text: 'starch and cellulose', correct: true},
      {text: 'protein and plastic', correct: false},
    ],
  },
  {
    question: 'Which class of organic compounds can be represented as R - OH?',
    answers: [
      {text: 'acids', correct: false},
      {text: 'esters', correct: false},
      {text: 'ethers', correct: false},
      {text: 'alcohols', correct: true},
      {text: 'aldehydes', correct: false},
    ],
  },
  {
    question: 'Which alcohol contains three hydroxyl groups per molecule?',
    answers: [
      {text: 'pentanol', correct: false},
      {text: 'butanol', correct: false},
      {text: 'propanol', correct: false},
      {text: 'hexanol', correct: false},
      {text: 'glycerol', correct: true},
    ],
  },
  {
    question: 'Which of the following is one of the products obtained by a reaction of an acid and alcohol?',
    answers: [
      {text: 'carbon dioxide', correct: false},
      {text: 'propanol', correct: false},
      {text: 'water', correct: true},
      {text: 'glycerol', correct: false},
      {text: 'ethanol.', correct: false},
    ],
  },
  {
    question: 'Which hydrocarbon has more than one possible structural formula?',
    answers: [
      {text: 'C3H8', correct: false},
      {text: 'C2H4', correct: false},
      {text: 'CH4', correct: false},
      {text: 'C2H6', correct: false},
      {text: 'C4H10', correct: true},
    ],
  },
  {
    question: 'Choose the correct one which will react faster in the SN2 nucleophilic substitution reaction?',
    answers: [
      {text: 'CH2 = CH – CH2 = Br', correct: false},
      {text: 'CH2 – CH = CH2 = Br', correct: false},
      {text: 'CH = CH2 – CH2 – Br', correct: false},
      {text: 'CH = CH2 – CH3 – Br', correct: false},
      {text: 'CH2 = CH – CH2 – Br', correct: true},
    ],
  },
  {
    question: 'What will be the reactivity of chlorobenzene in an electrophilic substitution reaction with benzene?',
    answers: [
      {text: 'Does not react with benzene', correct: false},
      {text: 'Reacts very slowly than benzene', correct: true},
      {text: 'Reacts faster than benzene', correct: false},
      {text: 'Reacts in the same way as benzene', correct: false},
      {text: 'Reacts very faster than benzene', correct: false},
    ],
  },
  {
    question: 'What type of organic reactions are involved in this following reaction? CH3CH2CH2CH2Br + H2O = _______________ + HBr',
    answers: [
      {text: 'a substitution reaction', correct: true},
      {text: 'an addition reaction', correct: false},
      {text: 'an esterification reaction', correct: false},
      {text: 'a saponification reaction', correct: false},
      {text: 'a hydrolysis reaction', correct: false},
    ],
  },
  {
    question: 'What group of organic molecule have general formula of ROH?',
    answers: [
      {text: 'Esters', correct: false},
      {text: 'Ethers', correct: false},
      {text: 'Carboxylic acids', correct: false},
      {text: 'Alcohol', correct: true},
      {text: 'Ketones', correct: false},
    ],
  },
  {
    question: 'Which of the following compound gives a characteristic odor and taste of fruit such as bananas, oranges, and pineapples?',
    answers: [
      {text: 'Carboxylic acids', correct: false},
      {text: 'Ethers', correct: false},
      {text: 'Aldehydes', correct: false},
      {text: 'Esters', correct: true},
      {text: 'Ketones', correct: false},
    ],
  },
  {
    question: 'What is the use of Tollens\' reagent?',
    answers: [
      {text: 'Reduce carboxylic acids', correct: false},
      {text: 'Distinguish alcohols from aldehydes', correct: false},
      {text: 'Reduce aldehydes', correct: false},
      {text: 'Reduce ketones', correct: false},
      {text: 'Distinguish aldehydes from ketones', correct: true},
    ],
  },
  {
    question: 'Which of the following is a product of reduction of a ketone?',
    answers: [
      {text: 'A ketone', correct: false},
      {text: 'A primary alcohol', correct: false},
      {text: 'A tertiary acohol', correct: false},
      {text: 'A secondary alcohol', correct: true},
      {text: 'A carboxylic acid', correct: false},
    ],
  },
  {
    question: 'What are the products of the reaction between methanol and ethanoic acid?',
    answers: [
      {text: 'Ethyl methanoate and water', correct: false},
      {text: 'CH3COOC2H5 and water', correct: false},
      {text: 'CH3COOCH3 and hydrogen', correct: false},
      {text: 'Methyl ethanoate and water', correct: true},
      {text: 'Ethyle ethanoate and water', correct: false},
    ],
  },
  {
    question: 'Which compound will give a positive Tollen\'s test?',
    answers: [
      {text: 'Pentanol', correct: false},
      {text: '3-pentanone', correct: false},
      {text: 'Pentanoic acid', correct: false},
      {text: 'Ethyle propanoate', correct: false},
      {text: 'Pentanal', correct: true},
    ],
  },
  {
    question: 'What is the product of reduction of 2- butanone?',
    answers: [
      {text: '1-butanol', correct: false},
      {text: 'Butanoic acid', correct: false},
      {text: '2-butanone', correct: false},
      {text: '2-butanol', correct: true},
      {text: 'Butane', correct: false},
    ],
  },
  {
    question: 'Which of the following is used for production of alcohol by fermentation method?',
    answers: [
      {text: 'CO2', correct: false},
      {text: 'INVERTASE', correct: false},
      {text: 'O2', correct: false},
      {text: 'H2O', correct: false},
      {text: 'YEAST', correct: true},
    ],
  },
  {
    question: 'Which of the following is formed on hydrolysis of CH2 = CH2?',
    answers: [
      {text: 'Ethylene glycol', correct: false},
      {text: 'Ethyl', correct: false},
      {text: 'Ethylene oxide', correct: false},
      {text: 'Ethyl alcohol', correct: false},
      {text: 'Acetaldehyde', correct: true},
    ],
  },
  {
    question: 'A para of mirror isomers of which compound is the standard for assigning optical isomers to the D or L-form?:',
    answers: [
      {text: 'malic acid', correct: false},
      {text: 'ethyl alcohol', correct: false},
      {text: 'glyceraldehyde', correct: true},
      {text: 'alanine', correct: false},
      {text: 'glucose', correct: false},
    ],
  },
  {
    question: 'Which of the following is molecular formula of pyrrole?',
    answers: [
      {text: 'C4H4N', correct: false},
      {text: 'C5H6N', correct: false},
      {text: 'C4H5N', correct: true},
      {text: 'C5H5N', correct: false},
      {text: 'C6H6N', correct: false},
    ],
  },
  {
    question: 'Which of the following statements is not correct for mononucleotides?',
    answers: [
      {text: 'mononucleotides consist of three constitutional parts', correct: true},
      {text: 'the anomer carbon of pentose has β - configuration', correct: false},
      {text: 'heterocycle is linked with pentose by O-glycosidic bond', correct: false},
      {text: 'hydroxyl groups', correct: false},
      {text: 'ribose exist in its furanose form', correct: false},
    ],
  },
  {
    question: 'Which is not a heterocyclic aromatic compound?',
    answers: [
      {text: 'Pyrrole', correct: false},
      {text: 'Thiophene', correct: false},
      {text: 'Naphthalene', correct: true},
      {text: 'Furan', correct: false},
      {text: 'Imidazole', correct: false},
    ],
  },
  {
    question: 'What are the salts and derivatives of malic acid called?',
    answers: [
      {text: 'acetate', correct: false},
      {text: 'tartrates', correct: false},
      {text: 'pyruvates', correct: false},
      {text: 'malate', correct: true},
      {text: 'lactate', correct: false},
    ],
  },
  {
    question: 'Which of the following acids are oxycarboxylic acids?',
    answers: [
      {text: 'pyruvic acid', correct: true},
      {text: 'oxalic acid', correct: false},
      {text: 'Acetic acid', correct: false},
      {text: 'tartaric acid', correct: false},
      {text: 'Butyric acid', correct: false},
    ],
  },
  {
    question: 'Which of the following acids are hydroxycarboxylic acids?',
    answers: [
      {text: 'Lactic acid', correct: true},
      {text: 'Butyric acid', correct: false},
      {text: 'glyoxylic acid', correct: false},
      {text: 'oxalic acid', correct: false},
      {text: 'acetic acid', correct: false},
    ],
  },
  {
    question: 'Which of the following is a heterocyclic aromatic amine?',
    answers: [
      {text: 'Alanine', correct: false},
      {text: 'Oxalic acid', correct: false},
      {text: 'Adenine', correct: true},
      {text: 'Ethylamine', correct: false},
      {text: 'Glycine', correct: false},
    ],
  },
  {
    question: 'Which is a heterocyclic aromatic compound found in DNA?',
    answers: [
      {text: 'Lactic acid', correct: false},
      {text: 'Benzene', correct: false},
      {text: 'Phenol', correct: false},
      {text: 'Glucose', correct: false},
      {text: 'Guanine', correct: true},
    ],
  },
  {
    question: 'Which compound is an example of a heterocyclic amine?',
    answers: [
      {text: 'Ethanol', correct: false},
      {text: 'Pyrimidine', correct: true},
      {text: 'Acetic acid', correct: false},
      {text: 'Benzene', correct: false},
      {text: 'Phenol', correct: false},
    ],
  },
  {
    question: 'Which of the following product is possible of the interaction of acetic and salicylic acids?',
    answers: [
      {text: 'aspirin', correct: true},
      {text: 'phenylacetate', correct: false},
      {text: 'phenyl salicylate', correct: false},
      {text: 'methyl salicylate', correct: false},
      {text: 'phenolphthalein', correct: false},
    ],
  },
  {
    question: 'Which of the following is not a monosaccharide?',
    answers: [
      {text: 'Sucrose', correct: true},
      {text: 'Glucose', correct: false},
      {text: 'Ribose', correct: false},
      {text: 'Fructose', correct: false},
      {text: 'Tetrose', correct: false},
    ],
  },
  {
    question: 'Which of the followinf is type of α-amine acid – valine?',
    answers: [
      {text: 'Ionic', correct: false},
      {text: 'Acidic', correct: false},
      {text: 'Slightly Polar', correct: false},
      {text: 'Neutral', correct: true},
      {text: 'Basic', correct: false},
    ],
  },
  {
    question: 'What is the difference of fats from waxes?',
    answers: [
      {text: 'Longer fatty acids', correct: false},
      {text: 'Higher melting points', correct: false},
      {text: 'An ester', correct: false},
      {text: 'More unsaturation', correct: false},
      {text: 'A glycerol backbone', correct: true},
    ],
  },
  {
    question: 'Which of the following compounds form under hydrolysis of simple lipids?',
    answers: [
      {text: 'Esters', correct: false},
      {text: 'Alcohols, carboxylic acids, carbohydrates etc', correct: false},
      {text: 'Alcohols, carboxylic acids', correct: true},
      {text: 'Alcohols', correct: false},
      {text: 'Carboxylic acids', correct: false},
    ],
  },
  {
    question: 'Which sugar forms major component of nucleic acids?',
    answers: [
      {text: 'Xylulose', correct: false},
      {text: 'Galactose', correct: false},
      {text: 'Mannose', correct: false},
      {text: 'Ribose', correct: true},
      {text: 'Maltose', correct: false},
    ],
  },
  {
    question: 'Which of the following is due to Vitamin C deficiency?',
    answers: [
      {text: 'BeriBeri', correct: false},
      {text: 'Cancer', correct: false},
      {text: 'Rickets', correct: false},
      {text: 'Scurvy', correct: true},
      {text: 'Anemia', correct: false},
    ],
  },
  {
    question: 'Which of the following is not a function of Vitamin A in the body?',
    answers: [
      {text: 'Immune defenses, maintenance of body linings and skin', correct: false},
      {text: 'Vision', correct: false},
      {text: 'Normal cell development and reproduction', correct: false},
      {text: 'Bone and body growth', correct: false},
      {text: 'Blood clotting', correct: true},
    ],
  },
  {
    question: 'What compound sugars are converted into in the liver?',
    answers: [
      {text: 'Starch', correct: false},
      {text: 'Chitin', correct: false},
      {text: 'Vitamin', correct: false},
      {text: 'Cellulose', correct: false},
      {text: 'Glycogen', correct: true},
    ],
  },
  {
    question: 'What is the end product of hydrolysis of a Starch by amylase?',
    answers: [
      {text: 'Soluble starch', correct: false},
      {text: 'Glycogen', correct: false},
      {text: 'Dextrins', correct: false},
      {text: 'Glucose', correct: true},
      {text: 'Maltose', correct: false},
    ],
  },
  {
    question: 'Bond between sugar rest and pyrimidine N-base in nucleoside is formed between which atoms?',
    answers: [
      {text: 'C1 and N9', correct: false},
      {text: 'C3 and N9', correct: false},
      {text: 'C1 and N1', correct: true},
      {text: 'C5 and N1', correct: false},
      {text: 'C3 and N1', correct: false},
    ],
  },
  {
    question: 'How the double helical structure of DNA is held together?',
    answers: [
      {text: 'Glycosidic bonds', correct: false},
      {text: 'Peptide bonding', correct: false},
      {text: 'Ester linkages', correct: false},
      {text: 'Hydrogen bonding', correct: true},
      {text: 'Sulphur-sulphur linkages', correct: false},
    ],
  },
  {
    question: 'Which of the following statements is false about glucose?',
    answers: [
      {text: 'It is aldose sugar', correct: false},
      {text: 'It is a reducing sugar', correct: false},
      {text: 'It has a pyranose form', correct: false},
      {text: 'It is a disaccharide', correct: true},
      {text: 'It is a polyalcohol', correct: false},
    ],
  },
  {
    question: 'Which of the following vitamin functions as both, hormone and visual pigment?',
    answers: [
      {text: 'Niacin', correct: false},
      {text: 'Retinal', correct: true},
      {text: 'Thiamine', correct: false},
      {text: 'Biotin', correct: false},
      {text: 'Cobalamin', correct: false},
    ],
  },
  {
    question: 'Which of the following sugar yields only glucose on hydrolysis?',
    answers: [
      {text: 'Sucrose', correct: false},
      {text: 'Maltose', correct: true},
      {text: 'Lactose', correct: false},
      {text: 'Inulin', correct: false},
      {text: 'Fructose', correct: false},
    ],
  },
  {
    question: 'Which of the following vitamin works together with Folate to produce new red blood cells?',
    answers: [
      {text: 'Vitamin B-12', correct: true},
      {text: 'Vitamin B-1', correct: false},
      {text: 'Niacin', correct: false},
      {text: 'Vitamin A', correct: false},
      {text: 'Vitamin D', correct: false},
    ],
  },
  {
    question: 'What is the form of converted sugars in the liver?',
    answers: [
      {text: 'Glycogen', correct: true},
      {text: 'Inulin', correct: false},
      {text: 'Cellulose', correct: false},
      {text: 'Starch', correct: false},
      {text: 'Chitin', correct: false},
    ],
  },
  {
    question: 'Which of the following compound forms upon hydrolysis of proteins?',
    answers: [
      {text: 'Amines', correct: false},
      {text: 'Alcohols', correct: false},
      {text: 'Amino acids', correct: true},
      {text: 'Fatty acids', correct: false},
      {text: 'Hydroxyl acids', correct: false},
    ],
  },
  {
    question: 'Dinucleotide is obtained by joining two nucleotides together by phosphodiester linkage. Between which carbon atoms of pentose sugars of nucleotides are these linkages present?',
    answers: [
      {text: '5′ and 3′', correct: true},
      {text: '3′ and 1′', correct: false},
      {text: '3′ and 3′', correct: false},
      {text: '1′ and 5′', correct: false},
      {text: '5′ and 5′', correct: false},
    ],
  },
  {
    question: 'Amino acids generally exist in the form of Zwitter ions, which means they contain?',
    answers: [
      {text: 'Basic – NH2 group and acidic – COOH group', correct: false},
      {text: 'Basic -NH2 and acidic – H+ group', correct: false},
      {text: 'The basic – NH3+ group and acidic – COO– group', correct: true},
      {text: 'Basic – COO– group and acidic – NH3+ group', correct: false},
      {text: ' Basic – COOH group and acidic – NH group', correct: false},
    ],
  },
];


const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', ()=> {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

backButton.addEventListener('click', ()=> {
  if (currentQuestionIndex < questions.length) {
    handleBackButton();
  } else {
    startQuiz();
  }
});

// Add search functionality for custom question navigation
searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10); // Convert input to number
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1; // Navigate to the correct question index
    showQuestion(); // Display the selected question
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
