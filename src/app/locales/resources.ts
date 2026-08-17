export const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Us",
        services: "Services",
        contact: "Contact",
        login: "Login",
        signup: "Sign Up",
        dashboard: "Dashboard",
        logout: "Logout",
        mission: "Mission",
        goals: "Goals",
        vision: "Vision",
        team: "Team",
        products: "Products",
        allServices: "All services & products",
      },
      auth: {
        loginTitle: "Login",
        signupTitle: "Sign Up",
        email: "Email address",
        password: "Password",
        confirmPassword: "Confirm password",
        fullName: "Full name",
        disabilityCategory: "Disability category",
        preferredLanguage: "Preferred language",
        forgotPassword: "Forgot password?",
        signIn: "Sign in",
        createAccount: "Create account",
        noAccount: "Need an account?",
        hasAccount: "Already registered?",
        loginIntro: "Use the email and password connected to your account.",
        signupIntro: "Choose your accessibility profile and preferred language.",
      },
      dashboard: {
        administration: "Administration",
        assistiveWorkspace: "Assistive workspace",
        adminDashboard: "Admin dashboard",
        userManagement: "User management",
        settings: "Settings",
        blindService: "Blind service",
        deafService: "Deaf service",
        muteService: "Mute service",
        mobility: "Mobility",
        welcome: "Welcome",
        blindEyebrow: "Blind solution",
        blindTitle: "Screen reader support and Smart Blind Stick services",
        blindDescription: "A clear, keyboard-friendly workspace for screen reader setup, Smart Blind Stick support, and service requests.",
        muteEyebrow: "Mute solution",
        muteTitle: "Text-to-speech communication service",
        muteDescription: "Type a message, refine it with AI, and play it aloud using the browser speech engine.",
        deafEyebrow: "Deaf solution",
        deafTitle: "Real-time voice-to-text workspace",
        deafDescription: "Use this space for live transcription workflows and Gemini writing support.",
        mobilityEyebrow: "Mobility future plan",
        mobilityTitle: "Mobility support is a future plan",
        mobilityDescription: "Mobility tools are planned for a future release. This dashboard keeps the space ready while current MVP work focuses on SBS, Talka, and Sense AI.",
      },
      speech: {
        textToSpeech: "Text to speech",
        speechToText: "Speech to text",
        language: "Language",
        voice: "Voice",
        play: "Play",
        pause: "Pause",
        stop: "Stop",
        startListening: "Start listening",
        stopListening: "Stop listening",
        transcript: "Live transcript",
        recentPhrases: "Recent phrases",
        recentTranscripts: "Recent transcripts",
        unsupportedTts: "Text-to-speech is not supported in this browser.",
        unsupportedStt: "Microphone audio recording is not supported in this browser.",
        message: "Message",
        autoVoice: "Auto voice",
        typeMessage: "Type your message here",
        resume: "Resume",
        optimize: "Optimize with Gemini",
        optimizing: "Optimizing...",
        clear: "Clear",
        firefoxFallback: "Gemini audio transcription is ready.",
        ownTranscriptionReady: "Baho Tech audio transcription is ready.",
        listening: "Listening. Speak clearly near your microphone.",
        transcriptEmpty: "Transcript text will appear here.",
      },
      voice: {
        title: "Voice commands",
        start: "Start voice commands",
        stop: "Stop voice commands",
        available: "Available commands",
        unsupported: "Voice commands are not supported in this browser.",
        wakeHint: "Say \"hey activate\" to read the page, or \"let's go\" to give the AI a command.",
        lastHeard: "Last heard",
      },
      ai: {
        assistant: "Gemini assistant",
        readPage: "Read page",
        askLabel: "Ask Gemini for help",
        askPlaceholder: "Ask for help, navigation, or page explanation",
        send: "Send message",
        failed: "AI assistant failed.",
        readFailed: "Could not read page.",
        commandMode: "Command mode",
        listening: "Listening...",
        listeningForCommand: "I am listening. Tell me what to do.",
        commandFailed: "I could not complete that command.",
      },
      writing: {
        title: "Gemini writing assistant",
        draft: "Text or dictated draft",
        mode: "Mode",
        simplify: "Simplify",
        expand: "Expand",
        formal: "Formal",
        short: "Short",
        translate: "Translate",
        working: "Working...",
        action: "Help me write",
        failed: "Writing assistant failed.",
      },
      vision: {
        title: "Gemini vision assist",
        startCamera: "Start camera",
        analyzeScene: "Analyze scene",
        speakResult: "Speak result",
        cameraPreview: "Camera preview",
        permissionError: "Camera permission was denied or unavailable.",
        failed: "Vision analysis failed.",
      },
      sign: {
        title: "Gemini sign-language assist",
        startCamera: "Start camera",
        interpretGesture: "Interpret gesture",
        speakResult: "Speak result",
        cameraPreview: "Gesture camera preview",
        permissionError: "Camera permission was denied or unavailable.",
        failed: "Sign-language interpretation failed.",
      },
      about: {
        goals: {
          eyebrow: "Our roadmap",
          title: "Our Goals",
          lead: "Four commitments that guide what we build, who we build it with, and the change we want it to make.",
          navLabel: "Baho Tech goals roadmap",
          phaseLabel: "Goal {{current}} of {{total}}",
          innovate: {
            label: "Innovate",
            body: "Innovate cutting-edge assistive technologies and inclusive digital solutions that enable people with disabilities to participate fully in society with dignity, autonomy, and equal access.",
          },
          deliver: {
            label: "Deliver",
            body: "Deliver professional accessibility consulting and WCAG-compliant development services that transform organizations into inclusive digital leaders.",
          },
          establish: {
            label: "Establish",
            body: "Establish industry standards and best practices in accessible design through training, workshops, and evidence-based methodologies that create lasting impact.",
          },
          champion: {
            label: "Champion",
            body: "Champion inclusive technology policy and advocate for accessibility regulations that ensure no one is left behind in the digital transformation.",
          },
        },
      },
      services: {
        meta: {
          title: "Assistive Technology Development | Baho Inclusive Tech",
          description:
            "Baho Inclusive Tech develops practical assistive technology, including SBS the Smart Blind Stick, that helps people with disabilities overcome everyday barriers and live more independently.",
        },
        hero: {
          eyebrow: "Assistive technology development",
          title: "Technology That Makes Independence Possible",
          lead: "For many people with disabilities, everyday activities can become difficult when the world around them is not designed with accessibility in mind. At Baho Inclusive Tech, we develop practical technologies that help remove these barriers and make everyday life safer, easier, and more independent.",
          ctaPrimary: "See how we build",
          ctaSecondary: "Talk to our team",
        },
        problem: {
          eyebrow: "The human challenge",
          title: "Everyday Tasks Shouldn't Be Barriers to Independence",
          p1: "Navigating an unfamiliar environment, accessing information, communicating, learning, or completing everyday tasks can require additional support for people with disabilities.",
          p2: "These are not simply technology problems. They are everyday human challenges.",
          p3: "We believe technology should help reduce those barriers, not create new ones.",
        },
        approach: {
          eyebrow: "Our approach",
          title: "We Turn Accessibility Challenges Into Practical Solutions",
          p1: "We start with real challenges experienced by people with disabilities. We listen, understand the environment in which the challenge occurs, and design technology around the person's needs.",
          p2: "Our solutions combine assistive technology, artificial intelligence, computer vision, sensors, software, and human-centered design to create practical tools that support greater independence.",
        },
        process: {
          eyebrow: "How we work",
          title: "From Real Challenge to Working Solution",
          lead: "Every solution moves through the same six stages, shaped throughout by the people who will use it.",
          navLabel: "Our development process",
          stepPosition: "Stage {{current}} of {{total}}",
          understand: {
            title: "Understand",
            body: "We listen to the person and study the environment where the barrier actually happens.",
          },
          design: {
            title: "Design",
            body: "We shape a solution around the person's needs, abilities, and daily routine.",
          },
          prototype: {
            title: "Prototype",
            body: "We build an early working version so the idea can be handled and judged in real life.",
          },
          test: {
            title: "Test",
            body: "We test with the people who will use it and gather honest, practical feedback.",
          },
          improve: {
            title: "Improve",
            body: "We refine the design based on what testing revealed, then test it again.",
          },
          deploy: {
            title: "Deploy",
            body: "We put the solution into daily use and keep supporting the people who rely on it.",
          },
        },
        areas: {
          eyebrow: "Solution areas",
          title: "Where Our Technology Helps",
          lead: "Each area begins with a barrier people meet in ordinary life.",
          seeing: {
            title: "Seeing & Understanding the Environment",
            body: "Technology that helps people with visual impairments better understand their surroundings, recognize objects, access information, and interact with their environment.",
          },
          moving: {
            title: "Moving With Greater Independence",
            body: "Solutions designed to support safer and more confident movement through everyday environments.",
          },
          communicating: {
            title: "Communicating & Accessing Information",
            body: "Technologies that help reduce barriers to communication and make information more accessible.",
          },
          learning: {
            title: "Learning & Participating",
            body: "Accessible technologies that help people with disabilities access education, digital tools, and opportunities.",
          },
          everyday: {
            title: "Everyday Independence",
            body: "Customized technologies designed around specific accessibility challenges in daily life.",
          },
        },
        offerings: {
          eyebrow: "What we offer",
          title: "Services That Support the Work",
          lead: "The practical services we provide alongside our own products.",
          consulting: {
            title: "Accessibility Consulting",
            description: "Expert guidance on making your digital products accessible to everyone.",
            details:
              "We provide accessibility audits, WCAG compliance testing, and strategic recommendations so your products meet international accessibility standards. Our consulting includes user testing with people with disabilities, detailed reporting, and ongoing support.",
          },
          assistiveDev: {
            title: "Assistive Technology Development",
            description: "Custom-built assistive technologies shaped around individual needs.",
            details:
              "We develop assistive technologies including voice-controlled interfaces, screen reader support, and specialized input devices. We work closely with users throughout development so our solutions meet their real needs.",
          },
          inclusiveDesign: {
            title: "Inclusive Design Services",
            description: "Design systems that work for everyone, from the ground up.",
            details:
              "We create inclusive design frameworks that prioritize accessibility from the start, so products are usable and functional for people of all abilities. This includes user research, wireframing, prototyping, and design system development.",
          },
          webDev: {
            title: "Accessible Web Development",
            description: "Build fully accessible websites and web applications.",
            details:
              "We develop websites and web applications that meet or exceed WCAG 2.1 Level AA standards. Our process includes semantic HTML, ARIA landmarks, keyboard navigation, and testing with assistive technologies.",
          },
          training: {
            title: "Training & Workshops",
            description: "Educate your team on accessibility best practices.",
            details:
              "We offer training programs and workshops that equip your team to create accessible products. Topics include WCAG guidelines, accessible development, inclusive design, and assistive technology demonstrations.",
          },
          prototyping: {
            title: "Rapid Prototyping",
            description: "Fast, iterative development of accessibility features.",
            details:
              "Our prototyping process allows quick testing and refinement of accessibility features. We work closely with users so solutions meet real-world needs through continuous feedback and iteration.",
          },
        },
        nodes: {
          eyebrow: "Our services",
          heading: "OUR SERVICES",
          subheading: "WHAT WE DO",
          configuration: {
            title: "System Configuration",
            body: "We configure assistive workflows, dashboards, and accessibility settings around each user profile.",
          },
          support: {
            title: "Support & Communication",
            body: "We help teams and users communicate clearly through training, support, and inclusive service design.",
          },
          quality: {
            title: "Quality & Excellence",
            body: "We test usability, accessibility, and service quality before products reach the people who need them.",
          },
          data: {
            title: "Data & Growth",
            body: "We use product feedback and accessibility insights to improve impact over time.",
          },
          community: {
            title: "Team & Community",
            body: "We build with users, caregivers, schools, and partners so assistive technology fits real life.",
          },
        },
        products: {
          eyebrow: "Our products",
          title: "Solutions We Are Building",
          lead: "Assistive technologies developed by Baho Inclusive Tech.",
          readMore: "Read more",
          showLess: "Show less",
          statusLabel: "Status",
          sbs: {
            title: "SBS — Smart Blind Stick",
            status: "MVP",
            description:
              "A smart assistive mobility solution designed to provide additional environmental awareness and support greater independence for people with visual impairments.",
            details:
              "SBS is our Smart Blind Stick, currently at MVP stage. It focuses on practical mobility support, obstacle awareness, and the service workflows around it, while the hardware and software experience continue to mature through testing with the people who use it.",
          },
          senseAi: {
            title: "Sense AI",
            status: "Coming soon",
            description:
              "An AI accessibility companion for voice, vision, translation, and hands-free assistance.",
            details:
              "Sense AI is planned as Baho Inclusive Tech's intelligent accessibility layer. It will combine voice control, scene understanding, translation, and page guidance so users can move through digital systems with less friction.",
          },
          talka: {
            title: "Talka",
            status: "In development",
            description:
              "A communication and reading assistant built for accessible daily interactions.",
            details:
              "Talka is in development as a practical assistant for communication, reading support, and multilingual accessibility workflows. It is being shaped around real user needs before a full release.",
          },
        },
        cta: {
          title: "Let's Remove a Barrier Together",
          lead: "We don't build technology simply because technology is possible. We build it because people deserve fewer barriers to living independently.",
          button: "Talk to our team",
        },
      },
      common: {
        skipToContent: "Skip to main content",
      },
      footer: {
        tagline: "Creating innovative solutions for people with disabilities. Technology that empowers everyone.",
        quickLinks: "Quick links",
        contactHeading: "Contact",
        newsletter: "Newsletter",
        newsletterIntro: "Subscribe to our newsletter for updates",
        emailPlaceholder: "Your email",
        emailLabel: "Email address for our newsletter",
        subscribe: "Subscribe",
        socialHeading: "Follow us",
        followOn: "Baho Tech on {{network}}",
        emailUs: "Email Baho Tech",
        rights: "© {{year}} Baho Tech. All rights reserved. Empowering lives through technology.",
      },
      languages: {
        en: "English",
        rw: "Kinyarwanda",
        fr: "French",
        sw: "Swahili",
      },
    },
  },
  rw: {
    translation: {
      nav: {
        home: "Ahabanza",
        about: "Ibitwerekeye",
        services: "Serivisi",
        contact: "Twandikire",
        login: "Injira",
        signup: "Iyandikishe",
        dashboard: "Ibiro",
        logout: "Sohoka",
        mission: "Intego nkuru",
        goals: "Intego",
        vision: "Icyerekezo",
        team: "Itsinda",
        products: "Ibicuruzwa",
        allServices: "Serivisi n'ibicuruzwa byose",
      },
      auth: {
        loginTitle: "Injira",
        signupTitle: "Iyandikishe",
        email: "Imeyili",
        password: "Ijambobanga",
        confirmPassword: "Emeza ijambobanga",
        fullName: "Amazina yose",
        disabilityCategory: "Icyiciro cy'ubumuga",
        preferredLanguage: "Ururimi uhitamo",
        forgotPassword: "Wibagiwe ijambobanga?",
        signIn: "Injira",
        createAccount: "Fungura konti",
        noAccount: "Nta konti ufite?",
        hasAccount: "Usanzwe ufite konti?",
        loginIntro: "Koresha imeyili n'ijambobanga bya konti yawe.",
        signupIntro: "Hitamo umwirondoro wo kugufasha n'ururimi ukoresha.",
      },
      dashboard: {
        administration: "Ubuyobozi",
        assistiveWorkspace: "Aho serivisi zigufasha ziri",
        adminDashboard: "Ibiro by'umuyobozi",
        userManagement: "Gucunga abakoresha",
        settings: "Igenamiterere",
        blindService: "Serivisi y'abatabona",
        deafService: "Serivisi y'abatumva",
        muteService: "Serivisi y'abatavuga",
        mobility: "Kugenda",
        welcome: "Murakaza neza",
        blindEyebrow: "Igisubizo cy'abatabona",
        blindTitle: "Ubufasha bwa screen reader na Smart Blind Stick",
        blindDescription: "Ahantu horoshye gukoresha na klavye ho gutunganya screen reader, SBS, no gusaba ubufasha.",
        muteEyebrow: "Igisubizo cy'abatavuga",
        muteTitle: "Serivisi yo guhindura inyandiko ijwi",
        muteDescription: "Andika ubutumwa, bunozwe na AI, hanyuma buvugwe n'ijwi rya mushakisha.",
        deafEyebrow: "Igisubizo cy'abatumva",
        deafTitle: "Ahantu h'ijwi rijya mu nyandiko ako kanya",
        deafDescription: "Koresha aha mu kubona inyandiko y'amajwi no gufashwa kwandika na Gemini.",
        mobilityEyebrow: "Gahunda izaza yo gufasha kugenda",
        mobilityTitle: "Ubufasha bwo kugenda buri muri gahunda izaza",
        mobilityDescription: "Ibikoresho byo gufasha kugenda biteganyijwe mu isohoka rizaza. Iyi dashboard irateguwe mu gihe ibikorwa bya MVP byibanda kuri SBS, Talka, na Sense AI.",
      },
      speech: {
        textToSpeech: "Inyandiko ijya mu ijwi",
        speechToText: "Ijwi rijya mu nyandiko",
        language: "Ururimi",
        voice: "Ijwi",
        play: "Vuga",
        pause: "Hagarika gato",
        stop: "Hagarika",
        startListening: "Tangira kumva",
        stopListening: "Hagarika kumva",
        transcript: "Inyandiko y'ako kanya",
        recentPhrases: "Interuro ziheruka",
        recentTranscripts: "Inyandiko ziheruka",
        unsupportedTts: "Mushakisha yawe ntishyigikira gusoma inyandiko mu ijwi.",
        unsupportedStt: "Mushakisha yawe ntishyigikira gufata amajwi ya mikoro.",
        message: "Ubutumwa",
        autoVoice: "Hitamo ijwi mu buryo bwikora",
        typeMessage: "Andika ubutumwa bwawe hano",
        resume: "Komeza",
        optimize: "Binoze na Gemini",
        optimizing: "Biratunganywa...",
        clear: "Siba",
        firefoxFallback: "Uburyo bwa Gemini bwo guhindura amajwi inyandiko buriteguye.",
        ownTranscriptionReady: "Uburyo bwa Baho Tech bwo guhindura amajwi inyandiko buriteguye.",
        listening: "Ndumva. Vugira hafi ya mikoro.",
        transcriptEmpty: "Inyandiko izagaragara hano.",
      },
      voice: {
        title: "Amabwiriza y'ijwi",
        start: "Tangira amabwiriza y'ijwi",
        stop: "Hagarika amabwiriza y'ijwi",
        available: "Amabwiriza ahari",
        unsupported: "Amabwiriza y'ijwi ntashyigikiwe muri iyi mushakisha.",
        wakeHint: "Vuga \"hey activate\" kugira ngo AI isome paji, cyangwa \"let's go\" uyihe ibwiriza.",
        lastHeard: "Byumvikanye bwa nyuma",
      },
      ai: {
        assistant: "Umufasha Gemini",
        readPage: "Soma paji",
        askLabel: "Saba Gemini kugufasha",
        askPlaceholder: "Saba ubufasha, kuyoborwa, cyangwa gusobanurirwa paji",
        send: "Ohereza ubutumwa",
        failed: "Umufasha AI yananiwe.",
        readFailed: "Ntibyakunze gusoma paji.",
        commandMode: "Uburyo bw'amabwiriza",
        listening: "Ndumva...",
        listeningForCommand: "Ndumva. Mbwira icyo nkora.",
        commandFailed: "Sinashoboye kurangiza iryo bwiriza.",
      },
      writing: {
        title: "Umufasha Gemini wo kwandika",
        draft: "Inyandiko cyangwa amagambo wavuze",
        mode: "Uburyo",
        simplify: "Byoroshe",
        expand: "Byagure",
        formal: "Byandike mu buryo bwemewe",
        short: "Bigire bigufi",
        translate: "Sobanura mu rundi rurimi",
        working: "Birimo gukorwa...",
        action: "Mfasha kwandika",
        failed: "Umufasha wo kwandika yananiwe.",
      },
      vision: {
        title: "Umufasha Gemini w'amashusho",
        startCamera: "Tangira kamera",
        analyzeScene: "Sobanura ibiri imbere",
        speakResult: "Vuga igisubizo",
        cameraPreview: "Ishusho ya kamera",
        permissionError: "Uburenganzira bwa kamera bwanze cyangwa kamera ntibonetse.",
        failed: "Gusobanura ishusho byanze.",
      },
      sign: {
        title: "Umufasha Gemini w'amarenga",
        startCamera: "Tangira kamera",
        interpretGesture: "Sobanura ikimenyetso",
        speakResult: "Vuga igisubizo",
        cameraPreview: "Ishusho ya kamera y'amarenga",
        permissionError: "Uburenganzira bwa kamera bwanze cyangwa kamera ntibonetse.",
        failed: "Gusobanura ikimenyetso byanze.",
      },
      about: {
        goals: {
          eyebrow: "Gahunda yacu",
          title: "Intego zacu",
          lead: "Inshingano enye ziyobora ibyo twubaka, abo twubakana na bo, n'impinduka twifuza ko bizana.",
          navLabel: "Gahunda y'intego za Baho Tech",
          phaseLabel: "Intego ya {{current}} kuri {{total}}",
          innovate: {
            label: "Guhanga",
            body: "Guhanga ikoranabuhanga rifasha rya kijyambere n'ibisubizo bya digitale birimo bose bituma abantu bafite ubumuga bagira uruhare rwuzuye mu muryango bafite icyubahiro, kwigenga, no kugera ku byo abandi bageraho.",
          },
          deliver: {
            label: "Gutanga",
            body: "Gutanga ubujyanama bw'umwuga ku bushobozi bwo kugerwaho na serivisi z'iterambere zubahiriza WCAG zihindura imiryango ikaba iy'imbere mu bijyanye na digitale irimo bose.",
          },
          establish: {
            label: "Gushyiraho",
            body: "Gushyiraho amahame n'ingamba nziza mu gishushanyo kigerwaho binyuze mu mahugurwa, inyigisho, n'uburyo bushingiye ku bimenyetso bigira ingaruka zirambye.",
          },
          champion: {
            label: "Kuvugira",
            body: "Kuvugira politiki y'ikoranabuhanga irimo bose no guharanira amabwiriza y'ubushobozi bwo kugerwaho atuma nta n'umwe usigara inyuma mu ihinduka rya digitale.",
          },
        },
      },
      services: {
        meta: {
          title: "Iterambere ry'ikoranabuhanga rifasha | Baho Inclusive Tech",
          description:
            "Baho Inclusive Tech itezimbere ikoranabuhanga rifatika, harimo SBS ari yo nkoni y'ubwenge y'abatabona, rifasha abantu bafite ubumuga gutsinda inzitizi za buri munsi no kubaho bigenga.",
        },
        hero: {
          eyebrow: "Iterambere ry'ikoranabuhanga rifasha",
          title: "Ikoranabuhanga rituma kwigenga bishoboka",
          lead: "Ku bantu benshi bafite ubumuga, ibikorwa bya buri munsi bishobora kugorana iyo ibidukikije bitateguwe hitawe ku bushobozi bwabo. Muri Baho Inclusive Tech, dutezimbere ikoranabuhanga rifatika rifasha gukuraho izo nzitizi kandi rigatuma ubuzima bwa buri munsi bugira umutekano, buboroha, kandi bukigenga kurushaho.",
          ctaPrimary: "Reba uko dukora",
          ctaSecondary: "Vugana n'itsinda ryacu",
        },
        problem: {
          eyebrow: "Ikibazo cy'abantu",
          title: "Imirimo ya buri munsi ntigomba kuba inzitizi zo kwigenga",
          p1: "Kugendera ahantu utamenyereye, kubona amakuru, kuvugana, kwiga, cyangwa kurangiza imirimo ya buri munsi bishobora gusaba ubufasha bw'inyongera ku bantu bafite ubumuga.",
          p2: "Ibi si ibibazo by'ikoranabuhanga gusa. Ni ibibazo abantu bahura na byo buri munsi.",
          p3: "Twizera ko ikoranabuhanga rigomba gufasha kugabanya izo nzitizi, aho kuzibyara izindi nshya.",
        },
        approach: {
          eyebrow: "Uburyo dukoramo",
          title: "Duhindura inzitizi z'ubushobozi ibisubizo bifatika",
          p1: "Dutangirira ku bibazo nyabyo abantu bafite ubumuga bahura na byo. Turumva, tugasobanukirwa aho ikibazo kibera, hanyuma tugategura ikoranabuhanga rishingiye ku byo umuntu akeneye.",
          p2: "Ibisubizo byacu bihuza ikoranabuhanga rifasha, ubwenge bw'ubukorano, kubona amashusho na mudasobwa, sensor, porogaramu, n'igishushanyo gishingiye ku muntu, kugira ngo bibyare ibikoresho bifatika bishyigikira kwigenga kurushaho.",
        },
        process: {
          eyebrow: "Uko dukora",
          title: "Kuva ku kibazo nyakuri kugeza ku gisubizo gikora",
          lead: "Buri gisubizo cyambukiranya intambwe esheshatu zimwe, kigenda kigenwa n'abazagikoresha.",
          navLabel: "Inzira yacu yo gutezimbere",
          stepPosition: "Intambwe ya {{current}} kuri {{total}}",
          understand: {
            title: "Gusobanukirwa",
            body: "Twumva umuntu kandi tukiga ahantu inzitizi ikorera koko.",
          },
          design: {
            title: "Gushushanya",
            body: "Duteguza igisubizo dushingiye ku byo umuntu akeneye, ubushobozi bwe, na gahunda ye ya buri munsi.",
          },
          prototype: {
            title: "Icyitegererezo",
            body: "Twubaka verisiyo ya mbere ikora kugira ngo igitekerezo gishobore gufatwa no gusuzumwa mu buzima nyabwo.",
          },
          test: {
            title: "Kugerageza",
            body: "Tugerageza n'abantu bazagikoresha kandi twakira ibitekerezo by'ukuri kandi bifatika.",
          },
          improve: {
            title: "Kunoza",
            body: "Tunoza igishushanyo dushingiye ku byagaragajwe no kugerageza, hanyuma tukongera tukagerageza.",
          },
          deploy: {
            title: "Gushyira mu bikorwa",
            body: "Dushyira igisubizo mu ikoreshwa rya buri munsi kandi tugakomeza gufasha abagishingikirizaho.",
          },
        },
        areas: {
          eyebrow: "Ibice by'ibisubizo",
          title: "Aho ikoranabuhanga ryacu rifasha",
          lead: "Buri gice gitangirira ku nzitizi abantu bahura na yo mu buzima busanzwe.",
          seeing: {
            title: "Kubona no gusobanukirwa ibidukikije",
            body: "Ikoranabuhanga rifasha abafite ubumuga bwo kutabona gusobanukirwa neza ibibakikije, kumenya ibintu, kubona amakuru, no gukorana n'aho bari.",
          },
          moving: {
            title: "Kugenda wigenga kurushaho",
            body: "Ibisubizo byateguwe gushyigikira kugenda mu mutekano no mu kwizera hagati mu bidukikije bya buri munsi.",
          },
          communicating: {
            title: "Kuvugana no kubona amakuru",
            body: "Ikoranabuhanga rifasha kugabanya inzitizi zo kuvugana kandi rigatuma amakuru ageraho byoroshye.",
          },
          learning: {
            title: "Kwiga no kugira uruhare",
            body: "Ikoranabuhanga rigerwaho rifasha abantu bafite ubumuga kubona uburezi, ibikoresho bya digitale, n'amahirwe.",
          },
          everyday: {
            title: "Kwigenga kwa buri munsi",
            body: "Ikoranabuhanga ryateguwe ku giti cyacyo hashingiwe ku nzitizi zihariye z'ubushobozi mu buzima bwa buri munsi.",
          },
        },
        offerings: {
          eyebrow: "Ibyo dutanga",
          title: "Serivisi zishyigikira aka kazi",
          lead: "Serivisi zifatika dutanga hamwe n'ibicuruzwa byacu bwite.",
          consulting: {
            title: "Ubujyanama ku bushobozi bwo kugerwaho",
            description: "Ubuyobozi bw'inzobere bwo gutuma ibicuruzwa byawe bya digitale bigerwaho na bose.",
            details:
              "Dutanga isuzuma ry'ubushobozi bwo kugerwaho, igenzura rya WCAG, n'inama za ngombwa kugira ngo ibicuruzwa byawe byubahirize amahame mpuzamahanga. Ubujyanama bwacu burimo kugerageza n'abantu bafite ubumuga, raporo zisobanutse, n'ubufasha buhoraho.",
          },
          assistiveDev: {
            title: "Iterambere ry'ikoranabuhanga rifasha",
            description: "Ikoranabuhanga rifasha ryubatswe ku giti cyacyo hashingiwe ku byo umuntu akeneye.",
            details:
              "Dutezimbere ikoranabuhanga rifasha harimo imikoranire igengwa n'ijwi, ubufasha bwa screen reader, n'ibikoresho byihariye byo kwinjiza amakuru. Dukorana bya hafi n'abakoresha mu iterambere ryose kugira ngo ibisubizo byacu bihuze n'ibyo bakeneye koko.",
          },
          inclusiveDesign: {
            title: "Serivisi z'igishushanyo kirimo bose",
            description: "Sisitemu z'igishushanyo zikorera bose, guhera ku murongo wa mbere.",
            details:
              "Dushyiraho uburyo bw'igishushanyo burimo bose bushyira imbere kugerwaho guhera mu ntangiriro, kugira ngo ibicuruzwa bikoreshwe kandi bikore ku bantu b'ubushobozi bwose. Ibi birimo ubushakashatsi ku bakoresha, gushushanya, icyitegererezo, no kubaka sisitemu y'igishushanyo.",
          },
          webDev: {
            title: "Iterambere rya interineti rigerwaho",
            description: "Kubaka imbuga n'ibikorwa bya interineti bigerwaho byuzuye.",
            details:
              "Dutezimbere imbuga n'ibikorwa bya interineti byubahiriza cyangwa birenza amahame ya WCAG 2.1 urwego rwa AA. Uburyo bwacu burimo HTML ifite ubusobanuro, ibimenyetso bya ARIA, kugendera kuri klavye, no kugerageza n'ikoranabuhanga rifasha.",
          },
          training: {
            title: "Amahugurwa n'inyigisho",
            description: "Kwigisha itsinda ryawe ingamba nziza z'ubushobozi bwo kugerwaho.",
            details:
              "Dutanga gahunda z'amahugurwa n'inyigisho zitegura itsinda ryawe gukora ibicuruzwa bigerwaho. Ingingo zirimo amabwiriza ya WCAG, iterambere rigerwaho, igishushanyo kirimo bose, n'imyerekano y'ikoranabuhanga rifasha.",
          },
          prototyping: {
            title: "Gukora icyitegererezo vuba",
            description: "Iterambere ryihuse kandi risubirwamo ry'ibiranga kugerwaho.",
            details:
              "Uburyo bwacu bwo gukora icyitegererezo butuma dushobora kugerageza no kunoza ibiranga kugerwaho vuba. Dukorana bya hafi n'abakoresha kugira ngo ibisubizo bihuze n'ibyo isi nyayo isaba binyuze mu bitekerezo n'isubiramo bihoraho.",
          },
        },
        nodes: {
          eyebrow: "Serivisi zacu",
          heading: "SERIVISI ZACU",
          subheading: "IBYO DUKORA",
          configuration: {
            title: "Igenamiterere rya sisitemu",
            body: "Dutunganya uburyo bufasha, dashboard, n'igenamiterere ry'ubushobozi hakurikijwe umwirondoro wa buri mukoresha.",
          },
          support: {
            title: "Ubufasha n'itumanaho",
            body: "Dufasha amatsinda n'abakoresha kuvugana neza binyuze mu mahugurwa, ubufasha, n'igishushanyo cya serivisi kirimo bose.",
          },
          quality: {
            title: "Ubuziranenge n'indashyikirwa",
            body: "Dupima uburyo bworoshye bwo gukoresha, kugerwaho, n'ubuziranenge bwa serivisi mbere y'uko ibicuruzwa bigera ku bantu babikeneye.",
          },
          data: {
            title: "Amakuru n'iterambere",
            body: "Dukoresha ibitekerezo ku bicuruzwa n'ubumenyi ku bushobozi bwo kugerwaho kugira ngo tunoze ingaruka nziza uko igihe gihita.",
          },
          community: {
            title: "Itsinda n'abaturage",
            body: "Twubakana n'abakoresha, abarezi, amashuri, n'abafatanyabikorwa kugira ngo ikoranabuhanga rifasha rihuze n'ubuzima nyabwo.",
          },
        },
        products: {
          eyebrow: "Ibicuruzwa byacu",
          title: "Ibisubizo turimo kubaka",
          lead: "Ikoranabuhanga rifasha ryatejwe imbere na Baho Inclusive Tech.",
          readMore: "Soma birenzeho",
          showLess: "Erekana bike",
          statusLabel: "Aho bigeze",
          sbs: {
            title: "SBS — Inkoni y'ubwenge y'abatabona",
            status: "MVP",
            description:
              "Igisubizo cy'ubwenge cyo kugenda cyateguwe gutanga ubumenyi bw'inyongera ku bidukikije no gushyigikira kwigenga kurushaho ku bantu bafite ubumuga bwo kutabona.",
            details:
              "SBS ni inkoni y'ubwenge y'abatabona, ubu iri ku rwego rwa MVP. Yibanda ku bufasha bufatika bwo kugenda, kumenya inzitizi, n'uburyo bwa serivisi bujyanye na yo, mu gihe ibikoresho na porogaramu bikomeza gutera imbere binyuze mu kugeragezwa n'abayikoresha.",
          },
          senseAi: {
            title: "Sense AI",
            status: "Iraza vuba",
            description:
              "Umufasha w'ubwenge bw'ubukorano ku ijwi, kubona, gusemura, n'ubufasha butagusaba gukoresha intoki.",
            details:
              "Sense AI iteganyijwe nk'urwego rw'ubwenge rwa Baho Inclusive Tech rwo kugerwaho. Izahuza kugenzura ku ijwi, gusobanukirwa ibiri imbere, gusemura, no kuyobora kuri paji kugira ngo abakoresha banyure muri sisitemu za digitale badahura n'imbogamizi nyinshi.",
          },
          talka: {
            title: "Talka",
            status: "Iri gutezwa imbere",
            description:
              "Umufasha wo kuvugana no gusoma wubatswe ku mikoranire ya buri munsi igerwaho.",
            details:
              "Talka iri gutezwa imbere nk'umufasha ufatika wo kuvugana, ubufasha bwo gusoma, n'uburyo bwo kugerwaho mu ndimi nyinshi. Iri kubakwa hashingiwe ku byo abakoresha bakeneye koko mbere y'isohoka ryuzuye.",
          },
        },
        cta: {
          title: "Reka dukureho inzitizi hamwe",
          lead: "Ntitwubaka ikoranabuhanga gusa kubera ko rishoboka. Turyubaka kuko abantu bakwiye kugira inzitizi nkeya zo kubaho bigenga.",
          button: "Vugana n'itsinda ryacu",
        },
      },
      common: {
        skipToContent: "Simbukira ku bikubiye mu ipaji",
      },
      footer: {
        tagline: "Duhanga ibisubizo bishya ku bantu bafite ubumuga. Ikoranabuhanga rihesha imbaraga buri wese.",
        quickLinks: "Ihuza ryihuse",
        contactHeading: "Twandikire",
        newsletter: "Urwandiko rw'amakuru",
        newsletterIntro: "Iyandikishe ku rwandiko rwacu rw'amakuru kugira ngo umenye ibishya",
        emailPlaceholder: "Imeyili yawe",
        emailLabel: "Imeyili yo kwakira urwandiko rw'amakuru",
        subscribe: "Iyandikishe",
        socialHeading: "Dukurikire",
        followOn: "Baho Tech kuri {{network}}",
        emailUs: "Andikira Baho Tech kuri imeyili",
        rights: "© {{year}} Baho Tech. Uburenganzira bwose bwarabitswe. Duhesha imbaraga ubuzima binyuze mu ikoranabuhanga.",
      },
      languages: { en: "Icyongereza", rw: "Ikinyarwanda", fr: "Igifaransa", sw: "Igiswahili" },
    },
  },
  fr: {
    translation: {
      nav: { home: "Accueil", about: "A propos", services: "Services", contact: "Contact", login: "Connexion", signup: "Inscription", dashboard: "Tableau de bord", logout: "Deconnexion", mission: "Mission", goals: "Objectifs", vision: "Vision", team: "Equipe", products: "Produits", allServices: "Tous les services et produits" },
      auth: { loginTitle: "Connexion", signupTitle: "Inscription", email: "Adresse e-mail", password: "Mot de passe", confirmPassword: "Confirmer le mot de passe", fullName: "Nom complet", disabilityCategory: "Categorie de handicap", preferredLanguage: "Langue preferee", forgotPassword: "Mot de passe oublie ?", signIn: "Se connecter", createAccount: "Creer un compte", noAccount: "Besoin d'un compte ?", hasAccount: "Deja inscrit ?", loginIntro: "Utilisez l'e-mail et le mot de passe de votre compte.", signupIntro: "Choisissez votre profil d'accessibilite et votre langue." },
      dashboard: { administration: "Administration", assistiveWorkspace: "Espace d'assistance", adminDashboard: "Tableau admin", userManagement: "Gestion des utilisateurs", settings: "Parametres", blindService: "Service non-voyant", deafService: "Service sourd", muteService: "Service muet", mobility: "Mobilite", welcome: "Bienvenue", blindEyebrow: "Solution non-voyant", blindTitle: "Assistance lecteur d'ecran et Smart Blind Stick", blindDescription: "Un espace clair et accessible au clavier pour le lecteur d'ecran, le SBS et les demandes d'aide.", muteEyebrow: "Solution muet", muteTitle: "Service de communication par synthese vocale", muteDescription: "Tapez un message, ameliorez-le avec l'IA, puis faites-le lire par le navigateur.", deafEyebrow: "Solution sourd", deafTitle: "Espace de transcription vocale en temps reel", deafDescription: "Utilisez cet espace pour la transcription et l'aide a l'ecriture Gemini.", mobilityEyebrow: "Plan futur mobilite", mobilityTitle: "Le support mobilite est un plan futur", mobilityDescription: "Les outils de mobilite sont prevus pour une prochaine version. Ce tableau garde l'espace pret pendant que le MVP se concentre sur SBS, Talka et Sense AI." },
      speech: { textToSpeech: "Synthese vocale", speechToText: "Transcription vocale", language: "Langue", voice: "Voix", play: "Lire", pause: "Pause", stop: "Arreter", startListening: "Demarrer l'ecoute", stopListening: "Arreter l'ecoute", transcript: "Transcription en direct", recentPhrases: "Phrases recentes", recentTranscripts: "Transcriptions recentes", unsupportedTts: "La synthese vocale n'est pas prise en charge par ce navigateur.", unsupportedStt: "L'enregistrement audio du microphone n'est pas pris en charge par ce navigateur.", message: "Message", autoVoice: "Voix automatique", typeMessage: "Tapez votre message ici", resume: "Reprendre", optimize: "Optimiser avec Gemini", optimizing: "Optimisation...", clear: "Effacer", firefoxFallback: "La transcription audio Gemini est prete.", ownTranscriptionReady: "La transcription audio Baho Tech est prete.", listening: "Ecoute active. Parlez clairement pres du microphone.", transcriptEmpty: "La transcription apparaitra ici." },
      voice: { title: "Commandes vocales", start: "Demarrer les commandes vocales", stop: "Arreter les commandes vocales", available: "Commandes disponibles", unsupported: "Les commandes vocales ne sont pas prises en charge par ce navigateur.", wakeHint: "Dites \"hey activate\" pour lire la page, ou \"let's go\" pour donner une commande a l'IA.", lastHeard: "Dernier entendu" },
      ai: { assistant: "Assistant Gemini", readPage: "Lire la page", askLabel: "Demander de l'aide a Gemini", askPlaceholder: "Demandez de l'aide, une navigation ou une explication de page", send: "Envoyer le message", failed: "L'assistant IA a echoue.", readFailed: "Impossible de lire la page.", commandMode: "Mode commande", listening: "Ecoute...", listeningForCommand: "J'ecoute. Dites-moi quoi faire.", commandFailed: "Je n'ai pas pu terminer cette commande." },
      writing: { title: "Assistant d'ecriture Gemini", draft: "Texte ou brouillon dicte", mode: "Mode", simplify: "Simplifier", expand: "Developper", formal: "Formel", short: "Court", translate: "Traduire", working: "Traitement...", action: "Aidez-moi a ecrire", failed: "L'assistant d'ecriture a echoue." },
      vision: { title: "Assistance vision Gemini", startCamera: "Demarrer la camera", analyzeScene: "Analyser la scene", speakResult: "Lire le resultat", cameraPreview: "Apercu camera", permissionError: "L'autorisation camera a ete refusee ou indisponible.", failed: "L'analyse visuelle a echoue." },
      sign: { title: "Assistance langue des signes Gemini", startCamera: "Demarrer la camera", interpretGesture: "Interpreter le geste", speakResult: "Lire le resultat", cameraPreview: "Apercu camera du geste", permissionError: "L'autorisation camera a ete refusee ou indisponible.", failed: "L'interpretation du geste a echoue." },
      about: {
        goals: {
          eyebrow: "Notre feuille de route",
          title: "Nos objectifs",
          lead: "Quatre engagements qui guident ce que nous construisons, avec qui nous le construisons, et le changement que nous voulons produire.",
          navLabel: "Feuille de route des objectifs de Baho Tech",
          phaseLabel: "Objectif {{current}} sur {{total}}",
          innovate: {
            label: "Innover",
            body: "Innover en technologies d'assistance de pointe et en solutions numeriques inclusives qui permettent aux personnes handicapees de participer pleinement a la societe avec dignite, autonomie et acces egal.",
          },
          deliver: {
            label: "Livrer",
            body: "Fournir un conseil professionnel en accessibilite et des services de developpement conformes aux WCAG qui font des organisations des leaders du numerique inclusif.",
          },
          establish: {
            label: "Etablir",
            body: "Etablir des normes sectorielles et des bonnes pratiques de conception accessible par la formation, les ateliers et des methodologies fondees sur des preuves, pour un impact durable.",
          },
          champion: {
            label: "Defendre",
            body: "Defendre une politique technologique inclusive et plaider pour des reglementations d'accessibilite garantissant que personne n'est laisse de cote dans la transformation numerique.",
          },
        },
      },
      services: {
        meta: {
          title: "Developpement de technologies d'assistance | Baho Inclusive Tech",
          description:
            "Baho Inclusive Tech developpe des technologies d'assistance concretes, dont SBS la canne intelligente, qui aident les personnes handicapees a surmonter les obstacles du quotidien et a vivre plus independamment.",
        },
        hero: {
          eyebrow: "Developpement de technologies d'assistance",
          title: "La technologie qui rend l'independance possible",
          lead: "Pour de nombreuses personnes handicapees, les activites quotidiennes deviennent difficiles lorsque le monde qui les entoure n'est pas concu de maniere accessible. Chez Baho Inclusive Tech, nous developpons des technologies concretes qui aident a lever ces obstacles et rendent le quotidien plus sur, plus simple et plus independant.",
          ctaPrimary: "Voir comment nous construisons",
          ctaSecondary: "Parler a notre equipe",
        },
        problem: {
          eyebrow: "Le defi humain",
          title: "Les taches quotidiennes ne devraient pas faire obstacle a l'independance",
          p1: "Se deplacer dans un environnement inconnu, acceder a l'information, communiquer, apprendre ou accomplir les taches du quotidien peut demander un soutien supplementaire aux personnes handicapees.",
          p2: "Ce ne sont pas seulement des problemes de technologie. Ce sont des defis humains du quotidien.",
          p3: "Nous croyons que la technologie doit aider a reduire ces obstacles, et non en creer de nouveaux.",
        },
        approach: {
          eyebrow: "Notre approche",
          title: "Nous transformons les obstacles d'accessibilite en solutions concretes",
          p1: "Nous partons des difficultes reelles vecues par les personnes handicapees. Nous ecoutons, comprenons l'environnement dans lequel la difficulte survient, et concevons la technologie autour des besoins de la personne.",
          p2: "Nos solutions associent technologies d'assistance, intelligence artificielle, vision par ordinateur, capteurs, logiciels et conception centree sur l'humain pour creer des outils concrets qui soutiennent une plus grande independance.",
        },
        process: {
          eyebrow: "Notre methode",
          title: "Du probleme reel a la solution qui fonctionne",
          lead: "Chaque solution traverse les memes six etapes, guidee tout du long par les personnes qui l'utiliseront.",
          navLabel: "Notre processus de developpement",
          stepPosition: "Etape {{current}} sur {{total}}",
          understand: {
            title: "Comprendre",
            body: "Nous ecoutons la personne et etudions l'environnement ou l'obstacle se produit reellement.",
          },
          design: {
            title: "Concevoir",
            body: "Nous facons une solution autour des besoins, des capacites et du quotidien de la personne.",
          },
          prototype: {
            title: "Prototyper",
            body: "Nous construisons une premiere version fonctionnelle pour que l'idee puisse etre manipulee et jugee dans la vie reelle.",
          },
          test: {
            title: "Tester",
            body: "Nous testons avec les personnes qui l'utiliseront et recueillons des retours honnetes et concrets.",
          },
          improve: {
            title: "Ameliorer",
            body: "Nous affinons la conception selon ce que les tests ont revele, puis nous testons a nouveau.",
          },
          deploy: {
            title: "Deployer",
            body: "Nous mettons la solution en usage quotidien et continuons a accompagner celles et ceux qui en dependent.",
          },
        },
        areas: {
          eyebrow: "Domaines de solutions",
          title: "La ou notre technologie aide",
          lead: "Chaque domaine part d'un obstacle rencontre dans la vie ordinaire.",
          seeing: {
            title: "Voir et comprendre son environnement",
            body: "Des technologies qui aident les personnes deficientes visuelles a mieux comprendre leur environnement, reconnaitre des objets, acceder a l'information et interagir avec ce qui les entoure.",
          },
          moving: {
            title: "Se deplacer avec plus d'independance",
            body: "Des solutions concues pour soutenir des deplacements plus surs et plus confiants dans les environnements du quotidien.",
          },
          communicating: {
            title: "Communiquer et acceder a l'information",
            body: "Des technologies qui reduisent les obstacles a la communication et rendent l'information plus accessible.",
          },
          learning: {
            title: "Apprendre et participer",
            body: "Des technologies accessibles qui aident les personnes handicapees a acceder a l'education, aux outils numeriques et aux opportunites.",
          },
          everyday: {
            title: "Independance au quotidien",
            body: "Des technologies sur mesure concues autour de difficultes d'accessibilite precises de la vie quotidienne.",
          },
        },
        offerings: {
          eyebrow: "Ce que nous offrons",
          title: "Les services qui soutiennent ce travail",
          lead: "Les services concrets que nous proposons aux cotes de nos propres produits.",
          consulting: {
            title: "Conseil en accessibilite",
            description: "Un accompagnement expert pour rendre vos produits numeriques accessibles a tous.",
            details:
              "Nous realisons des audits d'accessibilite, des tests de conformite WCAG et des recommandations strategiques pour que vos produits respectent les normes internationales. Notre conseil inclut des tests avec des personnes handicapees, des rapports detailles et un accompagnement continu.",
          },
          assistiveDev: {
            title: "Developpement de technologies d'assistance",
            description: "Des technologies d'assistance sur mesure, concues autour des besoins de chacun.",
            details:
              "Nous developpons des technologies d'assistance incluant des interfaces commandees a la voix, la prise en charge des lecteurs d'ecran et des dispositifs de saisie specialises. Nous travaillons etroitement avec les utilisateurs tout au long du developpement.",
          },
          inclusiveDesign: {
            title: "Services de conception inclusive",
            description: "Des systemes de design qui fonctionnent pour tous, des les fondations.",
            details:
              "Nous creons des cadres de conception inclusive qui placent l'accessibilite en priorite des le depart, afin que les produits restent utilisables pour les personnes de toutes capacites. Cela inclut recherche utilisateur, wireframes, prototypage et systemes de design.",
          },
          webDev: {
            title: "Developpement web accessible",
            description: "Construire des sites et applications web pleinement accessibles.",
            details:
              "Nous developpons des sites et applications qui atteignent ou depassent les normes WCAG 2.1 niveau AA. Notre processus inclut HTML semantique, reperes ARIA, navigation au clavier et tests avec les technologies d'assistance.",
          },
          training: {
            title: "Formations et ateliers",
            description: "Former votre equipe aux bonnes pratiques d'accessibilite.",
            details:
              "Nous proposons des programmes de formation et des ateliers qui donnent a votre equipe les moyens de creer des produits accessibles. Themes abordes : lignes directrices WCAG, developpement accessible, conception inclusive et demonstrations de technologies d'assistance.",
          },
          prototyping: {
            title: "Prototypage rapide",
            description: "Developpement rapide et iteratif des fonctions d'accessibilite.",
            details:
              "Notre processus de prototypage permet de tester et d'affiner rapidement les fonctions d'accessibilite. Nous travaillons etroitement avec les utilisateurs pour que les solutions repondent aux besoins reels, par des retours et des iterations continus.",
          },
        },
        nodes: {
          eyebrow: "Nos services",
          heading: "NOS SERVICES",
          subheading: "CE QUE NOUS FAISONS",
          configuration: {
            title: "Configuration des systemes",
            body: "Nous configurons les parcours d'assistance, les tableaux de bord et les reglages d'accessibilite selon chaque profil utilisateur.",
          },
          support: {
            title: "Accompagnement et communication",
            body: "Nous aidons les equipes et les utilisateurs a communiquer clairement par la formation, le support et une conception de service inclusive.",
          },
          quality: {
            title: "Qualite et excellence",
            body: "Nous testons l'utilisabilite, l'accessibilite et la qualite de service avant que les produits n'atteignent celles et ceux qui en ont besoin.",
          },
          data: {
            title: "Donnees et croissance",
            body: "Nous utilisons les retours produits et les enseignements d'accessibilite pour ameliorer notre impact dans la duree.",
          },
          community: {
            title: "Equipe et communaute",
            body: "Nous construisons avec les utilisateurs, les aidants, les ecoles et les partenaires pour que la technologie d'assistance colle a la vie reelle.",
          },
        },
        products: {
          eyebrow: "Nos produits",
          title: "Les solutions que nous construisons",
          lead: "Des technologies d'assistance developpees par Baho Inclusive Tech.",
          readMore: "En savoir plus",
          showLess: "Voir moins",
          statusLabel: "Statut",
          sbs: {
            title: "SBS — Canne intelligente",
            status: "MVP",
            description:
              "Une solution de mobilite assistee intelligente concue pour offrir une conscience accrue de l'environnement et soutenir une plus grande independance des personnes deficientes visuelles.",
            details:
              "SBS est notre canne intelligente, actuellement au stade MVP. Elle se concentre sur le soutien concret a la mobilite, la detection d'obstacles et les parcours de service associes, pendant que le materiel et le logiciel continuent de murir grace aux tests avec les personnes qui l'utilisent.",
          },
          senseAi: {
            title: "Sense AI",
            status: "Bientot disponible",
            description:
              "Un compagnon d'accessibilite par IA pour la voix, la vision, la traduction et l'assistance mains libres.",
            details:
              "Sense AI est prevu comme la couche d'accessibilite intelligente de Baho Inclusive Tech. Elle combinera commande vocale, comprehension de scene, traduction et guidage de page pour que les utilisateurs traversent les systemes numeriques avec moins de friction.",
          },
          talka: {
            title: "Talka",
            status: "En developpement",
            description:
              "Un assistant de communication et de lecture concu pour des interactions quotidiennes accessibles.",
            details:
              "Talka est en developpement comme assistant concret pour la communication, l'aide a la lecture et les parcours d'accessibilite multilingues. Il se construit autour des besoins reels des utilisateurs avant une sortie complete.",
          },
        },
        cta: {
          title: "Levons un obstacle ensemble",
          lead: "Nous ne construisons pas la technologie simplement parce qu'elle est possible. Nous la construisons parce que chacun merite moins d'obstacles pour vivre de maniere independante.",
          button: "Parler a notre equipe",
        },
      },
      common: {
        skipToContent: "Aller au contenu principal",
      },
      footer: {
        tagline: "Nous creons des solutions innovantes pour les personnes handicapees. Une technologie qui donne des moyens a chacun.",
        quickLinks: "Liens rapides",
        contactHeading: "Contact",
        newsletter: "Infolettre",
        newsletterIntro: "Abonnez-vous a notre infolettre pour recevoir les actualites",
        emailPlaceholder: "Votre e-mail",
        emailLabel: "Adresse e-mail pour notre infolettre",
        subscribe: "S'abonner",
        socialHeading: "Suivez-nous",
        followOn: "Baho Tech sur {{network}}",
        emailUs: "Ecrire un e-mail a Baho Tech",
        rights: "© {{year}} Baho Tech. Tous droits reserves. La technologie au service de la vie de chacun.",
      },
      languages: { en: "Anglais", rw: "Kinyarwanda", fr: "Francais", sw: "Swahili" },
    },
  },
  sw: {
    translation: {
      nav: { home: "Mwanzo", about: "Kuhusu", services: "Huduma", contact: "Mawasiliano", login: "Ingia", signup: "Jisajili", dashboard: "Dashibodi", logout: "Toka", mission: "Dhamira", goals: "Malengo", vision: "Maono", team: "Timu", products: "Bidhaa", allServices: "Huduma na bidhaa zote" },
      auth: { loginTitle: "Ingia", signupTitle: "Jisajili", email: "Barua pepe", password: "Nenosiri", confirmPassword: "Thibitisha nenosiri", fullName: "Jina kamili", disabilityCategory: "Aina ya ulemavu", preferredLanguage: "Lugha unayopendelea", forgotPassword: "Umesahau nenosiri?", signIn: "Ingia", createAccount: "Fungua akaunti", noAccount: "Unahitaji akaunti?", hasAccount: "Tayari umesajiliwa?", loginIntro: "Tumia barua pepe na nenosiri la akaunti yako.", signupIntro: "Chagua wasifu wa ufikivu na lugha yako." },
      dashboard: { administration: "Utawala", assistiveWorkspace: "Nafasi ya usaidizi", adminDashboard: "Dashibodi ya msimamizi", userManagement: "Usimamizi wa watumiaji", settings: "Mipangilio", blindService: "Huduma ya wasioona", deafService: "Huduma ya viziwi", muteService: "Huduma ya wasioweza kuzungumza", mobility: "Uhamaji", welcome: "Karibu", blindEyebrow: "Suluhisho la wasioona", blindTitle: "Msaada wa screen reader na Smart Blind Stick", blindDescription: "Nafasi rahisi kutumia kwa kibodi kwa screen reader, SBS, na maombi ya usaidizi.", muteEyebrow: "Suluhisho la wasioweza kuzungumza", muteTitle: "Huduma ya maandishi kwenda sauti", muteDescription: "Andika ujumbe, boresha kwa AI, kisha usomwe na sauti ya kivinjari.", deafEyebrow: "Suluhisho la viziwi", deafTitle: "Nafasi ya sauti kwenda maandishi moja kwa moja", deafDescription: "Tumia nafasi hii kwa nakala za sauti na msaada wa kuandika wa Gemini.", mobilityEyebrow: "Mpango wa baadaye wa uhamaji", mobilityTitle: "Msaada wa uhamaji ni mpango wa baadaye", mobilityDescription: "Zana za uhamaji zimepangwa kwa toleo la baadaye. Dashibodi hii inaweka nafasi tayari wakati kazi ya MVP inalenga SBS, Talka, na Sense AI." },
      speech: { textToSpeech: "Maandishi kwenda sauti", speechToText: "Sauti kwenda maandishi", language: "Lugha", voice: "Sauti", play: "Cheza", pause: "Sitisha", stop: "Simamisha", startListening: "Anza kusikiliza", stopListening: "Acha kusikiliza", transcript: "Nakala ya moja kwa moja", recentPhrases: "Sentensi za karibuni", recentTranscripts: "Nakala za karibuni", unsupportedTts: "Kisomaji cha maandishi hakitumiki kwenye kivinjari hiki.", unsupportedStt: "Kurekodi sauti ya maikrofoni hakutumiki kwenye kivinjari hiki.", message: "Ujumbe", autoVoice: "Sauti ya moja kwa moja", typeMessage: "Andika ujumbe wako hapa", resume: "Endelea", optimize: "Boresha kwa Gemini", optimizing: "Inaboresha...", clear: "Futa", firefoxFallback: "Nakala ya sauti ya Gemini iko tayari.", ownTranscriptionReady: "Nakala ya sauti ya Baho Tech iko tayari.", listening: "Inasikiliza. Zungumza wazi karibu na maikrofoni.", transcriptEmpty: "Nakala itaonekana hapa." },
      voice: { title: "Amri za sauti", start: "Anza amri za sauti", stop: "Acha amri za sauti", available: "Amri zilizopo", unsupported: "Amri za sauti hazitumiki kwenye kivinjari hiki.", wakeHint: "Sema \"hey activate\" ili AI isome ukurasa, au \"let's go\" kumpa AI amri.", lastHeard: "Iliyosikika mwisho" },
      ai: { assistant: "Msaidizi Gemini", readPage: "Soma ukurasa", askLabel: "Muulize Gemini msaada", askPlaceholder: "Uliza msaada, uelekezaji, au maelezo ya ukurasa", send: "Tuma ujumbe", failed: "Msaidizi wa AI ameshindwa.", readFailed: "Imeshindikana kusoma ukurasa.", commandMode: "Hali ya amri", listening: "Inasikiliza...", listeningForCommand: "Ninasikiliza. Niambie nifanye nini.", commandFailed: "Sikuweza kukamilisha amri hiyo." },
      writing: { title: "Msaidizi wa kuandika wa Gemini", draft: "Maandishi au rasimu iliyotamkwa", mode: "Hali", simplify: "Rahisisha", expand: "Panua", formal: "Rasmi", short: "Fupi", translate: "Tafsiri", working: "Inafanya kazi...", action: "Nisaidie kuandika", failed: "Msaidizi wa kuandika ameshindwa." },
      vision: { title: "Msaada wa kuona wa Gemini", startCamera: "Anza kamera", analyzeScene: "Chambua mandhari", speakResult: "Sema matokeo", cameraPreview: "Muonekano wa kamera", permissionError: "Ruhusa ya kamera imekataliwa au haipatikani.", failed: "Uchambuzi wa picha umeshindwa." },
      sign: { title: "Msaada wa lugha ya ishara wa Gemini", startCamera: "Anza kamera", interpretGesture: "Fasiri ishara", speakResult: "Sema matokeo", cameraPreview: "Muonekano wa kamera ya ishara", permissionError: "Ruhusa ya kamera imekataliwa au haipatikani.", failed: "Ufasiri wa ishara umeshindwa." },
      about: {
        goals: {
          eyebrow: "Ramani yetu",
          title: "Malengo yetu",
          lead: "Ahadi nne zinazoongoza tunachojenga, tunaojenga nao, na mabadiliko tunayotaka yalete.",
          navLabel: "Ramani ya malengo ya Baho Tech",
          phaseLabel: "Lengo la {{current}} kati ya {{total}}",
          innovate: {
            label: "Kubuni",
            body: "Kubuni teknolojia saidizi za kisasa na suluhisho jumuishi za kidijitali zinazowawezesha watu wenye ulemavu kushiriki kikamilifu katika jamii wakiwa na heshima, uhuru, na fursa sawa.",
          },
          deliver: {
            label: "Kutoa",
            body: "Kutoa ushauri wa kitaalamu wa ufikivu na huduma za uendelezaji zinazozingatia WCAG zinazogeuza mashirika kuwa viongozi wa kidijitali jumuishi.",
          },
          establish: {
            label: "Kuweka",
            body: "Kuweka viwango vya sekta na kanuni bora za ubunifu unaofikika kupitia mafunzo, warsha, na mbinu zenye ushahidi zinazoleta athari ya kudumu.",
          },
          champion: {
            label: "Kutetea",
            body: "Kutetea sera ya teknolojia jumuishi na kushawishi kanuni za ufikivu zinazohakikisha hakuna anayeachwa nyuma katika mabadiliko ya kidijitali.",
          },
        },
      },
      services: {
        meta: {
          title: "Uendelezaji wa teknolojia saidizi | Baho Inclusive Tech",
          description:
            "Baho Inclusive Tech inaendeleza teknolojia saidizi za vitendo, ikiwemo SBS fimbo mahiri, zinazosaidia watu wenye ulemavu kuondokana na vikwazo vya kila siku na kuishi kwa kujitegemea zaidi.",
        },
        hero: {
          eyebrow: "Uendelezaji wa teknolojia saidizi",
          title: "Teknolojia inayofanya kujitegemea kuwezekane",
          lead: "Kwa watu wengi wenye ulemavu, shughuli za kila siku zinaweza kuwa ngumu pale ambapo mazingira yanayowazunguka hayakubuniwa kwa kuzingatia ufikivu. Katika Baho Inclusive Tech, tunaendeleza teknolojia za vitendo zinazosaidia kuondoa vikwazo hivi na kufanya maisha ya kila siku kuwa salama, rahisi na yenye kujitegemea zaidi.",
          ctaPrimary: "Ona jinsi tunavyojenga",
          ctaSecondary: "Zungumza na timu yetu",
        },
        problem: {
          eyebrow: "Changamoto ya kibinadamu",
          title: "Kazi za kila siku hazipaswi kuwa vikwazo vya kujitegemea",
          p1: "Kutembea katika mazingira usiyoyafahamu, kupata taarifa, kuwasiliana, kujifunza, au kukamilisha kazi za kila siku kunaweza kuhitaji msaada wa ziada kwa watu wenye ulemavu.",
          p2: "Hizi si changamoto za teknolojia pekee. Ni changamoto za kibinadamu za kila siku.",
          p3: "Tunaamini teknolojia inapaswa kusaidia kupunguza vikwazo hivyo, si kuunda vipya.",
        },
        approach: {
          eyebrow: "Mtazamo wetu",
          title: "Tunageuza changamoto za ufikivu kuwa suluhisho za vitendo",
          p1: "Tunaanza na changamoto halisi zinazokumbwa na watu wenye ulemavu. Tunasikiliza, tunaelewa mazingira ambamo changamoto inatokea, na kubuni teknolojia kulingana na mahitaji ya mtu husika.",
          p2: "Suluhisho zetu zinaunganisha teknolojia saidizi, akili bandia, uoni wa kompyuta, vitambuzi, programu, na ubunifu unaomlenga binadamu ili kutengeneza zana za vitendo zinazounga mkono kujitegemea zaidi.",
        },
        process: {
          eyebrow: "Jinsi tunavyofanya kazi",
          title: "Kutoka changamoto halisi hadi suluhisho linalofanya kazi",
          lead: "Kila suluhisho hupitia hatua sita zilezile, likiongozwa katika kila hatua na watu watakaolitumia.",
          navLabel: "Mchakato wetu wa uendelezaji",
          stepPosition: "Hatua ya {{current}} kati ya {{total}}",
          understand: {
            title: "Kuelewa",
            body: "Tunamsikiliza mtu na kuchunguza mazingira ambamo kikwazo kinatokea kweli.",
          },
          design: {
            title: "Kubuni",
            body: "Tunaunda suluhisho kulingana na mahitaji, uwezo, na ratiba ya kila siku ya mtu husika.",
          },
          prototype: {
            title: "Kutengeneza sampuli",
            body: "Tunajenga toleo la awali linalofanya kazi ili wazo liweze kushikwa na kupimwa katika maisha halisi.",
          },
          test: {
            title: "Kupima",
            body: "Tunapima pamoja na watu watakaolitumia na kukusanya maoni ya kweli na ya vitendo.",
          },
          improve: {
            title: "Kuboresha",
            body: "Tunaboresha ubunifu kulingana na yaliyobainika wakati wa upimaji, kisha tunapima tena.",
          },
          deploy: {
            title: "Kusambaza",
            body: "Tunaweka suluhisho katika matumizi ya kila siku na kuendelea kuwasaidia wanaolitegemea.",
          },
        },
        areas: {
          eyebrow: "Maeneo ya suluhisho",
          title: "Pale teknolojia yetu inaposaidia",
          lead: "Kila eneo huanza na kikwazo ambacho watu hukutana nacho katika maisha ya kawaida.",
          seeing: {
            title: "Kuona na kuelewa mazingira",
            body: "Teknolojia inayosaidia watu wenye ulemavu wa kuona kuelewa vyema mazingira yao, kutambua vitu, kupata taarifa, na kuingiliana na mazingira yanayowazunguka.",
          },
          moving: {
            title: "Kutembea kwa kujitegemea zaidi",
            body: "Suluhisho zilizobuniwa kuunga mkono utembeaji salama na wenye kujiamini zaidi katika mazingira ya kila siku.",
          },
          communicating: {
            title: "Kuwasiliana na kupata taarifa",
            body: "Teknolojia zinazosaidia kupunguza vikwazo vya mawasiliano na kufanya taarifa zipatikane kwa urahisi zaidi.",
          },
          learning: {
            title: "Kujifunza na kushiriki",
            body: "Teknolojia zinazofikika zinazosaidia watu wenye ulemavu kupata elimu, zana za kidijitali, na fursa.",
          },
          everyday: {
            title: "Kujitegemea kila siku",
            body: "Teknolojia maalum zilizobuniwa kulingana na changamoto mahususi za ufikivu katika maisha ya kila siku.",
          },
        },
        offerings: {
          eyebrow: "Tunachotoa",
          title: "Huduma zinazounga mkono kazi hii",
          lead: "Huduma za vitendo tunazotoa sambamba na bidhaa zetu wenyewe.",
          consulting: {
            title: "Ushauri wa ufikivu",
            description: "Mwongozo wa kitaalamu wa kufanya bidhaa zako za kidijitali zifikike kwa kila mtu.",
            details:
              "Tunatoa ukaguzi wa ufikivu, upimaji wa uzingatiaji wa WCAG, na mapendekezo ya kimkakati ili bidhaa zako zikidhi viwango vya kimataifa. Ushauri wetu unajumuisha upimaji na watu wenye ulemavu, ripoti za kina, na msaada endelevu.",
          },
          assistiveDev: {
            title: "Uendelezaji wa teknolojia saidizi",
            description: "Teknolojia saidizi zilizojengwa maalum kulingana na mahitaji ya kila mtu.",
            details:
              "Tunaendeleza teknolojia saidizi zikiwemo violesura vinavyodhibitiwa kwa sauti, msaada wa visomaji skrini, na vifaa maalum vya kuingiza data. Tunafanya kazi kwa karibu na watumiaji katika uendelezaji wote ili suluhisho zetu zikidhi mahitaji yao halisi.",
          },
          inclusiveDesign: {
            title: "Huduma za ubunifu jumuishi",
            description: "Mifumo ya ubunifu inayofanya kazi kwa kila mtu, kuanzia msingi.",
            details:
              "Tunaunda mifumo ya ubunifu jumuishi inayoweka ufikivu mbele tangu mwanzo, ili bidhaa ziweze kutumika na kufanya kazi kwa watu wa uwezo wote. Hii inajumuisha utafiti wa watumiaji, michoro ya awali, sampuli, na ujenzi wa mifumo ya ubunifu.",
          },
          webDev: {
            title: "Uendelezaji wa tovuti zinazofikika",
            description: "Kujenga tovuti na programu za wavuti zinazofikika kikamilifu.",
            details:
              "Tunaendeleza tovuti na programu za wavuti zinazokidhi au kuzidi viwango vya WCAG 2.1 Kiwango AA. Mchakato wetu unajumuisha HTML yenye maana, alama za ARIA, uendeshaji kwa kibodi, na upimaji na teknolojia saidizi.",
          },
          training: {
            title: "Mafunzo na warsha",
            description: "Kufundisha timu yako kanuni bora za ufikivu.",
            details:
              "Tunatoa programu za mafunzo na warsha zinazoiwezesha timu yako kutengeneza bidhaa zinazofikika. Mada ni pamoja na miongozo ya WCAG, uendelezaji unaofikika, ubunifu jumuishi, na maonyesho ya teknolojia saidizi.",
          },
          prototyping: {
            title: "Utengenezaji wa haraka wa sampuli",
            description: "Uendelezaji wa haraka na wa marudio wa vipengele vya ufikivu.",
            details:
              "Mchakato wetu wa sampuli unaruhusu upimaji na uboreshaji wa haraka wa vipengele vya ufikivu. Tunafanya kazi kwa karibu na watumiaji ili suluhisho zikidhi mahitaji halisi kupitia maoni na marudio endelevu.",
          },
        },
        nodes: {
          eyebrow: "Huduma zetu",
          heading: "HUDUMA ZETU",
          subheading: "TUNACHOFANYA",
          configuration: {
            title: "Usanidi wa mifumo",
            body: "Tunasanidi mitiririko saidizi, dashibodi, na mipangilio ya ufikivu kulingana na wasifu wa kila mtumiaji.",
          },
          support: {
            title: "Msaada na mawasiliano",
            body: "Tunasaidia timu na watumiaji kuwasiliana kwa uwazi kupitia mafunzo, msaada, na ubunifu jumuishi wa huduma.",
          },
          quality: {
            title: "Ubora na umahiri",
            body: "Tunapima urahisi wa matumizi, ufikivu, na ubora wa huduma kabla bidhaa hazijawafikia wanaozihitaji.",
          },
          data: {
            title: "Data na ukuaji",
            body: "Tunatumia maoni ya bidhaa na maarifa ya ufikivu kuboresha athari yetu kadri muda unavyosonga.",
          },
          community: {
            title: "Timu na jamii",
            body: "Tunajenga pamoja na watumiaji, walezi, shule, na washirika ili teknolojia saidizi ilingane na maisha halisi.",
          },
        },
        products: {
          eyebrow: "Bidhaa zetu",
          title: "Suluhisho tunazojenga",
          lead: "Teknolojia saidizi zilizoendelezwa na Baho Inclusive Tech.",
          readMore: "Soma zaidi",
          showLess: "Onyesha kidogo",
          statusLabel: "Hali",
          sbs: {
            title: "SBS — Fimbo mahiri",
            status: "MVP",
            description:
              "Suluhisho mahiri la uhamaji saidizi lililobuniwa kutoa uelewa wa ziada wa mazingira na kuunga mkono kujitegemea zaidi kwa watu wenye ulemavu wa kuona.",
            details:
              "SBS ni fimbo yetu mahiri, kwa sasa ikiwa katika hatua ya MVP. Inalenga msaada wa vitendo wa uhamaji, utambuzi wa vizuizi, na mitiririko ya huduma inayohusiana, wakati vifaa na programu vinaendelea kukomaa kupitia upimaji na watu wanaoitumia.",
          },
          senseAi: {
            title: "Sense AI",
            status: "Inakuja hivi karibuni",
            description:
              "Msaidizi wa ufikivu wa AI kwa sauti, uoni, tafsiri, na msaada usiohitaji mikono.",
            details:
              "Sense AI imepangwa kuwa safu mahiri ya ufikivu ya Baho Inclusive Tech. Itaunganisha udhibiti wa sauti, uelewa wa mandhari, tafsiri, na uelekezaji wa ukurasa ili watumiaji wapite katika mifumo ya kidijitali kwa vikwazo vichache.",
          },
          talka: {
            title: "Talka",
            status: "Inaendelezwa",
            description:
              "Msaidizi wa mawasiliano na usomaji uliojengwa kwa mwingiliano wa kila siku unaofikika.",
            details:
              "Talka inaendelezwa kama msaidizi wa vitendo kwa mawasiliano, msaada wa usomaji, na mitiririko ya ufikivu ya lugha nyingi. Inajengwa kulingana na mahitaji halisi ya watumiaji kabla ya toleo kamili.",
          },
        },
        cta: {
          title: "Tuondoe kikwazo pamoja",
          lead: "Hatujengi teknolojia kwa sababu tu inawezekana. Tunaijenga kwa sababu watu wanastahili vikwazo vichache vya kuishi kwa kujitegemea.",
          button: "Zungumza na timu yetu",
        },
      },
      common: {
        skipToContent: "Rukia hadi maudhui makuu",
      },
      footer: {
        tagline: "Tunatengeneza suluhisho bunifu kwa watu wenye ulemavu. Teknolojia inayompa kila mtu uwezo.",
        quickLinks: "Viungo vya haraka",
        contactHeading: "Mawasiliano",
        newsletter: "Jarida",
        newsletterIntro: "Jiandikishe kwenye jarida letu upate taarifa mpya",
        emailPlaceholder: "Barua pepe yako",
        emailLabel: "Anwani ya barua pepe kwa jarida letu",
        subscribe: "Jiandikishe",
        socialHeading: "Tufuate",
        followOn: "Baho Tech kwenye {{network}}",
        emailUs: "Tuma barua pepe kwa Baho Tech",
        rights: "© {{year}} Baho Tech. Haki zote zimehifadhiwa. Tunawezesha maisha kupitia teknolojia.",
      },
      languages: { en: "Kiingereza", rw: "Kinyarwanda", fr: "Kifaransa", sw: "Kiswahili" },
    },
  },
};
