var container;
var camera, controls, scene, renderer;

//mouseclick var
var targetList = [];
var projector, mouse = { x: 0, y: 0 };

init();
animate();
window.open("file:///C:/Users/Benjamin/Desktop/virtual-shop/index.html");
function init() {
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);  //Camera Position
	//camera.position.x =20;
	camera.position.z =50;
	camera.position.y = 15;
	
	controls = new THREE.OrbitControls( camera );
	controls.addEventListener( 'change', render );
	controls.target.set(7.625/2,0,0);
	
	scene = new THREE.Scene();

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
	});/*
	var loader = new THREE.JSONLoader();
	loader.load("./objects/shelf.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('images/wood2.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 0;
	mesh.position.y = -1.5;
	mesh.position.z = -30;
	scene.add(mesh);
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/shelf.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('images/wood2.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 35;
	mesh.position.y = -1.5;
	mesh.position.z = -30;
	scene.add(mesh);
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/shelf.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('images/wood2.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 70;
	mesh.position.y = -1.5;
	mesh.position.z = -30;
	scene.add(mesh);
	});*/
	
	//objmtloader to load one isle
/*	var loader = new THREE.OBJMTLLoader();
	loader.load("./objects/shelf2.obj","./objects/shelf2.mtl",function(object){
	object.scale.set(.5,.5,.5);
	object.position.x = -70;
	object.position.y = -1.5;
	object.position.z = -30;
	scene.add(object)});
	var loader = new THREE.OBJMTLLoader();
	loader.load("./objects/shelf2.obj","./objects/shelf2.mtl",function(object){
	object.scale.set(.5,.5,.5);
	object.position.x = -35;
	object.position.y = -1.5;
	object.position.z = -30;
	scene.add(object)});*/
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
	scene.add(mesh);
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/laysred.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 48;
	mesh.position.y = 3;
	mesh.position.z = -30;
	scene.add(mesh);
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/laysred.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 51;
	mesh.position.y = 3;
	mesh.position.z = -30;
	scene.add(mesh);
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/laysred.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 54;
	mesh.position.y = 3;
	mesh.position.z = -30;
	scene.add(mesh);
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
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/laysblue.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 39;
	mesh.position.y = -9.5;
	mesh.position.z = -30;
	scene.add(mesh);
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/laysblue.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 42;
	mesh.position.y = -9.5;
	mesh.position.z = -30;
	scene.add(mesh);
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/laysblue.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 45;
	mesh.position.y = -9.5;
	mesh.position.z = -32;
	scene.add(mesh);
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
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/chipsblack.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 61;
	mesh.position.y = -10;
	mesh.position.z = -13;
	scene.add(mesh);
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/chipsblack.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 64;
	mesh.position.y = -10;
	mesh.position.z = -13;
	scene.add(mesh);
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/chipsblack.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 67;
	mesh.position.y = -10;
	mesh.position.z = -13;
	scene.add(mesh);
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
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/chipsorange.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 71;
	mesh.position.y = -5.5;
	mesh.position.z = -19.5;
	scene.add(mesh);
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/chipsorange.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 74;
	mesh.position.y = -5.5;
	mesh.position.z = -19.5;
	scene.add(mesh);
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
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/pretzels.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = -2;
	mesh.position.y = 5.5;
	mesh.position.z = -49;
	scene.add(mesh);
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/pretzels.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 1;
	mesh.position.y = 5.5;
	mesh.position.z = -49;
	scene.add(mesh);
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
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/crackerjack.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 80;
	mesh.position.y = 12;
	mesh.position.z = -30;
	scene.add(mesh);
	});

	
	//peanuts
	/*
	var loader = new THREE.JSONLoader();
	loader.load("./objects/peanuts.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 15;
	mesh.position.y = -12;
	mesh.position.z = -49;
	scene.add(mesh);
	});
	loader.load("./objects/lids.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ map: loadAndRender('images/lid.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 15;
	mesh.position.y = -12;
	mesh.position.z = -49;
	scene.add(mesh);
	});
	*/
	
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
	item=2;
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
	targetList.push(pr_blue);
	item =0;
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
	targetList.push(pr_blue);
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
	targetList.push(pr_blue);
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
	targetList.push(pr_red);
	item =1;
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
	targetList.push(pr_red);
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
	targetList.push(pr_red);
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
	});
	
	var loader = new THREE.JSONLoader();
	loader.load("./objects/frosted.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves3.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 8;
	mesh.position.y = .8;
	mesh.position.z = -30;
	scene.add(mesh);
	});
	
	var loader = new THREE.JSONLoader();
	loader.load("./objects/frosted.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves3.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 12;
	mesh.position.y = .8;
	mesh.position.z = -30;
	scene.add(mesh);
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
	//targetList.push(r);
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/raisin.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves3.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 9;
	mesh.position.y = -7;
	mesh.position.z = -24;
	scene.add(mesh);
	});
	var loader = new THREE.JSONLoader();
	loader.load("./objects/raisin.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves3.jpg') }) );
	mesh.scale.set(.5,.5,.5);
	mesh.position.x = 13;
	mesh.position.y = -7;
	mesh.position.z = -24;
	scene.add(mesh);
	});	
	
	/*
	//Shelf Geometry
	//lowest shelf on ground level
	var shelfLowGeometry = new THREE.CubeGeometry(180, 1, 28);
	var shelfLowMaterial = new THREE.MeshBasicMaterial({ map: loadAndRender('images/wood2.jpg') });
	var shelfLow = new THREE.Mesh(shelfLowGeometry, shelfLowMaterial);
	//positioning shelf
	shelfLow.position.set(0,0,-12);
	//adding the shelf to the scene
	//scene.add(shelfLow);
	
	//middle shelf
	var shelfMidGeometry = new THREE.CubeGeometry(180, 1, 28);
	//var shelfMidMaterial = new THREE.MeshBasicMaterial({color:0xCD853F});
	var shelfMidMaterial = new THREE.MeshBasicMaterial({ map: loadAndRender('images/wood2.jpg') });
	var shelfMid = new THREE.Mesh(shelfMidGeometry, shelfMidMaterial);
	//positioning shelf
	shelfMid.position.set(0,13,-12);
	//adding the shelf to the scene
	//scene.add(shelfMid);
	
	//top shelf
	var shelfTopGeometry = new THREE.CubeGeometry(180, 1, 28);
	//var shelfTopMaterial = new THREE.MeshBasicMaterial({color:0xCD853F});
	var shelfTopMaterial = new THREE.MeshBasicMaterial({ map: loadAndRender('images/wood2.jpg') });
	var shelfTop = new THREE.Mesh(shelfTopGeometry, shelfTopMaterial);
	//positioning shelf
	shelfTop.position.set(0,26,-12);
	//adding the shelf to the scene
	//scene.add(shelfTop);

	//back part of shelf
	var shelfBackGeometry = new THREE.CubeGeometry(180, 45, 1);//72
	var shelfBackMaterial = new THREE.MeshBasicMaterial({ map: loadAndRender('images/wood2.jpg') });
	var shelfBack = new THREE.Mesh(shelfBackGeometry, shelfBackMaterial);
	//positioning back piece
	shelfBack.position.set(0, 20, -27);
	//adding the shelf to the scene
	//scene.add(shelfBack);
    
*/
	
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
	//targetList.push(RboxesMesh);

	
	
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


//mouse
/*
var faceColorMaterial = new THREE.MeshBasicMaterial( 
	{ color: 0xffffff, vertexColors: THREE.FaceColors } );
	
	var sphereGeometry = new THREE.SphereGeometry( 80, 32, 16 );
	for ( var i = 0; i < sphereGeometry.faces.length; i++ ) 
	{
		face = sphereGeometry.faces[ i ];	
		face.color.setRGB( 0, 0, 0.8 * Math.random() + 0.2 );		
	}
var sphere = new THREE.Mesh( sphereGeometry, faceColorMaterial );
	sphere.position.set(0, 10, -25);
	scene.add(sphere);
*/	
	//targetList.push(r);
	
	// initialize object to perform world/screen calculations
	projector = new THREE.Projector();
	
	// when the mouse moves, call the given function
	document.addEventListener( 'mouseup', onDocumentMouseUp, false );
	
	//Lighting
	light = new THREE.AmbientLight( "white" );
	scene.add( light );

	var light = new THREE.SpotLight("white");
	light.position.set(-150,40,0);
	light.castShadow = true;
	light.shadowCameraVisible = false;
	scene.add(light);
	
	var light2 = new THREE.SpotLight("white");
	light2.position.set(150,40,0);
	light2.castShadow = true;
	light2.shadowCameraVisible = false;
	scene.add(light2);
	

	if ( Detector.webgl )
		renderer = new THREE.WebGLRenderer( {antialias:true} );
	else
		alert("No WebGL support detected");

	//renderer = new THREE.WebGLRenderer( { antialias: true } );
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
	// the following line would stop any other event handler from firing
	// (such as the mouse's TrackballControls)
	// event.preventDefault();
	console.log("Click.");
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
		switch (item) {
			case 0:
					window.open("file:///C:/Users/Benjamin/Desktop/virtual-shop/pringlesbl.html"); //blue pringles
					break;
			case 1:
					window.open("file:///C:/Users/Benjamin/Desktop/virtual-shop/pringlesgr.html"); //red pringles
					break;
			case 2:
					window.open("file:///C:/Users/Benjamin/Desktop/virtual-shop/pringlessingle.html"); //green pringles
					break;
		}
		//console.log("Hit @ " + toString( intersects[0].point ) );
		
		// change the color of the closest face.
		//intersects[ 0 ].face.color.setRGB( 0.8 * Math.random() + 0.2, 0, 0 ); 
		//intersects[ 0 ].object.geometry.colorsNeedUpdate = true;
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
