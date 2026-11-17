

function toggleTheme() {
    document.body.classList.toggle("dark");

    const btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "☀️ Day Mode";
    } else {
        btn.innerHTML = "🌙 Night Mode";
    }
}

const stories = {

    en: {
        heading: "A World of Wonderful Stories!",
        subtitle: "Explore magical stories and learn beautiful lessons.",
        title: "The Tortoise and the Hare",
        story: "Once upon a time, a proud hare lived in a beautiful forest. He always laughed at the slow tortoise. One day, the tortoise challenged the hare to a race. The hare ran very fast and went far ahead. Feeling confident, he slept under a tree. Meanwhile, the tortoise continued walking slowly without stopping. Finally, the tortoise reached the finish line first! Everyone celebrated the tortoise's victory.",
        moralTitle: "Moral of the Story:",
        moral: "Slow and steady wins the race!"
    },

    ta: {
        heading: "அற்புதமான கதைகளின் உலகம்!",
        subtitle: "அழகான கதைகளைப் படித்து நல்ல பாடங்களைக் கற்றுக்கொள்ளுங்கள்.",
        title: "ஆமையும் முயலும்",
        story: "ஒரு அழகான காட்டில் ஒரு வேகமான முயல் வாழ்ந்து வந்தது. அது மெதுவாக நடக்கும் ஆமையைப் பார்த்து எப்போதும் கேலி செய்தது. ஒருநாள் ஆமை முயலை ஓட்டப்பந்தயத்திற்கு அழைத்தது. முயல் வேகமாக ஓடி முன்னே சென்றது. பின்னர் ஒரு மரத்தடியில் தூங்கிவிட்டது. ஆனால் ஆமை மெதுவாக தொடர்ந்து நடந்தது. இறுதியில் ஆமை வெற்றிக் கோட்டை முதலில் அடைந்தது. அனைவரும் ஆமையைப் பாராட்டினர்.",
        moralTitle: "கதையின் நீதி:",
        moral: "மெதுவாகவும் தொடர்ந்து முயற்சி செய்தாலும் வெற்றி நிச்சயம்!"
    },

    hi: {
        heading: "अद्भुत कहानियों की दुनिया!",
        subtitle: "सुंदर कहानियाँ पढ़ें और अच्छी बातें सीखें।",
        title: "कछुआ और खरगोश",
        story: "एक जंगल में एक तेज खरगोश रहता था। वह धीमे कछुए का मजाक उड़ाता था। एक दिन कछुए ने दौड़ की चुनौती दी। खरगोश बहुत तेज दौड़ा और आगे निकल गया। फिर वह पेड़ के नीचे सो गया। कछुआ धीरे-धीरे चलता रहा और अंत में जीत गया।",
        moralTitle: "कहानी की सीख:",
        moral: "धीरे और लगातार चलने वाला ही जीतता है!"
    },

    te: {
        heading: "అద్భుతమైన కథల ప్రపంచం!",
        subtitle: "కథలు చదివి మంచి విషయాలు నేర్చుకోండి.",
        title: "తాబేలు మరియు కుందేలు",
        story: "ఒక అడవిలో వేగంగా పరిగెత్తే కుందేలు ఉండేది. అది నెమ్మదిగా నడిచే తాబేలును ఎగతాళి చేసేది. ఒక రోజు ఇద్దరూ పందెం పెట్టుకున్నారు. కుందేలు వేగంగా పరిగెత్తి చెట్టు కింద నిద్రపోయింది. తాబేలు ఆగకుండా నడిచి చివరకు గెలిచింది.",
        moralTitle: "కథలోని నీతి:",
        moral: "నెమ్మదిగా అయినా నిరంతరం ప్రయత్నిస్తే విజయం సాధించవచ్చు!"
    },

    ml: {
        heading: "അത്ഭുതകരമായ കഥകളുടെ ലോകം!",
        subtitle: "കഥകൾ വായിച്ച് നല്ല പാഠങ്ങൾ പഠിക്കൂ.",
        title: "ആമയും മുയലും",
        story: "ഒരു കാട്ടിൽ വേഗത്തിൽ ഓടുന്ന ഒരു മുയൽ ഉണ്ടായിരുന്നു. അത് പതുക്കെ നടക്കുന്ന ആമയെ കളിയാക്കി. ഒരു ദിവസം അവർ ഓട്ടമത്സരം നടത്തി. മുയൽ മുന്നോട്ട് ഓടി ഉറങ്ങിപ്പോയി. ആമ പതുക്കെ നടന്ന് അവസാനം വിജയിച്ചു.",
        moralTitle: "കഥയുടെ ഗുണപാഠം:",
        moral: "പതുക്കെയാണെങ്കിലും സ്ഥിരമായി ശ്രമിച്ചാൽ വിജയം നേടാം!"
    },

    kn: {
        heading: "ಅದ್ಭುತ ಕಥೆಗಳ ಜಗತ್ತು!",
        subtitle: "ಕಥೆಗಳನ್ನು ಓದಿ ಒಳ್ಳೆಯ ಪಾಠಗಳನ್ನು ಕಲಿಯಿರಿ.",
        title: "ಆಮೆ ಮತ್ತು ಮೊಲ",
        story: "ಒಂದು ಕಾಡಿನಲ್ಲಿ ವೇಗವಾಗಿ ಓಡುವ ಮೊಲವಿತ್ತು. ಅದು ನಿಧಾನವಾಗಿ ನಡೆಯುವ ಆಮೆಯನ್ನು ಹಾಸ್ಯ ಮಾಡುತ್ತಿತ್ತು. ಒಂದು ದಿನ ಓಟದ ಸ್ಪರ್ಧೆ ನಡೆಯಿತು. ಮೊಲ ಮುಂದೆ ಓಡಿ ಮರದ ಕೆಳಗೆ ಮಲಗಿತು. ಆಮೆ ನಿಧಾನವಾಗಿ ನಡೆದು ಕೊನೆಗೆ ಗೆದ್ದಿತು.",
        moralTitle: "ಕಥೆಯ ನೀತಿ:",
        moral: "ನಿಧಾನವಾಗಿ ಮತ್ತು ನಿರಂತರವಾಗಿ ಪ್ರಯತ್ನಿಸಿದರೆ ಗೆಲುವು ಖಚಿತ!"
    },

    fr: {
        heading: "Un Monde de Merveilleuses Histoires!",
        subtitle: "Découvrez de belles histoires et leurs leçons.",
        title: "Le Lièvre et la Tortue",
        story: "Un lièvre rapide se moquait toujours d'une tortue lente. Un jour, ils ont décidé de faire une course. Le lièvre a couru très vite puis s'est endormi sous un arbre. La tortue a continué lentement sans s'arrêter et a gagné la course.",
        moralTitle: "La morale:",
        moral: "Rien ne sert de courir, il faut partir à point!"
    },

    es: {
        heading: "¡Un Mundo de Historias Maravillosas!",
        subtitle: "Descubre historias mágicas y aprende lecciones.",
        title: "La Liebre y la Tortuga",
        story: "Una liebre rápida se burlaba de una tortuga lenta. Un día hicieron una carrera. La liebre corrió muy rápido y luego durmió bajo un árbol. La tortuga siguió caminando lentamente y ganó la carrera.",
        moralTitle: "Moraleja:",
        moral: "¡Despacio y con constancia se gana la carrera!"
    },

    de: {
        heading: "Eine Welt voller wunderbarer Geschichten!",
        subtitle: "Entdecke Geschichten und lerne schöne Lektionen.",
        title: "Der Hase und die Schildkröte",
        story: "Ein schneller Hase machte sich über eine langsame Schildkröte lustig. Eines Tages machten sie ein Rennen. Der Hase rannte schnell und schlief unter einem Baum ein. Die Schildkröte ging langsam weiter und gewann das Rennen.",
        moralTitle: "Moral:",
        moral: "Langsam und stetig gewinnt das Rennen!"
    },

    it: {
        heading: "Un Mondo di Storie Meravigliose!",
        subtitle: "Scopri storie magiche e impara belle lezioni.",
        title: "La Lepre e la Tartaruga",
        story: "Una lepre veloce prendeva in giro una tartaruga lenta. Un giorno fecero una gara. La lepre corse velocemente e poi dormì sotto un albero. La tartaruga continuò a camminare e vinse la gara.",
        moralTitle: "Morale:",
        moral: "Chi va piano va sano e va lontano!"
    },

    ja: {
        heading: "すばらしい物語の世界！",
        subtitle: "物語を読んで大切なことを学びましょう。",
        title: "ウサギとカメ",
        story: "ある森に足の速いウサギがいました。ウサギはゆっくり歩くカメを笑っていました。ある日、二匹は競争しました。ウサギは速く走り、木の下で眠ってしまいました。カメは歩き続け、最後に勝ちました。",
        moralTitle: "物語の教訓:",
        moral: "ゆっくりでも着実に進めば勝てます！"
    },

    zh: {
        heading: "精彩故事的世界！",
        subtitle: "阅读有趣的故事，学习美好的道理。",
        title: "龟兔赛跑",
        story: "从前，森林里住着一只跑得很快的兔子。它经常嘲笑走得慢的乌龟。一天，它们举行了一场比赛。兔子跑得很快，然后在树下睡着了。乌龟一直慢慢向前走，最后赢得了比赛。",
        moralTitle: "故事寓意:",
        moral: "坚持不懈，就能取得成功！"
    }

};

function changeLanguage() {

    const lang = document.getElementById("language").value;
    const s = stories[lang];

    document.getElementById("heading").innerText = s.heading;
    document.getElementById("subtitle").innerText = s.subtitle;
    document.getElementById("storyTitle").innerText = s.title;
    document.getElementById("storyText").innerText = s.story;
    document.getElementById("moralTitle").innerText = s.moralTitle;
    document.getElementById("moralText").innerText = s.moral;
}

function readStory() {

    const text = document.getElementById("storyText").innerText;
    const lang = document.getElementById("language").value;

    const languageCodes = {
        en: "en-US",
        ta: "ta-IN",
        hi: "hi-IN",
        te: "te-IN",
        ml: "ml-IN",
        kn: "kn-IN",
        fr: "fr-FR",
        es: "es-ES",
        de: "de-DE",
        it: "it-IT",
        ja: "ja-JP",
        zh: "zh-CN"
    };

    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = languageCodes[lang];

    // Slow and deep storyteller voice
    speech.rate = 0.78;
    speech.pitch = 0.75;
    speech.volume = 1;

    const voices = speechSynthesis.getVoices();

    const voice = voices.find(v =>
        v.lang.toLowerCase() === languageCodes[lang].toLowerCase()
        && /male|man|david|ravi|google/i.test(v.name)
    );

    if (voice) {
        speech.voice = voice;
    }

    speechSynthesis.speak(speech);
}
