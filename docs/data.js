 const data = [
  {
    "id": 1,
    "title": "Pizza de queso",
    "category": "platillo",
    "price": 160,
    "img": "https://res.cloudinary.com/dk1qy4pny/image/upload/v1695569239/foods/lzlzxcoe9lduyk7ttckt.jpg",
    "desc": "Deliciosa pizza de queso que combina aceitunas, elote, pimientos y carnes frias"
  },
  {
    "id": 2,
    "title": "Sandwich de Queso Derretido",
    "category": "platillo",
    "price": 140,
    "img": "https://res.cloudinary.com/dk1qy4pny/image/upload/v1695569239/foods/vputubhyphkohfxlckdi.jpg",
    "desc": "Sandwiches con Queso Mozzarella, Gorghonzola, Fontina y Parmesano con acompañamiento y aderezos"
  },
  {
    "id": 3,
    "title": "Mousse de Chocolate",
    "category": "postre",
    "price": 80,
    "img": "https://res.cloudinary.com/dk1qy4pny/image/upload/v1695569239/foods/helcv8nvhxzhnjtzx09w.jpg",
    "desc": "Frio Mousse de Chocolate con trozos de chocolate rayado, crema batida y toque de Nutella"
  },
  {
    "id": 4,
    "title": "Postre de Frutos Rojos",
    "category": "postre",
    "price": 110,
    "img": "https://res.cloudinary.com/dk1qy4pny/image/upload/v1695569238/foods/ou7tteexdlpdyozrgcql.jpg",
    "desc": "Mezcla de frutos rojos, yogur, quinoa, gelatina de fresa y pastel de fresa"
  },
  {
    "id": 5,
    "title": "Limonada de Moras",
    "category": "bebida",
    "price": 100,
    "img": "https://res.cloudinary.com/dk1qy4pny/image/upload/v1695569238/foods/iqbmil1lmdvk9q6ftvco.jpg",
    "desc": "Limonada que mezcla frutos rojos y moras azules"
  },
  {
    "id": 6,
    "title": "Galletas de Chocolate",
    "category": "postre",
    "price": 50,
    "img": "https://res.cloudinary.com/dk1qy4pny/image/upload/v1695569238/foods/lubgtvg0kghlsrnwjp3t.jpg",
    "desc": "Delicioso postre con galletas de trigo, relleno de mantequilla de mani y bañado de chocolate"    
  },
  {
    "id": 7,
    "title": "Mojito",
    "category": "bebida",
    "price": 80,
    "img": "https://res.cloudinary.com/dk1qy4pny/image/upload/v1695569238/foods/cyjcfa6lmq6nx40xctuq.jpg",
    "desc": "Frio Mojito con, limón, azúcar, menta, eucalipto y agua mineral con gas"    
  },
  {
    "id": 8,
    "title": "Mac'n'Cheese",
    "category": "platillo",
    "price": 80,
    "img": "https://res.cloudinary.com/dk1qy4pny/image/upload/v1695569238/foods/olgacrbi63wh5zw6dii1.webp",
    "desc": "Macarrones con salsa de queso cheddar"
  },
  {
    "id": 9,
    "title": "Hamburguesa De Arrachera XL",
    "category": "platillo",
    "price": 190,
    "img": "https://res.cloudinary.com/dk1qy4pny/image/upload/v1695569238/foods/nka7egd777vczc7sq2t4.jpg",
    "desc": "Hamburguesa de Arrachera 300gr de la casa con verdura y acompañamiento de papas y aderezo"
  },
  {
    "id": 10,
    "title": "Variedad de Donas",
    "category": "postre",
    "price": 30,
    "img": "https://res.cloudinary.com/dk1qy4pny/image/upload/v1695569237/foods/czpqi6sgoepedcpo5bs6.jpg",
    "desc": "Donas de Fresa, Chocolate, Chocolate Blanco, chispas de chocolate, nuez, granola"
  },
  {
    "id": 11,
    "title": "Chorizo con Mozzarella",
    "category": "platillo",
    "price": 150,
    "img": "https://res.cloudinary.com/dk1qy4pny/image/upload/v1695569237/foods/xwckoscrfqsoxlciqbdw.jpg",
    "desc": "Chorizo Argentino con Mozarella fundida y pimentada con chile molido, pimienta y nueces tostadas"
  },
  {
    "id": 12,
    "title": "Cerveza Casera",
    "category": "bebida",
    "price": 50,
    "img": "https://res.cloudinary.com/dk1qy4pny/image/upload/v1695569237/foods/sf2xxh7vjhldhylzqxmu.jpg",
    "desc": "Cerveza fría de la caza servida en jarra fria (500ml)"
  },
  {
    "id": 13,
    "title": "Pastel de Fresas con Crema",
    "category": "postre",
    "price": 60,
    "img": "https://res.cloudinary.com/dk1qy4pny/image/upload/v1695569237/foods/cjavrs8smyrqjppyhlb0.jpg",
    "desc": "Pastel de fresa y crema chantilly, pastel servido en una copa grande"
  },
  {
    "id": 14,
    "title": "Cordero Asado",
    "category": "platillo",
    "price": 210,
    "img": "https://res.cloudinary.com/dk1qy4pny/image/upload/v1695569237/foods/vuulgkfx2dyatud4nq0x.jpg",
    "desc": "Cordero Asado (250gr) con ensalada y papas francesas"
  },
  {
    "id": 15,
    "title": "Pastelitos de Chocolate",
    "category": "postre",
    "price": 105,
    "img": "https://res.cloudinary.com/dk1qy4pny/image/upload/v1695569237/foods/wnmbhp2nhcxnnz87mirz.jpg",
    "desc": "Pastelitos de chocolate con cubierta crujiente y relleno de caramelo"
  }
]

export default data; 

/* const animeCatalog = 
[
  {
    id:1,
    name:"Astro Boy",
    series:"Astro Boy",
    desc:"In the original story, Astro was created by Dr. Tenma to replace his own son, who had died in a car accident. Out of that grief was borne the bright-eyed robot boy named Astro, who then became destined to use his X-ray vision, rocket-booster feet, and 100,000-horsepower arms to protect humanity from itself.",
    image:"https://res.cloudinary.com/dk1qy4pny/image/upload/v1695918505/animes/dkwl81umjjjo17dpb5t8.jpg"
  },
  {
    id:2,
    name:"Light Yagami",
    series: "Death Note",
    desc:"Diabolical, calculating, and determined to remake the world in his own image, Light Yagami was the force that drove Death Note and made it a phenomenon. The manga was incredibly addictive; it was absolute can't-put-it-down material (largely due to author Tsugumi Ohba's masterful use of cliffhangers).",
    image:"https://res.cloudinary.com/dk1qy4pny/image/upload/v1695918505/animes/lyz9fti7sbitzvcznqkw.jpg"
  },
  {
    id:3,
    name:"Edward Elric",
    series:"Fullmetal Alchemist",
    desc:"Wildly ambitious, wickedly smart, and wise beyond his years, the precocious Edward Elric entered the stage with a fresh take on the modern shonen anime hero. Unlike those who came before him, he wasn't the lovable but dim-witted guy with a heart of gold. He was smart, calculating, arrogant, and shrimp-sized. But most daring of all was the fact that Edward is technically disabled, having had both an arm and a leg lost in a tragic accident fueled by love and hubris.",
    image:"https://res.cloudinary.com/dk1qy4pny/image/upload/v1695918505/animes/qhf3ps1im4rekmnjs3xc.jpg"
  },
  {    
    id:4,
    name:"Gon Freecss",
    series:"Hunter x Hunter",
    desc:"Father figures loom large over some of our favorite anime characters, and none more so than Gon. The young boy's life has been defined by the absence of his father, Ging, and it inspires his quest to become a hunter, and sends him on an epic quest when he realizes his 'dead' father is actually alive. Raised in the forest by his aunt, Gon is closely attuned to nature and animals, making him a skilled hunter. But despite these skills, he's still just a kid who can be impatient, impetuous, and ill-tempered. ",
    image:"https://res.cloudinary.com/dk1qy4pny/image/upload/v1695918505/animes/egi2ibu7tfrangse9dmf.jpg" 
  },
  {
    id:5,
    name:"Tanjiro",
    series:"Demon Slayer",
    desc:"Like many of the most impactful heroes, Tanjiro's story begins with a great tragedy. As a young boy, his life was destroyed when the King of Demons killed his whole family... well, almost all of them. In a final slight, his sister was turned into a half-demon. It was then that he vowed to become a Demon Slayer, cure his sibling, and defeat the Demon King.",
    image:"https://res.cloudinary.com/dk1qy4pny/image/upload/v1695918505/animes/orqm8xeiultmgpslrnpw.jpg"
  },
  {
    id:6,
    name:"Motoko Kusanagi",
    series:"Ghost in the Shell",
    desc:"Major Motoko Kusanagi is the driving force behind the Ghost in the Shell franchise. The story often descends into long dialogue full of political drama, but Motoko keeps things interesting. She's not just a participant in all the political intrigue, she's a master of it, proving that she's more than a pretty face behind a gun. She's also a very capable detective, often going solo to root out the truth behind the cases she's working. And she does it all while surrounded by a male-centric supporting cast. Motoko was a stunning example of a strong female character.",
    image:"https://res.cloudinary.com/dk1qy4pny/image/upload/v1695918505/animes/g9lc5kfiqdjmrfufps2y.jpg"
  },
  {
    id:7,
    name:"Levi Ackerman",
    series:"Attack on Titan",
    desc:"Though he's seen by those within the walled world of Attack on Titan as a hero, Levi Ackerman's brutality isn't only directed at the giant monsters that he hunts. It makes sense that he's a complex character as he was modeled on one of pop culture's most infamous – and violent – anti-heroes: Rorschach from Watchmen. A strategic superpower, Levi is one of the smartest and most clinical thinkers in anime history.",
    image:"https://res.cloudinary.com/dk1qy4pny/image/upload/v1695918505/animes/z6sgr1yviqylz0jgyxni.jpg"
  },
  {
    id:8,
    name:"Jotaro",
    series:"JoJo's Bizarre Adventure: Stardust Crusader",
    desc:"The impact of Jojo's Bizarre Adventure can't be understated, and that's why more than one of the cast has made it onto our list. Jotaro Koju is a particularly notable addition to the fantastic series by Hirohiko Araki, as he is the first of the heroic family line to be introduced with a Stand. The superpowers (which are visual manifestations of a wielder's soul) would go on to play an important part in the greater lore of JoJo's Bizarre Adventure, and Jotaro Kujo's Star Platinum Stand helped to make him a vital character.",
    image:"https://res.cloudinary.com/dk1qy4pny/image/upload/v1695918504/animes/kt71t58axv9tppj9iqvo.jpg"
  },
  {
    id:9,
    name:"Guts",
    series:"Berserk",
    desc:"The horror/fantasy/action anime Berserk was set in a cruel fantasy world so horrible it makes the Game of Thrones setting look like a child's playground. A brutal place needed an equally brutal hero, and that man was Guts. Born from a corpse that was left hanging from a tree, his life didn't get any easier from there. Guts goes through so many trials and tribulations it's hard to keep track.",
    image:"https://res.cloudinary.com/dk1qy4pny/image/upload/v1695918504/animes/bjpysdolektsal0qdit3.jpg"
  },
  {
    id:10,
    name:"Spike Spiegel",
    series:"Cowboy Bebop",
    desc:"Combine Bruce Lee's martial arts, a little Lupin III, a heavy dose of film noir, and a dash of cool, and you've got Spike Spiegel. Spike was an amalgamation of influences, and the result was a creation greater than the sum of its parts. In a series like Cowboy Bebop, which was itself a combination of cultural influences from around the globe, Spike was the essence of the story. Voice actor Steve Blum sent his career to new heights when he gave the performance of a lifetime in the English dub of the series, giving Spike a sense of smooth, effortless cool that many argue surpassed the original Japanese version.",
    image:"https://res.cloudinary.com/dk1qy4pny/image/upload/v1695918504/animes/qqf97b7qywxt7vsarwle.png"
  },
  {
    id:11,
    name:"Naruto Uzumaki",
    series:"Naruto",
    desc:"f you're of a certain generation, Naruto was synonymous with anime. Massively popular and so influential that it even inspired its own run, the story of the titular young ninja desperate to gain the acceptance and support of his community has been a fan fave for years. And it's really because of Naruto himself. The spirited, ramen-loving orphan is one of anime's most recognizable and highly thought of figures. Though he started his journey – like many of us – as a beginner who struggled to find his footing, thanks to his dedication he became a powerful ninja.",
    image:"https://res.cloudinary.com/dk1qy4pny/image/upload/v1695918504/animes/k7y67bsn6jskogp6fyin.png"
  },
  {
    id:12,
    name:"Sailor Moon",
    series:"Usagi",
    desc:"For many American kids, Sailor Moon was one of the first anime characters they met, and her impact has never lessened. It might be the combination of her unforgettable catchphrase 'In the name of the Moon, I'll punish you!' and her delightfully recognizable costume, but Sailor Moon (or Usagi, in her non-magical form) has become one of the most beloved anime characters of all time.",
    image:"https://res.cloudinary.com/dk1qy4pny/image/upload/v1695918504/animes/vqypnl4wcqen6trznbg1.jpg"
  },
  {
    id:13,
    name:"Goku",
    series:"Dragon Ball",
    desc:"Arguably the archetype of modern shonen anime lead characters, Goku was somewhat of an innovative creation back in his day. When the plucky, pint-sized kid Goku first appeared in Dragon Ball, the trend for male heroes was to have larger than life muscle heads (which Goku ironically turned into in his adulthood). Speaking of which, Goku actually grew up, which was another drastic change in a time when characters rarely changed much.",
    image:"https://res.cloudinary.com/dk1qy4pny/image/upload/v1695918504/animes/rargnpb5g8webrm40wy7.jpg"
  },
  {
    id:14,
    name:"Monkey D. Luffy",
    series:"One Piece",
    desc:"In 2022, One Piece became the best-selling manga of all time. So it's no surprise that the lead character of such an influential title and its massively successful anime adaptation tops our list. Many 2000s kids discovered One Piece – and Luffy – thanks to the series’ inclusion in the FoxBox programming block, introducing a generation to the joys of anime. With his instantly recognizable straw hat, blue pants, and red jacket, the young leader of the Straw Hat Pirates is a powerful fighter and comes from a line of revolutionaries.",
    image:"https://res.cloudinary.com/dk1qy4pny/image/upload/v1695918504/animes/zp6g7e8emy6bduwag7ln.jpg"
  },
  
]

export default animeCatalog; */