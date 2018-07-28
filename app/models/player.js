import DS from "ember-data";

export default DS.Model.extend({
  firstName: DS.attr("string"),
  lastName: DS.attr("string"),
  avatar: DS.attr("string"),
  battingAverage: DS.attr("number"),
  isFreeAgent: DS.attr("boolean"),
  team: DS.belongsTo("team")
});
