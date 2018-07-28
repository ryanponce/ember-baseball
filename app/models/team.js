import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  primaryColor: DS.attr("string"),
  city: DS.attr("string"),
  state: DS.attr("string"),
  players: DS.hasMany("player")
});
