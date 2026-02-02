import { DashboardItem, FeatureStatus, GodProfile, DevotionalContent } from './types';

// --- HANUMAN CONTENT ---
export const HANUMAN_CHALISA: DevotionalContent = {
  type: 'chalisa',
  titleHindi: "श्री हनुमान चालीसा",
  titleEnglish: "Shree Hanuman Chalisa",
  doha: [
    {
      hindi: "श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि।\nबरनउँ रघुबर बिमल जसु, जो दायकु फल चारि।।",
      english: "Shri Guru Charan Saroj Raj, Nij Manu Mukuru Sudhari.\nBarnau Raghubar Bimal Jasu, Jo Dayaku Phal Chari."
    },
    {
      hindi: "बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।\nबल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार।।",
      english: "Buddhiheen Tanu Janike, Sumirau Pavan-Kumar.\nBal Buddhi Vidya Dehu Mohin, Harahu Kalesh Bikar."
    }
  ],
  chaupai: [
    { hindi: "जय हनुमान ज्ञान गुन सागर।\nजय कपीस तिहुँ लोक उजागर।।", english: "Jai Hanuman Gyan Gun Sagar.\nJai Kapis Tihun Lok Ujagar." },
    { hindi: "राम दूत अतुलित बल धामा।\nअंजनि-पुत्र पवनसुत नामा।।", english: "Ram Doot Atulit Bal Dhama.\nAnjani-Putra Pavansut Nama." },
    { hindi: "महाबीर बिक्रम बजरंगी।\nकुमति निवार सुमति के संगी।।", english: "Mahavir Vikram Bajrangi.\nKumati Nivar Sumati Ke Sangi." },
    { hindi: "कंचन बरन बिराज सुबेसा।\nकानन कुंडल कुंचित केसा।।", english: "Kanchan Baran Biraj Subesa.\nKanan Kundal Kunchit Kesa." },
    { hindi: "हाथ बज्र औ ध्वजा बिराजै।\nकाँधे मूँज जनेऊ साजै।।", english: "Hath Vajra Aur Dhvaja Biraje.\nKandhe Moonj Janeu Saje." },
    { hindi: "संकर सुवन केसरीनंदन।\nतेज प्रताप महा जग बन्दन।।", english: "Shankar Suvan Kesarinandan.\nTej Pratap Maha Jag Bandan." },
    { hindi: "विद्यावान गुनी अति चातुर।\nराम काज करिबे को आतुर।।", english: "Vidyavan Guni Ati Chatur.\nRam Kaj Karibe Ko Aatur." },
    { hindi: "प्रभु चरित्र सुनिबे को रसिया।\nराम लखन सीता मन बसिया।।", english: "Prabhu Charitra Sunibe Ko Rasiya.\nRam Lakhan Sita Man Basiya." },
    { hindi: "सूक्ष्म रूप धरि सियहिं दिखावा।\nबिकट रूप धरि लंक जरावा।।", english: "Sukshma Roop Dhari Siyahi Dikhava.\nVikat Roop Dhari Lank Jarava." },
    { hindi: "भीम रूप धरि असुर संहारे।\nरामचंद्र के काज सँवारे।।", english: "Bhima Roop Dhari Asur Sanhare.\nRamchandra Ke Kaj Sanvare." },
    { hindi: "लाय सजीवन लखन जियाये।\nश्रीरघुबीर हरषि उर लाये।।", english: "Laye Sanjivan Lakhan Jiyaye.\nShri Raghubir Harashi Ur Laye." },
    { hindi: "रघुपति कीन्ही बहुत बड़ाई।\nतुम मम प्रिय भरतहि सम भाई।।", english: "Raghupati Kinhi Bahut Badayi.\nTum Mam Priya Bharatahi Sama Bhai." },
    { hindi: "सहस बदन तुम्हरो जस गावैं।\nअस कहि श्रीपति कंठ लगावैं।।", english: "Sahas Badan Tumharo Jas Gaavein.\nAsa Kahi Shripati Kanth Lagavein." },
    { hindi: "सनकादिक ब्रह्मादि मुनीसा।\nनारद सारद सहित अहीसा।।", english: "Sankadik Brahmadi Munisa.\nNarad Sarad Sahit Ahisa." },
    { hindi: "जम कुबेर दिगपाल जहाँ ते।\nकबि कोबिद कहि सके कहाँ ते।।", english: "Jam Kuber Digpal Jahan Te.\nKavi Kovid Kahi Sake Kahan Te." },
    { hindi: "तुम उपकार सुग्रीवहिं कीन्हा।\nराम मिलाय राज पद दीन्हा।।", english: "Tum Upkar Sugrivahin Kinha.\nRam Milay Raj Pad Dinha." },
    { hindi: "तुम्हरो मंत्र बिभीषन माना।\nलंकेस्वर भए सब जग जाना।।", english: "Tumharo Mantra Bibhishan Mana.\nLankeshwar Bhaye Sab Jag Jana." },
    { hindi: "जुग सहस्र जोजन पर भानू।\nलील्यो ताहि मधुर फल जानू।।", english: "Yug Sahasra Yojan Par Bhanu.\nLilyo Tahi Madhur Phal Janu." },
    { hindi: "प्रभु मुद्रिका मेलि मुख माहीं।\nजलधि लाँघि गये अचरज नाहीं।।", english: "Prabhu Mudrika Meli Mukh Mahin.\nJaladhi Langhi Gaye Acharaj Nahin." },
    { hindi: "दुर्गम काज जगत के जेते।\nसुगम अनुग्रह तुम्हरे तेते।।", english: "Durgam Kaj Jagat Ke Jete.\nSugam Anugrah Tumhare Tete." },
    { hindi: "राम दुआरे तुम रखवारे।\nहोत न आज्ञा बिनु पैसारे।।", english: "Ram Duare Tum Rakhvare.\nHot Na Agya Binu Paisare." },
    { hindi: "सब सुख लहै तुम्हारी सरना।\nतुम रक्षक काहू को डर ना।।", english: "Sab Sukh Lahai Tumhari Sarna.\nTum Rakshak Kahu Ko Dar Na." },
    { hindi: "आपन तेज सम्हारो आपै।\nतीनों लोक हाँक तें काँपै।।", english: "Aapan Tej Samharo Aapai.\nTeenon Lok Hank Te Kanpai." },
    { hindi: "भूत पिसाच निकट नहिं आवै।\nमहाबीर जब नाम सुनावै।।", english: "Bhoot Pishach Nikat Nahi Aavai.\nMahavir Jab Naam Sunavai." },
    { hindi: "नासै रोग हरै सब पीरा।\nजपत निरंतर हनुमत बीरा।।", english: "Nasai Rog Harai Sab Pira.\nJapat Nirantar Hanumat Bira." },
    { hindi: "संकट तें हनुमान छुड़ावै।\nमन क्रम बचन ध्यान जो लावै।।", english: "Sankat Te Hanuman Chhudavai.\nMan Kram Bachan Dhyan Jo Lavai." },
    { hindi: "सब पर राम तपस्वी राजा।\nतिन के काज सकल तुम साजा।।", english: "Sab Par Ram Tapasvi Raja.\nTin Ke Kaj Sakal Tum Saja." },
    { hindi: "और मनोरथ जो कोई लावै।\nसोइ अमित जीवन फल पावै।।", english: "Aur Manorath Jo Koi Lavai.\nSoi Amit Jivan Phal Pavai." },
    { hindi: "चारों जुग परताप तुम्हारा।\nहै परसिद्ध जगत उजियारा।।", english: "Charon Yug Partap Tumhara.\nHai Parsiddh Jagat Ujiyara." },
    { hindi: "साधु-संत के तुम रखवारे।\nअसुर निकंदन राम दुलारे।।", english: "Sadhu Sant Ke Tum Rakhvare.\nAsur Nikandan Ram Dulare." },
    { hindi: "अष्ट सिद्धि नौ निधि के दाता।\nअस बर दीन जानकी माता।।", english: "Ashta Siddhi Nau Nidhi Ke Data.\nAsa Bar Din Janaki Mata." },
    { hindi: "राम रसायन तुम्हरे पासा।\nसदा रहो रघुपति के दासा।।", english: "Ram Rasayan Tumhare Pasa.\nSada Raho Raghupati Ke Dasa." },
    { hindi: "तुम्हरे भजन राम को पावै।\nजनम-जनम के दुख बिसरावै।।", english: "Tumhare Bhajan Ram Ko Pavai.\nJanam Janam Ke Dukh Bisravai." },
    { hindi: "अन्त काल रघुबर पुर जाई।\nजहाँ जन्म हरि-भक्त कहाई।।", english: "Anta Kaal Raghubar Pur Jai.\nJahan Janma Hari Bhakta Kahai." },
    { hindi: "और देवता चित्त न धरई।\nहनुमत सेइ सर्ब सुख करई।।", english: "Aur Devta Chitta Na Dharai.\nHanumat Sei Sarba Sukh Karai." },
    { hindi: "संकट कटै मिटै सब पीरा।\nजो सुमिरै हनुमत बलबीरा।।", english: "Sankat Katai Mitai Sab Pira.\nJo Sumirai Hanumat Balbira." },
    { hindi: "जै जै जै हनुमान गोसाईं।\nकृपा करहु गुरुदेव की नाईं।।", english: "Jai Jai Jai Hanuman Gosain.\nKripa Karahu Gurudev Ki Nain." },
    { hindi: "जो सत बार पाठ कर कोई।\nछूटहि बंदि महा सुख होई।।", english: "Jo Sat Bar Path Kar Koi.\nChhutahi Bandi Maha Sukh Hoi." },
    { hindi: "जो यह पढ़ै हनुमान चालीसा।\nहोय सिद्धि साखी गौरीसा।।", english: "Jo Yah Padhai Hanuman Chalisa.\nHoy Siddhi Sakhi Gaurisa." },
    { hindi: "तुलसीदास सदा हरि चेरा।\nकीजै नाथ हृदय मँह डेरा।।", english: "Tulsidas Sada Hari Chera.\nKijai Nath Hriday Mah Dera." }
  ],
  finalDoha: {
    hindi: "पवन तनय संकट हरन, मंगल मूरति रूप।\nराम लखन सीता सहित, हृदय बसहु सुर भूप।।",
    english: "Pavan Tanay Sankat Haran, Mangal Murati Roop.\nRam Lakhan Sita Sahit, Hriday Basahu Sur Bhoop."
  }
};

export const HANUMAN_AARTI: DevotionalContent = {
  type: 'aarti',
  titleHindi: "हनुमान आरती",
  titleEnglish: "Hanuman Aarti",
  verses: [
    { hindi: "आरती कीजै हनुमान लला की। दुष्ट दलन रघुनाथ कला की॥", english: "Aarti Kije Hanuman Lala Ki. Dusht Dalan Raghunath Kala Ki." },
    { hindi: "जाके बल से गिरिवर काँपै। रोग दोष जाके निकट न झाँपै॥", english: "Jake Bal Se Girivar Kaanpe. Rog Dosh Jake Nikat Na Jhaanpe." },
    { hindi: "अंजनि पुत्र महा बलदाई। संतन के प्रभु सदा सहाई॥", english: "Anjani Putra Maha Baldai. Santan Ke Prabhu Sada Sahai." },
    { hindi: "दे बीरा रघुनाथ पठाए। लंका जारि सिया सुधि लाए॥", english: "De Beera Raghunath Pathaye. Lanka Jaari Siya Sudhi Laye." },
    { hindi: "लंका सो कोट समुद्र-सी खाई। जात पवनसुत बार न लाई॥", english: "Lanka So Kot Samudra-Si Khai. Jaat Pavansut Baar Na Lai." },
    { hindi: "लंका जारि असुर संहारे। सियारामजी के काज सँवारे॥", english: "Lanka Jaari Asur Sanhare. Siyaramji Ke Kaaj Sanvare." },
    { hindi: "लक्ष्मण मूर्छित पड़े सकारे। आनि संजीवन प्राण उबारे॥", english: "Lakshman Murchhit Pade Sakare. Aani Sanjivan Pran Ubare." },
    { hindi: "पैठि पाताल तोरि जम-कारे। अहिरावण की भुजा उखारे॥", english: "Paithi Patal Tori Jam-kare. Ahiravan Ki Bhuja Ukhare." },
    { hindi: "बाएँ भुजा असुर दल मारे। दाहिने भुजा संत जन तारे॥", english: "Baaye Bhuja Asur Dal Mare. Dahine Bhuja Sant Jan Tare." },
    { hindi: "सुर नर मुनि आरती उतारें। जय जय जय हनुमान उचारें॥", english: "Sur Nar Muni Aarti Utare. Jai Jai Jai Hanuman Uchare." },
    { hindi: "कंचन थार कपूर लौ छाई। आरती करत अंजना माई॥", english: "Kanchan Thar Kapoor Lau Chhai. Aarti Karat Anjana Mai." },
    { hindi: "जो हनुमानजी की आरती गावै। बसि बैकुंठ परम पद पावै॥", english: "Jo Hanumanji Ki Aarti Gaave. Basi Vaikunth Param Pad Pave." }
  ]
};

export const HANUMAN_MANTRA: DevotionalContent = {
  type: 'mantra',
  titleHindi: "हनुमान मंत्र",
  titleEnglish: "Hanuman Mantra",
  verses: [
    { 
        hindi: "ॐ हं हनुमते नमः॥", 
        english: "Om Ham Hanumate Namah." 
    },
    {
        hindi: "मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्। वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥",
        english: "Manojavam Marutatulyavegam Jitendriyam Buddhimatam Varishtham. Vatatmajam Vanarayuthamukhyam Shriramadutam Sharanam Prapadye."
    }
  ]
};

// --- GANESHA CONTENT ---
export const GANESHA_CHALISA: DevotionalContent = {
  type: 'chalisa',
  titleHindi: "श्री गणेश चालीसा",
  titleEnglish: "Shree Ganesh Chalisa",
  doha: [
    { hindi: "जय गणपति सदगुण सदन, कविवर बदन कृपाल।\nविघ्न हरण मंगल करण, जय जय गिरिजालाल॥", english: "Jai Ganpati Sadgun Sadan, Kavivar Badan Kripaal.\nVighna Haran Mangal Karan, Jai Jai Girijalal." },
  ],
  chaupai: [
    { hindi: "जय जय जय गणपति गणराजू। मंगल भरण करण शुभ काजू॥", english: "Jai Jai Jai Ganpati Ganraju. Mangal Bharan Karan Shubh Kaaju." },
    { hindi: "जय गजबदन सदन सुखदाता। विश्व विनायक बुद्घि विधाता॥", english: "Jai Gajbadan Sadan Sukhdata. Vishwa Vinayak Buddhi Vidhata." },
    { hindi: "वक्र तुण्ड शुचि शुण्ड सुहावन। तिलक त्रिपुण्ड भाल मन भावन॥", english: "Vakra Tunda Shuchi Shunda Suhavan. Tilak Tripunda Bhal Man Bhavan." },
    { hindi: "राजित मणि मुक्तन उर माला। स्वर्ण मुकुट शिर नयन विशाला॥", english: "Rajit Mani Muktan Ur Mala. Swarna Mukut Shir Nayan Vishala." },
    { hindi: "पुस्तक पाणि कुठार त्रिशूलं। मोदक भोग सुगन्धित फूलं॥", english: "Pustak Pani Kuthar Trishulam. Modak Bhog Sugandhit Phulam." },
    { hindi: "सुन्दर पीताम्बर तन साजित। चरण पादुका मुनि मन राजित॥", english: "Sundar Pitambar Tan Sajit. Charan Paduka Muni Man Rajit." },
    { hindi: "धनि शिव सुवन षडानन भ्राता। गौरी ललन विश्व-विख्याता॥", english: "Dhani Shiv Suvan Shadanana Bhrata. Gauri Lalan Vishwa-Vikhyata." },
    { hindi: "ऋद्धि-सिद्धि तव चंवर सुढारे। मूषक वाहन सोहत द्वारे॥", english: "Riddhi-Siddhi Tav Chanvar Sudhare. Mooshak Vahan Sohat Dvare." },
    { hindi: "कहौ जन्म शुभ कथा तुम्हारी। अति शुचि पावन मंगलकारी॥", english: "Kahau Janma Shubh Katha Tumhari. Ati Shuchi Pavan Mangalkari." },
    { hindi: "एक समय गिरिराज कुमारी। पुत्र हेतु तप कीन्हो भारी॥", english: "Ek Samay Giriraj Kumari. Putra Hetu Tap Kinho Bhari." },
    { hindi: "भयो यज्ञ जब पूर्ण अनूपा। तब पहुँच्यो तुम धरि द्विज रूपा॥", english: "Bhayo Yagya Jab Purna Anupa. Tab Pahunchyo Tum Dhari Dwij Rupa." },
    { hindi: "अतिथि जानि कै गौरि सुखारी। बहुविधि सेवा करी तुम्हारी॥", english: "Atithi Jani Kai Gauri Sukhari. Bahuvidhi Seva Kari Tumhari." },
    { hindi: "अति प्रसन्न ह्वै तुम वर दीन्हा। मातु पुत्र हित जो तप कीन्हा॥", english: "Ati Prasanna Hvai Tum Var Dinha. Matu Putra Hit Jo Tap Kinha." },
    { hindi: "मिलहि पुत्र तुहि, बुद्धि विशाला। बिना गर्भ धारण यहि काला॥", english: "Milahi Putra Tuhi, Buddhi Vishala. Bina Garbha Dharan Yahi Kala." },
    { hindi: "गणनायक गुण ज्ञान निधाना। पूजित प्रथम रूप भगवाना॥", english: "Gannayak Gun Gyan Nidhana. Poojit Pratham Roop Bhagwana." },
    { hindi: "अस कहि अन्तर्धान रूप ह्वै। पालना पर बालक स्वरूप ह्वै॥", english: "Asa Kahi Antardhan Roop Hvai. Palna Par Balak Swaroop Hvai." },
    { hindi: "बनि शिशु रुदन जबहिं तुम ठाना। लखि मुख सुख नहिं गौरि समाना॥", english: "Bani Shishu Rudan Jabahi Tum Thana. Lakhi Mukh Sukh Nahin Gauri Samana." },
    { hindi: "सकल मगन, सुखमंगल गावहिं। नभ ते सुरन्, सुमन वर्षावहिं॥", english: "Sakal Magan, Sukhmangal Gavahin. Nabh Te Suran, Suman Varshavahin." },
    { hindi: "शम्भु, उमा, बहुदान लुटावहिं। सुर मुनिजन, सुत देखन आवहिं॥", english: "Shambhu, Uma, Bahudan Lutavahin. Sur Munijan, Sut Dekhan Aavahin." },
    { hindi: "लखि अति आनन्द मंगल साजा। देखन भी आये शनि राजा॥", english: "Lakhi Ati Anand Mangal Saja. Dekhan Bhi Aaye Shani Raja." },
    { hindi: "निज अवगुण गुनि शनि मन माहीं। बालक, देखन चाहत नाहीं॥", english: "Nij Avagun Guni Shani Man Mahin. Balak, Dekhan Chahat Nahin." },
    { hindi: "गिरिजा कछु मन भेद बढ़ायो। उत्सव मोर, न शनि तुहि भायो॥", english: "Girija Kachhu Man Bhed Badhayo. Utsav Mor, Na Shani Tuhi Bhayo." },
    { hindi: "कहत लगे शनि, मन सकुचाई। का करिहौ, शिशु मोहि दिखाई॥", english: "Kahat Lage Shani, Man Sakuchai. Ka Karihau, Shishu Mohi Dikhai." },
    { hindi: "नहिं विश्वास, उमा उर भयऊ। शनि सों बालक देखन कह्यऊ॥", english: "Nahin Vishwas, Uma Ur Bhayau. Shani So Balak Dekhan Kahyau." },
    { hindi: "पदतहिं, शनि दृग कोण प्रकाशा। बालक सिर उड़ि गयो अकाशा॥", english: "Padatahin, Shani Drig Kon Prakasha. Balak Sir Udi Gayo Akasha." },
    { hindi: "गिरिजा गिरी विकल ह्वै धरणी। सो दुख दशा गयो नहीं वरणी॥", english: "Girija Giri Vikal Hvai Dharani. So Dukh Dasha Gayo Nahin Varani." },
    { hindi: "हाहाकार मच्यो कैलाशा। शनि कीन्हों लखि सुत को नाशा॥", english: "Hahakar Machyo Kailasha. Shani Kinho Lakhi Sut Ko Nasha." },
    { hindi: "तुरत गरुड़ चढ़ि विष्णु सिधाये। काटि चक्र सो गज शिर लाये॥", english: "Turat Garud Chadhi Vishnu Sidhaye. Kati Chakra So Gaj Shir Laye." },
    { hindi: "बालक के धड़ ऊपर धारयो। प्राण, मन्त्र पढ़ि शंकर डारयो॥", english: "Balak Ke Dhad Upar Dharyo. Pran, Mantra Padhi Shankar Daryo." },
    { hindi: "नाम गणेश शम्भु तब कीन्हे। प्रथम पूज्य बुद्घि निधि, वन दीन्हे॥", english: "Naam Ganesh Shambhu Tab Kinhe. Pratham Pujya Buddhi Nidhi, Van Dinhe." },
    { hindi: "बुद्धि परीक्षा जब शिव कीन्हा। पृथ्वी कर प्रदक्षिणा लीन्हा॥", english: "Buddhi Pariksha Jab Shiv Kinha. Prithvi Kar Pradakshina Linha." },
    { hindi: "चले षडानन, भरमि भुलाई। रचे बैठ तुम बुद्घि उपाई॥", english: "Chale Shadanana, Bharami Bhulai. Rache Baith Tum Buddhi Upai." },
    { hindi: "चरण मातु-पितु के धर लीन्हें। तिनके सात प्रदक्षिण कीन्हें॥", english: "Charan Matu-Pitu Ke Dhar Linhe. Tinke Saat Pradakshin Kinhe." },
    { hindi: "धनि गणेश कहि शिव हिय हरषे। नभ ते सुरन सुमन बहु बरसे॥", english: "Dhani Ganesh Kahi Shiv Hiya Harshe. Nabh Te Suran Suman Bahu Barse." },
    { hindi: "तुम्हरी महिमा बुद्धि बड़ाई। शेष सहसमुख सकै न गाई॥", english: "Tumhari Mahima Buddhi Badayi. Shesh Sahasmukh Sakai Na Gai." },
    { hindi: "मैं मतिहीन मलीन दुखारी। करहुँ कौन विधि विनय तुम्हारी॥", english: "Main Matiheen Maleen Dukhari. Karahun Kaun Vidhi Vinay Tumhari." },
    { hindi: "भजत रामसुन्दर प्रभुदासा। जग प्रयाग, ककरा, दर्भङ्गा॥", english: "Bhajat Ramsundar Prabhudasa. Jag Prayag, Kakra, Darbhanga." },
    { hindi: "अब प्रभु दया दीन पर कीजै। अपनी भक्ति शक्ति कछु दीजै॥", english: "Ab Prabhu Daya Deen Par Kijai. Apni Bhakti Shakti Kachhu Dijai." }
  ],
  finalDoha: {
    hindi: "श्री गणेश यह चालीसा, पाठ करै कर ध्यान।\nनित नव मंगल गृह बसै, लहै जगत सन्मान॥",
    english: "Shree Ganesh Yah Chalisa, Path Karai Kar Dhyan.\nNit Nav Mangal Griha Basai, Lahai Jagat Sanman."
  }
};

export const GANESHA_AARTI: DevotionalContent = {
  type: 'aarti',
  titleHindi: "गणेश आरती",
  titleEnglish: "Ganesh Aarti",
  verses: [
    { hindi: "जय गणेश जय गणेश, जय गणेश देवा। माता जाकी पार्वती, पिता महादेवा॥", english: "Jai Ganesh Jai Ganesh, Jai Ganesh Deva. Mata Jaki Parvati, Pita Mahadeva." },
    { hindi: "एक दंत दयावंत, चार भुजा धारी। माथे सिंदूर सोहे, मूसे की सवारी॥", english: "Ek Dant Dayavant, Char Bhuja Dhari. Mathe Sindoor Sohe, Moose Ki Savari." },
    { hindi: "पान चढ़े फूल चढ़े, और चढ़े मेवा। लड्डुअन का भोग लगे, संत करें सेवा॥", english: "Paan Chadhe Phool Chadhe, Aur Chadhe Meva. Ladduan Ka Bhog Lage, Sant Karen Seva." },
    { hindi: "अंधन को आँख देत, कोढ़िन को काया। बाँझन को पुत्र देत, निर्धन को माया॥", english: "Andhan Ko Aankh Det, Kodhin Ko Kaya. Banjhan Ko Putra Det, Nirdhan Ko Maya." },
    { hindi: "'सूर' श्याम शरण आए, सफल कीजै सेवा। माता जाकी पार्वती, पिता महादेवा॥", english: "'Sur' Shyam Sharan Aaye, Safal Kijai Seva. Mata Jaki Parvati, Pita Mahadeva." },
    { hindi: "दीनन की लाज रखो, शंभु सुतकारी। कामना को पूर्ण करो, जाऊँ बलिहारी॥", english: "Deenan Ki Laaj Rakho, Shambhu Sutkari. Kamna Ko Purna Karo, Jaun Balihari." }
  ]
};

export const GANESHA_MANTRA: DevotionalContent = {
  type: 'mantra',
  titleHindi: "गणेश मंत्र",
  titleEnglish: "Ganesh Mantra",
  verses: [
    { 
        hindi: "ॐ गं गणपतये नमः॥", 
        english: "Om Gam Ganapataye Namah." 
    },
    {
        hindi: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
        english: "Vakratunda Mahakaya Suryakoti Samaprabha. Nirvighnam Kuru Me Deva Sarvakaryeshu Sarvada."
    }
  ]
};

// --- GAYATRI CONTENT ---
export const GAYATRI_CHALISA: DevotionalContent = {
    type: 'chalisa',
    titleHindi: "श्री गायत्री चालीसा",
    titleEnglish: "Shree Gayatri Chalisa",
    doha: [
        { hindi: "ह्रीं श्रीं क्लीं मेधा प्रभा, जीवन ज्योति प्रचण्ड।\nशांति कांति जागृति प्रगति, रचना शक्ति अखण्ड॥", english: "Hrim Shrim Klim Medha Prabha, Jeevan Jyoti Prachand.\nShanti Kanti Jagriti Pragati, Rachna Shakti Akhand." },
        { hindi: "जगत जननी मंगल करनि, गायत्री सुखधाम।\nप्रणवों सावित्री स्वधा, स्वाहा पूरन काम॥", english: "Jagat Janani Mangal Karni, Gayatri Sukh Dham.\nPranavon Savitri Swadha, Swaha Pooran Kaam." }
    ],
    chaupai: [
        { hindi: "भूर्भुवः स्वः ॐ युत जननी। गायत्री नित कलिमल दहनी॥", english: "Bhur Bhuvah Swaha Om Yut Janani. Gayatri Nit Kalimal Dahani." },
        { hindi: "अक्षर चौबीस परम पुनीता। इनमें बसें शास्त्र श्रुति गीता॥", english: "Akshar Chaubees Param Punita. Inme Basen Shastra Shruti Geeta." },
        { hindi: "शाश्वत सतोगुणी सत रूपा। सत्य सनातन सुधा अनूपा॥", english: "Shashwat Satoguni Sat Roopa. Satya Sanatan Sudha Anupa." },
        { hindi: "हंसारूढ़ श्वेताम्बर धारी। स्वर्ण कान्ति शुचि गगन-बिहारी॥", english: "Hansarudh Shvetambar Dhari. Swarn Kanti Shuchi Gagan-Bihari." },
        { hindi: "पुस्तक पुष्प कमण्डलु माला। शुभ्र वर्ण तनु नयन विशाला॥", english: "Pustak Pushp Kamandalu Mala. Shubhra Varn Tanu Nayan Vishala." },
        { hindi: "ध्यान धरत पुलकित हिय होई। सुख उपजत दुःख दुर्मति खोई॥", english: "Dhyan Dharat Pulkit Hiya Hoi. Sukh Upjat Dukh Durmati Khoi." },
        { hindi: "कामधेनु तुम सुर तरु छाया। निराकार की अद्भुत माया॥", english: "Kamadhenu Tum Sur Taru Chhaya. Nirakar Ki Adbhut Maya." },
        { hindi: "तुम्हरी शरण गहै जो कोई। तरै सकल संकट सों सोई॥", english: "Tumhari Sharan Gahai Jo Koi. Tarai Sakal Sankat So Soi." },
        { hindi: "सरस्वती लक्ष्मी तुम काली। दिपै तुम्हारी ज्योति निराली॥", english: "Saraswati Lakshmi Tum Kali. Dipai Tumhari Jyoti Nirali." },
        { hindi: "तुम्हरी महिमा पार न पावैं। जो शारद शत मुख गुन गावैं॥", english: "Tumhari Mahima Paar Na Pavain. Jo Sharad Shat Mukh Gun Gavain." }
    ],
    finalDoha: {
        hindi: "सोन रूप शुचि शरण गत, जन की आप निहार।\nबालक अपना जान के, भव सागर से तार॥",
        english: "Son Roop Shuchi Sharan Gat, Jan Ki Aap Nihar.\nBalak Apna Jaan Ke, Bhav Sagar Se Taar."
    }
};

export const GAYATRI_AARTI: DevotionalContent = {
    type: 'aarti',
    titleHindi: "गायत्री आरती",
    titleEnglish: "Gayatri Aarti",
    verses: [
        { hindi: "जयति जय गायत्री माता, जयति जय गायत्री माता।\nस आदि शक्ति तुम ही, निश्चल बुद्धि विधाता॥", english: "Jayati Jai Gayatri Mata, Jayati Jai Gayatri Mata.\nSa Aadi Shakti Tum Hi, Nishchal Buddhi Vidhata." },
        { hindi: "जगत के पालनहार, तुम्हीं हो सुख दाता।\nतुम्हारी महिमा अपरम्पार, कोई न पावत पार॥", english: "Jagat Ke Palanhaar, Tumhi Ho Sukh Data.\nTumhari Mahima Aparampaar, Koi Na Pavat Paar." },
        { hindi: "तुम ही अन्नपूर्णा, तुम ही जगदंबा।\nतुम ही हो संतान, तुम्ही हो अम्बा॥", english: "Tum Hi Annapurna, Tum Hi Jagadamba.\nTum Hi Ho Santan, Tumhi Ho Amba." }
    ]
};

export const GAYATRI_MANTRA: DevotionalContent = {
  type: 'mantra',
  titleHindi: "गायत्री मंत्र",
  titleEnglish: "Gayatri Mantra",
  verses: [
    { 
      hindi: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥", 
      english: "Om Bhur Bhuva Swaha Tat Savitur Varenyam Bhargo Devasya Dheemahi Dhiyo Yo Nah Prachodayat." 
    },
    {
      hindi: "भावार्थ: उस प्राणस्वरूप, दुःखनाशक, सुखस्वरूप, श्रेष्ठ, तेजस्वी, पापनाशक, देवस्वरूप परमात्मा को हम अपनी अन्तरात्मा में धारण करें। वह परमात्मा हमारी बुद्धि को सन्मार्ग में प्रेरित करे।",
      english: "Meaning: We meditate on the glory of that Being who has produced this universe; may He enlighten our minds."
    }
  ]
};

// --- RAM CONTENT ---
export const RAM_CHALISA: DevotionalContent = {
    type: 'chalisa',
    titleHindi: "श्री राम चालीसा",
    titleEnglish: "Shree Ram Chalisa",
    doha: [
        { hindi: "श्री रघुबीर भक्त हितकारी, सुनि लीजै प्रभु अरज हमारी।\nनिशि दिन ध्यान धरै जो कोई, ता सम भक्त और नहिं होई॥", english: "Shri Raghubir Bhakta Hitkari, Suni Lijai Prabhu Araj Hamari.\nNishi Din Dhyan Dharai Jo Koi, Ta Sam Bhakta Aur Nahin Hoi." },
        { hindi: "ध्यान धरे शिवजी मन माहीं, ब्रह्मा इन्द्र पार नहिं पाहीं।\nजय जय जय रघुनाथ कृपाला, सदा करो संतन प्रतिपाला॥", english: "Dhyan Dhare Shivji Man Mahin, Brahma Indra Paar Nahin Pahin.\nJai Jai Jai Raghunath Kripala, Sada Karo Santan Pratipala." }
    ],
    chaupai: [
        { hindi: "भक्तन हित रघुपति अवतारा। लखि दामिनि छवि लज्जित धारा॥", english: "Bhaktan Hit Raghupati Avatara. Lakhi Damini Chhavi Lajjit Dhara." },
        { hindi: "मरिचिका रूप सुधाये। कौशल्या के उदर समाये॥", english: "Marichika Roop Sudhaye. Kaushalya Ke Udar Samaye." },
        { hindi: "वीणा, वेणु, शंख, मृदंगा। धरे राम तनु श्री अंगा॥", english: "Veena, Venu, Shankha, Mridanga. Dhare Ram Tanu Shri Anga." },
        { hindi: "शिव, सनकादिक, ब्रह्मा, नारद। सेवत राम चरण विशारद॥", english: "Shiv, Sankadik, Brahma, Narad. Sevat Ram Charan Visharad." },
        { hindi: "लक्ष्मण, भरत, शत्रुघ्न संगा। बालकेलि कीन्हि अति रंगा॥", english: "Lakshman, Bharat, Shatrughna Sanga. Balkeli Kinhi Ati Ranga." },
        { hindi: "काके पंख, बके, खग, धेनु। चरावन जात राम, लखि रेनु॥", english: "Kake Pankh, Bake, Khag, Dhenu. Charavan Jaat Ram, Lakhi Renu." },
        { hindi: "गुरु वशिष्ठ के चरणन लागा। विद्या ग्रहण कीन्हि बड़भागा॥", english: "Guru Vashishtha Ke Charanan Laga. Vidya Grahan Kinhi Badbhaga." },
        { hindi: "ताड़का नारि, सुबाहु संहारा। ऋषि यज्ञ कीन्हि रखवारा॥", english: "Tadka Nari, Subahu Sanhara. Rishi Yagya Kinhi Rakhvara." },
        { hindi: "जनक पुरी रघुबीर पधारे। शिव धनु भङ्ग, सीय उर धारे॥", english: "Janak Puri Raghubir Padhare. Shiv Dhanu Bhang, Siya Ur Dhare." },
        { hindi: "अवध पुरी रघुनन्दन आये। घर-घर नारी मंगल गाये॥", english: "Avadh Puri Raghunandan Aaye. Ghar-Ghar Nari Mangal Gaye." }
    ],
    finalDoha: {
        hindi: "आप दया राखो सदा, पुनि पुनि नाऊँ माथ।\nभक्ति, मुक्ति, ज्ञान सब, दीजै रघुनाथ॥",
        english: "Aap Daya Rakho Sada, Puni Puni Naun Maath.\nBhakti, Mukti, Gyan Sab, Dijai Raghunath."
    }
};

export const RAM_AARTI: DevotionalContent = {
    type: 'aarti',
    titleHindi: "श्री राम आरती",
    titleEnglish: "Shree Ram Aarti",
    verses: [
        { hindi: "श्री रामचन्द्र कृपालु भजु मन हरण भवभय दारुणं।\nनव कंज लोचन कंज मुख कर कंज पद कंजारुणं॥", english: "Shri Ramachandra Kripalu Bhaju Man Haran Bhavabhaya Darunam.\nNava Kanj Lochan Kanj Mukh Kar Kanj Pad Kanjarunam." },
        { hindi: "कन्दर्प अगणित अमित छवि नव नील नीरद सुन्दरं।\nपट पीत मानहु तडित रुचि शुचि नौमि जनक सुतावरं॥", english: "Kandarp Aganit Amit Chhavi Nav Neel Neerad Sundaram.\nPat Peet Manahu Tadit Ruchi Shuchi Naumi Janak Sutavaram." },
        { hindi: "भजु दीनबन्धु दिनेश दानव दैत्यवंश निकन्दनं।\nरघुनन्द आनन्दकन्द कौशलचन्द दशरथ नन्दनं॥", english: "Bhaju Deenbandhu Dinesh Danav Daityavansh Nikandanam.\nRaghunand Anandkand Kaushalchand Dashrath Nandanam." },
        { hindi: "सिर मुकुट कुण्डल तिलक चारु उदारु अङ्ग विभूषणं।\nआजानुभुज शर चाप धर संग्राम जित खरदूषणं॥", english: "Sir Mukut Kundal Tilak Charu Udaru Ang Vibhushanam.\nAajanubhuj Shar Chap Dhar Sangram Jit Khardushanam." },
        { hindi: "इति वदति तुलसीदास शंकर शेष मुनि मन रंजनं।\nमम हृदय कंज निवास कुरु कामादि खल दल गंजनं॥", english: "Iti Vadati Tulsidas Shankar Shesh Muni Man Ranjanam.\nMam Hriday Kanj Nivas Kuru Kamadi Khal Dal Ganjanam." }
    ]
};

export const RAM_MANTRA: DevotionalContent = {
    type: 'mantra',
    titleHindi: "श्री राम मंत्र",
    titleEnglish: "Shree Ram Mantra",
    verses: [
        { hindi: "रामाय रामभद्राय रामचन्द्राय वेधसे। रघुनाथाय नाथाय सीताया: पतये नम:॥", english: "Ramaya Ramabhadraya Ramachandraya Vedhase. Raghunathaya Nathaya Sitayah Pataye Namah." },
        { hindi: "श्री राम जय राम जय जय राम॥", english: "Shri Ram Jai Ram Jai Jai Ram." }
    ]
};

// --- KRISHNA CONTENT ---
export const KRISHNA_CHALISA: DevotionalContent = {
    type: 'chalisa',
    titleHindi: "श्री कृष्ण चालीसा",
    titleEnglish: "Shree Krishna Chalisa",
    doha: [
        { hindi: "बंशी शोभित कर मधुर, नील जलद तन श्याम।\nअरुण अधर जनु बिम्बफल, नयन कमल अभिराम॥", english: "Banshi Shobhit Kar Madhur, Neel Jalad Tan Shyam.\nArun Adhar Janu Bimbaphal, Nayan Kamal Abhiram." },
        { hindi: "पूर्ण इन्द्र, अरविन्द मुख, पीताम्बर शुभ साज।\nजय मनमोहन मदन छवि, कृष्णचन्द्र महाराज॥", english: "Purna Indra, Aravind Mukh, Pitambar Shubh Saaj.\nJai Manmohan Madan Chhavi, Krishnachandra Maharaj." }
    ],
    chaupai: [
        { hindi: "जय यदुनंदन जय जगवंदन। जय वसुदेव देवकी नन्दन॥", english: "Jai Yadunandan Jai Jagvandan. Jai Vasudev Devaki Nandan." },
        { hindi: "जय यशुदा सुत नन्द दुलारे। जय प्रभु भक्तन के दृग तारे॥", english: "Jai Yashuda Sut Nand Dulare. Jai Prabhu Bhaktan Ke Drig Tare." },
        { hindi: "जय नटनागर, नाग नथैया। कृष्ण कन्हैया धेनु चरैया॥", english: "Jai Natnagar, Nag Nathaiya. Krishna Kanhaiya Dhenu Charaiya." },
        { hindi: "पुनि नख पर प्रभु गिरिवर धारो। आओ दीनन कष्ट निवारो॥", english: "Puni Nakh Par Prabhu Girivar Dharo. Aao Deenan Kasht Nivaro." },
        { hindi: "वंशी मधुर अधर धरि टेरौ। होवे पूर्ण विनय यह मेरौ॥", english: "Vanshi Madhur Adhar Dhari Terau. Hove Purna Vinay Yah Merau." },
        { hindi: "आओ हरि पुनि माखन चाखो। आज लाज भारत की राखो॥", english: "Aao Hari Puni Makhan Chakho. Aaj Laaj Bharat Ki Rakho." },
        { hindi: "गोल कपोल, चिबुक अरुणारे। मृदु मुस्कान मोहित जग सारे॥", english: "Gol Kapol, Chibuk Arunare. Mridu Muskan Mohit Jag Sare." },
        { hindi: "राजित राजिव नयन विशाला। मोर मुकुट वैजंती माला॥", english: "Rajit Rajiv Nayan Vishala. Mor Mukut Vaijanti Mala." },
        { hindi: "कुण्डल श्रवण, पीत पट आछे। कटि किंकिणी काछनी काछे॥", english: "Kundal Shravan, Peet Pat Aachhe. Kati Kinkini Kachhani Kachhe." },
        { hindi: "नील जलज सुन्दर तनु सोहे। छबि लखि, सुर नर मुनिमन मोहे॥", english: "Neel Jalaj Sundar Tanu Sohe. Chhabi Lakhi, Sur Nar Muniman Mohe." }
    ],
    finalDoha: {
        hindi: "कृष्ण चालीसा जो पढ़ै, उर धरि ध्यान लगाय।\nसब सुख भोगि, अन्त गति, पावै कृष्ण सहाय॥",
        english: "Krishna Chalisa Jo Padhai, Ur Dhari Dhyan Lagay.\nSab Sukh Bhogi, Anta Gati, Pavai Krishna Sahay."
    }
};

export const KRISHNA_AARTI: DevotionalContent = {
    type: 'aarti',
    titleHindi: "श्री कृष्ण आरती",
    titleEnglish: "Shree Krishna Aarti",
    verses: [
        { hindi: "आरती कुंजबिहारी की, श्री गिरिधर कृष्ण मुरारी की॥", english: "Aarti Kunjbihari Ki, Shri Giridhar Krishna Murari Ki." },
        { hindi: "गले में बैजंती माला, बजावै मुरली मधुर बाला।\nश्रवण में कुण्डल झलकाला, नंद के आनंद नंदलाला॥", english: "Gale Mein Vaijanti Mala, Bajavai Murli Madhur Bala.\nShravan Mein Kundal Jhalkala, Nand Ke Anand Nandlala." },
        { hindi: "गगन सम अंग कांति काली, राधिका चमक रही आली।\nलतन में ठाढ़े बनमाली, भ्रमर सी अलक, कस्तूरी तिलक, चंद्र सी झलक॥", english: "Gagan Sam Ang Kanti Kali, Radhika Chamak Rahi Aali.\nLatan Mein Thadhe Banmali, Bhramar Si Alak, Kasturi Tilak, Chandra Si Jhalak." },
        { hindi: "कनकमय मोर मुकुट बिलसै, देवता दर्शन को तरसैं।\nगगन सों सुमन रासि बरसै, बजे मुरचंग, मधुर मृदंग, ग्वालिन संग॥", english: "Kanakmay Mor Mukut Bilasai, Devata Darshan Ko Tarasain.\nGagan So Suman Rasi Barsai, Baje Murchang, Madhur Mridang, Gwalin Sang." }
    ]
};

export const KRISHNA_MANTRA: DevotionalContent = {
    type: 'mantra',
    titleHindi: "श्री कृष्ण मंत्र",
    titleEnglish: "Shree Krishna Mantra",
    verses: [
        { hindi: "ॐ नमो भगवते वासुदेवाय॥", english: "Om Namo Bhagavate Vasudevaya." },
        { hindi: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे॥", english: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare. Hare Ram Hare Ram Ram Ram Hare Hare." }
    ]
};

// --- SHIV CONTENT ---
export const SHIV_CHALISA: DevotionalContent = {
    type: 'chalisa',
    titleHindi: "श्री शिव चालीसा",
    titleEnglish: "Shree Shiv Chalisa",
    doha: [
        { hindi: "जय गणेश गिरिजा सुवन, मंगल मूल सुजान।\nकहत अयोध्यादास तुम, देहु अभय वरदान॥", english: "Jai Ganesh Girija Suvan, Mangal Mool Sujan.\nKahat Ayodhyadas Tum, Dehu Abhay Vardan." }
    ],
    chaupai: [
        { hindi: "जय गिरिजा पति दीन दयाला। सदा करत सन्तन प्रतिपाला॥", english: "Jai Girija Pati Deen Dayala. Sada Karat Santan Pratipala." },
        { hindi: "भाल चन्द्रमा सोहत नीके। कानन कुण्डल नागफनी के॥", english: "Bhal Chandrama Sohat Nike. Kanan Kundal Nagphani Ke." },
        { hindi: "अंग गौर शिर गंग बहाये। मुण्डमाल तन क्षार लगाये॥", english: "Ang Gaur Shir Gang Bahaye. Mundmal Tan Kshar Lagaye." },
        { hindi: "वस्त्र खाल बाघम्बर सोहे। छवि को देखि नाग मन मोहे॥", english: "Vastra Khal Baghambar Sohe. Chhavi Ko Dekhi Nag Man Mohe." },
        { hindi: "मैना मातु की हवे दुलारी। बाम अंग सोहत छवि न्यारी॥", english: "Maina Matu Ki Have Dulari. Bam Ang Sohat Chhavi Nyari." },
        { hindi: "कर त्रिशूल सोहत छवि भारी। करत सदा शत्रुन क्षयकारी॥", english: "Kar Trishul Sohat Chhavi Bhari. Karat Sada Shatrun Kshaykari." },
        { hindi: "नन्दि गणेश सोहै तहँ कैसे। सागर मध्य कमल हैं जैसे॥", english: "Nandi Ganesh Sohai Tahan Kaise. Sagar Madhya Kamal Hain Jaise." },
        { hindi: "कार्तिक श्याम और गणराऊ। या छवि को कहि जात न काऊ॥", english: "Kartik Shyam Aur Ganrau. Ya Chhavi Ko Kahi Jat Na Kau." },
        { hindi: "देवन जबहीं जाय पुकारा। तबहीं दुख प्रभु आप निवारा॥", english: "Devan Jabahi Jaay Pukara. Tabahi Dukh Prabhu Aap Nivara." },
        { hindi: "किया उपद्रव तारक भारी। देवन सब मिलि तुमहिं जुहारी॥", english: "Kiya Upadrav Tarak Bhari. Devan Sab Mili Tumahin Juhari." }
    ],
    finalDoha: {
        hindi: "नित नेम कर प्रातः ही, पाठ करौं चालीस।\nतुम मेरी मनोकामना, पूर्ण करो जगदीश॥",
        english: "Nit Nem Kar Pratah Hi, Path Karaun Chalis.\nTum Meri Manokamna, Purna Karo Jagdish."
    }
};

export const SHIV_AARTI: DevotionalContent = {
    type: 'aarti',
    titleHindi: "श्री शिव आरती",
    titleEnglish: "Shree Shiv Aarti",
    verses: [
        { hindi: "ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा।\nब्रह्मा विष्णु सदाशिव अर्द्धांगी धारा॥", english: "Om Jai Shiv Omkara, Swami Jai Shiv Omkara.\nBrahma Vishnu Sadashiv Arddhangi Dhara." },
        { hindi: "एकानन चतुरानन पंचानन राजे।\nहंसानन गरुड़ासन वृषवाहन साजे॥", english: "Ekanan Chaturanan Panchanan Raje.\nHansanan Garudasan Vrishvahan Saje." },
        { hindi: "दो भुज चार चतुर्भुज दस भुज अति सोहे।\nत्रिगुण रूपनिरखता त्रिभुवन जन मोहे॥", english: "Do Bhuj Char Chaturbhuj Das Bhuj Ati Sohe.\nTrigun Rupnirakhta Tribhuvan Jan Mohe." },
        { hindi: "अक्षमाला वनमाला रुण्डमाला धारी।\nत्रिपुरारी कंसारी कर माला धारी॥", english: "Akshamala Vanmala Rundmala Dhari.\nTripurari Kansari Kar Mala Dhari." },
        { hindi: "श्वेताम्बर पीताम्बर बाघम्बर अंगे।\nसनकादिक गरुड़ादिक भूतादिक संगे॥", english: "Shvetambar Pitambar Baghambar Ange.\nSankadik Garudadik Bhutadik Sange." }
    ]
};

export const SHIV_MANTRA: DevotionalContent = {
    type: 'mantra',
    titleHindi: "शिव मंत्र",
    titleEnglish: "Shiv Mantra",
    verses: [
        { hindi: "ॐ नमः शिवाय॥", english: "Om Namah Shivaya." },
        { hindi: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्॥", english: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam. Urvarukamiva Bandhanan Mrityormukshiya Mamritat." }
    ]
};

// --- DURGA CONTENT ---
export const DURGA_CHALISA: DevotionalContent = {
    type: 'chalisa',
    titleHindi: "श्री दुर्गा चालीसा",
    titleEnglish: "Shree Durga Chalisa",
    doha: [
        { hindi: "नमो नमो दुर्गे सुख करनी। नमो नमो अम्बे दुःख हरनी॥\nनिरंकार है ज्योति तुम्हारी। तिहूँ लोक फैली उजियारी॥", english: "Namo Namo Durge Sukh Karni. Namo Namo Ambe Dukh Harni.\nNirankar Hai Jyoti Tumhari. Tihun Lok Phaili Ujiyari." }
    ],
    chaupai: [
        { hindi: "शशि ललाट मुख महाविशाला। नेत्र लाल भृकुटि विकराला॥", english: "Shashi Lalat Mukh Mahavishala. Netra Lal Bhrikuti Vikrala." },
        { hindi: "रूप मातु को अधिक सुहावे। दरश करत जन अति सुख पावे॥", english: "Roop Matu Ko Adhik Suhave. Darash Karat Jan Ati Sukh Pave." },
        { hindi: "तुम संसार शक्ति लय कीना। पालन हेतु अन्न धन दीना॥", english: "Tum Sansar Shakti Lay Kina. Palan Hetu Anna Dhan Dina." },
        { hindi: "अन्नपूर्णा हुई जग पाला। तुम ही आदि सुन्दरी बाला॥", english: "Annapurna Hui Jag Pala. Tum Hi Aadi Sundari Bala." },
        { hindi: "प्रलयकाल सब नाशन हारी। तुम गौरी शिवशंकर प्यारी॥", english: "Pralaykal Sab Nashan Hari. Tum Gauri Shivshankar Pyari." },
        { hindi: "शिव योगी तुम्हरे गुण गावें। ब्रह्मा विष्णु तुम्हें नित ध्यावें॥", english: "Shiv Yogi Tumhare Gun Gaven. Brahma Vishnu Tumhe Nit Dhyaven." },
        { hindi: "रूप सरस्वती को तुम धारा। दे सुबुद्धि ऋषि मुनिन उबारा॥", english: "Roop Saraswati Ko Tum Dhara. De Subuddhi Rishi Munin Ubara." },
        { hindi: "धरयो रूप नरसिंह को अम्बा। परगट भई फाड़कर खम्बा॥", english: "Dharyo Roop Narsingh Ko Amba. Pargat Bhai Phadkar Khamba." },
        { hindi: "रक्षा करि प्रह्लाद बचायो। हिरणाकुश को स्वर्ग पठायो॥", english: "Raksha Kari Prahlad Bachayo. Hirnakush Ko Swarg Pathayo." },
        { hindi: "लक्ष्मी रूप धरो जग माहीं। श्री नारायण अंग समाहीं॥", english: "Lakshmi Roop Dharo Jag Mahin. Shri Narayan Ang Samahin." }
    ],
    finalDoha: {
        hindi: "मन कामना पूर्ण कर, दुःख दरिद्र हर लेहु।\nमातु आनन्द भरो, जय जय कार करेहु॥",
        english: "Man Kamana Purna Kar, Dukh Daridra Har Lehu.\nMatu Anand Bharo, Jai Jai Kar Karehu."
    }
};

export const DURGA_AARTI: DevotionalContent = {
    type: 'aarti',
    titleHindi: "श्री दुर्गा आरती",
    titleEnglish: "Shree Durga Aarti",
    verses: [
        { hindi: "जय अम्बे गौरी, मैया जय श्यामा गौरी।\nतुमको निशदिन ध्यावत, हरि ब्रह्मा शिवरी॥", english: "Jai Ambe Gauri, Maiya Jai Shyama Gauri.\nTumko Nishdin Dhyavat, Hari Brahma Shivri." },
        { hindi: "माँग सिन्दूर विराजत, टीको मृगमद को।\nउज्ज्वल से दोउ नैना, चन्द्रवदन नीको॥", english: "Maang Sindoor Virajat, Teeko Mrigamad Ko.\nUjjwal Se Dou Naina, Chandravadan Neeko." },
        { hindi: "कनक समान कलेवर, रक्ताम्बर राजै।\nरक्तपुष्प गल माला, कण्ठन पर साजै॥", english: "Kanak Saman Kalevar, Raktambar Rajai.\nRaktapushp Gal Mala, Kanthan Par Sajai." },
        { hindi: "केहरि वाहन राजत, खड्ग खप्पर धारी।\nसुर-नर-मुनिजन सेवत, तिनके दुःख हारी॥", english: "Kehari Vahan Rajat, Khadg Khappar Dhari.\nSur-Nar-Munijan Sevat, Tinke Dukh Hari." },
        { hindi: "कानन कुण्डल शोभित, नासाग्रे मोती।\nकोटिक चन्द्र दिवाकर, राजत सम ज्योति॥", english: "Kanan Kundal Shobhit, Nasagre Moti.\nKotik Chandra Divakar, Rajat Sam Jyoti." }
    ]
};

export const DURGA_MANTRA: DevotionalContent = {
    type: 'mantra',
    titleHindi: "दुर्गा मंत्र",
    titleEnglish: "Durga Mantra",
    verses: [
        { hindi: "ॐ दुं दुर्गायै नमः॥", english: "Om Dum Durgaye Namah." },
        { hindi: "सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके। शरण्ये त्र्यम्बके गौरी नारायणी नमोस्तुते॥", english: "Sarvamangal Mangalye Shive Sarvartha Sadhike. Sharanye Tryambake Gauri Narayani Namostute." }
    ]
};

// --- REGISTRY ---
export const CONTENT_REGISTRY: Record<string, DevotionalContent> = {
  'hanuman_chalisa': HANUMAN_CHALISA,
  'hanuman_aarti': HANUMAN_AARTI,
  'hanuman_mantra': HANUMAN_MANTRA,
  'ganesha_chalisa': GANESHA_CHALISA,
  'ganesha_aarti': GANESHA_AARTI,
  'ganesha_mantra': GANESHA_MANTRA,
  'gayatri_chalisa': GAYATRI_CHALISA,
  'gayatri_aarti': GAYATRI_AARTI,
  'gayatri_mantra': GAYATRI_MANTRA,
  'ram_chalisa': RAM_CHALISA,
  'ram_aarti': RAM_AARTI,
  'ram_mantra': RAM_MANTRA,
  'krishna_chalisa': KRISHNA_CHALISA,
  'krishna_aarti': KRISHNA_AARTI,
  'krishna_mantra': KRISHNA_MANTRA,
  'shiv_chalisa': SHIV_CHALISA,
  'shiv_aarti': SHIV_AARTI,
  'shiv_mantra': SHIV_MANTRA,
  'durga_chalisa': DURGA_CHALISA,
  'durga_aarti': DURGA_AARTI,
  'durga_mantra': DURGA_MANTRA,
};

export const DASHBOARD_ITEMS: DashboardItem[] = [
  { id: 'god', title: 'God / Deities', icon: '🛕', status: FeatureStatus.ACTIVE, route: '/gods' },
  { id: 'priest', title: 'Priest Booking', icon: '👳', status: FeatureStatus.COMING_SOON },
  { id: 'temples', title: 'Nearby Temples', icon: '🏛', status: FeatureStatus.COMING_SOON },
  { id: 'pilgrimage', title: 'Yatra / Pilgrimage', icon: '🚩', status: FeatureStatus.COMING_SOON },
  { id: 'notifications', title: 'Daily Darshan', icon: '🔔', status: FeatureStatus.COMING_SOON },
];

export const GODS_LIST: GodProfile[] = [
  { 
    id: 'hanuman', 
    name: 'Hanuman', 
    hindiName: 'हनुमान', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Hanuman_idol.jpg/480px-Hanuman_idol.jpg', 
    status: FeatureStatus.ACTIVE, 
    primaryColor: 'bg-orange-600' 
  },
  { 
    id: 'ganesha', 
    name: 'Shree Ganesha', 
    hindiName: 'श्री गणेश', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Ganesh1.jpg/480px-Ganesh1.jpg', 
    status: FeatureStatus.ACTIVE, 
    primaryColor: 'bg-red-500' 
  },
  { 
    id: 'gayatri', 
    name: 'Maa Gayatri', 
    hindiName: 'माँ गायत्री', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Gayatri_Mata.jpg/480px-Gayatri_Mata.jpg', 
    status: FeatureStatus.ACTIVE, 
    primaryColor: 'bg-yellow-500' 
  },
  { 
    id: 'ram', 
    name: 'Shree Ram', 
    hindiName: 'श्री राम', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Raja_Ravi_Varma_-_Ramapanchayatan.jpg/480px-Raja_Ravi_Varma_-_Ramapanchayatan.jpg', 
    status: FeatureStatus.ACTIVE, 
    primaryColor: 'bg-blue-600' 
  },
  { 
    id: 'krishna', 
    name: 'Shree Krishna', 
    hindiName: 'श्री कृष्ण', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Krishna_holding_Govardhan_hill.jpg/480px-Krishna_holding_Govardhan_hill.jpg', 
    status: FeatureStatus.ACTIVE, 
    primaryColor: 'bg-cyan-600' 
  },
  { 
    id: 'shiv', 
    name: 'Mahadev', 
    hindiName: 'महादेव', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Shiva_statue_at_Rishikesh.jpg/480px-Shiva_statue_at_Rishikesh.jpg', 
    status: FeatureStatus.ACTIVE, 
    primaryColor: 'bg-stone-600' 
  },
  { 
    id: 'durga', 
    name: 'Maa Durga', 
    hindiName: 'माँ दुर्गा', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Durga_idol_w_kolkata.jpg/480px-Durga_idol_w_kolkata.jpg', 
    status: FeatureStatus.ACTIVE, 
    primaryColor: 'bg-red-600' 
  },
];
