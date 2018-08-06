import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  isFilteredByFreeAgent: false,

  filteredPlayers: computed("isFilteredByFreeAgent", "model", function() {
    const isFilteredByFreeAgent = this.get("isFilteredByFreeAgent");
    const players = this.get("model");

    if (isFilteredByFreeAgent) {
      return players.filterBy("isFreeAgent", true);
    }

    return players;
  }),

  actions: {
    onFilterByFreeAgent() {
      this.toggleProperty("isFilteredByFreeAgent");
    }
  }
});
