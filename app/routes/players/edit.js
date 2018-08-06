import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model(params) {
    return RSVP.hash({
      player: this.get("store").findRecord("player", params.player_id),
      teams: this.get("store").findAll("team")
    });
  },

  actions: {
    editPlayer(newPlayer) {
      return newPlayer
        .save()
        .then(() => this.transitionTo("players.player", newPlayer.id));
    }
  }
});
