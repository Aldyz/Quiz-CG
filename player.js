function createPlayer(scene){
    var player = BABYLON.MeshBuilder.CreateBox("Player", {height: 2, width: 2, depth: 2}, scene);
    player.position.y = 5;
    player.position.z = 10;

    player.physicsImpostor = new BABYLON.PhysicsImpostor(player, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 1, restitution: 0.5, friction: 0.5}, scene);
    return player;
}