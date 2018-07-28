import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | players/player', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:players/player');
    assert.ok(route);
  });
});
