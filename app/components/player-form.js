import Component from "@ember/component";
import { inject } from "@ember/service";

export default Component.extend({
  store: inject(),
  selectedTeam: null,

  actions: {
    setTeam(team) {
      this.set("selectedTeam", team);
    },

    savePlayer(player) {
      const team = this.get("store").peekRecord("team", this.selectedTeam);

      team.get("players").pushObject(player);
      player.save().then(function() {
        team.save();
      });
    }
  }
});
