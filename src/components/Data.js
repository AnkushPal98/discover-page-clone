const mockData = [
  [
    {
      id: 1,
      title: "Internet Archive Data Breach",
      description:
        "According to reports from BleepingComputer, the Internet Archive's Wayback Machine has suffered a significant data breach, with hackers compromising the website and stealing a user authentication database containing 31 million unique records.",
      imageUrl: "/images/top/img1.jpg",
    },
    {
      id: 2,
      title: "DeepMind's Hassabis Wins Nobel in Chemistry",
      description:
        "According to the Royal Swedish Academy of Sciences, Demis Hassabis and John Jumper of Google DeepMind have been awarded the 2024 Nobel Prize in Chemistry for their groundbreaking work on protein structure prediction using artificial intelligence, sharing the honor with David Baker for his advances in computational protein design.",
      imageUrl: "/images/top/img2.jpg",
    },
    {
      id: 3,
      title: "FBI's Crypto Sting Operation",
      description:
        "In an unprecedented move, the FBI created its own cryptocurrency token called NexFundAI as part of an operation to expose and prosecute alleged market manipulators in the crypto industry. As reported by Fortune, this innovative tactic led to charges against eighteen individuals and companies accused of artificially inflating token prices and engaging in fraudulent practices.",
      imageUrl: "/images/top/img3.jpg",
    },
    {
      id: 4,
      title: "Sea Creatures Fuse to Become One",
      description:
        "Scientists have discovered that sea walnuts, a species of comb jelly, can fuse their bodies with other individuals after injury, effectively becoming a single organism with synchronized bodily functions. This remarkable ability, observed in laboratory settings, raises intriguing questions about the evolution of allorecognition and potential applications in regenerative research.",
      imageUrl: "/images/top/img4.jpg",
    },
    {
      id: 5,
      title: "The McLaren Hybrid Hypercar",
      description:
        "The McLaren W1, successor to the legendary P1, is a groundbreaking hybrid hypercar that pushes the boundaries of automotive engineering with its 1,258-horsepower powertrain, advanced aerodynamics, and Formula 1-inspired technology. As reported by Car and Driver, this plug-in hybrid marvel combines a twin-turbo 4.0-liter V-8 with an electric motor, delivering blistering performance and up to 2,205 pounds of downforce.",
      imageUrl: "/images/top/img5.jpg",
    },
    {
      id: 6,
      title: "Spy Planes Show Radioactive Thunderstorms",
      description:
        "Based on reports from Nature, a retrofitted U-2 spy plane has revealed that most tropical thunderstorms are radioactive, producing various forms of gamma radiation far more frequently than previously thought, challenging our understanding of storm physics and atmospheric phenomena.",
      imageUrl: "/images/top/img6.jpg",
    },
    {
      id: 7,
      title: "Meta Unveils Movie Gen",
      description:
        "Meta has unveiled Movie Gen, a cutting-edge generative AI tool that can create and edit videos and audio using text prompts, marking a significant advancement in AI-powered media creation. As reported by CNET, this new technology allows users to generate high-quality videos, perform personalized video creation, edit existing footage, and produce synchronized audio content.",
      imageUrl: "/images/top/img7.jpg",
    },
    {
      id: 8,
      title: "Tokyo Expands Underground Cavern",
      description:
        "Tokyo is expanding its underground flood defense system, known as the Cathedral complex, to combat the increasing threat of extreme weather events fueled by climate change. As reported by Reuters, the city is launching a seven-year, $250 million initiative to upgrade its infrastructure, including reinforcing levees, improving drainage systems, and constructing new reservoirs to handle more intense rainfall and prevent flooding in densely populated areas.",
      imageUrl: "/images/top/img8.jpg",
    },
    {
      id: 9,
      title: "OpenAI Raises $6.6B",
      description:
        "OpenAI, the company behind ChatGPT, has secured a historic $6.6 billion funding round, valuing the artificial intelligence firm at $157 billion and solidifying its position as one of the world's most valuable startups, as reported by multiple sources.",
      imageUrl: "/images/top/img9.jpg",
    },
    {
      id: 10,
      title: "FTC's Amazon Suit Partially Dismissed",
      description:
        "U.S. District Judge John Chun has partially dismissed the FTC's antitrust lawsuit against Amazon, allowing core federal allegations to proceed while dismissing some state-level claims; the ruling, which remains sealed, divides the case into addressing alleged violations and proposed remedies, with an October 14 deadline for redaction agreements.",
      imageUrl: "/images/top/img10.jpg",
    },
    {
      id: 11,
      title: "Echoes of Wisdom Highlights",
      description:
        "The Legend of Zelda: Echoes of Wisdom introduces innovative gameplay mechanics and a fresh perspective to the beloved franchise, with Princess Zelda taking the lead role for the first time. This highly anticipated 2D Zelda game blends traditional elements with modern features, offering players a unique adventure filled with creative puzzle-solving, diverse environments, and over 100 echoes to discover and utilize.",
      imageUrl: "/images/entertainments/img6.jpg",
    },
    {
      id: 12,
      title: "Breakdancers Risk Headspin Hole",
      description:
        "Breakdancers are facing a distinct health issue known as headspin hole or breakdance bulge, marked by a protruding scalp lump, hair loss, and tenderness from the repetitive strain of headspins, which can lead to inflammation and scar tissue formation. This condition highlights the physical demands of breakdancing and the importance of awareness and preventive measures to address these specific health risks.",
      imageUrl: "/images/entertainments/img1.jpg",
    },
  ],
  [
    {
      id: 13,
      title: "Internet Archive Data Breach",
      description:
        "According to reports from BleepingComputer, the Internet Archive's Wayback Machine has suffered a significant data breach, with hackers compromising the website and stealing a user authentication database containing 31 million unique records.",
      imageUrl: "/images/tech/img1.jpg",
    },
    {
      id: 14,
      title: "Hera Probes Asteroid Crash",
      description:
        "Based on reports from the European Space Agency (ESA), the Hera spacecraft has been launched to investigate the aftermath of NASA's successful Double Asteroid Redirection Test (DART) mission, which intentionally crashed into the asteroid Dimorphos in 2022 to test planetary defense capabilities.",
      imageUrl: "/images/tech/img2.jpg",
    },
    {
      id: 15,
      title: "Turkey Blocks Discord",
      description:
        "According to reports from Reuters and other sources, Turkey has blocked access to Discord, a popular messaging platform, following a court order issued on October 9, 2024, citing concerns over child safety and the platform's refusal to share user data with authorities.",
      imageUrl: "/images/tech/img3.jpg",
    },
    {
      id: 16,
      title: "Satellite Messaging on Smartphones",
      description:
        "With iOS 18, Apple has expanded its satellite communication capabilities, allowing iPhone 14 and newer models to send and receive messages via satellite when cellular or Wi-Fi connections are unavailable. According to Tom's Guide, this feature seamlessly integrates with iMessage, offering users a way to stay connected even in remote locations.",
      imageUrl: "/images/tech/img4.jpg",
    },
    {
      id: 17,
      title: "Hera Probes Asteroid Crash",
      description:
        "Based on reports from the European Space Agency (ESA), the Hera spacecraft has been launched to investigate the aftermath of NASA's successful Double Asteroid Redirection Test (DART) mission, which intentionally crashed into the asteroid Dimorphos in 2022 to test planetary defense capabilities.",
      imageUrl: "/images/tech/img5.jpg",
    },
    {
      id: 18,
      title: "Halo's Unreal Engine Future",
      description:
        "According to reports from Xbox Wire, Microsoft has revealed that multiple Halo games are currently in development using Unreal Engine 5, marking a significant shift for the franchise as 343 Industries rebrands to Halo Studios and moves away from its proprietary Slipspace Engine.",
      imageUrl: "/images/tech/img6.jpg",
    },
    {
      id: 19,
      title: "Internet Archive Data Breach",
      description:
        "According to reports from BleepingComputer, the Internet Archive's Wayback Machine has suffered a significant data breach, with hackers compromising the website and stealing a user authentication database containing 31 million unique records.",
      imageUrl: "/images/tech/img1.jpg",
    },
    {
      id: 20,
      title: "Hera Probes Asteroid Crash",
      description:
        "Based on reports from the European Space Agency (ESA), the Hera spacecraft has been launched to investigate the aftermath of NASA's successful Double Asteroid Redirection Test (DART) mission, which intentionally crashed into the asteroid Dimorphos in 2022 to test planetary defense capabilities.",
      imageUrl: "/images/tech/img2.jpg",
    },
    {
      id: 21,
      title: "Turkey Blocks Discord",
      description:
        "According to reports from Reuters and other sources, Turkey has blocked access to Discord, a popular messaging platform, following a court order issued on October 9, 2024, citing concerns over child safety and the platform's refusal to share user data with authorities.",
      imageUrl: "/images/tech/img3.jpg",
    },
    {
      id: 22,
      title: "Satellite Messaging on Smartphones",
      description:
        "With iOS 18, Apple has expanded its satellite communication capabilities, allowing iPhone 14 and newer models to send and receive messages via satellite when cellular or Wi-Fi connections are unavailable. According to Tom's Guide, this feature seamlessly integrates with iMessage, offering users a way to stay connected even in remote locations.",
      imageUrl: "/images/tech/img4.jpg",
    },
    {
      id: 23,
      title: "Hera Probes Asteroid Crash",
      description:
        "Based on reports from the European Space Agency (ESA), the Hera spacecraft has been launched to investigate the aftermath of NASA's successful Double Asteroid Redirection Test (DART) mission, which intentionally crashed into the asteroid Dimorphos in 2022 to test planetary defense capabilities.",
      imageUrl: "/images/tech/img5.jpg",
    },
    {
      id: 24,
      title: "Halo's Unreal Engine Future",
      description:
        "According to reports from Xbox Wire, Microsoft has revealed that multiple Halo games are currently in development using Unreal Engine 5, marking a significant shift for the franchise as 343 Industries rebrands to Halo Studios and moves away from its proprietary Slipspace Engine.",
      imageUrl: "/images/tech/img6.jpg",
    },
  ],
  [
    {
      id: 25,
      title: "Boeing Cuts Jobs, Delays 777X",
      description:
        "According to reports from Reuters, Boeing has announced plans to cut 10% of its global workforce, amounting to approximately 17,000 jobs, and delay the delivery of its 777X aircraft by a year as the company grapples with financial challenges exacerbated by an ongoing worker strike.",
      imageUrl: "/images/finance/img1.jpg",
    },
    {
      id: 26,
      title: "BlackRock's Record Asset Surge",
      description:
        "Based on reports from The Guardian, BlackRock, the world's largest asset manager, has seen its assets under management surge to a record $11.5 trillion, marking a significant 26% increase from the $9.1 trillion reported in the third quarter of 2023.",
      imageUrl: "/images/finance/img2.jpg",
    },
    {
      id: 27,
      title: "FBI's Crypto Sting Operation",
      description:
        "In an unprecedented move, the FBI created its own cryptocurrency token called NexFundAI as part of an operation to expose and prosecute alleged market manipulators in the crypto industry. As reported by Fortune, this innovative tactic led to charges against eighteen individuals and companies accused of artificially inflating token prices and engaging in fraudulent practices.",
      imageUrl: "/images/finance/img3.jpg",
    },
    {
      id: 28,
      title: "Nvidia's Robotaxi Opportunity",
      description:
        "As Tesla prepares to unveil its highly anticipated robotaxi on October 10, Nvidia emerges as a potential major beneficiary, with its GPUs playing a crucial role in powering autonomous vehicle technology. While Tesla's event has garnered significant attention, Nvidia's position as a key supplier of AI infrastructure for self-driving cars could lead to substantial gains for the chip maker in the rapidly evolving autonomous vehicle",
      imageUrl: "/images/finance/img4.jpg",
    },
    {
      id: 29,
      title: "Inside the Home Insurance Crisis",
      description:
        "The United States is grappling with a growing home insurance crisis, as highlighted by the aftermath of Hurricane Helene, where many affected homeowners lack adequate coverage. According to reports, only 2 percent of households in flooded areas of Georgia, North Carolina and South Carolina had flood insurance, exposing a critical gap in disaster preparedness and financial protection for homeowners in high-risk regions.",
      imageUrl: "/images/finance/img5.jpg",
    },
    {
      id: 30,
      title: "PepsiCo Buys Siete Foods for $1.2B",
      description:
        "PepsiCo has announced a significant acquisition in the food industry, agreeing to purchase Siete Foods, a Mexican-American brand known for its heritage-inspired products, for $1.2 billion. As reported by CNBC, this marks PepsiCo's first major food acquisition in nearly five years, aligning with the company's strategy to expand its multicultural portfolio and healthier food offerings.",
      imageUrl: "/images/finance/img6.jpg",
    },
    {
      id: 31,
      title: "Boeing Cuts Jobs, Delays 777X",
      description:
        "According to reports from Reuters, Boeing has announced plans to cut 10% of its global workforce, amounting to approximately 17,000 jobs, and delay the delivery of its 777X aircraft by a year as the company grapples with financial challenges exacerbated by an ongoing worker strike.",
      imageUrl: "/images/finance/img1.jpg",
    },
    {
      id: 32,
      title: "BlackRock's Record Asset Surge",
      description:
        "Based on reports from The Guardian, BlackRock, the world's largest asset manager, has seen its assets under management surge to a record $11.5 trillion, marking a significant 26% increase from the $9.1 trillion reported in the third quarter of 2023.",
      imageUrl: "/images/finance/img2.jpg",
    },
    {
      id: 33,
      title: "FBI's Crypto Sting Operation",
      description:
        "In an unprecedented move, the FBI created its own cryptocurrency token called NexFundAI as part of an operation to expose and prosecute alleged market manipulators in the crypto industry. As reported by Fortune, this innovative tactic led to charges against eighteen individuals and companies accused of artificially inflating token prices and engaging in fraudulent practices.",
      imageUrl: "/images/finance/img3.jpg",
    },
    {
      id: 34,
      title: "Nvidia's Robotaxi Opportunity",
      description:
        "As Tesla prepares to unveil its highly anticipated robotaxi on October 10, Nvidia emerges as a potential major beneficiary, with its GPUs playing a crucial role in powering autonomous vehicle technology. While Tesla's event has garnered significant attention, Nvidia's position as a key supplier of AI infrastructure for self-driving cars could lead to substantial gains for the chip maker in the rapidly evolving autonomous vehicle",
      imageUrl: "/images/finance/img4.jpg",
    },
    {
      id: 35,
      title: "Inside the Home Insurance Crisis",
      description:
        "The United States is grappling with a growing home insurance crisis, as highlighted by the aftermath of Hurricane Helene, where many affected homeowners lack adequate coverage. According to reports, only 2 percent of households in flooded areas of Georgia, North Carolina and South Carolina had flood insurance, exposing a critical gap in disaster preparedness and financial protection for homeowners in high-risk regions.",
      imageUrl: "/images/finance/img5.jpg",
    },
    {
      id: 36,
      title: "PepsiCo Buys Siete Foods for $1.2B",
      description:
        "PepsiCo has announced a significant acquisition in the food industry, agreeing to purchase Siete Foods, a Mexican-American brand known for its heritage-inspired products, for $1.2 billion. As reported by CNBC, this marks PepsiCo's first major food acquisition in nearly five years, aligning with the company's strategy to expand its multicultural portfolio and healthier food offerings.",
      imageUrl: "/images/finance/img6.jpg",
    },
  ],
  [
    {
      id: 37,
      title: "London Frieze Week",
      description:
        "Frieze London 2024, taking place from October 9-13 in Regent's Park, promises to be a highlight of the global contemporary art calendar. As reported by Frieze, this year's fair features a reimagined layout and a renewed focus on emerging talents and artistic practices. With over 160 galleries from 43 countries participating, visitors can expect a diverse array of must-see exhibits, from Benedikte Bjerre's whimsical penguin balloons to Tracey Emin's poignant reflections on mortality at White Cube.",
      imageUrl: "/images/arts/img1.jpg",
    },
    {
      id: 38,
      title: "Lodge-to-Lodge Hiking Adventures",
      description:
        "Lodge-to-lodge hiking, a form of slow travel that combines the adventure of long-distance trekking with the comfort of nightly accommodations, has surged in popularity in recent years. As reported by Smithsonian Magazine, these journeys offer travelers the opportunity to explore scenic trails by day while enjoying cozy lodgings and warm meals by night, providing a unique blend of outdoor exploration and creature comforts.",
      imageUrl: "/images/arts/img2.jpg",
    },
    {
      id: 39,
      title: "Peruvian Female Leader's Throne Room",
      description:
        "Archaeologists have unearthed a remarkable 7th-century painted throne room at Pañamarca, an ancient Moche site in Peru, providing unprecedented evidence of a powerful female leader and challenging long-held assumptions about gender roles in pre-Columbian societies.",
      imageUrl: "/images/arts/img3.jpg",
    },
    {
      id: 40,
      title: "Julia Child's Kitchen Tools",
      description:
        "Julia Child's kitchen, now preserved at the Smithsonian, offers a fascinating glimpse into the beloved chef's culinary world, showcasing an impressive array of tools and gadgets that reflect her passion for cooking and her willingness to embrace new technologies. As reported by Smithsonian Magazine, Child's kitchen absorbed an astonishing number of implements over four decades, from traditional copper pans to modern appliances like food processors and microwaves, each carefully chosen to enhance her cooking process and educate her audience.",
      imageUrl: "/images/arts/img4.jpg",
    },
    {
      id: 41,
      title: "Ace Athens: Greek Debut",
      description:
        "Ace Hotel & Swim Club Athens, the brand's first location in Greece, offers a unique blend of coastal charm and modern luxury on the Athens Riviera. Located in Glyfada, the hotel features two pools, multiple restaurants, and a range of accommodations, all designed to capture the essence of Greek modernism and the allure of 1970s seaside resorts.",
      imageUrl: "/images/arts/img5.jpg",
    },
    {
      id: 42,
      title: "LA Art Event Fireworks Fallout",
      description:
        "According to the Los Angeles Times, Chinese artist Cai Guo-Qiang has addressed the controversial fireworks display that kicked off the Getty's PST Art festival, acknowledging surprise at the severity of sound and debris while maintaining there were no malfunctions in the pyrotechnics themselves.",
      imageUrl: "/images/arts/img6.jpg",
    },
    {
      id: 43,
      title: "London Frieze Week",
      description:
        "Frieze London 2024, taking place from October 9-13 in Regent's Park, promises to be a highlight of the global contemporary art calendar. As reported by Frieze, this year's fair features a reimagined layout and a renewed focus on emerging talents and artistic practices. With over 160 galleries from 43 countries participating, visitors can expect a diverse array of must-see exhibits, from Benedikte Bjerre's whimsical penguin balloons to Tracey Emin's poignant reflections on mortality at White Cube.",
      imageUrl: "/images/arts/img1.jpg",
    },
    {
      id: 44,
      title: "Lodge-to-Lodge Hiking Adventures",
      description:
        "Lodge-to-lodge hiking, a form of slow travel that combines the adventure of long-distance trekking with the comfort of nightly accommodations, has surged in popularity in recent years. As reported by Smithsonian Magazine, these journeys offer travelers the opportunity to explore scenic trails by day while enjoying cozy lodgings and warm meals by night, providing a unique blend of outdoor exploration and creature comforts.",
      imageUrl: "/images/arts/img2.jpg",
    },
    {
      id: 45,
      title: "Peruvian Female Leader's Throne Room",
      description:
        "Archaeologists have unearthed a remarkable 7th-century painted throne room at Pañamarca, an ancient Moche site in Peru, providing unprecedented evidence of a powerful female leader and challenging long-held assumptions about gender roles in pre-Columbian societies.",
      imageUrl: "/images/arts/img3.jpg",
    },
    {
      id: 46,
      title: "Julia Child's Kitchen Tools",
      description:
        "Julia Child's kitchen, now preserved at the Smithsonian, offers a fascinating glimpse into the beloved chef's culinary world, showcasing an impressive array of tools and gadgets that reflect her passion for cooking and her willingness to embrace new technologies. As reported by Smithsonian Magazine, Child's kitchen absorbed an astonishing number of implements over four decades, from traditional copper pans to modern appliances like food processors and microwaves, each carefully chosen to enhance her cooking process and educate her audience.",
      imageUrl: "/images/arts/img4.jpg",
    },
    {
      id: 47,
      title: "Ace Athens: Greek Debut",
      description:
        "Ace Hotel & Swim Club Athens, the brand's first location in Greece, offers a unique blend of coastal charm and modern luxury on the Athens Riviera. Located in Glyfada, the hotel features two pools, multiple restaurants, and a range of accommodations, all designed to capture the essence of Greek modernism and the allure of 1970s seaside resorts.",
      imageUrl: "/images/arts/img5.jpg",
    },
    {
      id: 48,
      title: "LA Art Event Fireworks Fallout",
      description:
        "According to the Los Angeles Times, Chinese artist Cai Guo-Qiang has addressed the controversial fireworks display that kicked off the Getty's PST Art festival, acknowledging surprise at the severity of sound and debris while maintaining there were no malfunctions in the pyrotechnics themselves.",
      imageUrl: "/images/arts/img6.jpg",
    },
  ],
  [
    {
      id: 49,
      title: "Mendoza's Mets Magic",
      description:
        "Carlos Mendoza, the rookie manager of the New York Mets, has led his team to a remarkable turnaround, guiding them to the National League Championship Series for the first time in nine years despite a challenging start to the season.",
      imageUrl: "/images/sports/img1.jpg",
    },
    {
      id: 50,
      title: "Lynx Stun Liberty",
      description:
        "According to ABC News, the Minnesota Lynx staged a historic rally to beat the New York Liberty 95-93 in Game 1 of the WNBA Finals, overcoming an 18-point deficit in the first half and a 15-point gap with less than five minutes remaining in regulation, marking the largest comeback in WNBA Finals history.",
      imageUrl: "/images/sports/img2.jpg",
    },
    {
      id: 51,
      title: "Argentina Venezuela Draw 1-1",
      description:
        "As reported by ABC News and ESPN, Lionel Messi's Argentina were held to a 1-1 draw by Venezuela in a South American World Cup qualifying match that was delayed by 30 minutes due to a rain-soaked pitch at Monumental Stadium in Maturin.",
      imageUrl: "/images/sports/img3.jpg",
    },
    {
      id: 52,
      title: "Hurricane Destroys Rays' Stadium",
      description:
        "According to ESPN, Hurricane Milton, a Category 3 storm that made landfall on Florida's Gulf Coast, caused significant damage to the roof of Tropicana Field, home of the Tampa Bay Rays, with high winds tearing off most of the fabric covering the domed structure.",
      imageUrl: "/images/sports/img4.jpg",
    },
    {
      id: 53,
      title: "2026 World Cup Qualifiers",
      description:
        "The 2026 FIFA World Cup qualification process is underway, with teams from around the globe competing for spots in the expanded 48-team tournament to be hosted by Canada, Mexico, and the United States. As reported by FIFA, the qualification matches began in September 2023 and will continue through March 2026, featuring a record number of teams vying for the coveted World Cup berths.",
      imageUrl: "/images/sports/img5.jpg",
    },
    {
      id: 54,
      title: "SEC Upset Weekend",
      description:
        "The Southeastern Conference experienced a seismic shift in its football landscape as three top-10 teams fell to unexpected defeats, with the most stunning upset being Vanderbilt's 40-35 victory over top-ranked Alabama, as reported by ABC News. This chaotic weekend has reshaped the SEC standings and left fans and analysts alike questioning the predictability of college football's most prestigious conference.",
      imageUrl: "/images/sports/img6.jpg",
    },
    {
      id: 55,
      title: "Mendoza's Mets Magic",
      description:
        "Carlos Mendoza, the rookie manager of the New York Mets, has led his team to a remarkable turnaround, guiding them to the National League Championship Series for the first time in nine years despite a challenging start to the season.",
      imageUrl: "/images/sports/img1.jpg",
    },
    {
      id: 56,
      title: "Lynx Stun Liberty",
      description:
        "According to ABC News, the Minnesota Lynx staged a historic rally to beat the New York Liberty 95-93 in Game 1 of the WNBA Finals, overcoming an 18-point deficit in the first half and a 15-point gap with less than five minutes remaining in regulation, marking the largest comeback in WNBA Finals history.",
      imageUrl: "/images/sports/img2.jpg",
    },
    {
      id: 57,
      title: "Argentina Venezuela Draw 1-1",
      description:
        "As reported by ABC News and ESPN, Lionel Messi's Argentina were held to a 1-1 draw by Venezuela in a South American World Cup qualifying match that was delayed by 30 minutes due to a rain-soaked pitch at Monumental Stadium in Maturin.",
      imageUrl: "/images/sports/img3.jpg",
    },
    {
      id: 58,
      title: "Hurricane Destroys Rays' Stadium",
      description:
        "According to ESPN, Hurricane Milton, a Category 3 storm that made landfall on Florida's Gulf Coast, caused significant damage to the roof of Tropicana Field, home of the Tampa Bay Rays, with high winds tearing off most of the fabric covering the domed structure.",
      imageUrl: "/images/sports/img4.jpg",
    },
    {
      id: 59,
      title: "2026 World Cup Qualifiers",
      description:
        "The 2026 FIFA World Cup qualification process is underway, with teams from around the globe competing for spots in the expanded 48-team tournament to be hosted by Canada, Mexico, and the United States. As reported by FIFA, the qualification matches began in September 2023 and will continue through March 2026, featuring a record number of teams vying for the coveted World Cup berths.",
      imageUrl: "/images/sports/img5.jpg",
    },
    {
      id: 60,
      title: "SEC Upset Weekend",
      description:
        "The Southeastern Conference experienced a seismic shift in its football landscape as three top-10 teams fell to unexpected defeats, with the most stunning upset being Vanderbilt's 40-35 victory over top-ranked Alabama, as reported by ABC News. This chaotic weekend has reshaped the SEC standings and left fans and analysts alike questioning the predictability of college football's most prestigious conference.",
      imageUrl: "/images/sports/img6.jpg",
    },
  ],
  [
    {
      id: 61,
      title: "Breakdancers Risk Headspin Hole",
      description:
        "Breakdancers are facing a distinct health issue known as headspin hole or breakdance bulge, marked by a protruding scalp lump, hair loss, and tenderness from the repetitive strain of headspins, which can lead to inflammation and scar tissue formation. This condition highlights the physical demands of breakdancing and the importance of awareness and preventive measures to address these specific health risks.",
      imageUrl: "/images/entertainments/img1.jpg",
    },
    {
      id: 62,
      title: "Nolan's Universal Return",
      description:
        "Christopher Nolan is set to return to Universal Pictures for his next film, with Matt Damon in talks to star, as the acclaimed director continues his partnership with the studio following the success of Oppenheimer. According to Deadline, the highly anticipated project is slated for an IMAX release on July 17, 2026, maintaining Nolan's tradition of mid-July premieres.",
      imageUrl: "/images/entertainments/img2.jpg",
    },
    {
      id: 63,
      title: "Tetris Player Achieves Rebirth",
      description:
        "In a groundbreaking achievement for the Tetris community, 16-year-old Michael dogplayingtetris Artiaga has become the first player to clear level 255 in NES Tetris and achieve the mythical rebirth, resetting the game back to level 0. As reported by IGN, Artiaga accomplished this feat during an 80-minute livestream, clearing approximately 3,300 lines and setting a new world record score of over 29 million points.",
      imageUrl: "/images/entertainments/img3.jpg",
    },
    {
      id: 64,
      title: "Joker Sequel Debuts",
      description:
        "The highly anticipated sequel Joker: Folie à Deux, starring Joaquin Phoenix and Lady Gaga, has made its debut, garnering mixed reviews but a 12-minute standing ovation at its Venice Film Festival premiere. This musical follow-up to the 2019 hit Joker features Phoenix reprising his role as Arthur Fleck alongside Gaga's introduction as Harley Quinn, with the film incorporating song and dance elements to express the characters' inner psyches.",
      imageUrl: "/images/entertainments/img4.jpg",
    },
    {
      id: 65,
      title: "Silent Hill 2 Remake Launch",
      description:
        "Konami has officially revealed the global release times for the highly anticipated Silent Hill 2 remake, set to launch on October 8, 2024, for PlayStation 5 and PC via Steam. As reported by IGN, the game will become available at different times across regions, with some players able to access it as early as 9 PM PDT on October 7 in Los Angeles.",
      imageUrl: "/images/entertainments/img5.jpg",
    },
    {
      id: 66,
      title: "Echoes of Wisdom Highlights",
      description:
        "The Legend of Zelda: Echoes of Wisdom introduces innovative gameplay mechanics and a fresh perspective to the beloved franchise, with Princess Zelda taking the lead role for the first time. This highly anticipated 2D Zelda game blends traditional elements with modern features, offering players a unique adventure filled with creative puzzle-solving, diverse environments, and over 100 echoes to discover and utilize.",
      imageUrl: "/images/entertainments/img6.jpg",
    },
    {
      id: 67,
      title: "Breakdancers Risk Headspin Hole",
      description:
        "Breakdancers are facing a distinct health issue known as headspin hole or breakdance bulge, marked by a protruding scalp lump, hair loss, and tenderness from the repetitive strain of headspins, which can lead to inflammation and scar tissue formation. This condition highlights the physical demands of breakdancing and the importance of awareness and preventive measures to address these specific health risks.",
      imageUrl: "/images/entertainments/img1.jpg",
    },
    {
      id: 68,
      title: "Nolan's Universal Return",
      description:
        "Christopher Nolan is set to return to Universal Pictures for his next film, with Matt Damon in talks to star, as the acclaimed director continues his partnership with the studio following the success of Oppenheimer. According to Deadline, the highly anticipated project is slated for an IMAX release on July 17, 2026, maintaining Nolan's tradition of mid-July premieres.",
      imageUrl: "/images/entertainments/img2.jpg",
    },
    {
      id: 69,
      title: "Tetris Player Achieves Rebirth",
      description:
        "In a groundbreaking achievement for the Tetris community, 16-year-old Michael dogplayingtetris Artiaga has become the first player to clear level 255 in NES Tetris and achieve the mythical rebirth, resetting the game back to level 0. As reported by IGN, Artiaga accomplished this feat during an 80-minute livestream, clearing approximately 3,300 lines and setting a new world record score of over 29 million points.",
      imageUrl: "/images/entertainments/img3.jpg",
    },
    {
      id: 70,
      title: "Joker Sequel Debuts",
      description:
        "The highly anticipated sequel Joker: Folie à Deux, starring Joaquin Phoenix and Lady Gaga, has made its debut, garnering mixed reviews but a 12-minute standing ovation at its Venice Film Festival premiere. This musical follow-up to the 2019 hit Joker features Phoenix reprising his role as Arthur Fleck alongside Gaga's introduction as Harley Quinn, with the film incorporating song and dance elements to express the characters' inner psyches.",
      imageUrl: "/images/entertainments/img4.jpg",
    },
    {
      id: 71,
      title: "Silent Hill 2 Remake Launch",
      description:
        "Konami has officially revealed the global release times for the highly anticipated Silent Hill 2 remake, set to launch on October 8, 2024, for PlayStation 5 and PC via Steam. As reported by IGN, the game will become available at different times across regions, with some players able to access it as early as 9 PM PDT on October 7 in Los Angeles.",
      imageUrl: "/images/entertainments/img5.jpg",
    },
    {
      id: 72,
      title: "Echoes of Wisdom Highlights",
      description:
        "The Legend of Zelda: Echoes of Wisdom introduces innovative gameplay mechanics and a fresh perspective to the beloved franchise, with Princess Zelda taking the lead role for the first time. This highly anticipated 2D Zelda game blends traditional elements with modern features, offering players a unique adventure filled with creative puzzle-solving, diverse environments, and over 100 echoes to discover and utilize.",
      imageUrl: "/images/entertainments/img6.jpg",
    },
  ],
];
export default mockData;
