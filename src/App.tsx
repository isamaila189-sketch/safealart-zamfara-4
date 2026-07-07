import React, { useState, useMemo } from "react";
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Clock, 
  Search, 
  AlertTriangle, 
  Heart, 
  Info, 
  ExternalLink, 
  BookOpen, 
  Users, 
  Flame, 
  Droplets, 
  AlertCircle, 
  CheckCircle, 
  Menu, 
  X, 
  Github, 
  Linkedin,
  Award,
  ChevronRight,
  Send,
  Navigation
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

// ============================================================================
// LOCALIZATION DICTIONARY (English & Hausa)
// ============================================================================
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
    navDeveloper: "Developer",
    
    // Hero Section
    heroTitle: "Emergency Coordination & Community Protection",
    heroSubtitle: "A unified safety portal connecting the citizens of Zamfara State with verified security, medical, and disaster relief agencies. Empowering local response and supporting United Nations SDG 16.",
    heroBtnReport: "Report Secure Incident",
    heroBtnContacts: "Emergency Directory",
    heroEmergencyNotice: "In immediate life-threatening situations, please dial 112 or contact the respective agency directly.",

    // Search and Filters
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
    
    // Report Form Section
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
    
    // Form Validation Messages
    valName: "Full Name is required for official validation.",
    valPhone: "A valid Nigerian phone number is required.",
    valType: "Please classify the nature of the incident.",
    valLocation: "Please specify the Local Government Area or location.",
    valDate: "Please select the date and approximate time.",
    valDesc: "Please provide a brief description to aid first responders.",
    
    // Form Success Modal
    modalSuccessTitle: "Report Transmitted Successfully!",
    modalSuccessMsg: "Your incident report has been securely registered on the SafeAlert local repository. A system reference ticket has been generated for SIWES simulation.",
    modalTicketId: "TICKET REFERENCE",
    modalNotice: "Notice: This simulation portal is ready for secure deployment with EmailJS or Firebase integrations for live dashboard monitoring.",
    btnCloseModal: "Close Reference",

    // Safety Tips Section
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

    // About & Objectives Section
    aboutTitle: "About & Sustainable Development Goals",
    aboutSdgTitle: "Sustainable Development Goal 16 (SDG 16)",
    aboutSdgText: "Goal 16: Peace, Justice, and Strong Institutions. SafeAlert directly supports this global initiative by reinforcing public safety frameworks, establishing direct transparent communication lines, empowering citizens to report incidents, and boosting institutional responsiveness and accountability in Zamfara State.",
    aboutObjTitle: "Project Core Objectives",
    obj1: "Optimize emergency communication pathways between the state authorities and citizens.",
    obj2: "Provide fully verified, reliable emergency contacts to prevent misinformation.",
    obj3: "Enhance public safety and security awareness through tailored local safety tips.",
    obj4: "Encourage active community participation and proactive neighborhood reporting.",
    obj5: "Advance United Nations SDG 16 implementation at the sub-national state level.",

    // Acknowledgements
    ackTitle: "Institutional Acknowledgement",
    ackBody: "This portal is a final production-grade academic capstone project developed during the Student Industrial Work Experience Scheme (SIWES) Training Programme at the Zamfara Information Technology Development Agency (ZITDA). Under the professional supervision of ZITDA technical mentors, this software was crafted to address the emergency communication requirements of Zamfara State.",

    // Developer Recognition
    devTitle: "SIWES Developer Profile",
    devName: "Ismael Bukhary Dankoli",
    devRole: "Computer Science SIWES Student",
    devInstitution: "Zamfara Information Technology Development Agency (ZITDA)",
    devDepartment: "Department of Computer Science",
    devContactSlogan: "Let's connect or discuss production deployments.",
    
    // Contact Us Section
    contactTitle: "Get in Touch",
    contactSubtitle: "For inquiries regarding the SIWES research project, system scalability, or technical review.",
    contactAddress: "Address",
    contactEmail: "Email Support",
    contactHours: "Hours",
    officeAddress: "ZITDA Headquarters, JB Yakubu Street, Gusau, Zamfara State, Nigeria",
    officeEmail: "safealert@zitda.gov.ng",
    officeHours: "Monday - Friday: 08:00 AM - 04:00 PM",

    // Map Section
    mapTitle: "Interactive Emergency Operations Map (Gusau)",
    mapSubtitle: "Approximate geographic locations of the 11 verified command and emergency response headquarters in Gusau.",
    mapRecenter: "Recenter on Gusau Center",
    mapSelectPrompt: "Select any coordinate pin on the map to display official agency contact coordinates.",
    mapCategorySecurity: "Security Command Center",
    mapCategoryDisaster: "Disaster / Fire Response HQ",
    mapCategoryMedical: "Medical Emergency Base",

    // Footer
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
    navDeveloper: "Injiniya",
    
    // Hero Section
    heroTitle: "Hadin Gwiwar Agaji da Kare Al'umma",
    heroSubtitle: "Hanyar sadarwa ta bai-daya da ke haɗa al'ummar Jihar Zamfara da kwararrun jami'an tsaro, jiyya, da agajin gaggawa. Karfafa daukar mataki da tallafawa shirin SDG 16 na Majalisar Dinkin Duniya.",
    heroBtnReport: "Aika Rahoton Gaggawa",
    heroBtnContacts: "Lambobin Jami'ai",
    heroEmergencyNotice: "Idan akwai haɗari na gaggawa ga rayuwa, a kira 112 ko a tuntuɓi jami'ai kai tsaye.",

    // Search and Filters
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
    
    // Report Form Section
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
    
    // Form Validation Messages
    valName: "Ana buƙatar Cikakken Suna don tabbatar da rahoton.",
    valPhone: "Ana buƙatar ingantacciyar lambar wayar Najeriya.",
    valType: "Da fatan za a zaɓi nau'in lamarin da ya faru.",
    valLocation: "Da fatan za a bayyana Ƙaramar Hukuma ko wurin da abin ya faru.",
    valDate: "Ana buƙatar ranar da lokacin da abin ya faru.",
    valDesc: "Da fatan za a ba da ɗan takaitaccen bayani don taimakawa jami'an agaji.",
    
    // Form Success Modal
    modalSuccessTitle: "An Aika Rahoto Cikin Nasara!",
    modalSuccessMsg: "An yi nasarar rijistar rahotonku a dandalin SafeAlert. An samar da lambar shaida ta musamman don tsarin SIWES.",
    modalTicketId: "LAMBAR SHADA",
    modalNotice: "Sanarwa: An tsara wannan dandalin gwaji don haɗawa cikin sauƙi da EmailJS ko Firebase don bibiyar rahoton kai-tsaye.",
    btnCloseModal: "Rufe",

    // Safety Tips Section
    tipsTitle: "Hanyoyin Kariya da Tsaro",
    tipsSubtitle: "Muhimman shawarwari da hanyoyin kariya ga mazauna Jihar Zamfara domin guje wa haɗari da kiyaye tsaro.",
    tipSecurityTitle: "Rahoton Harkokin Tsaro",
    tipSecurityDesc: "Kula da abubuwan da ke faruwa a kusa da ku. Bayar da rahoton mutanen da ba a sani ba ko zirga-zirgar dare da wuri ga jami'an tsaro na kusa.",
    tipFireTitle: "Kariya Daga Gobara",
    tipFireDesc: "Guji ɗora kayan wuta da yawa a kan madaidaiciya guda ɗaya, duba gas ɗin dafa abinci akai-akai, kuma ka ajiye yashi ko na'urar kashe gobara kusa.",
    tipFloodTitle: "Tsharon Ambaliyar Ruwa",
    tipFloodDesc: "Kada ku yi kokarin tsallake hanyoyin da ruwa ya mamaye. Tabbatar an share magudanan ruwa na unguwa kafin lokacin damina ya yi nisa.",
    tipMedicalTitle: "Agajin Gaggawa na Farko",
    tipMedicalDesc: "Ajiye akwatin magungunan gaggawa. A wurin da hatsari ya faru, tabbatar da kiyaye lafiyar wurin tukunna kafin bayar da taimako ga wadanda suka ji rauni.",

    // About & Objectives Section
    aboutTitle: "Bayani Game da Burin SDG 16",
    aboutSdgTitle: "Burin Ci Gaba Mai Dorewa na 16 (SDG 16)",
    aboutSdgText: "Burin 16: Zaman Lafiya, Adalci, da Kakkarfan Hukumomi. Dandalin SafeAlert yana tallafawa wannan yunkuri ta hanyar karfafa tsarin tsaron jama'a, samar da hanyoyin sadarwa na gari na gaskiya, ba da dama ga 'yan kasa su aiko da rahotanni, da inganta gaskiya da rikon amana a Jihar Zamfara.",
    aboutObjTitle: "Babban Manufofin Wannan Aiki",
    obj1: "Inganta hanyoyin sadarwar gaggawa tsakanin hukumomin jiha da talakawa.",
    obj2: "Samar da ingantattun lambobin gaggawa don magance labaran bogi.",
    obj3: "Habaka fahimtar al'umma kan matakan kariya da tsaro na gida.",
    obj4: "Karfafa gwiwar al'umma wajen ba da gudunmawa da rahotannin unguwa.",
    obj5: "Ciyar da aiwatar da Burin SDG 16 na Majalisar Dinkin Duniya gaba a matakin jiha.",

    // Acknowledgements
    ackTitle: "Godiya ta Musamman ga Hukuma",
    ackBody: "An samar da wannan dandalin ne a matsayin babban aikin kammala karatu lokacin Shirin Horar da Dalibai na SIWES a Hukumar Bunkasa Fasahar Sadarwa ta Jihar Zamfara (ZITDA). A karkashin kulawa da jagorancin kwararrun masana na ZITDA, an tsara dandalin don cike gurbi a hanyoyin sadarwar tsaro da lafiya a Jihar Zamfara.",

    // Developer Recognition
    devTitle: "Bayanan Injiniya (SIWES)",
    devName: "Ismael Bukhary Dankoli",
    devRole: "Dalibin Kimiyyar Kwamfuta (SIWES)",
    devInstitution: "Hukumar Bunkasa Fasahar Sadarwa ta Jihar Zamfara (ZITDA)",
    devDepartment: "Sashen Kimiyyar Kwamfuta",
    devContactSlogan: "Hadu mu tattauna ko hada gwiwa don bunkasa wannan shiri.",
    
    // Contact Us Section
    contactTitle: "Suntuntube Mu",
    contactSubtitle: "Domin karin bayani dangane da wannan aiki na SIWES, bunkasa shi, ko duba tsarin fasahar sa.",
    contactAddress: "Wuri",
    contactEmail: "Imel",
    contactHours: "Lokutan Aiki",
    officeAddress: "Babban Ofishin ZITDA, JB Yakubu Street, Gusau, Jihar Zamfara, Najeriya",
    officeEmail: "safealert@zitda.gov.ng",
    officeHours: "Litinin - Jumma'a: 08:00 na safe zuwa 04:00 na yamma",

    // Map Section
    mapTitle: "Taswirar Hedikwatar Gaggawa (Gusau)",
    mapSubtitle: "Kimanin wuraren da babban ofisoshin guda 11 na agajin gaggawa da tsaro suke a Gusau.",
    mapRecenter: "Koma Tsakiyar Gusau",
    mapSelectPrompt: "Zabi kowane alama a taswira don nuna cikakken bayanan ofishin.",
    mapCategorySecurity: "Ofishin Hedikwatar Tsaro",
    mapCategoryDisaster: "Ofishin Gobara / Agaji",
    mapCategoryMedical: "Wurin Agajin Lafiya",

    // Footer
    footDev: "Ismael Bukhary Dankoli ya inganta",
    footSiwes: "Shirin Horar da Dalibai na ZITDA SIWES",
    footSdg: "Tallafawa Burin SDG 16 (Zaman Lafiya & Adalci)",
    footCopy: "© 2026 SafeAlert Portal. Hakki na Mallaka."
  }
};

// ============================================================================
// VERIFIED EMERGENCY AGENCY DATABASE FOR ZAMFARA STATE
// ============================================================================
interface Agency {
  id: string;
  nameEn: string;
  nameHa: string;
  category: "Security" | "Disaster" | "Medical";
  phones: string[];
  email: string;
  addressEn: string;
  addressHa: string;
  website: string;
  hoursEn: string;
  hoursHa: string;
  badgeColor: string;
  coordinates: [number, number];
}

const agenciesData: Agency[] = [
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

// ============================================================================
// REAL-TIME OPERATIONAL STATUS CALCULATOR
// ============================================================================
export interface AgencyStatus {
  status: "Available" | "High Traffic" | "Offline";
  labelEn: string;
  labelHa: string;
  colorClass: string;
  dotClass: string;
}

export function getAgencyStatus(agencyId: string, currentTime: Date): AgencyStatus {
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
  // Let's use the agency ID's character code sum + current hour to shift states beautifully
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

// ============================================================================
// MAP COMPONENT HELPER AND CUSTOM RENDERERS
// ============================================================================
function ChangeMapView({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  React.useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

const createCustomIcon = (category: string) => {
  let colorClass = "bg-blue-600 text-blue-100 border-blue-500";
  if (category === "Disaster") colorClass = "bg-orange-600 text-orange-100 border-orange-500";
  if (category === "Medical") colorClass = "bg-teal-600 text-teal-100 border-teal-500";
  
  return L.divIcon({
    html: `<div class="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white shadow-lg ${colorClass}"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z"/></svg></div>`,
    className: "custom-leaflet-marker",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
};

export default function App() {
  const [lang, setLang] = useState<"en" | "ha">("en");
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = useMemo(() => {
    const daysEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const daysHa = ["Lahadi", "Litinin", "Talata", "Laraba", "Alhamis", "Jumma'a", "Asabar"];
    
    const dayName = lang === "en" ? daysEn[currentTime.getDay()] : daysHa[currentTime.getDay()];
    const timeStr = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    
    return `${dayName}, ${timeStr}`;
  }, [currentTime, lang]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | "Security" | "Disaster" | "Medical">("All");
  
  // Mobile menu control
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Form states
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formType, setFormType] = useState("");
  const [formLocation, setFormLocation] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formDesc, setFormDesc] = useState("");
  
  // Form error messages
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  // Form success modal
  const [successModal, setSuccessModal] = useState<{ isOpen: boolean; ticketId: string } | null>(null);

  // Map control states
  const [selectedMapAgency, setSelectedMapAgency] = useState<Agency | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([12.1628, 6.6614]);
  const [mapZoom, setMapZoom] = useState<number>(13.5);

  const handleViewOnMap = (agency: Agency) => {
    setSelectedMapAgency(agency);
    setMapCenter(agency.coordinates);
    setMapZoom(15.5);
    const mapElement = document.getElementById("map-section");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Active translation helper
  const t = useMemo(() => translations[lang], [lang]);

  // Filter & Search emergency contact list
  const filteredAgencies = useMemo(() => {
    return agenciesData.filter((agency) => {
      // Category match
      const matchesCategory = activeCategory === "All" || agency.category === activeCategory;
      
      // Search query match
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        agency.nameEn.toLowerCase().includes(query) ||
        agency.nameHa.toLowerCase().includes(query) ||
        agency.website.toLowerCase().includes(query) ||
        agency.addressEn.toLowerCase().includes(query) ||
        agency.addressHa.toLowerCase().includes(query) ||
        agency.phones.some(p => p.includes(query)) ||
        agency.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  // Form submission validation & simulated action
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formName.trim()) newErrors.formName = t.valName;
    if (!formPhone.trim() || !/^\+?[0-9\-]{7,15}$/.test(formPhone.trim())) {
      newErrors.formPhone = t.valPhone;
    }
    if (!formType) newErrors.formType = t.valType;
    if (!formLocation.trim()) newErrors.formLocation = t.valLocation;
    if (!formDate) newErrors.formDate = t.valDate;
    if (!formDesc.trim()) newErrors.formDesc = t.valDesc;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Smooth scroll to the first error
      const formElement = document.getElementById("report");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    setErrors({});
    // Generate simulated Ticket Reference
    const randomTicket = `SAFE-${Math.floor(100000 + Math.random() * 900000)}`;
    
    // Set success modal open
    setSuccessModal({
      isOpen: true,
      ticketId: randomTicket
    });

    // Reset Form Fields
    setFormName("");
    setFormPhone("");
    setFormType("");
    setFormLocation("");
    setFormDate("");
    setFormDesc("");
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      setIsMobileMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      
      {/* ==========================================
          TOP NAVIGATION BAR (ACCESSIBILITY & TRANSLATION)
          ========================================== */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md" id="main-navigation">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo / Brand */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-emerald-400 shadow-md">
                <Shield className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                  {t.brand}
                </span>
                <span className="hidden text-[10px] font-semibold tracking-wide text-slate-500 uppercase md:block">
                  {t.tagline}
                </span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex lg:items-center lg:gap-6">
              <a href="#hero" onClick={(e) => handleSmoothScroll(e, "hero")} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {t.navHome}
              </a>
              <a href="#contacts" onClick={(e) => handleSmoothScroll(e, "contacts")} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {t.navContacts}
              </a>
              <a href="#map-section" onClick={(e) => handleSmoothScroll(e, "map-section")} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {t.navMap}
              </a>
              <a href="#report" onClick={(e) => handleSmoothScroll(e, "report")} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {t.navReport}
              </a>
              <a href="#tips" onClick={(e) => handleSmoothScroll(e, "tips")} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {t.navTips}
              </a>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {t.navAbout}
              </a>
              <a href="#contact-us" onClick={(e) => handleSmoothScroll(e, "contact-us")} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {t.contactTitle}
              </a>
              <a href="#developer" onClick={(e) => handleSmoothScroll(e, "developer")} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {t.navDeveloper}
              </a>
            </div>

            {/* Language Switcher Widget */}
            <div className="flex items-center gap-2">
              <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-200" role="group" aria-label="Language switch selection">
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                    lang === "en" 
                      ? "bg-white text-slate-900 shadow-sm" 
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                  aria-label="Switch interface to English language"
                >
                  English
                </button>
                <button
                  onClick={() => setLang("ha")}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                    lang === "ha" 
                      ? "bg-slate-900 text-white shadow-sm" 
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                  aria-label="Koma da yaren Hausa"
                >
                  Hausa
                </button>
              </div>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 lg:hidden"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-slate-200 bg-white lg:hidden"
            >
              <div className="space-y-1 px-4 py-3">
                <a href="#hero" onClick={(e) => handleSmoothScroll(e, "hero")} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">
                  {t.navHome}
                </a>
                <a href="#contacts" onClick={(e) => handleSmoothScroll(e, "contacts")} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">
                  {t.navContacts}
                </a>
                <a href="#map-section" onClick={(e) => handleSmoothScroll(e, "map-section")} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">
                  {t.navMap}
                </a>
                <a href="#report" onClick={(e) => handleSmoothScroll(e, "report")} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">
                  {t.navReport}
                </a>
                <a href="#tips" onClick={(e) => handleSmoothScroll(e, "tips")} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">
                  {t.navTips}
                </a>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">
                  {t.navAbout}
                </a>
                <a href="#contact-us" onClick={(e) => handleSmoothScroll(e, "contact-us")} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">
                  {t.contactTitle}
                </a>
                <a href="#developer" onClick={(e) => handleSmoothScroll(e, "developer")} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">
                  {t.navDeveloper}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ==========================================
          10. HERO SECTION (DARK BLUE OVERLAY, TYPOGRAPHY)
          ========================================== */}
      <section id="hero" className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-32">
        {/* Background Decorative Pattern & Subtle Image Grid */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        {/* Real-time local date context */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Headline and text */}
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-emerald-400">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                SIWES Presentation Project • ZITDA 2026
              </div>
              
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t.heroTitle}
              </h1>
              
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                {t.heroSubtitle}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#report"
                  onClick={(e) => handleSmoothScroll(e, "report")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 active:scale-[0.98]"
                >
                  <AlertTriangle className="h-5 w-5" />
                  {t.heroBtnReport}
                </a>
                <a
                  href="#contacts"
                  onClick={(e) => handleSmoothScroll(e, "contacts")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-6 py-3.5 text-sm font-bold text-slate-200 transition hover:bg-slate-850 hover:text-white"
                >
                  <Phone className="h-5 w-5" />
                  {t.heroBtnContacts}
                </a>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl border border-blue-500/10 bg-blue-500/5 p-4 text-xs text-blue-300/90 max-w-xl">
                <Info className="h-5 w-5 text-blue-400 shrink-0" />
                <p>{t.heroEmergencyNotice}</p>
              </div>
            </div>

            {/* Quick Metrics / Portal Status Widget */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/65 p-6 shadow-xl backdrop-blur-md">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
                  <span>Zamfara State Live Channels</span>
                  <span className="text-emerald-400 font-mono">ONLINE</span>
                </h3>
                
                <div className="space-y-4">
                  {/* Metric 1 */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-sm text-slate-300">Nigeria Toll-Free Response</span>
                    <span className="font-mono text-sm font-bold text-emerald-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">112</span>
                  </div>
                  {/* Metric 2 */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-sm text-slate-300">Armed Forces Line</span>
                    <span className="font-mono text-sm font-bold text-emerald-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">193</span>
                  </div>
                  {/* Metric 3 */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-sm text-slate-300">State Command Center</span>
                    <span className="font-mono text-sm font-bold text-slate-200">GUSAU</span>
                  </div>
                  {/* Metric 4 */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Official ZASEMA Response</span>
                    <span className="font-mono text-xs text-slate-300">08036974776</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                  <Award className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Sustainable Development Goal 16 compliant reporting tool</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          1. EMERGENCY CONTACTS (VERIFIED, MULTI-AGENCY)
          ========================================== */}
      <section id="contacts" className="py-20 bg-slate-50 scroll-mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t.contactsTitle}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {t.contactsSubtitle}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 border border-slate-200 shadow-xs">
              <Clock className="h-4 w-4 text-emerald-500 animate-pulse" />
              <span>
                {t.currentLocalTime}: <strong className="font-mono text-slate-900">{formattedTime}</strong>
              </span>
            </div>
          </div>

          {/* Search Box & Category Filters Widget */}
          <div className="mb-10 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              
              {/* Search Box */}
              <div className="relative md:col-span-6">
                <label htmlFor="agency-search" className="sr-only">Search agencies</label>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  id="agency-search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder={t.searchPlaceholder}
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2 md:col-span-6 md:justify-end">
                <button
                  onClick={() => setActiveCategory("All")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all border ${
                    activeCategory === "All" 
                      ? "bg-slate-900 text-white border-slate-900" 
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {t.categoryAll}
                </button>
                <button
                  onClick={() => setActiveCategory("Security")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all border ${
                    activeCategory === "Security" 
                      ? "bg-blue-600 text-white border-blue-600" 
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {t.categorySecurity}
                </button>
                <button
                  onClick={() => setActiveCategory("Disaster")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all border ${
                    activeCategory === "Disaster" 
                      ? "bg-orange-600 text-white border-orange-600" 
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {t.categoryDisaster}
                </button>
                <button
                  onClick={() => setActiveCategory("Medical")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all border ${
                    activeCategory === "Medical" 
                      ? "bg-teal-600 text-white border-teal-600" 
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {t.categoryMedical}
                </button>
              </div>

            </div>
          </div>

          {/* Contact Grid layout with 11 agencies */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="region" aria-label="Emergency Contacts Directory">
            {filteredAgencies.map((agency) => {
              const statusInfo = getAgencyStatus(agency.id, currentTime);
              return (
                <motion.div
                  layout
                  key={agency.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
                >
                  {/* Visual Category Label & Real-Time Status */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-800">
                        <Shield className="h-5 w-5 text-slate-700" />
                      </div>
                      <button
                        onClick={() => handleViewOnMap(agency)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 transition-all cursor-pointer active:scale-95"
                        title={lang === "en" ? "Locate on Map" : "Gano a Taswira"}
                      >
                        <MapPin className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{lang === "en" ? "Map" : "Taswira"}</span>
                      </button>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-white ${agency.badgeColor}`}>
                        {agency.category}
                      </span>
                      {/* Real-time Status Badge */}
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase border ${statusInfo.colorClass}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${statusInfo.dotClass}`} />
                        <span>{lang === "en" ? statusInfo.labelEn : statusInfo.labelHa}</span>
                      </span>
                    </div>
                  </div>

                  {/* Info block */}
                  <div className="space-y-3.5 flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {lang === "en" ? agency.nameEn : agency.nameHa}
                    </h3>
                    
                    {/* Address */}
                    <div className="flex gap-2 text-xs text-slate-500">
                      <MapPin className="h-4 w-4 shrink-0 text-slate-400" />
                      <span>{lang === "en" ? agency.addressEn : agency.addressHa}</span>
                    </div>

                    {/* Phone Numbers with instant visual feedback */}
                    <div className="space-y-1">
                      <div className="flex items-start gap-2">
                        <Phone className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                        <div className="flex flex-col gap-1.5">
                          {agency.phones.map((phone, idx) => (
                            <a
                              key={idx}
                              href={`tel:${phone.replace(/\s+/g, '')}`}
                              className="text-sm font-bold text-slate-850 hover:text-emerald-600 hover:underline inline-flex items-center gap-1 font-mono"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Mail className="h-4 w-4 shrink-0 text-slate-400" />
                      <a href={`mailto:${agency.email}`} className="hover:text-emerald-600 hover:underline font-mono">
                        {agency.email}
                      </a>
                    </div>

                    {/* Hours */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 pt-1 border-t border-slate-100">
                      <Clock className="h-4 w-4 shrink-0 text-slate-400" />
                      <span>{t.agencyHours}: <strong className="text-slate-700 font-medium">{lang === "en" ? agency.hoursEn : agency.hoursHa}</strong></span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${agency.phones[0].replace(/\s+/g, '')}`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-slate-850 active:scale-95"
                    >
                      <Phone className="h-3.5 w-3.5 text-emerald-400" />
                      {t.btnCall}
                    </a>
                    <a
                      href={agency.website}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50 active:scale-95 hover:border-slate-300"
                    >
                      <Globe className="h-3.5 w-3.5 text-slate-400" />
                      {t.btnWebsite}
                    </a>
                  </div>

                </motion.div>
              );
            })}

            {filteredAgencies.length === 0 && (
              <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-slate-200">
                <AlertCircle className="h-10 w-10 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-500 font-medium">No emergency agencies found matching your search filters.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                  className="mt-3 text-sm font-bold text-emerald-600 hover:underline"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ==========================================
          MAP SECTION (GUSAU EMERGENCY COMMAND CENTERS)
          ========================================== */}
      <section id="map-section" className="py-20 bg-slate-100 border-y border-slate-200 scroll-mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl flex items-center justify-center gap-3">
              <Navigation className="h-8 w-8 text-emerald-500 shrink-0 animate-pulse" />
              {t.mapTitle}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {t.mapSubtitle}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            
            {/* Sidebar dispatcher dashboard - Col-span-4 */}
            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    {lang === "en" ? "Command Headquarters" : "Hedikwatar Hukumomi"}
                  </h3>
                  <button
                    onClick={() => {
                      setSelectedMapAgency(null);
                      setMapCenter([12.1628, 6.6614]);
                      setMapZoom(13.5);
                    }}
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:underline transition-all flex items-center gap-1 cursor-pointer"
                  >
                    {t.mapRecenter}
                  </button>
                </div>

                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  {t.mapSelectPrompt}
                </p>

                {/* Interactive agency selection buttons */}
                <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                  {agenciesData.map((agency) => {
                    const isSelected = selectedMapAgency?.id === agency.id;
                    return (
                      <button
                        key={agency.id}
                        onClick={() => {
                          setSelectedMapAgency(agency);
                          setMapCenter(agency.coordinates);
                          setMapZoom(15.5);
                        }}
                        className={`w-full text-left p-3 rounded-xl border transition-all flex flex-col gap-1.5 cursor-pointer ${
                          isSelected 
                            ? "bg-slate-900 border-slate-900 text-white shadow-md" 
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-extrabold truncate">
                            {lang === "en" ? agency.nameEn : agency.nameHa}
                          </span>
                          <span className="flex items-center gap-1.5 shrink-0">
                            <span className={`w-2 h-2 rounded-full ${
                              agency.category === "Security" ? "bg-blue-500" :
                              agency.category === "Disaster" ? "bg-orange-500" : "bg-teal-500"
                            }`} title={agency.category} />
                            <span className={`w-2 h-2 rounded-full ${
                              getAgencyStatus(agency.id, currentTime).status === "Available" ? "bg-emerald-500 animate-pulse" :
                              getAgencyStatus(agency.id, currentTime).status === "High Traffic" ? "bg-amber-500 animate-pulse" : "bg-slate-400"
                            }`} title={lang === "en" ? getAgencyStatus(agency.id, currentTime).labelEn : getAgencyStatus(agency.id, currentTime).labelHa} />
                          </span>
                        </div>
                        <span className={`text-[10px] ${isSelected ? "text-slate-300" : "text-slate-500"} truncate`}>
                          {lang === "en" ? agency.addressEn : agency.addressHa}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Legend Widget */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  {lang === "en" ? "Map Legend" : "Alamar Taswira"}
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <span className="w-3.5 h-3.5 rounded-full bg-blue-600 border border-white shadow-sm inline-block shrink-0" />
                    <span>{t.mapCategorySecurity}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <span className="w-3.5 h-3.5 rounded-full bg-orange-600 border border-white shadow-sm inline-block shrink-0" />
                    <span>{t.mapCategoryDisaster}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-600">
                    <span className="w-3.5 h-3.5 rounded-full bg-teal-600 border border-white shadow-sm inline-block shrink-0" />
                    <span>{t.mapCategoryMedical}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Canvas - Col-span-8 */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-md overflow-hidden relative">
                
                {/* Responsive Map Canvas with fixed high height */}
                <div className="h-[480px] w-full rounded-2xl overflow-hidden relative z-10" id="map-canvas-container">
                  <MapContainer 
                    center={mapCenter} 
                    zoom={mapZoom} 
                    scrollWheelZoom={false}
                    className="h-full w-full z-0"
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    
                    {/* Helper component to set the view dynamically */}
                    <ChangeMapView center={mapCenter} zoom={mapZoom} />

                    {/* Markers for all 11 command centers */}
                    {agenciesData.map((agency) => (
                      <Marker 
                        key={agency.id} 
                        position={agency.coordinates}
                        icon={createCustomIcon(agency.category)}
                        eventHandlers={{
                          click: () => {
                            setSelectedMapAgency(agency);
                            setMapCenter(agency.coordinates);
                            setMapZoom(15.5);
                          }
                        }}
                      >
                        <Popup>
                          <div className="p-2.5 max-w-[250px] font-sans">
                            <div className="flex items-center gap-1.5 flex-wrap mb-2">
                              <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-extrabold uppercase text-white ${
                                 agency.category === "Security" ? "bg-blue-600" :
                                 agency.category === "Disaster" ? "bg-orange-600" : "bg-teal-600"
                              }`}>
                                {lang === "en" ? agency.category : (agency.category === "Security" ? "Tsaro" : agency.category === "Disaster" ? "Agaji" : "Lafiya")}
                              </span>
                              <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase border ${getAgencyStatus(agency.id, currentTime).colorClass}`}>
                                <span className={`h-1 w-1 rounded-full ${getAgencyStatus(agency.id, currentTime).dotClass}`} />
                                <span>{lang === "en" ? getAgencyStatus(agency.id, currentTime).labelEn : getAgencyStatus(agency.id, currentTime).labelHa}</span>
                              </span>
                            </div>
                            <h4 className="text-sm font-extrabold text-slate-900 leading-tight mb-1">
                              {lang === "en" ? agency.nameEn : agency.nameHa}
                            </h4>
                            <p className="text-[11px] text-slate-600 mb-2.5 leading-relaxed">
                              {lang === "en" ? agency.addressEn : agency.addressHa}
                            </p>
                            <div className="space-y-1.5 pt-2 border-t border-slate-100">
                              <div className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">
                                {lang === "en" ? "Hotlines" : "Lambobin Waya"}
                              </div>
                              {agency.phones.map((phone, i) => (
                                <a
                                  key={i}
                                  href={`tel:${phone.replace(/\s+/g, '')}`}
                                  className="block text-xs font-extrabold text-emerald-600 hover:underline font-mono"
                                >
                                  {phone}
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </div>

                {/* Floating Map Status Overlay for realism & academic presentation */}
                <div className="absolute bottom-6 right-6 z-20 bg-slate-900/90 backdrop-blur-md text-white rounded-xl px-4 py-2 text-[11px] border border-slate-800 shadow-lg pointer-events-none flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono">SIWES Simulation: Active Map Feeds (Gusau Hub)</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          5. REPORT INCIDENT FORM (PROPER VALIDATION & SUCCESS MODAL)
          ========================================== */}
      <section id="report" className="py-20 bg-white border-y border-slate-200 scroll-mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Context Notice Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                <Shield className="h-4 w-4" />
                Secured Transmission
              </span>
              
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {t.formTitle}
              </h2>
              
              <p className="text-slate-600 leading-relaxed">
                {t.formSubtitle}
              </p>

              <div className="space-y-4">
                <div className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Immediate Forwarding</h4>
                    <p className="text-xs text-slate-500 mt-1">This simulation template demonstrates secure form handling structured to interface directly with Firebase API or EmailJS integrations.</p>
                  </div>
                </div>

                <div className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Citizen Identity Guard</h4>
                    <p className="text-xs text-slate-500 mt-1">Under strict compliance guidelines, identity metadata is locked behind administrative credentials, protecting citizen safety.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Incident form with explicit input validation */}
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm relative">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="reporter-name" className="block text-sm font-bold text-slate-800 mb-1.5">
                    {t.formName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="reporter-name"
                    value={formName}
                    onChange={(e) => {
                      setFormName(e.target.value);
                      if(errors.formName) setErrors(prev => ({ ...prev, formName: "" }));
                    }}
                    placeholder="e.g., Ismael Bukhary Dankoli"
                    className={`block w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:border-emerald-500 focus:ring-emerald-500 transition-all ${
                      errors.formName ? "border-red-500 focus:ring-red-500" : "border-slate-200"
                    }`}
                  />
                  {errors.formName && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" /> {errors.formName}
                    </p>
                  )}
                </div>

                {/* Phone & Date grid */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Phone */}
                  <div>
                    <label htmlFor="reporter-phone" className="block text-sm font-bold text-slate-800 mb-1.5">
                      {t.formPhone} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="reporter-phone"
                      value={formPhone}
                      onChange={(e) => {
                        setFormPhone(e.target.value);
                        if(errors.formPhone) setErrors(prev => ({ ...prev, formPhone: "" }));
                      }}
                      placeholder="e.g., 08030000000"
                      className={`block w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:border-emerald-500 focus:ring-emerald-500 transition-all ${
                        errors.formPhone ? "border-red-500 focus:ring-red-500" : "border-slate-200"
                      }`}
                    />
                    {errors.formPhone && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" /> {errors.formPhone}
                      </p>
                    )}
                  </div>

                  {/* Incident Type */}
                  <div>
                    <label htmlFor="incident-type" className="block text-sm font-bold text-slate-800 mb-1.5">
                      {t.formType} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="incident-type"
                      value={formType}
                      onChange={(e) => {
                        setFormType(e.target.value);
                        if(errors.formType) setErrors(prev => ({ ...prev, formType: "" }));
                      }}
                      className={`block w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:border-emerald-500 focus:ring-emerald-500 transition-all ${
                        errors.formType ? "border-red-500 focus:ring-red-500" : "border-slate-200"
                      }`}
                    >
                      <option value="">{t.formTypePlaceholder}</option>
                      <option value="Security / Armed Threat">Security Threat (Tsaro)</option>
                      <option value="Fire Outbreak">Fire Outbreak (Gobara)</option>
                      <option value="Flash Flooding">Flash Flooding (Ambaliya)</option>
                      <option value="Medical Health Emergency">Medical Emergency (Lafiya)</option>
                      <option value="Road Traffic Incident">Road Incident (Hatsarin Mota)</option>
                      <option value="Other Crisis">Other Crisis (Agajin Gaggawa)</option>
                    </select>
                    {errors.formType && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" /> {errors.formType}
                      </p>
                    )}
                  </div>
                </div>

                {/* LGA & Date Grid */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Location LGA */}
                  <div>
                    <label htmlFor="incident-location" className="block text-sm font-bold text-slate-800 mb-1.5">
                      {t.formLocation} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="incident-location"
                      value={formLocation}
                      onChange={(e) => {
                        setFormLocation(e.target.value);
                        if(errors.formLocation) setErrors(prev => ({ ...prev, formLocation: "" }));
                      }}
                      placeholder={t.formLocationPlaceholder}
                      className={`block w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:border-emerald-500 focus:ring-emerald-500 transition-all ${
                        errors.formLocation ? "border-red-500 focus:ring-red-500" : "border-slate-200"
                      }`}
                    />
                    {errors.formLocation && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" /> {errors.formLocation}
                      </p>
                    )}
                  </div>

                  {/* Incident Date */}
                  <div>
                    <label htmlFor="incident-date" className="block text-sm font-bold text-slate-800 mb-1.5">
                      {t.formDate} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="datetime-local"
                      id="incident-date"
                      value={formDate}
                      onChange={(e) => {
                        setFormDate(e.target.value);
                        if(errors.formDate) setErrors(prev => ({ ...prev, formDate: "" }));
                      }}
                      className={`block w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:border-emerald-500 focus:ring-emerald-500 transition-all ${
                        errors.formDate ? "border-red-500 focus:ring-red-500" : "border-slate-200"
                      }`}
                    />
                    {errors.formDate && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" /> {errors.formDate}
                      </p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="incident-desc" className="block text-sm font-bold text-slate-800 mb-1.5">
                    {t.formDesc} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="incident-desc"
                    value={formDesc}
                    onChange={(e) => {
                      setFormDesc(e.target.value);
                      if(errors.formDesc) setErrors(prev => ({ ...prev, formDesc: "" }));
                    }}
                    rows={4}
                    placeholder={t.formDescPlaceholder}
                    className={`block w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:border-emerald-500 focus:ring-emerald-500 transition-all ${
                      errors.formDesc ? "border-red-500 focus:ring-red-500" : "border-slate-200"
                    }`}
                  />
                  {errors.formDesc && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" /> {errors.formDesc}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-slate-800 active:scale-[0.98]"
                >
                  <Send className="h-4 w-4 text-emerald-400" />
                  {t.btnSubmitForm}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          FORM SUCCESS MODAL (REPLACES DEMO POPUP)
          ========================================== */}
      <AnimatePresence>
        {successModal?.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSuccessModal(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />
            
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 shadow-xl border border-slate-200 z-10"
              role="dialog"
              aria-modal="true"
              aria-labelledby="success-modal-title"
            >
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <CheckCircle className="h-8 w-8" />
                </div>
                
                <h3 id="success-modal-title" className="mt-4 text-xl font-extrabold text-slate-900">
                  {t.modalSuccessTitle}
                </h3>
                
                <p className="mt-2 text-sm text-slate-600">
                  {t.modalSuccessMsg}
                </p>

                {/* Simulated Ticket Badge */}
                <div className="mt-5 rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    {t.modalTicketId}
                  </span>
                  <span className="block mt-1 font-mono text-lg font-bold text-slate-900 tracking-wider">
                    {successModal.ticketId}
                  </span>
                </div>

                <p className="mt-4 text-[11px] text-slate-500 italic">
                  {t.modalNotice}
                </p>

                {/* Close Button */}
                <div className="mt-6">
                  <button
                    onClick={() => setSuccessModal(null)}
                    className="inline-flex w-full justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    {t.btnCloseModal}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==========================================
          11. SAFETY TIPS SECTION (IMPROVED CARD LAYOUT)
          ========================================== */}
      <section id="tips" className="py-20 bg-slate-50 scroll-mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t.tipsTitle}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {t.tipsSubtitle}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Card 1: Security */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 mb-5">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{t.tipSecurityTitle}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{t.tipSecurityDesc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-blue-600 uppercase tracking-wider">
                <span>Security Guidelines</span>
              </div>
            </div>

            {/* Card 2: Fire */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100 mb-5">
                  <Flame className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{t.tipFireTitle}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{t.tipFireDesc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-red-600 uppercase tracking-wider">
                <span>Emergency Drill</span>
              </div>
            </div>

            {/* Card 3: Flood */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 mb-5">
                  <Droplets className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{t.tipFloodTitle}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{t.tipFloodDesc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-600 uppercase tracking-wider">
                <span>Disaster Management</span>
              </div>
            </div>

            {/* Card 4: Medical Scene */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 border border-teal-100 mb-5">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{t.tipMedicalTitle}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{t.tipMedicalDesc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-teal-600 uppercase tracking-wider">
                <span>Clinical Precaution</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          7. ABOUT SECTION (SDG 16 & PROJECT OBJECTIVES)
          ========================================== */}
      <section id="about" className="py-20 bg-white border-y border-slate-200 scroll-mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t.aboutTitle}
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Block 1: United Nations SDG 16 Framework */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-emerald-400">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {t.aboutSdgTitle}
                </h3>
              </div>
              
              <p className="text-slate-600 leading-relaxed">
                {t.aboutSdgText}
              </p>

              {/* UN SDG 16 Graphic placeholder representatively */}
              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-slate-950 font-bold text-lg">
                  16
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-950">Peace, Justice & Strong Institutions</span>
                  <span className="block text-xs text-slate-500 mt-0.5">United Nations Sustainable Development Goals</span>
                </div>
              </div>
            </div>

            {/* Block 2: Project Objectives */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-emerald-400">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {t.aboutObjTitle}
                </h3>
              </div>

              <ul className="space-y-4">
                {[t.obj1, t.obj2, t.obj3, t.obj4, t.obj5].map((obj, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-650 text-sm">
                    <ChevronRight className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          6. CONTACT US SECTION (PROFESSIONAL SIWES EMAIL)
          ========================================== */}
      <section id="contact-us" className="py-20 bg-slate-50 scroll-mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              {t.contactTitle}
            </h2>
            <p className="mt-3 text-slate-600">
              {t.contactSubtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm grid md:grid-cols-12">
            
            {/* Detail Block */}
            <div className="p-8 md:col-span-7 space-y-6">
              
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.contactAddress}</h4>
                  <p className="text-sm text-slate-600 mt-1">{t.officeAddress}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.contactEmail}</h4>
                  <a href={`mailto:${t.officeEmail}`} className="text-sm text-emerald-600 font-bold hover:underline font-mono block mt-1">
                    {t.officeEmail}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.contactHours}</h4>
                  <p className="text-sm text-slate-600 mt-1">{t.officeHours}</p>
                </div>
              </div>

            </div>

            {/* Visual Branding / Map Simulation */}
            <div className="bg-slate-950 p-8 md:col-span-5 flex flex-col justify-between text-white relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>

              <div className="relative z-10 space-y-4">
                <span className="inline-block px-2 py-0.5 rounded-md bg-slate-900 text-emerald-400 border border-slate-800 text-[10px] font-bold uppercase tracking-wider">
                  Academic Research
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "This project forms part of the technological expansion proposal presented for the modernization of municipal safety dispatch commands."
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-slate-800 text-xs text-slate-400">
                <span>ZITDA SIWES Division • Gusau</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          8. INSTITUTIONAL ACKNOWLEDGEMENT
          ========================================== */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm border border-slate-200 mb-4">
            <Award className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-extrabold text-slate-950 mb-3">
            {t.ackTitle}
          </h3>
          <p className="text-sm text-slate-650 max-w-3xl mx-auto leading-relaxed italic">
            "{t.ackBody}"
          </p>
        </div>
      </section>

      {/* ==========================================
          9. DEVELOPER RECOGNITION (ISMAEL BUKHARY DANKOLI)
          ========================================== */}
      <section id="developer" className="py-20 bg-white scroll-mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center bg-slate-50/50">
            
            {/* Visual Avatar Placeholder representing high professional standards */}
            <div className="h-28 w-28 rounded-full bg-slate-900 text-white flex shrink-0 items-center justify-center font-extrabold text-3xl border-4 border-white shadow-lg relative">
              ID
              <span className="absolute bottom-1 right-1 h-4.5 w-4.5 rounded-full bg-emerald-400 border-2 border-white" />
            </div>

            {/* Profile Info */}
            <div className="space-y-4 text-center md:text-left flex-grow">
              <div>
                <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider">
                  {t.devRole}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  {t.devName}
                </h3>
                <p className="text-sm font-medium text-slate-600">
                  {t.devDepartment}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t.devInstitution}
                </p>
              </div>

              <p className="text-xs text-slate-500 max-w-xl">
                {t.devContactSlogan}
              </p>

              {/* Developer Links with Placeholders */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                <a
                  href="https://github.com/ismaelbdankoli"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 transition-all hover:border-slate-300 font-medium"
                >
                  <Github className="h-4 w-4 text-slate-700" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/ismaelbukharydankoli"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 transition-all hover:border-slate-300 font-medium"
                >
                  <Linkedin className="h-4 w-4 text-blue-600" />
                  LinkedIn
                </a>
                <a
                  href="mailto:ismael.dankoli.siwes@zitda.gov.ng"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 transition-all hover:border-slate-300 font-medium"
                >
                  <Mail className="h-4 w-4 text-red-500" />
                  Email Contact
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          15. PROFESSIONAL FOOTER
          ========================================== */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12 items-start">
            
            {/* Branding Column */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-white text-lg font-extrabold tracking-tight block">
                {t.brand}
              </span>
              <p className="text-slate-500 max-w-md text-xs leading-relaxed">
                Zamfara State Community Safety Portal is an advanced academic concept designed to bridge critical public service communication gaps, strictly engineered for the ZITDA SIWES program defense 2026.
              </p>
            </div>

            {/* Program Column */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-white text-xs font-bold uppercase tracking-wider block">SIWES Accreditation</span>
              <div className="space-y-1 text-slate-500">
                <span className="block">{t.footDev}</span>
                <span className="block">{t.footSiwes}</span>
                <span className="block">Host: Zamfara Information Technology Development Agency</span>
              </div>
            </div>

            {/* SDG compliance Column */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-white text-xs font-bold uppercase tracking-wider block">Global Mandate</span>
              <span className="block text-slate-500 leading-relaxed">
                {t.footSdg} • Promotes peaceful communities and transparent public safety access.
              </span>
            </div>

          </div>

          {/* Bottom Copyright Block */}
          <div className="mt-12 pt-8 border-t border-slate-900 text-center text-slate-600 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <span>{t.footCopy}</span>
            <div className="flex gap-4 justify-center">
              <a href="#main-navigation" className="hover:text-slate-400">Back to Top</a>
              <span className="text-slate-800">|</span>
              <a href="#about" className="hover:text-slate-400">SDG compliance declaration</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
