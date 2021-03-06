//virtualshop.js

var container;
var camera, controls, scene, renderer;

//mouseclick variables
var targetList = [];
var projector, mouse = { x: 0, y: 0 };
//item number code
//0 = blue pringles
//1 = red pringles
//2 = green pringles
//3 = frosted flakes
//4 = raisin brand
//5 = reeses cereal
//6 = fruit loops 
//7 = lays (red)
//8 = lays (blue)
//9 = chips (black)
//10 = chips (orange)
//11 = pretzels
//12 = crackerjacks

init();
animate();
//window.open("file:///C:/Users/Lenovo/Desktop/virtual-shop/index.html");

function init() {
	//camera view
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);  //Camera Position
	//camera.position.x =20;
	camera.position.z =50;
	camera.position.y = 15;
	

	//OrbitControls
	controls = new THREE.OrbitControls( camera );
	controls.addEventListener( 'change', render );
	controls.target.set(7.625/2,0,0);
	
	//create scene
	scene = new THREE.Scene();

	//add flooring
	var floorTexture = new THREE.ImageUtils.loadTexture( 'images/browntile.jpg' );
	floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; 
	floorTexture.repeat.set( 100, 100 );
	var floorMaterial = new THREE.MeshPhongMaterial( { map: floorTexture, side: THREE.DoubleSide } );
	var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.position.y = -1.0;
	floor.rotation.x = Math.PI / 2;
	floor.receiveShadow = true;
	scene.add(floor);
	
	
	//shelves (wood texture)
	var loader = new THREE.JSONLoader();
	loader.load("./objects/shelf.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('images/wood2.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = -70;
	mesh.position.y = -1.5;
	mesh.position.z = -30;
	scene.add(mesh);
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/shelf.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('images/wood2.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = -35;
	mesh.position.y = -1.5;
	mesh.position.z = -30;
	scene.add(mesh);
	});
	

	//shelves with color
	var loader = new THREE.OBJMTLLoader();
	loader.load("./objects/shelf2.obj","./objects/shelf2.mtl",function(object){
	object.scale.set(.5,.5,.5);
	object.position.x = 0;
	object.position.y = -1.5;
	object.position.z = -30;
	scene.add(object)});
	var loader = new THREE.OBJMTLLoader();
	loader.load("./objects/shelf2.obj","./objects/shelf2.mtl",function(object){
	object.scale.set(.5,.5,.5);
	object.position.x = 35;
	object.position.y = -1.5;
	object.position.z = -30;
	scene.add(object)});
	var loader = new THREE.OBJMTLLoader();
	loader.load("./objects/shelf2.obj","./objects/shelf2.mtl",function(object){
	object.scale.set(.5,.5,.5);
	object.position.x = 70;
	object.position.y = -1.5;
	object.position.z = -30;
	scene.add(object)});
	

	//lays chips (red)
	var loader = new THREE.JSONLoader();
	loader.load("./objects/laysred.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 45;
	mesh.position.y = 3;
	mesh.position.z = -30;
	scene.add(mesh)
	targetList.push(mesh);
	mesh.item=7;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/laysred.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 48;
	mesh.position.y = 3;
	mesh.position.z = -30;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=7;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/laysred.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 51;
	mesh.position.y = 3;
	mesh.position.z = -30;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=7;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/laysred.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 54;
	mesh.position.y = 3;
	mesh.position.z = -30;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=7;
	});
	

	//lays blue
	var loader = new THREE.JSONLoader();
	loader.load("./objects/laysblue.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 36;
	mesh.position.y = -9.5;
	mesh.position.z = -32;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=8;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/laysblue.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 39;
	mesh.position.y = -9.5;
	mesh.position.z = -30;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=8;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/laysblue.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 42;
	mesh.position.y = -9.5;
	mesh.position.z = -30;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=8;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/laysblue.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 45;
	mesh.position.y = -9.5;
	mesh.position.z = -32;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=8;
	});
	

	//chips (black)
	var loader = new THREE.JSONLoader();
	loader.load("./objects/chipsblack.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 58;
	mesh.position.y = -10;
	mesh.position.z = -13;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=9;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/chipsblack.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 61;
	mesh.position.y = -10;
	mesh.position.z = -13;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=9;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/chipsblack.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 64;
	mesh.position.y = -10;
	mesh.position.z = -13;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=9;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/chipsblack.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 67;
	mesh.position.y = -10;
	mesh.position.z = -13;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=9;
	});
	

	// chips (orange)
	var loader = new THREE.JSONLoader();
	loader.load("./objects/chipsorange.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 68;
	mesh.position.y = -5.5;
	mesh.position.z = -19.5;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=10;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/chipsorange.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 71;
	mesh.position.y = -5.5;
	mesh.position.z = -19.5;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=10;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/chipsorange.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 74;
	mesh.position.y = -5.5;
	mesh.position.z = -19.5;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=10;
	});
	

	//pretzels
	var loader = new THREE.JSONLoader();
	loader.load("./objects/pretzels.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = -5;
	mesh.position.y = 5.5;
	mesh.position.z = -49;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=11;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/pretzels.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = -2;
	mesh.position.y = 5.5;
	mesh.position.z = -49;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=11;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/pretzels.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 1;
	mesh.position.y = 5.5;
	mesh.position.z = -49;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=11;
	});
	

	//Cracker Jacks
	var loader = new THREE.JSONLoader();
	loader.load("./objects/crackerjack.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 75;
	mesh.position.y = 12;
	mesh.position.z = -30;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=12;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/crackerjack.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 80;
	mesh.position.y = 12;
	mesh.position.z = -30;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item=12;
	});
	

	//pringles (green)
	var loader = new THREE.JSONLoader();
	loader.load("./objects/pringles.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	pr_green = mesh;
	pr_green.scale.set(.5,.5,.5);
	pr_green.position.x = 45;
	pr_green.position.y = -6.7;
	pr_green.position.z = -21;
	scene.add(pr_green);
	targetList.push(pr_green);
	pr_green.item=2;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/pringles.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	pr_green = mesh;
	pr_green.scale.set(.5,.5,.5);
	pr_green.position.x = 47;
	pr_green.position.y = -6.7;
	pr_green.position.z = -21;
	scene.add(pr_green);
	pr_green.item=2;
	//the above is a manual identifier to distinguish green pringles from everything else
	//in order for the mouse click to work for the whole group, every item must enter the targetList array
	targetList.push(pr_green);
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/pringles.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	pr_green = mesh;
	pr_green.scale.set(.5,.5,.5);
	pr_green.position.x = 49;
	pr_green.position.y = -6.7;
	pr_green.position.z = -21;
	scene.add(pr_green);
	targetList.push(pr_green);
	pr_green.item=2
	});
	

	//pringles blue
	var loader = new THREE.JSONLoader();
	loader.load("./objects/pringlesbl.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	pr_blue = mesh;
	pr_blue.scale.set(.5,.5,.5);
	pr_blue.position.x = -33;
	pr_blue.position.y = -4.8;
	pr_blue.position.z = -33;
	scene.add(pr_blue);
	//add to the array
	targetList.push(pr_blue);
	//give blue pringles an item code
	pr_blue.item = 0;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/pringlesbl.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	pr_blue = mesh;
	pr_blue.scale.set(.5,.5,.5);
	pr_blue.position.x = -30;
	pr_blue.position.y = -4.8;
	pr_blue.position.z = -34;
	scene.add(pr_blue);
	//add to the array
	targetList.push(pr_blue);
	pr_blue.item = 0;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/pringlesbl.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	pr_blue = mesh;
	pr_blue.scale.set(.5,.5,.5);
	pr_blue.position.x = -28;
	pr_blue.position.y = -4.8;
	pr_blue.position.z = -33;
	scene.add(pr_blue);
	//add to the array
	targetList.push(pr_blue);
	pr_blue.item = 0;
	});	
	

	//pringles (red)
	var loader = new THREE.JSONLoader();
	loader.load("./objects/pringlesgr.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	pr_red = mesh;
	pr_red.scale.set(.5,.5,.5);
	pr_red.position.x = 60;
	pr_red.position.y = -5.8;
	pr_red.position.z = -23;
	scene.add(pr_red);
	//add to the array
	targetList.push(pr_red);
	//give red pringles an item code
	pr_red.item = 1;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/pringlesgr.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	pr_red = mesh;
	pr_red.scale.set(.5,.5,.5);
	pr_red.position.x = 62;
	pr_red.position.y = -5.8;
	pr_red.position.z = -23;
	scene.add(pr_red);
	//add to the array
	targetList.push(pr_red);
	pr_red.item = 1;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/pringlesgr.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	pr_red = mesh;
	pr_red.scale.set(.5,.5,.5);
	pr_red.position.x = 64;
	pr_red.position.y = -5.8;
	pr_red.position.z = -23;
	scene.add(pr_red);
	//add to the array
	targetList.push(pr_red);
	pr_red.item = 1;
	});
	

	//frosted flakes
	var loader = new THREE.JSONLoader();
	loader.load("./objects/frosted.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves3.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 4;
	mesh.position.y = .8;
	mesh.position.z = -30;
	scene.add(mesh);
	//add to the array
	targetList.push(mesh);
	//give frosted flakes an item code
	mesh.item = 3;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/frosted.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves3.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 8;
	mesh.position.y = .8;
	mesh.position.z = -30;
	scene.add(mesh);
	//add to the array
	targetList.push(mesh);
	mesh.item = 3;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/frosted.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves3.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 12;
	mesh.position.y = .8;
	mesh.position.z = -30;
	scene.add(mesh);
	//add to the array
	targetList.push(mesh);
	mesh.item = 3;
	});


	//raisin brand	
	var loader = new THREE.JSONLoader();
	loader.load("./objects/raisin.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves3.jpg') }) );
	r = mesh;
	r.scale.set(.5,.5,.5);
	r.position.x = 5;
	r.position.y = -7;
	r.position.z = -24;
	scene.add(r);
	//add to the array
	targetList.push(r);
	//give raisin brand an item code
	r.item = 4;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/raisin.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves3.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 9;
	mesh.position.y = -7;
	mesh.position.z = -24;
	scene.add(mesh);
	//add to the array
	targetList.push(mesh);
	mesh.item = 4;
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/raisin.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves3.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 13;
	mesh.position.y = -7;
	mesh.position.z = -24;
	scene.add(mesh);
	targetList.push(mesh);
	mesh.item = 4;
	});	
	

	//Reeses Cereal
	var Rboxes = new THREE.Geometry(); // Many Reeses boxes
	var Rbox = new THREE.Mesh( new THREE.CubeGeometry(7.625,11,2.75) ); //1 example of Reeses box

	for (var t = 0; t <= 8; t+=4){
	for (var n = 0; n <= 3; n+=1.5){
		Rbox.scale.set(.5,.5,.5);
		Rbox.position.set(32+t,28,-15-n);
		THREE.GeometryUtils.merge( Rboxes, Rbox );
	}}
	var labeling = [
	    new THREE.MeshPhongMaterial( { map: loadAndRender('images/reeses_left.jpg') } ),
	    new THREE.MeshPhongMaterial( { map: loadAndRender('images/reeses_right.jpg') } ),
	    new THREE.MeshPhongMaterial( { map: loadAndRender('images/reeses_top.jpg') } ),
	    new THREE.MeshPhongMaterial( { map: loadAndRender('images/reeses_bottom.jpg') } ),
	    new THREE.MeshPhongMaterial( { map: loadAndRender('images/reeses_front.jpg') } ),
	    new THREE.MeshPhongMaterial( { map: loadAndRender('images/reeses_back.jpg') } ) 
	];
	var RboxesMesh = new THREE.Mesh(Rboxes, new THREE.MeshFaceMaterial(labeling));
	RboxesMesh.castShadow = false;
	RboxesMesh.receiveShadow = true;
	scene.add(RboxesMesh);
	//add to array
	targetList.push(RboxesMesh);
	//give Rbox an item code
	RboxesMesh.item = 5;

	
	//Fruit Loops
	var cereals = new THREE.Geometry();
	var cereal = new THREE.Mesh( new THREE.CubeGeometry(7.625,11,2.75) );
	
	for (var t = 0; t <= 8; t+=4){
	for (var n = 0; n <= 3; n+=1.5){
		cereal.scale.set(.5,.5,.5);
		cereal.position.set(32+t,21,-15-n);
		THREE.GeometryUtils.merge( cereals, cereal );
	}}
	var materials = [
	    new THREE.MeshPhongMaterial( { map: loadAndRender('images/cereal_left.jpg') } ),
	    new THREE.MeshPhongMaterial( { map: loadAndRender('images/cereal_right.jpg') } ),
	    new THREE.MeshPhongMaterial( { map: loadAndRender('images/cereal_top.jpg') } ),
	    new THREE.MeshPhongMaterial( { map: loadAndRender('images/cereal_bottom.jpg') } ),
	    new THREE.MeshPhongMaterial( { map: loadAndRender('images/cereal_front.jpg') } ),
	    new THREE.MeshPhongMaterial( { map: loadAndRender('images/cereal_back.jpg') } ) 
	];
	
	var cerealsMesh = new THREE.Mesh(cereals, new THREE.MeshFaceMaterial(materials));
	cerealsMesh.castShadow = false;
	cerealsMesh.receiveShadow = true;
	scene.add(cerealsMesh);
	//add to the array
	targetList.push(cerealsMesh);
	//give fruit loops an item code
	cerealsMesh.item = 6;


	// for mouse
	// initialize object to perform world/screen calculations
	projector = new THREE.Projector();
	
	// when the mouse moves, call the given function
	document.addEventListener( 'mouseup', onDocumentMouseUp, false );
	
	//Lighting
	light = new THREE.AmbientLight( "white" );
	scene.add( light );

	var light1 = new THREE.SpotLight("white");
	light1.position.set(-150,40,0);
	light1.castShadow = true;
	light1.shadowCameraVisible = false;
	scene.add(light1);
	
	var light2 = new THREE.SpotLight("white");
	light2.position.set(150,40,0);
	light2.castShadow = true;
	light2.shadowCameraVisible = false;
	scene.add(light2);
	

	if ( Detector.webgl )
		renderer = new THREE.WebGLRenderer( {antialias:true} );
	else
		alert("No WebGL support detected");

	renderer.setClearColor( "black", 1 );
  	renderer.setSize( window.innerWidth, window.innerHeight );
  	renderer.shadowMapEnabled = true;

  	container = document.getElementById( 'container' );
  	container.appendChild( renderer.domElement );
  	window.addEventListener( 'resize', onWindowResize, false );

  	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.bottom = '0px';
	stats.domElement.style.zIndex = 100;
	container.appendChild( stats.domElement );

}

//mouse function
function onDocumentMouseUp( event ) 
{
	// update the mouse variable
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	// find intersections
	// create a Ray with origin at the mouse position
	//   and direction into the scene (camera direction)
	var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
	projector.unprojectVector( vector, camera );
	var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
	// create an array containing all objects in the scene with which the ray intersects
	var intersects = ray.intersectObjects( targetList, true );
	// if there is one (or more) intersections
	if ( intersects.length > 0 )
	{
		//only care about the first object that intersects the ray, so we make that a variable of interest
		var target = intersects[0].object;
		
		//different cases for each item clicked on Note:must change directory on different computer (not actual website)
		switch (target.item) {
			case 0:
    				window.open("file:///C:/Users/Lenovo/Desktop/virtual-shop/pringlesbl.html"); 		//blue pringles
					break;
			case 1:
					window.open("file:///C:/Users/Lenovo/Desktop/virtual-shop/pringlesgr.html"); 		//red pringles
					break;
			case 2:
					window.open("file:///C:/Users/Lenovo/Desktop/virtual-shop/pringlessingle.html"); 	//green pringles
					break;
			case 3:
					window.open("file:///C:/Users/Lenovo/Desktop/virtual-shop/frosted.html");  			//frosted flakes
					break;
			case 4:
					window.open("file:///C:/Users/Lenovo/Desktop/virtual-shop/raisin.html"); 			//raisin brand
					break;
			case 5:
					window.open("file:///C:/Users/Lenovo/Desktop/virtual-shop/reeses.html");			//reeses cereal
					break;
			case 6:
					window.open("file:///C:/Users/Lenovo/Desktop/virtual-shop/fruitloops.html");		//fruit loops 
					break;
			case 7:
					window.open("file:///C:/Users/Lenovo/Desktop/virtual-shop/laysred.html");			//red lays
					break;
			case 8:
					window.open("file:///C:/Users/Lenovo/Desktop/virtual-shop/laysblue.html");			//blue lays
					break;
			case 9:
					window.open("file:///C:/Users/Lenovo/Desktop/virtual-shop/chipsblack.html");		//black chips
					break;
			case 10:
					window.open("file:///C:/Users/Lenovo/Desktop/virtual-shop/chipsorange.html");		//orange chips
					break;
			case 11:
					window.open("file:///C:/Users/Lenovo/Desktop/virtual-shop/pretzelsingle.html"); 	//pretzel bag
					break;
			case 12:
						window.open("file:///C:/Users/Lenovo/Desktop/virtual-shop/crackerjack.html");	//cracker jacks
					break;
		}
		
	}

}

function onWindowResize() {

  	camera.aspect = window.innerWidth / window.innerHeight;
  	camera.updateProjectionMatrix();

  	renderer.setSize( window.innerWidth, window.innerHeight );
  	render();
}

function animate() {
	requestAnimationFrame( animate );
	controls.update();
	stats.update();
}

function render() {
	renderer.render( scene, camera );
}

function loadAndRender(filename) {
	return THREE.ImageUtils.loadTexture(filename, {}, render);
}
