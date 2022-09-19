// Helper Function
const generatePronoun = (user_list, desired_userId) => {
    const ruler = user_list.find(user => user.id === desired_userId);

    return ruler.royalPronoun;
};

export const DUMMY_USERS = [
    {
      id: "u1",
      name: "Ahuitzotl",
      royalPronoun: "Warrior",
      image:
        "https://imgs.search.brave.com/UbFktvWhzxI5R3ijqPwpjnmA2DPQrjZ9LjBePzFIpiw/rs:fit:610:709:1/g:ce/aHR0cHM6Ly93d3cu/YW5jaWVudC1vcmln/aW5zLm5ldC9zaXRl/cy9kZWZhdWx0L2Zp/bGVzL3N0eWxlcy9s/YXJnZS9wdWJsaWMv/SHVpdHppbG9wb2No/dGxpLmpwZz9pdG9r/PUpEYVlJVGlp",
      places: "1",
    },
    {
      id: "u2",
      name: "Alexander The Great",
      royalPronoun: "Your Majesty",
      image:
        "https://thornsoftime.files.wordpress.com/2014/04/mosaic-depicting-alexander-in-naples.jpg",
      places: "1",
    },
    {
      id: "u3",
      name: "King Suryavarman II",
      royalPronoun: "King",
      image:
        "https://imgs.search.brave.com/n_XqiOIkI2vVoHLKcFTDuPPcPJXWR80ToCBPb2jDCHo/rs:fit:640:427:1/g:ce/aHR0cDovL3MzLmFt/YXpvbmF3cy5jb20v/czMudGltZXRvYXN0/LmNvbS9wdWJsaWMv/dXBsb2Fkcy9waG90/b3MvNjA2MTk4MS9I/aW5kdS1kZWl0eS1i/YXMtcmVsaWVmLWlu/LWFuZ2tvci5qcGc_/MTQ3NzIyMDg0NA",
      places: "1",
    },
    {
      id: "u4",
      name: "Wu Zetian",
      royalPronoun: "Empress",
      image:
        "http://www.chinadaily.com.cn/m/henan/longmen/images/attachement/jpg/site1/20150821/286ed488c7d51740cf2603.jpg",
      places: "1",
    },
  ];

export const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Angkor Wat",
      description:
        "Angkor Wat was built by the Khmer King Suryavarman II in the early 12th century in Yaśodharapura, the capital of the Khmer Empire, as his state temple and eventual mausoleum.",
      imageUrl:
        "https://imgs.search.brave.com/z2IZQu8rxfZRMZi6GNziv6OSRDszQL-vwrapC069utM/rs:fit:1200:802:1/g:ce/aHR0cHM6Ly9jZG4u/YXJzdGVjaG5pY2Eu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzEwL2FuZ2tv/clRPUC5qcGc",
      address: "Krong Siem Reap, Cambodia",
      location: {
        lat: 13.4124693,
        lng: 103.864797,
      },
      creator: "u3",
      creatorPronoun: generatePronoun(DUMMY_USERS, 'u3'),
    },
    {
      id: "p2",
      title: "Tenochtitlan",
      description:
        "The city was built on an island in what was then Lake Texcoco in the Valley of Mexico. The city was the capital of the expanding Aztec Empire in the 15th century until it was captured by the Spanish in 1521. At its peak, it was the largest city in the pre-Columbian Americas.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/El_templo_mayor_en_Tenochtitlan.png/800px-El_templo_mayor_en_Tenochtitlan.png",
      address:
        "Historic center of Mexico City, Centro, Mexico City, CDMX, Mexico",
      location: {
        lat: 19.4337383,
        lng: -99.1454316,
      },
      creator: "u1",
      creatorPronoun: generatePronoun(DUMMY_USERS, 'u1'),
    },
    {
      id: "p3",
      title: "Alexandria",
      description:
        "Alexandria is a port city located on the Mediterranean Sea in northern Egypt founded in 331 BCE by Alexander the Great.",
      imageUrl:
        "https://m.economictimes.com/thumb/msid-68970748,width-1200,height-900,resizemode-4,imgsize-1607403/1.jpg",
      address:
        "Alexandria, Alexandria Governorate, Egypt",
      location: {
        lat: 31.2242387,
        lng: 29.884846,
      },
      creator: "u2",
      creatorPronoun: generatePronoun(DUMMY_USERS, 'u2'),
    },
    {
        id: "p4",
        title: "神都 'Divine Capital'",
        description:
          "The dynasty's capital was Shendu (神都 'Divine Capital', present-day Luoyang). Despite Wu's infamous rise to power, there is evidence that suggests women were granted more privileges during her reign, and China was in a state of great prosperity during her rule.",
        imageUrl:
          "https://www.chinadaily.com.cn/travel/img/attachement/jpg/site1/20170920/b083fe96fb621b2c245b22.jpg",
        address:
          "Luoyang, Henan, China",
        location: {
          lat: 34.6556711,
          lng: 112.3077286,
        },
        creator: "u4",
        creatorPronoun: generatePronoun(DUMMY_USERS, 'u4'),
      },
  ];
  