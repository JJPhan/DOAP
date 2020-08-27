# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all 
Listing.destroy_all
Sneaker.destroy_all 

demo = User.create(email: "heracross1@gmail.com", password: "pikachu")

jordan1s = [ 
    {
        name: "Air Jordan 1 Retro High OG 'Chicago' 2015",
        description: "The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",
        release_date: "2015-05-29",
        sku: "555088 101",
        brand: "Air Jordan",
        colorway: "White/Black-Varsity Red",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Chicago" 
    },
    {    
        name: "Air Jordan 1 Retro High OG 'Royal' 2017",
        description: "In 1985 sports photographer, Chuck Kohn, photographed Michael Jordan wearing the Air Jordan 1 Royals. This photo turned Nike poster was the first time anyone saw Michael wearing the Air Jordan 1 sneakers. Ever. Known to be his favorite colorway, Jordan chose the Royals to be the first Air Jordan 1 available for purchase. They were also the only color-way out of the Top 3 Air Jordan 1 Retro colorways (‘Banned’ and ‘Chicago’) that he never wore on the court. Since 1985, the Royals have been released in 2001, 2013, and 2017.",
        release_date: "2017-04-01",
        sku: "555088 007",
        brand: "Air Jordan",
        colorway: "Black/Royal-White",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Royal"
    },
    {
        name: "Air Jordan 1 Retro High OG 'Shadow' 2018",
        description: "This Nike Air Jordan 1 Retro High OG 'Shadow' 2018 is a retro re-release of an original 1985 colorway. The shoe features a black and medium grey leather upper with a white midsole and black outsole. It also features OG Nike Air branding on the tongue and the Wings logo on the ankle collar. It was last retroed in 2013, and a low-top version dropped in 2015.",
        release_date: "2018-04-14",
        sku: "555088 013",
        brand: "Air Jordan",
        colorway: "Black/White-Medium Grey",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
    # nickname: "Shadow"
    },
    {
        name: "Air Jordan 1 Retro High OG 'Storm Blue'",
        description: "As one quarter of Nike's Best Hand in the Game collection, the Air Jordan 1 Retro High OG 'Clay Green' is designed to represent unique milestones in Michael Jordan's career. This sneaker features a Summit White and black leather upper with green suede accents and the original Nike Air logo on the tongue tag. The shoe also sports the traditional 'Black Toe' blocking scheme on the toe box and midfoot. Graphics depicting a full-house of playing cards grace the insoles, symbolizing some of Jordan's biggest career accomplishments: Championship Winner, Offensive Player of the Year, Defensive Player of the Year, and Hall of Fame induction. This model was released exclusively on Nike's SNKRS app and at select retailers in North America.",
        release_date: "2016-12-23",
        sku: "555088 127",
        brand: "Air Jordan",
        colorway: "White/Storm Blue",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Storm Blue"
    },
    {    
        name: "Air Jordan 1 Retro High OG 'Clay Green'",
        description: "As one quarter of Nike's Best Hand in the Game collection, the Air Jordan 1 Retro High OG 'Clay Green' is designed to represent unique milestones in Michael Jordan's career. This sneaker features a Summit White and black leather upper with green suede accents and the original Nike Air logo on the tongue tag. The shoe also sports the traditional 'Black Toe' blocking scheme on the toe box and midfoot. Graphics depicting a full-house of playing cards grace the insoles, symbolizing some of Jordan's biggest career accomplishments: Championship Winner, Offensive Player of the Year, Defensive Player of the Year, and Hall of Fame induction. This model was released exclusively on Nike's SNKRS app and at select retailers in North America.",
        release_date: "2018-04-30",
        sku: "555088 135",
        brand: "Air Jordan",
        colorway: "Summit White/Clay Green-Black",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Clay Green"
    },
    {
        name: "Air Jordan 1 Retro High OG 'Blue Moons'",
        description: "First released in Europe in May 2018, the Retro High OG ‘Yellow Ochre’ is part of the ‘Best Hand in the Game’ collection. The group is comprised of four different colorways of the classic Air Jordan 1 silhouette, each representing a significant milestone in Michael Jordan’s career. All four shoes in the collection feature black toe blocking and a hand of cards on the right insole — the Yellow Ochre colorway celebrating Jordan’s five MVP titles with a royal flush — a detail some view as an indirect nod to the player’s unparallelled competitive spirit.",
        release_date: "2018-04-30",
        sku: "555088 115",
        brand: "Air Jordan",
        colorway: "Summit White/Blue Moon-Black",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Blue Moon"
    },
    {
        name: "Air Jordan 1 Retro High OG 'Yellow Ochre'",
        description: "First released in Europe in May 2018, the Retro High OG ‘Yellow Ochre’ is part of the ‘Best Hand in the Game’ collection. The group is comprised of four different colorways of the classic Air Jordan 1 silhouette, each representing a significant milestone in Michael Jordan’s career. All four shoes in the collection feature black toe blocking and a hand of cards on the right insole — the Yellow Ochre colorway celebrating Jordan’s five MVP titles with a royal flush — a detail some view as an indirect nod to the player’s unparallelled competitive spirit.",
        release_date: "2018-04-30",
        sku: "555088 109",
        brand: "Air Jordan",
        colorway: "Summit White/Blue Moon-Black",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Yellow Ochre"
    },
    {
        name: "Air Jordan 1 Retro High OG 'Track Red'",
        description: "The Air Jordan 3 Retro OG ‘True Blue’ was released as one of the four OG colorways in 1988. It saw several non-OG retro releases, starting in 2001, in 2009 (Europe only), and again in 2011 as part of a wide Air Jordan 3 retro release that commemorated the 23rd anniversary of the shoe. The 2016 retro saw the ‘True Blue’ return again, but this time with the original branding and logo details that mimic the 1988 release.",
        release_date: "2018-04-30",
        sku: "555088 112",
        brand: "Air Jordan",
        colorway: "Summit White/Track Red-Black",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Track Red"
    },
    {
        name: "Air Jordan 1 Retro High OG 'Banned' 2016",
        description: "Banned by the NBA in 1985, Michael Jordan was charged $5,000 per game for wearing the Air Jordan 1 ‘Black/Red' because they didn’t include the color white which was part of the Chicago Bulls’ official team colors. Used as a marketing tactic, Nike crafted the ‘Banned’ campaign around the sneakers to launch and promote the Air Jordan line. The sneaker was retroed in 1994, 2011, 2013 and 2016. The 2011 pair featured an ‘X’ on the heel paying homage to the 'Banned' nickname.",
        release_date: "2016-09-02",
        sku: "555088 001",
        brand: "Air Jordan",
        colorway: "Black/Varsity Red-White",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Banned, Bred"
    },
    {
        name: "Air Jordan 1 Retro High OG 'Black Toe' 2016",
        description: "One of the original colorways of the Air Jordan 1 line, the Air Jordan 1 Retro BG 'Black Toe' grew in popularity after being featured in several Nike promotional campaigns (including the photo that inspired the Jordan logo itself). Surprisingly though, Jordan only wore this colorway in a handful of games, thereby increasing its popularity. Retroed in 2013, the 2016 release returns to the original 1985 branding with the Nike Air logo on the tongue and the absence of the Jumpman logo on the heel.",
        release_date: "2016-11-04",
        sku: "555088 125",
        brand: "Air Jordan",
        colorway: "Black/White-Varsity Red",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Black Toe"
    },
    {
        name: "Air Jordan 1 Retro High OG  NRG 'Homage to Home'",
        description: "To honor Chicago, Jordan released a brand new version of the Air Jordan 1. The Air Jordan 1 Retro High OG NRG 'Homage to Home' features a classic Chicago Bulls color scheme, with a leather upper split between black and red. Early versions from the initial Chicago-only release are numbered and include ‘FROM’ and ‘FOR’ lettering on the heels.",
        release_date: "2018-05-18",
        sku: "861428 061",
        brand: "Air Jordan",
        colorway: "Black/White-University Red",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Homage To Home"
    },
    {
        name: "Air Jordan 1 Retro High OG 'Rookie of the Year'",
        description: "In 1985, Michael Jordan received the NBA’s Rookie of the Year Award after launching his career with a remarkable point per game average and a thirst for success. To celebrate, Jordan Brand released the Air Jordan 1 Retro High OG 'Rookie of the Year.' The high top features a white-based leather upper with perforations on the toe box for breathability and Gold Harvest leather overlays on the mudguard, ankle, eyestay, and heel. Hidden on the inside of each strap on the upper are callouts to MJ’s outstanding rookie season. ‘1984-85 R.O.Y. 2313 POINTS 28.2 PPG’ can be found on the inside of one strap, and a quote from Jordan can be found on the other.",
        release_date: "2018-11-17",
        sku: "555088 700",
        brand: "Air Jordan",
        colorway: "Gold Harvest/Black-Sail",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Rookie of the Year"
    },
    {
        name: "Air Jordan 1 Retro High OG 'Game Royal'",
        description: "With color blocking that mirrors the original “Chicago”, the Air Jordan 1 Retro High introduces another addition to the AJ1 family: ‘Game Royal’ blue. A little jarring at first, the Game Royal settles in nicely with the original 1985 color block with a new updated shade of blue. The Wings logo and Swoosh are punctuated in black, with the Summit White on the side panel and toebox.",
        release_date: "2018-03-23",
        sku: "555088 403",
        brand: "Air Jordan",
        colorway: "Game Royal/Summit White-Black",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Game Royal"
    },
    {
        name: "Fragment Design x Air Jordan 1 Retro High OG",
        description: "The Nike Fragment Design x Air Jordan 1 Retro High OG is the first collaboration between Hiroshi Fujiwara's Fragment Design and Brand Jordan. One of the most coveted Air Jordan 1 colorways ever created, the design combines the OG black-toe color blocking with royal blue accents. Released in limited quantities in December 2014, the design also includes Nike Air branding on the tongue and a Fragment Design logo at the heel.",
        release_date: "2014-12-27",
        sku: "716371 040",
        brand: "Air Jordan",
        colorway: "Black/Sport Royal-White",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Fragment"
    },
    {
        name: "Air Jordan 1 Retro High OG 'Barons",
        description: "The Nike Air Jordan 1 Retro High OG 'Barons' is inspired by Michael Jordan's brief minor league baseball career with the Birmingham Barons before returning to the NBA to win three more championship titles. The design features a white, black, and grey leather upper with 'Nike Air' branding on the tongue. Released in April 2014, the design also features a black and grey pinstriped inner lining.",
        release_date: "2014-04-04",
        sku: "555088 104",
        brand: "Air Jordan",
        colorway: "White/Black-Wolf Grey",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Barons"
    },
    {
        name: "Air Jordan 1 Retro High OG 'Shattered Backboards",
        description: "In 1985 on a Nike Europe tour, Michael Jordan shattered a backboard when throwing down a monstrous dunk while wearing an orange, black, and white uniform. Commemorating the moment and uniform, this 2015 Air Jordan 1 'Shattered Backboard' (aka 'Shattered Backboard' 1.0) sneaker was released. Shortly after in the Fall of 2016, an Air Jordan 1 'Shattered Backboard Away' (aka 'Reverse' and 'Shattered Backboard 2.0') was released. The sneaker keeps the black laces and Nike branding, but swaps out the orange toe box and black around the toe and tongue for white.",
        release_date: "2015-06-26",
        sku: "555088 005",
        brand: "Air Jordan",
        colorway: "Black/Starfish-Sail",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Shattered Backboard"
    },
    {
        name: "Air Jordan 1 Retro High OG 'Shattered Backboards Away",
        description: "In 1985 on a Nike Europe tour, Michael Jordan shattered a backboard when throwing down a monstrous dunk while wearing an orange, black, and white uniform. Commemorating the moment and uniform, a 2015 Air Jordan 1 'Shattered Backboard' (aka 'Shattered Backboard' 1.0) sneaker was released. Shortly after in the Fall of 2016, an Air Jordan 1 'Shattered Backboard Away' (aka 'Reverse' and 'Shattered Backboard 2.0') was released. This sneaker keeps the black laces and Nike branding, but swaps out the orange toe box and black around the toe and tongue for white.",
        release_date: "2015-10-08",
        sku: "555088 113",
        brand: "Air Jordan",
        colorway: "Sail/Black-Starfish",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Shattered Backboard"
    },
    {
        name: "Air Jordan 1 Retro High OG Flyknit 'Royal'",
        description: "The Nike Air Jordan 1 Retro High OG Flyknit 'Royal' features an updated black and royal blue Flyknit upper with a white midsole, royal blue outsole, and Nike Air branding on the tongue. Released in October 2017, the colorway was also retro'd with a more traditional tumbled leather upper in April 2017.",        
        release_date: "2017-10-06",
        sku: "919704 006",
        brand: "Air Jordan",
        colorway: "Black/Game Royal-White",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Royal"
    },    
    {
        name: "Air Jordan 1 Retro High OG Flyknit 'Bred'",
        description: "The Nike Air Jordan 1 Retro High OG Flyknit 'Bred' features an updated black and Varsity Red Flyknit upper with a white midsole and Varsity Red outsole. Released in September 2017, the sneaker also features Nike Air branding on the tongue and a Wings logo at the ankle collar.",
        release_date: "2017-09-08",
        sku: "919704 001",
        brand: "Air Jordan",
        colorway: "Black/Varsity Red-White",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Bred"
    },    
   {
        name: "Air Jordan 1 Retro High OG Flyknit 'Shadow'",
        description: "The OG Air Jordan 1 Shadow silhouette first hit the shelves in 1985 with a leather construction. Jordan Brand has updated the classic model with a Flyknit treatment. The Air Jordan 1 Retro High OG Flyknit 'Shadow' boasts a Flyknit upper with the traditional black and Medium Grey color scheme. The high top also sports leather touches on the Swoosh, Wings logo on the ankle, and on the inner tongue to pay homage to its predecessor.",
        release_date: "2018-01-13",
        sku: "919704 003",
        brand: "Air Jordan",
        colorway: "Black/Medium Grey-White",
        silhouette: "Air Jordan 1",
        category: "Lifestyle"
        # nickname: "Shadow"
    }
]

jordan3s = [
    {
        name: "Air Jordan 3 Retro OG 'Black Cement' 2018",
        description: "The Air Jordan 3 was the first of many for Michael Jordan and Tinker Hatfield. It was the first time they would work together on the signature shoe, it was the first time the elephant print made an appearance on a shoe, and it was the first time the “Jumpman” logo adorned the tongue with the classic “NIKE AIR” stamped on the heel. The Black/Cement Air Jordan 3 Retro OG comes back in its original form. Featuring black tumbled and smooth leather uppers and all the distinct details we remember thirty years later.",
        release_date: "2018-02-17",
        sku: "854262 001",
        brand: "Air Jordan",
        colorway: "Black/Cement Grey-White-Fire Red",
        silhouette: "Air Jordan 3",
        category: "Lifestyle"
        # nickname: "Black Cement"
    },
    {
        name: "Air Jordan 3 Retro OG 'True Blue' 2016",
        description: "The Air Jordan 3 Retro OG ‘True Blue’ was released as one of the four OG colorways in 1988. It saw several non-OG retro releases, starting in 2001, in 2009 (Europe only), and again in 2011 as part of a wide Air Jordan 3 retro release that commemorated the 23rd anniversary of the shoe. The 2016 retro saw the ‘True Blue’ return again, but this time with the original branding and logo details that mimic the 1988 release.",
        release_date: "2016-11-25",
        sku: "854262 106",
        brand: "Air Jordan",
        colorway: "White/True Blue",
        silhouette: "Air Jordan 3",
        category: "Lifestyle"
        # nickname: "True Blue"
    },
    {
        name: "Air Jordan 3 Retro OG 'White Cement' 2011",
        description: "The Air Jordan 3 marked the debut of Brand Jordan's visible Air cushioning, elephant print, and the Jumpman logo. Falling in line with the 2003 retros, this 2011 iteration features a Jumpman logo in place of the 1988 OG Nike Air branding at the heel and tongue. Nike Air branding wouldn't return to the Air Jordan 3 until 2013 with a release appropriately named 'Air Jordan 3 Retro '88.'",
        release_date: "2011-01-22",
        sku: "136064 105",
        brand: "Air Jordan",
        colorway: "White/Fire Red-Cement Grey-Blk",
        silhouette: "Air Jordan 3",
        category: "Lifestyle"
        # nickname: "White Cement"
    },
    {
        name: "Air Jordan 3 Retro JTH NRG 'Bio Beige'",
        description: "Fresh off his summer 2018 tour, the Air Jordan 3 gets the Justin Timberlake treatment with a ‘Bio Beige’ version. It sports a tan soft suede upper, blacked-out elephant print overlays, and Nike Air logos at the heels. Aggressive text accents include phrases like “HIGHER” on the ankle as well as “FAME IS A LIE” and “STRESS IS CRUEL” on the insoles.",
        release_date: "2018-08-28",
        sku: "AV6683 200",
        brand: "Air Jordan",
        colorway: "Bio Beige/Opti Yellow-Bio Beige",
        silhouette: "Air Jordan 3",
        category: "Lifestyle"
        # nickname: "Bio Beige"
    },
    {
        name: "Atmos x Air Jordan 3 Retro 'Safari' ",
        description: "Japanese streetwear retailer atmos dropped this special edition ‘Safari’ Air Jordan 3 to celebrate Air Max Day in 2017. Borrowing design elements from atmos’ classic 2002 Air Max 1 ‘Safari,’ the shoe features a black nubuck upper, safari print overlays at the toe and heel, and orange accents on the lower eyelets and inner tongue. Other features include embroidered green Jumpman branding on the tongue, and embossed green Nike Air branding on the heel. The classic basketball shoe is finished off with a Sail and black midsole and an icy blue translucent outsole with orange Nike branding.",
        release_date: "2017-03-18",
        sku: "923096 001",
        brand: "Air Jordan",
        colorway: "Multi-Color/Multi-Color",
        silhouette: "Air Jordan 3",
        category: "Lifestyle"
        # nickname: "Safari"
    },    
    {
        name: "Air Jordan 3 Retro 'Fear Pack'",
        description: "Inspired by Jordan Brand’s 2008 “Be Legendary” marketing campaign, this Air Jordan 3 Retro 'Fear Pack' colorway features a Night Stadium leather upper with Total Orange accents. The sneaker also comes with elephant print overlays, a speckled black and white midsole, and a black outsole. Released in August 2013, the ‘Fear Pack’ also included new colorways for the Jordan 4 and Jordan 5 silhouettes.",
        release_date: "2013-08-24",
        sku: "626967 040",
        brand: "Air Jordan",
        colorway: "Nght Stdm/Ttl Orng Blck-Ntrl G",
        silhouette: "Air Jordan 3",
        category: "Lifestyle"
        # nickname: "Fear Pack"
    },
    {
        name: "Air Jordan 3 Retro 'Mocha' 2018",
        description: "The Air Jordan 3 Retro ‘Mocha’ 2018 brings back the distinctive colorway first released in 2001. The mid-top keeps the original build intact, featuring a white tumbled leather upper accented with contrasting pops of Dark Mocha on the shoe’s signature elephant-print overlays. The brown hue also appears on the outsole and Jumpman logo hits that adorn the tongue and heel panel.",
        release_date: "2018-12-15",
        sku: "136064 122",
        brand: "Air Jordan",
        colorway: "White/Chrome-Dark Mocha",
        silhouette: "Air Jordan 3",
        category: "Lifestyle"
        # nickname: "Mocha"
    },
    {
        name: "Air Jordan 3 Retro NRG 'Free Throw Line' ",
        description: "In celebration of Michael Jordan’s iconic launch from the free throw line thirty years ago during the 1988 Slam Dunk Contest, Jordan Brand released the Air Jordan 3 Retro NRG 'Free Throw Line.' The sneaker comes dressed in white with Cement Grey accents on the toe box and heel and Fire Red detailing on the eyelets and on the tongue. The model also boasts a translucent sole with a red stripe, exactly where MJ took off from the line. Other details include '3:51' lettering on the back pull tab to remember the time Jordan took flight, and '147' on the tongue as a nod to his final score.",
        release_date: "2018-02-14",
        sku: "923096 101",
        brand: "Air Jordan",
        colorway: "White/Fire Red-Cement Grey-Black",
        silhouette: "Air Jordan 3",
        category: "Lifestyle"
        # nickname: "Free Throw Line, ASG"
    },
    {
        name: "Air Jordan 3 Retro SE 'Unite' ",
        description: "Dropping in conjunction with the 2020 NBA All-Star Weekend in Chicago, the Air Jordan 3 Retro SE 'Unite' showcases classic color blocking that stays true to the sneaker’s Windy City heritage. The tumbled leather upper is finished in a bold Fire Red hue, complete with Nike Air branding and grey cement-print overlays at the toe and heel. The mid-top is anchored by a contrasting white midsole with visible Air sole cushioning.",
        release_date: "2020-02-15",
        sku: "CK5692 600",
        brand: "Air Jordan",
        colorway: "Fire Red/Fire Red/Cement Grey/Black",
        silhouette: "Air Jordan 3",
        category: "Lifestyle"
        # nickname: "Fire Red"
    }
]


dunklow = [
    {
        name: "Dunk Low Retro Vol. 1 SP 'Plum'",
        description: "The 2020 reissue of the Dunk Low Retro Vol. 1 SP 'Plum' brings back a classic colorway first released in 2001 as part of Nike’s Japan-exclusive co.jp series. Like the original, this pair features a two-tone purple finish on a buttery all-suede upper, with contrasting hits of dark red on the Swoosh, heel tab and laces. The low-top rides on a white foam midsole, supported underfoot by a red rubber outsole.",
        release_date: "2020-02-07",
        sku: "Cu1726 500",
        brand: "Nike",
        colorway: "Daybreak/Barn/Plum",
        silhouette: "Dunk",
        category: "Lifestyle"
    },
    {
        name: "Dunk Low Pro SB 'Corduroy'",
        description: "Dust off those skateboards and grab the Nike SB Dunk Low Corduroy Dusty Peach. This SB Dunk Low comes with a peach upper plus brown accents, blue Nike 'Swoosh', white midsole, and a gum sole. These sneakers released in April 2019 and retailed for $90.",
        release_date: "2019-04-10",
        sku: "BQ6817 201",
        brand: "Nike",
        colorway: "Dusty Peach/Photo Blue-Desert Ore",
        silhouette: "Dunk",
        category: "Skateboarding"
    },
    {
        name: "Dunk Low Retro SP 'Kentucky'",
        description: "Celebrating the silhouette’s 35th anniversary, the Dunk Low Retro SP ‘Kentucky’ borrows a familiar color scheme from Nike’s legendary ‘Be True to Your School’ series from 1985. The high-top basketball shoe originally made for the University of Kentucky is updated as a versatile low-top, featuring a white leather upper with royal blue overlays. A breathable mesh tongue is topped with a woven Nike tag, complementing a second Nike logo hit on the heel tab.",
        release_date: "2020-03-14",
        sku: "CU1726 100",
        brand: "Nike",
        colorway: "White/Varsity Royal",
        silhouette: "Dunk",
        category: "Lifestyle"
    },
    {
        name: "Ben & Jerry's x Dunk Low SB 'Chunky Dunky'",
        description: "Made in collaboration with Ben & Jerry’s, the Nike Dunk Low SB ‘Chunky Dunky’ replicates the packaging used for the ice cream brand’s Chunky Monkey flavor. The leather upper depicts blue skies and green pastures, while pony-hair overlays are rendered in a spotted cow print. A yellow leather Swoosh is treated to a melting ice cream effect for added visual flair. Atop the tongue, the woven tag features a Chunky Dunky callout alongside Nike SB branding.",
        release_date: "2020-05-23",
        sku: "CU3244 100",
        brand: "Nike",
        colorway: "White/Lagoon Pulse/Black/University Gold",
        silhouette: "Dunk",
        category: "Skateboarding"
    },
    {
        name: "Dunk Low SB 'Night of Mischief'",
        description: "Made in collaboration with Ben & Jerry’s, the Nike Dunk Low SB ‘Chunky Dunky’ replicates the packaging used for the ice cream brand’s Chunky Monkey flavor. The leather upper depicts blue skies and green pastures, while pony-hair overlays are rendered in a spotted cow print. A yellow leather Swoosh is treated to a melting ice cream effect for added visual flair. Atop the tongue, the woven tag features a Chunky Dunky callout alongside Nike SB branding.",
        release_date: "2019-10-31",
        sku: "BQ6817 006",
        brand: "Nike",
        colorway: "Black/Total Orange-Court Purple-Volt",
        silhouette: "Dunk",
        category: "Skateboarding"
    },
    {
        name: "Dunk Low SB 'Muslin'",
        description: "The Nike Dunk Low SB 'Muslin' makes use of a subdued tan shade throughout the upper, constructed from a blend of leather and suede with a black Nike Swoosh. A contrasting brick red hue is applied to the collar lining and interior tongue, matching the midsole and rubber outsole. At the back, a metallic gold heel tab is embroidered with a black Nike wordmark. A sockliner fitted with a Zoom Air unit offers impact protection under the heel.",
        release_date: "2020-04-04",
        sku: "BQ6817 100",
        brand: "Nike",
        colorway: "Tan",
        silhouette: "Dunk",
        category: "Skateboarding"
    },
    {
        name: "Dunk Low SB 'J-Pack Chicago'",
        description: "Nike SB is known for borrowing colorways from Jordan Brand for its releases. It is referred to as a J-Pack release when this happens, most recently seen on the “Shadow” J-Pack earlier this year. This release, however, features a complete smooth leather construction just like its AJ1 counterpart. All previous J-Packs included suede in their construction.",
        release_date: "2020-09-01",
        sku: "BQ6817 600",
        brand: "Nike",
        colorway: "White/Black-Varsity Red",
        silhouette: "Dunk",
        category: "Skateboarding"
    },
    {
        name: "Dunk Low Pro PRM SB 'Sashiko Pack'",
        description: "The Nike Dunk Low Pro PRM SB ‘Sashiko Pack’ features a unique design inspired by a traditional form of needlework embroidery that originated in Japan. Decorative stitching is liberally applied throughout the upper, built with a combination of blue suede and dark indigo denim. A stuffed tongue offers a snug, comfortable fit, while the foam sockliner packs a Zoom Air unit in the heel for impact absorption. Underfoot, a gum rubber outsole provides grippy traction.",
        release_date: "2020-08-01",
        sku: "CV0316 400",
        brand: "Nike",
        colorway: "Mystic Navy/Mystic Navy/Gum Light Brown",
        silhouette: "Dunk",
        category: "Skateboarding"
    },
    {
        name: "Grateful Dead x Dunk Low SB 'Green Bear'",
        description: "Made in collaboration with the legendary jam band, the Grateful Dead x Nike Dunk Low SB ‘Green Bear’ features a green furry upper that draws inspiration from the back cover of the 1973 live album, ‘History of the Grateful Dead, Vol. One (Bear’s Choice).’ Contrasting pops of royal blue make their way to the jagged Swoosh, rubber outsole and the sneaker’s branding hits, including an ursine graphic on the tongue. The latter is equipped with a zippered stash pocket.",
        release_date: "2020-07-24",
        sku: "CJ5378 300",
        brand: "Nike",
        colorway: "Electric Green/Game Royal/Black",
        silhouette: "Dunk",
        category: "Skateboarding"
    },
    {
        name: "Dunk Low SP 'Champ Colors'",
        description: "The Nike Dunk Low SP ‘Champ Colors’ channels the simple aesthetic of the silhouette’s OG colorways from the ‘80s. The all-leather upper features an orange base with contrasting blue overlays and a white Nike Swoosh. Perforated detailing on the toe box offers added breathability, while a nylon tongue and padded collar combine for a comfortable fit. The low-top rides on a stitched white foam midsole, supported by a blue rubber outsole underfoot.",
        release_date: "2020-05-21",
        sku: "CU1727 800",
        brand: "Nike",
        colorway: "University Orange/Marine",
        silhouette: "Dunk",
        category: "Skateboarding"
    },
    {
        name: "Travis Scott x Dunk Low Premium QS SB 'Cactus Jack'",
        description: "The Travis Scott x Dunk Low SB shows off a unique patchwork motif on the upper, featuring a tan leather base with plaid quarter panels and paisley print overlays, the latter made to tear away to reveal hidden elephant print underneath. The dueling patterns are complemented by rope laces, Cactus Jack tongue tags and mismatched black and pink Swooshes on each shoe. A white midsole and tan rubber outsole anchor the complex design.",
        release_date: "2020-02-29",
        sku: "CT5053 001",
        brand: "Nike",
        colorway: "Black/Parachute Beige/Petra Brown",
        silhouette: "Dunk",
        category: "Skateboarding"
    },
    {
        name: "SB Dunk Mid 'White Widow'",
        description: "This Nike SB Dunk Mid 'White Widow' was a collaboration for 4/20 with Todd Bratrud, a graphic designer and owner of Send Help skateboards. It features a Fresh Mint and Sail thick suede upper with Gym Red accents. It also comes with a Sail midsole, white outsole, and a Black Widow-inspired red hourglass. Keep an eye out for a stash pocket in the tongue and a White Widow illustration on the insole. The sneaker dropped on 4/20 with a complementary line of apparel.",
        release_date: "2018-04-20",
        sku: "AQ2207 163",
        brand: "Nike",
        colorway: "Sail/Gym Red-Fresh Mint",
        silhouette: "Dunk",
        category: "Skateboarding"
    },
    {
        name: "Dunk Low SP Retro 'Viotech' 2019",
        description: "The Nike Dunk Low SP Retro 'Viotech' is the reincarnation of the iconic Japan exclusive from 2002. Brought back again in December 2019, the sneaker is presented in premium color block suede with Swooshes flanking the sides, a stitched textile collar and perforated toe box. One modern revision includes a logo-debossed leather label stitched to the tongue. The upper is sat atop a two-tone rubber cupsole.",
        release_date: "2019-12-10",
        sku: "CT5050 500",
        brand: "Nike",
        colorway: "Viotech/Viotech",
        silhouette: "Dunk",
        category: "Lifestyle"
    },
    {
        name: "Dunk Low Retro SP 'Syracuse'",
        description: "The Dunk Low Retro SP ‘Syracuse’ celebrates the silhouette’s 35th anniversary with a classic colorway from Nike’s ‘Be True to Your School’ series from 1985. The two-tone high-top Dunk that originally represented the University of Syracuse basketball team is reinterpreted as a versatile low-top. The all-leather upper combines a crisp white base with Orange Blaze overlays, complete with a woven Nike tag on the breathable mesh tongue.",
        release_date: "2020-03-14",
        sku: "CU1726 101",
        brand: "Nike",
        colorway: "White/Orange Blaze",
        silhouette: "Dunk",
        category: "Lifestyle"
    }
]

adidas = [
    {
        name: "UltraBoost 1.0 'Triple White'",
        description: "Kanye West famously unveiled these sneakers at the annual Powerhouse concert for LA radio station Power 106, two weeks before their official June 2015 release date. The shoes immediately sold out in pre-orders. Dressed in all white except for the black outsole and metallic Ultra Boost lettering on the heel cup, this is one of the cleanest and most coveted Ultra Boost colorways ever released.",
        release_date: "2015-06-01",
        sku: "S77416",
        brand: "Adidas",
        colorway: "Footwear White/Footwear White/Silver Metallic",
        silhouette: "Ultra Boost",
        category: "Running"
    },
    {
        name: "UltraBoost 1.0 Retro 'Cream' 2018",
        description: "The UltraBoost 1.0 Retro ‘Cream’ released in November 2018 as part of adidas’ Legacy pack, featuring a trio of OG Ultra Boost colorways from 2015. This pair features a breathable Primeknit upper in the original weave, finished in a refined Off-White shade. Structural support comes courtesy of a molded TPU cage and external heel counter, while a full-length Boost midsole delivers cushioning.",
        release_date: "2018-11-21",
        sku: "BB7802",
        brand: "Adidas",
        colorway: "Talc/Chalk White/Core Black",
        silhouette: "Ultra Boost",
        category: "Running"
    },
    {
        name: "UltraBoost 4.0 'Core Black'",
        description: "adidas released the Ultra Boost 4.0 'Core Black' in November 2016. The fourth iteration of adidas’ performance runner takes on a solid black Primeknit upper, complemented by yet more black on the midfoot cage, heel counter and Stretchweb rubber outsole. The contrasting white Boost midsole features a grey insert on the medial side, the only element that strays from the shoe’s black-and-white theme.",
        release_date: "2017-11-16",
        sku: "BB6166",
        brand: "Adidas",
        colorway: "Core Black/White",
        silhouette: "Ultra Boost",
        category: "Running"
    },
    {
        name: "Yeezy Boost 350 'Turtle Dove'",
        description: "First seen on Kanye and his models at the Yeezy Season 1 fashion show in February 2015, the Yeezy Boost 350 ‘Turtle Dove’ was the second shoe released in the adidas Yeezy collection after the Yeezy Boost 750 ‘OG.’ Dropped on June 27, 2015, the ‘Turtle Dove’ sold out instantly online and was eventually anointed 2015’s Shoe of the Year at the Footwear News 29th Annual Achievement Awards.",
        release_date: "2015-06-27",
        sku: "AQ4832",
        brand: "Adidas",
        colorway: "Turtle Dove/Blue Gray/Core White",
        silhouette: "Yeezy Boost 350",
        category: "Lifestyle"
    },
    {
        name: "Yeezy Boost 350 V2 'Sesame'",
        description: "The Yeezy Boost 350 V2 ‘Sesame’ features a refined color palette that complements the shoe’s minimalist build. The breathable Primeknit upper keeps the heel tab and distinct center stitch detailing but loses the mirrored ‘SPLY-350’ branding. Underneath, a semi-translucent rubber midsole houses a full-length Boost cushioning, while a gum rubber outsole delivers enhanced traction.",
        release_date: "2018-11-23",
        sku: "F99710",
        brand: "Adidas",
        colorway: "Sesame/Sesame/Sesame",
        silhouette: "Yeezy Boost 350",
        category: "Lifestyle"
    },
    {
        name: "Yeezy Boost 350 V2 'Zebra'",
        description: "Released on February 25, 2017, the Yeezy Boost 350 V2 ‘Zebra’ combines a white/core black Primeknit upper with red SPLY 350 branding and a translucent white midsole housing full-length Boost. Sold exclusively at adidas.com, Yeezy Supply, and select adidas flagship stores, the ‘Zebra’ sold out instantly but was restocked on June 24th, 2017. Another restock of the ‘Zebra’ arrived November 16, 2018, with more pairs hitting the marketplace and delivering on Kanye’s promise of Yeezy’s being more accessible to anyone that wanted them.",
        release_date: "2017-02-25",
        sku: "CP9654",
        brand: "Adidas",
        colorway: "White/Core Black/Red",
        silhouette: "Yeezy Boost 350",
        category: "Lifestyle"
    },
    {
        name: "ZX 4000 Futurecraft 4D 'Black Onix'",
        description: "A fresh remake of the retro ZX series, the ZX 4000 Futurecraft 4D 'Black Onix' sneaker plays with the collection’s heritage design and infuses it with futuristic style and technology. Released in May 2019, the runner sports an adaptive Primeknit upper, accented with deconstructed suede overlays. The focal point of the shoe is its digitally printed 4D sole, equipped with oxygen and liquid resin for premium energy-returning capabilities.",
        release_date: "2019-05-25",
        sku: "BD7931",
        brand: "Adidas",
        colorway: "Core Black/Onix/Cloud White",
        silhouette: "ZX 4000",
        category: "Lifestyle"
    },
    {
        name: "ZX 4000 Futurecraft 4D 'Carbon'",
        description: "First seen in 1984, the adidas ZX 4000 Futurecraft 4D evolves the retro elements of the archival series into an innovative design infused with precision tech. This 'Carbon' update—issued in April 2019—recodes the original's DNA in a Primeknit upper embroidered with reinforcing rear and forefoot panels. A synthetic heel piece structures the counter. The revolutionary 4D midsole serves as the distinguishing feature, offering controlled stability and responsiveness atop a rubber outsole.",
        release_date: "2019-04-06",
        sku: "BD7865",
        brand: "Adidas",
        colorway: "Carbon/Carbon/Semi Solar Yellow",
        silhouette: "ZX 4000",
        category: "Lifestyle"
    },
    {
        name: "Futurecraft 4D 'Ash Green'",
        description: "This launch colorway for the adidas Futurecraft 4D features an Ash Green Futurecraft midsole created by Digital Light Synthesis technology. It also comes with a black Primeknit upper, grey 3-Stripes branding, and a black Continental rubber outsole. Launched in January 2018, the revolutionary silhouette was initially an exclusive for NYC consortium retailers KITH, Packer Shoes, and Sneakernstuff. It also re-stocked in limited quantities in February 2018 via the adidas app and adidas’ NYC flagship store.",
        release_date: "2018-01-18",
        sku: "B75942",
        brand: "Adidas",
        colorway: "Core Black/Grey Five/Ash Green",
        silhouette: "Futurecraft 4D",
        category: "Lifestyle"
    }

]

jordan1s.each { |sneaker| Sneaker.create!(sneaker) } 
jordan3s.each { |sneaker| Sneaker.create!(sneaker) }
dunklow.each { |sneaker| Sneaker.create!(sneaker) }
adidas.each { |sneaker| Sneaker.create!(sneaker) }

shoe_sizes = [ 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0 ] 

Sneaker.all.each do |sneaker|

    sku_1 = sneaker[:sku].split(" ").join("") + "a"
    sku_2 = sneaker[:sku].split(" ").join("") + "b"

    file = open("https://jphan-doap-dev.s3-us-west-1.amazonaws.com/#{sku_1}.jpg")
    sneaker.photo.attach(
        io: file,
        filename: "#{sku_1}.jpg")

    file = open("https://jphan-doap-dev.s3-us-west-1.amazonaws.com/#{sku_2}.jpg")
    sneaker.photo.attach(
        io: file,
        filename: "#{sku_2}.jpg")

    shoe_sizes.each do |size|
        Listing.create!(sneaker_id: sneaker.id, size: size, price: rand(99...500))
    end
end



