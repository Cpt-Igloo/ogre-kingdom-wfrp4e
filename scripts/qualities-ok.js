Hooks.on("setup", () => {
  WFRP4E = game.wfrp4e.config
  // Add ogre-sized quality

  WFRP4E.itemQualities["ogre-sized"] = "Ogre Sized";
  WFRP4E.qualityDescriptions["ogre-sized"] = "All ogre sized weaponry cost double the amount of resources and currency to purchase, maintain and repair because of the increased amount of resources needed to produce them. Ogre sized weapons, armor and items have double the Encumbrance for Size Average creatures and inflict a -30 WS or BS penalty, and a -30 to Agility, if used by a Size Average creature, and are unusable by Size Small creatures.";

});
