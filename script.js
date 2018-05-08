var canvas = document.getElementById("renderCanvas"); // Get the canvas element

var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// Entities
var player, ground, brick, mushroom;

// Flags
var upFlag = false;
var downFlag = false;
var leftFlag = false;
var rightFlag = false;
var jumpFlag = false;
var mushroomFlag = false;

// Controls
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32){
        jumpFlag = true;
    }

    if(event.keyCode == 37){
        leftFlag = true;
    }

    if(event.keyCode == 38){
        upFlag = true;
    }

    if(event.keyCode == 39){
        rightFlag = true;
    }

    if(event.keyCode == 40){
        downFlag = true;
    }
});

document.addEventListener('keyup', function(event) {
    upFlag = false;
    downFlag = false;
    leftFlag = false;
    rightFlag = false;
    jumpFlag = false;
});

/******* Add the create scene function ******/
var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    scene.enablePhysics(new BABYLON.Vector3(0,-9.81, 0), new BABYLON.CannonJSPlugin());

    // Initialize
    player = createPlayer(scene);
    ground = createGround(scene);
    brick = createBrick(scene);

    // Collision Events
    brick.physicsImpostor.registerOnPhysicsCollide(player.physicsImpostor, function (main, collide) {
        if(!mushroomFlag) {
            mushroom = createMushroom(scene);
            mushroomFlag = true;
            mushroom.physicsImpostor.registerOnPhysicsCollide(player.physicsImpostor, function (main, collide) {
                mushroom.scaling = new BABYLON.Vector3(0, 0, 0);
                player.scaling = new BABYLON.Vector3(2, 2, 2);
            });
        }
    });


    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);

    // Positions the camera overwriting alpha, beta, radius
    camera.setPosition(new BABYLON.Vector3(0, 10, 20));

    //camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

    return scene;
};

/******* End of the create scene function ******/

var scene = createScene(); //Call the createScene function

engine.runRenderLoop(function () { // Register a render loop to repeatedly render the scene

    if(upFlag){
        player.position.z -= 0.1;
    }else if(leftFlag){
        player.position.x += 0.1;
    }else if(rightFlag){
        player.position.x -= 0.1;
    }else if(downFlag){
        player.position.z += 0.1;
    }else if(jumpFlag){
        player.position.y += 0.2;
    }

    scene.render();
});


window.addEventListener("resize", function () { // Watch for browser/canvas resize events
    engine.resize();
});