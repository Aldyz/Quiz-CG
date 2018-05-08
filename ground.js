function createGround(scene){
    var ground = BABYLON.MeshBuilder.CreateGround("Ground", {height: 30, width: 30}, scene);
    var myMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);

    myMaterial.alpha = 1;
    myMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.75, 0.25);
    ground.material = myMaterial;

    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0, restitution: 0.5, friction: 0.5}, scene);
    return ground;
}