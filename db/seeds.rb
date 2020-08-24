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
        description: "This Nike Air Jordan 1 Retro High OG 'Shadow' 2018 is a retro re-release of an original 1985 colorway. The shoe features a black and medium grey leather upper with a white midsole and black outsole. It also features OG Nike Air branding on the tongue and the Wings logo on the ankle collar. It was last retroed in 2013, and a low-top version dropped in 2015.",
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
    }
    # {
    #     name: "Air Jordan 1 Retro High OG 'Black Toe' 2016",
    #     description: "One of the original colorways of the Air Jordan 1 line, the Air Jordan 1 Retro BG 'Black Toe' grew in popularity after being featured in several Nike promotional campaigns (including the photo that inspired the Jordan logo itself). Surprisingly though, Jordan only wore this colorway in a handful of games, thereby increasing its popularity. Retroed in 2013, the 2016 release returns to the original 1985 branding with the Nike Air logo on the tongue and the absence of the Jumpman logo on the heel.",
    #     release_date: "2016-11-04",
    #     sku: "555088 125",
    #     brand: "Air Jordan",
    #     colorway: "Black/White-Varsity Red",
    #     silhouette: "Air Jordan 1",
    #     category: "Lifestyle"
    #     # nickname: "Black Toe"
    # }
#     ,
#     {
#         name: "Air Jordan 1 Retro High OG  NRG 'Homage to Home'",
#         description: "To honor Chicago, Jordan released a brand new version of the Air Jordan 1. The Air Jordan 1 Retro High OG NRG 'Homage to Home' features a classic Chicago Bulls color scheme, with a leather upper split between black and red. Early versions from the initial Chicago-only release are numbered and include ‘FROM’ and ‘FOR’ lettering on the heels.",
#         release_date: "2018-05-18",
#         sku: "861428 061",
#         brand: "Air Jordan",
#         colorway: "Black/White-University Red",
#         silhouette: "Air Jordan 1",
#         category: "Lifestyle"
#         # nickname: "Homage To Home"
#     },
#     {
#         name: "Air Jordan 1 Retro High OG 'Rookie of the Year'",
#         description: "In 1985, Michael Jordan received the NBA’s Rookie of the Year Award after launching his career with a remarkable point per game average and a thirst for success. To celebrate, Jordan Brand released the Air Jordan 1 Retro High OG 'Rookie of the Year.' The high top features a white-based leather upper with perforations on the toe box for breathability and Gold Harvest leather overlays on the mudguard, ankle, eyestay, and heel. Hidden on the inside of each strap on the upper are callouts to MJ’s outstanding rookie season. ‘1984-85 R.O.Y. 2313 POINTS 28.2 PPG’ can be found on the inside of one strap, and a quote from Jordan can be found on the other.",
#         release_date: "2018-11-17",
#         sku: "555088 700",
#         brand: "Air Jordan",
#         colorway: "Gold Harvest/Black-Sail",
#         silhouette: "Air Jordan 1",
#         category: "Lifestyle"
#         # nickname: "Rookie of the Year"
#     },
#     {
#         name: "Air Jordan 1 Retro High OG 'Game Royal'",
#         description: "With color blocking that mirrors the original “Chicago”, the Air Jordan 1 Retro High introduces another addition to the AJ1 family: ‘Game Royal’ blue. A little jarring at first, the Game Royal settles in nicely with the original 1985 color block with a new updated shade of blue. The Wings logo and Swoosh are punctuated in black, with the Summit White on the side panel and toebox.",
#         release_date: "2018-03-23",
#         sku: "555088 403",
#         brand: "Air Jordan",
#         colorway: "Game Royal/Summit White-Black",
#         silhouette: "Air Jordan 1",
#         category: "Lifestyle"
#         # nickname: "Game Royal"
#     },
#     {
#         name: "Fragment Design x Air Jordan 1 Retro High OG",
#         description: "The Nike Fragment Design x Air Jordan 1 Retro High OG is the first collaboration between Hiroshi Fujiwara's Fragment Design and Brand Jordan. One of the most coveted Air Jordan 1 colorways ever created, the design combines the OG black-toe color blocking with royal blue accents. Released in limited quantities in December 2014, the design also includes Nike Air branding on the tongue and a Fragment Design logo at the heel.",
#         release_date: "2014-12-27",
#         sku: "716371 040",
#         brand: "Air Jordan",
#         colorway: "Black/Sport Royal-White",
#         silhouette: "Air Jordan 1",
#         category: "Lifestyle"
#         # nickname: "Fragment"
#     },
#     {
#         name: "Air Jordan 1 Retro High OG 'Barons",
#         description: "The Nike Air Jordan 1 Retro High OG 'Barons' is inspired by Michael Jordan's brief minor league baseball career with the Birmingham Barons before returning to the NBA to win three more championship titles. The design features a white, black, and grey leather upper with 'Nike Air' branding on the tongue. Released in April 2014, the design also features a black and grey pinstriped inner lining.",
#         release_date: "2014-04-04",
#         sku: "555088 104",
#         brand: "Air Jordan",
#         colorway: "White/Black-Wolf Grey",
#         silhouette: "Air Jordan 1",
#         category: "Lifestyle"
#         # nickname: "Barons"
#     },
#     {
#         name: "Air Jordan 1 Retro High OG 'Shattered Backboards",
#         description: "In 1985 on a Nike Europe tour, Michael Jordan shattered a backboard when throwing down a monstrous dunk while wearing an orange, black, and white uniform. Commemorating the moment and uniform, this 2015 Air Jordan 1 'Shattered Backboard' (aka 'Shattered Backboard' 1.0) sneaker was released. Shortly after in the Fall of 2016, an Air Jordan 1 'Shattered Backboard Away' (aka 'Reverse' and 'Shattered Backboard 2.0') was released. The sneaker keeps the black laces and Nike branding, but swaps out the orange toe box and black around the toe and tongue for white.",
#         release_date: "2015-06-26",
#         sku: "555088 005",
#         brand: "Air Jordan",
#         colorway: "Black/Starfish-Sail",
#         silhouette: "Air Jordan 1",
#         category: "Lifestyle"
#         # nickname: "Shattered Backboard"
#     },
#     {
#         name: "Air Jordan 1 Retro High OG 'Shattered Backboards Away",
#         description: "In 1985 on a Nike Europe tour, Michael Jordan shattered a backboard when throwing down a monstrous dunk while wearing an orange, black, and white uniform. Commemorating the moment and uniform, a 2015 Air Jordan 1 'Shattered Backboard' (aka 'Shattered Backboard' 1.0) sneaker was released. Shortly after in the Fall of 2016, an Air Jordan 1 'Shattered Backboard Away' (aka 'Reverse' and 'Shattered Backboard 2.0') was released. This sneaker keeps the black laces and Nike branding, but swaps out the orange toe box and black around the toe and tongue for white.",
#         release_date: "2015-10-08",
#         sku: "555088 113",
#         brand: "Air Jordan",
#         colorway: "Sail/Black-Starfish",
#         silhouette: "Air Jordan 1",
#         category: "Lifestyle"
#         # nickname: "Shattered Backboard"
#     },
#     {
#         name: "Air Jordan 1 Retro High OG Flyknit 'Royal'",
#         description: "The Nike Air Jordan 1 Retro High OG Flyknit 'Royal' features an updated black and royal blue Flyknit upper with a white midsole, royal blue outsole, and Nike Air branding on the tongue. Released in October 2017, the colorway was also retro'd with a more traditional tumbled leather upper in April 2017.",        
#         release_date: "2017-10-06",
#         sku: "919704 006",
#         brand: "Air Jordan",
#         colorway: "Black/Game Royal-White",
#         silhouette: "Air Jordan 1",
#         category: "Lifestyle"
#         # nickname: "Royal"
#     },    
#     {
#         name: "Air Jordan 1 Retro High OG Flyknit 'Bred'",
#         description: "The Nike Air Jordan 1 Retro High OG Flyknit 'Bred' features an updated black and Varsity Red Flyknit upper with a white midsole and Varsity Red outsole. Released in September 2017, the sneaker also features Nike Air branding on the tongue and a Wings logo at the ankle collar.",
#         release_date: "2017-09-08",
#         sku: "919704 001",
#         brand: "Air Jordan",
#         colorway: "Black/Varsity Red-White",
#         silhouette: "Air Jordan 1",
#         category: "Lifestyle"
#         # nickname: "Bred"
#     },    
#    {
#         name: "Air Jordan 1 Retro High OG Flyknit 'Shadow'",
#         description: "The OG Air Jordan 1 Shadow silhouette first hit the shelves in 1985 with a leather construction. Jordan Brand has updated the classic model with a Flyknit treatment. The Air Jordan 1 Retro High OG Flyknit 'Shadow' boasts a Flyknit upper with the traditional black and Medium Grey color scheme. The high top also sports leather touches on the Swoosh, Wings logo on the ankle, and on the inner tongue to pay homage to its predecessor.",
#         release_date: "2018-01-13",
#         sku: "919704 003",
#         brand: "Air Jordan",
#         colorway: "Black/Medium Grey-White",
#         silhouette: "Air Jordan 1",
#         category: "Lifestyle"
#         # nickname: "Shadow"
#     }
# ]

# jordan3s = [
#     {
#         name: "Air Jordan 3 Retro OG 'Black Cement' 2018",
#         description: "The Air Jordan 3 was the first of many for Michael Jordan and Tinker Hatfield. It was the first time they would work together on the signature shoe, it was the first time the elephant print made an appearance on a shoe, and it was the first time the “Jumpman” logo adorned the tongue with the classic “NIKE AIR” stamped on the heel. The Black/Cement Air Jordan 3 Retro OG comes back in its original form. Featuring black tumbled and smooth leather uppers and all the distinct details we remember thirty years later.",
#         release_date: "2018-02-17",
#         sku: "854262 001",
#         brand: "Air Jordan",
#         colorway: "Black/Cement Grey-White-Fire Red",
#         silhouette: "Air Jordan 3",
#         category: "Lifestyle"
#         # nickname: "Black Cement"
#     },
#     {
#         name: "Air Jordan 3 Retro OG 'True Blue' 2016",
#         description: "The Air Jordan 3 Retro OG ‘True Blue’ was released as one of the four OG colorways in 1988. It saw several non-OG retro releases, starting in 2001, in 2009 (Europe only), and again in 2011 as part of a wide Air Jordan 3 retro release that commemorated the 23rd anniversary of the shoe. The 2016 retro saw the ‘True Blue’ return again, but this time with the original branding and logo details that mimic the 1988 release.",
#         release_date: "2016-11-25",
#         sku: "854262 106",
#         brand: "Air Jordan",
#         colorway: "White/True Blue",
#         silhouette: "Air Jordan 3",
#         category: "Lifestyle"
#         # nickname: "True Blue"
#     },
#     {
#         name: "Air Jordan 3 Retro OG 'White Cement' 2011",
#         description: "The Air Jordan 3 marked the debut of Brand Jordan's visible Air cushioning, elephant print, and the Jumpman logo. Falling in line with the 2003 retros, this 2011 iteration features a Jumpman logo in place of the 1988 OG Nike Air branding at the heel and tongue. Nike Air branding wouldn't return to the Air Jordan 3 until 2013 with a release appropriately named 'Air Jordan 3 Retro '88.'",
#         release_date: "2011-01-22",
#         sku: "136064 105",
#         brand: "Air Jordan",
#         colorway: "White/Fire Red-Cement Grey-Blk",
#         silhouette: "Air Jordan 3",
#         category: "Lifestyle"
#         # nickname: "White Cement"
#     },
#     {
#         name: "Air Jordan 3 Retro JTH NRG 'Bio Beige'",
#         description: "Fresh off his summer 2018 tour, the Air Jordan 3 gets the Justin Timberlake treatment with a ‘Bio Beige’ version. It sports a tan soft suede upper, blacked-out elephant print overlays, and Nike Air logos at the heels. Aggressive text accents include phrases like “HIGHER” on the ankle as well as “FAME IS A LIE” and “STRESS IS CRUEL” on the insoles.",
#         release_date: "2018-08-28",
#         sku: "AV6683 200",
#         brand: "Air Jordan",
#         colorway: "Bio Beige/Opti Yellow-Bio Beige",
#         silhouette: "Air Jordan 3",
#         category: "Lifestyle"
#         # nickname: "Bio Beige"
#     },
#     {
#         name: "Air Jordan 3 Retro 'Fear Pack'",
#         description: "Inspired by Jordan Brand’s 2008 “Be Legendary” marketing campaign, this Air Jordan 3 Retro 'Fear Pack' colorway features a Night Stadium leather upper with Total Orange accents. The sneaker also comes with elephant print overlays, a speckled black and white midsole, and a black outsole. Released in August 2013, the ‘Fear Pack’ also included new colorways for the Jordan 4 and Jordan 5 silhouettes.",
#         release_date: "2013-08-24",
#         sku: "626967 040",
#         brand: "Air Jordan",
#         colorway: "Nght Stdm/Ttl Orng Blck-Ntrl G",
#         silhouette: "Air Jordan 3",
#         category: "Lifestyle"
#         # nickname: "Fear Pack"
#     },
#     {
#         name: "Air Jordan 3 Retro 'Mocha' 2018",
#         description: "The Air Jordan 3 Retro ‘Mocha’ 2018 brings back the distinctive colorway first released in 2001. The mid-top keeps the original build intact, featuring a white tumbled leather upper accented with contrasting pops of Dark Mocha on the shoe’s signature elephant-print overlays. The brown hue also appears on the outsole and Jumpman logo hits that adorn the tongue and heel panel.",
#         release_date: "2018-12-15",
#         sku: "136064 122",
#         brand: "Air Jordan",
#         colorway: "White/Chrome-Dark Mocha",
#         silhouette: "Air Jordan 3",
#         category: "Lifestyle"
#         # nickname: "Mocha"
#     },
#     {
#         name: "Air Jordan 3 Retro 'Kobe Byrant' PE",
#         description: "Kobe Bryant was a free agent during the 2002-2003 NBA season and didn’t have commitments with any sneaker brand. During this time, Jordan Brand gifted Kobe with exclusive designs, including the Air Jordan 3 Retro 'Kobe Bryant' PE. The sneaker boasts iconic elephant print elements, as well as a Home White leather upper and Lakers-inspired gold and purple details on the heel, eyelets, Jumpman logo, and lining. Part of the Kobe Jordan pack, alongside an Air Jordan 8 Retro PE, these were never released to the public and only gifted to friends and family.",
#         release_date: "2018-12-15",
#         sku: "136064 107",
#         brand: "Air Jordan",
#         colorway: "Multi-Color/Multi-Color",
#         silhouette: "Air Jordan 3",
#         category: "Lifestyle"
#         # nickname: "Kobe 3"
#     },
#     {
#         name: "Air Jordan 3 Retro NRG 'Free Throw Line' ",
#         description: "In celebration of Michael Jordan’s iconic launch from the free throw line thirty years ago during the 1988 Slam Dunk Contest, Jordan Brand released the Air Jordan 3 Retro NRG 'Free Throw Line.' The sneaker comes dressed in white with Cement Grey accents on the toe box and heel and Fire Red detailing on the eyelets and on the tongue. The model also boasts a translucent sole with a red stripe, exactly where MJ took off from the line. Other details include '3:51' lettering on the back pull tab to remember the time Jordan took flight, and '147' on the tongue as a nod to his final score.",
#         release_date: "2018-02-14",
#         sku: "923096 101",
#         brand: "Air Jordan",
#         colorway: "White/Fire Red-Cement Grey-Black",
#         silhouette: "Air Jordan 3",
#         category: "Lifestyle"
#         # nickname: "Free Throw Line, ASG"
#     }

]

jordan1s.each { |sneaker| Sneaker.create!(sneaker) }
Sneaker.all.each do |sneaker|
    sku_1 = sneaker[:sku].split(" ").join("") + "a"
    # sku_2 = sneaker.sku.join(" ") + "b"
    file = open("https://jphan-doap-dev.s3-us-west-1.amazonaws.com/jordan1s/#{sku_1}.jpg")
    sneaker.photo.attach(
        io: file,
        filename: "#{sku_1}.jpg")
end

# jordan3s.each { |sneaker| Sneaker.create!(sneaker) }

