function createMushroom(scene){
    var mushroom = BABYLON.MeshBuilder.CreateBox("Mushroom", {height: 2, width: 2, depth: 2}, scene);
    mushroom.position.y = 6;
    mushroom.position.z = -4;

    mushroom.physicsImpostor = new BABYLON.PhysicsImpostor(mushroom, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 1, restitution: 0.5, friction: 0.5}, scene);
    return mushroom;
}