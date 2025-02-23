import { ASSETS } from "~/constants/assets";

type CoreMember = {
    image: string;
    committee: string;
    designation: string;
    phone: number;
    email: string;
};

const CORE_MEMBERS: {
    [key: string]: CoreMember;
} = {
    "Varun S Amin": {
        "image": ASSETS.CORETEAM.VARUN,
        "committee": "Accommodation",
        "designation": "Head",
        "phone": 8618378701,
        "email": "4nm21is204@nmamit.in"
    },
    "Ansh P Bhandary": {
        "image": ASSETS.CORETEAM.ANSH,
        "committee": "Accommodation",
        "designation": "Co-Head",
        "phone": 9611878045,
        "email": "nnm22ec019@nmamit.in"
    },
    "Aryan M Chowta": {
        "image": ASSETS.CORETEAM.ARYAN,
        "committee": "Crew",
        "designation": "Head",
        "phone": 9108743782,
        "email": "nnm22is023@nmamit.in"
    },
    "Advik A Rai": {
        "image": ASSETS.CORETEAM.ADVIK,
        "committee": "Crew",
        "designation": "Co-Head",
        "phone": 9663867525,
        "email": "nnm22is010@nmamit.in"
    },
    "Vandya Kamath": {
        "image": ASSETS.CORETEAM.VANDYA,
        "committee": "Cultural",
        "designation": "Head",
        "phone": 8197279793,
        "email": "4nm21is201@nmamit.in"
    },
    "Keshav Nayak": {
        "image": ASSETS.CORETEAM.KESHAV,
        "committee": "Cultural",
        "designation": "Co-Head",
        "phone": 6361351508,
        "email": "nnm22cc028@nmamit.in"
    },
    "Pavan C": {
        "image": ASSETS.CORETEAM.PAVAN,
        "committee": "Digital",
        "designation": "Co-Head",
        "phone": 7975633523,
        "email": "pavanachar1197@gmail.com"
    },
    "Prathvi G Karkera": {
        "image": ASSETS.CORETEAM.PRATHVI,
        "committee": "Documentation",
        "designation": "Head",
        "phone": 6363250762,
        "email": "4nm21cs116@nmamit.in"
    },
    "Sannidhi S Shetty": {
        "image": ASSETS.CORETEAM.SANNIDHI,
        "committee": "Documentation",
        "designation": "Co-Head",
        "phone": 8660832366,
        "email": "nnm22ec149@nmamit.in"
    },
    "Uday Bhaskar": {
        "image": ASSETS.CORETEAM.UDAY,
        "committee": "Event Management",
        "designation": "Head",
        "phone": 8197252646,
        "email": "4nm21ai071@nmamit.in"
    },
    "Amrith R Naik": {
        "image": ASSETS.CORETEAM.AMRITH,
        "committee": "Event Management",
        "designation": "Co-Head",
        "phone": 7676437857,
        "email": "nnm22ad006@nmamit.in"
    },
    "Tvisha Prakash": {
        "image": ASSETS.CORETEAM.TVISHA,
        "committee": "Finance",
        "designation": "Head",
        "phone": 6366346176,
        "email": "4nm21cs195@nmamit.in"
    },
    "Shaun V Karkada": {
        "image": ASSETS.CORETEAM.SHAUN,
        "committee": "Finance",
        "designation": "Co-Head",
        "phone": 8073090982,
        "email": "nnm22is150@nmamit.in"
    },
    "Shravan Sp": {
        "image": ASSETS.CORETEAM.SHRAVAN,
        "committee": "Food",
        "designation": "Co-Head",
        "phone": 9880309723,
        "email": "nnm22is155@nmamit.in"
    },
    "Sakshath S Shetty": {
        "image": ASSETS.CORETEAM.SAKSHATH,
        "committee": "House-Keeping",
        "designation": "Head",
        "phone": 8095400051,
        "email": "4nm21me045@nmamit.in"
    },
    "Eshaprasad": {
        "image": ASSETS.CORETEAM.EESHA,
        "committee": "House-Keeping",
        "designation": "Co-Head",
        "phone": 8073926956,
        "email": "nnm22ec056@nmamit.in"
    },
    "Shreya S Rao": {
        "image": ASSETS.CORETEAM.SHREYA,
        "committee": "Inaugural",
        "designation": "Head",
        "phone": 9449325187,
        "email": "4nm21is221@nmamit.in"
    },
    "Avanthi": {
        "image": ASSETS.CORETEAM.AVANTHI,
        "committee": "Inaugural",
        "designation": "Co-Head",
        "phone": 8971426501,
        "email": "nnm22cs036@nmamit.in"
    },
    "Apeksha Nayak": {
        "image": ASSETS.CORETEAM.APEKSHA,
        "committee": "Jury",
        "designation": "Head",
        "phone": 9591802586,
        "email": "4nm21is024@nmamit.in"
    },
    "Nandan R Pai": {
        "image": ASSETS.CORETEAM.NANDAN,
        "committee": "Jury",
        "designation": "Co-Head",
        "phone": 9481585863,
        "email": "nnm22am033@nmamit.in"
    },
    "S Abishek": {
        "image": ASSETS.CORETEAM.ABHISHEK,
        "committee": "Media",
        "designation": "Head",
        "phone": 8867618536,
        "email": "4nm21cs133@nmamit.in"
    },
    "Shishir Girish Karkera": {
        "image": ASSETS.CORETEAM.SHISHIR,
        "committee": "Media",
        "designation": "Co-Head",
        "phone": 8861337830,
        "email": "nnm23cs185@nmamit.in"
    },
    "Sumedha S Kini": {
        "image": ASSETS.CORETEAM.SUMEDHA,
        "committee": "Publicity",
        "designation": "Head",
        "phone": 9513295282,
        "email": "4nm21is184@nmamit.in"
    },
    "Lakhi A Shetty": {
        "image": ASSETS.CORETEAM.LAKHI,
        "committee": "Publicity",
        "designation": "Co-Head",
        "phone": 9449530107,
        "email": "4nm21cs127@nmamit.in"
    },
    "Prathama S J": {
        "image": ASSETS.CORETEAM.PRATHAMA,
        "committee": "Requirements",
        "designation": "Head",
        "phone": 7411709904,
        "email": "4nm21cs115@nmamit.in"
    },
    "Sudeep": {
        "image": ASSETS.CORETEAM.SUDEEP,
        "committee": "Requirements",
        "designation": "Co-Head",
        "phone": 8749064508,
        "email": "nnm23am501@nmamit.in"
    },
    "Saurabh Sunish": {
        "image": ASSETS.CORETEAM.SAURABH,
        "committee": "Social Media",
        "designation": "Head",
        "phone": 9400959342,
        "email": "4nm21cs219@nmamit.in"
    },
    "Aaric Johan Rodrigues": {
        "image": ASSETS.CORETEAM.AARIC,
        "committee": "Social Media",
        "designation": "Co-Head",
        "phone": 971566088290,
        "email": "nnm22cs002@nmamit.in"
    },
    "Mesha Shetty BM": {
        "image": ASSETS.CORETEAM.MESHA,
        "committee": "Sponsorship",
        "designation": "Head",
        "phone": 9606392848,
        "email": "4nm21ai039@nmamit.in"
    },
    "Cleton Chris Dsouza": {
        "image": ASSETS.CORETEAM.CLETON,
        "committee": "Sponsorship",
        "designation": "Co-Head",
        "phone": 9901823945,
        "email": "nnm22am014@nmamit.in"
    },
    "Satwik R Prabhu": {
        "image": ASSETS.CORETEAM.SATWIK,
        "committee": "Technical",
        "designation": "Head",
        "phone": 9686356123,
        "email": "4nm21cs143@nmamit.in"
    },
    "A Omkar G Prabhu": {
        "image": ASSETS.CORETEAM.OMKAR,
        "committee": "Technical",
        "designation": "Co-Head",
        "phone": 9448846524,
        "email": "nnm22is002@nmamit.in"
    },
    "Adarsh A S": {
        "image": ASSETS.CORETEAM.ADARSH,
        "committee": "Thorana",
        "designation": "Head",
        "phone": 8618977650,
        "email": "nnm22is006@nmamit.in"
    },
    "Janardan S Udupa": {
        "image": ASSETS.CORETEAM.JANARDHAN,
        "committee": "Transport",
        "designation": "Head",
        "phone": 9844380605,
        "email": "nnm22ec068@nmamit.in"
    },
    "P Sandesh Rao": {
        "image": ASSETS.CORETEAM.SANDESH,
        "committee": "Transport",
        "designation": "Co-Head",
        "phone": 7348955875,
        "email": "nnm22cs118@nmamit.in"
    }
};

export { CORE_MEMBERS };
