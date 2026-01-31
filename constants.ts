
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

// --- GAYATRI MANTRA ---
export const GAYATRI_MANTRA_CONTENT: DevotionalContent = {
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

// --- REGISTRY ---
export const CONTENT_REGISTRY: Record<string, DevotionalContent> = {
  'hanuman_chalisa': HANUMAN_CHALISA,
  'hanuman_aarti': HANUMAN_AARTI,
  'ganesha_chalisa': GANESHA_CHALISA,
  'ganesha_aarti': GANESHA_AARTI,
  'gayatri_mantra': GAYATRI_MANTRA_CONTENT,
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
    image: 'https://cdn.pixabay.com/photo/2024/02/09/14/03/ai-generated-8563065_1280.jpg', 
    status: FeatureStatus.ACTIVE, 
    primaryColor: 'bg-orange-600' 
  },
  { 
    id: 'ganesha', 
    name: 'Shree Ganesha', 
    hindiName: 'श्री गणेश', 
    image: 'https://cdn.pixabay.com/photo/2023/09/14/19/11/ganesha-8253683_1280.jpg', 
    status: FeatureStatus.ACTIVE, 
    primaryColor: 'bg-red-500' 
  },
  { 
    id: 'gayatri', 
    name: 'Maa Gayatri', 
    hindiName: 'माँ गायत्री', 
    image: 'https://cdn.pixabay.com/photo/2023/06/25/11/12/woman-8086810_1280.jpg', 
    status: FeatureStatus.ACTIVE, 
    primaryColor: 'bg-yellow-500' 
  },
  { id: 'ram', name: 'Shree Ram', hindiName: 'श्री राम', image: 'https://picsum.photos/seed/ram/200/200', status: FeatureStatus.COMING_SOON, primaryColor: 'bg-blue-600' },
  { id: 'krishna', name: 'Shree Krishna', hindiName: 'श्री कृष्ण', image: 'https://picsum.photos/seed/krishna/200/200', status: FeatureStatus.COMING_SOON, primaryColor: 'bg-cyan-600' },
  { id: 'shiv', name: 'Mahadev', hindiName: 'महादेव', image: 'https://picsum.photos/seed/shiv/200/200', status: FeatureStatus.COMING_SOON, primaryColor: 'bg-stone-600' },
  { id: 'durga', name: 'Maa Durga', hindiName: 'माँ दुर्गा', image: 'https://picsum.photos/seed/durga/200/200', status: FeatureStatus.COMING_SOON, primaryColor: 'bg-red-600' },
];
