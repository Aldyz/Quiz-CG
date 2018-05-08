function createBrick(scene){
    var brick = BABYLON.MeshBuilder.CreateBox("Brick", {height: 2, width: 2, depth: 2}, scene);
    brick.position.y = 5;
    brick.position.z = -2;

    brick.physicsImpostor = new BABYLON.PhysicsImpostor(brick, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0, restitution: 0.5, friction: 0.5}, scene);
    return brick;
}