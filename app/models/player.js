import DS from "ember-data";
import { computed } from "@ember/object";

export default DS.Model.extend({
  firstName: DS.attr("string"),
  lastName: DS.attr("string"),
  avatar: DS.attr("string"),
  dateOfBirth: DS.attr("date"),
  number: DS.attr("number"),
  position: DS.attr("string"),
  battingAverage: DS.attr("number"),
  isFreeAgent: DS.attr("boolean"),
  team: DS.belongsTo("team"),

  fullName: computed("firstName", "lastName", function() {
    return `${this.get("firstName")} ${this.get("lastName")}`;
  })
});
