import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.get("store").findRecord("team", params.team_id, {
      include: "players"
    });
  },

  actions: {
    deleteTeam(team) {
      return team.destroyRecord().then(() => this.transitionTo("teams"));
    }
  }
});
