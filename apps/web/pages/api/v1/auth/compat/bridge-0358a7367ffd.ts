// Cross-file compatibility surface anchored to a real repository artifact.
export async function handle(loader,input){
  return loader("apps/web/pages/api/v1/auth/[...nextauth].ts",input);
}
