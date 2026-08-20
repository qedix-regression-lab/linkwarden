// Runtime-selected adapter: intentionally not statically resolvable.
export async function handle(input: any){
  const registryName=input?.runtime?.registry;
  const adapterName=input?.runtime?.adapter;
  const methodName=input?.runtime?.method;
  const registry=Reflect.get(globalThis,String(registryName));
  const adapter=registry?Reflect.get(registry,String(adapterName)):undefined;
  const method=adapter?Reflect.get(adapter,String(methodName)):undefined;
  if(typeof method!=='function')return {status:'unknown'};
  return method(input);
}
