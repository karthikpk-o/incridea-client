type TeamMember = {
  role: string;
  instagram: string;
  github: string;
  linkedin: string;
  image: string;
  quote: string;
}

const TEAM_MEMBERS: {
  [key: string]: TeamMember;
} = {
  "Satwik Prabhu": {
    role: "Team Head",
    instagram: "https://www.instagram.com/satwikprabhu",
    github: "https://github.com/satwikrprabhu",
    linkedin: "https://www.linkedin.com/in/satwikprabhu",
    image: "satwik_prabhu.jpg",
    quote: "I know where you live.",
  },
  "Keerthan K": {
    role: "3D | Explore Page",
    instagram: "https://www.instagram.com/keetha_k11",
    github: "https://github.com/keetha1011",
    linkedin: "https://www.linkedin.com/in/kkeerthan/",
    image: "keerthan_k.jpg",
    quote: "passion && :) >>>",
  },
  "Aryan Singh": {
    role: "3D | Pronite",
    instagram: "https://www.instagram.com/just_aryansingh",
    github: "https://github.com/Wizhill05",
    linkedin: "https://www.linkedin.com/in/justaryansingh",
    quote: "but Attendance <<<",
    image: "aryan_singh.jpg",
  },
  "A Omkar G Prabhu": {
    role: "Co-Head",
    instagram: "-",
    github: "https://github.com/Prabhuomkar9",
    linkedin: "https://www.linkedin.com/in/prabhuomkar9/",
    image: "omkar.webp",
    quote: "Control yourself, Not others! Tbh atp idc",
  },
  "Samarth H Shetty": {
    role: "Full Stack",
    instagram: "https://www.instagram.com/sammonster1920/",
    github: "https://github.com/Sammonster495",
    linkedin: "https://www.linkedin.com/in/samarth-shetty-a53018247/",
    image: "samarth.webp",
    quote: "Coding and dancing my way through life",
  },
  "Pratham A Kadekar": {
    role: "Full Stack",
    instagram: "https://www.instagram.com/pratham_ak2004",
    github: "https://github.com/pratham-ak2004",
    linkedin:
      "https://www.linkedin.com/in/pratham-a-kadekar-8397a7249",
    image: "pratham_a_kadekar.jpg",
    quote: "Kon'nichiwa",
  },
  "Karthik Salian": {
    role: "Frontend",
    github: "https://github.com/Karthik-S-Salian",
    instagram: "https://www.instagram.com/karthik_s_.salian/",
    linkedin: "https://www.linkedin.com/in/karthik-salian-3a7a26246/",
    image: "karthik.png",
    quote: "Once take a deep breath and say NO",
  },
  "Nandan R Pai": {
    role: "Full Stack",
    instagram: "https://www.instagram.com/nandanpi__/",
    github: "https://github.com/nandanpi",
    linkedin: "https://www.linkedin.com/in/nandanpai09",
    image: "nandan.jpeg",
    quote: "My touch is the solution to all problems 🥰",
  },
  "Rahul N Bangera": {
    role: "Full Stack",
    instagram: "https://www.instagram.com/rahul_n_bangera",
    github: "https://github.com/Bnir",
    linkedin: "https://www.linkedin.com/in/rahul-n-bangera",
    image: "rahul.png",
    quote: "Give 200% or Give nothing",
  },
  "Shishir Karkera": {
    role: "Media Co-Head | Capture Incridea Head",
    instagram: "https://www.instagram.com/shishir.karkeraa",
    github: "https://github.com/shishirkarkeraa",
    linkedin: "https://www.linkedin.com/in/shishir-girish-karkera-a61542262/",
    image: "shishir.webp",
    quote: "Never gonna let you down!",
  },
  "Athul D Bhandary": {
    role: "Full Stack",
    instagram: "https://www.instagram.com/athul_bhandary",
    github: "https://github.com/athul28",
    linkedin: "https://www.linkedin.com/in/athul-d-bhandary-0b1912247/",
    image: "athul_ d_bhandary.jpg",
    quote: "Hey wassup!!!",
  },
  "Varshith Pawar H R": {
    role: "Frontend | Capture Incridea",
    instagram: "https://www.instagram.com/mr.pawar_10/",
    github: "https://github.com/VarshithPawarHR",
    linkedin: "https://www.linkedin.com/in/varshithpawarhr",
    image: "varshith.jpeg",
    quote: "No bugs here—just your system struggling to keep up with our brilliance",
  },
  "Snehal Shetty": {
    role: "Full Stack",
    instagram: "https://www.instagram.com/shettysnehal__05",
    github: "https://github.com/shettysnehal",
    linkedin: "https://www.linkedin.com/in/snehalshetty105",
    image: "snehal_shetty.jpeg",
    quote: "Life so cooked that my luck is on airplane mode",
  },
  "Karthik P K": {
    role: "Backend",
    instagram: "https://www.instagram.com/_karthik_p_k/",
    github: "https://github.com/karthikpk-o",
    linkedin: "https://linkedin.com/in/karthik-p-k",
    image: "karthik_p_k.jpg",
    quote: "The trouble is, you think you have time.",
  },
  "Ashton Prince Mathias": {
    role: "Frontend",
    instagram: "https://www.instagram.com/_ashtonmathias_/",
    github: "https://github.com/Subtilizer28",
    linkedin: "https://www.linkedin.com/in/ashtonmths/",
    image: "ashton_mathias.jpg",
    quote: '"your fone linging 📞"',
  },
  "Ishan Shetty": {
    role: "Full Stack | Merch Incridea",
    github: "https://github.com/Ishan-Shetty",
    linkedin: "https://www.linkedin.com/in/ishan-shetty-0a889821a/",
    instagram: "https://www.instagram.com/ishanshetty_",
    image: "ishan.png",
    quote: "I'm just a chill guy 👾",
  },
  "Gaurav Dhanraja": {
    role: "Frontend | Merch Incridea",
    instagram: "https://instagram.com/gaurav.dhanraja",
    github: "https://github.com/gauravdhanraja",
    linkedin: "https://linkedin.com/in/gauravdhanraja",
    image: "gaurav_dhanraja.jpg",
    quote: "Ishan's a stalker",
  },
  "Riyaz Ahmed": {
    role: "Frontend",
    instagram: "https://www.instagram.com/ria_yz24",
    github: "https://github.com/RiaAug24",
    linkedin: "https://www.linkedin.com/in/riyaz-ahmed24",
    image: "riyaz_ahmed.jpg",
    quote: "Try to be the fitting piece, for a missing piece. 🧩",
  },
  "Len Mendonca": {
    role: "Frontend",
    instagram: "https://www.instagram.com/lendanieo/",
    github: "https://github.com/len-mendonca",
    linkedin: "https://in.linkedin.com/in/len-mendonca",
    image: "len_mendonca.png",
    quote: "Maria Pitache",
  },
  "Sathwik Nayak": {
    role: "Frontend | Capture Incridea",
    instagram: "https://www.instagram.com/sathwik_hh",
    github: "https://github.com/002sathwik",
    linkedin: "https://www.linkedin.com/in/sathwik-h-085758246",
    image: "satwik_h.png",
    quote: "Being part of a team is the greatest contribution I've made.",
  },
  "Chaithra S Nayak": {
    role: "Backend",
    instagram: "https://www.instagram.com/chaithrasnayak3/",
    github: "https://github.com/Chaithra-S-Nayak",
    linkedin: "https://www.linkedin.com/in/chaithra-s-nayak/",
    image: "chaitra.webp",
    quote: "git commit, git push, git regret",
  },
  "M Sayeem Ahmed": {
    role: "Backend",
    instagram: "https://www.instagram.com/ahmedmsayeem/",
    github: "https://github.com/ahmedmsayeem",
    linkedin: "https://www.linkedin.com/in/m-sayeem-ahmed-651a7b254",
    image: "sayeem_ahmed.jpg",
    quote: "womp womp",
  },
  "Prakash Waddar": {
    role: "Frontend",
    instagram: "https://www.instagram.com/____prakash____28",
    github: "https://github.com/prakashwaddar628",
    linkedin:
      "https://www.linkedin.com/in/prakash-l-waddar-422760203",
    image: "prakash_waddar.jpg",
    quote: "Break loops, not your spirit. Go beyond your limits",
  },
  "Mustafa": {
    role: "Frontend",
    instagram: "https://www.instagram.com/mustafa._._.raza/",
    github: "https://github.com/Mustafa-DEV0",
    linkedin:
      "https://www.linkedin.com/in/mustafa-raza-b98163350",
    image: "mustafa.png",
    quote: "I write clean code… until the deadline says otherwise.",
  },
}

export { TEAM_MEMBERS };
