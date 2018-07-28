import DS from "ember-data";

export default DS.Model.extend({
  firstName: DS.attr("string"),
  lastName: DS.attr("string"),
  avatar: DS.attr("string"),
  team: DS.belongsTo("team")
});
