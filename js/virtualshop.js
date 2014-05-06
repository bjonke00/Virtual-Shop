var container;
var camera, controls, scene, renderer;

init();
animate();

function init() {
	camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, .1, 1000);  //Camera Position
	camera.position.z =110;
	camera.position.y = 20;
	
	controls = new THREE.OrbitControls( camera );
	controls.addEventListener( 'change', render );
	controls.target.set(7.625/2,0,0);
	
	scene = new THREE.Scene();

	var floorTexture = new THREE.ImageUtils.loadTexture( 'images/floor_tile.jpg' );
	floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; 
	floorTexture.repeat.set( 100, 100 );
	var floorMaterial = new THREE.MeshPhongMaterial( { map: floorTexture, side: THREE.DoubleSide } );
	var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.position.y = -1.0;
	floor.rotation.x = Math.PI / 2;
	floor.receiveShadow = true;
	scene.add(floor);
	
	//objmtloader to load one isle
	var loader = new THREE.OBJMTLLoader();
	loader.load("./objects/myshop2.obj","./objects/myshop2.mtl",function(object){
	object.scale.set(.5,.5,.5);
	object.position.x = 5;
	object.position.y = -1.5;
	object.position.z = -30;
	scene.add(object)});
	/*
	//json loader
	
	function addObjects() {
  var material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'objects/misc_chair01_col.jpg' ) } );
  var loader = new THREE.JSONLoader();
  loader.load( { model: 'objects/misc_chair01.js', callback: function ( geometry ) {
      geometry.computeTangents();

      mesh = new THREE.Mesh( geometry, material );
      mesh.position.x = mesh.position.y = mesh.position.z = 5;
      mesh.rotation.x = mesh.rotation.y = mesh.rotation.z = 0;
      mesh.scale.x = mesh.scale.y = mesh.scale.z = 50;
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      group.addChild(mesh);
  } } );

  // Finally when we are done loading our objects we need to add the group to the scene.
  scene.addObject( group );
}
	
	
	var loader = new THREE.JSONLoader();
	loader.load("./objects/misc_chair01.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('images/wood2.jpg') }) );
	mesh.scale.set(25,25,25);
	mesh.position.x = 0;
	mesh.position.y = 8;
	mesh.position.z = 0;
	
	scene.add(mesh);
	});
	*/
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
    
	//Done adding shelf geometry
	
	//ADDING A SPHERE
	    var sphereGeometry = new THREE.SphereGeometry(2,10,10);
        var sphereMaterial = new THREE.MeshBasicMaterial({ map: loadAndRender('images/orange3.jpg') });
        var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);

        // position the sphere
        sphere.position.x= 30;
        sphere.position.y= 2;
        sphere.position.z= 0;
		
        // add the sphere to the scene
		//scene.add(sphere);

	//DONE ADDING SPHERE
	
	var Rboxes = new THREE.Geometry(); // Many Reeses boxes
var Rbox = new THREE.Mesh( new THREE.CubeGeometry(7.625,11,2.75) ); //1 example of Reeses box

	for (var t = 0; t <= 26; t+=13){
	for (var n = 0; n <= 16; n+=8){
	for (var i = 0; i < 7; i++) {
		Rbox.position.set(-32-n,6+t,-i*4);
		THREE.GeometryUtils.merge( Rboxes, Rbox );
	}}}
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
	//scene.add(RboxesMesh);

	
	
	var cereals = new THREE.Geometry();
	var cereal = new THREE.Mesh( new THREE.CubeGeometry(7.625,11,2.75) );
	
	for (var t = 0; t <= 26; t+=13){
	for (var n = 0; n <= 24; n+=8){
	for (var i = 0; i < 7; i++) {
		cereal.position.set(0-n,6+t,-i*4);
		THREE.GeometryUtils.merge( cereals, cereal );
	}}}
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
	//scene.add(cerealsMesh);

	var soupGeom = new THREE.Geometry();
	var soupLids = new THREE.Geometry();

	//var soupLid = new THREE.Mesh(circleGeometry(2,60));
	var soupLid = new THREE.Mesh(new THREE.CircleGeometry(2,60));
	//soupLid.rotation.set(Math.PI,0,0);
	var soup = new THREE.Mesh( new THREE.CylinderGeometry( 2, 2, 4.5, 60, 1, true ));

	var yRot = 0;
	var x = 0;
	var xoff = 7;

	for (var n = 0; n < 9; n+=4.5){
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			x = xoff+j*4.5;
			yRot = Math.random() * Math.PI;
			soup.position.set(x,3+n,-5*i);
			soup.rotation.set(0, yRot, 0);
			THREE.GeometryUtils.merge( soupGeom, soup );

			soupLid.position.set(x,5.25+n,-5*i);
			soupLid.rotation.set(3*Math.PI/2,0,yRot);
			THREE.GeometryUtils.merge( soupLids, soupLid );

			//soupLid.position.set(x,0,-5*i);
			//soupLid.rotation.set(0,yRot,0);
			THREE.GeometryUtils.merge( soupLids, soupLid );
		}
	}
	}
	
	var soupLidMesh = new THREE.Mesh(soupLids, new THREE.MeshPhongMaterial( { map: loadAndRender('images/soup_top.jpg') } ));
	soupLidMesh.castShadow = false;
	soupLidMesh.receiveShadow = true;
	//scene.add(soupLidMesh);
	
	var soupCanMesh = new THREE.Mesh(soupGeom, new THREE.MeshPhongMaterial( { map: loadAndRender('images/soup.jpg') } ));
	soupCanMesh.castShadow = false;
	soupCanMesh.receiveShadow = true;
	//scene.add(soupCanMesh);
*/
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
