import DS from "ember-data";
import { computed } from "@ember/object";
import { pluralize } from "ember-inflector";

export default DS.Model.extend({
  mascot: DS.attr("string"),
  primaryColor: DS.attr("string"),
  city: DS.attr("string"),
  state: DS.attr("string"),
  players: DS.hasMany("player"),

  name: computed("city", "mascot", function() {
    const city = this.get("city");
    const mascot = this.get("mascot");

    return `${city} ${pluralize(mascot)}`;
  })
});
