Hooks.on("setup", () => {
    WFRP4E = game.wfrp4e.config
    WFRP4E.species["ogre"] = "Ogre"

    WFRP4E.speciesCharacteristics["ogre"] = {
        "ws": "2d10+20",
        "bs": "2d10+10",
        "s": "2d10+35",
        "t": "2d10+35",
        "i": "2d10+10",
        "ag": "2d10+10",
        "dex": "2d10+10",
        "int": "2d10+10",
        "wp": "2d10+20",
        "fel": "2d10+10"
    }

    WFRP4E.speciesSkills["ogre"] = [
        "Consume Alcohol",
        "Cool",
        "Endurance",
        "Gamble",
        "Intimidate",
        "Language (Any)",
        "Language (Grumbarth)",
        "Language (Mootish)",
        "Lore (Ogres)",
        "Melee (Basic)",
        "Melee (Brawling)",
        "Trade (Cook)",
    ]

    WFRP4E.speciesTalents["ogre"] = [
        "Accute Sense (Smell), Accute Sense (Taste)",
        "Resistance (Mutation), Strong-minded",
        "Night Vision",
        "Very Resilient, Very Strong",
        "@Compendium[wfrp4e-core.traits.pLW9SVX0TVTYPiPv]{Bite}",
        "@Compendium[wfrp4e-core.traits.8slW8CJ2oVTxeQ6q]{Size (Large)}",
        "@Compendium[ogre-kingdom-wfrp4e.talents-ok.U0OKeE96CHpc5mVd]{Ogre Hunger}",
        "@Compendium[ogre-kingdom-wfrp4e.talents-ok.lRzoGVuZzWsh70DU]{Favorite Snack (Target)}",
        "@Compendium[ogre-kingdom-wfrp4e.journalentries-ok.NmRpHy8Zw76PdwKP]{Ogre Tribe Trait (Any)}",
        0
    ]

    WFRP4E.speciesFate["ogre"] = 0;

    WFRP4E.speciesRes["ogre"] = 3;

    WFRP4E.speciesExtra["ogre"] = 1;

    WFRP4E.speciesMovement["ogre"] = 6;


    WFRP4E.speciesAge.ogre = "20+2d10"

    WFRP4E.speciesHeight.ogre = {
        feet : 9,
        inches : 4,
        die : "3d10"
    }
});







Hooks.on("setup", () => {

    // Importing Ogre names
    fetch("modules/ogre-kingdom-wfrp4e/names/ogre_name_prefixes.txt").then(r => r.text()).then(async nameText => {
        game.wfrp4e.names.ogre_name_prefixes = []
        nameText.split("\n").forEach((nameGroup) => game.wfrp4e.names.ogre_name_prefixes.push(nameGroup.split(",").map(function (item) {
            return item.trim()
        })))
    })
    fetch("modules/ogre-kingdom-wfrp4e/names/ogre_name_suffixes.txt").then(r => r.text()).then(async nameText => {
        game.wfrp4e.names.ogre_name_suffixes = []
        nameText.split("\n").forEach((nameGroup) => game.wfrp4e.names.ogre_name_suffixes.push(nameGroup.split(",").map(function (item) {
            return item.trim()
        })))
    })
    fetch("modules/ogre-kingdom-wfrp4e/names/ogre_names.txt").then(r => r.text()).then(async nameText => {
        game.wfrp4e.names.ogre_names = []
        nameText.split("\n").forEach((nameGroup) => game.wfrp4e.names.ogre_names.push(nameGroup.split(",").map(function (item) {
            return item.trim()
        })))
    })
    fetch("modules/ogre-kingdom-wfrp4e/names/ogre_titles.txt").then(r => r.text()).then(async nameText => {
        game.wfrp4e.names.ogre_titles = []
        nameText.split("\n").forEach((nameGroup) => game.wfrp4e.names.ogre_titles.push(nameGroup.split(",").map(function (item) {
            return item.trim()
        })))
    })
    fetch("modules/ogre-kingdom-wfrp4e/names/ogre_title_prefixes.txt").then(r => r.text()).then(async nameText => {
        game.wfrp4e.names.ogre_title_prefixes = []
        nameText.split("\n").forEach((nameGroup) => game.wfrp4e.names.ogre_title_prefixes.push(nameGroup.split(",").map(function (item) {
            return item.trim()
        })))
    })
    fetch("modules/ogre-kingdom-wfrp4e/names/ogre_title_suffixes.txt").then(r => r.text()).then(async nameText => {
        game.wfrp4e.names.ogre_title_suffixes = []
        nameText.split("\n").forEach((nameGroup) => game.wfrp4e.names.ogre_title_suffixes.push(nameGroup.split(",").map(function (item) {
            return item.trim()
        })))
    })

    
    game.wfrp4e.names.ogre = {
        // Generate First Name
        forename(gender = "male") {
          let fnresult = new Roll("1d2").roll().total;
          let nameGen = game.wfrp4e.names
          if (fnresult == 1)
            return game.wfrp4e.names.RollArray(`ogre_names`)
          else if (fnresult == 2)
            return `${nameGen.RollArray(`ogre_name_prefixes`)}${nameGen.RollArray(`ogre_name_suffixes`)}`
        },
        //Generate Nickname
        surname(gender = "male") {
          let snresult = new Roll("1d3").roll().total;
          let nameGen = game.wfrp4e.names
          if (snresult < 3)
            return `${nameGen.RollArray(`ogre_title_prefixes`)}${nameGen.RollArray(`ogre_title_suffixes`)}`
          else if (snresult == 3)
            return `the ${nameGen.RollArray(`ogre_titles`)}`
        }
      }
    
})
