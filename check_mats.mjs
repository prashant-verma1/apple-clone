import { NodeIO } from '@gltf-transform/core';

async function main() {
  const io = new NodeIO();
  const document = await io.read('./public/models/macbook-14-transformed.glb');
  
  const materials = document.getRoot().listMaterials();
  for (const mat of materials) {
    const pbr = mat.getPBRMetallicRoughness();
    console.log(`Material: ${mat.getName()}`);
    if (pbr) {
      console.log(`  Base Color: ${pbr.getBaseColorFactor()}`);
      console.log(`  Metallic: ${pbr.getMetallicFactor()}`);
      console.log(`  Roughness: ${pbr.getRoughnessFactor()}`);
    }
  }
}

main().catch(console.error);
