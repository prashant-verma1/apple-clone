import { useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';

export default function MaterialDebugger() {
  const { materials } = useGLTF('/models/macbook-14-transformed.glb');
  const [mats, setMats] = useState([]);
  
  useEffect(() => {
    if (!materials) return;
    const list = Object.entries(materials).map(([name, mat]) => {
      return { 
        name, 
        color: mat.color?.getHexString(), 
        metalness: mat.metalness, 
        roughness: mat.roughness 
      };
    });
    setMats(list);
  }, [materials]);

  return (
    <div id="mat-debug" style={{ position: 'absolute', top: 0, right: 0, zIndex: 9999, background: 'rgba(0,0,0,0.8)', color: 'white', fontSize: '12px', padding: '10px' }}>
      {mats.map(m => (
        <div key={m.name}>{m.name}: #{m.color} | M: {m.metalness} | R: {m.roughness}</div>
      ))}
    </div>
  );
}
