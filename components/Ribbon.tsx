import { useMemo, useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Mesh, ShaderMaterial } from "three";

const vertexShader = `
uniform float time;
uniform float offset;
varying vec2 vUv;
void main() {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    vec4 p = projectionMatrix * mvPosition;
    gl_Position = vec4(p.x,offset - 0.8 + p.y/20.0 + 0.1*sin(time*offset/10.0 + vUv.x*100.0),p.z,p.w);
}`;

const fragmentShader = `uniform float time;
varying vec2 vUv;
void main( void ) {
    vec2 position = vUv;

    gl_FragColor = vec4( vec3( 1.0 - position.x ), 1.0 );
}`;

const Ribbon: React.FC<{ offset: number }> = ({ offset }) => {
  const refMesh = useRef<Mesh>();
  const materialRef = useRef<ShaderMaterial>();

  useFrame(() => {
    if (!refMesh.current) return;
    if (!materialRef.current) return;
    materialRef.current.uniforms.time.value += 0.1;
  });

  const uniforms = useMemo(() => {
    return {
      time: { type: "f", value: 0 },
      offset: { type: "f", value: offset / 8.0 },
    };
  }, []);

  return (
    <mesh ref={refMesh} rotation={[0.1, 0.5, 0.1]}>
      <planeBufferGeometry attach="geometry" args={[15, 15, 15]} />
      <shaderMaterial
        attach="material"
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        ref={materialRef}
      />
    </mesh>
  );
};

export default Ribbon;
