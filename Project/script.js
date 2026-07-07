/* ============================================================================
   SafeAlert - Zamfara State Community Safety Portal Script File
   ============================================================================ */

// System Translations Object (Direct parity with React)
const translations = {
  en: {
    brand: "SafeAlert",
    tagline: "Zamfara State Community Safety Portal",
    navHome: "Home",
    navContacts: "Emergency Contacts",
    navMap: "Interactive Map",
    navReport: "Report Incident",
    navTips: "Safety Tips",
    navAbout: "About & Objectives",
    heroTitle: "Emergency Coordination & Community Protection",
    heroSubtitle: "A unified safety portal connecting the citizens of Zamfara State with verified security, medical, and disaster relief agencies. Empowering local response and supporting United Nations SDG 16.",
    heroBtnReport: "Report Secure Incident",
    heroBtnContacts: "Emergency Directory",
    heroEmergencyNotice: "In immediate life-threatening situations, please dial 112 or contact the respective agency directly.",
    searchPlaceholder: "Search agencies by name, category, website, phone...",
    categoryAll: "All Services",
    categorySecurity: "Security & Defence",
    categoryDisaster: "Disaster & Fire",
    categoryMedical: "Medical & Health",
    contactsTitle: "Verified Emergency Directory",
    contactsSubtitle: "Direct communication channels to all major official emergency response agencies operating in Zamfara State.",
    agencyHours: "Available hours",
    agencyAlways: "24/7 Emergency Service",
    btnCall: "Call Now",
    btnWebsite: "Visit Website",
    statusAvailable: "Available",
    statusHighTraffic: "High Traffic",
    statusOffline: "Offline",
    currentLocalTime: "Current Local Time",
    formTitle: "Secure Incident Reporter",
    formSubtitle: "Securely submit incident details to first responder coordinates. This system is structured for future CRM and emergency response dispatch integration.",
    formName: "Reporter's Full Name",
    formPhone: "Active Phone Number",
    formType: "Incident Classification",
    formTypePlaceholder: "Select classification...",
    formLocation: "Location / LGA in Zamfara State",
    formLocationPlaceholder: "e.g., Gusau, Kaura Namoda, Maru, Talata Mafara...",
    formDate: "Incident Date & Time",
    formDesc: "Detailed Description of Incident",
    formDescPlaceholder: "Provide a clear description of what is happening, casualties (if any), and current hazards...",
    btnSubmitForm: "Transmit Emergency Report",
    valName: "Full Name is required for official validation.",
    valPhone: "A valid Nigerian phone number is required.",
    valType: "Please classify the nature of the incident.",
    valLocation: "Please specify the Local Government Area or location.",
    valDate: "Please select the date and approximate time.",
    valDesc: "Please provide a brief description to aid first responders.",
    modalSuccessTitle: "Report Transmitted Successfully!",
    modalSuccessMsg: "Your incident report has been securely registered on the SafeAlert local repository. A system reference ticket has been generated for SIWES simulation.",
    modalTicketId: "TICKET REFERENCE",
    modalNotice: "Notice: This simulation portal is ready for secure deployment with EmailJS or Firebase integrations for live dashboard monitoring.",
    btnCloseModal: "Close Reference",
    tipsTitle: "Community Safety Guidelines",
    tipsSubtitle: "Vital protective guidelines and safety instructions for residents of Zamfara State to prevent accidents and manage crisis.",
    tipSecurityTitle: "Suspicious Activity Reporting",
    tipSecurityDesc: "Maintain high situational awareness. Report unfamiliar groups, unusual vehicles, or suspicious nocturnal gatherings immediately to the Zamfara State Command.",
    tipFireTitle: "Fire Hazard Prevention",
    tipFireDesc: "Avoid overloading home sockets, inspect gas cylinders regularly, and keep basic extinguishing tools (sand buckets or fire extinguishers) accessible.",
    tipFloodTitle: "Rainy Season & Flash Flood Safety",
    tipFloodDesc: "Do not attempt to cross flooded roadways on foot or in vehicles. Ensure local drains are cleared of refuse prior to peak rainy seasons.",
    tipMedicalTitle: "First Aid & Scene Management",
    tipMedicalDesc: "Keep an emergency first aid kit. At accident scenes, first secure the environment from traffic flow before administering assistance or moving casualties.",
    aboutTitle: "About & Sustainable Development Goals",
    aboutSdgTitle: "Sustainable Development Goal 16 (SDG 16)",
    aboutSdgText: "Goal 16: Peace, Justice, and Strong Institutions. SafeAlert directly supports this global initiative by reinforcing public safety frameworks, establishing direct transparent communication lines, empowering citizens to report incidents, and boosting institutional responsiveness and accountability in Zamfara State.",
    aboutObjTitle: "Project Core Objectives",
    obj1: "Optimize emergency communication pathways between the state authorities and citizens.",
    obj2: "Provide fully verified, reliable emergency contacts to prevent misinformation.",
    obj3: "Enhance public safety and security awareness through tailored local safety tips.",
    obj4: "Encourage active community participation and proactive neighborhood reporting.",
    obj5: "Advance United Nations SDG 16 implementation at the sub-national state level.",
    ackTitle: "Institutional Acknowledgement",
    ackBody: "This portal is a final production-grade academic capstone project developed during the Student Industrial Work Experience Scheme (SIWES) Training Programme at the Zamfara Information Technology Development Agency (ZITDA). Under the professional supervision of ZITDA technical mentors, this software was crafted to address the emergency communication requirements of Zamfara State.",
    devTitle: "SIWES Developer Profile",
    devName: "Ismael Bukhary Dankoli",
    devRole: "Computer Science SIWES Student",
    devInstitution: "Zamfara Information Technology Development Agency (ZITDA)",
    devDepartment: "Department of Computer Science",
    devContactSlogan: "Let's connect or discuss production deployments.",
    contactTitle: "Get in Touch",
    contactSubtitle: "For inquiries regarding the SIWES research project, system scalability, or technical review.",
    contactAddress: "Address",
    contactEmail: "Email Support",
    contactHours: "Hours",
    officeAddress: "ZITDA Headquarters, JB Yakubu Street, Gusau, Zamfara State, Nigeria",
    officeEmail: "safealert@zitda.gov.ng",
    officeHours: "Monday - Friday: 08:00 AM - 04:00 PM",
    mapTitle: "Interactive Emergency Operations Map (Gusau)",
    mapSubtitle: "Approximate geographic locations of the 11 verified command and emergency response headquarters in Gusau.",
    mapRecenter: "Recenter on Gusau Center",
    mapSelectPrompt: "Select any coordinate pin on the map to display official agency contact coordinates.",
    mapCategorySecurity: "Security Command Center",
    mapCategoryDisaster: "Disaster / Fire Response HQ",
    mapCategoryMedical: "Medical Emergency Base",
    footDev: "Developed by Ismael Bukhary Dankoli",
    footSiwes: "ZITDA SIWES Training Programme",
    footSdg: "Supporting UN SDG 16 (Peace & Justice)",
    footCopy: "© 2026 SafeAlert Portal. All Rights Reserved."
  },
  ha: {
    brand: "SafeAlert",
    tagline: "Dandalin Tsaron Al'umma na Jihar Zamfara",
    navHome: "Gida",
    navContacts: "Lambobin Gaggawa",
    navMap: "Taswirar Gusau",
    navReport: "Aiko da Rahoto",
    navTips: "Shawarwarin Tsaro",
    navAbout: "Bayani & Manufofi",
    heroTitle: "Hadin Gwiwar Agaji da Kare Al'umma",
    heroSubtitle: "Hanyar sadarwa ta bai-daya da ke haɗa al'ummar Jihar Zamfara da kwararrun jami'an tsaro, jiyya, da agajin gaggawa. Karfafa daukar mataki da tallafawa shirin SDG 16 na Majalisar Dinkin Duniya.",
    heroBtnReport: "Aika Rahoton Gaggawa",
    heroBtnContacts: "Lambobin Jami'ai",
    heroEmergencyNotice: "Idan akwai haɗari na gaggawa ga rayuwa, a kira 112 ko a tuntuɓi jami'ai kai tsaye.",
    searchPlaceholder: "Nemi jami'ai ta suna, nau'i, shafi, ko waya...",
    categoryAll: "Duk Jami'o'i",
    categorySecurity: "Tsaro da Kariya",
    categoryDisaster: "Gobara da Agaji",
    categoryMedical: "Lafiya da Asibiti",
    contactsTitle: "Tabbatattun Lambobin Gaggawa",
    contactsSubtitle: "Hanyar sadarwa ta kai-tsaye tare da dukkan manyan hukumomin agaji da ke aiki a Jihar Zamfara.",
    agencyHours: "Lokutan Aiki",
    agencyAlways: "Kullum Awanni 24 (Gaggawa)",
    btnCall: "Kira Yanzu",
    btnWebsite: "Ziyarci Shafi",
    statusAvailable: "A shirye",
    statusHighTraffic: "Kira Da Yawa",
    statusOffline: "A Rufe",
    currentLocalTime: "Lokacin Yanzu",
    formTitle: "Fom na Rahoton Gaggawa",
    formSubtitle: "Aika cikakken rahoton abin da ya faru cikin sirri ga jami'an agaji. An tsara wannan fom don haɗawa da tsarin kula da gaggawa a nan gaba.",
    formName: "Cikakken Sunan Mai Rahoto",
    formPhone: "Lambar Waya Mai Aiki",
    formType: "Rukunin Lamarin da Ya Faru",
    formTypePlaceholder: "Zaɓi rukunin lamari...",
    formLocation: "Wuri / Ƙaramar Hukuma a Zamfara",
    formLocationPlaceholder: "Kamar Gusau, Kaura Namoda, Maru, Talata Mafara...",
    formDate: "Kwanan Wata da Lokacin Lamari",
    formDesc: "Cikakken Bayanin Abin da Ya Faru",
    formDescPlaceholder: "Ba da bayani dalla-dalla na abin da ke faruwa, mutanen da abin ya shafa, da haɗarin da ke akwai...",
    btnSubmitForm: "Aika Rahoto Cikin Tsaro",
    valName: "Ana buƙatar Cikakken Suna don tabbatar da rahoton.",
    valPhone: "Ana buƙatar ingantacciyar lambar wayar Najeriya.",
    valType: "Da fatan za a zaɓi nau'in lamarin da ya faru.",
    valLocation: "Da fatan za a bayyana Ƙaramar Hukuma ko wurin da abin ya faru.",
    valDate: "Ana buƙatar ranar da lokacin da abin ya faru.",
    valDesc: "Da fatan za a ba da ɗan takaitaccen bayani don taimakawa jami'an agaji.",
    modalSuccessTitle: "An Aika Rahoto Cikin Nasara!",
    modalSuccessMsg: "An yi nasarar rijistar rahotonku a dandalin SafeAlert. An samar da lambar shaida ta musamman don tsarin SIWES.",
    modalTicketId: "LAMBAR SHADA",
    modalNotice: "Sanarwa: An tsara wannan dandalin gwaji don haɗawa cikin sauƙi da EmailJS ko Firebase don bibiyar rahoton kai-tsaye.",
    btnCloseModal: "Rufe",
    tipsTitle: "Hanyoyin Kariya da Tsaro",
    tipsSubtitle: "Muhimman shawarwari da hanyoyin kariya ga mazauna Jihar Zamfara domin guje wa haɗari da kiyaye tsaro.",
    tipSecurityTitle: "Rahoton Harkokin Tsaro",
    tipSecurityDesc: "Kula da abubuwan da ke faruwa a kusa da ku. Bayar da rahoton mutanen da ba a sani ba ko zirga-zirgar dare da wuri ga jami'an tsaro na kusa.",
    tipFireTitle: "Kariya Daga Gobara",
    tipFireDesc: "Guji ɗora kayan wuta da yawa a kan madaidaiciya guda ɗaya, duba gas ɗin dafa abinci akai-akai, kina ajiye yashi ko na'urar kashe gobara kusa.",
    tipFloodTitle: "Tsharon Ambaliyar Ruwa",
    tipFloodDesc: "Kada ku yi kokarin tsallake hanyoyin da ruwa ya mamaye. Tabbatar an share magudanan ruwa na unguwa kafin lokacin damina ya yi nisa.",
    tipMedicalTitle: "Agajin Gaggawa na Farko",
    tipMedicalDesc: "Ajiye akwatin magungunan gaggawa. A wurin da hatsari ya faru, tabbatar da kiyaye lafiyar wurin tukunna kafin bayar da taimako ga wadanda suka ji rauni.",
    aboutTitle: "Bayani Game da Burin SDG 16",
    aboutSdgTitle: "Burin Ci Gaba Mai Dorewa na 16 (SDG 16)",
    aboutSdgText: "Burin 16: Zaman Lafiya, Adalci, da Kakkarfan Hukumomi. Dandalin SafeAlert yana tallafawa wannan yunkuri ta hannun tsarin tsaron jama'a, samar da hanyoyin sadarwa na gari na gaskiya, ba da dama ga 'yan kasa su aiko da rahotanni, da inganta gaskiya da rikon amana a Jihar Zamfara.",
    aboutObjTitle: "Babban Manufofin Wannan Aiki",
    obj1: "Inganta hanyoyin sadarwar gaggawa tsakanin hukumomin jiha da talakawa.",
    obj2: "Samar da ingantattun lambobin gaggawa don magance labaran bogi.",
    obj3: "Habaka fahimtar al'umma kan matakan kariya da tsaro na gida.",
    obj4: "Karfafa gwiwar al'umma wajen ba da gudunmawa da rahotannin unguwa.",
    obj5: "Ciyar da aiwatar da Burin SDG 16 na Majalisar Dinkin Duniya gaba a matakin jiha.",
    ackTitle: "Godiya ta Musamman ga Hukuma",
    ackBody: "An samar da wannan dandalin ne a matsayin babban aikin kammala karatu lokacin Shirin Horar da Dalibai na SIWES a Hukumar Bunkasa Fasahar Sadarwa ta Jihar Zamfara (ZITDA). A karkashin kulawa da jagorancin kwararrun masana na ZITDA, an tsara dandalin don cike gurbi a hanyoyin sadarwar tsaro da lafiya a Jihar Zamfara.",
    devTitle: "Bayanan Injiniya (SIWES)",
    devName: "Ismael Bukhary Dankoli",
    devRole: "Dalibin Kimiyyar Kwamfuta (SIWES)",
    devInstitution: "Hukumar Bunkasa Fasahar Sadarwa ta Jihar Zamfara (ZITDA)",
    devDepartment: "Sashen Kimiyyar Kwamfuta",
    devContactSlogan: "Hadu mu tattauna ko hada gwiwa don bunkasa wannan shiri.",
    contactTitle: "Suntuntube Mu",
    contactSubtitle: "Domin karin bayani dangane da wannan aiki na SIWES, bunkasa shi, ko duba tsarin fasahar sa.",
    contactAddress: "Wuri",
    contactEmail: "Imel",
    contactHours: "Lokutan Aiki",
    officeAddress: "Babban Ofishin ZITDA, JB Yakubu Street, Gusau, Jihar Zamfara, Najeriya",
    officeEmail: "safealert@zitda.gov.ng",
    officeHours: "Litinin - Jumma'a: 08:00 na safe zuwa 04:00 na yamma",
    mapTitle: "Taswirar Hedikwatar Gaggawa (Gusau)",
    mapSubtitle: "Kimanin wuraren da babban ofisoshin guda 11 na agajin gaggawa da tsaro suke a Gusau.",
    mapRecenter: "Koma Tsakiyar Gusau",
    mapSelectPrompt: "Zabi kowane alama a taswira don nuna cikakken bayanan ofishin.",
    mapCategorySecurity: "Ofishin Hedikwatar Tsaro",
    mapCategoryDisaster: "Ofishin Gobara / Agaji",
    mapCategoryMedical: "Wurin Agajin Lafiya",
    footDev: "Ismael Bukhary Dankoli ya inganta",
    footSiwes: "Shirin Horar da Dalibai na ZITDA SIWES",
    footSdg: "Tallafawa Burin SDG 16 (Zaman Lafiya & Adalci)",
    footCopy: "© 2026 SafeAlert Portal. Hakki na Mallaka."
  }
};

// System Verification Database (Exact same 11 agencies)
const agenciesData = [
  {
    id: "npf-zamfara",
    nameEn: "Nigeria Police Force (Zamfara Command)",
    nameHa: "Rundunar 'Yan Sandan Najeriya (Rundunar Zamfara)",
    category: "Security",
    phones: ["08035891350", "08106583120"],
    email: "presszamfara@gmail.com",
    addressEn: "State Command Headquarters, JB Yakubu Street, Gusau, Zamfara State",
    addressHa: "Babban Ofishin Runduna, JB Yakubu Street, Gusau, Jihar Zamfara",
    website: "https://www.npf.gov.ng",
    hoursEn: "24/7 Emergency Response",
    hoursHa: "Kullum Awanni 24 (A Shirye)",
    badgeColor: "bg-blue-600",
    coordinates: [12.1685, 6.6620]
  },
  {
    id: "nscdc-zamfara",
    nameEn: "Nigeria Security and Civil Defence Corps (NSCDC)",
    nameHa: "Hukumar Tsaro da Kariya ta Farar Hula (NSCDC Zamfara)",
    category: "Security",
    phones: ["08035172429"],
    email: "info@nscdc.gov.ng",
    addressEn: "NSCDC State Command Headquarters, Bye-Pass Road, Gusau, Zamfara State",
    addressHa: "Babban Ofishin NSCDC, Bye-Pass Road, Gusau, Jihar Zamfara",
    website: "https://www.nscdc.gov.ng",
    hoursEn: "24/7 Emergency Patrol",
    hoursHa: "Kullum Awanni 24 na Gaggawa",
    badgeColor: "bg-slate-700",
    coordinates: [12.1550, 6.6740]
  },
  {
    id: "zasema",
    nameEn: "Zamfara State Emergency Management Agency (ZASEMA)",
    nameHa: "Hukumar Ba da Agajin Gaggawa ta Jihar Zamfara (ZASEMA)",
    category: "Disaster",
    phones: ["08036974776", "08069555193"],
    email: "info@zasema.zm.gov.ng",
    addressEn: "ZASEMA Headquarters, Canteen Area, Gusau, Zamfara State",
    addressHa: "Babban Ofishin ZASEMA, Canteen Area, Gusau, Jihar Zamfara",
    website: "https://zamfara.gov.ng",
    hoursEn: "24/7 Disaster Response",
    hoursHa: "Kullum Awanni 24 na Agaji",
    badgeColor: "bg-emerald-600",
    coordinates: [12.1605, 6.6610]
  },
  {
    id: "nema-northwest",
    nameEn: "National Emergency Management Agency (NEMA)",
    nameHa: "Hukumar Ba da Agajin Gaggawa ta Ƙasa (NEMA)",
    category: "Disaster",
    phones: ["08032003555", "112"],
    email: "info@nema.gov.ng",
    addressEn: "NEMA Northwest Zonal Operations Office (Serving Zamfara State)",
    addressHa: "Ofishin NEMA na Shiyyar Arewa Maso Yamma (Mai Kula da Zamfara)",
    website: "https://nema.gov.ng",
    hoursEn: "24/7 Disaster Management",
    hoursHa: "Kullum Awanni 24 (Gudanar da Agaji)",
    badgeColor: "bg-amber-600",
    coordinates: [12.1720, 6.6450]
  },
  {
    id: "frsc-zamfara",
    nameEn: "Federal Road Safety Corps (Zamfara RS10.2)",
    nameHa: "Hukumar Kula da Tsaron Hanyoyi ta Ƙasa (FRSC Zamfara)",
    category: "Disaster",
    phones: ["122", "08077691020"],
    email: "info@frsc.gov.ng",
    addressEn: "FRSC Sector Command, JB Yakubu Street, Gusau, Zamfara State",
    addressHa: "Ofishin FRSC na Jihar Zamfara, JB Yakubu Street, Gusau",
    website: "https://frsc.gov.ng",
    hoursEn: "24/7 Road Crash Response",
    hoursHa: "Awanni 24 na Agajin Hatsari",
    badgeColor: "bg-orange-600",
    coordinates: [12.1670, 6.6640]
  },
  {
    id: "fedfire-zamfara",
    nameEn: "Federal Fire Service (Zamfara Command)",
    nameHa: "Hukumar Kashe Gobara ta Ƙasa (Rundunar Zamfara)",
    category: "Disaster",
    phones: ["09062957591", "112"],
    email: "info@fedfire.gov.ng",
    addressEn: "Federal Fire Service Command, Secretariat Road, Gusau, Zamfara State",
    addressHa: "Rundunar Hukumar Gobara, Secretariat Road, Gusau, Jihar Zamfara",
    website: "https://fedfire.gov.ng",
    hoursEn: "24/7 Fire & Rescue Dispatch",
    hoursHa: "Kullum Awanni 24 (Kariyar Gobara)",
    badgeColor: "bg-red-600",
    coordinates: [12.1510, 6.6580]
  },
  {
    id: "nigerian-army-zamfara",
    nameEn: "Nigerian Army (1 Brigade, Gusau)",
    nameHa: "Rundunar Sojin Ƙasa ta Najeriya (Birged ta 1, Gusau)",
    category: "Security",
    phones: ["193", "08000022288"],
    email: "info@army.mil.ng",
    addressEn: "1 Brigade Headquarters, Gusau Military Cantonment, Zamfara State",
    addressHa: "Babban Ofishin Sojoji na Birged ta 1, Barikin Soja, Gusau",
    website: "https://www.army.mil.ng",
    hoursEn: "24/7 Military Patrol & Defence",
    hoursHa: "Kullum Awanni 24 na Tsaro da Kariya",
    badgeColor: "bg-green-700",
    coordinates: [12.1820, 6.6850]
  },
  {
    id: "dss-zamfara",
    nameEn: "Department of State Services (DSS Zamfara)",
    nameHa: "Hukumar Tsaro ta Farin Kaya (DSS Zamfara)",
    category: "Security",
    phones: ["09038283595"],
    email: "dss@dss.gov.ng",
    addressEn: "DSS State Command Headquarters, Gusau, Zamfara State",
    addressHa: "Babban Ofishin DSS, Gusau, Jihar Zamfara",
    website: "https://dss.gov.ng",
    hoursEn: "24/7 National Security & Intelligence",
    hoursHa: "Kullum Awanni 24 na Bayanan Tsaro",
    badgeColor: "bg-slate-900",
    coordinates: [12.1480, 6.6690]
  },
  {
    id: "redcross-zamfara",
    nameEn: "Nigerian Red Cross Society (Zamfara Branch)",
    nameHa: "Kungiyar Red Cross ta Najeriya (Rundunar Zamfara)",
    category: "Medical",
    phones: ["08036230622"],
    email: "info@redcrossnigeria.org",
    addressEn: "Red Cross Office, Canteen Area, Gusau, Zamfara State",
    addressHa: "Ofishin Red Cross, Canteen Area, Gusau, Jihar Zamfara",
    website: "https://www.redcrossnigeria.org",
    hoursEn: "08:00 AM - 05:00 PM (Emergency 24/7)",
    hoursHa: "08:00 Na Safe - 05:00 Na Yamma (Agaji 24/7)",
    badgeColor: "bg-red-500",
    coordinates: [12.1595, 6.6595]
  },
  {
    id: "fmc-gusau",
    nameEn: "Federal Medical Centre Gusau (FMC)",
    nameHa: "Babban Asibitin Tarayya da ke Gusau (FMC)",
    category: "Medical",
    phones: ["08035174315", "08064972983"],
    email: "info@fmcgusau.gov.ng",
    addressEn: "FMC Gusau, Zaria Road, Gusau, Zamfara State",
    addressHa: "FMC Gusau, Zaria Road, Gusau, Jihar Zamfara",
    website: "https://fmcgusau.gov.ng",
    hoursEn: "24/7 Accident & Emergency Unit",
    hoursHa: "Kullum Awanni 24 (Hatsari & Gaggawa)",
    badgeColor: "bg-teal-600",
    coordinates: [12.1420, 6.6890]
  },
  {
    id: "moh-zamfara",
    nameEn: "Zamfara State Ministry of Health",
    nameHa: "Ma'aikatar Lafiya ta Jihar Zamfara",
    category: "Medical",
    phones: ["08035983277", "08169408660"],
    email: "info@moh.zm.gov.ng",
    addressEn: "State Secretariat Complex, Block B, Gusau, Zamfara State",
    addressHa: "Sakatariyar Jiha, Sashe na B, Gusau, Jihar Zamfara",
    website: "https://zamfara.gov.ng",
    hoursEn: "Monday - Friday: 08:00 AM - 04:00 PM",
    hoursHa: "Litinin - Jumma'a: 08:00 Safe - 04:00 Yamma",
    badgeColor: "bg-cyan-600",
    coordinates: [12.1530, 6.6565]
  }
];

// Global states
let currentLang = 'en';
let activeFilter = 'All';
let map = null;
let mapMarkers = {};

// ==========================================
// REAL-TIME OPERATIONAL STATUS CALCULATOR
// ==========================================
function getAgencyStatus(agencyId, currentTime) {
  const day = currentTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hour = currentTime.getHours();

  if (agencyId === "moh-zamfara") {
    // Ministry of Health: Monday - Friday: 08:00 AM - 04:00 PM
    const isWeekday = day >= 1 && day <= 5;
    const isWorkingHours = hour >= 8 && hour < 16;
    if (!isWeekday || !isWorkingHours) {
      return {
        status: "Offline",
        labelEn: "Offline",
        labelHa: "A Rufe",
        colorClass: "bg-slate-100 border-slate-200 text-slate-500",
        dotClass: "bg-slate-400"
      };
    }
  }

  // Generate a deterministic but dynamic status for other agencies to simulate "High Traffic"
  const idHash = agencyId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  if ((hour + idHash) % 4 === 0) {
    return {
      status: "High Traffic",
      labelEn: "High Traffic",
      labelHa: "Kira Da Yawa",
      colorClass: "bg-amber-50 border-amber-200 text-amber-700",
      dotClass: "bg-amber-500 animate-pulse"
    };
  }

  return {
    status: "Available",
    labelEn: "Available",
    labelHa: "A shirye",
    colorClass: "bg-emerald-50 border-emerald-200 text-emerald-700",
    dotClass: "bg-emerald-500 animate-pulse"
  };
}

// Initialize application
window.addEventListener('DOMContentLoaded', () => {
  updateSystemDateTime();
  setInterval(updateSystemDateTime, 1000);
  
  // Render Initial State
  renderAgencies();
  initLeafletMap();
  renderMapSidebar();
  applyLanguage(currentLang);
});

// Real-time UTC Timestamp Clock for Gusau simulation with active date string
function updateSystemDateTime() {
  const options = { 
    timeZone: 'Africa/Lagos', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: false 
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const now = new Date();
  const lagosTime = formatter.format(now);
  
  const daysEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const daysHa = ["Lahadi", "Litinin", "Talata", "Laraba", "Alhamis", "Jumma'a", "Asabar"];
  
  const dayName = currentLang === "en" ? daysEn[now.getDay()] : daysHa[now.getDay()];
  
  document.getElementById('live-time').innerText = `${dayName}, ${lagosTime} WAT`;
}

// Toggle Language
function toggleLanguage() {
  currentLang = (currentLang === 'en') ? 'ha' : 'en';
  document.getElementById('lang-label').innerText = (currentLang === 'en') ? 'Hausa' : 'English';
  applyLanguage(currentLang);
  renderAgencies();
  renderMapSidebar();
  updateSystemDateTime();
  
  // Update map popups for updated language
  initLeafletMap();
}

// Toggle Mobile Menu Navigation
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-menu');
  drawer.classList.toggle('hidden');
}

// Apply translations directly to translation keys
function applyLanguage(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  
  // Update element tags
  const elementsWithKeys = document.querySelectorAll('[data-key]');
  elementsWithKeys.forEach(el => {
    const key = el.getAttribute('data-key');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  // Update placeholders
  const placeholders = document.querySelectorAll('[data-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });
}

// Filter by Category Selection
function filterCategory(category) {
  activeFilter = category;
  const categories = ['All', 'Security', 'Disaster', 'Medical'];
  
  categories.forEach(cat => {
    const btn = document.getElementById(`tab-${cat}`);
    if (cat === category) {
      btn.className = "px-4 py-2.5 rounded-xl text-xs font-bold transition-all bg-emerald-600 text-white shadow-md shadow-emerald-100 cursor-pointer";
    } else {
      btn.className = "px-4 py-2.5 rounded-xl text-xs font-bold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer";
    }
  });

  renderAgencies();
}

// Search query monitoring
function handleSearch() {
  renderAgencies();
}

// Render Agency Cards dynamically with Search, Filters, and Real-time Status Indicators
function renderAgencies() {
  const grid = document.getElementById('agencies-grid');
  const searchVal = document.getElementById('search-input').value.toLowerCase();
  const dict = translations[currentLang];
  const now = new Date();
  
  let filtered = agenciesData.filter(agency => {
    const matchesCategory = (activeFilter === 'All' || agency.category === activeFilter);
    
    const name = (currentLang === 'en' ? agency.nameEn : agency.nameHa).toLowerCase();
    const address = (currentLang === 'en' ? agency.addressEn : agency.addressHa).toLowerCase();
    const phones = agency.phones.join(' ').toLowerCase();
    const category = agency.category.toLowerCase();
    
    const matchesSearch = name.includes(searchVal) || 
                          address.includes(searchVal) || 
                          phones.includes(searchVal) || 
                          category.includes(searchVal);
                          
    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400 font-medium text-sm">
        ${currentLang === 'en' ? 'No agencies match your search criteria.' : 'Babu jami’ar da ta dace da bincikenku.'}
      </div>
    `;
    return;
  }

  filtered.forEach(agency => {
    const name = currentLang === 'en' ? agency.nameEn : agency.nameHa;
    const address = currentLang === 'en' ? agency.addressEn : agency.addressHa;
    const hours = currentLang === 'en' ? agency.hoursEn : agency.hoursHa;
    const mainPhone = agency.phones[0];
    
    // Get real-time status
    const statusInfo = getAgencyStatus(agency.id, now);

    const card = document.createElement('div');
    card.className = "flex flex-col bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition duration-300";
    card.innerHTML = `
      <div class="flex items-start justify-between gap-4 mb-4">
        <div class="flex items-center gap-2">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-800">
            <svg class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.746 3.746 0 0113 3a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
          <button onclick="handleViewOnMap('${agency.id}')" class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 transition active:scale-95 cursor-pointer">
            <svg class="h-3.5 w-3.5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>${currentLang === 'en' ? 'Map' : 'Taswira'}</span>
          </button>
        </div>
        <div class="flex flex-col items-end gap-1.5 shrink-0">
          <span class="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-white ${agency.badgeColor}">
            ${currentLang === 'en' ? agency.category : (agency.category === 'Security' ? 'Tsaro' : agency.category === 'Disaster' ? 'Agaji' : 'Lafiya')}
          </span>
          <!-- Real-time Status Badge -->
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase border ${statusInfo.colorClass}">
            <span class="h-1.5 w-1.5 rounded-full ${statusInfo.dotClass}"></span>
            <span>${currentLang === 'en' ? statusInfo.labelEn : statusInfo.labelHa}</span>
          </span>
        </div>
      </div>

      <div class="flex-grow space-y-2 mb-6">
        <h3 class="text-sm font-black text-slate-900 leading-tight">${name}</h3>
        <p class="text-xs text-slate-500 leading-relaxed">${address}</p>
        
        <div class="flex items-center gap-1.5 text-xs text-slate-500 pt-1 border-t border-slate-50 mt-2">
          <svg class="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>${dict.agencyHours}: <strong class="text-slate-700 font-medium">${hours}</strong></span>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <a href="tel:${mainPhone}" class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-100 transition duration-200 active:scale-95 text-center">
          <svg class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.144-4.122-6.945-6.945l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.11-1.008H4.5a2.25 2.25 0 00-2.25 2.25v1.352z" />
          </svg>
          ${dict.btnCall}
        </a>
        <a href="${agency.website}" target="_blank" class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 transition duration-200 active:scale-95 text-center">
          <svg class="h-4 w-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          ${dict.btnWebsite}
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Leaflet map creation helper & markers config
function initLeafletMap() {
  const gusauCenter = [12.1628, 6.6614];
  
  if (map) {
    map.remove();
  }

  map = L.map('leaflet-map', {
    scrollWheelZoom: false,
    attributionControl: true
  }).setView(gusauCenter, 13.5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const now = new Date();

  // Create Markers
  agenciesData.forEach(agency => {
    let colorClass = "bg-blue-600 border-blue-500 text-blue-100";
    if (agency.category === "Disaster") colorClass = "bg-orange-600 border-orange-500 text-orange-100";
    if (agency.category === "Medical") colorClass = "bg-teal-600 border-teal-500 text-teal-100";

    const customIcon = L.divIcon({
      html: `<div class="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white shadow-lg ${colorClass}"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z"/></svg></div>`,
      className: "custom-leaflet-marker",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    const statusInfo = getAgencyStatus(agency.id, now);

    const popupContent = `
      <div class="p-2.5 max-w-[250px] font-sans">
        <div class="flex items-center gap-1.5 flex-wrap mb-1.5">
          <span class="inline-block px-1.5 py-0.5 rounded text-[8px] font-black uppercase text-white ${
            agency.category === 'Security' ? 'bg-blue-600' : (agency.category === 'Disaster' ? 'bg-orange-600' : 'bg-teal-600')
          }">
            ${currentLang === 'en' ? agency.category : (agency.category === 'Security' ? 'Tsaro' : agency.category === 'Disaster' ? 'Agaji' : 'Lafiya')}
          </span>
          <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[8px] font-extrabold uppercase border ${statusInfo.colorClass}">
            <span class="h-1.5 w-1.5 rounded-full ${statusInfo.dotClass}"></span>
            <span>${currentLang === 'en' ? statusInfo.labelEn : statusInfo.labelHa}</span>
          </span>
        </div>
        <h4 class="text-xs font-extrabold text-slate-900 leading-tight mb-1">${currentLang === 'en' ? agency.nameEn : agency.nameHa}</h4>
        <p class="text-[10px] text-slate-500 leading-relaxed mb-2">${currentLang === 'en' ? agency.addressEn : agency.addressHa}</p>
        <div class="space-y-1 pt-1.5 border-t border-slate-100">
          <span class="text-[8px] text-slate-400 font-extrabold uppercase block tracking-wider">${currentLang === 'en' ? 'Hotlines' : 'Lambobin Waya'}</span>
          ${agency.phones.map(p => `<a href="tel:${p}" class="text-[11px] font-black text-emerald-600 hover:underline block font-mono">${p}</a>`).join('')}
        </div>
      </div>
    `;

    const marker = L.marker(agency.coordinates, { icon: customIcon })
      .bindPopup(popupContent)
      .addTo(map);

    mapMarkers[agency.id] = marker;
  });
}

// Render Map Sidebar Selector Buttons with both Category dots & Live Status dots
function renderMapSidebar() {
  const sidebarContainer = document.getElementById('map-sidebar-list');
  sidebarContainer.innerHTML = "";
  const now = new Date();

  agenciesData.forEach(agency => {
    const name = currentLang === 'en' ? agency.nameEn : agency.nameHa;
    const address = currentLang === 'en' ? agency.addressEn : agency.addressHa;
    const isSecurity = agency.category === 'Security';
    const isDisaster = agency.category === 'Disaster';
    
    let markerDotColor = 'bg-teal-500';
    if (isSecurity) markerDotColor = 'bg-blue-500';
    if (isDisaster) markerDotColor = 'bg-orange-500';

    const statusInfo = getAgencyStatus(agency.id, now);

    const btn = document.createElement('button');
    btn.id = `map-side-${agency.id}`;
    btn.className = "w-full text-left p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition flex flex-col gap-1 cursor-pointer";
    btn.onclick = () => focusMapOnAgency(agency.id);
    btn.innerHTML = `
      <div class="flex items-center justify-between gap-2">
        <span class="text-xs font-extrabold truncate">${name}</span>
        <div class="flex items-center gap-1.5 shrink-0">
          <span class="shrink-0 w-2 h-2 rounded-full ${markerDotColor}" title="${agency.category}"></span>
          <span class="shrink-0 w-2 h-2 rounded-full ${
            statusInfo.status === "Available" ? "bg-emerald-500 animate-pulse" :
            statusInfo.status === "High Traffic" ? "bg-amber-500 animate-pulse" : "bg-slate-400"
          }" title="${currentLang === 'en' ? statusInfo.labelEn : statusInfo.labelHa}"></span>
        </div>
      </div>
      <span class="text-[10px] text-slate-500 truncate">${address}</span>
    `;

    sidebarContainer.appendChild(btn);
  });
}

// Scroll and focus Leaflet view on click
function handleViewOnMap(id) {
  focusMapOnAgency(id);
  const target = document.getElementById("map-section");
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Center and open Leaflet popup
function focusMapOnAgency(id) {
  const agency = agenciesData.find(a => a.id === id);
  if (!agency) return;

  // Update sidebar buttons active style
  agenciesData.forEach(a => {
    const sideBtn = document.getElementById(`map-side-${a.id}`);
    if (sideBtn) {
      if (a.id === id) {
        sideBtn.className = "w-full text-left p-3 rounded-xl border border-slate-900 bg-slate-900 text-white shadow-md flex flex-col gap-1 cursor-pointer";
      } else {
        sideBtn.className = "w-full text-left p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition flex flex-col gap-1 cursor-pointer";
      }
    }
  });

  // Update map view
  if (map) {
    map.setView(agency.coordinates, 15.5);
    if (mapMarkers[id]) {
      mapMarkers[id].openPopup();
    }
  }
}

// Recenter map back to initial state
function recenterMap() {
  const gusauCenter = [12.1628, 6.6614];
  if (map) {
    map.setView(gusauCenter, 13.5);
  }
  
  // Clear sidebar highlights
  agenciesData.forEach(a => {
    const sideBtn = document.getElementById(`map-side-${a.id}`);
    if (sideBtn) {
      sideBtn.className = "w-full text-left p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition flex flex-col gap-1 cursor-pointer";
    }
  });
}

// ==========================================
// SECURE FORM VALIDATION & SUCCESS HANDLERS
// ==========================================
function submitIncident(event) {
  event.preventDefault();

  // Inputs
  const nameInp = document.getElementById('reporter-name');
  const phoneInp = document.getElementById('reporter-phone');
  const typeInp = document.getElementById('incident-type');
  const locInp = document.getElementById('incident-location');
  const dateInp = document.getElementById('incident-date');
  const descInp = document.getElementById('incident-desc');

  // Errors Displays
  const errName = document.getElementById('err-name');
  const errPhone = document.getElementById('err-phone');
  const errType = document.getElementById('err-type');
  const errLoc = document.getElementById('err-location');
  const errDate = document.getElementById('err-date');
  const errDesc = document.getElementById('err-desc');

  let isValid = true;
  const dict = translations[currentLang];

  // Clean displays
  const allErrs = [errName, errPhone, errType, errLoc, errDate, errDesc];
  allErrs.forEach(err => {
    if (err) {
      err.innerText = "";
      err.classList.add('hidden');
    }
  });

  // 1. Name Check
  if (!nameInp.value.trim()) {
    errName.innerText = dict.valName;
    errName.classList.remove('hidden');
    isValid = false;
  }

  // 2. Phone Check (Valid Nigerian mobile check)
  const phoneVal = phoneInp.value.trim().replace(/\s+/g, '');
  const nigeriaPhoneRegex = /^(?:\+234|234|0)?[789][01]\d{8}$/;
  if (!phoneVal) {
    errPhone.innerText = dict.valPhone;
    errPhone.classList.remove('hidden');
    isValid = false;
  } else if (!nigeriaPhoneRegex.test(phoneVal)) {
    errPhone.innerText = currentLang === 'en' 
      ? "Please provide a valid Nigerian 11-digit mobile number." 
      : "Da fatan za a shigar da ingantacciyar lambar wayar Najeriya mai lambobi 11.";
    errPhone.classList.remove('hidden');
    isValid = false;
  }

  // 3. Classification Check
  if (!typeInp.value) {
    errType.innerText = dict.valType;
    errType.classList.remove('hidden');
    isValid = false;
  }

  // 4. Location Check
  if (!locInp.value.trim()) {
    errLoc.innerText = dict.valLocation;
    errLoc.classList.remove('hidden');
    isValid = false;
  }

  // 5. Date Check
  if (!dateInp.value) {
    errDate.innerText = dict.valDate;
    errDate.classList.remove('hidden');
    isValid = false;
  }

  // 6. Description Check
  if (!descInp.value.trim()) {
    errDesc.innerText = dict.valDesc;
    errDesc.classList.remove('hidden');
    isValid = false;
  }

  if (!isValid) return;

  // SUCCESS: Generate academic SIWES simulation reference ticket
  const ticketNum = Math.floor(10000 + Math.random() * 90000);
  const classificationPrefix = typeInp.value.substring(0, 3).toUpperCase();
  const ticketId = `SA-${classificationPrefix}-${ticketNum}`;

  // Open Modal with Reference ID
  document.getElementById('ticket-id-display').innerText = ticketId;
  document.getElementById('success-modal').classList.remove('hidden');

  // Clear Form Fields on complete
  document.getElementById('incident-form').reset();
}

// Close Reference Modal
function closeModal() {
  document.getElementById('success-modal').classList.add('hidden');
}
