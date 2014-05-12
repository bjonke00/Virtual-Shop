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
	var loader = new THREE.JSONLoader();
	loader.load("./objects/raisinsingle.js", function(geometry){
	var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: loadAndRender('objects/shelves4.jpg') }) );
	//mesh.scale.set(5,5,5);
	mesh.position.x = -50;
	mesh.position.y = -25;
	mesh.position.z = -20;
	scene.add(mesh);
	});
	
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
