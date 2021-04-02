Hooks.on("setup", () => {
  WFRP4E = game.wfrp4e.config
  // Add ogre-sized quality

  WFRP4E.itemQualities["ogre-sized"] = "OgreKingdom.Properties.Ogre-sized.Label";
  WFRP4E.qualityDescriptions["ogre-sized"] = "OgreKingdom.Properties.Ogre-sized.Description";

});
