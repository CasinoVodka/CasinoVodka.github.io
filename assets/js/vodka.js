const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 5;  // Камера по-прежнему достаточно близко к кубу

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(10, 10);  // Устанавливаем размер канваса 10px на 10px
document.body.appendChild(renderer.domElement);

// Позиционируем канвас в левом нижнем углу
renderer.domElement.style.position = 'fixed';
renderer.domElement.style.bottom = '0';
renderer.domElement.style.left = '0';

// Создаем куб
const geometry = new THREE.BoxGeometry(3, 3, 3);  // Размер куба
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Добавляем освещение
const light = new THREE.AmbientLight(0xffffff); // Ambient light
scene.add(light);

// Функция анимации
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();  // Запуск анимации

// Автоматическая подстройка размера при изменении окна
window.addEventListener('resize', () => {
    renderer.setSize(10, 10);  // Устанавливаем размер канваса снова на 10px на 10px
    camera.aspect = 1;  // Подгоняем аспект для сохранения пропорций
    camera.updateProjectionMatrix();
});
