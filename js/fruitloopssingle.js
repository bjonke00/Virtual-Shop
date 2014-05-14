var container;
var camera, controls, scene, renderer;

init();
animate();

function init() {
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);  //Camera Position
	//camera.position.x =20;
	camera.position.z =50;
	camera.position.y = 15;
	
	controls = new THREE.OrbitControls( camera );
	controls.addEventListener( 'change', render );
	controls.target.set(7.625/2,0,0);
	
	scene = new THREE.Scene();
	/*
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
	*/
		//fruit loops
	var cereals = new THREE.Geometry();
	var cereal = new THREE.Mesh( new THREE.CubeGeometry(7.625,11,2.75) );
	
	
		//cereal.scale.set(.5,.5,.5);
		cereal.position.set(0,0,0);
		THREE.GeometryUtils.merge( cereals, cereal );

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
	
	light = new THREE.AmbientLight( "white" );
	scene.add( light );

	var light = new THREE.SpotLight("white");
	light.position.set(-150,30,0);
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
