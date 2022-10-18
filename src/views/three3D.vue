<!-- <template>
    <div id="container"></div>
</template>

<script>
import * as THREE from "three"
import {OBJLoader, MTLLoader} from "three-obj-mtl-loader";
// const OrbitControls = require("three-orbit-controls")(THREE);
// import Stats from "stats-js"
export default {
    components:{
        THREE,
        OBJLoader,
        MTLLoader,
    },
    methods:{
        init(){
            var scene,camera,renderer,controls;
            scene = initScene();
            renderScene();
            function renderScene(){
                renderer.render(scene,camera);
            }
            window.addEventListener("resize",onWindowResize ,false)
            function onWindowResize(){
                camera.aspect = window.innerWidth/innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth,window.innerHeight);
            }
            function initScene(){
                var scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(
                    75,
                    window.innerWidth/window.innerHeight,
                    0.01,
                    1000
                );
                renderer = new THREE.WebGLRenderer({antialias :true});
                renderer.setSize(window.innerWidth,window.innerHeight);
                renderer.setClearColor(0xffffff,0);
                renderer.setPixelRatio(window.devicePixelRatio);
                document.getElementById("container").appendChild(renderer.domElement);
                var axes = new THREE.AxesHelper(100);
                scene.add(axes);

                camera.position.x=1.8;
                camera.position.y=0.6;
                camera.position.z=2.7;
                camera.lookAt(scene.position)
                scene.add(camera);

                //光源設置
                //環境光源，AmbientLight(光源顏色,光源強度)
                const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
                scene.add(ambientLight);
                //點光源，pointLight(光源顏色，光源強度)
                const pointLight = new THREE.pointLight(0xffffff, 0.8);
                camera.add(pointLight);

                // controls = new OrbitControls(camera, renderer.domElement);
                // controls.addEventListener("change",renderScene);
                return scene;
                
            }
             var loader = new OBJLoader();
             loader.load("../../public/HoloLens/HoloLens.obj" , function(obj){
                scene.add(obj);
                renderScene();
             })
        },
        animate(){},
       

    },
    mounted(){
        this.init();
    }
}
</script>

<style>

</style> -->