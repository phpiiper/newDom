var editions = [
    {name: "Standard", color: "56,227,255"},
    {name: "Guilds", color: "255,232,43"},
    {name: "Adventures", color: "255,166,94"},
    {name: "Dark Ages", color: "116,82,255"}
]


var fontList = [
    "Chakra Petch",
    "Noto Sans",
    "Calibri",
    "Times New Roman",
    "Roboto",
    "Montserrat",
    "Lato",
    "Fantasy"
]

var themes = [
    {name: "Default", // name shown
        colors: ["var(--c1)","var(--c2)"], // [font color, bg]
        id: ""},
    {name: "Dark Mode",
        colors: ["225,225,225","0,0,0"],
        id: "assets/Themes/darkMode.css"},
    {name: "Light Mode",
        colors: ["20,20,20","255,255,255"],
        id: "assets/Themes/lightMode.css"}
]

var decks = [ /*
    {name: "Deck 1", desc: "A_description_that_should overflow if I do this correctly", colors: ["green","rgba(102,23,43)"],
    cards: [
        ["Adventurer","Standard"],
        ["Bureaucrat","Standard"],
        ["Cellar","Standard"],
        ["Chancellor","Standard"]
    ]} */
]

var cards = [
/*
    {name: "nameofcard", cost: 0, type: "Action", edition: "Standard", src: "assets/Cards/Standard/image.jpg",
    text: "longTextHere"
    },

dependencies: [{knight card obj}]       OR      special: [["Gain: Ruins"]]

 */
    {name: "Adventurer", cost: 6, type: "Action", edition: "Standard",
    text: "Reveal cards from your deck until you reveal 2 Treasure cards. Put those Treasure cards into your hand and discard the other revealed cards.", src: "assets/Cards/Standard/Adventurer.jpg"
    },
    {name: "Bureaucrat", cost: 4, type: "Action-Attack", edition: "Standard", src: "assets/Cards/Standard/Bureaucrat.jpg",
        text: "Gain a Silver card; put it on top of your deck. Each other player reveals a Victory card from his hand and puts it on his deck (or reveals a hand with no Victory cards)."
    },
    {name: "Cellar", cost: 2, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Cellar.jpg",
        text: [[1,"Action"],"Discard any number of cards. +1 Card per card discarded."]
    },
    {name: "Chancellor", cost: 3, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Chancellor.jpg",
        text: [[2,"Coin"],"You may immediately put your deck into your discard pile."]
    },
    {name: "Chapel", cost: 2, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Chapel.jpg",
        text: "Trash up to 4 cards from your hand."
    },
    {name: "Council Room", cost: 5, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Council Room.jpg",
        text: [[4,"Card"],[1,"Buy"],"Each other player draws a card."]
    },
    {name: "Feast", cost: 4, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Feast.jpg",
        text: "Trash this card. Gain a card costing up to 5 Coin."
    },
    {name: "Festival", cost: 5, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Festival.jpg",
        text: [[2,"Action"],[1,"Buy"],[2,"Coin"]]
    },
    {name: "Gardens", cost: 4, type: "Victory", edition: "Standard", src: "assets/Cards/Standard/Gardens.jpg",
        text: "Worth 1 [VP] for every 10 cards in your deck (rounded down),"
    },
    {name: "Laboratory", cost: 5, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Laboratory.jpg",
        text: [[2,"Card"],[1,"Action"]]
    },
    {name: "Library", cost: 5, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Library.jpg",
        text: "Draw until you have 7 cards in hand. You may set aside any Action cards drawn this way, as you draw them; discard the set aside cards after you finish drawing."
    },
    {name: "Market", cost: 5, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Market.jpg",
        text: [[1,"Card"],[1,"Action"],[1,"Coin"]]
    },
    {name: "Militia", cost: 4, type: "Action-Attack", edition: "Standard", src: "assets/Cards/Standard/Militia.jpg",
        text: [[2,"Coin"],"Each other players discards down to 3 cards in his hand."]
    },
    {name: "Mine", cost: 5, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Mine.jpg",
        text: "Trash a Treasure card from your hand. Gain a Treasure card costing up to 3 [Coin] more; put it into your hand."
    },
    {name: "Moat", cost: 2, type: "Action-Reaction", edition: "Standard", src: "assets/Cards/Standard/Moat.jpg",
        text: [[2,"Card"],"When another player plays an Attack card, you may reveal this from your hand. If you do, you are unaffected by that Attack."]
    },
    {name: "Moneylender", cost: 4, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Moneylender.jpg",
        text: "Trash a Copper card from your hand. IF you do, +3 Coin"
    },
    {name: "Remodel", cost: 4, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Remodel.jpg",
        text: "Trash a card from your hand. Gain a card costing up to 2 [Coin] more than the trashed card."
    },
    {name: "Smithy", cost: 4, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Smithy.jpg",
        text: [3,"Card"]
    },
    {name: "Spy", cost: 4, type: "Action-Attack", edition: "Standard", src: "assets/Cards/Standard/Spy.jpg",
        text: [[1,"Card"],[1,"Action"],"Each player (including you) reveals the top card of his deck and either discards it or puts it back, your choice."]
    },
    {name: "Thief", cost: 4, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Thief.jpg",
        text: "Each other player reveals the top 2 cards of his deck. If they revealed any Treasure cards, they trash one of them that you choose. You may gain any or all of these trashed cards. They discard the other revealed cards."
    },
    {name: "Throne Room", cost: 4, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Throne Room.jpg",
        text: "Choose an Action card in your hand. Play it twice."
    },
    {name: "Village", cost: 3, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Village.jpg",
        text: [[1,"Card"],[2,"Action"]]
    },
    {name: "Witch", cost: 5, type: "Action-Attack", edition: "Standard", src: "assets/Cards/Standard/Witch.jpg",
        text: [[2,"Card"],"Each other player gains a Curse card."]
    },
    {name: "Woodcutter", cost: 3, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Woodcutter.jpg",
        text: [[1,"Buy"],[2,"Coin"]]
    },
    {name: "Workshop", cost: 3, type: "Action", edition: "Standard", src: "assets/Cards/Standard/Workshop.jpg",
        text: "Gain a card costing up to 4 Coin"
    },
    {name: "Baker", cost: 5, type: "Action", edition: "Guilds", src: "assets/Cards/Guilds/Baker.jpg",
        text: [[1,"Card"],[1,"Action"],"Take a Coin token.","Setup: Each player takes a Coin token."]
    },
    {name: "Plaza", cost: 4, type: "Action", edition: "Guilds", src: "assets/Cards/Guilds/Plaza.jpg",
        text: [[1,"Card"],[2,"Actions"],"You may discard a Treasure card. If you do, take a Coin token."]
    },
    {name: "Doctor", cost: 3, type: "Action", edition: "Guilds", src: "assets/Cards/Guilds/Doctor.jpg",
        text: ["Name a card. Reveal the top 3 cards of your deck. Trash the matches. Put the rest back on top in any order.","When you buy this, you may overpay for it. For each 1 [Coin] you overpaid, look at the top"]
    },
    {name: "Herald", cost: 4, type: "Action", edition: "Guilds", src: "assets/Cards/Guilds/Herald.jpg",
        text: [[1,"Card"],[1,"Action"],"Reveal the top card of your deck. If it an Action, play it.","When you buy this, you may overpay for it. For each 1 [Coin] you overpaid, look through your discard pile and put a card from it on top of your deck."]
    },
    {name: "Taxman", cost: 4, type: "Action-Attack", edition: "Guilds", src: "assets/Cards/Guilds/Taxman.jpg",
        text: "You may trash a Treasure from your hand. Each other player with 5 or more cards in hand discards a copy of it (or reveals a hand without it). Gain a Treasure card costing up to 3 [Coin] more than the trashed card, putting it on top of your deck."
    },
    {name: "Advisor", cost: 4, type: "Action", edition: "Guilds", src: "assets/Cards/Guilds/Advisor.jpg",
        text: [[1,"Action"],"Reveal the top 3 cards of your deck. The player to your left chooses one of them. Discard that card. Put the other cards into your hand."]
    },
    {name: "Butcher", cost: 5, type: "Action", edition: "Guilds", src: "assets/Cards/Guilds/Butcher.jpg",
        text: "Take 2 Coin tokens. You may trash a card from your hand and then pay any number of Coin tokens. IF you did trash a card, gain a card with a cost of up to the cost of the trashed card plus the number of Coin tokens you paid."
    },
    {name: "Journeyman", cost: 5, type: "Action", edition: "Guilds", src: "assets/Cards/Guilds/Journeyman.jpg",
        text: "Name a card. Reveal cards from the top of your deck until you reveal 3 cards that are not the named card. Put those cards into your hand and discard the rest."
    },
    {name: "Soothsayer", cost: 5, type: "Action-Attack", edition: "Guilds", src: "assets/Cards/Guilds/Soothsayer.jpg",
        text: "Gain a Gold. Each other player gains a Curse. Each player who did this draws a card."
    },
    {name: "Stonemason", cost: 2, type: "Action", edition: "Guilds", src: "assets/Cards/Guilds/Stonemason.jpg",
        text: ["Trash a card from your hand. Gain 2 cards each costing less than it.","When you buy this, you may overpay for it. IF you do, gain 2 Action cards each costing the amount you overpaid."]
    },
    {name: "Masterpiece", cost: 3, type: "Treasure", edition: "Guilds", src: "assets/Cards/Guilds/Masterpiece.jpg",
        text: ["1 [Coin]","When you buy this, you may overpay for it. If you do, gain a Silver per 1 [Coin] you overpaid."]
    },
    {name: "Merchant Guild", cost: 5, type: "Action", edition: "Guilds", src: "assets/Cards/Guilds/Merchant Guild.jpg",
        text: [[1,"Buy"],[1,"Coin"],"While this in play, when you buy a card, take a Coin token."]
    },
    {name: "Candlestick Maker", cost: 2, type: "Action", edition: "Guilds", src: "assets/Cards/Guilds/Candlestick Maker.jpg",
        text: [[1,"Action"],[1,"Buy"],"Take a Coin token."]
    },
    {name: "Gear", cost: 3, type: "Action-Duration", edition: "Adventures", src: "assets/Cards/Adventures/Gear.jpg",
        text: [[2,"Card"],"Set aside up to 2 cards from your hand face down. At the start of your next turn, put them into your hand."]
    },
    {name: "Page", cost: 2, type: "Action-Traveller", edition: "Adventures", src: "assets/Cards/Adventures/Page.jpg",
        text: [[1,"Card"],[1,"Action"],"When you discard this from play, you may exchange it for a Treasure Hunter"], dependencies: [
            {name: "Treasure Hunter", type: "Action-Traveller", src: "assets/Cards/Adventures/Treasure Hunter.jpg",
            cost: 3, text: [[1,"Action"],[1,"Coin"],"Gain a Silver per card the player to your right gained in his last turn.","When you discard this from play, you may exchange it for a Warrior.","(This is not in the Supply.)"]},
            {name: "Warrior", type: "Action-Attack-Traveller", src: "assets/Cards/Adventures/Warrior.jpg", cost: 3, text: [[2,"Card"],"For each Traveller you have in play (including this), each other player discards the top card of his deck and trashes it if it costs 3 [Coin] or 4 [Coin].","When you discard this from play, you may exchange it for a Hero.","(This is not in the Supply.)"]},
            {name: "Hero", type: "Action-Traveller", src: "assets/Cards/Adventures/Hero.jpg", cost: 5, text: [[2,"Coin"],"Gain a Treasure","When you discard this from play, you may exchange it for a Champion.","(This is not in the Supply.)"]},
            {name: "Champion", type: "Action-Duration", src: "assets/Cards/Adventures/Champion.jpg", cost: 6, text: [[1,"Action"],"For the rest of the game, when another player plays an Attack, it doesn't affect you, and when you play an Action, +1 Action.","(This stays in play. This is not in the Supply.)"]}
        ]
    },
    {name: "Port", cost: 4, type: "Action", edition: "Adventures", src: "assets/Cards/Adventures/Port.jpg",
        text: [[1,"Card"],[2,"Action"],"When you buy this, gain another Port."]
    },
    {name: "Raze", cost: 2, type: "Action", edition: "Adventures", src: "assets/Cards/Adventures/Raze.jpg",
        text: [[1,"Action"],"Trash this or a card from your hand. Look at a number of cards from the top of your deck equal to the cost in [Coin] of the trashed card. Put one into your hand and discard the rest."]
    },
    {name: "Giant", cost: 5, type: "Action-Attack", edition: "Adventures", src: "assets/Cards/Adventures/Giant.jpg",
        text: "Turn your Journey token over (it starts face up). If it's face down, +1 [Coin]. If it's face up, +5 [Coin], and each other player reveals the top card of his deck, trashes it if it costs from 3 [Coin] to 6 [Coin], and otherwise discards it and gains a Curse."
    },
    {name: "Guide", cost: 3, type: "Action-Reserve", edition: "Adventures", src: "assets/Cards/Adventures/Guide.jpg",
        text: [[1,"Card"],[1,"Action"],"Put this on your Tavern.","At the start of your turn, you may call this, to discard your hand and draw 5 cards."]
    },
    {name: "Miser", cost: 4, type: "Action", edition: "Adventures", src: "assets/Cards/Adventures/Miser.jpg",
        text: ["Choose one: Put a Copper from your hand onto your Tavern mat; or +1 [Coin] per Copper on your Tavern mat."]
    },
    {name: "Relic", cost: 5, type: "Action", edition: "Adventures", src: "assets/Cards/Adventures/Relic.jpg",
        text: ["2 [Coin]","When you play this, each other player puts his -1 Card token on his deck."]
    },
    {name: "Amulet", cost: 3, type: "Action-Duration", edition: "Adventures", src: "assets/Cards/Adventures/Amulet.jpg",
        text: "Now and at the start of your next turn, choose one: +1 [Coin]; or trash a card from your hand; or gain a Silver."
    },
    {name: "Magpie", cost: 4, type: "Action", edition: "Adventures", src: "assets/Cards/Adventures/Magpie.jpg",
        text: [[1,"Card"],[1,"Action"],"Reveal the top card of your deck. If it's a Treasure, put it into your hand. If it's an Action or Victory card, gain a Magpie."]
    },
    {name: "Ranger", cost: 4, type: "Action", edition: "Adventures", src: "assets/Cards/Adventures/Ranger.jpg",
        text: [[1,"Buy"],"Turn your Journey token over (it starts face up). If it's face up, +5 Cards"]
    },
    {name: "Dungeon", cost: 3, type: "Action-Duration", edition: "Adventures", src: "assets/Cards/Adventures/Dungeon.jpg",
        text: [[1,"Action"],"Now and at the start of your next turn: +2 Cards, then discard 2 cards."]
    },
    {name: "Peasant", cost: 2, type: "Action-Traveller", edition: "Adventures", src: "assets/Cards/Adventures/Peasant.jpg",
        text: [[1,"Buy"],[1,"Coin"],"When you discard this from play, you may exchange it for a Soldier."], dependencies: [
            {name: "Soldier", type: "Action-Attack-Traveller", src: "assets/Cards/Adventures/Soldier.jpg", cost: 3, text: [[1,"Card"],[1,"Action"],"When you discard this from play, you may exchange it for a Treasure Hunter."]}, //
            {name: "Fugitive", type: "Action-Traveller", src:"assets/Cards/Adventures/Fugitive.jpg", cost: 4, text: [[2,"Card"],[1,"Action"],"Discard a card.","When you discard this from play, you may exchange it for a Disciple."]},
            {name: "Disciple", type: "Action-Traveller", src:"assets/Cards/Adventures/Disciple.jpg", cost: 5, text: ["You may play an Action card from your hand twice. Gain a copy of it.","When you discard this from play, you may exchange it for a Teacher."]},
            {name: "Disciple", type: "Action-Traveller", src:"assets/Cards/Adventures/Disciple.jpg", cost: 6, text: ["Put this on your Tavern mat.","At the start of your turn, you may call this, to move your +1 Card, +1 Action, +1 Buy, or +1 [Coin] to an Action Supply pile you have no tokens on (when you play a card from that pile, you first get that bonus).","(This is not in the Supply.)"]}
        ]
    },
    {name: "Hireling", cost: 6, type: "Action-Duration", edition: "Adventures", src: "assets/Cards/Adventures/Hireling.jpg",
        text: ["At the start of each of your turns for the rest of the game:",[1,"Card"],"(This stays in play)"]
    },
    {name: "Artificer", cost: 5, type: "Action", edition: "Adventures", src: "assets/Cards/Adventures/Artificer.jpg",
        text: [[1,"Card"],[1,"Action"],[1,"Coin"],"Discard any number of cards. You may gain a card costing exactly 1 [Coin] per card discarded, putting it on top of your deck."]
    },
    {name: "Duplicate", cost: 4, type: "Action-Reserve", edition: "Adventures", src: "assets/Cards/Adventures/Duplicate.jpg",
        text: ["Put this on your Tavern mat.","When you gain a card costing up to 6 [Coin], you may call this, to gain a copy of that card."]
    },
    {name: "Lost City", cost: 5, type: "Action", edition: "Adventures", src: "assets/Cards/Adventures/Lost City.jpg",
        text: [[2,"Card"],[2,"Action"],"When you gain this, each other player draws a card."]
    },
    {name: "Messenger", cost: 4, type: "Action", edition: "Adventures", src: "assets/Cards/Adventures/Messenger.jpg",
        text: [[1,"Buy"],[2,"Coin"],"You may put your deck into your discard pile.","When this is your first buy in a turn, gain a card costing up to 4 [Coin], and each other player gains a copy of it."]
    },
    {name: "Swamp Hag", cost: 5, type: "Action-Attack-Duration", edition: "Adventures", src: "assets/Cards/Adventures/Swamp Hag.jpg",
        text: ["Until your next turn, when any other player buys a card, he gains a Curse.","At the start of your next turn: +3 [Coin]"]
    },
    {name: "Ratcatcher", cost: 2, type: "Action-Reserve", edition: "Adventures", src: "assets/Cards/Adventures/Ratcatcher.jpg",
        text: [[1,"Card"],[1,"Action"],"Put this on your Tavern mat.","At the start of your turn, you may call this, to trash a card from your hand."]
    },
    {name: "Storyteller", cost: 5, type: "Action", edition: "Adventures", src: "assets/Cards/Adventures/Storyteller.jpg",
        text: [[1,"Action"],[1,"Coin"],"Play up to 3 Treasures from your hand. Pay all of your [Coin]; +1 Card per [Coin] paid."]
    },
    {name: "Bridge Troll", cost: 5, type: "Action-Attack-Duration", edition: "Adventures", src: "assets/Cards/Adventures/Bridge Troll.jpg",
        text: ["Each other player takes his -1 [Coin] token. Now and at the start of your next turn:",[1,"Buy"],"While this is in play, cards cost 1 [Coin] less on your turns, but not less than 0 [Coin]."]
    },
    {name: "Transmogrify", cost: 4, type: "Action-Reserve", edition: "Adventures", src: "assets/Cards/Adventures/Transmogrify.jpg",
        text: [[1,"Action"],"Put this on your Tavern mat.","At the start of your turn, you may call this, to trash a card from your hand, gain a card costing up to 1 [Coin] more than it, and put that card into your hand."]
    },
    {name: "Caravan Guard", cost: 3, type: "Action-Duration-Reaction", edition: "Adventures", src: "assets/Cards/Adventures/Caravan Guard.jpg",
        text: [[1,"Card"],[1,"Action"],"At the startof your next turn, +1 [Coin].","When another player plays an Attack card, you may play this from your hand. (+1 Action has no effect if it's not your turn.)"]
    },
    {name: "Distant Lands", cost: 5, type: "Action-Reserve-Victory", edition: "Adventures", src: "assets/Cards/Adventures/Distant Lands.jpg",
        text: ["Put this on your Tavern mat.","Worth 4 [VP] if on your Tavern mat at the end of the game (otherwise worth 0 [VP])."]
    },
    {name: "Haunted Woods", cost: 5, type: "Action-Attack-Duration", edition: "Adventures", src: "assets/Cards/Adventures/Haunted Woods.jpg",
        text: ["Until your next turn, when any other player buys a card, he puts his hand on top of his deck in any order.","At the start of your next turn: ",[3,"Card"]]
    },
    {name: "Wine Merchant", cost: 5, type: "Action-Reserve", edition: "Adventures", src: "assets/Cards/Adventures/Wine Merchant.jpg",
        text: [[1,"Buy"],[4,"Coin"],"Put this on your Tavern mat.","At the end of your Buy phase, if you have at least 2 [Coin] unspent, you may discard this from your Tavern mat."]
    },
    {name: "Royal Carriage", cost: 5, type: "Action-Reserve", edition: "Adventures", src: "assets/Cards/Adventures/Royal Carriage.jpg",
        text: [[1,"Action"],"Put this on your Tavern mat.","Directly after resolving an Action, if it's still in play, you may call this, to replay that Action."]
    },
    {name: "Treasure Trove", cost: 5, type: "Treasure", edition: "Adventures", src: "assets/Cards/Adventures/Treasure Trove.jpg",
        text: ["2 [Coin]","When you play this, gain a Gold and a Copper"]
    },
    {name: "Coin of the Realm", cost: 2, type: "Treasure-Reserve", edition: "Adventures", src: "assets/Cards/Adventures/Coin of the Realm.jpg",
        text: ["1 [Coin]","When you play this, put it on your Tavern mat.","Directly after resolving an Action, you may call this, for +2 Actions."]
    },
    {name: "Rats", cost: 4, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Rats.jpg",
        text: [[1,"Card"],[1,"Action"],"Gain a Rats. Trash a card from your hand other than a Rats (or reveal a hand of all Rats).","When you trash this, +1 Card."]
    },
    {name: "Sage", cost: 3, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Sage.jpg",
        text: [[1,"Action"],"Reveal cards from the top of your deck until you reveal one costing 3 [Coin] or more. Put that card into your hand and discard the rest."]
    },
    {name: "Altar", cost: 6, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Altar.jpg",
        text: "Trash a card from your hand. Gain a card costing up to 5 [Coin]."
    },
    {name: "Count", cost: 5, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Count.jpg",
        text: ["Choose one: Discard 2 cards; or put a card from your hand on top of your deckl or gain a copper.","Choose one: +3 [Coin]; or trash your hand; or gain a Duchy."]
    },
    {name: "Rogue", cost: 5, type: "Action-Attack", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Rogue.jpg",
        text: [[2,"Coin"],"If there are any cards in thr the trash from 3 [Coin] to 6 [Coin], gain one of them. Otherwise, each other player reveals the top 2 cards of his deck, trashes the top 2 cards of his deck, trashes one of them costing from 3 [Coin] to 6 [Coin], and discards the rest."]
    },
    {name: "Armory", cost: 4, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Armory.jpg",
        text: "Gain a card costing up to 4 [Coin] putting it on top of your deck."
    },
    {name: "Beggar", cost: 2, type: "Action-Reaction", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Beggar.jpg",
        text: ["Gain 3 Coppers, putting them into your hand.","When another player attacks an Attack card, you may discard this. If you do, gain two Silvers, putting one on top of your deck."]
    },
    {name: "Feodum", cost: 4, type: "Victory", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Feodum.jpg",
        text: "Worth 1 [VP] for every 3 Silvers in your deck (round down)."
    },
    {name: "Hermit", cost: 3, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Hermit.jpg",
        text: ["Look through your discard pile. You may trash a card from your discard pile or hand that is not a Treasure.","Gain a card costing up to 3 [Coin].","When you discard this from play, if you did not buy any cards this turn, trash this and gain a Madman from the Madman pile."], dependencies: [
            {name: "Madman", cost: 0, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Madman.jpg",
            text: [[2,"Actions"],"Return this to the Madman pile. If you do, +1 Card per card in your hand.","(This is not in the Supply.)"]
            }
        ]
    },
    {name: "Mystic", cost: 5, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Mystic.jpg",
        text: [[1,"Action"],[2,"Coin"],"Name a card.","Reveal the top card of your deck. If it's the named card, put it into your hand."]
    },
    {name: "Squire", cost: 2, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Squire.jpg",
        text: [[1,"Coin"],"Choose one: +2 Actions, or +2 Buys; or gain a Silver.","When you trash this, gain an Attack card."]
    },
    {name: "Urchin", cost: 3, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Urchin.jpg",
        text: [[1,"Card"],[1,"Action"],"Each other player discards down to 4 cards in hand.","When you play another Attack card with this in play, you may trash this. If you do, gain a Mercenary from the Mercenary pile."], dependencies: [
            {name: "Mercenary", cost: 0, type: "Action-Attack", edition: "Dark Ages", src: "assets/Cards/DArk Ages/Mercenary.jpg",
            text: ["You may trash 2 cards from your hand.","If you do, +2 Cards, +2 [Coin], and each other player discards down to 3 cards in hand.","(This is not in the Supply)"]}
        ]
    },
    {name: "Cultist", cost: 5, type: "Action-Attack-Looter", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Cultist.jpg",
        text: [[2,"Card"],"Each other player gains a Ruins. You may play a Cultist from your hand.","When you trash this, +3 Cards."], special: ["Gain: Ruins"]
    },
    {name: "Forager", cost: 3, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Forager.jpg",
        text: [[1,"Action"],[1,"Buy"],"Trash a card from your hand. +1 [Coin] per differently named Treasure in the trash."]
    },
    {name: "Knights", cost: 5, type: "Action-Attack-Knight", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Knights.jpg",
        text: "Shuffle the Knight pile before each game with it. Keep it face down except for the top card, which is the only one that can be bought or gained.", dependencies: [
            {name: "Dame Anna", cost: 5, type: "Action-Attack-Knight", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Dame Anna.jpg", text: ["You may trash up to 2 cards from your hand.","Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 [Coin] to 6 [Coin], and discards the rest. If a Knight is trashed by this, trash this card."]},
            {name: "Dame Josephine", cost: 5, type: "Action-Attack-Knight-Victory", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Dame Josephine.jpg", text: ["Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 [Coin] to 6 [Coin], and discards the rest. If a Knight is trashed by this, trash this card.","2 [VP]"]},
            {name: "Dame Molly", cost: 5, type: "Action-Attack-Knight", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Dame Molly.jpg", text: [[2,"Action"],"Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 [Coin] to 6 [Coin], and discards the rest. If a Knight is trashed by this, trash this card."]},
            {name: "Dame Natalie", cost: 5, type: "Action-Attack-Knight", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Dame Natalie.jpg", text: ["You may gain a card costing up to 3 [Coin]","Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 [Coin] to 6 [Coin], and discards the rest. If a Knight is trashed by this, trash this card."]},
            {name: "Dame Sylvia", cost: 5, type: "Action-Attack-Knight", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Dame Sylvia.jpg", text: [[2,"Coin"],"Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 [Coin] to 6 [Coin], and discards the rest. If a Knight is trashed by this, trash this card."]},
            {name: "Sir Bailey", cost: 5, type: "Action-Attack-Knight", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Sir Bailey.jpg", text: [[1,"Card"],[1,"Action"],"Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 [Coin] to 6 [Coin], and discards the rest. If a Knight is trashed by this, trash this card."]},
            {name: "Sir Destry", cost: 5, type: "Action-Attack-Knight", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Sir Destry.jpg", text: [[2,"Card"],"Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 [Coin] to 6 [Coin], and discards the rest. If a Knight is trashed by this, trash this card."]},
            {name: "Sir Martin", cost: 4, type: "Action-Attack-Knight", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Sir Martin.jpg", text: [[2,"Buy"],"Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 [Coin] to 6 [Coin], and discards the rest. If a Knight is trashed by this, trash this card."]},
            {name: "Sir Michael", cost: 5, type: "Action-Attack-Knight", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Sir Michael.jpg", text: ["Each other player discards down to 3 cards in hand.","Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 [Coin] to 6 [Coin], and discards the rest. If a Knight is trashed by this, trash this card."]},
            {name: "Sir Vander", cost: 5, type: "Action-Attack-Knight", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Sir Vander.jpg", text: ["Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 [Coin] to 6 [Coin], and discards the rest. If a Knight is trashed by this, trash this card.","When you trash this, gain a Gold."]}
        ]
    },
    {name: "Pillage", cost: 5, type: "Action-Attack", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Pillage.jpg",
        text: "Trash this. Each other player with 5 or more cards in hand reveals his hand and discards a card that you choose. Gain 2 Spoils from the Spoils pile.", special: ["Gain: Spoils"]
    },
    {name: "Rebuild", cost: 5, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Rebuild.jpg",
        text: [[1,"Action"],"Name a card. Reveal cards from the top of your deck until you reveal a Victory card that is not the named card. Discard the other cards. Trash the Victory card and gain a Victory card costing up to 3 [Coin] more than it."]
    },
    {name: "Vagrant", cost: 2, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Vagrant.jpg",
        text: [[1,"Card"],[1,"Action"],"Reveal the top card of your deck. If it's a Curse, Ruins, Shelter, or Victory card, put it into your hand."]
    },
    {name: "Fortress", cost: 4, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Fortress.jpg",
        text: [[1,"Card"],[2,"Action"],"When you trash this, put it into your hand."]
    },
    {name: "Marauder", cost: 4, type: "Action-Attack-Looter", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Marauder.jpg",
        text: "Gain a Spoils from the Spoils pile. Each other player gains a Ruins.", special: ["Gain: Spoils","Gain: Ruins"]
    },
    {name: "Catacombs", cost: 5, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Catacombs.jpg",
        text: ["Look at the top 3 cards of your deck. Choose one: Put the into your hand; or discard them and +3 Cards.","When you trash this, gain a cheaper card."]
    },
    {name: "Scavenger", cost: 4, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Scavenger.jpg",
        text: [[2,"Coin"],"You may put your deck into your discard pile. Look through your discard pile and put one card from it on top of your deck."]
    },
    {name: "Storeroom", cost: 3, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Storeroom.jpg",
        text: [[1,"Buy"],"Discard any number of cards. +1 Card per card discarded. Discard any number of cards. +1 [Coin] per card discarded the second time."]
    },
    {name: "Death Cart", cost: 4, type: "Action-Looter", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Death Cart.jpg",
        text: [[5,"Coin"],"You may trash an Action card from your hand. If your don't trash this.","When you gain this, gain 2 Ruins."], special: ["Gain: Ruins"]
    },
    {name: "Ironmonger", cost: 4, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Ironmonger.jpg",
        text: [[1,"Card"],[1,"Action"],"Reveal the top card of your deck; you may discard it.","Either way, if it is an...","Action card, +1 Action","Treasure card, +1 [Coin]","Victory card, +1 Card"]
    },
    {name: "Procession", cost: 4, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Procession.jpg",
        text: "You may play an Action card from your hand twice. Trash it. Gain an Action card costing exactly 1 [Coin] more than it."
    },
    {name: "Bandit Camp", cost: 5, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Bandit Camp.jpg",
        text: [[1,"Card"],[2,"Actions"],"Gain a Spoils from the Spoils pile."], special: ["Gain: Spoils"]
    },
    {name: "Counterfeit", cost: 5, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Counterfeit.jpg",
        text: ["1 [Coin]",[1,"Buy"],"When you play this, you may play a Treasure from your hand twice. If you do, trash that Treasure."]
    },
    {name: "Graverobber", cost: 5, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Graverobber.jpg",
        text: "Choose one: Gain a card from the trash costing from 3 [Coin] to 6 [Coin], putting it on top of your deck; or trash an Action card from your hand and gain a card costing up to 3 [Coin] more than it."
    },
    {name: "Junk Dealer", cost: 5, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Junk Dealer.jpg",
        text: [[1,"Card"],[1,"Action"],[1,"Coin"],"Trash a card from your hand."]
    },
    {name: "Market Square", cost: 3, type: "Action-Reaction", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Market Square.jpg",
        text: [[1,"Card"],[1,"Action"],[1,"Buy"],"When one of your cards is trashed, you may discard this from your hand. If you do, gain a Gold."]
    },
    {name: "Hunting Grounds", cost: 6, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Hunting Grounds.jpg",
        text: [[4,"Card"],"When you trash this, gain a Duchy or 3 Estates."]
    },
    {name: "Wandering Minstrel", cost: 4, type: "Action", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Wandering Minstrel.jpg",
        text: [[1,"Card"],[2,"Action"],"Reveal the top 3 cards of your deck. Put the Actions back on top in any order and discard the rest."]
    },
    ["Shelter",
        {name: "Hovel", cost: 1, type: "Reaction-Shelter", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Hovel.jpg",
            text: "When you buy a Victory card, you may trash this from your hand."},
        {name: "Necropolis", cost: 1, type: "Action-Shelter", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Necropolis.jpg",
        text: [[2,"Actions"]]},
        {name: "Overgrown Estate", cost: 1, type: "Victory-Shelter", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Overgrown Estate.jpg",
            text: ["0 [VP]","When you trash this, +1 Card."]}
    ],
    ["Ruins",
        {name: "Abandoned Mine", cost: 0, type: "Action-Ruins", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Abandoned Mine.jpg",
        text: ["+1 [Coin]"]},
        {name: "Ruined Library", cost: 0, type: "Action-Ruins", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Ruined Library.jpg",
            text: [[1,"Card"]]},
        {name: "Ruined Village", cost: 0, type: "Action-Ruins", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Ruined Village.jpg",
            text: [[1,"Action"]]},
        {name: "Survivors", cost: 0, type: "Action-Ruins", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Survivors.jpg",
            text: "Look at the top 2 cards of your deck. Discard them or put them back in any order."}
    ],
    ["Spoils",
        {name: "Spoils", cost: 0, type: "Treasure", edition: "Dark Ages", src: "assets/Cards/Dark Ages/Spoils.jpg",
            text: ["+3 [Coin]","When you play this, return it to the Spoils pile.","(This is not in the Supply.)"]}
    ]

]