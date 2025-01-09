import * as THREE from "three";
import vertex from "./shaders/vertex.glsl";
import fragment from "./shaders/fragment.glsl";
import gsap from "gsap";

class MotionImages {
    constructor({ dom }) {
        this.time = 0;
        this.container = dom;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.images = [...document.querySelectorAll(".images img")];
        this.material = null;
        this.imagesStore = [];
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 100, 1000);
        this.camera.position.z = 200;
        this.camera.fov = 2 * Math.atan(this.height / 2 / 200) * (180 / Math.PI);

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        this.renderer.setPixelRatio(3);
        this.renderer.setSize(this.width, this.height);
        this.container.appendChild(this.renderer.domElement);

        this.addImages();
        this.resize();
        this.setUpResize();
        this.setPosition();
        this.hoverOverlinks();

        this.render();
    }

    addImages() {
        const textureLoader = new THREE.TextureLoader();
        const textures = this.images.map((img) => {
            return textureLoader.load(img.src);
        });

        const uniforms = {
            uTime: { value: 0 },
            uTimeLine : { value : 0.2 },
            uStartIndex : { value : 0},
            uEndIndex : { value : 1},
            uImage1: { value: textures[0] }, 
            uImage2: { value: textures[1] }, 
            uImage3: { value: textures[2] }, 
            uImage4: { value: textures[3] }, 
        };

        this.material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: true,
        });

        this.images.forEach((img, index) => {
            const bounds = img.getBoundingClientRect();
            const geometry = new THREE.PlaneGeometry(bounds.width, bounds.height);
            const mesh = new THREE.Mesh(geometry, this.material);
            this.scene.add(mesh);
            this.imagesStore.push({
                img: img,
                mesh: mesh,
                top: bounds.top,
                left: bounds.left,
                width: bounds.width,
                height: bounds.height,
            });
        });
    }

    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
        this.setPosition();
    }

    setUpResize() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    setPosition() {
        this.imagesStore.forEach((img) => {
            const bounds = img.img.getBoundingClientRect();
        });
    }

    hoverOverlinks() {
        const links = document.querySelectorAll(".links a");
        links.forEach((link , i) => {
            link.addEventListener("mouseover", (e) => {
                this.material.uniforms.uTimeLine.value = 0.0;

                gsap.killTweensOf(this.material.uniforms.uTimeLine);

                gsap.to(this.material.uniforms.uTimeLine, {
                    value : 4.0,
                    duration : 2,
                    onStart : () => {
                        this.uEndIndex = i;
                        this.material.uniforms.uStartIndex.value = this.uStartIndex;
                        this.material.uniforms.uEndIndex.value = this.uEndIndex;
                        this.uStartIndex = this.uEndIndex;
                    }
                })
            })
        })
    }

    render() {
        this.time += 0.02;
        this.material.uniforms.uTime.value = this.time;
        this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.render.bind(this));
    }
}

export default MotionImages;
