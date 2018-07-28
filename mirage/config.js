export default function() {
  this.namespace = "/api";

  // teams
  this.get("/teams");
  this.get("/teams/:id");

  // players
  this.get("/players");
  this.get("/players/:id");
}
