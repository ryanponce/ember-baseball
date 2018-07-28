import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("teams", function() {
    this.route("new");

    this.route("team", { path: "/:team_id" }, function() {
      this.route("edit");
    });
  });

  this.route("players", function() {
    this.route("new");

    this.route("player", { path: "/:player_id" }, function() {
      this.route("edit");
    });
  });
});

export default Router;
